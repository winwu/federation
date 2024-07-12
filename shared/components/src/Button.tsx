import * as React from 'react';

const CustomButton = () => {
    return (
        <button onClick={(e) => {
            e.preventDefault();
        }}>This is a shared component</button>
    )
}
export default CustomButton;