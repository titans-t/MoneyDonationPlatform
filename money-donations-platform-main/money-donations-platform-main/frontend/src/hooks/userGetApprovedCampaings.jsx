import React, { useEffect, useState } from 'react'

export const userGetApprovedCampaings = () => {
    const [loading, setLoading] = useState(false)
    const [campaigns, setCampaigns] = useState()

    useEffect(() => {
        async function getApprovedCampaigns() {
            setLoading(true)
            try {
                const res = await fetch("http://localhost:5000/api/campaign/campaigns", {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await res.json()
                if (data.message) {
                    throw new Error(data.message)
                }
                setCampaigns(data)
              
            } catch (error) {

                console.log(error.message);

            } finally {
                setLoading(false)
            }
        }
        getApprovedCampaigns()
    }, [])
    return { loading, campaigns }
}
