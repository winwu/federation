import * as React from 'react';

const CustomLabel = (props: React.PropsWithChildren<{htmlFor?: string}>) => {
    return (
        <label {...(props?.htmlFor ? {htmlFor: props.htmlFor} : {})}>{props.children}</label>
    )
}

export default CustomLabel;