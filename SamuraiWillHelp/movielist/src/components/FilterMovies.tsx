import React, {ChangeEvent} from 'react';

type PropsType = {
	filter: string;
	genreFilter: (filterValue: string) => void;
}

export const FilterMovies = (props: PropsType) => {
	const genreFilterHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		props.genreFilter(e.currentTarget.value)
	}
	return (
		<div>
			<select onChange={genreFilterHandler}>
				<option value="All">All Genre</option>
				<option value="Drama">Drama</option>
				<option value="Crime">Crime</option>
				<option value="Action">Action</option>
				<option value="Military">Military</option>
				<option value="Fantasy">Fantasy</option>
			</select>
			<span> Selected genre: {props.filter}</span>
		</div>
	);
};
