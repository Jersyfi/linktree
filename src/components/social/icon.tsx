import React from 'react';
import Image from 'next/image'

type Props = {
    icon: any,
}

const Icon: React.FC<Props> = ({ icon }) => {
    const iconClasses = {
        steam: "p-2 bg-gradient-steam rounded-full shadow-md hover:bg-steam-500 focus:outline-none focus:ring-2 focus:ring-steam-400 focus:ring-opacity-75",
        instagram: "p-2 bg-gradient-instagram rounded-full shadow-md hover:bg-instagram-400 focus:outline-none focus:ring-2 focus:ring-instagram-300 focus:ring-opacity-75",
        spotify: "p-2 bg-spotify-500 rounded-full shadow-md hover:bg-spotify-300 focus:outline-none focus:ring-2 focus:ring-spotify-400 focus:ring-opacity-75",
        snapchat: "p-2 bg-snapchat-500 rounded-full shadow-md hover:bg-snapchat-200 focus:outline-none focus:ring-2 focus:ring-snapchat-300 focus:ring-opacity-75",
        youtube: "p-2 bg-youtube-600 rounded-full shadow-md hover:bg-youtube-400 focus:outline-none focus:ring-2 focus:ring-youtube-500 focus:ring-opacity-75",
        github: "p-2 bg-github-700 rounded-full shadow-md hover:bg-github-600 focus:outline-none focus:ring-2 focus:ring-github-700 focus:ring-opacity-75",
    }

    const getIconClass = (type: string, iconClasses: any) => {
        if (iconClasses.hasOwnProperty(type)) {
            return iconClasses[type]
        } else {
            return "p-2 bg-gray-50 rounded-full shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
        }
    }

    return (
        <a href={icon.link} target="_blank">
            <button className={getIconClass(icon.type.toLowerCase(), iconClasses)}>
                <div className="h-8 w-8 flex">
                    <Image
                        src={"/icons/" + icon.type.toLowerCase() + ".svg"}
                        alt={icon.type}
                        height={32}
                        width={32}
                    />
                </div>
            </button>
        </a>
    )
}

export default Icon