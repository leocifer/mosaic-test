import React, { useState } from 'react'
import './TabContent.scss'

import TabHeader from './TabHeader'
import TodoContainer from './TodoContainer'
import ToReadContainer from './ToReadContainer'

const TabContent = () => {
	const [currentTab, setCurrentTab] = useState(1)

	const handleTabChange = (value) => {
		setCurrentTab(value)
	}
	return (
		<div>
			<TabHeader currentTab={currentTab} onChange={handleTabChange} />
			{currentTab === 1 ? <TodoContainer /> : <ToReadContainer />}
		</div>
	)
}

export default TabContent
