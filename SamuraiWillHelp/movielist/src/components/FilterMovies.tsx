import React from 'react';

type PropsType = {
	filter: string
}

export const FilterMovies = (props: PropsType) => {
	return (
		<div>
			<select name="select">
				<option value="all" >All Genre</option>
				<option value="drama" >Drama</option>
				<option value="crime">Crime</option>
				<option value="action">Action</option>
				<option value="military">Military</option>
				<option value="fantasy">Fantasy</option>
			</select>
			<span>Selected genre: {props.filter}</span>
		</div>
	);
};
