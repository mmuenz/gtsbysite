import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WorkPage = () => (
  <Layout>
    <Seo title="Work" />
    <p className="font-serif text-3xl mb-7">Work</p>
    <dev>
      <p className="bg-blue-900  border-white p-4">
        “I had the good fortune to work with Marton for several years on several
        projects. He has a rare ability to design complex, highly effective and
        efficient code that delivers exactly what is needed. Even rarer is his
        ability to communicate effortlessly with everyone; coders, scientists
        and clinicians. He takes the time to understand what is needed and then
        makes it happen, usually giving you solutions beyond your dreams. And
        his work is always comprehensively detailed and his software is always a
        delight to use. Marton’s contributions to our disease gene discovery and
        translation projects were vital to our successes.”
        <br />
        <br />
        Nazneen Rahman, MD PhD
        <br />
        Professor of Human Genetics, Institute of Cancer Research, London
      </p>
    </dev>
    <br />I am a{" "}
    <Link
      className=" underline decoration-yellow-300 font-medium"
      to="/bioinformatics"
    >
      Computational Biologist / Bioinformatician
    </Link>{" "}
    specialized in NGS (Next-generation Sequencing) data analysis, HPC (High
    Performance Computing), and Cloud Computing. At present, I work for{" "}
    <a
      href="https://www.bioinformaticscro.com/"
      className=" underline decoration-yellow-300 font-medium"
    >
      The Bioinformatics CRO
    </a>{" "}
    as Senior Scientist and IT Director. Prior to that, I worked as a remote
    consultant for the{" "}
    <a
      href="https://www.icr.ac.uk/"
      className=" underline decoration-yellow-300 font-medium"
    >
      The Institute of Cancer Research, London
    </a>
    .
    <br />
    <br />
    <p>
      Over the past 5 years, working as a Senior Scientist and IT Dircetor for
      The Bioinformatics CRO, I have been involved in a wide range of
      activities: <br /> <br />
      - Bulk RNA-seq, scRNA-seq, ATAC-seq, ChIP-seq, WES, WGS, and mass
      spectrometry immunopeptidomics data analysis <br />- Antisense
      oligonucleotide (ASO) development
      <br />
      - Machine Learning (ML) projects
      <br />
      - NGS methods and pipelines development
      <br />
      - Variant annotation, interpretation, and data integration
      <br />
      - Managing the CRO's Amazon Web Services (AWS) cloud infrastructure
      <br />
      - Data management
      <br />
      - Maintanance of HPC clusters
      <br />- User management and onboarding
      <br />- Leading software development projects (web apps, GUIs, databases,
      in-house automation tools)
    </p>
    <o>
      Previously, between 2013 and 2018, I have worked as a postdoctoral
      researcher and later as a remote consultant for the Genetic Susceptibility
      Team at the Division of Genetics & Epidemiology of The Institute of Cancer
      Research, London in collaboration with the{" "}
      <a
        href="https://www.well.ox.ac.uk/"
        className=" underline decoration-yellow-300 font-medium"
      >
        Wellcome Center for Human Genetics, Oxford
      </a>
      :
      <br />- I have particupated in two translational research programmes; the{" "}
      <a
        href="https://www.mcgprogramme.com/"
        className=" underline decoration-yellow-300 font-medium"
      >
        Mainstreaming Cancer Genetics (MCG) programme
      </a>{" "}
      and the{" "}
      <a
        href="http://www.thetgmi.org/"
        className=" underline decoration-yellow-300 font-medium"
      >
        Transforming Genetic Medicine Initiative (TGMI)
      </a>
      .
      <br />- The focus of my work was developing a standardised system for
      variant annotation in cancer predisposition genes, improving quality
      control of NGS data and implementing automated NGS data processing
      pipelines.
      <br />- The tools I have developed had been used at{" "}
      <a
        href="https://www.royalmarsden.nhs.uk//"
        className=" underline decoration-yellow-300 font-medium"
      >
        The Royal Marsden Hospital, London
      </a>{" "}
      for genetic testing of breast and overian cancer patients.
    </o>
    <br />
    <br />
    <br />
    <dev>
      <p className="bg-blue-800  border-white p-2">
        Would you like to discuss any Bioinformatics or Cloud Computing related
        projects? <br />
        <Link
          to="/contact"
          className=" underline decoration-yellow-300 font-medium"
        >
          Contact me
        </Link>
        , I am happy to help.
      </p>
    </dev>
    <br />
    <p>
      Interested in learning more about my work?{" "}
      <Link
        to="/workdetails"
        className=" underline decoration-yellow-300 font-medium"
      >
        Click here
      </Link>
      .
    </p>
  </Layout>
)

export default WorkPage
