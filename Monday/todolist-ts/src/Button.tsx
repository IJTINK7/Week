import React from "react";
type ButtonType ={
	name: string;
	callBack: ()=> void;
}
export const Button = (props: ButtonType) =>{
	const activateCallBack = () => {
		props.callBack()
	}
	return(
		<span>
			<button onClick={activateCallBack} >{props.name}</button>
		</span>
	);
}