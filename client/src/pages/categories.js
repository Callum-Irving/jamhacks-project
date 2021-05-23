import React from 'react';
import './categories.css';

class Categories extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}

	componentDidMount = async () => {
		fetch('https://tutorial-roach.herokuapp.com/api/getposts')
			.then((response) => {
				if (response.ok) return response.json();
			})
			.then((json) => {
				this.setState({
					posts: json.posts,
				});
			});
	};

	render() {
		return (
			<div className="content category-grid">
				<h1>All Posts</h1>
				<ul className="posts">
					{this.state.posts.map((listitem) => (
						<li key={listitem[0]}>{listitem[1]}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Categories;
