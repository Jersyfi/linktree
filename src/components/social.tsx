import React from 'react'

type Props = {
    children: React.ReactNode
}

const Social: React.FC<Props> = ({ children }) => {
    return (
        <div className="grid gap-6">
            {children}
        </div>
    )
}

export default Social