import React from 'react'
import { Link } from 'react-router-dom'

import heroImage from '../images/knossos.jpg'
import textImage from '../images/text-smaller.jpg'
import frescoImage from '../images/fresco.jpg'

const HomePage: React.FC = () => {
  return (
    <div>
      <section className='hero is-black is-fullheight-with-navbar hero-bg' style={{ backgroundImage: `url(${heroImage})` }}>
        <div className='hero-body'>
          <div className='container has-text-centered hero-text p-4'>
            <p className='title is-size-1 is-size-2-mobile'>
              What is Linear A?
            </p>
            <p className='subtitle'>
              Dive into the ancient Mediterranean&apos;s most enigmatic writing system
            </p>
          </div>
        </div>
      </section>
      <section className='hero is-medium is-black'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p className='is-size-4 is-size-6-mobile'>
              Linear A was used by the early Minoans, who lived on the island of Crete four thousand years ago. To this day, no one knows what their symbols mean, or even what language they represent.
            </p>
          </div>
        </div>
      </section>
      <section className='hero is-black is-halfheight hero-bg' style={{ backgroundImage: `url(${frescoImage})`}}>
        <div className='hero-body'>
          <div className='container has-text-centered hero-text p-4'>
            <Link to='/history' className='title is-size-1 is-size-2-mobile'>
              Discover the history &#10132;
            </Link>
          </div>
        </div>
        <div className='hero-foot'>
          <div className='container has-text-centered'>
            <p className='is-size-7 hero-text image-credit'>
              <span><a href="https://flickr.com/photos/41523983@N08/30547636456">&apos;Minoan fresco depicting a bull leaping scene, found in Knossos, 1600-1400 BC, Heraklion Archaeological Museum, Crete&apos; by Carole Raddato on Flickr</a>. <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC BY-SA 2.0</a></span>
            </p>
          </div>
        </div>
      </section>
      <section className='hero is-medium is-black'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p className='is-size-4 is-size-6-mobile'>
              Archaeologists have discovered over a thousand inscriptions, but most contain only a few letters.
            </p>
          </div>
        </div>
      </section>
      <section className='hero is-black is-halfheight hero-bg' style={{ backgroundImage: `url(${textImage})`}}>
        <div className='hero-body'>
          <div className='container has-text-centered hero-text p-4'>
            <Link to='/characters' className='title is-size-1 is-size-2-mobile'>
              Explore the characters &#10132;
            </Link>
          </div>
        </div>
        <div className='hero-foot'>
          <div className='container has-text-centered'>
            <p className='is-size-7 hero-text image-credit'>
            &apos;Inscription [Ε 40]&apos; by <a href='http://chaniamuseum.culture.gr/en/exhibit/585'>Archaeological Museum of Chania</a> under <a href='https://creativecommons.org/licenses/by-nc-nd/3.0/'>CC BY-NC-ND 3.0</a>
            </p>
          </div>
        </div>
      </section>
      <section className='hero is-medium is-black'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p className='is-size-4 is-size-6-mobile'>
              After several hundred years, the Minoans developed a new writing system - Linear B. Linear B was deciphered in the 1950s. Although Linear A shares many of the same characters, this did not lead to its decipherment.
            </p>
          </div>
        </div>
      </section>
      <section className='hero is-medium is-black'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <p className='is-size-4 is-size-6-mobile'>
              Modern scholarship on Linear A attempts to identify whether the symbols are phonetic, syllabic, logographic, or a combination. Researchers have also tried to determine the language that Linear A represents.
            </p>
          </div>
        </div>
      </section>
      <section className='hero is-black is-halfheight'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <Link to='/resources' className='title is-size-1 is-size-2-mobile'>
              More resources &#10132;
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage