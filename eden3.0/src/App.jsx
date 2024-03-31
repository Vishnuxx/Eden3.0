import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./screens/Landingpage";
import AboutPage from "./screens/About.Page";
import eden_white from "./assets/eden_white.svg";

function App() {
	return (
		<BrowserRouter>
			<LandingPage></LandingPage>
			<AboutPage></AboutPage>
			<footer className="w-full min-h-[400px] bg-[#181818] flex flex-col items-center justify-center">
		<img src={eden_white} alt="" className="w-[300px] h-fit object-fill"/>
			</footer>
		</BrowserRouter>
	);
}

export default App;
