import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MyToggle from "../components/MyToggle"
import { StaticImage } from "gatsby-plugin-image"

const MilestonesPage = () => (
  <Layout>
    <Seo title="Milestones" />
    <p className="text-3xl">Expanding my imagination with coding</p>

    <p className="text-yellow-300 text-md pb-2">
      Jul 20, 2023 | Tech, Humans, Art - 20 min read
    </p>

    <p>
      I've recently read an interview with Vera Molnár, the world-renowned
      Hungarian-born digital artist who is widely considered one of the pioneers
      of generative art. She started experimenting with making visual art using
      computers in the late 1960s, in Paris, working at a Sorbonne research lab,
      mastering two programming languages, Fortran and BASIC, both revolutionary
      at the time.
    </p>
    <p>
      When Vera Molnár begun her experiments in generating images with the help
      of computers, and started to incorporate software-generated randomness,
      computer programming was still in its infancy. The BASIC programming
      language was developed by another Hungarian, the mathematician and
      computer scientist John George Kemény, just a few years earlier. Fortran,
      the language that later dominated scientific computing, was just invented
      by IBM in the late 1950s.
    </p>
    <p>
      In the interview, Vera Molnár explained how she relied on
      computer-generated random effects in her artistic process. On the other
      hand, as she pointed out, incorporating randomness had a history in art
      way before computers had been invented. Wolfgang Amadeus Mozart is one
      example she mentions; the maestro was believed to have used dice when
      composing some of his music.
    </p>
    <p>
      (A musical dice game published in 1792, "Musikalisches Würfelspiel", as
      called in German, might even originate from Mozart, personally. A similar
      game was attributed to Joseph Haydn, although neither were confirmed.
      Interestingly, systems of using dice to randomly generate music were
      really popular in the 18th century, and can be considered early examples
      of "generative art".)
    </p>
    <p>
      Also long before the birth of computers, in 1913, French artist Marcel
      Duchamp was playing with similar ideas working on his piece "3 Standard
      Stoppages". This piece emerged from the random fall of three pieces of
      threads dropped onto a canvas. It was, as he described, an experiment to
      “preserve forms obtained through chance.”
    </p>
    <p>
      Similarly, the American poet and novelist, William S. Burroughs wrote many
      poems with the technique of cutting up text and randomly rearranging the
      pieces. His so called "cut-up method" was later used by artists such as
      David Bowie, Kurt Cobain and Thom Yorke in writing some of their iconic
      lyrics.
    </p>
    <p>
      Thom Yorke, for instance, pulled lines at random from a hat when working
      on the lyrics for Radiohead's "Kid A" album.
    </p>
    <p>
      David Bowie even had a computer program called Verbasizer, developed by
      him and his friend, Ty Roberts, that was inputted text from multiple
      sources including newspapers, hand-written words, and other literary
      source material, to facilitate the generation of unique and eclectic
      combination of words and literaly images for his music.
    </p>
    <p>
      According to Bowie: “If you put three or four dissociated ideas together
      and create awkward relationships with them, the unconscious intelligence
      that comes from those pairings is really quite startling sometimes, quite
      provocative.”
    </p>
    <p className="text-2xl">Artificial intuition</p>
    <p>
      In generative art, the artist gives up part of her control over the final
      output, and relies on an external system or algorithm that often involves
      some element of randomization. At the end, the artist may select from the
      different "randomized" outputs the system has generated, and decide to use
      them as they are, modify them, or combine them with other elements to
      create a final piece.{" "}
    </p>
    <p>
      As Vera Molnár, who experimented with elementary geometrical shapes all
      her career, said: "The machine will show you billions of possibilities, of
      which, with your limited imagination, couldn’t have thought of. So it
      enriches the senses."{" "}
    </p>
    <p>
      Mozart's trick, rolling the dice can take a musical piece into unexpected
      directions. Computers, however, when programmed cleverly, are able to
      generate remarkably complex random patterns.{" "}
    </p>
    <p>
      For Vera Molnár, the real surprise was that these patterns created by the
      cold logic of the computer, opened up a new unknown universe to explore as
      part of her creative process. She used randomness generated by her BASIC
      and Fortran code as a sort of "artificial intuition", as she called it.{" "}
    </p>
    <p>
      "I think this is what’s paradoxical about the computer" - she explained. -
      "It actually helps you to bring into the world what you had only imagined,
      even when you yourself don’t yet know what that is."{" "}
    </p>
    <p>
      She definitely dismissed the notion that computers dehumanise art: "The
      opposite is true. Because it’s thanks to all this technology, we can get
      very close to what we have imagined. That otherwise we might not have
      found. [...] So actually humanizes your production. Not dehumanizes, but
      humanizes."{" "}
    </p>
    <p>
      She repeated the same idea in another interview: “This may sound
      paradoxical, but the machine, which is thought to be cold and inhuman, can
      help to realise what is most subjective, unattainable, and profound in a
      human being.”{" "}
    </p>
    <p className="text-2xl">Travelling with an infinite map</p>
    <p>
      I was touched by Molnár's words. Maybe because I have been thinking for a
      while how to describe the feeling I experience when I'm writing computer
      code for my work. I love programming, but I've struggled to put into words
      why.{" "}
    </p>
    <p>
      Of course, unlike Molnár, I'm not an artist, and the code I write are
      mostly designed to address scientific questions, not to generate patterns
      of any artistic value. I'm also by no means a professional software
      developer. I have no formal education in algorithm design or Agile
      development practices. I'm a self-taught programmer. I'm more instinctive
      than skilled.{" "}
    </p>
    <p>
      Yet, I write computer code almost every day to solve various problems in
      my work. These range from short automation scripts to full data analysis
      pipelines, visualizations, or graphical user interfaces.{" "}
    </p>
    <p>
      Despite the differences, I think everyone who writes code probably shares
      a common sensation. A strange mixture of the feeling of freedom when
      navigating in a space of infinite possibilities (like travelling with a
      map that's infinite in all directions), the beauty when stumbling upon a
      simple, elegant solution, and the satisfaction when you see the different
      pieces finally coming together.{" "}
    </p>
    <p>
      Travelling with an infinite map in your hand, it is only your imagination
      that sets boundaries to what is possible. It turns out, the best way of
      learning is by creating. That way you soon realize the horizons you
      believed were finite actually expand with every step you take.{" "}
    </p>
    <p>
      I would even say my favourite part of my job as a computational biologist
      is programming. Perhaps the daily routine of writing computer code can
      become boring for professional developers, but thankfully I am amateur
      enough to still get very excited every time I create an empty file and
      start typing.{" "}
    </p>
    <p className="text-2xl">Imagination amplifiers</p>
    <p>
      You can perceive computers in very different ways. You may think of them
      as lifeless, number-crunching machines that can do nothing but dry,
      mechanical computations on zeros and ones. Or you can think of them as
      devices that have the potential of augmenting human creativity. How boring
      is the former, how exciting is the latter!
    </p>
    <p>
      Alan Kay, the pioneering computer scientist known for his contributions to
      object oriented programming and the concept of the personal computer,
      thought of computers as machines that augment human imagination. He often
      called them "imagination amplifiers".{" "}
    </p>
    <p>
      Kay believed that rather then using computers as tools for executing
      tasks, we should use them for extending the horizon of our own
      imagination. His dream was to develop computers into a personal dynamic
      medium for creativity.{" "}
    </p>
    <p>
      In other words, computers are not meant to be used the way most people use
      them today. The majority of us use computers for the most banal things
      such as sending emails, scrolling through social media sites, streaming
      videos, browsing images, or online shopping. This is a waste of
      possibilities. In all these cases, we are only passive users of
      applications, and we don't even know how they work.{" "}
    </p>
    <p>
      A computer can be much more than that. If used right, it can augment your
      thinking and creative process. It can be your personal space for exploring
      ideas, experimenting with new concepts, discovering possibilities you
      never thought would exist, acting as a medium for your creativity and
      expression. Like Vera Molnár, you may even feel more human in this space.{" "}
    </p>
    <p>
      Coding is about learning to speak the language of the computer that allows
      you to engage with it fully. It's like being able to talk with the
      machine, as if you two were close friends, and able to tell it precisely
      what you are thinking.
    </p>
    <p className="text-2xl">Turning thoughts into code</p>
    <p>
      What makes computer programming so much fun? It's not just the fact that
      the machine can surprise you with random numbers or unexpected patterns.
      Coding is mostly fun because you are creating something new out of
      nothing. You write code to transform your ideas (your plain thoughts) into
      a functioning system that can, in fact, interact with reality. It's sort
      of like building a bridge between your mind and the real world.{" "}
    </p>
    <p>
      It's an amazing feeling when an idea originally born in your mind takes
      the shape of an executable computer code.{" "}
    </p>
    <p>
      The more complex the code is, the more challenging it may become to put it
      into optimal shape (whatever "optimal" means in this context), but the
      greater the satisfaction one feels. One reason why people love coding is
      the sense of accomplishment it gives.{" "}
    </p>
    <p>
      "Programming can give us both intellectual and emotional satisfaction,
      because it is a real achievement to master complexity and to establish a
      system of consistent rules." - wrote Andrei Ershov, Soviet computer
      scientist, pioneer in systems programming and programming language
      research.{" "}
    </p>
    <p>
      The process of turning our thoughts into code is rarely straightforward;
      it may involve a lot of experimentation, trial and error, iterations,
      testing, refactoring. Several computer scientists including Paul Graham,
      co-founder of Y Combinator, emphasized that this bumpy road of writing a
      computer program is similar to the process artists follow when crafting
      their pieces.{" "}
    </p>
    <p>
      Andrew Hunt, co-author of the book "The Pragmatic Programmer", a classic
      in the software development field, said: "In some ways, programming is
      like painting. You start with a blank canvas and certain basic raw
      materials. You use a combination of science, art, and craft to determine
      what to do with them."{" "}
    </p>
    <p className="text-2xl">Code can be beautiful</p>
    <p>
      "Hold on a sec!" - you may interrupt me at this point. - "The ultimate raw
      material of art is: beauty. By contrast, there is nothing beautiful about
      computer coding, right?"{" "}
    </p>
    <p>Wrong. </p>
    <p>
      A perfectly crafted computer source code, the way it's structured, its
      simplicity, modularity, readability, or elegant solutions, can be
      aesthetically pleasing for programmers the same way mathematicians can
      find theorems and proofs beautiful.{" "}
    </p>
    <p>
      Some even think the beauty of programming is one of its main appeals.
      Donald Knuth, who published a seven-volume book series of computer science
      with the title "The Art of Computer Programming", said in 1968: "The
      process of preparing programs for a digital computer is especially
      attractive, not only because it can be economically and scientifically
      rewarding, but also because it can be an aesthetic experience much like
      composing poetry or music."{" "}
    </p>
    <p>
      "Think of a treehouse." - said Linus Torvalds, creator of the Linux
      operating system - "You can build a treehouse that is functional and has a
      trapdoor and is stable. But everybody knows the difference between a
      treehouse that is simply solidly built and one that is beautiful, that
      takes creative advantage of the tree. It’s a matter of combining art and
      engineering. This is one of the reasons programming can be so captivating
      and rewarding. The functionality often is second to being interesting,
      being pretty, or being shocking."{" "}
    </p>
    <p>
      Beautiful code is typically better code. It's simpler to maintain, extend,
      debug, and reuse. Simplicity, conciseness and readability are more
      pleasing for the eyes, but are also indicators of efficiency.
    </p>
    <p>
      Everyone likes clean, well-organized, and self-explanatory code. No one
      likes spaghetti code. However, implementing a complex solution in simple,
      readable code – marrying complexity with simplicity – can be hard.{" "}
    </p>
    <p className="text-2xl">A way of self-expression</p>
    <p>
      Ultimately, the computer being a creative medium, writing code is a way of
      self-expression. No matter whether you are a beginner or a pro, your
      individuality shows in your code some way or another. First of all, it's
      your own thoughts and ideas you translate into code, secondly, programmers
      all have inherently different, often recognizable styles.{" "}
    </p>
    <p>
      Linus Torvalds said: "One of the reasons people have become so enamored
      with computers is that they enable you to experience new worlds you can
      create, and to learn what’s possible. [...] Within the confines of the
      computer, you’re the creator. You get to ultimately control everything
      that happens. If you’re good enough, you can be God. On a small scale.
      [...] What makes programming so engaging is that, while you can make the
      computer do what you want, you have to figure out how."{" "}
    </p>
    <p>
      Indeed, there are often millions of ways to do the same thing, and you are
      making a lot of choices along the way. What's important here is that
      everyone makes different choices. Your code is infused with your own
      experiences, knowledge, perceptions, and unique problem-solving approach.
      From high-level design decisions to the nitty-gritty of implementation
      details, you bring your individuality into it. The way a function is
      written, the naming conventions chosen, or even the architecture of a
      system can reflect the unique mindset and aesthetics of its creator. You
      are in your code.{" "}
    </p>
    <p>
      Wow, I am in my code. Maybe that's why I enjoy programming so much. In
      some strange, abstract way, it's a mirror. As Steve Jobs has put it in one
      of his interviews, it is "a mirror of your thought process".{" "}
    </p>
    <p className="text-2xl">A creativity explosion</p>
    <p>
      Of course, for artists who do programming, the purpose of self-expression
      is more evident. Several specialized programming languages have evolved
      allowing them to express themselves through code in various different
      domains. Today, Vera Molnár wouldn't need to rely on languages as generic
      as BASIC and Fortran.{" "}
    </p>
    <p>
      She would be able chose from various programming languages, libraries,
      packages, and frameworks created specifically for artists. There is, for
      instance, TouchDesigner, a visual programming language for real-time
      interactive multimedia content, Max/MSP, another visual programming
      language for music and multimedia, Cinder, p5.js and openFrameworks,
      open-source toolkits for creative coding, RunwayML, a suit of intuitive
      creative tools powered by machine learning, or SuperCollider, a platform
      for audio synthesis and algorithmic composition, used by artists working
      with sound.{" "}
    </p>
    <p>
      <i>Creative coding</i> is an umbrella term for various ways of using
      programming and technology for artistic and expressive purposes, such as
      generative art, digital animation and simulation, algorithmically
      manipulated music, virtual reality (VR) and augmented reality (AR)
      installations, physical art pieces that integrate sensors and
      microcontrollers, for instance, interactive motion-sensing sculptures,
      live coding, and many more innovative forms of self-expression.{" "}
    </p>
    <p>
      In "live coding" performances, artists write and modify code on the stage
      live to produce music and visual art in real-time. At algorave parties,
      people come together to dance to music generated by algorithms, often
      accompanied by live coding sessions.{" "}
    </p>
    <p>
      The name "creative coding" is of course somewhat misleading since all
      coding is, by definition, creative.
    </p>
    <p>
      Even when the output is not expressive or entertaining, even when the
      system itself sounds boring, coding the system needs creative thinking.
      Enormous creativity goes into the development of the software that
      controls a nuclear power plant, or a public restroom maintenance system
      that notifies the cleaning staff when stalls are used a certain number of
      times or when the toilet paper is running out.{" "}
    </p>
    <p className="text-2xl">Programming for five-year-olds</p>
    <p>
      Alan Kay had a vision. He imagined a future where personal computers are
      not primarily used for sending emails and scrolling images, but as true
      extensions of our minds, creative spaces for testing and discovering new
      ideas.{" "}
    </p>
    <p>
      At the core of Kay's vision was that children could benefit from using
      computers at a very early age, as these devices would facilitate their
      development via creative learning.{" "}
    </p>
    <p>
      In the late 60s / early 70s, Kay designed Dynabook, "a personal computer
      for children of all ages", which was planned to be a portable
      (notebook-sized) device with a graphical user interface. He hoped it would
      become a dynamic medium for creative thought kids would use both inside
      and outside of schools.{" "}
    </p>
    <p>
      He envisioned that children would also be able to learn programming on the
      Dynabook using, for example, Smalltalk, an object oriented programming
      language he and his colleagues at Xerox Palo Alto Research Center
      developed specifically for this purpose.{" "}
    </p>
    <p>
      As Kay himself explained: "[...] careful use and design of interactive
      computing could make a qualitative difference in the higher-level shaping
      of children’s thinking - not just learning important things earlier, but
      in taking on a much more powerful “epistemological stance” towards the
      world they were growing up in - to the point where they should be able to
      think much better than most adults do today (not a big feat, but
      desperately needed), and be stronger shapers of the future (really
      desperately needed)."{" "}
    </p>
    <p>
      In some sense, kids would be more intuitive and innovative users of such
      tools than adults, due to their natural curiosity, imagination and
      creativity, as well as their extraordinary ability to mix concepts, and
      come up with original ideas.{" "}
    </p>
    <p>
      Just as children's brains are incredibly good at absorbing spoken
      languages, they are likely very efficient in picking up programming
      languages easily.{" "}
    </p>
    <p>
      Although the Dynabook never became a reality due to the technological
      limitations of the time, its concepts later influenced the development of
      personal computers, especially the design of laptops and tablets. Kay's
      ideas also inspired initiatives such as the "One Laptop Per Child"
      project, which aimed to develop and distribute a low-cost laptop known as
      the "Children's Machine" to kids around the world.{" "}
    </p>
    <p>
      Studies at the MIT Media Lab showed that children at the age of 5 can
      already be introduced the basic concepts of programming, and by the age of
      7, many can start coding.{" "}
    </p>
    <p>
      Scratch, for instance, a visual programming language developed by the
      Lifelong Kindergarten Group, a research group at the MIT Media Lab, is
      recommended for ages 8 and up. It enables children to build complex
      programs by dragging and dropping graphical blocks that represent code
      structures. Incredibly, with these tools, kids quickly become familiar and
      proficient with core programming ideas such as loops, variables,
      conditional statements, and event handling.
    </p>
    <p>
      ScratchJr, a simplified version of Scratch, was designed to introduce
      programming concepts specifically to children aged 5-7, and was applied
      with much success.{" "}
    </p>
    <p>
      The same way kids are taught how to read and write, it is increasingly
      important to provide them with "coding literacy", as programming is
      becoming an essential skill in today's world.{" "}
    </p>
    <p>
      The fact that children are able to start learning to code at a very early
      age shows how much programming resonates with basic human thought
      processes and creativity.{" "}
    </p>
    <p className="text-2xl">The essence of programming</p>
    <p>
      Who should learn programming? Steve Jobs had a{" "}
      <a
        href="https://www.youtube.com/watch?v=BRTOlPdyPYU"
        className=" underline decoration-yellow-300 font-medium"
      >
        simple answer
      </a>
      : Everyone.{" "}
    </p>

    <p>
      As I mentioned earlier, although I use programming for my job as a
      scientist, I am not a formally trained programmer. I guess the point I
      want to illustrate with my example is that not everyone who codes is a
      professional developer.{" "}
    </p>
    <p>
      My own coding journey took me from the Turbo Pascal programming language
      (at the age of 12) through C and C# (at my early 20s), Java and MATLAB (at
      my mid-20s) to Python, R and JavaScript, the programming languages I
      mostly use today for my work.{" "}
    </p>
    <p>
      Of course, it's not only computers that can be programmed. If you're
      programming a more specialized device than a general-purpose computer, you
      might not need a general-purpose programming language. Many
      domain-specific programming languages are designed specifically for
      instructing certain types of machines. Examples include the KUKA Robot
      Language (KRL), which controls KUKA industrial robots, and the Zebra
      Programming Language (ZPL), used for programming label printers to create
      custom barcodes, QR codes, and other print designs.{" "}
    </p>
    <p>
      So what is programming then? The concept can very broad, and we don't
      necessarily have to mention "computers" in the definition.
    </p>
    <p>
      All it needs is someone (let's call her the "Programmer") who is able to
      record a sequence of actionable steps (the "code"), and an agent
      ("Executor") who understands and executes the list of instructions. Many
      things can fit into this general equation. In some sense, cooking a dinner
      based on a Potato & Leek Soup recipe from your favourite Julia Child
      cookbook can also be regarded as executing a program - with you as the
      Executor, the Potato & Leek Soup recipe as the code, and Julia Child as
      the Programmer.{" "}
    </p>
    <p>
      (If you find this cooking example far-fetched, check out the idea of
      "human programming", defined as "the practice of writing sequences of
      instructions for humans" in{" "}
      <a
        href="https://humanprogramming.substack.com/p/the-untapped-potential-of-human-programming"
        className=" underline decoration-yellow-300 font-medium"
      >
        this article
      </a>
      . The idea of writing "human programs" in a similar way software are coded
      for computers has numerous real-life applications from training routines,
      assembly line instructions, emergency evacuation procedures, to
      educational curriculums, how-to guides and team-building exercises.){" "}
    </p>
    <p>
      To put it simply, programming is about creating a sequence of operations
      to achieve a specific goal. While the media vary, the core principles are
      the same: you have a system with known capabilities, and you provide it
      with instructions designed to produce a desired outcome. In essence, it is
      about bridging the gap between intention and execution. As such, it has a
      universal importance in our lives.{" "}
    </p>
    <p className="text-2xl">A very human medium </p>

    <p>
      Computer programming is often considered a technical subject, and it
      indeed is, but as discussed above, there is something inherently human
      about it. It's a journey of exploration and expression. One must delve
      deep into it to truly understand the amplifying effect if has on
      creativity and imagination.{" "}
    </p>

    <p>
      For me, personally, programming gives a feeling of accomplishment, and I
      find it extremely stimulating, in many ways. I love breaking down complex
      problems into simpler ones, building systems from the bottom up, and
      seeing how things are taking shape. Just like many coders, I often find a
      flow experience in programming.{" "}
    </p>

    <p>
      The way we write code has been changing recently with the arrival of
      Artificial Intelligence powered tools such as ChatGPT, OpenAI Codex, and
      GitHub Copilot. These new technologies can multiply one's productivity
      with the help of AI coding assistants that understand natural human
      language. We can now describe our requirements as we would explain them to
      another person, and the AI may generate the code for us in a split of a
      second.{" "}
    </p>

    <p>
      {" "}
      As OpenAI's Andrej Karpathy, former Senior Director of AI at Tesla,
      phrased it perfectly on Twitter: "The hottest new programming language is
      English."
    </p>

    <p>
      In my experience so far, using AI assistance in programming is not only
      not making it less enjoyable, but it actually makes the process even more
      exciting.{" "}
    </p>

    <p>
      People, as we have seen, write code for a variety of different reasons,
      but the shared love for problem solving connects them. Problem solving has
      been at the core of the evolution of the human brain, among other factors.{" "}
    </p>

    <p>
      Vera Molnár said: "‘I think that there is nothing more human than a
      computer because it was invented by men. It wasn’t the good Lord who
      plopped it down in front of us, it was made by an intelligent man. Thus,
      the most human art is made by computer, because every last bit of it is a
      human invention’."{" "}
    </p>

    <p>
      I have to confess, I feel really alive when I sit by the computer, create
      a new file, begin staring at the empty screen, a blank canvas, the
      blinking cursor. There's certainly an adrenaline rush in knowing it's only
      up to me what is going to happen next.
    </p>

    <br />
    <p>---</p>
    <br />

    <div align="center">
      <StaticImage
        src="../images/children.jpg"
        width={750}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="prince"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        Kids can pick up coding at an early age suggesting that programming
        resonates with basic human thought processes and creativity{" "}
      </p>
    </div>

    <div align="center">
      <StaticImage
        src="../images/livecoding.jpg"
        width={750}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="prince"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        At algorave parties accompanied by live coding, people dance to music
        generated by algorithms
      </p>
    </div>

    <br />
    <Link className="text-yellow-200 text-md" to="/blog">
      | Back |
    </Link>
  </Layout>
)

export default MilestonesPage
