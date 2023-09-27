import React from 'react'
import Select from 'react-select'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CiMenuKebab } from "react-icons/ci";
import testImage from '../assets/react.svg'
import { FaBottleWater } from "react-icons/fa6";
import { GiBrokenBottle,GiMetalBar } from "react-icons/gi";

function Profile() {

  const options = [
  { value: '2017', label: '2017' },
  { value: '2018', label: '2018' },
  { value: '2019', label: '2019' },
  { value: '2020', label: '2020' },
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' },
  { value: '2023', label: '2023' },
]

  return (
    <>
    {/* <Header /> */}
    <div>
        <div className="profile-top flex justify-between m-3" >
           <p className='text-3xl '>MyProfile</p>
           <div className='bg-white rounded-full p-3 shadow shadow-blue-500/50'>

           <CiMenuKebab className='text-black text-2xl'/>
           </div>
        </div>
        <div>
        <img src={testImage} alt="test" className='rounded-full h-40 w-40 mx-auto shadow shadow-blue-500/50'/>
        <p className='text-center text-2xl'>@collinscmondi</p>
        <p className='text-center text-sm'>Nairobi, Kenya</p>

        <div className='flex flex-row justify-between mx-3 my-5'>
            <p className='text-left text-2xl'>Your Statistics</p>
            
          <Select className='text-black' options={options}/>
        </div>

        <div className='m-4 rounded-xl bg-[#e4f6ea]'>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} className='gap-4  '>

          <div className='bg-[#254936] rounded-2xl px-4 py-2 m-3'>
          <FaBottleWater style={{color:'white', rotate:'-40deg', fontSize:'23px' }} className='  '/>
          </div>

          <div className='m-3'>
          <p  className='text-[#254936] text-xl'>12,30 Kg</p>
          </div>

          

        {/* <button className='bg-[#254936] text-white rounded-full px-5 py-2'>Edit Profile</button>
        <button className='bg-[#254936] text-white rounded-full px-5 py-2'>Logout</button> */}
        </div> 

        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} className='gap-4  '>

          <div style={{display:'flex', flexDirection:'row'}} className='bg-[#254936] rounded-2xl px-4 py-2 m-3'>
          <GiMetalBar style={{color:'white', rotate:'-40deg', fontSize:'23px' }} className='  '/>
          <p className='text-white'>Metal</p>
          </div>

          <div className='m-3'>
          <p  className='text-[#254936] text-xl'>12,30 Kg</p>
          </div>

          

        {/* <button className='bg-[#254936] text-white rounded-full px-5 py-2'>Edit Profile</button>
        <button className='bg-[#254936] text-white rounded-full px-5 py-2'>Logout</button> */}
        </div> 
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} className='gap-4  '>

          <div className='bg-[#254936] rounded-2xl px-4 py-2 m-3'>
          <GiBrokenBottle style={{color:'white', fontSize:'23px' }} className='  '/>
          </div>

          <div className='m-3'>
          <p  className='text-[#254936] text-xl'>12,30 Kg</p>
          </div>

          

        {/* <button className='bg-[#254936] text-white rounded-full px-5 py-2'>Edit Profile</button>
        <button className='bg-[#254936] text-white rounded-full px-5 py-2'>Logout</button> */}
        </div> 
        </div>

            </div>
    </div>
    {/* <Footer /> */}
    </>
  )
}

export default Profile