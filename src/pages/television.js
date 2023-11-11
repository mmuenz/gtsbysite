import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MyToggle from "../components/MyToggle"
import { StaticImage } from "gatsby-plugin-image"

const TelevisionPage = () => (
  <Layout>
    <Seo title="Television" />
    <p className="text-3xl">The best television</p>
    <p className="text-yellow-300 text-md pb-2">
      Nov 11 2023 | Bcn, Life - ... min read
    </p>

    <p>
      We have Netflix. We have Amazon Prime Videos. We have Filmin. We have
      Orange TV with I-don't-know-how-many channels. We have RTVE Play. We have
      ... And of course, we have the Youtube app on our smart TV. I'm personally
      subscribed to 614 Youtube channels. My wife a couple hundreds more.
    </p>
    <p>
      And I'm sure you also have a good selection of shows to choose from when
      you grab the remote control. But have you tried sitting down on a bench in
      a non-touristy neighbourhood of Barcelona and just wait?
    </p>

    <p>Do nothing, but wait.</p>

    <p>
      You can chose a totally random location. It doesn't matter. Sit there for
      half an hour, and let life unfold in front of your eyes. I promise you,
      it's the best television.
    </p>

    <p>
      You will see the young couple with the new house plant in their hands that
      they have just bought for their first common home after moving together a
      week ago. You will see the 8-year-old boy in Messi shirt, although Lionel
      Messi had left FC Barcelona years ago and now plays for Inter Miami. You
      will see the 93 year old man, with the oxygen tank on his back, entering
      the bar.
    </p>

    <p>
      You will see the two dogs, one big and one small, jumping around in joy
      when they see the little girl blowing soap bubbles. Meanwhile, their owner
      is in trouble as their leashes are getting tangled. You will see the
      elderly couple walking hand in hand, after fifty-two years of marriage.
      You will see the young man jogging with headphones on his ears, singing
      "Billie Jean is not my lover".
    </p>

    <p>
      You will see the silver-haired, grandmotherly lady, likely shorter than
      150 cm, wearing a pink, flowery dress, arguing with a 2-meter-tall
      policeman, apparently telling him off for not being polite.
    </p>

    <p>
      You will see a bunch of men, all over 70, playing Pétanque at the end of
      the street, getting into loud arguments. You will see kids playing
      football just a few meters away, using the door of City Hall as their
      goal, and accidentally hitting a passerby on the head.
    </p>

    <p>
      You will see four women arriving at a table on the street in front of the
      café: four generations, a daughter, a mother, a grandmother, and a
      great-grandmother. The mother is pushing her daughter in a stroller, the
      grandmother is wheeling her mother in a wheelchair. They have come for a
      slice of cake.
    </p>

    <p>
      You will see elderly men sitting on the benches and staring at pretty
      girls as they walk past. You will see pretty girls walking by elderly men
      sitting on benches, well aware of the attention they are receiving.
    </p>

    <p>
      You will see the woman in mismatched shoes eating ice cream. You will see
      the waiter crossing a street, balancing a bottle of wine and some plates
      of tapas on his tray. You will see the exuberant group of high school boys
      coming right from their PE class, still wearing their gym suits.
    </p>

    <p>
      You will see two friends carrying a heavy sofa they have just bought on
      Wallapop, a local app for buying and selling secondhand items. You will
      see mothers standing next to the playground, discussing their weekend
      plans, while their kids play and crawl in the dirt. You will see another
      elderly couple holding hands, watching a store's display window.
    </p>

    <p>
      You will see the grey-haired man walking out of Re-read, the second-hand
      book store, looking into his bag and checking the three books he bought
      for 4 Euros each. You will see a man crossing the street, a mobile phone
      in his hand, gesticulating violently.
    </p>

    <p>
      You will see local artists mounting their paintings on temporarily
      installed outdoor exhibition panels for an open-air visual art
      competition. You will see the woman stepping out of the market, carrying
      fresh fish under her arm.
    </p>

    <p>You will see two young girls kissing.</p>

    <p>
      You will see the fashionista taking selfies at the corner, posing like
      she's on the catwalk, in her brand new Balenciaga sweater. You will see
      the skateboarders moving quickly through the crowd, with dogs barking and
      running after them. You will see the guy sitting on a small chair next to
      the eco store, playing flamenco on his guitar, surrounded by a group of
      friends. You will see the children drawing with chalk something colourful
      on the sidewalk.
    </p>

    <p>
      My favourite spot for people-watching is a bench in Passaig de Sant Joan,
      ...
    </p>

    <br />
    <p>---</p>
    <br />
    <Link className="text-yellow-200 text-md" to="/blog">
      | Back |
    </Link>
  </Layout>
)

export default TelevisionPage
