import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ManifestoPage = () => (
  <Layout>
    <Seo title="A personal manifesto" />

    <p className="text-3xl">A personal manifesto</p>
    <div>
      <p>
        The world around us is complex and beautiful. We are all very lucky to
        be part of it. Too bad we are here only for such a short time. (Or just
        imagine being a common housefly, <i>Musca domestica</i>, that has a
        lifespan of about 15 to 30 days. If you are a housefly, you don't plan
        months ahead, for sure.)
      </p>
      <p>
        Yet, if you are a housefly, you probably have less existential anxiety
        than a human being. You don't fear death, because you don't have a
        concept of it (and you are not self-conscious anyway).
      </p>{" "}
      <p>
        As a human being, you know your time is limited, and you would probably
        perceive life as being too short regardless of how long it actually was.
      </p>
      <p>
        But we are able to notice beauty in every corner of the Universe, from
        the big pictures to the tiniest details. Sometimes beauty is apparent,
        sometimes we have to look a bit harder. No doubt, beauty is everywhere,
        waiting to be noticed.{" "}
      </p>
      <p>
        (A neuroscientist would probably describe "beauty" as a subjective
        experience that emerges from complex interactions between specific brain
        regions, cognitive processes, personal experiences, cultural norms, and
        potentially evolutionary factors. However, for now, it's not important
        how we define beauty, whether as a mysterious feeling or a complex
        neural activity. Let's just say beauty refers to something some of us
        really like for some unexplainable reason.)
      </p>
      <p>
        What is important is that the Universe is a pretty damn huge place, full
        of beauty, but due to a lot of random factors affecting our attention,
        each of us notice beauty in different things. A mathematician can derive
        a similar intense appreciation of beauty from a nonlinear equation, just
        as a composer does from a sequence of chords. All human beings are
        equipped with a different selection of beauty detectors.
      </p>
      <p>
        As a consequence, we are all different. And that's yet another
        manifestation of beauty.
      </p>
      <p>
        To be honest, I think we are here to enjoy ourselves. Or to put it
        another way, to enjoy all the beauty that surrounds us. Even if there is
        no real purpose of our existence, the world is so damn interesting,
        there is so much beauty and interestingness out there, that living with
        open eyes, open ears, and an open mind can give us more than enough fun
        for the limited time we spend on this planet.
      </p>
      <p>
        There are so many different ways of having fun though. Reading a book in
        a quiet room can induce the same amount of adrenaline as dancing one's
        ass off in a hardcore Acid Techno party. You can find beauty and joy in
        a flower, a plate of chocolate raspberry cake, a rock, a smile, a
        sentence, old furniture, an integrated circuit, a toilet pump, or an
        architectural drawing. It is up to you what kind of fun you go for.
      </p>
      <p>Ultimately, you can find beauty in another person, and in yourself.</p>
      <p>
        For me, it was my wife, Brigi, who taught me to notice the beauty in
        small things every day.{" "}
      </p>
      <br />
      <p>---</p>
      <br />
    </div>

    <Link className="text-yellow-200 text-md" to="/blog">
      | Back |
    </Link>
  </Layout>
)

export default ManifestoPage
