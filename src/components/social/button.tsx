import React from 'react';
import Image from 'next/image'

type Props = {
    button: any,
}

type IconElemProps = {
    type: string,
}

type BadgeElemProps = {
    badge: string,
}

const IconElem: React.FunctionComponent<IconElemProps> = ({ type }) => {
    var element = null

    if (type) {
        element = (
            <div className="hidden sm:block absolute p-2 m-1 top-0 bottom-0 left-0 h-fit rounded-full bg-black shadow-md">
                <Image
                    className="h-[24px] w-[24px] invert"
                    src={"/icons/" + type.toLowerCase() + ".svg"}
                    alt={type}
                    height={24}
                    width={24}
                />
            </div>
        )
    }

    return element
}

const BadgeElem: React.FunctionComponent<BadgeElemProps> = ({ badge }) => {
    var element = null

    if (badge) {
        element = (
            <span className="sm:absolute sm:px-4 sm:top-0 sm:bottom-0 sm:right-0 ml-2 sm:ml-0 sm:my-auto h-fit">
                <span className="px-2.5 py-0.5 bg-black rounded-full shadow-md">
                    New
                </span>
            </span>
        )
    }

    return element
}

const Button: React.FC<Props> = ({ button }) => {
    return (
        <a href={button.link} target="_blank" rel="noreferrer">
            <button className="relative w-full bg-tamarillo-900 text-white font-semibold rounded-full shadow-md hover:bg-tamarillo-700 focus:outline-none focus:ring-2 focus:ring-tamarillo-600 focus:ring-opacity-75" type="button">
                <IconElem type={button.type} />
                <div className="py-3 px-4">
                    {button.text}
                    <BadgeElem badge={button.badge} />
                </div>
            </button>
        </a>
    )
}

export default Button