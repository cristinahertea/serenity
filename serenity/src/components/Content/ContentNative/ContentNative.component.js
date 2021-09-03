import { Spinner } from '../../Spinner'
import { useState } from 'react'
import useTimeout from '../../../hooks/useTimeout'
import { Card } from './subcomponents/Card'
import { Article } from './subcomponents/Article'
import Image1 from '../../../assets/images/img1.jpg'
import Image2 from '../../../assets/images/img2.jpg'
import Image3 from '../../../assets/images/img3.jpg'

export const ContentNative = () => {
  const [loading, setLoading] = useState(true)
  useTimeout(() => setLoading(false), 3000)

  return (
    <div className="content-wrapper">
      {loading ? (
        <Spinner />
      ) : (
        <div className="content">
          <Card
            label="Cristina's Card"
            date="est. 1993"
            gridArea="card1"
            image={Image1}
          >
            <div>
              <b>Hobbies:</b> Web Development, Cooking, Baking
            </div>
            <div>
              <b>Pros:</b> Adaptive, Communicative, Positive
            </div>
            <div>
              <b>Cons:</b> Vocal, Opinionated, Inquisitive
            </div>
          </Card>
          <Card
            label="Telescopic"
            date="est. 2013"
            gridArea="card2"
            image={Image2}
          >
            We work with our clients to help them improve their digital
            workflow, automate business processes, and get their existing
            systems talking to each other.
          </Card>
          <Card
            label="Peace of Mind"
            date="... still looking ..."
            gridArea="card3"
            image={Image3}
          >
            “When you do the right thing, you get the feeling of peace and
            serenity associated with it. Do it again and again.”
            <p> ― Roy T. Bennett</p>
          </Card>
          <Article label="About me" gridArea="article1">
            I moved to London and started my journey as a front-end developer.
            What once was just a good career opportunity, it quickly transformed
            into passion. This translates into an unending curiosity about
            upcoming technologies, constant pursuit improving my knowledge base
            and a can-do attitude towards any challenges that may arise.
          </Article>
          <Article label="We are Telescopic" gridArea="article2">
            Our clients range from not-for-profit organisations to FTSE 250
            companies, from startups to established international businesses. We
            engage with them, jargon-free, to explore their needs, understand
            their frustrations and realise their objectives. Our philosophy is
            that usability – and usefulness – should underpin all digital
            product design. Led by a majority female team, we pride ourselves on
            developing long-term partnerships to ensure stable and scalable
            tools that help our clients’ fast-growing businesses succeed.
          </Article>
          <Article label="Serenity" gridArea="article3">
            So often we identify ourselves by the roles we play—parent, partner,
            teacher, engineer, husband, wife, son, daughter, etc. We get
            accustomed to these roles and sometimes lose sight of our deeper
            selves. As such, roles and routines can limit self-discovery and
            fulfillment, which is why finding some undisturbed, quiet time every
            day is so important. During those periods, you can identify aspects
            of your life that you are unhappy or dissatisfied with and explore
            possibilities for change and improvement. Times of serenity also can
            unleash your creative potential.
          </Article>
        </div>
      )}
      <style>
        {`
        @keyframes easeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .content-wrapper {
          height: 100%;
          width: 100%;
          display: grid;
        }

        .content {
          animation: easeIn 1s ease-in;
          display: grid;
          grid-auto-columns: 1fr;
          grid-auto-rows: 1fr;
          padding: 100px;
          grid-gap: 40px;
          max-width: 1200px;
          margin: auto;
          grid-template-areas:
          'article1  article1  card1'
          'card2     article2  article2'
          'article3  article3  card3';
        }`}
      </style>
    </div>
  )
}
