import React from 'react'
import { SignupImage } from '../../../components/svgContainer/SignupImage'
import { Homeimage } from '../../../components/svgContainer/Homeimage'

import { Campaign } from '../../../components/campaign/campaign';
import UserSideBar from '../../../components/sidebar/Usersidebar';
import { userGetApprovedCampaings } from '../../../hooks/userGetApprovedCampaings';
import { Usermobilesidebar } from '../../../components/sidebar/Usermobilesidebar';

export const Dashboard = ({showDonateForm}) => {
  const {loading, campaigns} = userGetApprovedCampaings()
  
  
    return (
        <div className="w-full flex flex-col md:flex-row min-h-screen relative">
        {/* Sidebar */}
        <UserSideBar/>
        
        {/* Main Content */}
        <div className="w-full bg-slate-200 overflow-y-scroll relative">
          <div className="bg-white m-2 px-5 py-2 rounded flex justify-between items-center sticky top-0 z-10">
            <div>
              <p className="text-xs text-sky-900">Primary</p>
              <h3 className="text-lg text-sky-500 font-bold">User Dashboard</h3>
            </div>
      
            <div className="avatar">
              <div className="ring ring-offset-base-100 w-10 rounded-full ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
      
          <div className="campaigns bg-white m-2  mt-5 px-5 py-2 rounded grid grid-cols-1 gap-5">
          <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                {!campaigns?.length < 1 && <thead>
                    <tr>
                        
                        <th>Fullname</th>
                        <th>Purpose</th>
                        <th>Money need</th>
                        <th>Money raised</th>
                        <th></th>
                    </tr>
                </thead>}
                {campaigns == undefined && <p className='text-sky-500 text-center'>no campaign found at this time</p>}
                <tbody className=''>
                 
                 {campaigns?.map((campaign)=>(
                  <Campaign campaign={campaign}/>
                 ))}
                
                 
                </tbody>
                
            </table>
        </div>
       
         </div>
        
        
        </div>
        <Usermobilesidebar/>

      </div>
      
      
    )
}
