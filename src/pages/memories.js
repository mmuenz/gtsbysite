import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/SEO"
import MyToggle from "../components/MyToggle"
import { StaticImage } from "gatsby-plugin-image"

const MemoriesPage = () => (
  <Layout>
    <SEO
      title="In loving memory of my first computer"
      description="In loving memory of my first computer (Márton Münz's website)"
    />
    <p className="text-3xl">In loving memory of my first computer</p>
    <p className="text-yellow-300 text-md pb-2">
      Apr 8, 2023 | Tech - 15 min read
    </p>
    <p>
      I am writing this blog post on my Apple laptop, a 13-inch MacBook Pro with
      M1 chip, 8 GB RAM and 512 GB SSD hard drive. It's a fantastic computer. I
      use it for everything: work and entertainment, keeping in touch with my
      family and friends, studying, writing, reading the news, shopping online.{" "}
    </p>
    <p>
      As a computational biologist, I also use this laptop for data analysis and
      programming, launching{" "}
      <a
        href="https://en.wikipedia.org/wiki/Slurm_Workload_Manager"
        target="_blank"
        className=" underline decoration-yellow-300 font-medium"
      >
        Slurm jobs
      </a>{" "}
      on a remote computer cluster, and managing servers in the{" "}
      <a
        href="https://aws.amazon.com/"
        target="_blank"
        className=" underline decoration-yellow-300 font-medium"
      >
        AWS cloud
      </a>
      .
    </p>
    <p>
      This laptop also stores thousands of photos and videos of me and my wife,
      memories of distant holidays, some of our favourite songs, bookmarked
      links I want to revisit one day, my freelancer invoices, and my completed
      tax forms. Recently, I bought an external monitor and a mechanical
      keyboard. I love the clicking sound when I'm typing.
    </p>
    <p>It's safe to say, my life, as a program, is running on this laptop.</p>
    <p>
      I know people who can think of their computers merely as practical tools
      and do not form any sentimental attachments to these devices. I'm not one
      of them. I tend to get emotional when it comes to thinking about my
      computer, I see it as my companion, a friend, or worse, a member of my
      family.
    </p>
    <p>
      Usually I even give it a name. I called the computer I used for writing my
      PhD thesis "Leo", after Lionel Messi, the Argentinian soccer player,
      because I wanted to remind myself that my very first Macbook Pro was a
      genius, capable of extraordinary achievements. I then gave my next laptop
      the name "Freddie", after the lead vocalist of Queen, another genius for
      his talent in both performance and songwriting. What is this if not a
      textbook example of{" "}
      <Link
        to="/humanoids"
        className=" underline decoration-yellow-300 font-medium"
      >
        anthropomorphism
      </Link>
      ?
    </p>
    <p>
      Nowadays, with the arrival of AI chatbots, natural language interfaces and
      synthetic voices, my relationship with my computer is getting even more
      complicated.
    </p>
    <p>
      So what happens when someone, like me, must say goodbye to their computer?
      Is it like losing a friend? A loss to be mourned?
    </p>
    <p></p>
    <p>
      You may have to say farewell to a computer for various reasons. Either
      because there is a hardware failure, and the guy in the Mac service
      convinces you that it's not worth the money replacing the faulty element,
      better to buy a whole brand new equipment. Or perhaps you need a new
      computer with more powerful specifications in order to be able to upgrade
      your operating system. Over time, computer hardware may become outdated,
      new technologies are developed, older systems can no longer support the
      latest applications. You may also accidentally spill your glass of Coca
      Cola on the keyboard, and your laptop gets severely damaged.
    </p>
    <p>
      Either way, you have to form new emotional bonds with a new computer after
      unboxing it on your desk, and with deep sorrow you must forget the old
      one.
    </p>
    <p>
      But you never forget your first computer. It forever remains in your
      heart. Mine was an IBM PC XT Model 286.
    </p>
    <p className="text-2xl">Personal Computer, getting personal</p>
    <p>
      Picture a kid, 10 years old, blissfully running around the house, not
      being able to contain his excitement. He is about to get his first
      computer as a birthday present. Moreover, his dad said it was not going to
      be a Commodore 64 as originally planned. No, it's gonna be a shiny new IBM
      PC.
    </p>
    <p>
      The kid was me, the year was 1991. I was immensely happy, even though I
      had no idea what a computer was.
    </p>
    <p>
      Then slowly but surely we became friends. I learned to play games on it.
      First, the game called "Snake". With the arrow keys (up, down, left, and
      right) I had to keep a snake from colliding with obstacles or itself, and
      the challenge got harder as the snake lengthened. Then I mastered the game
      "Five in a Row". Later (on slightly better computers) other games too:
      "Lemmings", "Civilization", "Sokoban", and my favorite, "Prince of
      Persia". I was driving cars, kicking balls, playing cards, fighting with
      swords, running, jumping, flying. I was not afraid of anything. I had, and
      liked having three lives.
    </p>
    <p>
      My best friend, Köki, came over regularly, and one time he shouted so loud
      during a soccer game against the computer, that our neighbours alerted the
      police.
    </p>
    <p>
      After a while I learned to use the MS-DOS command line. I entered
      directories, copied files, formatted Floppy disks. Then I became an expert
      in using{" "}
      <a
        href="https://www.youtube.com/watch?v=r0lVZnijrZs"
        target="_blank"
        className=" underline decoration-yellow-300 font-medium"
      >
        Norton Commander
      </a>
      . A few years later I even wrote my first computer program, a Dice Poker,
      in the{" "}
      <a
        href="https://www.youtube.com/watch?v=0ZQCXXhXq6Q"
        target="_blank"
        className=" underline decoration-yellow-300 font-medium"
      >
        Turbo Pascal
      </a>{" "}
      language - a programming language that is today considered extinct. I was
      especially proud of the part that generated a random number between 1 and
      6.
    </p>
    <p>
      The computer has also become a respected member of our family. At 12, I
      was tasked to teach my dad, a journalist, to start using the word
      processor instead of his worn out typewriter. Since I didn't speak any
      English, I thought "Edit" in the top menu bar was referring to a woman, so
      I decided to skip explaining him that part.
    </p>

    <p className="text-2xl">"Out of memory" errors</p>
    <p>
      You can feel a very strong nostalgia towards your first computer. It was
      the coolest thing ever, despite having only 640 KB RAM, 12500 times less
      memory than my current laptop has. It had only a 40 MB hard drive, so it
      would have hardly been able to store a single raw 15 Megapixel photo file.
      It used 5 1/4 inch floppy disks with a capacity of only 360 kilobytes that
      were able to store 1.4 million times less data than my current SSD. It had
      only a monochrome VGA monitor in contrast with the Apple Retina Display of
      my current laptop supporting millions of colours. And, of course, it
      lacked an Internet connection. Not to mention it weighed 30 times more.
    </p>
    <p>
      That old machine, my first friend, was incredibly stupid compared to my
      current one.
    </p>
    <p>
      So why do I find myself longing for the feel of that old keyboard, and the
      annoying, beeping sound of the internal speaker? If we wanted, Köki and I
      could play a hyper-realistic version of soccer together this afternoon,
      streaming real time via high speed Internet connection, even though we now
      live 2000 km apart. Yet, instead, I find myself googling retro computer
      emulators, i.e. software that mimic the functionality of my old IBM PC
      286.
    </p>
    <p>
      Apparently, I am not the only one. Many such software tools exist. For
      instance, one can download{" "}
      <a
        href="https://www.dosbox.com/"
        target="_blank"
        className=" underline decoration-yellow-300 font-medium"
      >
        DOSBox
      </a>{" "}
      that emulates the MS-DOS operating system, allowing them to run old
      DOS-based games and applications. As its developers put it on the website:
      "You can re-live the good old days with the help of DOSBox."
    </p>
    <p>
      And, of course, there is an online retro version of Snake, that looks
      exactly as it looked on my first, monochrome monitor.
    </p>
    <p>
      I have even downloaded the original User Manual of my IBM PC 286 from a
      website. The very same tutorial that was included in the box my dad gave
      me on my 10th birthday. Complex figures, detailed descriptions. In it,
      there's a sentence on the first page that I still find poetic.
    </p>
    <p>
      It reads: "You are the most important element of a properly working IBM
      computer system. You bring the elements of hardware and software together.
      "
    </p>

    <p className="text-2xl">Not running out of memories</p>
    <p>
      Where are you now, my first computer? I don't believe in reincarnation.
      You must be on some junkyard along with many other discarded machines, or
      shredded into small pieces, and melted into a large mass of aluminum. I
      won't see you again, can't have you on my desk anymore.{" "}
    </p>
    <p>
      Maybe one day I will see your clone in one of the world's many computer
      museums. From the Heinz Nixdorf MuseumsForum in Paderborn, Germany to the
      Retro Computer Museum in Leicester, England and The Computer History
      Museum in Mountain View, California, USA, there are several institutions
      dedicated to the memory of computers. Since we spend our lives in front of
      screens, computers are now part of our cultural heritage.
    </p>

    <p className="text-2xl">There even is a word for it</p>
    <p>
      Why do we have computer museums, retro computer emulators, and an
      increasing fascination for extinct programming languages?
    </p>
    <p>
      These are all manifestations of a phenomenon known as{" "}
      <i>tech nostalgia</i> (or in one word: "technostalgia"), which is defined
      by Wiktionary as "fond reminiscence of, or longing for, outdated
      technology".
    </p>
    <p>Longing for technology that we once thought was cool.</p>
    <p className="text-2xl">My playlist</p>
    <p>
      As I look through the old IBM User Manual, I open a new tab in my web
      browser to start one of my YouTube playlists in the background. First up
      is Kraftwerk, the German electronic band formed in Düsseldorf in 1970.
      Songs from their eighth studio album,{" "}
      <a
        href="https://www.youtube.com/watch?v=sn-OEe-dlp4&pp=ygUUY29tcHV0ZXIgd29ybGQgYWxidW0%3D"
        target="_blank"
        className=" underline decoration-yellow-300 font-medium"
      >
        "Computer World"
      </a>
      . Unique, futuristic tone.{" "}
    </p>
    <p>The first song on my playlist has simple lyrics, only one line:</p>
    <p>
      <i>
        "It's more fun to compute" <br />
        "It's more fun to compute" <br />
        "It's more fun to compute"
        <br />
        "It's more fun to compute"
      </i>
    </p>
    <p>
      The second track, "Computer Love", makes me emotional again. It reminds me
      I even met my wife through a computer, in a chat room, somewhere on the
      Information Superhighway. The lyrics read:
    </p>
    <p>
      <i>
        "I call this number, I call this number <br />
        For a data date, for a data date <br />
        I don't know what to do, I don't know what to do
        <br />I need a rendezvous, I need a rendezvous"
      </i>
    </p>
    <p>
      In the third song, "Pocket Calculator", I hear Kraftwerk's futuristic
      vocal:
    </p>
    <p>
      <i>
        "I am adding <br />
        And subtracting <br />
        I'm controlling <br />
        And composing <br />
        I'm the operator with my pocket calculator <br /> I'm the operator with
        my pocket calculator"
      </i>
    </p>

    <p> Next comes the song "Home Computer":</p>

    <p>
      <i>
        "I program my home computer
        <br />
        Beam myself into the future"
      </i>
    </p>

    <p className="text-2xl">Can we simulate a soul?</p>

    <p>
      Indeed, let's beam ourselves back to the future (i.e. recent past).
      Fourteen years after our online rendezvous in that virtual chat room, my
      wife and I went to see a concert by the Icelandic musician, Jóhann
      Jóhannsson. He played his new studio album, Orphée, and it was brilliant.
      We were heartbroken to hear the tragic news of him passing away only 10
      days later. I have added Jóhannsson, too, to my computer-inspired
      playlist. A few songs from his fourth full-length studio album, titled{" "}
      <a
        href="https://www.youtube.com/watch?v=QcmdbMICKDs"
        target="_blank"
        className=" underline decoration-yellow-300 font-medium"
      >
        "IBM 1401, A User's Manual"
      </a>
      .
    </p>
    <p>
      In "IBM 1401, A User's Manual", Jóhannsson used sounds produced by the IBM
      1401 computer, the first high-volume, stored-program, core-memory,
      transistorized mainframe computer. As sections in a user manual, the
      tracks on his album were named after different elements of the machine,
      such as the Processor, the Punch Card Reader and the Magnetic Tape Unit.
    </p>
    <p>
      "Some theorists claim humans can simulate anything with a computer, even a
      soul... and with IBM 1401 - A User’s Manual, Jóhannsson comes chillingly
      close" - wrote Sal Cinquemani, co-founder and co-editor of Slant Magazine.
    </p>
    <p>
      Back to the year 2023, I continue to be very excited about computers. It
      is the year when the general public (hundreds of millians of people) met
      AI for the first time. Many think machines are getting frighteningly close
      to mimicking human intelligence. Some fear computers becoming autonomous.
    </p>
    <p>
      Scary indeed. I want to believe what I read at the age of 10 on the first
      page of the user manual of my first IBM PC: we, humans are still the key
      element in a properly functioning computer system. We are the ones who
      plug it together.
    </p>
    <p> And, hopefully, we will be able to unplug it when it's time.</p>

    <br />
    <p>---</p>
    <br />

    <div align="center">
      <a
        href="https://www.wikihow.com/Use-DOSBox#/Image:1409794-17.jpg"
        target="_blank"
      >
        <StaticImage
          src="../images/prince.jpeg"
          width={750}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="prince"
          style={{ marginBottom: `1.45rem` }}
        />
      </a>
      <p>
        Tech nostalgia in action: "Prince of Persia", released in the early 90s,
        running in 2023 on DOSBox, a retro MS-DOS operating system emulator. For
        many, it brings back old memories.
      </p>
    </div>

    <br />
    <Link className="text-yellow-200 text-md" to="/blog">
      | Back |
    </Link>
  </Layout>
)

export default MemoriesPage
