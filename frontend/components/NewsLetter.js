import React from 'react'
import Head from 'next/head'
import Header from './Header'
import { Button } from 'antd'
import Image from 'next/image'

function NewsLetter({ title, content, author, authorLink }) {
  return (
    <div>
      <Head>
        <title>Articles | {title}</title>
      </Head>
      <Header />
      <div className='placeNewsIcon'>
        <Image className='text-center items-center' src="/newsletter.png" height={60} width={60} />
      </div>
      
      <div>
        <h1 className='text-2xl text-black text-center font-black'>{title}</h1>
        <h6 className='bg-blue-100 border-2 border-blue-400 rounded-lg mx-12 mt-6 p-2 text-gray-700 justify-between'>{content}</h6>
        <h5 className='text-gray-500 text-center'>~ {author} </h5>
        <h5 className='text-center mt-2 text-gray-700' onClick={() => { window.location.href = authorLink }}>
          Connect with Author
          <Button className='text-xs ml-2 bg-blue-500' type='primary'>
            Connect
          </Button>
        </h5>
      </div>
    </div>
  )
}

export default NewsLetter
