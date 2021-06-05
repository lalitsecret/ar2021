import React from 'react'

function App()
{

	const [a,seta]=React.useState([])

	// a=[]
	// seta=function
	// seta()

	const insert= () =>{
		seta( [ ...a ,"html",'css',"js"] )
	}
	return <div>

		<button onClick={insert}>add more</button>
		<ul>
			{a.map(item=>
				<li>{item}</li>
			)}
		</ul>
	</div>
}
export default App