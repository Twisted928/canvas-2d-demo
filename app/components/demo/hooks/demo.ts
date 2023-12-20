import { useCallback, useEffect, useRef, useState } from 'react'

let requestId = null

const useAntDash = (interval?: number) => {
	const dashOffsetRef = useRef(0)
	const frameCountRef = useRef(0)
	const requestIdRef = useRef<number>(NaN)

	const [_frameInterval, setFrameInterval] = useState<number>(interval || 8)

	const refreshFrameInterval = (frameInterval: number | any) => {
		if (typeof frameInterval === 'number') {
			setFrameInterval(frameInterval)
		} else if (typeof frameInterval === 'function') {
			setFrameInterval((pre) => frameInterval(pre))
		}
		return
	}

	const antDash = useCallback(
		(
			ctx: CanvasRenderingContext2D,
			canvas: HTMLCanvasElement,
			frameInterval?: number | undefined
		) => {
			const frameCount = frameCountRef.current + 1
			const dashOffset = dashOffsetRef.current + 1

			frameCountRef.current = frameCount
			dashOffsetRef.current = dashOffset

			if (frameCount % _frameInterval === 0) {
				if (dashOffset > 16) {
					dashOffsetRef.current = 0
				}
				ctx.clearRect(0, 0, canvas.width, canvas.height)
				ctx.setLineDash([4, 2])
				ctx.lineDashOffset = -dashOffset
				ctx.strokeRect(10, 10, 100, 100)
			}

			requestIdRef.current = window.requestAnimationFrame(() =>
				antDash(ctx, canvas, _frameInterval)
			)
		},
		[_frameInterval]
	)

	return { antDash, refreshFrameInterval }
}

export default useAntDash
