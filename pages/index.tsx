import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  var myLocalTime = new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute:'2-digit'});
  
  return (
      <div className={styles.container}>
        <Head>
          <title>Silas' User Guide</title>
          <meta name="description" content="Hello! I'm Silas and this is my user guide." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Hello! I'm Silas &#128375;
          </h1>

          <p className={styles.metadata}>
            <ul>
              <li>&#127760; 45.5152° N, 122.6784° W</li>
              <li>&#128337; {myLocalTime}</li>
            </ul>
          </p>

          <div className={styles.content}>
            <h2>tldr;</h2>
            <p>
              I’m beyond thrilled we’re going to get to work and collaborate together. I have no doubt we will accomplish some wonderful things and I am excited we will get an opportunity to learn from one another.
            </p>
            <p>
              Below, I’ve put together my user guide. This will give you some insight into what I value, some of my personal quirks, and a more general sense of how I operate. I would love for you to put together your own user guide so that I can learn these things about you as well.
            </p>
            <h2>Communication</h2>
              <p>
                There are two main buckets I use when thinking about communication. Short form communication is short, ephemeral, and not meant to be very durable. On the other side, theres long form communication. Documentation, narratives, and storytelling are the things I use to align
              </p>
            <h2>Collaboration</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis consectetur tortor, non pellentesque leo laoreet a. Nunc tincidunt egestas risus eu cursus. Aenean vel massa vel nulla ultrices ultrices. Vivamus facilisis blandit sollicitudin. Duis sed quam cursus, ultrices ex a, ullamcorper magna. Nulla facilisi. Maecenas porttitor turpis a ex luctus, at vehicula orci facilisis. Nulla commodo nisl a neque gravida, id gravida eros suscipit. Donec gravida massa nulla, vitae pharetra lorem tempus id. Quisque nisl leo, mattis sed dignissim a, aliquet quis ligula. Morbi egestas, ex in iaculis rutrum, ipsum sapien mattis diam, in sollicitudin erat sem sed magna.
              </p>
            <h2>Feedback</h2>
              <p>When giving feedback, I like to be direct. Sometimes I will hold feedback (never for more than 24 hours), so that I can make sure my feedback is thoughtful and actionable. Context is important to me when I craft feedback and I always try to check in to ensure my feedback has landed the way I've intended.</p>
              <p>When receiving feedback, I expect it to be direct. With critical feedback, I prefer it to be delivered 1-on-1 and would love to hear some examples of when you’ve observed the behavior. I’m not perfect nor do I know everything. I’m here to listen and learn.</p>
            <h2>Time Management</h2>
              <p>I’m not a morning person and prefer to do deep work in the mornings, saving meetings for the afternoon. Sometimes I get inspired to do some writing in the morning, so I may disappear every now and then. You may also see me online in the evenings, but this is usually because sometimes I find it easier to get in the zone after everyone gets offline.</p>
            <h2>Leadership Principles</h2>
            <ul className={styles.thiccList}>
              <li>&#10084;&#65039; Be radically candid</li> 
              <li>&#128142; Invest in people</li> 
              <li>&#129351; Put the team first</li>
              <li>&#129464; Lead with integrity</li>
              <li>&#127890; Never stop learning</li>
            </ul>
            <h2>Key Strengths</h2>
              <h3>Strength 1</h3>
              <h3>Strength 2</h3>
              <h3>Strength 3</h3>
            <h2>Growth Areas</h2>
              <h3>Growth Area 1</h3>
              <h3>Growth Area 2</h3>
              <h3>Growth Area 3</h3>
          </div>
        </main>
        <footer className={styles.footer}>
          <a
            href="https://etherscan.io/address/silassao.eth"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by {' '}
            <span className={styles.eth}>
              <Image src="/eth.svg" alt="Vercel Logo" width={16} height={16} />
            </span>
          </a>
        </footer>
      </div>
  )
}

export default Home
