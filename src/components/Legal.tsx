import React from 'react'

const Legal: React.FC = () => {
  return (
    <div>
      <div className='hero mb-4'>
        <div className='hero-body has-text-centered'>
          <h1 className='subtitle'>Legal Information</h1>
        </div>
      </div>
      <div className='container'>
        <div className={'box has-text-black' }>
          <div className='content'>
            <p>All original content on this website is licensed under the <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY-NC-SA 4.0</a> license unless otherwise noted.</p>
            <p>The laptop, book, and film reel icons on the Resources page come from Bootstrap Icons under <a href='https://github.com/twbs/icons/blob/main/LICENSE.md'>The MIT License</a>.</p>
            <p>Other third-party materials belong to their creators under the indicated licenses.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Legal