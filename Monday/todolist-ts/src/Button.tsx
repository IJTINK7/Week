import React from "react";
type ButtonType ={
	name: string;
	callBack: ()=> void;
}
export const Button = (props: ButtonType) =>{
	const activateCallBack = () => {
		console.log('Activate')
	}
	return(
		<div>
			<button onClick={activateCallBack} >{props.name}</button>
		</div>
	);
}