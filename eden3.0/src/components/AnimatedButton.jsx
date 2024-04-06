import { useState } from "react";
import normalButton from '../assets/button_normal.svg';
import hoveredButton from '../assets/button_hover.svg';
import pressedButton from '../assets/button_pressed.svg';

const AnimatedButton = () => {
    const [buttonState, setButtonState] = useState(0);

    const handleClick = () => {
        setButtonState(2);
        // console.log("click");
    };

    const onPointerEnter = () => {
        setButtonState(2);
        // console.log("enter");
    };

    const onPointerExit = () => {
        setButtonState(0);
        // console.log("exit");
    };

    const onPointerUp = () => {
        setButtonState(0);

        // console.log("up");
    };

    return (
        <a href="" onPointerEnter={onPointerEnter} onPointerLeave={onPointerExit} onPointerDown={handleClick} onPointerUp={onPointerUp} className=" relative z-[2] outline-none flex items-center box-border">
            {buttonState == 0 && <img src={normalButton} alt="Button" className="touch-none pointer-events-none" />}
            {buttonState == 1 && <img src={hoveredButton} alt="Button" className="touch-none pointer-events-none" />}
            {buttonState == 2 && <img src={pressedButton} alt="Button" className="touch-none pointer-events-none" />}
        </a>
    );
};

export default AnimatedButton;
