import React from 'react';
import { useForm } from 'react-hook-form';
import './post.css';

function Post() {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		fetch('https://tutorial-roach.herokuapp.com/api/createpost', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((response) => {
			console.log(response);
		});
	};

	return (
		<div className="content">
			<form onSubmit={handleSubmit(onSubmit)} className="post-form">
				<textarea
					{...register('content', { required: true })}
					className="text-entry"
				></textarea>
				<button className="submit-button">Submit</button>
			</form>
		</div>
	);
}

export default Post;
