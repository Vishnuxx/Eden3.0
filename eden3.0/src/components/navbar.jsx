import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg"

function NavBar() {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const openDrawer = () => {
		setIsOpen(!isOpen);
	};

	const menuItems = [
		{ text: "Home", url: "#" },
		{ text: "About Us", url: "#about" },
		{ text: "prize", url: "#prize" },
		{ text: "Contact Us", url: "#contact" },
		{ text: "Agenda", url: "#agenda" },
	];
	return (
		<nav className="flex flex-row justify-between h-[90px] w-full z-50 text-white shadow-sm fixed top-0 left-0 md:px-20 bg-gradient-to-b from-[#000000] to-transparant transition-all duration-300">
			<div className="flex flex-row w-fit items-center">
				<Link scroll={true} href={"#"}>
					<img src={logo} className="w-[200px] h-[70px] object-cover" alt="logo" />
				</Link>
			</div>
			{isOpen && (
				<div className="md:hidden flex flex-col items-center justify-center ">
					<div onClick={openDrawer} className="w-full h-screen top-0 left-0 md:hidden bg-black absolute bg-opacity-[0.8] backdrop:blur-lg"></div>
					<div className="flex flex-col border border-[#FF9F2F]  rounded-b-xl  w-full  h-fit min-h-[50%] fixed top-0 right-0 gap-0 py-10 justify-center items-center">
						<div className="flex md:hidden flex-row w-fit items-center">
							<img src={logo} className="w-[200px] h-[70px] object-cover" alt="logo" />
							{/* <h4 className="font-bold text-3xl">Matrix</h4> */}
						</div>
						{menuItems.map((value, index) => (
							<a href={value.url} onClickCapture={openDrawer} className="text-md text-center hover:text-orange-300 md:border-0 p-4 py-6 md:p-0  flex items-center justify-center h-full cursor-pointer w-full hover:bg-gray md:hover:bg-[#ffffff00] md:hover:text-primary" key={index} onClick={() => navigate(value.url)}>
								{value.text}
							</a>
						))}
					</div>
				</div>
			)}

			<div className=" flex-row hidden md:flex w-full max-w-[600px] justify-around items-center">
				{menuItems.map((value, index) => (
					<Link to={value.url} onClickCapture={openDrawer} className="text-md hover:text-orange-300 text-center  border-b border-gray md:border-0 p-4 py-6 md:p-0  flex items-center justify-center h-full cursor-pointer w-full hover:bg-gray md:hover:bg-[#ffffff00] md:hover:text-primary" key={index} onClick={() => navigate(value.url)}>
						{value.text}
					</Link>
				))}
			</div>

			<div onClick={openDrawer} className="w-[100px] md:hidden flex flex-col items-center justify-center z-50">
				<img width="24" height="24" src="https://img.icons8.com/material-sharp/24/FF9F2F/menu--v1.png" alt="menu--v1" />
			</div>

			<div className="md:flex flex-row w-fit gap-3 h-50 hidden items-center">
				{/* <ButtonPrimary className="text-md font-normal" text="Login" onClick={() => navigate(APP_ROUTES.login)}></ButtonPrimary>
				<ButtonPrimary text="Register" onClick={() => navigate(APP_ROUTES.signup)}></ButtonPrimary> */}
			</div>
		</nav>
	);
}

export default NavBar;
