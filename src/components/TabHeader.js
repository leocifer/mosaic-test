import React from 'react'

const TabHeader = ({ currentTab, onChange }) => {
	return (
		<div className='tab-header'>
			<div
				onClick={() => onChange(1)}
				className={`tab ${currentTab === 1 ? 'active' : ''}`}
			>
				To Do
			</div>
			<div
				onClick={() => onChange(2)}
				className={`tab ${currentTab !== 1 ? 'active' : ''}`}
			>
				To Read
			</div>
		</div>
	)
}

export default TabHeader
