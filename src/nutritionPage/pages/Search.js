import React from 'react'
import '../Foods.css';

const Search = (props) => {
	const { onSearch } = props;

	const onChange = (e) => {
		onSearch(e.target.value);
	}

	return (
		<div className="container search-display">
			<div class="InputContainer">
				<input placeholder="Search.." id="input" class="input" name="text" type="text" onChange={onChange} />
			</div>
		</div>
	)
}

export default Search