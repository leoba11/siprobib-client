import React from "react";

const messageStyle = {
    'color': 'red',
    'marginTop': '8px'
}

const TextError = props => {
    return (
        <div style={messageStyle}>
            {props.children}
        </div>
    );
};

export default TextError;