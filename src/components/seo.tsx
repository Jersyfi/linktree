import React from 'react'
import { NextSeo, SocialProfileJsonLd, LogoJsonLd } from 'next-seo';

type Props = {
    person: any,
}

const Seo: React.FC<Props> = ({ person }) => {
    const title = () => {
        return "@" + person.nickname + " Linktree"
    }

    const description = () => {
        return "Übersicht aller Social Media Accounts von @" + person.nickname
    }

    const alt = () => {
        return person.nickname + " Linktree"
    }

    return (
        <>
            <NextSeo
                title={title()}
                description={description()}
                themeColor="#83110F"
                canonical="https://linktr.jersyfi.de/"
                openGraph={{
                    url: 'https://linktr.jersyfi.de/',
                    type: 'profile',
                    title: title(),
                    description: description(),
                    images: [
                        {
                            url: "https://linktr.jersyfi.de" + person.wallpaper,
                            width: 800,
                            height: 600,
                            alt: alt(),
                            type: 'image/jpeg',
                        },
                    ],
                    siteName: 'Linktree by Jersyfi',
                }}
                twitter={{
                    handle: '@jersyfi',
                    site: '@jersyfi',
                    cardType: 'website',
                }}
                additionalLinkTags={[
                    {
                        rel: 'shortcut icon',
                        href: '/favicon-32x32.png',
                    },
                    {
                        rel: 'apple-touch-icon',
                        href: '/apple-touch-icon.png',
                        sizes: '180x180'
                    },
                    {
                        rel: 'icon',
                        href: '/favicon-32x32.png',
                        sizes: '32x32'
                    },
                    {
                        rel: 'icon',
                        href: '/favicon-16x16.png',
                        sizes: '16x16'
                    }
                ]}
            />

            <SocialProfileJsonLd
                type="Person"
                name={person.fullname}
                url={person.website}
                sameAs={person.profiles}
            />

            <LogoJsonLd
                logo="https://linktr.jersyfi.de/logo.png"
                url="https://jersyfi.de/"
            />
        </>
    )
}

export default Seo