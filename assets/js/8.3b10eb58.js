(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{219:function(e,t,a){"use strict";a.r(t);var s=a(28),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"general-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-usage"}},[e._v("#")]),e._v(" General usage")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/davidebolo1993/TRiCoLOR",target:"_blank",rel:"noopener noreferrer"}},[e._v("TRiCoLOR"),a("OutboundLink")],1),e._v(" is built on 4 modules:")]),e._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/davidebolo1993/TRiCoLOR/tree/master/TRiCoLOR/SENSoR",target:"_blank",rel:"noopener noreferrer"}},[e._v("SENSoR"),a("OutboundLink")],1),e._v(", the 'Shannon ENtropy ScanneR'")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/davidebolo1993/TRiCoLOR/tree/master/TRiCoLOR/REFER",target:"_blank",rel:"noopener noreferrer"}},[e._v("REFER"),a("OutboundLink")],1),e._v(", the 'REpeats FindER'")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/davidebolo1993/TRiCoLOR/tree/master/TRiCoLOR/SAGE",target:"_blank",rel:"noopener noreferrer"}},[e._v("SAGE"),a("OutboundLink")],1),e._v(", the 'SAmple GEnotyper'")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/davidebolo1993/TRiCoLOR/tree/master/TRiCoLOR/ApP",target:"_blank",rel:"noopener noreferrer"}},[e._v("ApP"),a("OutboundLink")],1),e._v(", the 'Alignment Plotter'")])]),e._v(" "),a("h2",{attrs:{id:"tricolor-sensor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tricolor-sensor"}},[e._v("#")]),e._v(" TRiCoLOR SENSoR")]),e._v(" "),a("p",[e._v("SENSoR allows users to identify repetitive regions from haplotype-resolved and haplotype-tagged "),a("a",{attrs:{href:"https://samtools.github.io/hts-specs/SAMv1.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("BAM files"),a("OutboundLink")],1),e._v(" de novo (that is, without a prior knowledge of their location). This is achieved using the "),a("a",{attrs:{href:"https://www.hindawi.com/journals/mpe/2012/132625/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Shannon Entropy formula"),a("OutboundLink")],1),e._v(", which allows to discriminate between high-entropy non-repetitive and low-entropy repetitive DNA stretches.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#TRiCoLOR SENSoR --help")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#with haplotype-resolved BAM")]),e._v("\nTRiCoLOR SENSoR -bam "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("HAPLOTYPE1.BAM"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("HAPLOTYPE2.BAM"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -o "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("OUTPUTSENSOR"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#with haplotype-tagged BAM")]),e._v("\nTRiCoLOR SENSoR -bam "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("HAPLOTAGGED.BAM"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -o "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("OUTPUTSENSOR"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("SENSoR stores in the output folder the repetitive regions identified in (gzipped) "),a("a",{attrs:{href:"https://www.ensembl.org/info/website/upload/bed.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("BED format"),a("OutboundLink")],1),e._v(". Specifically, the BED file generated contains 6 columns:")]),e._v(" "),a("ol",[a("li",[e._v("Chromosome identifier")]),e._v(" "),a("li",[e._v("Start coordinate")]),e._v(" "),a("li",[e._v("End coordinate")]),e._v(" "),a("li",[e._v("Average coverage. Average of the number of entropy drops found on the two haplotypes")]),e._v(" "),a("li",[e._v("Standard deviation of the coverage. Standard deviation of the number of entropy drops found on the two haplotypes")]),e._v(" "),a("li",[e._v("Individual coverages. Number of entropy drops found on the two haplotypes")])]),e._v(" "),a("p",[e._v("Use cases for SENSoR are described in the "),a("RouterLink",{attrs:{to:"/usecases/usecases.html"}},[e._v("Use cases section")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("While this is not mandatory, it is highly recommended to give as input to SENSoR also a .txt file with the names of the chromosomes to exclude from analysis (--exclude parameter) Ideally, this should include decoy chromosomes, that harbor low complexity sequences and may be a source of bias for TRiCoLOR")])]),e._v(" "),a("h2",{attrs:{id:"tricolor-refer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tricolor-refer"}},[e._v("#")]),e._v(" TRiCoLOR REFER")]),e._v(" "),a("p",[e._v("REFER allows users to profile tandem repeats in haplotype-resolved and haplotype-tagged BAM files once a proper BED file (like the one from TRiCoLOR SENSoR) describing regions to investigate is provided. For each haplotype, REFER fetches sequencing reads spanning regions in the BED file and builds low-error consensus sequences that are further processed through a RegEx-based approximate string matching algorithm to resolve repeated motifs and number of repetitions.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#TRiCoLOR REFER --help")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#with haplotype-resolved BAM")]),e._v("\nTRiCoLOR REFER -g "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("REFERENCE.FASTA"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -bam "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("HAPLOTYPE1.BAM"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("HAPLOTYPE2.BAM"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -bed "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("REPETITIONS.BED"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -o "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("OUTPUTREFER"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#with haplotype-tagged BAM")]),e._v("\nTRiCoLOR REFER -g "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("REFERENCE.FASTA"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -bam "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("HAPLOTAGGED.BAM"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -bed "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("REPETITIONS.BED"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -o "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("OUTPUTREFER"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("REFER stores in the output folder the tandem repeats varying between the reference and the haplotypes in (bgzipped) "),a("a",{attrs:{href:"https://samtools.github.io/hts-specs/VCFv4.3.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("VCF format"),a("OutboundLink")],1),e._v(" and (gzipped) BED format, together with consensus alignments for each haplotype in BAM format. INFO and FORMAT fields of the VCF file contain custom informations.")]),e._v(" "),a("p",[e._v("The INFO field in the VCF file contains:")]),e._v(" "),a("ol",[a("li",[e._v("TREND.  END coordinate of the TR")]),e._v(" "),a("li",[e._v("TRLEN. Length of the ALT allele. If multiple alleles are listed in the ALT field, is the length of the shortest ALT allele")]),e._v(" "),a("li",[e._v("RAED. Edit distance between REF and ALT. If multiple alleles are listed in the ALT field, is the edit ditance between REF and the most similar ALT allele")]),e._v(" "),a("li",[e._v("AED. Edit distance between ALT alleles (if multiple alleles are listed in the ALT field)")]),e._v(" "),a("li",[e._v("MAPQ1. Mapping quality of the consensus sequence generated for the 1st haplotype")]),e._v(" "),a("li",[e._v("MAPQ2. Mapping quality of the consensus sequence generated for the 2nd haplotype")]),e._v(" "),a("li",[e._v("H1M. Repeated motif(s) found on the 1st haplotype")]),e._v(" "),a("li",[e._v("H1N. Number of repetitions of the motif(s) in H1M")]),e._v(" "),a("li",[e._v("H2M. Repeated motif(s) found on the 2nd haplotype")]),e._v(" "),a("li",[e._v("H2N. Number of repetitions of the motif(s) in H2M")])]),e._v(" "),a("p",[e._v("The FORMAT field contains:")]),e._v(" "),a("ol",[a("li",[e._v("GT. The phased genotype of the TR")]),e._v(" "),a("li",[e._v("DP1. Depth of coverage for the 1st haplotype")]),e._v(" "),a("li",[e._v("DP2. Depth of coverage for the 2nd haplotype")])]),e._v(" "),a("p",[e._v("The BED files generated contain 5 columns:")]),e._v(" "),a("ol",[a("li",[e._v("Chromosome identifier")]),e._v(" "),a("li",[e._v("Start coordinate")]),e._v(" "),a("li",[e._v("End coordinate")]),e._v(" "),a("li",[e._v("Repeated motif")]),e._v(" "),a("li",[e._v("Number of repetitions")])]),e._v(" "),a("p",[e._v("When running TRiCoLOR REFER on multiple samples at the same time, in order to avoid problems with creating/loading .mmi indexes for the same chromosome from multiple processes, one can first create all the .mmi indexes required for the analysis as below:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("TRiCoLOR REFER -g "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("REFERENCE.FASTA"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -bed "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("REPETITIONS.BED"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -o "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("OUTPUTINDEXES"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --index_only\n")])])]),a("p",[e._v("Then, multiple TRiCoLOR REFER can be run giving the pre-compiled indexes as input:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("TRiCoLOR REFER -g "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("REFERENCE.FASTA"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -bam "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("HAPLOTAGGED.BAM"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -bed "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("REPETITIONS.BED"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -o "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("OUTPUTREFER"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --mmidir "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("OUTPUTINDEXES"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("Use cases for REFER are described in the "),a("RouterLink",{attrs:{to:"/usecases/usecases.html"}},[e._v("Use cases section")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("While this is not mandatory, it is highly recommended to give as input to REFER also a .txt file with the names of the chromosomes to exclude from analysis (--exclude parameter) Ideally, this should include decoy chromosomes, that harbor low complexity sequences and may be a source of bias for TRiCoLOR")])]),e._v(" "),a("h2",{attrs:{id:"tricolor-sage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tricolor-sage"}},[e._v("#")]),e._v(" TRiCoLOR SAGE")]),e._v(" "),a("p",[e._v("SAGE allows users to check for patterns of mendelian segregation in the tandem repeats identified by TRiCoLOR REFER having trio genome sequencing data available. When a VCF file of the tandem repeats identified in a child by REFER and haplotype-resolved or haplotype-tagged BAM files for both the parents are available, one can run SAGE.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#TRiCoLOR SAGE --help")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#with haplotype-resolved BAM")]),e._v("\nTRiCoLOR SAGE -vcf "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("CHILD.REFER.VCF"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -bam "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PARENT1.HAPLOTYPE1.BAM"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(","),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PARENT1.HAPLOTYPE2.BAM"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PARENT2.HAPLOTYPE1.BAM"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(","),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PARENT2.HAPLOTYPE2.BAM"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -o "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("OUTPUTSAGE"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#with haplotype-tagged BAM")]),e._v("\nTRiCoLOR SAGE -vcf "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("CHILD.REFER.VCF"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -bam "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PARENT1.HAPLOTAGGED.BAM"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("PARENT2.HAPLOTAGGED.BAM"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -o "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("OUTPUTSAGE"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("SAGE stores in the output folder a (bgzipped) multi-sample (child and both parents) VCF file. INFO and FORMAT fields of the VCF file contain custom informations.")]),e._v(" "),a("p",[e._v("The INFO field in the VCF file contains:")]),e._v(" "),a("ol",[a("li",[e._v("TREND.  END coordinate of the TR")]),e._v(" "),a("li",[e._v("TRLEN. Length of the ALT allele. If multiple alleles are listed in the ALT field, is the length of the shortest ALT allele")]),e._v(" "),a("li",[e._v("RAED. Edit distance between REF and ALT. If multiple alleles are listed in the ALT field, is the edit ditance between REF and the most similar ALT allele")]),e._v(" "),a("li",[e._v("AED. Edit distance between ALT alleles (if multiple alleles are listed in the ALT field)")]),e._v(" "),a("li",[e._v("MISSR. Ratio of missing ('.') genotypes")]),e._v(" "),a("li",[e._v("MENDEL. Whether the TR is mendelian consistent (0) or not (1), if --mendel was enabled. '.' otherwhise")])]),e._v(" "),a("p",[e._v("The FORMAT field contains:")]),e._v(" "),a("ol",[a("li",[e._v("GT. The phased genotype of the TR")]),e._v(" "),a("li",[e._v("DP1. Depth of coverage for the 1st haplotype")]),e._v(" "),a("li",[e._v("DP2. Depth of coverage for the 2nd haplotype")]),e._v(" "),a("li",[e._v("GS. Edit distance-based score. Each haplotype has a maximum GS of 1: thus, for a genotype, GS ranges between 0 and 2 (always 2 for the child). For each haplotype, GS is calculated as 1 - the edit distance between the parental sequence and the most similar among the REF sequence and the child ALT sequence(s).")])]),e._v(" "),a("p",[e._v("Use cases for SAGE are described in the "),a("RouterLink",{attrs:{to:"/usecases/usecases.html"}},[e._v("Use cases section")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"tricolor-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tricolor-app"}},[e._v("#")]),e._v(" TRiCoLOR ApP")]),e._v(" "),a("p",[e._v("ApP allows users to interactively visualize specific tandem repeats identified by the REFER module into their sequence context. It takes as inputs the BED files and the consensus BAM files generated by REFER, together with a region in CHROM:START-END format to visualize.")]),e._v(" "),a("p",[e._v("ApP can be run as follows.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#TRiCoLOR ApP --help")]),e._v("\nTRiCoLOR ApP -g "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("REFERENCE.FASTA"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -bam "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("HAPLOTYPE1.CONSENSUS.BAM"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("HAPLOTYPE2.CONSENSUS.BAM"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -gb "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("REFERENCE.REPETITIONS.BED"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -h1b "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("HAPLOTYPE1.REPETITIONS.BED"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -h2b "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("HAPLOTYPE2.REPETITIONS.BED"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -o "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("OUTPUTAPP"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("REGION"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("ApP stores in the output folder a static HTML file that can be opened using the default browser. Users can scroll across and zoom into the sequence of the haplotype-specific consensus BAM files for the chosen region and highlight the tandem repeats identified both in the individual's haplotypes and the reference. Use cases for ApP are described in the "),a("RouterLink",{attrs:{to:"/usecases/usecases.html"}},[e._v("Use cases section")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);