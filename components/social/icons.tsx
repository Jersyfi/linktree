import React from 'react'

type Props = {
    children: React.ReactNode
}

const Icons: React.FC<Props> = ({ children }) => {
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {children}
        </div>
    )
}

export default Icons