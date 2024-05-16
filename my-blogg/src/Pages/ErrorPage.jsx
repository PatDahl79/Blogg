import React from 'react'
import { link } from 'react-router-dom'

const ErrorPage = () => {
  return (

    <section className='error-page'>
        <div className='center'>
            <link to='/' className='btn primery'>Go Back Home</link>
            <h2 className='mt-15'>Page Not Found</h2>
        </div>
    </section>
  )
  
}


export default ErrorPage;