import React from 'react';

export type PropsType = {
	movies: Array<WatchListPropsType>;
}

type WatchListPropsType ={
	id: string;
	name: string;
	watched:boolean;
	rating: number;
}
export const WatchList = (props:PropsType) => {
	return (
		<div>
			<h3></h3>
			<ul>
				{props.movies.map((el) => {
					return(
						<li key={el.id}>
							<input type="checkbox" checked={el.watched}/>
							{`${el.name} --- Rating: ${el.rating}`}
						</li>
					);
				})}
			</ul>

		</div>
	);
};
