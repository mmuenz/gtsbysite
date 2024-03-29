import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"
import MyToggle from "../components/MyToggle"
import { StaticImage } from "gatsby-plugin-image"

const TelevisionPage = () => (
  <Layout>
    <SEO
      title="The best television"
      description="The best television (Márton Münz's website)"
    />
    <p className="text-3xl">The best television</p>
    <p className="text-yellow-300 text-md pb-2">
      Nov 11 2023 | Life, Barcelona - 5 min read
    </p>
    <p>
      At home, we have Netflix. We have Amazon Prime Video. We have Filmin. We
      have Orange TV with I-don't-know-how-many channels. We have RTVE Play. We
      have iTunes. And of course, we have the Youtube app installed on our smart
      TV. I'm personally subscribed to 614 Youtube channels. My wife, a few
      hundred more.
    </p>
    <p>
      And I'm sure you also have a good selection of shows to choose from when
      you grab the remote control. But have you tried sitting on a bench in a
      non-touristy neighbourhood of Barcelona and just wait?
    </p>
    <p>Do nothing, but wait.</p>
    <p>
      You can choose a totally random location. It doesn't matter. Sit there for
      half an hour, and let life unfold in front of your eyes. I promise you,
      it's the best television.
    </p>
    <p>
      You will see the young couple with the new house plant in their hands that
      they have just bought for their first common home after moving together a
      week ago.
    </p>{" "}
    <p>
      You will see the 8-year-old boy in a Messi shirt, although Lionel Messi
      had left FC Barcelona years ago and now plays for Inter Miami.{" "}
    </p>
    <p>
      You will see the 93-year-old man, with oxygen tank on his back, entering
      the bar.
    </p>
    <p>
      You will see the two dogs, one big and one small, jumping around in joy
      when they notice the little girl blowing soap bubbles. Their owner is in
      trouble for their leashes are getting tangled.
    </p>
    <p>
      You will see the elderly couple walking hand in hand, after fifty-two
      years of marriage.
    </p>
    <p>
      You will see the young man jogging with headphones on his ears, singing
      "Billie Jean is not my lover".
    </p>
    <p>
      You will see the silver-haired, grandmotherly lady, shorter than 150 cm,
      in a pink, flowery dress. She is arguing with a 2-meter-tall, fully armed
      policeman, telling him off vigorously for not being polite enough.
    </p>
    <p>
      You will see a bunch of men, all over 70, playing Pétanque at the end of
      the street, getting into loud arguments.
    </p>
    <p>
      You will see kids playing football just a few meters away, using the door
      of City Hall as their goal, and accidentally hitting a passerby on the
      head with the ball.
    </p>
    <p>
      You will see four women arriving at a table on the street in front of the
      café: a daughter, a mother, a grandmother, and a great-grandmother, four
      generations. The mother pushing her daughter in a stroller, the
      grandmother wheeling her own mother in a wheelchair. They all came for a
      slice of cake.
    </p>
    <p>
      You will see elderly men sitting on the benches and staring at pretty
      girls as they walk past. You will see pretty girls walking past elderly
      men, well aware of the attention they are receiving.
    </p>
    <p>You will see the woman in mismatched shoes eating ice cream.</p>
    <p>
      You will see the waiter crossing the street, balancing a bottle of wine
      and some plates of tapas on his tray.{" "}
    </p>
    <p>
      You will see the exuberant group of high school boys coming right from
      their PE class, still wearing their gym suits.
    </p>
    <p>
      You will see two friends carrying a heavy sofa they have just bought on
      Wallapop, a local app for buying and selling secondhand items.
    </p>
    <p>
      You will see mothers standing next to the playground, discussing their
      weekend plans, while their kids are crawling in the dirt.
    </p>
    <p>
      You will see another elderly couple holding hands, watching the
      confectionery store's display window.
    </p>
    <p>
      You will see the grey-haired man walking out of Re-read, the second-hand
      bookstore, looking happily into his bag and checking the three books he
      bought for a few Euros each.
    </p>
    <p>
      You will see a man crossing the street, a mobile phone in his hand,
      gesticulating furiously.
    </p>
    <p>
      You will see local artists mounting their paintings on temporary outdoor
      exhibition panels, preparing for an open-air visual art competition.
    </p>
    <p>
      You will see the woman stepping out of the market, carrying fresh fish
      under her arm.
    </p>
    <p>You will see two young girls kissing.</p>
    <p>
      You will see the fashionista taking selfies at the corner, posing like
      she's on the catwalk, in her brand new Balenciaga sweater.
    </p>
    <p>
      You will see the skateboarders moving quickly through the crowd, with dogs
      barking and running after them.
    </p>
    <p>
      You will see the guy sitting on a small chair next to the organic food
      shop, playing flamenco on his guitar, surrounded by a group of friends.
    </p>
    <p>
      You will see the children a few steps away drawing with chalk something
      colourful on the sidewalk.
    </p>
    <p>You will see the blind man escorted by his grandson, telling a joke. </p>
    <p>
      My favourite spot for people-watching is a bench in Passeig de Sant Joan,
      a vibrant yet peaceful avenue stretching through Eixample from the Arc de
      Triomf to the neighborhood of Gràcia. Perhaps you might have read about
      this boulevard in travel guidebooks for it showcases a range of
      architectural styles of different periods including modernisme (i.e.
      Catalan Art Nouveau), neoclassical, neo-gothic, and contemporary
      architecture.
    </p>
    <p>
      More importantly for me, it has a wide pedestrian promenade in the middle,
      lined with tall plane trees. It is often filled with people strolling,
      walking their dogs, kids playing, couples passing by. It's the perfect
      place for someone who enjoys witnessing an unchoreographed dance of life's
      random, seemingly irrelevant and unrelated moments.
    </p>
    <p>
      It's a stream of snapshots from lives of strangers, and I can't imagine a
      more hypnotic and enriching experience than watching this authentic
      Barcelona show of real life for hours.
    </p>
    <p>
      Who are these people? Where are they coming from, and where are they
      heading?
    </p>
    <p>
      The only thing that connects us is that we live in the same city. We all
      have different paths, never seen each other before, and will probably
      never meet again. Yet we are sharing a moment now.
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
