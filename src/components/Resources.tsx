import React from 'react'

import { Resource } from '../utils/types'
import resources from '../utils/resources'
import bookIcon from '../images/book.svg'
import websiteIcon from '../images/laptop.svg'
import videoIcon from '../images/film.svg'

const Resources: React.FC = () => {
  const displayResources = (item: Resource) => {
    const displayIcon = (type: string): React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> | null => {
      if (type === 'website') {
        return <img src={websiteIcon} alt='' />
      } else if (type === 'book') {
        return <img src={bookIcon} alt='' />
      } else if (type === 'video') {
        return <img src={videoIcon} alt='' />
      } else {
        return null
      }
    }

    return (
      <div className='box resource-box' key={item.url}>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <div className='media has-text-black'>
            <figure className='media-left'>
              <p className='image is-64x64'>
                {displayIcon(item.type)}
              </p>
            </figure>
            <div className='media-content'>
              <div className='content'>
                <p>
                  <strong className='has-text-primary'>{item.title}</strong> by <span className='has-text-secondary'>{item.author}</span>
                  <br />
                  {item.description}
                  <br />
                  <span className='has-text-grey'>{item.url}</span>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    )
  }

  return (
    <div>
      <div className='hero mb-4'>
        <div className='hero-body has-text-centered'>
          <h1 className='title'>Resources</h1>
        </div>
      </div>
      <div className='container' style={{ maxWidth: '1000px', marginBottom: '100px' }}>
        {resources.map(item => displayResources(item))}
      </div>
  </div>
  )
}

export default Resources