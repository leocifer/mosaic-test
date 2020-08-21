import React, { useState, useEffect } from 'react'

import { useSpring, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp'
import ArrowBackSharpIcon from '@material-ui/icons/ArrowBackSharp'

const Todo = ({ todo }) => {
	const [bind, { delta, down }] = useGesture()
	const [isComplete, setIsComplete] = useState(todo.completed)

	const { x, bg, size } = useSpring({
		x: down ? delta[0] : 0,
		bg: `linear-gradient(120deg, ${
			delta[0] < 0 ? '#96fbc4 0%, #f9f586' : '#f093fb 0%, #f5576c'
		} 100%)`,
		size: down ? 1.1 : 1,
		immediate: (name) => down && name === 'x',
	})

	useEffect(() => {
		delta[0] < 0 ? setIsComplete(true) : setIsComplete(false)
	}, [delta])
	return (
		<animated.div {...bind()} className='item' style={{ background: bg }}>
			<animated.div
				className='fg'
				style={{
					transform: interpolate(
						[x, size],
						(x, s) => `translate3d(${x}px,0,0) scale(${s})`
					),
					// background: bg,
				}}
			>
				<div className='todo'>
					<div className='content'>
						<div className='title'>{todo.title}</div>
						<div className='subtitle'>{todo.subtitle}</div>
						<div className='time'>{todo.time}</div>
					</div>
					<div
						className='icon'
						style={{
							background: isComplete
								? 'linear-gradient(120deg, #96fbc4 0%, #f9f586 100%)'
								: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)',
						}}
					>
						{isComplete ? (
							<CheckCircleOutlineSharpIcon />
						) : (
							<ArrowBackSharpIcon />
						)}
					</div>
				</div>
			</animated.div>
		</animated.div>
	)
}

export default Todo
