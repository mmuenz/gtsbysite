import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/SEO"

const BioinformaticsPage = () => (
  <Layout>
    <SEO
      title="What on earth is Bioinformatics?"
      description="What on earth is Bioinformatics? (Márton Münz's website)"
    />
    <p className="text-3xl">What (on earth) is Bioinformatics?</p>
    <p>
      Bioinformatics is an interdisciplinary field that combines biology,
      computer science, and mathematics/statistics, aiming to analyze and
      interpret complex biological data. It involves the development and
      application of computational tools and techniques to better understand
      biological systems and processes, manage large datasets, and solve various
      problems in biology.
    </p>
    <p>
      Sounds interesting? Here are a few random examples of biological processes
      one may try to better understand with the help of Bioinformatics:
    </p>
    <p>
      <ul>
        <li>
          1. the genetic basis of cystic fibrosis by identifying mutations in
          the CFTR gene
        </li>
        <li>
          2. the molecular mechanisms of Alzheimer's disease by analyzing the
          interaction between amyloid-beta and tau proteins
        </li>
        <li>
          3. the role of BRCA1 and BRCA2 gene mutations in increasing
          susceptibility to hereditary breast and ovarian cancer
        </li>
        <li>
          4. the genes and regulatory pathways associated with drought
          resistance in rice, enabling the development of new rice varieties
          with improved drought tolerance
        </li>
        <li>
          5. potential drug targets for malaria by studying the{" "}
          <i>Plasmodium falciparum</i> genome and its metabolic pathways
        </li>
      </ul>
    </p>
    <p>
      In simple terms, bioinformatics can be seen as a way to make sense of the
      vast amount of data generated by biological research, including DNA
      sequences, protein structures, and gene expressions. Among others, it
      enables researchers to gain insights into the functions of genes and
      proteins, identify disease-causing mutations, and develop new therapeutic
      strategies.
    </p>
    <Link
      to="/bioinformatics-more"
      className="underline decoration-yellow-300 font-medium"
    >
      Click here
    </Link>{" "}
    to read more, if you are interested.
  </Layout>
)

export default BioinformaticsPage
