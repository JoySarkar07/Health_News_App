import React from 'react'

const NewsList = ({news}) => {
  return (
    <div className='flex gap-10 bg-blue-300 rounded-md p-5 flex-wrap sm:flex-nowrap mt-2'>
        <img className='w-80 sm:w-36 rounded-md m-auto sm:m-0' src={news.urlToImage?news.urlToImage:'https://cdn.dribbble.com/users/71890/screenshots/2368143/health_news.jpg'} alt="iamge" />
        <div className='flex flex-col justify-between sm:w-4/5'>
          <div>
            <h2 className='font-bold text-wrap mb-3 break-all'>{news.title}</h2>
            <p className='break-all'>{news.description}</p>
          </div>
          <div className='flex justify-between'>
            <a className=' text-red-600' href={news.url}>More...</a>
            <p>Published At : {(news.publishedAt).substring(0,10)}</p>
          </div>
        </div>
    </div>
  )
}

export default NewsList