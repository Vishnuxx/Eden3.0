import NavBar from "../components/navbar";
import eden_white from "../assets/eden_white.svg";
import eden_l2 from "../assets/eden_l2.svg";
import eden_outlined from "../assets/eden_outlined.svg";
import cyber_punk from "../assets/cyberpunk_bg.jpg";
import normalButton from "../assets/button_normal.svg";
import pressedButton from "../assets/button_pressed.svg";
import hoveredButton from "../assets/button_hover.svg";
import design1_r from "../assets/design1_r.svg";
import design1_l from "../assets/design1_l.svg";
import { useRef, useState } from "react";
import AboutPage from "./About.Page";

function LandingPage() {
	return (
		<div className="w-full h-full scroll-smooth">
			<NavBar></NavBar>
			<div id="#" className="w-full h-full flex flex-col justify-center items-center relative">
				<a href="/" />
				<img src={cyber_punk} alt="cyberpunk" className="w-full absolute h-full  object-cover" />
				<div className="w-full h-full absolute bg-black opacity-90"></div>
				<img src={eden_l2} alt="eden" className="w-full absolute" />
				<div className="relative w-full flex flex-col items-center top-[50px] z-[1]">
					<img src={eden_white} alt="eden" className="w-full h-fit object-fill z-[1]  " />
					<p className="text-white text-xs md:text-lg ">Innovate Collaborate Transform </p>
					<div className="flex w-full justify-center items-center">
						<img src={design1_l} alt="eden" className="w-fit h-fit object-fill z-[1]  " />
						<AnimatedButton></AnimatedButton>
						<img src={design1_r} alt="eden" className="w-fit h-fit object-fill z-[1]  " />
					</div>

					{/* <img src={button_normal} alt="" className="" />
						<img src={button_pressed} alt="" className="" /> */}
				</div>
				<img src={eden_outlined} alt="eden" className="w-[300px] h-fit object-fill absolute bottom-0" />
			</div>
			<AboutPage></AboutPage>
			<footer className="w-full min-h-[400px] bg-[#181818] flex flex-col items-center justify-center">
				<img src={eden_white} alt="" className="w-[300px] h-fit object-fill" />
			</footer>
		</div>
	);
}

export default LandingPage;

const AnimatedButton = () => {
	const [buttonState, setButtonState] = useState(0);

	const handleClick = () => {
		setButtonState(2);
		console.log("click");
	};

	const onPointerEnter = () => {
		setButtonState(2);
		console.log("enter");
	};

	const onPointerExit = () => {
		setButtonState(0);
		console.log("exit");
	};

	const onPointerUp = () => {
		setButtonState(0)
		console.log("up");
	};

	return (
		<a href="" onPointerEnter={onPointerEnter} onPointerLeave={onPointerExit} onPointerDown={handleClick} onPointerUp={onPointerUp} className=" relative z-[2] outline-none flex items-center box-border">
			{buttonState == 0 && <img src={normalButton} alt="Button" className="touch-none pointer-events-none" />}
			{buttonState == 1 && <img src={hoveredButton} alt="Button" className="touch-none pointer-events-none" />}
			{buttonState == 2 && <img src={pressedButton} alt="Button" className="touch-none pointer-events-none" />}
		</a>
	);
};
