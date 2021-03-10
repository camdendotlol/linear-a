import React from 'react'
import RebusGame from './RebusGame'

const History: React.FC = () => {
  return (
    <div>
      <div className='hero mb-4'>
        <div className='hero-body has-text-centered'>
          <h1 className='title'>History</h1>
        </div>
      </div>
      <div className='container'>
        <div className='box'>
          <div className='content has-text-black is-size-5'>
            <p>The Minoans lived on the island of Crete from 3000 to 1100 BC. Widely considered the earliest recorded civilization in Europe, their surviving artwork shows that they were an exceptionally peaceful society. It&apos;s no wonder - as an island society, they had natural defenses that the peoples of the mainland lacked.</p>
          </div>
        </div>
        <div className='box has-background-primary'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d669636.8944937015!2d24.846120338911774!3d35.175947872821716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149afe2f827d98a1%3A0x100bd2ce2b9c630!2sCrete%2C%20Greece!5e1!3m2!1sen!2sus!4v1614912069585!5m2!1sen!2sus" width="600" height="450" style={{ border: 0, width: '100%', minHeight: '550px' }} allowFullScreen={false} loading='lazy'></iframe>
        </div>
        <div className='box'>
          <div className='content has-text-black is-size-5'>
            <p>At their peak, starting around 2000 BC, Minoan political leaders inhabited palaces across the island, which served as the focal points of cities and suburbs. Roads connected these cities, as well as smaller settlements and estates across the island. Scripts like Linear A were used mainly in and around the palaces. This is consistent with how writing was used in the ancient world - it was a valuable tool for keeping track of trade and political affairs.</p>
            <p>It&apos;s in this environment that the first known Minoan writing system, Cretan Hieroglyphs, first developed. Shortly after, scribes began using Linear A, which existed for centuries alongside the hieroglyphs. Neither writing system is deciphered, and historians do not know what language the Minoans of this period spoke.</p>
          </div>
        </div>
        <div className='box'>
          <div className='content has-text-black is-size-5'>
            <p>Scripts of this time could be <strong>pictographic</strong>, <strong>logographic</strong>, or <strong>syllabic</strong>. The concept of an alphabet as we know it today would not be invented until around 1000 BC. <strong>Pictographic</strong> scripts are a collection of images that represent the thing in the image. For example, a pictogram of a king would represent a king. <strong>Logographic</strong> systems expand on pictograms by using a symbol to represent a spoken word. Logograms would often be combined to communicate more complex ideas, adding another layer of expressiveness to scripts. Finally, <strong>syllabic</strong> systems use symbols to represent syllables, which can be combined to form words.</p>
            <p>Most of Linear A seems to be syllabic, but it likely includes some pictograms and logograms too.</p>
          </div>
        </div>
        <div className='box'>
          <div className='content has-text-black is-size-5'>
            <h4 className='has-text-centered'>The Rebus Principle</h4>
            <p>It&apos;s important to keep in mind that even as writing systems gradually developed from simple symbols into complex systems, spoken language has always been as complex as it is today. Communicating complex ideas in pictures can be challenging, which put a lot of pressure on scripts to became more granular over time.</p>
            <p>So how did the users of early writing systems represent new ideas or objects that they lacked a symbol for?</p>
            <p>The &quot;Rebus Principle&quot; is a lingusitic concept that describes the way ancient scribes would combine logograms to communicate new concepts based on their <i>pronunciation</i> instead of the pictures themselves. Let&apos;s try it out below.</p>
          </div>
        </div>
        <div className='box has-background-primary'>
          <RebusGame />
        </div>
      </div>
    </div>
  )
}

export default History