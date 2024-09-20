import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import Network from '../../assets/img/icons/network.png'

const Icons = () => {
    return (
        <div className="icons">
            <FaFacebookF size={50} color='#2eb2d3' className='inline-block bg-black mr-5 p-5 w-24 h-24 rounded-full' />
            <FaWhatsapp size={50} color='#2eb2d3' className='inline-block bg-black mr-5 p-5 w-24 h-24 rounded-full' />
            <FaInstagram size={50} color='#2eb2d3' className='inline-block bg-black mr-5 p-5 w-24 h-24 rounded-full' />
            <FaTwitter size={50} color='#2eb2d3' className='inline-block bg-black mr-5 p-5 w-24 h-24 rounded-full' />
            <img src={Network} className='inline-block bg-black mr-5 p-5 w-24 h-24 rounded-full' alt="" />
        </div>)
}

export default Icons