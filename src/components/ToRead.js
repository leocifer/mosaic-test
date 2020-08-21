import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
const ToRead = ({ toread }) => {
	return (
		<div className='toread'>
			<div
				className='front'
				style={{
					backgroundImage: `url(${toread.img})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<span>{toread.id < 10 ? `0${toread.id}` : toread.id}</span>
			</div>
			<div className='back'>
				<a href={toread.url} target='_blank' rel='noopener noreferrer'>
					<span>{toread.title}</span>
					<ArrowForwardIosIcon />
				</a>
			</div>
		</div>
	)
}

export default ToRead
