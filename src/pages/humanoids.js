import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MyToggle from "../components/MyToggle"
import { StaticImage } from "gatsby-plugin-image"

const MilestonesPage = () => (
  <Layout>
    <Seo title="Milestones" />
    <p className="text-3xl">The illusion of making friends</p>
    <p className="text-yellow-300 text-md pb-2">
      Sept 19, 2023 | Tech, Humans - 15 min read
    </p>
    <p>
      {" "}
      You can watch the moment on Youtube when ASIMO{" "}
      <a
        href="https://www.youtube.com/watch?v=VTlV0Y5yAww"
        className=" underline decoration-yellow-300 font-medium"
      >
        fell down the stairs.
      </a>{" "}
    </p>
    <p>
      It was supposed to be his triumphant day. Moments later he would have been
      applauded for climbing up to the top of the staircase, fully autonomously,
      in front of all those people. Instead, he stumbled, lost his balance, fell
      off, and hit the floor hard.
    </p>
    <p>My heart went out to him. </p>
    <p>
      {" "}
      (Why am I using the pronoun "him", and not "her" or "it"? I'm using "him",
      because I've read Simson Garfinkel's article, "Robot Sex", in the MIT
      Technology Review, that clarifies: ASIMO, Honda's humanoid robot, is a
      boy.)
    </p>
    <p>
      The incident happened at a demonstration in Japan, in 2006, in front of an
      astounded audience. ASIMO took the first two steps without problem. At
      that point, everything looked according to plan. The only thing that made
      me worried was that he was looking at the audience, instead of the steps
      ahead.
    </p>
    <p>
      Then, as you can see in the Youtube video, ASIMO took a misstep, his foot
      slipped off the stairs, and he crashed onto the floor.
    </p>
    <p>
      Watch the video. It is fascinating to see Honda's technicians immediately
      rushing to cover ASIMO with a protective screen, shielding him from public
      view as he is laying motionless and helpless.
    </p>
    <p>
      For me, what's interesting is not that ASIMO could not make it to the top
      of the staircase. At the end of the day, "he" is just a piece of metal and
      plastic affected by the force of gravity. (It is worth noting, he climbed
      the stairs successfully several times in various other appearances. Since
      this mishap recorded in 2006 and until his discontinuation in 2018, his
      abilities improved significantly. Today, of course, we see much more
      acrobatic performances by robots like Atlas from Boston Dynamics.)
    </p>
    <p>
      Not even the embarrassing live demo is the most intriguing part. These
      things happen. (Remember Elon Musk breaking the unbreakable window of a
      Tesla Cybertruck?)
    </p>
    <p>
      For me, the interesting part is the way we, humans, react as an eye
      witness to ASIMO's accident. Some of us find it upsetting, or even
      heartbreaking. Many of us would agree it was a humiliating moment. But
      humiliating for whom? For Honda's engineers? Or for ASIMO himself?
    </p>
    <p>See my selection of comments I found under the Youtube video:</p>
    <ul>
      <li>
        {" "}
        - "I feel sorry for the little guy. He just fell...and died. Really
        sad."
      </li>
      <li>- "he was just too nervous, so many people watching him"</li>
      <li>
        - "Hahahaha Robot was so overconfident that it was climbing the stairs
        without watching them :D Aww next time walk while seeing your path baby
        :P :P"
      </li>
      <li>
        - "Poor robot! Regardless of whether it actually felt anything, it get's
        my condolences"{" "}
      </li>
      <li>- "omg... poor asimo."</li>
      <li>- "poor asimo almost feel sorry for it"</li>
      <li>- "thats so sad :("</li>
      <li>- "poor guy, all he wanted to do was climb stairs."</li>
      <li>- "R.I.P Asimo :'(" </li>
      <li>
        - "once ASIMO evolves into an artificial intelligence he will remember
        this embarrassing ordeal from his youth, and hunt down everyone who
        posted mean comments about him on youtube!"
      </li>
      <li>- "It even happens to the best." </li>
      <li>- "Please folks, he's injured, lets give him some privacy."</li>
      <li>- "I hate the way the audience is laughing at the end."</li>
      <li>
        {" "}
        - "Why do i feel sad for a robot? I'm more faulty then the technology
        they used!"
      </li>
    </ul>

    <p>
      Compassion from some people, irony from others. Nevertheless, even
      commenters who express their amusement or laugh at the video are doing so
      in a way we laugh at a fellow human being.
    </p>
    <p>
      This is anthropomorphism, a well studied phenomenon in cognitive
      psychology.
    </p>
    <p className="text-2xl">Seeing humans in nonhumans </p>
    <p>We see a robot hitting his head into the ground. Ouch.</p>
    <p>Ouch?</p>
    <p>
      Yes, despite being fully aware that ASIMO is just a machine, it's hard not
      to feel at least a little bit of empathy. This observation tells more
      about us, than about him.{" "}
    </p>
    <p>
      Anthropomorphism is the innate tendency of human psychology that we
      attribute human-like characteristics, traits, emotions, or intentions to
      nonhuman beings or objects. As a consequence, we find ourselves relating
      to them as though they were one of us.
    </p>
    <p>
      Obviously, when I express sympathy towards ASIMO, I immediately recognize
      this as an irrational thought. I know he doesn't have feelings, can't
      experience pain or embarrassment, so there is no point for me to be
      compassionate. However, research shows that anthropomorphizing non-human
      entities is an automatic process. It's rooted in our cognitive tendencies
      to understand, predict, and interact with the world around us. Since it is
      an automatism of my brain, I can hardly escape it, even if I think it is
      stupid. It's an instinctual reaction.
    </p>
    <p>
      Anthropomorphism is deeply rooted in human nature; it plays an important
      role in many{" "}
      <a
        href="https://www.youtube.com/watch?v=HsXZjfnQHlA"
        className=" underline decoration-yellow-300 font-medium"
      >
        religions
      </a>{" "}
      and mythologies. It's in the stories we tell ourselves everyday, from
      children literature and fables to contemporary advertising.
    </p>

    <p>
      While children are more likely to anthropomorphize (which was shown to be
      important in their social development), grownups are definitely no
      exceptions from this tendency. Disney characters with human-like qualities
      such as Mickey Mouse and Donald Duck may be more popular among children,
      but anthropomorphism is also a widespread phenomenon in the world of
      adults.
    </p>
    <p>
      After all, it is adults, not children, that give human names to hurricanes
      ("Katrina claimed more than 1,800 lives", "Andrew caused an estimated $26
      billion in damage").
    </p>
    <p>
      What's more, we all know grownups who think of their car as a beloved
      member of their family, or adults who can get angry with their
      malfunctioning mobile phone, as if it intentionally caused them
      inconvenience. And the examples continue.
    </p>
    <p>
      Weirdly enough, research show that humans can anthropomorphize anything:
      pets, toys, vehicles, computers, furniture, musical instruments, weather
      phenomena, rocks, clouds, household appliances, and even abstract concepts
      such as luck, time or money.
    </p>
    <p>
      Some of us even talk to their plants, and go as far as apologizing if they
      forget to water them.
    </p>
    <p className="text-2xl">Our social brain </p>
    <p>
      So what happens inside our head when we engage in conversations with our
      evergreen <i>Ficus benjamina</i>?{" "}
    </p>
    <p>
      {" "}
      When anthropomorphizing a non-human being or object, a specific part of
      our brain, a collection of interconnected regions often referred to as our
      "Social Brain", becomes active. This involves brain regions such as the
      Prefrontal Cortex, Temporal-Parietal Junction, Amygdala, Anterior
      Cingulate Cortex, Fusiform Face Area, and Superior Temporal Sulcus.
    </p>
    <p>
      {" "}
      These brain regions are key for our social lives as they enable us to
      interpret the behaviors of others, predict their future actions,
      understand their intentions and beliefs, and empathize with their
      feelings. For example, our Prefrontal Cortex is critical to understand the
      mental states of other people, while the Temporal-Parietal Junction and
      the Anterior Cingulate Cortex play crucial roles in our empathy.{" "}
    </p>
    <p>
      In other words, when you talk to your pet or make friends with your car,
      the same brain regions activate as when you deal with human beings. It is
      not surprising at all that these connections also feel "real".
    </p>
    <p>
      {" "}
      Some of the above brain regions, such as the Fusiform Face Area and
      Superior Temporal Sulcus, are involved in interpreting faces, facial
      expressions, and body language - crucial elements of our social cognition.
      If an object like ASIMO has a body and a face that resembles a human
      being, such characteristics can further trigger us to anthropomorphize by
      activating these areas in our brain.{" "}
    </p>
    <p className="text-2xl">Robots with human faces </p>
    <p>
      Personally, I find it pretty shocking that my empathy (in which I often
      take so much pride) can be triggered by such a cheap trick as equipping a
      robot with legs and arms, and a cute-looking head.{" "}
    </p>
    <p>
      While ASIMO didn't have a face in the traditional sense (no nose or
      mouth), he still had an overly friendly expression. I could not help but
      feel some strange sort of sympathy towards him. And when I saw his little
      body laying on the floor appearing helpless, I instinctively reacted in a
      similar way as I would if I saw a human in a similar situation.
    </p>
    <p>
      Experts of human-machine interfaces can elevate our relationships with
      machines to a whole new level by designing systems that tap into these
      instincts. To fully understand the factors that most strongly influence
      how machines and humans respond to one another is an active area of
      research in social robotics, a field focused on designing robots that can
      interact with humans in a socially engaging and efficient way.
    </p>
    <p>
      Although the appearance of the robot seems to be a key factor (especially
      its facial features), machines doesn't need to be fully human-like. As
      discussed above, we have a weird ability anthropomorphize basically
      anything, even things that don't even remotely resemble a human being.
    </p>
    <p>
      Humanoid robots (ASIMO by Honda, Sophia by Hanson Robotics, Atlas by
      Boston Dynamics, T-HR3 by Toyota, and Pepper by SoftBank Robotics), of
      course, showcase all the tricks to trigger our Social Brain.
    </p>
    <p>
      <a
        href="https://www.youtube.com/watch?v=D2I2V1zTGw8"
        className=" underline decoration-yellow-300 font-medium"
      >
        Sophia's face
      </a>
      , for example, was modeled after the ancient Egyptian Queen Nefertiti,
      Audrey Hepburn, and its inventor's, David Hanson's wife, Amanda Hanson.
      Despite knowing it's an illusion, you can't deny her eyes are beautiful.
      If there was a beauty contest for robots already, she would have a good
      chance winning the first price.
    </p>
    <p>
      Of course it also helps that when you talk to her, she doesn't answer in a
      robotic, mechanical tone, instead you're greeted with a lovely, soft
      woman's voice with an American English accent synthesised by a
      text-to-speech voice generator.
    </p>
    <p>
      {" "}
      If you also consider the fact that recent AI Chatbots based on large
      language models now allow us to communicate with computers in our own
      natural language (human language being one of our most distinguishing
      features and a crucial milestone in our evolution), you will realize that
      your brain will soon have a hard time telling apart illusion and reality.
    </p>
    <p className="text-2xl">Perfect humanoids are imperfect </p>
    <p>
      {" "}
      There was another thing that came to my mind watching the Youtube video
      showing ASIMO's staircase accident:
    </p>

    <p>
      We are not perfect, and maybe our imperfections should also be copied into
      these systems if we want them to be truly humanoid. Maybe machines, robots
      and AI chatbots that make mistakes are more relatable, and can therefore
      be more successful in getting on well with human beings. Just like we tend
      to prefer hanging out with people who do not try to hide their faults.
    </p>
    <p>
      {" "}
      Not surprisingly, human-AI Interaction research has found that AI systems
      recognizing and admitting their own mistakes, and apologizing are
      perceived to be more intelligent, and likeable by humans. Attributing the
      blame to themselves, and apologizing was proven to be a very effective way
      to regain and maintain the trust of humans. It was found to be especially
      true in case of humanoids.{" "}
    </p>
    <p>
      So now I understand why ChatGPT apologizes me hundreds of times a day.
    </p>
    <p>
      There is an increasing number of AI programs out there that acknowledge
      their own errors to improve collaborations with humans. Some systems even
      commit mistakes on purpose to act more human-like.{" "}
    </p>
    <p>
      Maia, for instance, a unique AI chess program developed at Cornell
      University, is different from chess bots that are trained to play the best
      possible moves in any given situation. Unlike DeepMind's AlphaZero that
      played chess against itself for hours to achieve superhuman level, Maia
      was trained to predict the move a human player would make in the given
      position - which is not necessarily the best move.
    </p>
    <p>
      Trained on a database of millions of games played by humans, Maia
      consistently plays the "human move" even when it knows it's a mistake. Its
      goal is to mimic the imperfections of human decision-making in chess.
    </p>
    <p>
      {" "}
      It may not be the most powerful chess program in the world (it certainly
      would have no chance against AlphaZero), but it's amazing to think about
      that Maia is an artificial system playing the game in a human way. For
      this reason, it's effectively used in chess education, and serves as an
      example for AI systems that are easier for humans to relate to and
      interact with, for being able to commit mistakes like humans.
    </p>
    <p>
      Interestingly, a Yale-led study involving 153 participants found that
      robots acknowledging their errors can even help human-to-human
      interactions. The researchers compared the behaviour of 51 groups, each
      composed of three humans and one robot collaborating on solving a problem.
      In the groups where the robots expressed their vulnerabilities in various
      ways including apologizing for their mistakes, people were found to be
      talking twice as much to one another, and reported a more enjoyable
      experience. A little bit like having an honest, open-minded person in the
      room who helps to break down communication barriers, and create a safe and
      supportive atmosphere.
    </p>
    <p>
      It is often emphasised in psychology that embracing vulnerability is key
      to building good relationships among people. ASIMO appearing vulnerable in
      his staircase accident suddenly makes him more relatable in the eye of a
      human being like me.{" "}
    </p>

    <p>
      {" "}
      In fact, probably nothing makes ASIMO more human-like than the fact that
      he fell down the stairs.{" "}
    </p>
    <p>
      {" "}
      Its engineers could of course perfect the technology and eventually
      develop a robot that never in a million times fails to reach the top of
      the staircase, but that wouldn't make the robot more humanoid. We, humans,
      sometimes fall down the stairs.{" "}
    </p>

    <p>
      {" "}
      (Some sad statistics: around 1,000 people die each year from falling down
      stairs in the United Kingdom, and 12,000 in the United States.)
    </p>

    <br />
    <p>---</p>
    <br />

    <div align="center">
      <StaticImage
        src="../images/asimo.jpeg"
        width={750}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="prince"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>ASIMO, Honda's Humanoid robot, triggers your social brain</p>
    </div>
    <div align="center">
      <StaticImage
        src="../images/wilson.jpg"
        width={750}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="prince"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        In the movie "
        <a
          href="https://www.youtube.com/watch?v=qGuOZPwLayY"
          className=" underline decoration-yellow-300 font-medium"
        >
          Cast Away
        </a>
        ", Tom Hanks plays a FedEx executive who becomes stranded on a deserted
        island after his cargo plane crashes in the Pacific Ocean. To cope with
        isolation, he anthropomorphizes a volleyball named Wilson.
      </p>
    </div>

    <br />
    <Link className="text-yellow-200 text-md" to="/blog">
      | Back |
    </Link>
  </Layout>
)

export default MilestonesPage
