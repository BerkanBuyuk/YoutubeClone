import moment from 'moment'
import React from 'react'

const SearchCard = ({search}) => {
  return (
    <div onClick={() => window.location = `/videos/${search?.id?.videoId}`} className='flex space-x-2 justify-center mx-5 my-10 cursor-pointer'>
        <img className='h-44 w-72' src={search?.snippet?.thumbnails?.high?.url} alt="" />
        <div className='w-2/3 space-y-2'>
            <div className='font-bold text-lg'>{search?.snippet?.title}</div>
            <div className='text-sm text-gray-700'>
                <span>3,5 B Görüntülenme *</span>
                <span>{moment(search?.snippet?.publishedAt).startOf('day').fromNow()}</span>
            </div>
            <div className='flex items-center space-x-2 text-sm'>
                <div className='w-10 h-10 rounded-full bg-gray-200'></div>
                <div className='text-gray-700'>Barca</div>
            </div>
            <div className='text-sm text-gray-700'>
                {search?.snippet?.description ? search?.snippet?.description : ""}
            </div>

        </div>
    </div>
  )
}

export default SearchCard