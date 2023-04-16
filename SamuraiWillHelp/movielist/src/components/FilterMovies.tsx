import React from 'react';

const FilterMovies = () => {
	return (
		<div>
			<select name="select">
				<option value="all" selected>All Genre</option>
				<option value="drama" >Drama</option>
				<option value="crime">Crime</option>
				<option value="action">Action</option>
				<option value="military">Military</option>
				<option value="fantasy">Fantasy</option>
			</select>
		</div>
	);
};

export default FilterMovies;