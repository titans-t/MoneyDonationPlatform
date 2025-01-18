import React, { useState } from 'react'
import UserSideBar from '../../../components/sidebar/Usersidebar';
import { Campaign } from '../../../components/campaign/campaign';
import { UserCampaign } from '../../../components/campaign/UserCampaign';
import { Usermobilesidebar } from '../../../components/sidebar/Usermobilesidebar';
import { userCreateCampaign } from '../../../hooks/userCreateCampaign';
import { userMyCampaigns } from '../../../hooks/userMyCampaigns';
import { MyCampaings } from '../../../components/campaign/MyCampaings';


export const CreatesCampaign = () => {
    const { myAllCampaigns, loading1 } = userMyCampaigns()
 
    let total = 0
    if (myAllCampaigns != undefined) {
        if (myAllCampaigns.length > 0) {
            total = myAllCampaigns?.reduce((prev, curr) => {
                return prev + (curr?.currentAmount || 0);
            }, 0);
        }

    }






    const [campaignCreator, setCampaignCreator] = useState({
        fullName: "",
        purpose: "",
        goalAmount: "",
        place: "",
        address: "",
        reason: ""
    })
    const { loading, createCampaign } = userCreateCampaign()
    const handleSubmit = async (e) => {
        e.preventDefault()
        await createCampaign(campaignCreator)
        setCampaignCreator({ ...campaignCreator, fullName: "", purpose: "", goalAmount: "", place: "", address: "", reason: "" })

    }
    return (
        <div className="w-full flex flex-row min-h-screen">
            {/* Sidebar */}
            <UserSideBar />
            {/* Main Content */}
            <div className='bg-gray-100 p-2  md:m-3 rounded-lg flex flex-col w-full'>
                <h4 className='text-start text-sky-400 font-bold text-xl mb-3'>Apply Campaign</h4>
                <div className='text-center font-bold text-lg bg-white  rounded-md p-3 mb-2 mt-2 '>Total Raised: <span className='text-green-400'>${total}</span></div>
                <div className='w-full h-screen flex md:flex-row flex-col justify-between md:mt-5 mb-0 '>
                    <form onSubmit={(e) => handleSubmit(e)} className='w-full md:w-1/2 flex flex-col gap-4 h-full md:p-0 p-10'>

                        <div>
                            <input type="text" className=' px-3 py-2 w-full mx-5 outline-none' placeholder='FullName' onChange={(e) => setCampaignCreator({ ...campaignCreator, fullName: e.target.value })} value={campaignCreator.fullName} />
                        </div>
                        <div>
                            <input type="text" className=' px-3 py-2 w-full mx-5 outline-none' placeholder='Purpose' onChange={(e) => setCampaignCreator({ ...campaignCreator, purpose: e.target.value })} value={campaignCreator.purpose} />
                        </div>
                        <div>
                            <input type="text" className=' px-3 py-2 w-full mx-5 outline-none' placeholder='Goal Amount' onChange={(e) => setCampaignCreator({ ...campaignCreator, goalAmount: e.target.value })} value={campaignCreator.goalAmount} />
                        </div>
                        <div>
                            <input type="text" className=' px-3 py-2 w-full mx-5 outline-none' placeholder='place' onChange={(e) => setCampaignCreator({ ...campaignCreator, place: e.target.value })} value={campaignCreator.place} />
                        </div>
                        <div>
                            <input type="text" className=' px-3 py-2 w-full mx-5 outline-none' placeholder='address' onChange={(e) => setCampaignCreator({ ...campaignCreator, address: e.target.value })} value={campaignCreator.address} />
                        </div>
                        <div>
                            <textarea type="text" className=' px-3 py-3 w-full mx-5 outline-none' placeholder='Reason for apply' onChange={(e) => setCampaignCreator({ ...campaignCreator, reason: e.target.value })} value={campaignCreator.reason} />
                        </div>


                        <button className='btn bg-green-400 rounded-2xl w-1/2 text-white mx-2'>{loading ? <span className='loading loading-spinner'></span>: "Apply Now"} </button>
                    </form>
                    <div className='w-full md:ml-10 flex flex-col cursor-pointer md:mb-0 mb-32'>
                        {myAllCampaigns != undefined && myAllCampaigns.length > 0 && myAllCampaigns?.map((mycampaign) => (
                            <>

                                <MyCampaings mycampaign={mycampaign} />
                            </>
                        ))}
                        { myAllCampaigns?.message && (
                            <p className="text-sky-500 text-center">No campaign has been created</p>

                        )}


                    </div>


                </div>
            </div>
            <Usermobilesidebar />
        </div>
    )
}
