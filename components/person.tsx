import React from 'react'
import Image from 'next/image'

type Props = {
    person: any,
}

const Person: React.FC<Props> = ({ person }) => {
    return (
        <div className="grid gap-6">
            <div className="picture md:mt-4 lg:mt-6">
                <Image
                    priority
                    className="w-28 sm:w-32 md:w-36 lg:w-44 rounded-full mx-auto outline outline-4 outline-offset-4"
                    src={person.picture}
                    alt="Jersyfi Profile Picture"
                    width={200}
                    height={200}
                />
            </div>

            <div>
                <h1 className="mb-4">{'@' + person.nickname}</h1>
                <h2>{person.displayname}</h2>
                <p className="mb-2 text-gray-500">{person.text}</p>
            </div>
        </div>
    )
}

export default Person