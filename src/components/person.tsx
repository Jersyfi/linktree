import React from 'react'
import Image from 'next/image'

type Props = {
    person: any,
}

const Person: React.FC<Props> = ({ person }) => {
    return (
        <div className="grid gap-6">
            <div className="md:mt-4 lg:mt-6">
                <div className="w-fit mx-auto rounded-full border-solid border-4 border-tamarillo-900 animate-[glow_3s_ease-in-out_infinite_alternate]">
                    <Image
                        priority
                        className="inline-block rounded-full w-28 sm:w-32 md:w-36 mx-0 lg:w-44 border-solid border-4 border-transparent"
                        src={person.picture}
                        alt="Jersyfi Profile Picture"
                        width={200}
                        height={200}
                    />
                </div>
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