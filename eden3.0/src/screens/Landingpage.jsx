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
import gsap from "gsap";
import {  useRef } from "react";

function LandingPage() {
	
	return (
		<>
			<NavBar></NavBar>
			<div id="#" className="w-full h-full flex flex-col justify-center items-center relative">
				<a  href="/" />
				<img  src={cyber_punk} alt="cyberpunk" className="w-full absolute h-full  object-cover" />
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
		</>
	);
}

export default LandingPage;

const AnimatedButton = () => {
	const buttonRef = useRef(null);

	const handleClick = () => {
		gsap.to(buttonRef.current, {
			attr: { src: pressedButton },
		});
	};

	const onPointerEnter = () => {
		gsap.to(buttonRef.current, {
			attr: { src: hoveredButton },
		});
	}

	const onPointerExit = () => {
		gsap.to(buttonRef.current, {
			attr: { src: normalButton },
		});
	};

	const onPointerUp = () => {
		gsap.to(buttonRef.current, {
			attr: { src: normalButton },
		});
	};

	return (
		<a href="" onPointerEnter={onPointerEnter} onPointerLeave={onPointerExit} onPointerDown={handleClick} onPointerUp={onPointerUp} className=" relative z-[2] outline-none flex items-center box-border">
			<img ref={buttonRef}  src={normalButton} alt="Button" className="touch-none pointer-events-none" />
		</a>
	);
};
