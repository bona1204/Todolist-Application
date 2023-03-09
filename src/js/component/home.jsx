import React , {useState, useEffect}from "react";

//include images into your bundle
import "../../styles/todolist.css"

const paperstyle={
	width:"700px",
	marginTop:"20px",
	border:"1px",
	borderColor:"lightgrey",
	borderStyle:"solid",
	background: "#fff",
  boxShadow:
    "0 1px 1px rgba(0,0,0,0.15),0 10px 0 -5px #eee,0 10px 1px -4px rgba(0,0,0,0.15),0 20px 0 -10px #eee,0 20px 1px -9px rgba(0,0,0,0.15)",
    paddingVerticalñ: "30px",
	fontSize:"30px",
}

const inputstyle={
	border:"0px",
	outline: "none",
}

const buttonstyle={
	background: "transparent",
	border:"0px",
}
const itemstyle={
	border: "1px",
	borderStyle:"solid",
	borderColor:"transparent",
	borderBottomColor:"lightgrey",
}
//create your first component
const Home = () => {
	const [arrTemp, setArrTemp]=useState([])
	const eliminarTarea=(indice)=>{
	setArrTemp(arrTemp.filter((item,index)=>{
		return index!=indice
	}))	
	}
	useEffect(()=>{console.log("se reenderizo"),{arrTemp}})
	return (
		<div className="container-fluid justify-content align-item-center" style={paperstyle}>
			<div className="row d-flex justify-content-center">
			<input style={inputstyle} 
			placeholder="What needs to be done?"
			onKeyDown={(e)=>{
				if(e.keyCode=="13"){
					setArrTemp([...arrTemp, e.target.value])
				}
			}}
			/>
			<hr/>
			</div>
			<div className="row d-flex justify-content-center">
				{arrTemp && arrTemp.length>0? 
				<>{arrTemp.map((item,index)=>{return(
				<li key={index} style={itemstyle} className="justify-content-between d-flex">
					{item}
					<button className="ocultar" type="button" style={buttonstyle} onClick={()=>{
						eliminarTarea(index)
					}}>
						X
					</button>
				</li>
				)})}</>
				:
				<><h1>No tasks, add a task</h1></>
				}
			</div>
		</div>
	);
};

export default Home;
