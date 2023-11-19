import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ToggleDiv from "../components/ToggleDiv"

const MilestonesPage = () => (
  <Layout>
    <Seo title="Milestones" />
    <span className="text-3xl">Milestones in my life</span>
    <div className="pt-5">
      <span>
        Here are the most important events of my life so far, from a bird's-eye
        view.
      </span>
    </div>

    <ToggleDiv
      elements={[
        {
          key: 1,
          title: "I was born in 1981, in Budapest.",
          content: "",
        },
        {
          key: 2,
          title: "Wrote my first line of code in 1993.",
          content:
            "I was 12 when I wrote my first 'Hello World' program in Turbo Pascal.",
        },
        {
          key: 3,
          title: "1993-1994: I lost both my grandmothers.",
          content: "",
        },
        {
          key: 4,
          title:
            '1996: I read "Life: The Unfinished Experiment" by Salvador Edward Luria.',
          content:
            "I read this little book, written by the Nobel Prize-winning Italian microbiologist, at the age of 15. It had a profound impact on me, although back then I had no idea how much it captured my imagination. It was the first time I learned about DNA and RNA molecules, and how information was processed within a living cell. It was mesmerizing.",
        },
        {
          key: 5,
          title: "My first article was published in Népszabadság in 2001.",
          content:
            "My article on a French research group freezing human ovaries was published in Hungary's largest independent daily paper, Népszabadság. It marked the start of my brief science journalist career. Dozens of other articles followed in the next couple of years. Sadly, Népszabadság no longer exists, it became a victim of economic and/or political forces. Nevertheless, back then it was sold in hundreds of thousands of copies.",
        },
        {
          key: 6,
          title: "I got ill in 2003.",
          content:
            "I was diagnosed with end-stage kidney failure. It seemed as though my life was nearing its end.",
        },
        {
          key: 7,
          title: "I was reborn in 2004, Budapest.",
          content:
            "I was incredibly lucky to undergo a successful kidney transplantation on March 13, 2004. Since then, I have considered March 13 as my second birthday.",
        },
        {
          key: 8,
          title: "2007: MSc in Physics.",
          content:
            "I was initially drawn to Physics by my fascination with galaxies and black holes, but soon realized I was even more amazed by the incredible complexity of biological systems. I wrote my MSc thesis about the analysis of gene expression patterns.",
        },
        {
          key: 9,
          title: "I got married in 2007.",
          content: "",
        },
        {
          key: 10,
          title:
            "2007: Started my PhD studies in Computational Biology at the University of Oxford.",
          content: "",
        },
        {
          key: 11,
          title: "2012: I attained my doctorate.",
          content:
            "My PhD thesis was about protein dynamics. I studied how the atoms of protein molecules move in three-dimensional space and how it's related to the protein's ability to bind other molecules. To explore this, I simulated the motion of proteins on a computer with a method called Molecular Dynamics (MD) simulation. I then analysed how their flexibility affects their binding and promiscuity towards multiple binding partners.",
        },
        {
          key: 12,
          title: "Moved to Barcelona in 2015.",
          content: "",
        },
        {
          key: 13,
          title: "Started working as a consultant for ICR, London (2015).",
          content:
            "I was employed by the Genetic Susceptibility Group  at the Institute of Cancer Research (ICR), London. We have been developing a cancer predisposition gene testing pipeline that was applied at The Royal Marsden Hospital, London to test ovarian and breast cancer patients.",
        },
        {
          key: 14,
          title:
            "2018: Started working for The Bioinformatics CRO, an all-remote company.",
          content: "",
        },
        {
          key: 15,
          title: "2019: Had my own DNA tested.",
          content:
            "I underwent a genetic test, similar to the one I had helped develop for ovarian and breast cancer patients a few years earlier. This test identified a mutation on my X chromosome linked to Alport Syndrome. What a surprise!",
        },
        {
          key: 16,
          title:
            "2020-2021: Spent 1.5+ years indoors during the Covid-19 pandemic.",
          content:
            "As someone who takes immunosuppressive drugs, I belong to the group of people who are especially vulnerable to Covid-19. Moreover, vaccines were not effective in prompting my body to produce antibodies. For this reason, my wife and I were forced to live within four walls for almost 2 years.",
        },
        {
          key: 17,
          title: "My wife was diagnosed with ovarian cancer in 2021.",
          content:
            "What followed was the scariest year of our lives, but with the help of the best doctors, nurses, and some help from above, we won the battle. Thank you everyone for your help, and most importantly, thank you Darling for being so fantastic.",
        },
        {
          key: 18,
          title: "2023: I created my first website.",
          content: "",
        },
      ]}
    />

    {/* <ToggleDiv
        elements={
            [
              {
                  id: 1,
                  title: "I was born in 1981, in Budapest.",
                  content: ""
              },
              {
                  id: 2,
                  title: "Wrote my first line of code.",
                  content: "I was 12, and (don't laugh!) the programming language was Turbo Pascal."
              },
              {
                  id: 3,
                  title: "I lost both by grandmothers ....",
                  content: ""
              },
              {
                  id: 4,
                  title: "I read \"Life: The Unfinished Experiment\" by Salvador Edward Luria.",
                  content: "I read this little book, written by the Nobel Prize-winning Italian microbiologist, at around the age of 15. It had a great impact on me, even though back then I had no idea how much it captured my imagination. The first time I learned about DNA- and RNA-molecules, and how information was being processed within a living cell. It was mesmerizing."
              },
              {
                  id: 5,
                  title: "My first article was published in Népszabadság.",
                  content: "... no longer exists, it became the victim of economical and/or political ... but back then largest circulation, read by hundreds of thousand of people"
              },
              {
                  id: 6,
                  title: "I got ill in 2003.",
                  content: "I was diagnosed with end-stage kidney failure."
              },
              {
                  id: 7,
                  title: "I was reborn in 2004, Budapest.",
                  content: "My previous life was coming to an end, so it was time to be reborn. I was incredibly lucky. On March 13, 2004, I underwent a successful kidney transplantation."
              },
              {
                  id: 8,
                  title: "MSc in Physics.",
                  content: "I begun learning Physics because I was interested in glaxies, ... But I ended up ..."
              },
              {
                  id: 9,
                  title: "I got married in 2007",
                  content: ""
              },
              {
                  id: 10,
                  title: "I started doing my PhD in 2007 in Oxford, UK",
                  content: ""
              },
              {
                  id: 11,
                  title: "2012: I become a Dr.",
                  content: "My PhD thesis was about protein dynamics, i.e. how the atoms of protein molecules move in three-dimensional space and how it's related to the protein's ability to bind other molecules. To study this, I simulated the motion of proteins on computer with a method called molecular dynamics (MD) simulation. I then analysed how their flexibility affects their binding and their promiscuity towards multiple binding partners."
              },
              {
                  id: 12,
                  title: "Moved to Barcelona in 2015.",
                  content: ""
              },
              {
                  id: 13,
                  title: "Started working as a consultant for ICR, London.",
                  content: "... cancer predisposition gene testing ..."
              },
              {
                  id: 14,
                  title: "2018: started working for the Bioinformatics CRO, an all-remote company.",
                  content: "..."
              },
              {
                  id: 15,
                  title: "2019: went for genetic testing.",
                  content: "This time, I wasn't the researcher. This time, I was the subject."
              },
              {
                  id: 16,
                  title: "2020-21: lived in the flat for 1.5 years due to the pandemic.",
                  content: ""
              }
            ]
        // }
   
    /> */}
  </Layout>
)

export default MilestonesPage
