import React from 'react'

type Props = {
    children: React.ReactNode
}

const Main: React.FC<Props> = ({ children }) => {
    return (
        <main className="grow content-start grid gap-8 text-center">
            {children}
        </main>
    )
}

export default Main