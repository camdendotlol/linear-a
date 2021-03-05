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
            <p>All original material on this site is licensed as <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY-NC-SA 4.0</a> with one exception (see below paragraph). I also make use of third-party images, which are licensed under the indicated licenses.</p>
            <p>All the SVG character files are in the public domain. They came from <a href='https://commons.wikimedia.org/wiki/Category:Linear_A_signs'>Wikimedia Commons</a>, , but I have made minor tweaks to some of them and I want to make sure my edited versions remain in the public domain.</p>
            <p>If you are the creator of something I used on this site and I messed up the licensing, let me know ASAP and I will fix the issue or remove your work to your preference.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Legal