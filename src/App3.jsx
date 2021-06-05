import React from 'react'

function App()
{
	const [status,setstaus]=React.useState(false)
	// [false,function]

	return <div>
		<button onClick={e=>setstaus(true)}>all</button>
		<button onClick={e=>setstaus(false)}>none</button>
		<br/>
		<br/>
		<br/>
		<input checked={status} type="checkbox"/>
		<input checked={status} type="checkbox"/>
		<input checked={status} type="checkbox"/>
		<input checked={status} type="checkbox"/>
		<input checked={status} type="checkbox"/>
		<input checked={status} type="checkbox"/>
		<input checked={status} type="checkbox"/>
		<input checked={status} type="checkbox"/>
		<input checked={status} type="checkbox"/>
		<input checked={status} type="checkbox"/>
		<input checked={status} type="checkbox"/>
	</div>
}	
export default App