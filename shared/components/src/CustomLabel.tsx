import * as React from 'react';
import "./CustomLabel.css";

const CustomLabel = (props: React.PropsWithChildren<{htmlFor?: string}>) => {
    return (
        <label {...(props?.htmlFor ? {htmlFor: props.htmlFor} : {})} className='s-label'>{props.children}</label>
    )
}

export default CustomLabel;