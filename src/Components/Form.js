import React from 'react';
const Form = props =>(

	<form onSubmit={props.getRecipe}>
	<input type="text" name="recipeName"/>
	<button>Get Recipes</button>
	</form>
	);
	export default Form;