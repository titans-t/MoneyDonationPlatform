import React from 'react'
import pic from "./../../assets/images/Authimages/pic.png"
import { Homeimage } from '../../components/svgContainer/Homeimage'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='flex w-full h-screen contain'>
      
      <div className='w-full bg-sky-200 md:flex flex-col gap-6 p-24 justify-center items-center hidden'>
       {<Homeimage/>}
       <p className='text-black-400 font-medium text-sky-800 text-md w-1/2 text-center'>Your generous donation helps provide essential support and creates.</p>
      </div>
      <div className='md:w-1/2 w-full flex flex-col items-center justify-center md:gap-4 '>
        <h1 className='text-blue-300 pr-6 text-4xl font-mono font-bold flex justify-center items-center w-full'> <svg className=' w-16 pr-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7286 3.75C11.359 3.75 11.9344 3.98129 12.3718 4.36223L12.375 4.35908L12.3782 4.36224C12.8156 3.98129 13.391 3.75 14.0214 3.75C15.3903 3.75 16.5 4.84077 16.5 6.18631C16.5 6.8059 16.2647 7.37147 15.8771 7.80139L15.7766 7.90653L12.375 11.25L8.86966 7.80454C8.4821 7.37462 8.25 6.8059 8.25 6.18631C8.25 4.84077 9.35973 3.75 10.7286 3.75ZM12.4334 6.40502L12.375 6.35418L12.3167 6.40494L11.4089 5.51279L11.3866 5.49337C11.2141 5.34311 10.9861 5.25 10.7286 5.25C10.1637 5.25 9.75 5.69346 9.75 6.18631C9.75 6.41252 9.82894 6.61584 9.96114 6.7741L12.375 9.14672L14.7086 6.85302L14.7743 6.78426C14.9182 6.61889 15 6.41187 15 6.18631C15 5.69346 14.5863 5.25 14.0214 5.25C13.7639 5.25 13.5359 5.34311 13.3634 5.49337L13.3411 5.51273L12.4334 6.40502ZM3.75 12H7.5V12.75H12C13.2426 12.75 14.25 13.7574 14.25 15C14.25 16.2426 13.2426 17.25 12 17.25H9.75V15.75H12C12.4142 15.75 12.75 15.4142 12.75 15C12.75 14.5858 12.4142 14.25 12 14.25H7.5V18H8.56066L9.00618 18.4455C9.17136 18.6107 9.40408 18.6895 9.63563 18.6586L18.7627 17.4417C19.1848 17.3854 19.5 17.0254 19.5 16.5996C19.5 16.1304 19.1196 15.75 18.6504 15.75H15V14.25H18.6504C19.9481 14.25 21 15.3019 21 16.5996C21 17.7772 20.1282 18.7729 18.961 18.9285L9.83388 20.1455C9.13922 20.2381 8.44107 20.0017 7.94552 19.5062L7.93934 19.5H7.5V20.25H3.75L3 19.5V12.75L3.75 12ZM6 18.75V13.5H4.5V18.75H6Z" fill="#080341" />
        </svg>Donate Now </h1>
        
        <div className='flex flex-col md:flex-row gap-4 bg-slate-200'>
          <Link to={"/login"} className='btn px-10 bg-sky-400 text-white uppercase hover:bg-sky-700'>User Login</Link>
          <Link to={"/admin/login"} className='btn px-10 bg-green-400 text-white uppercase hover:bg-green-700'>Admin Login</Link>
        </div>
      </div>
    </div>
  )
}
