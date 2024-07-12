import * as React from 'react';

const CustomButton = () => {
    return (
        <button onClick={(e) => {
            e.preventDefault();
        }}>This is a Custom button</button>
    )
}
export default CustomButton;