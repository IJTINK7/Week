import React from 'react';
import {PagesType} from "../../dataState/DataState";

type PropsType ={
	pages: Array<PagesType>
}
export const Page = (props:PropsType) => {
	return (
		<div>
			Main page
		</div>
	);
};