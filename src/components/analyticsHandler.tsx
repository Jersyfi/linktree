import React, { useEffect, useState } from 'react'
import { useCookifyProvider } from 'react-cookify'
import { Analytics } from '@vercel/analytics/react'

const AnalyticsHandler: React.FC = () => {
    const {consentObject, consentTracking} = useCookifyProvider()
    const [useAnalytics, setUseAnalytics] = useState(false)

    useEffect(() => {
        setUseAnalytics(consentObject.data['analytics'])
    }, [consentTracking])

    return (
        <>
            { useAnalytics && (
                <Analytics />
            )}
        </>
    )
}

export default AnalyticsHandler