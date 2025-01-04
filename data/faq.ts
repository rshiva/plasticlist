export const TECHNICAL_FAQ = {
  phthalates: {
    description:
      "Phthalates (pronounced THAL-ates) are chemicals that make plastic soft and flexible. We chose to test for phthalates because they often show up in our environment, can leach into foods, and have been linked to reproductive and developmental issues. Our lab detected phthalates in 73% of the products we tested.",
    DEHP_Equivalents: {
      description:
        "The European Food Safety Authority (EFSA) considers DEHP, DBP, BBP, and DINP to be DEHP equivalents because of their cumulative effects on the reproductive system. In 2019, the EFSA set a group limit of 50,000 ng / kg body weight / day for these chemicals: Based on a plausible common mechanism (i.e. reduction in fetal testosterone) underlying the reproductive effects of DEHP, DBP and BBP, the Panel considered it appropriate to establish a group-TDI for these phthalates, taking DEHP as index compound as a basis for introducing relative potency factors. The limit is calculated as a weighted sum of the chemical levels based on their potency relative to DEHP. DEHP potency is 1, DBP is 5, BBP is 0.1, and DINP is 0.3.",
      "DEHP - Di(2-ethylhexyl) phthalate ": {
        description:
          "DEHP is a colorless viscous liquid used to make PVC softer and more flexible; it is also used as a solvent in glowsticks. It was synthesized in the 1930s and has been used since. DEHP is the second-most common chemical we tested – it was detected in 69% of products. The most common is DEHT, which was in 71% of products.",
        PlasticList_testing:
          "In modern foods, the RXBAR had the highest DEHP level with 31,200 ng/serving, followed by Sweetgreen with 30,415 ng/serving.",
        Health_effects:
          "The FDA urged pharma manufacturers to avoid DEHP citing endocrine disruption. The FDA also set a limit for DEHP in drinking water at 6 ng/g. Some bottled waters we tested exceeded this limit 2-3x. The EPA (US) set a limit of 20,000 ng / kg body weight / day for DEHP, last reviewed in 1987. They cite increased relative liver weight in guinea pigs and report that DEHP is a probable human carcinogen. The EFSA (EU) set a higher limit of 50,000 ng / kg body weight / day, last reviewed in 2019. They cite testicular toxicity (atrophy), reproduction toxicity (smaller testes and prostate), developmental toxicity, and body weight reduction in rats. CDC has a Toxicology Profile on DEHP.",
      },
      DBP: {
        description:
          "DBP is a phthalate that has been used for many decades. It is a colorless oil, although impurities often make it yellow. DBP is commonly used as a plasticizer to make plastics more flexible and soft. DBP was added to the Prop 65 list in 2006, and there's been a ban on using high concentrations of DBP in toys since 2008. Before that, DBP was used in many consumer products, like nail polish, but usage has declined since.",
        PlasticList_testing:
          "50% of the products we tested had DBP. In modern foods, the Sweetgreen had the highest DBP level with 11,850 ng/serving, followed by Fairlife Core Power 26g Protein Shake Chocolate with 9,000 ng/serving.",
        Health_effects:
          'The FDA urged pharma manufacturers to avoid DBP citing endocrine disruption. The EPA (US) set a limit of 100,000 ng / kg body weight / day for DBP in 1987, but with a confidence level of "low". They cite increased mortality in rats as the reason for the limit. The EFSA (EU) set a 10x lower limit of 10,000 ng / kg body weight / day, last reviewed in 2019. They cite reproduction toxicity and developmental toxicity (reduced spermatocyte development, effects on the mammary gland) in rats. DBP has similar effects on the reproductive system as DEHP, but is 5x more potent. CDC has a Toxicology Profile on DBP.',
      },
      BBP: {
        description:
          "BBP is a phthalate. It was historically used as a plasticizer, but has now been largely phased out due to health concerns. The EU restricted BBP for use in toys and childcare articles, and banned its use in cosmetic products.",
        PlasticList_testing:
          "BBP was detected in just 5.5% of products. The highest BBP level was in Diet Coke with 2,923 ng/serving, followed by Whole Foods organic chicken breast with 2,464 ng/serving.",
        Health_effects:
          'The EPA (US) set a limit of 200,000 ng / kg body weight / day for BBP in 1989, but with a confidence level of "low". They cite significantly increased liver-to-body weight and liver-to-brain weight ratios in rats as the reason for the limit. The EFSA (EU) set a higher limit of 500,000 ng / kg body weight / day, last reviewed in 2019. They cite reproduction toxicity and reduced anogenital distance in rats. BBP has similar effects on the reproductive system as DEHP, but 10x less potent.',
      },
      DINP: {
        description:
          "DINP is a phthalate used as a plasticizer. It is typically a mixture of various chemical compounds. DINP is commonly used in a large variety of plastic products.",
        PlasticList_testing:
          "None of the Bay Area products we tested contained detectable amounts of DINP.",
        Health_effects:
          "The EFSA (EU) set a limit of 150,000 ng / kg body weight / day, last reviewed in 2019. They cite liver lesions (spongiosis hepatis), kidney toxicity (dilated renal pelvis and hydroureter), and reproductive toxicity (transient decrease of fetal testosterone production) in rats. The EPA (US) has no limit.",
      },
    },
    DIDP: {
      description:
        "DIDP is a phthalate used as a plasticizer. The coating on furnishings, cookware, pharmaceutical pills, food wrappers and many other products may have DIDP.",
      PlasticList_testing:
        "Just 2 of the products we tested showed DIDP: Straus Organic Whole Milk in Glass had 66,480 ng/serving and Thorne Prenatal DHA Dietary Supplement had 944 ng/serving.",
      Health_effects:
        "The EFSA (EU) set a limit of 150,000 ng / kg body weight / day for DIDP, last reviewed in 2019. They cite Liver changes in dogs and newborn mortality in rats. The EPA (US) has no limit.",
    },
    DEP: {
      description:
        "DEP is a colourless liquid with a bitter taste. It is used to make PVC plastic softer and more flexible, and to hold the fragrance in perfume. Some microorganisms can break down DEP using special enzymes. Among mammals, pigs and cows can also break it down.",
      PlasticList_testing:
        "23% of the products we tested had DEP, the highest of which was Subway Chocolate Chip Cookie with 12,150 ng/serving.",
      Health_effects:
        'The EPA (US) set a limit of 800,000 ng / kg body weight / day for DEP in 1988, but with a confidence level of "low". They cite decreased growth rate, food consumption, and altered organ weights in rats. The EFSA (EU) has no limit. CDC has a Toxicology Profile on DEP.',
    },
    DMP: {
      description:
        "DMP is a colourless and oily liquid. It is commonly used as insect repellent and is especially useful against mosquitoes, animal livestock flies, and Lyme disease ticks. Other uses of DMP include solid rocket propellants and plastics.",
      PlasticList_testing:
        "25% of the tested products had DMP. The highest detections were in Straus Organic Whole Milk in Glass (28,800 ng/serving) and Clover Organic Whole Milk in Whole Gallon Jug (18,720 ng/serving). Wikipedia says that DMP is also used as a plasticizer in coatings for medicine, but the modern medicines we tested were all relatively low on DMP (below the 20th percentile), although most were non-zero.",
      Health_effects:
        "The EPA (US) last reviewed DMP in 1988 and the EFSA (EU) in 2004. Neither set a limit for DMP.",
    },
    DIBP: {
      description:
        "DIBP is used as a plasticizer in plastics and rubber. It has low volatility, which makes it useful for products that have to remain flexible for a long time like automotive parts, wire and cable insulation, and flooring.",
      PlasticList_testing:
        "About 20% of the products we tested contained DIBP. The highest was an Indian food sample that we kept in a takeout container for 45 minutes (12,816 ng/serving). It's possible that the container leached DIBP: the takeout sample had about 5x DIBP compared to the same food we tested directly off the plate.",
      Health_effects: "We didn't find any safety limits for DIBP.",
    },
    DNHP: {
      description: "DNHP is an oily liquid used as a plasticizer.",
      PlasticList_testing:
        "None of the products we tested contained detectable levels of DNHP.",
      Health_effects: "We didn't find any safety limits for DNHP.",
    },
    DCHP: {
      description:
        "DCHP is a phthalate plasticizer that was detected in just 3% of the products we tested.",
      PlasticList_testing:
        "The highest non-vintage product with DCHP was One A Day prenatal supplement with 3,276 ng/serving.",
      Health_effects:
        'The US Consumer Product Safety Commission set a limit for DCHP at 51,000 ng / kg body weight / day in 2011. They cite "toxicity to the liver, kidney, testes, fetus, thyroid, and other tissues".',
    },
    DNOP: {
      description: "DNOP is a colorless, odorless, oily liquid.",
      PlasticList_testing:
        "None of the products we tested contained detectable levels of DNOP.",
      Health_effects:
        "We didn't find any safety limits, but the CDC has a Toxicology Profile on DNOP.",
    },
  },
  bisphenols: {
    description:
      "Bisphenols are chemicals that make plastic hard and shatterproof. Common bisphenols are BPA and its substitutes BPS, and BPF. They act kind of like the glue that holds molecules of plastic together. We decided to test for bisphenols because they are widely used, can leach out of products and have been linked to hormone disruption and effects on the immune system and brain development. Our lab detected bisphenols in 22% of the products we tested.",
    BPA: {
      description:
        "BPA is a colourless solid used in the production of resins and plastics. It was discovered in 1891 and is widely used – in 2022 global production was about 10 million tonnes.",
      PlasticList_testing:
        "Almost all of the BPA-containing products we tested (about 10% of all products) vastly exceeded the safe daily limit set by the EU EFSA, but not the US FDA or EPA. At the top of this list is boba tea from Boba Guys (tea and pearls): one boba tea equals 1.2 years of safe daily BPA consumption, according to the EFSA. The EPA limit for BPA is 250,000x higher, and the boba tea doesn't exceed it.",
      Health_effects:
        "In 2023, the EFSA reduced the limit for BPA by 20,000x to 0.2 ng / kg body weight / day. They cited immune system dysregulation in mice and also mentioned possible reproductive toxicity. The EPA (US) limit for BPA was set in 1988 and is 250,000x higher at 50,000 ng / kg body weight / day, citing reduced mean body weight in rats. Out of all the chemicals we tested, BPA has the largest discrepancy in safety limits between the EU EFSA and the US EPA.",
    },
    BPS: {
      description:
        "BPS is a BPA substitute, but it was actually discovered 24 years before BPA and was first used in 1869 as a dye. In the last ~15 years there have been more concerns about the health effects of BPA, and BPS became a popular replacement.",
      PlasticList_testing:
        "Our lab detected BPS in 9% of the products. By far the highest was the leaching from thermal paper receipts. In 30 minutes, a single Macy's receipt leached 76,689,900 ng BPS into water – over 76 milligrams. A Walgreens receipt leached 73,618,300 ng. And among foods, In-n-Out Cheeseburger Animal Style had the most BPS with 3,893 ng/serving.",
      Health_effects: "We didn't find any safety limits for BPS.",
    },
    BPF: {
      description:
        "BPF is a bisphenol substitute for BPA. Bisphenol F has many uses: production of tank and pipe linings, industrial flooring, road and bridge deck toppings, structural adhesives, coatings and electrical varnishes, among others. In the last ~15 years there have been more concerns about the health effects of BPA, and BPF became a popular replacement.",
      PlasticList_testing:
        "7% of the products we tested contained BPF. In-n-Out Cheeseburger Animal Style had the highest concentration of BPF with 12,824 ng/serving; it was also the highest on BPS. The second-highest BPF result was Subway Sub Tuna 6 Inch with 7,557 ng/serving.",
      Health_effects: "We didn't find any safety limits for BPF.",
    },
  },
  phthalate_substitutes: {
    description:
      "Phthalates and bisphenols have both been in use to improve plastic performance for almost 100 years. There was a major push starting in the 1990s to replace phthalates with safer alternatives, and phthalate substitutes were adopted in medical devices, children's toys, and food contact applications. We decided to test foods for the substitutes in addition to the original phthalates to see how effective this push has been. Our comparison of modern and vintage products confirms the idea that phthalate subsitution is happening over time. We found that vintage items tended to have higher levels of phthalates, while modern ones had more phthalate substitutes. All in all, our lab detected phthalate substitutes in 73% of the products we tested. Compared to the original phthalates and bisphenols, phthalate substitutes have less evidence of being harmful. They seem to be less studied than phthalates, but there aren't zero studies, and we couldn't find compelling evidence of harm.",
    DEHT: {
      description:
        "DEHT is a non-phthalate plasticizer often used as a less-regulated substitute for DEHP. When we compared vintage foods to similar modern foods, the modern foods consistently had more DEHT, and the vintage foods had more DEHP.",
      PlasticList_testing:
        "DEHT is the most common chemical we tested – it was detected in 71% of products. We found relatively large concentrations of DEHT in fast foods. Burger King Whopper had the all-highest concentration (5,877,600 ng/serving), the second-highest was Wendy's Dave's Single with Cheese (3,680,000 ng/serving), and the third-highest was Chick-fil-A Deluxe Sandwich (2,717,000 ng/serving).",
      Health_effects:
        "The evidence of the harms of DEHT is less strong than for DEHP. The EFSA (EU) set a limit of 1,000,000 ng / kg body weight / day in 2008, citing retinal and nasal turbinate changes, reduced maternal body weight and increased liver weight in rats.",
    },
    DEHA: {
      description:
        "DEHA is a colorless oily liquid. It is used as a hydraulic fluid and a component of aircraft lubricants. It is sometimes also used as a phthalate substitute in PVC-based plastic wrap.",
      PlasticList_testing:
        " 28% of the products we tested contained DEHA. The highest concentration was in this Stanford dining hall meal – 574,962 ng/serving.",
      Health_effects:
        "The EPA (US) set a limit of 600,000 ng / kg body weight / day for DEHA in 1992. They cite changes in body and liver weight, reduced ossification and slightly dilated ureters in fetuses, reduced offspring weight gain, total litter weight, and litter size in rats. The EPA also calls DEHA a “possible human carcinogen”. The EFSA (EU) set a 2x lower limit of 300,000 ng / kg body weight / day in 2005, citing fetal development toxicity in rats.",
    },
    DINCH: {
      description:
        "1,2-Cyclohexane dicarboxylic acid diisononyl ester (DINCH) \n Molecule of DINCH from commonchemistry.cas.org: https://commonchemistry.cas.org/detail?cas_rn=166412-78-8 \n DINCH is a colorless oily chemical mixture used as a plasticizer and a non-phthalate alternative to phthalates like DEHP. It’s used to make flexible plastics in sensitive applications such as toys, medical devices, and food packaging.",
      PlasticList_testing:
        " Of all the products we tested only one had DINCH – Ghirardelli dark chocolate in paper packaging (2,880 ng/serving). Interestingly, the same product in plastic packaging had no DINCH!",
      Health_effects:
        "The EFSA (EU) set a limit of 1,000,000 ng / kg body weight / day in 2006, citing kidney toxicity (increased occurrence of blood and degenerated cells in urine) in rats. The EPA (US) has no limit.",
    },
    DIDA: {
      description:
        "Diisodecyl adipate (DIDA)Diisodecyl adipate (DIDA) \n DIDA is a phthalate substitute used as a plasticizer.",
      PlasticList_testing: "We didn't find any DIDA in the products we tested.",
      Health_effects: "We didn't find any safety limits for DIDA.",
    },
  },
};

