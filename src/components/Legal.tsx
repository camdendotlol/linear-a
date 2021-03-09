import React from 'react'

const Legal: React.FC = () => {
  return (
    <div>
      <div className='hero mb-4'>
        <div className='hero-body has-text-centered'>
          <h1 className='title'>Legal Information</h1>
        </div>
      </div>
      <div className='container'>
        <div className={'box has-text-black' }>
          <div className='content'>
            <p>All original text on this site is licensed as <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY-NC-SA 4.0</a>. I also make use of third-party images, which are licensed under the indicated licenses.</p>
            <p>Source code is <a href='https://github.com/mythmakerseven/linear-a'>available on GitHub</a> and is licensed under the <a href='https://mit-license.org/'>MIT License</a>.</p>
            <p>This website uses <a href='https://icons.getbootstrap.com/'>Bootstrap Icons</a> under the <a href='https://github.com/twbs/icons/blob/main/LICENSE.md'>MIT License</a>.</p>
            <p>All the Linear A character SVG images are in the public domain. They came from <a href='https://commons.wikimedia.org/wiki/Category:Linear_A_signs'>Wikimedia Commons</a>, but I have made minor tweaks to some of them and I want to make sure my edited versions remain in the public domain.</p>
            <p>Use of third-party materials does not imply the creator&apos;s endorsement of this website. If you have objections to your work appearing on this website, email me at [my first initial] at [my full name] dot com and I address your concerns or remove your work to your preference.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Legal