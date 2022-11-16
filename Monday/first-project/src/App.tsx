import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
	console.log("App rendering");
	return (
		<div className="App">
			<AppTitle title={"Hello, samurai! Let's go!"}/>
			<AppTitle title={"Hi, samurai!"}/>
			Article 1
			<Rating value={3}/>
			<Accordion titleValue={"Navigate"} collapsed={true}/>
			<Accordion titleValue={"Menu"} collapsed={false}/>
			<Accordion titleValue={"Books"} collapsed={true}/>
			Article 2
			<Rating value={5}/>
		</div>
	);
}

type AppTitlePropsType = {
	title: string
}

function AppTitle(props: AppTitlePropsType) {
	return <h1>{props.title}</h1>
}

export default App;
