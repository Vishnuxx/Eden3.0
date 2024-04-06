import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./screens/Landingpage";
import AboutPage from "./screens/About.Page";
import eden_white from "./assets/eden_white.svg";

function App() {
	return (
		<BrowserRouter>
			<LandingPage></LandingPage>
		
		</BrowserRouter>
	);
}

export default App;
