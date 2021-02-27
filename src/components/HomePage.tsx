import React from 'react'

import heroImage from '../images/knossos-blurred.jpg'

const HomePage = () => {
  return (
    <div>
      <section className='hero is-black is-fullheight-with-navbar hero-bg' style={{ backgroundImage: `url(${heroImage})` }}>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p className='title is-size-1'>
              What is Linear A?
            </p>
            <p className='subtitle'>
              Discover the ancient Mediterranean's most enigmatic writing system
            </p>
          </div>
        </div>
      </section>
      <section className='hero is-secondary is-fullheight'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p className='title is-size-1'>
              See the alphabet
            </p>
          </div>
        </div>
      </section>
      <section className='hero is-primary is-fullheight'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p className='title is-size-1'>
              Explore the texts
            </p>
          </div>
        </div>
      </section>
      <section className='hero is-secondary is-fullheight'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p className='title is-size-1'>
              Discover the history
            </p>
          </div>
        </div>
      </section>
      <section className='hero is-primary is-fullheight'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p className='title is-size-1'>
              Read more
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage