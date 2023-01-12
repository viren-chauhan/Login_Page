// import { renderHook } from '@testing-library/react';
import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Forgot extends Component {

    

  render() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-1 h-screen w-full justify-items-center bg-gray-100 my-3'>
            <div className='flex justify-center w-11/12'>
            <form className='max-w-[400px] w-full mx-auto p-4 my-8'>
                <h2 className='text-4xl font-bold grid-cols-2 py-2 leading-relaxed'>Forgot your password?</h2>
                <p className='flex flex-col grid-cols-1 w-3/4'>Please enter the email address associated with your account and we will email you a link to reset your password.</p>
                <div className='flex flex-col py-2'>
                    <label onChange={(e)=>{this.setState({email:e.target.value})}} className='font-semibold my-1'>Email</label>
                    <input className='border py-2 text-center rounded w-4/5 bg-gray-100' type="email" name="" />
                </div>
                <div className="flex justify-between w-3/4 my-3">
                    <button className='bg-orange-500 text-white py-1.5 px-6 rounded'>SEND REQUEST</button>
                    <button className='bg-white py-1.5 px-4 rounded'><Link to="/">BACK</Link></button>
                </div>
            </form>
            </div>
        </div>
    )
  } 
}
