import React from 'react'

function App()
{
	const [a,seta]=React.useState(["html","css","javascript"])

	const insert=e=>{
		let newOne=prompt()

		seta([...a,newOne])
	}
	const del=i=>{
		seta(  a.filter((item,index) =>i!==index )  )
	}
	return <div>
		
		<button onClick={insert}>add more skills</button>

		{a.map((item,index) =>
			<div>
				{index+1}: 
				{item} 
				<input type="checkbox" /> 
				<button onClick={e=>del(index)}>-</button>
			</div>

		)}
	</div>
}
export default App