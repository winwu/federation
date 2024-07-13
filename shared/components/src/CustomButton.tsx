import React from 'react';

const CustomButton = (props: React.PropsWithChildren<{ id: string; onClick: React.MouseEventHandler<HTMLButtonElement> }>) => {

    return (
        <button id={props.id} onClick={props.onClick}>{props.children}</button>
    )
}
export default CustomButton;