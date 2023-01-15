import Image from 'next/image'

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear()
    }

    return (
        <footer className="text-center">
            <p className="mb-2 text-gray-500 text-sm">
                &copy;{getCurrentYear()} Jersyfi
            </p>

            <a href="https://jersyfi.de">
                <Image
                    className="h-8 mx-auto"
                    src="/img/JERSYFI.svg"
                    alt="Jersyfi Schriftzug"
                    height={32}
                    width={128}
                />
            </a>
        </footer>
    )
}

export default Footer
