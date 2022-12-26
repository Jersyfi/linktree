import React from 'react'

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="cover bg-no-repeat bg-cover bg-center text-white">
            <div className="container px-2 py-4 sm:px-4 sm:py-8 max-w-screen-sm min-h-screen flex flex-col flex-nowrap gap-8">
                {children}
            </div>
        </div>
    )
}

export default Layout