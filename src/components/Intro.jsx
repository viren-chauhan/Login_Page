import React, { Component } from 'react'
import microfocus from './microfocus.jpg'

export default class Intro extends Component {
  render() {
    
    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-1 h-screen w-full'>
                <div className=' sm:block my-14'>
                    <img className='h-3/4 mx-auto w-2/4 object-cover my-14' alt='#' src={microfocus} />
                </div>
            </div>
        </>
    )
  }
}
