import React from 'react';

type AddFormType={
	addFilm: () => void;
}
export const AddForm = (props: AddFormType) => {
	const [filmTitle, setFilmTitle] = useState("");
	const [filmTitle, setFilmTitle] = useState("");
	const addFilmHandler = () => {
		props.addFilm()
	}
	return (
		<div>
			<button>ADD FILM</button>
			<div>
				<input type="text" />
				<input type="text"/>
				<button onClick={addFilmHandler}>ADD</button>
			</div>
		</div>
	);
};
