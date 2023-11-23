import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import MyToggle from "../components/MyToggle"
import { StaticImage } from "gatsby-plugin-image"

const GoodStoryPage = () => (
  <Layout>
    <Seo title="Milestones" />
    <p className="text-3xl">A good story to tell</p>

    <p className="text-yellow-300 text-md pb-2">
      May 24, 2023 | Life, Science - 18 min read
    </p>

    <p>
      It was while I was sitting in the dialysis chair that I decided to become
      a Bioinformatician. Each dialysis session took 4 hours, and I was treated
      every second day (Tuesdays, Thursdays, and Saturdays), so I had plenty of
      time for reading about genes, proteins, DNA, RNA, cells, and microarray
      experiments, while my blood was slowly cleaned from toxins. It was a bit
      difficult to hold the books and printed publications with one hand, as my
      left arm was occupied by needles and tubes.
    </p>

    <p>I was 21. I felt grateful for being alive.</p>

    <p>
      The first successful dialysis treatment in history was performed in 1943,
      in the Netherlands during World War II. Fifty-nine years later, in
      Budapest, it was a routine procedure.
    </p>

    <p>
      I had End-Stage Kidney Disease, which meant I would probably not have
      survived for a week without treatments. Receiving dialysis three times a
      week, however, allowed me to live a quasi-normal life, spending time with
      my family, going to physics and math classes at the University, meeting
      with my friends, and even studying Bioinformatics during the treatments.
      It was a strange feeling though that my life depended on the dialysis
      machines.
    </p>

    <p>
      Bioinformatics appeared to me as a super exciting subject, partly because
      I liked the idea how tiny molecules such as DNA and proteins can shape our
      fates, and also because it required quantitative skills like statistics,
      programming, and computing that I had already picked up during my Physics
      studies.
    </p>

    <p>
      I owe my life to modern medicine. A year and a half later I received a
      kidney transplant. The surgery was successful, and immunosuppressant
      medications helped to protect the transplanted kidney from immunological
      rejection. My last dialysis was in March, 2004.
    </p>

    <p>
      Three years later I got married and moved to England where I completed my
      PhD in Bioinformatics at the University of Oxford. In 2015, we moved to
      Spain to start a new life.
    </p>

    <p>
      Years later, in Barcelona, my wife and I visited an exhibition at the CCCB
      (Centre de Cultura Contemporània de Barcelona). The title of the
      exhibition was{" "}
      <a
        href="https://www.cccb.org/en/exhibitions/file/human-/129032"
        target="_blank"
        className=" underline decoration-yellow-300 font-medium"
      >
        "HUMAN+: The Future of Our Species"
      </a>
      , and it showcased a series of fascinating inventions (both real and
      imaginary) which allow us humans to cross the limits of our capabilities:
      from industrial robot arms and prosthetic limbs to bat vision goggles and
      genetically modified "designer" babies.
    </p>

    <p>
      As the exhibition catalogue explained: "The exhibition explored the
      boundaries of what it meant to be human - boundaries of the body,
      boundaries of the species, boundaries of what is socially and ethically
      acceptable."
    </p>

    <p>
      Reminding me to my own boundaries, one of the rooms in the exhibition
      displayed a dialysis chair. It was meant to be an example for how machines
      can extend the life of a human being. It brought tears to my eyes.
    </p>

    <p className="text-2xl">The disease that almost killed me</p>

    <p>
      I was a teenager when doctors began to suspect I might have an inherited
      kidney disease called{" "}
      <Link
        to="/alport"
        className=" underline decoration-yellow-300 font-medium"
      >
        Alport Syndrome
      </Link>
      . Although I felt completely well, tests repeatedly showed there were
      blood cells in the urine, a condition called <i>hematuria</i>. In
      addition, my mother exhibited similar, albeit milder, symptoms.
    </p>

    <p>
      Later, my kidney functions started to deteriorate, but the root cause was
      still not known. In addition to kidney problems, Alport Syndrome comes
      with hearing loss, and eye lens abnormalities. Since I had all those, my
      doctors had a good reason to believe I had the Alport disease. Strictly
      speaking though, it was still only a guess. At the age of 21, when my
      kidneys stopped functioning, they were almost sure about it.
    </p>

    <p>
      Alport Syndrome is considered a rare disease, as it affects only 1 in
      5,000 to 10,000 individuals. I was that unlucky one.
    </p>

    <p>
      Scientists classify a disease as "rare", if it affects fewer than 1 in
      1,500 to 2,000 people. However, it is important to note that while
      individually rare, these diseases are collectively common. For example,
      according to the National Institutes of Health, there are more than 7,000
      rare diseases affecting over 300 million people worldwide. The vast
      majority of them (95%) have no treatment. In other words, while I might
      feel unlucky to have Alport Syndrome, it's far more common to be unlucky
      than one would think.
    </p>

    <p>
      Alport Syndrome is an inherited chronic kidney disease resulting from a
      pathogenic change in the COL4A3, COL4A4, or COL4A5 gene. These genes are
      necessary for producing a certain type of collagen, that are key
      components of the basement membranes, which play a crucial role in the
      glomeruli, the tiny filtering units in the kidney. Currently, there is no
      cure for Alport syndrome.
    </p>

    <p>
      The most common type of the disease is called X-linked Alport Syndrome as
      it's caused by DNA changes in the COL4A5 gene on the X-chromosome. These
      changes break the production of normal type-IV collagens, resulting in
      abnormalities in the glomerular basement membrane. As a result, the kidney
      gradually loses its ability to filter water and solutes.
    </p>

    <p>
      Since type-IV collagen is also an important component in the eye lens
      capsule and inner ear, its defect also leads to vision problems and
      hearing loss.
    </p>

    <p className="text-2xl">Typos in the DNA</p>

    <p>
      My hearing and vision problems made it challenging, but shortly after
      completing my PhD, I joined a group led by Dr. Gerton Lunter at the{" "}
      <a
        href="https://www.well.ox.ac.uk/"
        target="_blank"
        className=" underline decoration-yellow-300 font-medium"
      >
        Wellcome Trust Centre for Human Genetics, Oxford
      </a>
      . I worked on a project in collaboration with the Genetic Susceptibility
      Group at{" "}
      <a
        href="https://www.icr.ac.uk/"
        target="_blank"
        className=" underline decoration-yellow-300 font-medium"
      >
        The Institute of Cancer Research, London
      </a>
      .
    </p>

    <p>
      This project was about setting up a system for genetic testing of cancer
      predisposition genes (CPGs). These are genes that are known to harbor
      inherited genetic variants that may increase an individual's risk for
      developing cancer. Our pipeline was implemented at The Royal Marsden
      Hospital, London, and was used to test thousands of ovarian and breast
      cancer patients to understand if their disease had an inherited component,
      and to guide their therapies.
    </p>

    <p>
      It's important to note that although one of the hallmarks of cancer is
      that tumor cells typically have higher rates of genetic mutations than
      normal cells, we haven't specifically looked into mutations that
      accumulated as a result of tumorigenesis. Those are also very important
      changes in the DNA, known as somatic mutations, which are present only in
      cancer cells and are therefore potential targets for therapy.
    </p>

    <p>
      Instead, we were looking for changes in the DNA that were present in all
      cells of the patient's body, referred to as germline variants. These may
      be inherited from one's parents, or can occur spontaneously in the germ
      cells (called "<i>de novo"</i> variants).
    </p>

    <p>
      The information in our DNA is stored as a sequence of "nucleotide bases"
      (or simply, "bases"), the building blocks of the DNA molecule, just like a
      text in a book is a sequence of letters. However, there are only four
      different bases in the DNA ("A", "C", "G", and "T"), so the "text" in our
      genome is made up of a 4-letter "alphabet". For example, a section of
      one's DNA sequence could be something like
      "...AGGCAGTCTAAAGCCAGATTGAAATGCCTTA...".
    </p>

    <p>
      The human genome has 3 billion base pairs of DNA, arranged in 23 pairs of
      chromosomes. Germline variants refer to any change in the DNA sequence of
      the genome. This can be a single-base change, similar to a one letter typo
      in a book, or changes that affect multiple letters, or even large segments
      (words, paragraphs, pages, and even entire chapters). Importantly, since
      genes serve as "recipe books" for producing proteins, germline variants
      may affect the cell's ability to produce correctly functioning proteins
      that are essential for the normal function of our cells.
    </p>

    <p>
      Once the cancer patient's DNA was sequenced, it was compared to a
      so-called "reference human genome" to see if there were any relevant
      differences.
    </p>

    <p>
      The reference genome is not the genome of any single individual. Rather,
      it has been constructed from the DNA of several anonymous donors, chosen
      to be representative of genetic diversity. The reference human genome
      serves as a generally accepted template, against which we can describe the
      particular variants any individual carries.
    </p>

    <p>
      One of my responsabilites in the project was to annotate the variants we
      found in the cancer patients' genomes. Our pipeline was based on
      next-generation sequencing, a very effective way to read the "letters" of
      the patient's DNA. Once the variants specific to each patient were
      identified through a process called "variant calling", it was my task to
      determine how the particular gene and the corresponding protein was
      affected.
    </p>

    <p>
      I spent the first couple of months in the project learning how clinicians
      describe the possible genetic variants using a clinical nomenclature.
      While researchers liked to describe these variants using their genomic
      coordinates (that tell us where exactly the variants are found in the
      genome), clinicians used a totally different language called the HGVS. The
      first software I wrote was basically a translator between these two
      languages.
    </p>

    <p>
      That's how I got to know germline variants, and their clinical reporting
      format.
    </p>

    <p className="text-2xl">Sequence a bioinformatician</p>

    <p>
      Fast-forwarding several years, my wife and I went to a hospital for
      genetic counselling in Barcelona, since we wanted to know whether my
      condition (Alport Syndrome, suspected, but never confirmed) posed any
      danger if we decided to have children. I knew that if I had a pathogenic
      variant, it was most likely on my X-chromosome, and I was aware of the
      X-linked inheritance patterns, but didn't want to act like I was my own
      doctor.
    </p>

    <p>
      Not surprisingly, the geneticist also told us we should see if DNA
      sequencing can confirm I had a germline variant associated with the
      disease. Fortunately, researchers at the hospital had just published a
      paper about targeted next-generation sequencing of a panel of 140 genes
      related to inherited kidney diseases. This sounded like a good idea to me,
      and the first opportunity in my life to peek into the molecular details of
      my own condition.
    </p>

    <p>
      So they performed the genetic test based on a blood sample, and the
      results confirmed I indeed had the disease my doctors suspected since my
      childhood. In particular, the report included the variant that was found
      in the COL4A5 gene located on the X chromosome.
    </p>

    <p>
      The germline variant I have was described using the HGVS nomenclature, the
      clinical format of genetic variants I was familiar with.
    </p>

    <p>
      How did I feel about it? First of all, I felt relieved because there was
      no doubt anymore about what the hell I had. The doctors in my childhood
      spent so much effort trying to diagnose me, and they had eventually come
      up with the correct diagnosis. Most people with rare diseases are
      misdiagnosed or never receive any diagnosis at all.
    </p>

    <p>
      Secondly, I felt proud that I immediately understood what was going on in
      my DNA by having a quick look at the reported variant. It's one of those
      moments in life when being a bioinformatician comes handy.
    </p>

    <p className="text-2xl">A missing letter</p>

    <p>See my variant in HGVS format from the report: </p>

    <p className="text-l">
      <b>c.2039del_p.(Pro680Glnfs*56)</b>{" "}
    </p>

    <p>This is a single base deletion in my COL4A5 gene.</p>

    <p>
      Let's imagine the COL4A5 gene as a book that contains the exact recipe for
      producing a large part of the collagen protein. If you think of the gene
      as a book, the above variant means I have only a single letter missing
      from it. It was the deletion of this single "letter" at coding sequence
      position 2039 that turned my life upside down.
    </p>

    <p>
      It is also called a frameshift variant since the whole text in the book
      after the missing letter is shifted, and the words are incorrectly read by
      my ribosomes. Ribosomes are the organelles in our cells responsible for
      producing proteins. They are the ones that translate the recipe books of
      genes into protein. They read the text of our genes in 3-letter words
      (called "codons"). In my COL4A5 gene, the frame is shifted by one letter
      as a result of the single-letter deletion.
    </p>

    <p>That shift is what's causing all the trouble.</p>

    <p>
      As a consequence of the frameshift, the ribosomes interpret the text as if
      the book should end 56 letters after the deleted letter. (A
      bioinformatician would say: "there is a premature stop codon 56 bases
      downstream.") Of course there is no intended stop codon there, it's just a
      mistake of reading my COL4A5 gene in a wrong frame. Nevertheless, the
      ribosomes don't know that, and they terminate the translation of the
      COL4A5 gene sequence into collagen too early, resulting in a protein that
      is much shorter than normal. This phenomenon is called protein truncation.
    </p>

    <p>
      Remember, it's all happening on my X-chromosome, of which I only have one
      copy, being a male. My mother, however, having two X-chromosomes, has two
      copies of the COL4A5 gene, one of which most likely doesn't have any
      pathogenic variant. This explains why she (and women, in general) can
      develop milder symptoms of Alport Syndrome.
    </p>

    <p>
      Alternatively, the variant in my COL4A5 gene could have resulted from a{" "}
      <i>de novo</i> mutation in the germ cells or the fertilized egg during the
      early stages of my embryogenesis. The likelihood of this scenario is low
      considering that my mum also exhibits some symptoms. Sequencing her as
      well would help clarify this question.
    </p>

    <p>
      (Note that the variant couldn't have come from my father since he passed
      me a Y-chromosome.)
    </p>

    <p className="text-2xl">Cutting out the gibberish</p>

    <p>
      {" "}
      It's ridiculous, if you think about it. We are talking about a single
      "letter" deleted from my DNA. Since collagen is a long, fibrous structural
      protein (building up long fibers), it wouldn't have disastrous
      consequences if only a little part was missing from it. The problem is, as
      we have seen, that one missing letter messes up the translation of all the
      rest of the protein.
    </p>

    <p>
      But what if it was possible to somehow make the ribosomes skip the part of
      my gene that contains the variant?
    </p>

    <p>
      Let's continue using the analogy of comparing genes to books. Like books
      have chapters, genes can also have separate sections called "exons". Exons
      are specific segments of DNA within a gene that contain the coding
      information necessary for the synthesis of proteins, but they are
      interspersed with non-coding regions called "introns". During a process
      called RNA splicing, exons are stitched together to form the mature
      messenger RNA (mRNA) molecules. These molecules carry the information to
      the ribosomes and serve as a template for protein synthesis.
    </p>

    <p>
      In other words, while in the DNA a gene contains both exons and introns in
      between, introns are "spliced out" at the end, and only the exons are
      translated into protein. It's like a book having multiple chapters but
      there are a lot of gibberish between every two consecutive chapters. When
      the book actually gets printed, the gibberish is removed. (Of course,
      these "intron" sequences are not totally gibberish, biologically speaking,
      but they don't contain information about the protein chain to be
      synthesized.)
    </p>

    <p>
      For example, the human COL4A5 gene has 51 exons; it's a large book with 51
      chapters. My variant is in Exon 26. Since the variant causes the ribosomes
      to stop reading the book 56 DNA letters downstream, the remaining 25
      chapters, even if they are there in my gene, all go to waste.
    </p>

    <p className="text-2xl">Skipping the broken part</p>

    <p>
      In 2020, a group of Japanese researchers led by Kandai Nozu at the
      Department of Pediatrics, Kobe University Graduate School of Medicine,
      reported early success in developing an exon skipping therapy as a
      potential treatment option for Alport Syndrome. Exon skipping is a form of
      genetic therapy that is primarily used to treat certain genetic disorders,
      for example, Duchenne muscular dystrophy.
    </p>

    <p>
      In exon skipping therapy, the goal is to manipulate the process of
      splicing in the cells so that the exon harboring the patient's frameshift
      variant is also cut out of the pre-messenger RNA. Despite the fact that
      the deletion of an exon results in a part missing from the protein
      molecule, the protein may still be able to fulfil its function, at least
      partially.
    </p>

    <p>
      Following our previous analogy, this results in an entire chapter missing
      from the book, but it may still have a much less severe consequence than
      the presence of that frameshift variant. If an entire chapter is missing,
      you can probably still understand the book by reading all the other
      chapters. You might miss some important information from the deleted
      chapter, but it's not as catastrophic as a typo that results in the
      immediate truncation of the rest of the book.
    </p>

    <p>
      It is particularly true when the end of the book is critically important.
      Think of, for instance, an Agatha Christie detective novel, where the last
      few pages reveal the murderer. Without the very end of the book, the whole
      story wouldn't work. Similarly, for type-IV collagens, the very end of the
      gene sequence is essential. Without that part, collagen chains are unable
      to form "trimers". Trimers are "triple helix" structures made up by three
      collagen chains, and are crucial for the function of basement membranes.
      Unfortunately, since my COL4A5 variant results in an early truncation of
      the protein, my collagen chains lack the crucial ending sequence.
    </p>

    <p>
      So the idea is to make use of the cell's natural splicing machinery to cut
      out the faulty exon, replacing the frameshift variant with a longer,
      albeit in-frame, deletion. It's a clever trick.
    </p>

    <p>
      In order for this to work, the length of the exon has to be a multiple of
      3 DNA "letters", so after removing the exon, the sequence maintains its
      reading frame.
    </p>

    <p>
      According to their{" "}
      <a
        href="https://www.nature.com/articles/s41467-020-16605-x"
        target="_blank"
        className=" underline decoration-yellow-300 font-medium"
      >
        paper in the journal Nature Communications
      </a>
      , the Japanese group created an ASO (antisense oligonucleotide) that
      induces exon skipping in the COL4A5 gene. ASOs are short nucleotide
      molecules designed to bind to specific sequences of the messenger RNA. In
      this case, the ASO was designed to bind to a site that resulted in
      skipping Exon 21.
    </p>

    <p>
      While frameshift variants in Exon 21 resulted in Alport Syndrome in the
      laboratory mice used for this study, in the ASO-treated mice, exon
      skipping enabled the formation of correct collagen trimers. As a result,
      functional basement membrane developed in their kidneys. Finally, the
      group of mice that received the treatment had a clearly prolonged survival
      period as compared to the untreated group.
    </p>

    <p>
      While these findings provided compelling evidence that exon skipping
      therapy may be remarkably effective in treating Alport Syndrome, it is yet
      to be shown that the same method can be applied to other exons.
    </p>

    <p>
      In my case, for example, since my variant is in Exon 26, the treatment
      should target Exon 26. Despite Exon 26 also being an exon of a length that
      is a multiple of three DNA letters, researchers would still need to first
      verify if its removal would lead to a functional collagen protein. And the
      same applies to all other exons as well.
    </p>

    <p className="text-2xl">Counterattack?</p>

    <p>
      From the dialysis chairs in Budapest fighting for my day-to-day survival,
      to becoming a computational biologist in Barcelona, making sense of my own
      DNA - this story has a nice dramatic arc. It could easily be developed
      into a Hollywood movie, with either George Clooney or Brad Pitt portraying
      me, directed by Steven Spielberg.
    </p>

    <p>
      The amazing thing about the storyline is that it's not a work of fiction.
      It is actually my life.
    </p>

    <p>It's already a good story to tell. </p>

    <p>
      What could make it an even better story though is if one day I had a
      chance to participate as a bioinformatician in a research project
      developing therapeutic interventions for Alport Syndrome. That would
      really make my story a full circle. And it might also affirm the purpose
      of my existence.
    </p>

    <p>
      It's not uncommon to hear of people, who are either undergoing a serious
      illness themselves or witnessing their loved ones suffer, engage with work
      on finding cures or treatments for the same disease. There is no stronger
      motivation than these personal connections.
    </p>

    <p>
      If I said luck played a 99.9999% part in my happy ending story, with only
      0.0001% attributed to my personal strength, I would severely underestimate
      the contribution of luck to my recovery.
    </p>

    <p>
      These days I think a lot about my fellow patients with whom I shared the
      dialysis treatment during the same time slot and in the same room. The
      only similarity between us was the malfunctioning of our kidneys. Yet, we
      were like a family. We met every second day, and spent a lot of time
      together staring in each other's eyes. I still clearly remember their
      faces. Not everyone in that group was fortunate enough to receive a kidney
      transplant. In fact, most of us weren't.
    </p>

    <p>
      What would they have done if they had survived and been in my place now?
    </p>

    <p>
      In writing this, I had to realize it's not merely a logical continuation
      of my story to try and contribute, even a tiny bit, to Alport Syndrome
      research within my own discipline. In fact, it feels more like my
      responsibility.
    </p>

    <p>
      (Computational Biology and Bioinformatics are essential in developing
      personalized therapeutic approaches. These disciplines play a role in all
      parts of the process, from the characterization of patients' genetic
      variants to the design of antisense oligonucleotides that selectively bind
      to targeted sites in our messenger RNA molecules.)
    </p>

    <br />
    <p>---</p>
    <br />

    <div align="center">
      <StaticImage
        src="../images/dialysis.jpeg"
        width={750}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="prince"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>A kidney patient receiving hemodialysis treatment</p>
    </div>

    <br />
    <Link className="text-yellow-200 text-md" to="/blog">
      | Back |
    </Link>
  </Layout>
)

export default GoodStoryPage
