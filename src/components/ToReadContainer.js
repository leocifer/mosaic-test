import React from 'react'
import toreads from '../data/toread.json'
import ToRead from './ToRead'

const ToReadContainer = () => {
	return (
		<div className='toread-container'>
			{toreads.map((toread) => {
				return <ToRead key={toread.id} toread={toread}></ToRead>
			})}
		</div>
	)
}

export default ToReadContainer
