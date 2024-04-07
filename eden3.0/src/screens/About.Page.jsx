/* eslint-disable react/prop-types */
import first_prize from "../assets/first_prize.svg";
import second_prize from "../assets/second_prize.svg";
import third_prize from "../assets/third_prize.svg";
import eden_box from "../assets/Eden_Box 2.svg";
import mulearnlogo from "../assets/mulearn.png";
import inspiralogo from "../assets/inspira_horizontal_black.svg";
import { useState } from "react";

function AboutPage() {
	return (
		<div id="about" className="w-full h-fit flex flex-col justify-center items-center  relative text-white p-5">
			<h3 id="#sponsors" className="text-3xl font-bold py-20">
				Our Sponsors
			</h3>

			<div className="w-full flex flex-row justify-center font-sans font-bold text-3xl gap-20 text-white items-center h-[150px]  py-10 bg-gradient-to-r from-[#000000] via-[#262626]  to-black ">
				<marquee direction="">
				<div className="flex gap-20 items-center overflow-x-scroll ">
					<img src={mulearnlogo} alt="mulearn" className="h-[150px]" />
					<img src={inspiralogo} alt="mulearn" className="h-[80px] object-contain" />
				</div>
				</marquee>
			</div>

			<p className="w-full flex flex-col justify-center items-center max-w-[1000px] word-nowrap text-wrap align-middle leading-[2rem] pt-20 text-[#FF9F2F] md:text-xl">Dive into innovation at EDEN 3.0! Join us for a thrilling software hackathon, hosted by Marian Engineering College in collaboration with IEDC and μLearn. In a rapidly evolving industry landscape, working hand-in-hand with industry leaders is key. EDEN 3.0 is your chance to tackle real-world industry challenges, connect with mentors, and showcase your skills to recruiters. Don't miss this opportunity to shape the future—join us at EDEN 3.0!</p>
			<h3 id="prize" className="text-3xl font-bold py-20">
				Prize Pool
			</h3>
			<div className="w-full flex flex-col justify-center items-center">
				<div className="flex flex-col w-full max-w-[1000px] h-fit">
					<img src={first_prize} alt="first prize" />
					<img src={second_prize} alt="second prize" />
					<img src={third_prize} alt="third prize" />
				</div>
			</div>

			<div className="border border-[#FF9F2F] max-w-[1000px] h-fit min-h-[300px] w-full rounded-md flex flex-col  justify-around ">
				<div className="w-full h-full flex flex-col">
					<h3 id="contact" className="text-3xl font-bold py-10">
						Contact Us
					</h3>
					<div className="w-full max-w-[1000px] flex flex-col justify-center">
						<p className="w-full flex flex-col justify-center items-center max-w-[1000px] word-nowrap text-wrap align-middle leading-[2rem]  text-[#FF9F2F] md:text-xl">
							Contact details
						</p>
					</div>
				</div>

				<div className="w-full h-full flex flex-col">
					<h3 id="venue" className="text-3xl font-bold py-10">
						Venue
					</h3>
					<div className="w-full max-w-[1000px] flex flex-col items-center justify-center py-10">
						<p className="w-full flex flex-col justify-center items-center max-w-[1000px] word-nowrap text-wrap align-middle leading-[2rem]  text-[#FF9F2F] md:text-xl">
							Marian IEDC Hall , Mechanical Department
						</p>
					</div>
				</div>
			</div>

			<p id="faq" className="text-3xl font-bold py-20 h-fit text-white">
				FAQ
			</p>

			<div className={`w-full max-w-[1000px] flex flex-col items-center justify-center `}>
				{/* <img src={eden_box} alt="df" className="w-full h-full" /> */}
				<Accordion></Accordion>
			</div>
		</div>
	);
}


function AccordionItem({ title, content, isOpen, toggleAccordion }) {
	return (
		<div className="border border-[#ff9e30] rounded mb-2 w-full p-4 transition-all duration-500">
			<div className="p-2 cursor-pointer flex justify-between items-center text-gray" onClick={toggleAccordion}>
				<h2 className="font-bold text-lg text-start">{title}</h2>
				{isOpen ? <span>▲</span> : <span>▼</span>}
			</div>
			<div className={`p-2 w-full text-start transition-all ${isOpen ? "visible h-fit" : "hidden h-0"}`}>{content}</div>
		</div>
	);
}

function Accordion() {
	const [accordionItems, setAccordionItems] = useState([
		{
			title: "What is a Eden3.0?",
			content: "Eden3.0 is a hackathon conducted by Marian IEDC Inspira",
			isOpen: false,
		},
		{
			title: "What's the duration of Eden3.0?",
			content: "Eden3.0 is 24hr long software hackathon.",
			isOpen: false,
		},
		{
			title: "Can we build Hardware products?",
			content: "Eden3.0 primarily focuses on building software solutions.",
			isOpen: false,
		},
		{
			title: "Is it an offline hackathon",
			content: "Yes, Eden 3.0 is an offline hackathon which will be conducted at Marian engineering college.",
			isOpen: false,
		},
		{
			title: "Is it free to register",
			content: "No, Eden3.0 is a paid event.",
			isOpen: false,
		},
		{
			title: "Is food included in the registration fees?",
			content: "Yes, participants can opt for the option with food..",
			isOpen: false,
		},
	]);

	const toggleAccordionItem = (index) => {
		const updatedAccordionItems = [...accordionItems];
		updatedAccordionItems[index].isOpen = !updatedAccordionItems[index].isOpen;
		setAccordionItems(updatedAccordionItems);
	};

	return (
		<div className="w-full">
			{accordionItems.map((item, index) => (
				<AccordionItem key={index} title={item.title} content={item.content} isOpen={item.isOpen} toggleAccordion={() => toggleAccordionItem(index)} />
			))}
		</div>
	);
}


export default AboutPage;