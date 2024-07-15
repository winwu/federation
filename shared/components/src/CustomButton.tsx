import React from 'react';
import "./CustomButton.css";

const CustomButton = (props: React.PropsWithChildren<{ id: string; onClick: React.MouseEventHandler<HTMLButtonElement> }>) => {

    return (
        <button id={props.id} className="s-btn" onClick={props.onClick}>{props.children}</button>
    )
}
export default CustomButton;