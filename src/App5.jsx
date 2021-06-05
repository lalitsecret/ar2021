import React from 'react'

function App()
{
	const [a,seta]=React.useState(["html","css","javascript"])
	const [b,setb]=React.useState([])

	const insert=e=>{
		let newOne=prompt()

		seta([...a,newOne])
	}
	const del=i=>{
		seta(  a.filter((item,index) =>i!==index )  )
	}

	const p1=item=>{
		setb([...b,item])
	}
	return <div>
		
		<button onClick={insert}>add more skills</button>

		{a.map((item,index) =>
			<div>
				{index+1}: 
				{item} 
				<input onClick={e=>p1(item)} type="checkbox" /> 
				<button onClick={e=>del(index)}>-</button>
			</div>
		)}

		<h2>selected {b.length}</h2>
		<ul>
			{b.map((item,index) =>
				<li>{index+1}: {item} <button>-</button></li>
			)}
		</ul>
	</div>
}
export default App