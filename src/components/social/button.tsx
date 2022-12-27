import React from 'react';

type Props = {
    button: any,
}

const Button: React.FC<Props> = ({ button }) => {
    return (
        <a href={button.link} target="_blank">
            <button className="w-full py-3 px-4 bg-tamarillo-900 text-white font-semibold rounded-full shadow-md hover:bg-tamarillo-700 focus:outline-none focus:ring-2 focus:ring-tamarillo-600 focus:ring-opacity-75" type="button">
                {button.text}
            </button>
        </a>
    )
}

export default Button