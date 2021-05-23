import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import Post from './pages/post';
import Categories from './pages/categories';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/categories" component={Categories} />
				<Route path="/post" component={Post} />
			</Switch>
		</div>
	);
}

export default App;
