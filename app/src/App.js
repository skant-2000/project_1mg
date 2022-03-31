
import "./App.css";
import { RouteComponents } from "./Routes/RouteComponents";
import Login from './components/compoLogin/Login'
import Signup from './components/compoLogin/signup';
function App() {
	return (
		<div className="App">
    
			<RouteComponents />
			<Login />
			<Signup />
		</div>
	);
}

export default App;
