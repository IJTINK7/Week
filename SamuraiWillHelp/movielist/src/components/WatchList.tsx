import React from 'react';

export type PropsType = {
	movies: Array<WatchListPropsType>;
	title: string;
	removeMovies: (id: string) => void
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
			<h3>{props.title}</h3>
			<ul>
				{props.movies.map((el) => {
					const deleteElementHandler = () => {
						props.removeMovies(el.id)
					}
					return(
						<li key={el.id}>
							<input type="checkbox" checked={el.watched}/>
							{`${el.name} --- Rating: ${el.rating}`}
							<button onClick={deleteElementHandler}>x</button>
						</li>
					);
				})}
			</ul>

		</div>
	);
};
