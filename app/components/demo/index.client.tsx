'use client'

import React, { useRef, useState, useEffect } from 'react'
import './index.css'
// import useAntDash from './hooks/demo'

const roundedRect = (
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	width: number,
	height: number,
	radius: number
) => {
	ctx.beginPath()
	ctx.moveTo(x, y + radius)
	ctx.lineTo(x, y + height - radius)
	ctx.quadraticCurveTo(x, y + height, x + radius, y + height)
	ctx.lineTo(x + width - radius, y + height)
	ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius)
	ctx.lineTo(x + width, y + radius)
	ctx.quadraticCurveTo(x + width, y, x + width - radius, y)
	ctx.lineTo(x + radius, y)
	ctx.quadraticCurveTo(x, y, x, y + radius)
	ctx.stroke()
}

const Home: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	// const { antDash, refreshFrameInterval } = useAntDash()
	// const [dashOffset, setDashOffset] = React.useState(0)
	// const [frameCount, setFrameCount] = React.useState(0)

	// const antDash = (
	// 	ctx: CanvasRenderingContext2D,
	// 	canvas: HTMLCanvasElement
	// ) => {
	// 	setFrameCount((pre) => pre + 1)
	// 	setDashOffset((pre) => pre + 1)

	// 	if (frameCount % frameInterval === 0) {
	// 		if (dashOffset > 16) {
	// 			setDashOffset(0)
	// 		}
	// 		ctx.clearRect(0, 0, canvas.width, canvas.height)
	// 		ctx.setLineDash([4, 2])
	// 		ctx.lineDashOffset = -dashOffset
	// 		ctx.strokeRect(10, 10, 100, 100)
	// 	}

	// 	window.requestAnimationFrame(() => {
	// 		antDash(ctx, canvas)
	// 	})
	// }

	function drawStar(ctx: CanvasRenderingContext2D, r: number) {
		ctx.save()
		ctx.beginPath()
		ctx.moveTo(r, 0)
		for (var i = 0; i < 9; i++) {
			ctx.rotate(Math.PI / 5)
			if (i % 2 == 0) {
				ctx.lineTo((r / 0.525731) * 0.200811, 0)
			} else {
				ctx.lineTo(r, 0)
			}
		}
		ctx.closePath()
		ctx.fill()
		ctx.restore()
	}

	const draw = () => {
		const canvas = canvasRef.current as HTMLCanvasElement
		const ctx = canvas?.getContext('2d')

		if (!ctx) return

		// 空心矩形
		// ctx.fillRect(25, 25, 100, 100)
		// ctx.clearRect(45, 45, 60, 60)
		// ctx.strokeRect(50, 50, 50, 50)

		// 三角形
		// ctx.beginPath() // 起始一条路径，或重置当前路径
		// ctx.moveTo(75, 50) // 把路径移动到画布中的指定点，不创建线条
		// ctx.lineTo(100, 75) // 添加一个新点，然后在画布中创建从该点到最后指定点的线条
		// ctx.lineTo(100, 25) // 添加一个新点，然后在画布中创建从该点到最后指定点的线条
		// ctx.fill() // 填充当前绘图（路径）

		// 填充三角形
		// ctx.beginPath()
		// ctx.moveTo(25, 25)
		// ctx.lineTo(105, 25)
		// ctx.lineTo(25, 105)
		// ctx.fill()

		// 描边三角形
		// ctx.beginPath()
		// ctx.moveTo(125, 125)
		// ctx.lineTo(125, 45)
		// ctx.lineTo(45, 125)
		// ctx.closePath()
		// ctx.stroke()

		//  笑脸🙂
		// ctx.beginPath()
		// ctx.arc(75, 75, 50, 0, Math.PI * 2, true) // 绘制
		// ctx.moveTo(110, 75)
		// ctx.arc(75, 75, 35, 0, Math.PI, false) // 口 (顺时针)
		// ctx.moveTo(65, 65)
		// ctx.arc(60, 65, 5, 0, Math.PI * 2, true) // 左眼
		// ctx.moveTo(95, 65)
		// ctx.arc(90, 65, 5, 0, Math.PI * 2, true) // 右眼
		// ctx.stroke()

		// 多种圆/圆弧
		// for (let i = 0; i < 4; i++) {
		// 	for (let j = 0; j < 3; j++) {
		// 		ctx.beginPath()
		// 		var x = 25 + j * 50 // x coordinate
		// 		var y = 25 + i * 50 // y coordinate
		// 		var radius = 20 // Arc radius
		// 		var startAngle = 0 // Starting point on circle
		// 		var endAngle = Math.PI + (Math.PI * j) / 2 // End point on circle
		// 		var clockwise = i % 2 == 0 ? false : true // clockwise or anticlockwise
		// 		ctx.arc(x, y, radius, startAngle, endAngle, clockwise)
		// 		if (i > 1) {
		// 			ctx.fill()
		// 		} else {
		// 			ctx.stroke()
		// 		}
		// 	}
		// }

		// 二次贝塞尔曲线 💬
		// ctx.beginPath()
		// ctx.moveTo(75, 25)
		// ctx.quadraticCurveTo(25, 25, 25, 62.5)
		// ctx.quadraticCurveTo(25, 100, 50, 100)
		// ctx.quadraticCurveTo(50, 120, 30, 125)
		// ctx.quadraticCurveTo(60, 120, 65, 100)
		// ctx.quadraticCurveTo(125, 100, 125, 62.5)
		// ctx.quadraticCurveTo(125, 25, 75, 25)
		// ctx.stroke()

		//三次贝塞尔曲线 🖤
		// ctx.beginPath()
		// ctx.moveTo(75, 40)
		// ctx.bezierCurveTo(75, 37, 70, 25, 50, 25)
		// ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5)
		// ctx.bezierCurveTo(20, 80, 40, 102, 75, 120)
		// ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5)
		// ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25)
		// ctx.bezierCurveTo(85, 25, 75, 37, 75, 40)
		// ctx.fill()

		// 吃豆人
		/*
		roundedRect(ctx, 12, 12, 150, 150, 15)
		roundedRect(ctx, 19, 19, 150, 150, 9)
		roundedRect(ctx, 53, 53, 49, 33, 10)
		roundedRect(ctx, 53, 119, 49, 16, 6)
		roundedRect(ctx, 135, 53, 49, 33, 10)
		roundedRect(ctx, 135, 119, 25, 49, 10)

		ctx.beginPath()
		ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false)
		ctx.lineTo(31, 37)
		ctx.fill()

		for (var i = 0; i < 8; i++) {
			ctx.fillRect(51 + i * 16, 35, 4, 4)
		}

		for (i = 0; i < 6; i++) {
			ctx.fillRect(115, 51 + i * 16, 4, 4)
		}

		for (i = 0; i < 8; i++) {
			ctx.fillRect(51 + i * 16, 99, 4, 4)
		}

		ctx.beginPath()
		ctx.moveTo(83, 116)
		ctx.lineTo(83, 102)
		ctx.bezierCurveTo(83, 94, 89, 88, 97, 88)
		ctx.bezierCurveTo(105, 88, 111, 94, 111, 102)
		ctx.lineTo(111, 116)
		ctx.lineTo(106.333, 111.333)
		ctx.lineTo(101.666, 116)
		ctx.lineTo(97, 111.333)
		ctx.lineTo(92.333, 116)
		ctx.lineTo(87.666, 111.333)
		ctx.lineTo(83, 116)
		ctx.fill()

		ctx.fillStyle = 'white'
		ctx.beginPath()
		ctx.moveTo(91, 96)
		ctx.bezierCurveTo(88, 96, 87, 99, 87, 101)
		ctx.bezierCurveTo(87, 103, 88, 106, 91, 106)
		ctx.bezierCurveTo(94, 106, 95, 103, 95, 101)
		ctx.bezierCurveTo(95, 99, 94, 96, 91, 96)
		ctx.moveTo(103, 96)
		ctx.bezierCurveTo(100, 96, 99, 99, 99, 101)
		ctx.bezierCurveTo(99, 103, 100, 106, 103, 106)
		ctx.bezierCurveTo(106, 106, 107, 103, 107, 101)
		ctx.bezierCurveTo(107, 99, 106, 96, 103, 96)
		ctx.fill()

		ctx.fillStyle = 'black'
		ctx.beginPath()
		ctx.arc(101, 102, 2, 0, Math.PI * 2, true)
		ctx.fill()

		ctx.beginPath()
		ctx.arc(89, 102, 2, 0, Math.PI * 2, true)
		ctx.fill()
		*/

		// 多个图形
		// var rectangle = new Path2D();
		// rectangle.rect(10, 10, 50, 50);
		// var circle = new Path2D();
		// circle.moveTo(125, 35);
		// circle.arc(100, 35, 25, 0, 2 * Math.PI);
		// ctx.stroke(rectangle);
		// ctx.fill(circle);

		// fillStyle - 调色盘
		// for (var i = 0; i < 6; i++) {
		// 	for (var j = 0; j < 6; j++) {
		// 		ctx.fillStyle =
		// 			'rgb(' +
		// 			Math.floor(255 - 42.5 * i) +
		// 			',' +
		// 			Math.floor(255 - 42.5 * j) +
		// 			',0)'
		// 		ctx.fillRect(j * 25, i * 25, 25, 25)
		// 	}
		// }

		// strokeStyle - 调色盘
		// for (var i = 0; i < 6; i++) {
		// 	for (var j = 0; j < 6; j++) {
		// 		ctx.strokeStyle =
		// 			'rgb(0,' +
		// 			Math.floor(255 - 42.5 * i) +
		// 			',' +
		// 			Math.floor(255 - 42.5 * j) +
		// 			')'
		// 		ctx.beginPath()
		// 		ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true)
		// 		ctx.stroke()
		// 	}
		// }

		// 蚂蚁线
		// antDash(ctx, canvas)

		// 多种line
		// for (var i = 0; i < 10; i++) {
		// 	ctx.lineWidth = 1 + i
		// 	ctx.beginPath()
		// 	ctx.moveTo(5 + i * 14, 5)
		// 	ctx.lineTo(5 + i * 14, 140)
		// 	ctx.stroke()
		// }

		// 三种lineCap
		/*
		const lineCap: CanvasLineCap[] = ['butt', 'round', 'square']
		// 创建路径
		ctx.strokeStyle = '#09f'
		ctx.lineWidth = 1
		ctx.beginPath()
		ctx.moveTo(10, 10)
		ctx.lineTo(140, 10)
		ctx.moveTo(10, 140)
		ctx.lineTo(140, 140)
		ctx.stroke()
		// 画线条
		ctx.strokeStyle = 'black'
		for (var i = 0; i < lineCap.length; i++) {
			ctx.lineWidth = 15
			ctx.lineCap = lineCap[i]
			ctx.beginPath()
			ctx.moveTo(25 + i * 50, 10)
			ctx.lineTo(25 + i * 50, 140)
			ctx.stroke()
		}
		*/

		// 三种lineJoin
		// const lineJoin: CanvasLineJoin[] = ['round', 'bevel', 'miter']
		// ctx.lineWidth = 10
		// for (var i = 0; i < lineJoin.length; i++) {
		// 	ctx.lineJoin = lineJoin[i]
		// 	ctx.beginPath()
		// 	ctx.moveTo(-5, 5 + i * 40)
		// 	ctx.lineTo(35, 45 + i * 40)
		// 	ctx.lineTo(75, 5 + i * 40)
		// 	ctx.lineTo(115, 45 + i * 40)
		// 	ctx.lineTo(155, 5 + i * 40)
		// 	ctx.stroke()
		// }

		// 填文本
		// ctx.font = '48px serif'
		// ctx.fillText('Hello world', 10, 50)

		// save 和 restore 的应用例子
		/*
		
		ctx.fillRect(0, 0, 150, 150); // 使用默认设置绘制一个矩形
		ctx.save(); // 保存默认状态
	
		ctx.fillStyle = "#09F"; // 在原有配置基础上对颜色做改变
		ctx.fillRect(15, 15, 120, 120); // 使用新的设置绘制一个矩形
	  
		ctx.save(); // 保存当前状态
		ctx.fillStyle = "#FFF"; // 再次改变颜色配置
		ctx.globalAlpha = 0.5;
		ctx.fillRect(30, 30, 90, 90); // 使用新的配置绘制一个矩形
	  
		ctx.restore(); // 重新加载之前的颜色状态
		ctx.fillRect(45, 45, 60, 60); // 使用上一次的配置绘制一个矩形
	  
		ctx.restore(); // 加载默认颜色配置
		ctx.fillRect(60, 60, 30, 30); // 使用加载的配置绘制一个矩形
		 */

		// canvas 的移动
		// for (var i = 0; i < 3; i++) {
		// 	for (var j = 0; j < 3; j++) {
		// 		ctx.save()
		// 		ctx.fillStyle = 'rgb(' + 51 * i + ', ' + (255 - 51 * i) + ', 255)'
		// 		ctx.translate(10 + j * 50, 10 + i * 50)
		// 		ctx.fillRect(0, 0, 25, 25)
		// 		ctx.restore()
		// 	}
		// }

		// canvas 的旋转
		/*
		// left rectangles, rotate from canvas origin
		ctx.save()
		// blue rect
		ctx.fillStyle = '#0095DD'
		ctx.fillRect(30, 30, 100, 100)
		ctx.rotate((Math.PI / 180) * 25)
		// grey rect
		ctx.fillStyle = '#4D4E53'
		ctx.fillRect(30, 30, 100, 100)
		ctx.restore()

		// right rectangles, rotate from rectangle center
		// draw blue rect
		ctx.fillStyle = '#0095DD'
		ctx.fillRect(150, 30, 100, 100)

		ctx.translate(200, 80) // translate to rectangle center
		// x = x + 0.5 * width
		// y = y + 0.5 * height
		ctx.rotate((Math.PI / 180) * 25) // rotate
		ctx.translate(-200, -80) // translate back

		// draw grey rect
		ctx.fillStyle = '#4D4E53'
		ctx.fillRect(150, 30, 100, 100)
		*/

		//  canvas 的缩放
		/*
		
		// draw a simple rectangle, but scale it.
		ctx.save()
		ctx.scale(10, 3)
		ctx.fillRect(1, 10, 10, 10)
		ctx.restore()
		// mirror horizontally
		ctx.scale(-1, 1)
		ctx.font = '48px serif'
		ctx.fillText('MDN', -135, 120)
		 */

		// 变形矩阵
		// var sin = Math.sin(Math.PI / 6)
		// var cos = Math.cos(Math.PI / 6)
		// ctx.translate(100, 100)
		// var c = 0
		// for (var i = 0; i <= 12; i++) {
		// 	c = Math.floor((255 / 12) * i)
		// 	ctx.fillStyle = 'rgb(' + c + ',' + c + ',' + c + ')'
		// 	ctx.fillRect(0, 0, 100, 10)
		// 	ctx.transform(cos, sin, -sin, cos, 0, 0)
		// }
		// ctx.setTransform(-1, 0, 0, 1, 100, 100)
		// ctx.fillStyle = 'rgba(255, 128, 255, 0.5)'
		// ctx.fillRect(0, 50, 100, 100)

		
		// canvas的裁剪
		/*
		ctx.fillRect(0, 0, 150, 150)
		ctx.translate(75, 75)
		// Create a circular clipping path
		ctx.beginPath()
		ctx.arc(0, 0, 60, 0, Math.PI * 2, true)
		ctx.clip()
		// draw background
		var lingrad = ctx.createLinearGradient(0, -75, 0, 75)
		lingrad.addColorStop(0, '#232256')
		lingrad.addColorStop(1, '#143778')
		ctx.fillStyle = lingrad
		ctx.fillRect(-75, -75, 150, 150)
		// draw stars
		for (var j = 1; j < 50; j++) {
			ctx.save()
			ctx.fillStyle = '#fff'
			ctx.translate(
				75 - Math.floor(Math.random() * 150),
				75 - Math.floor(Math.random() * 150)
			)
			drawStar(ctx, Math.floor(Math.random() * 4) + 2)
			ctx.restore()
		}
		*/
	}

	useEffect(() => {
		draw()
	}, [])

	return (
		<div
			className='wrapper'
			style={{
				width: '820px',
				height: '600px',
				overflow: 'auto',
				scrollbarWidth: 'none',
				border: '1px solid',
				msOverflowStyle: 'none',
				paddingRight: '7px',
				paddingBottom: '7px',
			}}
		>
			<canvas
				ref={canvasRef}
				width='1200'
				height='1200'
			></canvas>
		</div>
	)
}

export default Home
