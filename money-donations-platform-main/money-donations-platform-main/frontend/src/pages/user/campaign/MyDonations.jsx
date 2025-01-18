import React from 'react'
import UserSideBar from '../../../components/sidebar/Usersidebar';
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Usermobilesidebar } from '../../../components/sidebar/Usermobilesidebar';
import { UserGetMyDonations } from '../../../hooks/getMyDonations';
import { MyDonation0 } from '../../../components/donation/MyDonation0';


export const MyDonations = () => {
    const {myDonations, loading} = UserGetMyDonations()
    console.log(myDonations);
    
    
    return (
        <div className="w-full flex flex-row min-h-screen">
            {/* Sidebar */}
            <UserSideBar />
            {/* Main Content */}
            <div className='bg-gray-100 p-2 md:m-3 rounded-lg flex flex-col w-full'>
                <h4 className='text-start text-sky-400 font-bold text-xl mb-3'>My Donations</h4>
                <div className='text-center font-bold text-lg bg-white  rounded-md p-3 mb-2 mt-2 '>Donated <span className='text-green-400'>History</span></div>
                <div className="overflow-x-auto mt-3 text-center w-full ">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className='text-sky-900 font-bold'>
                                <th></th>
                                <th>FullName</th>
                                <th>Donation issued</th>
                                <th>Payment Method</th>
                                <th>Amount Paid</th>
                            </tr>
                        </thead>
                        <tbody className='text-sky-600'>
                          {myDonations?.map((donation,idx)=>(
                            <MyDonation0 donation={donation} idx={idx}/>
                          ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Usermobilesidebar/>
        </div>
    )
}