export const FAQ = {
  faq: {
    phthalates: {
      description:
        "Phthalates (pronounced THAL-ates) are chemicals that make plastic soft and flexible. They are found in many everyday products like food packaging, toys, and cosmetics.",
      questions: [
        {
          question: "What are phthalates?",
          answer:
            "Phthalates are chemicals that make plastic soft and flexible.",
        },
        {
          question: "Why are phthalates a concern?",
          answer:
            "Phthalates can leach into foods and the environment. They have been linked to health issues such as reproductive and developmental problems.",
        },
        {
          question: "How common are phthalates in products?",
          answer:
            "Our lab detected phthalates in 73% of the products we tested.",
        },
        {
          question: "What can I do to reduce exposure to phthalates?",
          answer:
            "Avoid plastics labeled with recycling code 3 or marked as 'PVC.' Use glass or stainless steel containers for food storage and reheating.",
        },
        {
          question: "What are DEHP equivalents?",
          answer:
            "DEHP, DBP, BBP, and DINP are considered 'DEHP equivalents' because of their cumulative effects on the reproductive system.",
        },
      ],
    },
    bisphenols: {
      description:
        "Bisphenols, such as BPA, BPS, and BPF, are chemicals used to make plastics hard and shatterproof. They act as a 'glue' that holds plastic molecules together.",
      questions: [
        {
          question: "What are bisphenols?",
          answer:
            "Bisphenols, such as BPA, BPS, and BPF, are chemicals used to make plastics hard and shatterproof.",
        },
        {
          question: "Why are bisphenols harmful?",
          answer:
            "Bisphenols can leach from products into food and drinks. They are linked to hormone disruption, immune system issues, and brain development effects.",
        },
        {
          question: "How common are bisphenols in products?",
          answer: "Our lab detected bisphenols in 22% of the products tested.",
        },
        {
          question: "What are BPA-free products?",
          answer:
            "BPA-free products replace BPA with alternatives like BPS or BPF. However, these substitutes may also pose potential health risks.",
        },
        {
          question: "Are there safety limits for bisphenols?",
          answer:
            "The EU has stricter limits for BPA than the US. For example, the EFSA set a daily limit of 0.2 ng/kg body weight/day for BPA, while the US EPA's limit is 250,000 times higher.",
        },
      ],
    },
    phthalate_substitutes: {
      description:
        "Phthalates and bisphenols have both been in use to improve plastic performance for almost 100 years. There was a major push starting in the 1990s to replace phthalates with safer alternatives, and phthalate substitutes were adopted in medical devices, children's toys, and food contact applications. We decided to test foods for the substitutes in addition to the original phthalates to see how effective this push has been. Our comparison of modern and vintage products confirms the idea that phthalate substitution is happening over time. We found that vintage items tended to have higher levels of phthalates, while modern ones had more phthalate substitutes.",
      questions: [
        {
          question: "What are phthalate substitutes?",
          answer:
            "These are chemicals used to replace traditional phthalates in products like medical devices, toys, and food packaging. Substitutes like DEHT are often considered safer alternatives.",
        },
        {
          question: "Are phthalate substitutes completely safe?",
          answer:
            "Phthalate substitutes generally have less evidence of harm compared to traditional phthalates, but research is ongoing. For instance, DEHT has been linked to fewer health concerns than DEHP.",
        },
        {
          question: "How common are phthalate substitutes?",
          answer:
            "Phthalate substitutes were detected in 73% of the products we tested, indicating a shift towards safer alternatives in modern manufacturing.",
        },
        {
          question: "What is DEHT?",
          answer:
            "DEHT is a non-phthalate plasticizer often used as a substitute for DEHP. It is commonly found in fast foods and other modern products.",
        },
        {
          question: "How can I identify products with phthalate substitutes?",
          answer:
            "Look for labels like 'phthalate-free' or certifications indicating the use of safer alternatives.",
        },
      ],
    },
  },
};