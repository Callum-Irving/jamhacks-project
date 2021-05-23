import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className="navbar">
			<Link to="/" className="home-link">
				<h1>TutorialRoach</h1>
			</Link>
			<ul className="link-group">
				<Link to="/categories">
					<button className="navlink">Categories</button>
				</Link>
				<Link to="/post">
					<button className="navlink">Post</button>
				</Link>
			</ul>
		</div>
	);
}

export default Navbar;
