import Layout from '../components/layout';
import Main from '../components/main'
import Person from '../components/person'
import Social from '../components/social'
import Buttons from '../components/social/buttons';
import Icons from '../components/social/icons';
import Icon from '../components/social/icon'
import Footer from '../components/footer'
import Button from '../components/social/button';
import Seo from '../components/seo';

export default function Home() {
    const linktree = {
        person: {
            picture: "/img/profilbild.jpg",
            wallpaper: "/img/wallpaper.jpg",
            nickname: "Jersyfi",
            fullname: "Jérôme Bastian Winkel",
            displayname: "J. B. Winkel",
            text: "LXXIV LXVI LXXXVII",
            website: 'https://jersyfi.de/',
            profiles: [
                'https://www.instagram.com/jersyfi/',
                'https://www.youtube.com/@jersyfi',
                'https://www.linkedin.com/in/j%C3%A9r%C3%B4me-bastian-winkel-570385233/',
            ],
        },
        social: {
            buttons: [
                {
                    text: "Website mit Infos & Dienstleistungen",
                    link: "https://jersyfi.de/",
                },
                {
                    text: "Jobprofil auf LinkedIn",
                    link: "https://www.linkedin.com/in/j%C3%A9r%C3%B4me-bastian-winkel-570385233/",
                },
                {
                    text: "Tweets zu Kontroversen Themen",
                    link: "https://twitter.com/jersyfi",
                },
                {
                    text: "Community Projekt SaltyKids",
                    link: "https://saltykids.de/",
                },
            ],
            icons: [
                {
                    type: "Steam",
                    link: "https://steamcommunity.com/id/Jersyfi/",
                },
                {
                    type: "Instagram",
                    link: "https://www.instagram.com/jersyfi/",
                },
                {
                    type: "Spotify",
                    link: "https://open.spotify.com/user/jersyfi",
                },
                {
                    type: "Snapchat",
                    link: "https://www.snapchat.com/add/jersyfi",
                },
                {
                    type: "YouTube",
                    link: "https://www.youtube.com/@jersyfi",
                },
            ]
        },
    }

    return (
        <>
            <Seo person={linktree.person}/>

            <Layout>
                <Main>
                    <Person person={linktree.person} />

                    <Social>
                        <Buttons>
                            {linktree.social.buttons.map((item, index) => (
                                <Button
                                    key={index}
                                    button={item}
                                />
                            ))}
                        </Buttons>

                        <Icons>
                            {linktree.social.icons.map((item, index) => (
                                <Icon
                                    key={index}
                                    icon={item}
                                />
                            ))}
                        </Icons>
                    </Social>
                </Main>

                <Footer />
            </Layout>
        </>
    )
}
