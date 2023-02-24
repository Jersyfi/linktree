import '../styles/dist.css'
import type { AppProps } from 'next/app'
import { CookifyConsent } from 'react-cookify'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CookifyConsent settings={{
            options: {
                store: 'storage',
                types: {
                    analytics: false
                },
                revision: 1
            },
            consent: {
                theme: 'custom',
                force: true,
                info: {
                    title: 'Wir verwenden Cookies!',
                    desc: 'Willkommen! Um Ihr Erlebnis zu verbessern, verwenden wir Cookies und halten uns an die GDPR.',
                    buttons: [
                        {
                            action: 'manage',
                            label: 'Cookies Verwalten',
                            schema: 'week'
                        },
                        {
                            action: 'all',
                            label: 'Alle Cookies akzeptieren',
                            schema: 'strong'
                        }
                    ]
                },
                detail: {
                    title: 'Cookie Einstellungen verwalten',
                    desc: 'Wir möchten, dass Ihr Besuch auf unserer Website so angenehm wie möglich ist. Deshalb verwenden wir Cookies, um Ihnen die bestmögliche Erfahrung zu bieten und um Ihre Präferenzen zu speichern. Sie können Ihre Cookie-Einstellungen jederzeit ändern.',
                    reference: false,
                    buttons: [
                        {
                            action: 'necessary',
                            label: 'Nur notwendige',
                            schema: 'week'
                        },
                        {
                            action: 'accept',
                            label: 'Ausgewählte akzeptieren',
                            schema: 'week'
                        },
                        {
                            action: 'all',
                            label: 'Alle Cookies akzeptieren',
                            schema: 'strong'
                        }
                    ]
                },
                table: {
                    types: [
                        {
                            for: 'necessary',
                            title: 'Zwingend notwendige',
                            desc: 'Zwingend notwendige Cookies sind unerlässlich für die Funktion unserer Webseite und ermöglichen grundlegende Features. Ohne diese Cookies können wir die Funktionalität unserer Webseite nicht gewährleisten.',
                        },
                        {
                            for: 'analytics',
                            title: 'Zum Analysieren',
                            desc: 'Analytische Cookies helfen uns, das Nutzerverhalten auf unserer Webseite zu verstehen und unsere Seite kontinuierlich zu verbessern. Diese Cookies sammeln anonymisierte Informationen darüber, wie Besucher unsere Webseite nutzen, z.B. welche Seiten am häufigsten besucht werden oder welche Fehlermeldungen auftreten. Die Daten, die durch analytische Cookies gesammelt werden, dienen ausschließlich der Verbesserung der Nutzererfahrung und werden nicht an Dritte weitergegeben.',
                        }
                    ]
                },
            }
        }}>
            <Component {...pageProps} />
            <Analytics />
        </CookifyConsent>
    )
}
