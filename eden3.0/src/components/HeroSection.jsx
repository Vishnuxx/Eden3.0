import cyber_punk from "../assets/cyberpunk_bg.jpg";
import eden_l2 from "../assets/eden_l2.svg";
import eden_white from "../assets/eden_white.svg";
import design1_r from "../assets/design1_r.svg";
import design1_l from "../assets/design1_l.svg";
import AnimatedButton from "./AnimatedButton";

const HeroSection = () => (
	<div id="home" className="w-full h-full flex flex-col justify-center items-center relative">
		<img src={cyber_punk} alt="cyberpunk" className="w-full absolute h-full object-cover" />
		<div className="w-full h-full absolute bg-black opacity-90"></div>
		<img src={eden_l2} alt="eden" className="w-full absolute" />
		<div className="relative w-full flex flex-col items-center top-[50px] z-[1]">
			<img src={eden_white} alt="eden" className="w-full h-fit object-fill z-[1]" />
			<p className="text-white text-xs md:text-lg">Innovate Collaborate Transform</p>
			<div className="flex w-full justify-center items-center">
				<img src={design1_l} alt="eden" className="w-fit h-fit object-fill z-[1]" />
				<AnimatedButton />
				<img src={design1_r} alt="eden" className="w-fit h-fit object-fill z-[1]" />
			</div>
		</div>
	</div>
);

export default HeroSection;
