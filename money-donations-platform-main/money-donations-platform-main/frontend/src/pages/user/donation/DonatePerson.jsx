import React, { useEffect, useState } from 'react'
import UserSideBar from '../../../components/sidebar/Usersidebar';
import pic from './../../../assets/images/Authimages/pic.png'
import { Link } from 'react-router-dom';
import { useUserZustands } from '../../../zustand/useUserZustands';
import { FormatDate } from '../../../utils/FormateDate';
import { Usermobilesidebar } from '../../../components/sidebar/Usermobilesidebar';
import { userMakeDonation } from '../../../hooks/userMakeDonation';
export const DonatePerson = () => {
    const { selectedCampaign, setSelectedCampaign } = useUserZustands()
    const { formateDate } = FormatDate()
    const formattedDate = formateDate(selectedCampaign?.createdAt)
    const { loading, makeDonation } = userMakeDonation()
    const [currAmount, setCurrAmount ] = useState()
    
    
    
    const [donatingPerson, setDonatingPerson] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        donationAmount:"",
        paymentMethod: ""
    })
    
    useEffect(()=>{
        const campaign = JSON.parse(localStorage.getItem('selectedItem'))
        setCurrAmount()
        setSelectedCampaign(JSON.parse(localStorage.getItem('selectedItem')))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        let selects  = selectedCampaign
        if(selectedCampaign) await makeDonation(selectedCampaign._id ,donatingPerson)
        let updatedAmount =selectedCampaign.currentAmount + Number(donatingPerson.donationAmount) || 0
        selects.currentAmount= updatedAmount
        localStorage.setItem('selectedItem', JSON.stringify(selects))

        donatingPerson.fullName = ""
        donatingPerson.email = ""
        donatingPerson.phoneNumber = ""
        donatingPerson.donationAmount = ""
        donatingPerson.paymentMethod = ""
    }




    return (

        <div className="w-full flex flex-row min-h-screen bg-gray-100">
            <UserSideBar />

            <div className='bg-gray-100 p-2 m-3 rounded-lg flex flex-col w-full'>
                <h4 className='text-start text-sky-400 font-bold text-xl mb-3'>Donate Here</h4>
                <div className='text-center font-bold text-lg bg-white  rounded-md pl-4 pb-1 text-sky-900 '><div className="breadcrumbs text-sm mt-3">
                    <ul>
                        <li><Link to={`/user/dashboard`}><a>DashBoard</a></Link></li>
                        <li><Link to={'/user/makeDonation'}><a>Person Details</a></Link></li>

                    </ul>
                </div>
                </div>
                <div className='w-full h-screen flex md:flex-row flex-col justify-between mt-5 '>
                    <form onSubmit={(e) => handleSubmit(e)} className="w-full md:w-1/2 flex flex-col gap-4 h-full items-stretch mb-10">
                        <div className="w-full">
                            <input
                                type="text"
                                className="px-3 py-2 w-full outline-none"
                                placeholder="FullName"
                                value={donatingPerson.fullName}
                                onChange={(e)=> setDonatingPerson({...donatingPerson, fullName: e.target.value})}
                            />
                        </div>
                        <div className="w-full">
                            <input
                                type="text"
                                className="px-3 py-2 w-full outline-none"
                                placeholder="email"
                                value={donatingPerson.email}
                                onChange={(e)=> setDonatingPerson({...donatingPerson, email: e.target.value})}
                            />
                        </div>
                        <div className="w-full">
                            <input
                                type="text"
                                className="px-3 py-2 w-full outline-none"
                                placeholder="Phone Number"
                                value={donatingPerson.phoneNumber}
                                onChange={(e)=> setDonatingPerson({...donatingPerson, phoneNumber: e.target.value})}
                            />
                        </div>
                        <div className="w-full">
                            <input
                                type="text"
                                className="px-3 py-2 w-full outline-none"
                                placeholder="Amount"
                                value={donatingPerson.donationAmount}
                                onChange={(e)=> setDonatingPerson({...donatingPerson, donationAmount: e.target.value})}
                            />
                        </div>
                        <div className="w-full">
                            <select  value={donatingPerson.paymentMethod} className="px-3 py-5 w-full outline-none text-gray-400" placeholder="Payment Method" onChange={(e)=> setDonatingPerson({...donatingPerson, paymentMethod: e.target.value})}>
                                <option value="" disabled selected>Payment Method</option>
                                <option value="credit_card">Credit Card</option>
                                <option value="debit_card">Debit Card</option>
                                <option value="paypal">PayPal</option>
                                <option value="net_banking">Net Banking</option>
                            </select>
                        </div>

                        <button className="btn bg-green-400 rounded-2xl w-full text-white">
                            Donate Now
                        </button>
                    </form>

                    <div className='w-full md:w-1/2  flex flex-col cursor-pointer md:mb-0 mb-10'>

                        <div className=' flex flex-col items-center '>

                            <h1 className='text-sky-900 font-bold mb-1'>person detail</h1>
                            <div>
                                <div className="avatar mt-1 border border-blue-500 p-1">
                                    <div className="w-24 rounded">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div className='w-full mt-3'>
                                    <progress className=" w- progress progress-info w-80" value={selectedCampaign.currentAmount} max={`${selectedCampaign?.goalAmount}`}>{selectedCampaign.goalAmount}</progress>
                                    <div className='flex justify-between'>
                                        <p className='text-sky-800 text-sm'>Raised ${selectedCampaign?.currentAmount}</p>
                                        <p className='text-sky-800 text-sm'>Goal ${selectedCampaign?.goalAmount}</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' mt-10 px-10 grid grid-cols-3 gap-10 mb-10  pr-5'>
                                <div>
                                    <p className='font-bold'>Person Name</p>
                                    <p className='text-sm'>{selectedCampaign?.fullName}</p>
                                </div>
                                <div>
                                    <p className='font-bold'>Purpose</p>
                                    <p className='text-sm'>{selectedCampaign?.purpose}</p>
                                </div>
                                <div>
                                    <p className='font-bold'>Place</p>
                                    <p className='text-sm'> {selectedCampaign?.place}</p>
                                </div>

                                <div>
                                    <p className='font-bold'>Address</p>
                                    <p className='text-sm'>{selectedCampaign?.address}</p>
                                </div>
                                <div>
                                    <p className='font-bold'>Goal Amount</p>
                                    <p className='text-sm'>{selectedCampaign?.goalAmount}</p>
                                </div>
                                <div>
                                    <p className='font-bold'>Issued Date</p>
                                    <p className='text-sm'>{formattedDate}</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <Usermobilesidebar />
        </div>
    )
}
