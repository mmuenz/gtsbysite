import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MyToggle from "../components/MyToggle"

const MilestonesPage = () => (


 


  <Layout>
    <Seo title="Milestones" />
    <span className="text-3xl">Milestones in my life</span>
    <div className="pt-5">
      <span >From a bird's eyes view, here are the most important events of my life so far.</span>
    </div>
    <div className="pt-3"> 
      <MyToggle title="I was born in 1981, in Budapest."/>

      <MyToggle title="Wrote my first line of code."
      content="I was 12, and (don't laugh!) the programming language was Turbo Pascal."/>

      <MyToggle title="I lost both by grandmothers ...."/>

      <MyToggle
        title={"I read \"Life: The Unfinished Experiment\" by Salvador Edward Luria."}
        content="I read this little book, written by the Nobel Prize-winning Italian microbiologist, at around the age of 15. It had a great impact on me, even though back then I had no idea how much it captured my imagination. The first time I learned about DNA- and RNA-molecules, and how information was being processed within a living cell. It was mesmerizing."
      />
      
      <MyToggle title="My first article was published in Népszabadság." content="... no longer exists, it became the victim of economical and/or political ... but back then largest circulation, read by hundreds of thousand of people"/>
      
      <MyToggle title="I got ill in 2003." content="I was diagnosed with end-stage kidney failure."/>
      
      <MyToggle title="I was reborn in 2004, Budapest." content="My previous life was coming to an end, so it was time to be reborn. I was incredibly lucky. On March 13, 2004, I underwent a successful kidney transplantation."/>
  
      <MyToggle title="MSc in Physics." content="I begun learning Physics because I was interested in glaxies, ... But I ended up ..."/>

      <MyToggle title="I got married in 2007." content="..."/>

      <MyToggle title="I started doing my PhD in 2007 in Oxford, UK." content="..."/>

      <MyToggle title="2012: I become a Dr." content="My PhD thesis was about protein dynamics, i.e. how the atoms of protein molecules move in three-dimensional space and how it's related to the protein's ability to bind other molecules. To study this, I simulated the motion of proteins on computer with a method called molecular dynamics (MD) simulation. I then analysed how their flexibility affects their binding and their promiscuity towards multiple binding partners."/>

      <MyToggle title="Moved to Barcelona in 2015."/>

      <MyToggle title="Started working as a consultant for ICR, London." content="... cancer predisposition gene testing ..."/>

      <MyToggle title="2018: started working for the Bioinformatics CRO, an all-remote company." content="..."/>

      <MyToggle title="2019: went for genetic testing." content="This time, I wasn't the researcher. This time, I was the subject."/>

      <MyToggle title="2020-21: lived in the flat for 1.5 years due to the pandemic." content="..."/>
    </div>
  </Layout>
)

export default MilestonesPage