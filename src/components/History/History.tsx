import React from 'react'
import RebusGame from './RebusGame'
import { Link } from 'react-router-dom'

import chineseBoneScriptImg from '../../images/chinese_oracle_bone_script.png'
import aliceKoberImg from '../../images/kober.jpg'
import michaelVentrisImg from '../../images/ventris.jpg'

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
        <div className='box'>
          <div className='content has-text-black is-size-5'>
            <p>Maybe if that was your writing system, you would be motivated to develop an alphabet instead! However, some societies that used logographic writing systems adapted very well to modern literacy. The Chinese language, for example, is considered logosyllabic, meaning it combines elements of both logographic and syllabic scripts, and often makes use of the Rebus Principle to form new words. Chinese can also be represented alphabetically through systems such as <a href='https://en.wikipedia.org/wiki/Pinyin'>pinyin</a>, though in practice this is only used in situations when standard Chinese characters are unsupported.</p>
            <p>You can probably imagine how much harder it is to decipher a script like Linear A than a strictly alphabetic script. Though symbols might be clear pictures of the word they represent, they might also be combined to mean something entirely unconnected from how they first appear, like you may have created in the activity above.</p>
          </div>
        </div>
        <div className='box'>
          <figure className='image has-text-centered has-text-black'>
            <img src={chineseBoneScriptImg} />
            <figcaption>Oracle Bone Script, the earliest known form of Chinese writing (from <a href='https://commons.wikimedia.org/wiki/File:Oracle_bone_graphs_rotated_90_degrees.svg'>Wikimedia</a>)</figcaption>
          </figure>
        </div>
        <div className='box'>
          <div className='content has-text-black is-size-5'>
            <h3 className='has-text-centered'>Linear B</h3>
            <p>Starting around 1450 BC, Minoan scribes started switching away from Linear A to a new script known to historians as Linear B. At first glance, Linear B looks similar to Linear A, and they even share many of the same <Link to='/characters'>characters</Link>. The decipherment of Linear B was a long, difficult process that required the efforts of many scholars, but it was finally deciphered in the 1950s.</p>
          </div>
        </div>
        <div className='box has-background-primary'>
          <div className='historian-img' style={{ gap: '10px' }}>
            <figure className='has-text-centered has-text-black' style={{ maxWidth: '600px', height: '100%' }}>
              <img src={aliceKoberImg}/>
            </figure>
            <figure className='has-text-centered has-text-black' style={{ maxWidth: '400px', height: '100%' }}>
              <img src={michaelVentrisImg}/>
            </figure>
          </div>
          <div className='content has-text-centered has-text-black'>
            <p>Alice Kober and Michael Ventris</p>
            <p className='is-size-7'>(Kober image is courtesy of Brooklyn Daily Eagle photographs, Brooklyn Public Library, Brooklyn Collection)</p>
          </div>
        </div>
        <div className='box'>
          <div className='content has-text-black is-size-5'>
            <p>Much of the decipherment effort came from Alice Kober, who spent twenty years cataloging inscriptions and recording data on the frequency of characters and phrases. Through this work, she discovered some fundamental patterns of the script, which provided the first breakthrough in its decipherment.</p>
            <p>If you&apos;ve studied Spanish or French, you probably know about conjugation. One word has multiple forms depending on the words around it, like the way the French word &quot;manger&quot; can become &quot;je mange&quot; or &quot;nous mangeons&quot;. Through her meticulous records, Kober discovered a similar pattern in Linear B: whatever language it represented clearly used this grammatical system, known as inflection. This helped rule out some languages that were known to not use inflection.</p>
          </div>
        </div>
        <div className='box'>
          <div className='content has-text-black is-size-5'>
            <p>Unfortunately, Kober died at a young age, before she finished deciphering. But immediately after her death in 1950, the scholar Michael Ventris picked up where she left off.</p>
            <p>Ventris did not take long to make his own breakthrough: certain words seemed to appear more often on artifacts found in Crete, and less often on artifacts found elsewhere. Though there were a few possible explanations, he guessed that they might be the names of places on Crete. Working under this assumption, Ventris deciphered some of the first words from Linear B, successfully demonstrating that it represented the earliest known version of written Greek.</p>
            <p>With his colleague John Chadwick, Ventris worked on deciphering the inscriptions that had been discovered over the years. Unfortunately, like Kober, Ventris also died at a young age, not long after his work on Linear B. Only Chadwick would live to tell the story, which he covered in his 1958 book &quot;The Decipherment of Linear B&quot;.</p>
          </div>
        </div>
        <div className='box'>
          <div className='content has-text-black is-size-5'>
            <h3 className='has-text-centered'>Linear A vs. Linear B</h3>
            <p>If you were around in the early 1950s as Linear B was being deciphered, you might have assumed that Linear A would be deciphered soon enough. After all, it even has many of the same symbols, so it must be closely related.</p>
            <p>But this hope has not panned out. Any attempt to decipher based on the Linear B values of their common symbols only results in unreadable nonsense. At this point, Linear A probably does not represent Greek, but another language entirely.</p>
            <p>Still, the techniques used by Kober and Ventris could be instructive for Linear A&apos;s decipherment. The difficulty is that there are fewer surviving texts compared to Linear B (over 6000 vs. 1400). An analysis of word endings might need a lot more samples to find anything conclusive. There are also probably not enough samples from the Greek mainland to make the kind of place-name discovery that Ventris made.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History