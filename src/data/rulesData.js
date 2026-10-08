// Official Rulebook & Regulations for YODHA RACE
// Inspired by HYROX Global Competitive Standards

export const rulesCategories = [
  {
    id: "duo-dynamics",
    title: "01 // DUO HEAT DYNAMICS & SYNERGY",
    subtitle: "RACE AS ONE, FINISH AS ONE",
    icon: "Users2",
    rules: [
      {
        heading: "Proximity & Twinning Rule",
        text: "Both athletes in a Duo must enter each station together and cannot progress to the subsequent station until both members have completed their designated station reps or distance."
      },
      {
        heading: "Transition Zone Regulations",
        text: "The transition corridor between stations is considered active race territory. Teammates must stay within 5 meters of each other at all times. Leaving a teammate behind incurs a 10-second team penalty."
      },
      {
        heading: "Workload Division",
        text: "For stations with shared distance or reps (where permitted by the station marshal), teammates may tag in and out at will via physical hand clap. Both athletes must physically perform in every station."
      },
      {
        heading: "Finish Line Tie",
        text: "The official chip timing clock stops ONLY when the second athlete of the duo breaks the optical photogate plane at the final finish arch."
      }
    ]
  },
  {
    id: "judging-penalties",
    title: "02 // JUDGING CRITERIA & PENALTY MATRIX",
    subtitle: "RIGOROUS IMPARTIAL TIME AUDITING",
    icon: "ShieldAlert",
    rules: [
      {
        heading: "Standard Time Penalty (+5.0s)",
        text: "Assessed for minor movement infractions, including: incomplete hip lockout on burpees, dropping weights on turf rather than controlled lowering, line stepping in the sled pull box, or false start."
      },
      {
        heading: "Major Infraction (+15.0s / DQ)",
        text: "Assessed for unsportsmanlike conduct, interfering with adjacent duo lanes, altering ergometer damper settings mid-race, or advancing without the station judge's green clearance flag."
      },
      {
        heading: "The 'NO REP' Call",
        text: "If a judge calls 'NO REP', that repetition does not count toward your total requirement. The athlete must perform an additional valid rep before progressing."
      },
      {
        heading: "Marshal Finality",
        text: "All decisions made by ASPIRE × RUGGEDIAN™ Chief Race Marshals on the turf are final and non-negotiable. Video reviews are not permitted for preliminary heats."
      }
    ]
  },
  {
    id: "gear-timing",
    title: "03 // TIMING CHIPS & RACE TECH",
    subtitle: "ELECTRONIC PRECISION PROTOCOL",
    icon: "Cpu",
    rules: [
      {
        heading: "Timing Chip Placement",
        text: "Electronic transponder ankle bands must be fastened securely to the left ankle throughout the entire event. Losing or detaching the chip results in automatic heat invalidation."
      },
      {
        heading: "Mandatory Footwear",
        text: "Athletes must wear athletic shoes with solid turf rubber traction. Barefoot running, spikes, or open-toed sandals are strictly prohibited for safety reasons."
      },
      {
        heading: "Chalk & Hydration Stations",
        text: "Official competition magnesium carbonate chalk is provided at Station 3 (Farmer's Walk) and Station 6 (Sled Pull). Liquid chalk is allowed. Hydration is provided in the cooling bays."
      },
      {
        heading: "Bib Numbers & Wave Wristbands",
        text: "Official weatherproof bibs must be pinned to the front chest. Color-coded wave wristbands (Wave 01 Green, Wave 02 Volt) must remain on wrists until post-race recovery."
      }
    ]
  },
  {
    id: "medical-safety",
    title: "04 // MEDICAL PROTOCOLS & WAIVER",
    subtitle: "SAFETY FIRST IN THE RED ZONE",
    icon: "HeartPulse",
    rules: [
      {
        heading: "On-Site Paramedic Station",
        text: "A fully equipped emergency medical squad, first-aid paramedic station, and ambulance are stationed immediately adjacent to the finish line corridor."
      },
      {
        heading: "Voluntary Tap-Out",
        text: "Any athlete experiencing dizziness, severe cramps, shortness of breath, or cardiac discomfort can signal any station judge with a raised fist to immediately halt the heat."
      },
      {
        heading: "Hydration Obligation",
        text: "Kolhapur weather can be warm and humid. All athletes are required to pre-hydrate at least 2 hours prior to their official wave start time."
      },
      {
        heading: "Signed Waiver Requirement",
        text: "Every athlete must sign the physical fitness undertaking confirming they have no undisclosed cardiovascular, spinal, or respiratory conditions."
      }
    ]
  }
];

export const podiumPrizes = [
  {
    place: "1ST PLACE // CHAMPIONS",
    badge: "GOLD TROPHY",
    award: "Championship Trophy + Official Ruggedian™ Merch + Cash Cash Prize + Gold Medals",
    color: "#D2F824"
  },
  {
    place: "2ND PLACE // RUNNERS-UP",
    badge: "SILVER TROPHY",
    award: "Silver Trophy + Ruggedian™ Gear Hamper + Official DYPCET Certificates + Silver Medals",
    color: "#E2E8F0"
  },
  {
    place: "3RD PLACE // BRONZE FINISH",
    badge: "BRONZE MEDAL",
    award: "Bronze Trophy + Fitness Gear Kit + Official DYPCET Certificates + Bronze Medals",
    color: "#F59E0B"
  }
];
