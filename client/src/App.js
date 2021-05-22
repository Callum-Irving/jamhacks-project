import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Post from './pages/post';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/post">
					<Post />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
