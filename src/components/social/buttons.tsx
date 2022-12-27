import React from 'react'

type Props = {
    children: React.ReactNode
}

const Buttons: React.FC<Props> = ({ children }) => {
    return (
        <div className="grid gap-4">
            {children}
        </div>
    )
}

export default Buttons