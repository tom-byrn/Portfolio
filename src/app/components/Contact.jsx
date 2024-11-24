import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'>Contact Info</h1>
        <p className='my-4 text-center text-4xl'>{CONTACT.phoneNo}</p>
        <a href='#' className='border-b flex justify-center text-center text-4xl' >{CONTACT.email}</a>
    </div>
  )
}

export default Contact