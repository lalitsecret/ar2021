import React from 'react'

function App()
{
	const [x,setx]=React.useState(0)
	// React.useState(0)=[0,function]
	// x=0
	// setx=function
	// setx() will change x
	// this will update 

	// console.log(React.useState(420))



	const p1=() => setx(x+1)
	const p2=() => setx(x-1)
	const p3=() => setx(0)
	const p4=() => alert(x)

	return <div>
		<h1>counter : {x}</h1>
		<button onClick={ e => p1()}>+</button>
		<button onClick={ e => p2()}>-</button>
		<button onClick={ e => p3()}>0</button>
		<button onClick={ e => p4()}>view</button>
	</div>

}
export default App