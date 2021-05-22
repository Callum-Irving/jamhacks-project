import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<ul className="Navbar">
			<Link to="/">Home</Link>
			<Link to="/post">Post</Link>
		</ul>
	);
}

export default Navbar;
