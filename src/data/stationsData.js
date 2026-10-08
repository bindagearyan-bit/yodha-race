// Official Stations Data for YODHA RACE (Inspired by HYROX)
// ASPIRE AIML × RUGGEDIAN™

export const stationsData = [
  {
    id: 1,
    number: "01",
    tag: "STATION 01 // ACCELERATION",
    title: "50M SPRINT",
    subtitle: "Explosive Turf Acceleration & Max Velocity",
    category: "AEROBIC / ANAEROBIC POWER",
    targetZone: "Sprint Track Turf Lane",
    pacingPacingTarget: "All-Out Sprint (< 8.0s)",
    male: {
      load: "Bodyweight",
      target: "50m Explosive Turf Sprint",
      benchmark: "< 7.20 SEC",
      description: "All-out acceleration sprint across the designated 50-meter turf line. High knee drive, aggressive forward torso lean, zero deceleration before crossing the optical photogate plane."
    },
    female: {
      load: "Bodyweight",
      target: "50m Explosive Turf Sprint",
      benchmark: "< 8.50 SEC",
      description: "Explosive forward acceleration out of blocks. Rapid turnover frequency and clean line tracking through the 50-meter finish caliper."
    },
    muscles: [
      { name: "Quadriceps", intensity: 95 },
      { name: "Hamstrings", intensity: 90 },
      { name: "Calves / Soleus", intensity: 85 },
      { name: "Gluteus Maximus", intensity: 88 }
    ],
    movementStandards: [
      "Athlete begins in stationary 3-point or 2-point stance behind line 0.0m.",
      "Sprint triggers on official starter horn / whistle.",
      "Must remain strictly inside designated lane corridors (no turf drift).",
      "Torso must break the 50m photogate plane to stop timing chip clock."
    ],
    noRepPenalties: [
      "False Start (Breaking before the audible horn): +5.0 Second Heat Penalty.",
      "Lane Infraction (Crossing into adjacent athlete corridor): Heat disqualification or +10.0s.",
      "Early deceleration / easing off before crossing 50m line: Time loss recorded."
    ],
    duoStrategy: "The lead athlete drives first to break aerodynamic resistance. Duo partner locks pacing cadence 1 stride behind, avoiding stride clash while maintaining maximum stride turnover.",
    technicalCues: [
      "Strike ground directly under center of mass.",
      "Drive elbows backward with high-amplitude arm swings.",
      "Maintain neutral head alignment — avoid gazing up."
    ]
  },
  {
    id: 2,
    number: "02",
    tag: "STATION 02 // CALLISTHENIC / CADENCE",
    title: "BURPEE / SKIP ZONE",
    subtitle: "Full-Body Metabolic Acid Burn",
    category: "METABOLIC CONDITIONING",
    targetZone: "Station Bay 02",
    pacingPacingTarget: "Continuous Cadence (< 50s)",
    male: {
      load: "Bodyweight Strict",
      target: "15 Chest-to-Floor Burpees",
      benchmark: "< 42.0 SEC",
      description: "Strict chest-to-turf drop with simultaneous hand release or touch, explosive jump back with full vertical hip extension and overhead clap."
    },
    female: {
      load: "Speed Cable Rope",
      target: "50 Speed Rope Skips",
      benchmark: "< 35.0 SEC",
      description: "High-rpm continuous jump rope skipping. Clean unbroken revolutions with active wrist whip and tight vertical core posture."
    },
    muscles: [
      { name: "Full Body Pectorals", intensity: 88 },
      { name: "Core Abdominals", intensity: 92 },
      { name: "Anterior Deltoids", intensity: 80 },
      { name: "Calf Plantarflexors", intensity: 85 }
    ],
    movementStandards: [
      "Male: Sternum and thighs must contact turf floor simultaneously at bottom.",
      "Male: Both feet must leave turf during jump, hands meet overhead with open hips.",
      "Female: Rope must pass completely under both feet on every single revolution.",
      "Female: Only clean completed revolutions register to the judge scorecard."
    ],
    noRepPenalties: [
      "Male: Incomplete hip extension at the top: Judge calls 'NO REP'.",
      "Male: Chest hovering or failing to touch turf: 'NO REP'.",
      "Female: Rope trip / snag does not reset total count, but tripped skips are excluded.",
      "Failure to achieve full count before advancing: +10.0 Second Penalty."
    ],
    duoStrategy: "Breathing tempo is paramount. Inhale forcefully during drop / rope spin; sharp exhalation upon takeoff. For duos, maintain verbal rhythmic cadence ('Up-Two-Three') to keep the partner locked in synch.",
    technicalCues: [
      "Burpees: Pop feet wide to outside of hands for fast upright recovery.",
      "Skips: Keep elbows glued near ribs, rotate purely from wrists."
    ]
  },
  {
    id: 3,
    number: "03",
    tag: "STATION 03 // ISOMETRIC GRIP & CORE",
    title: "FARMER’S WALK",
    subtitle: "Loaded Heavy Dumbbell / Kettlebell Circuit",
    category: "HEAVY ISOMETRIC CARRY",
    targetZone: "50M Pylon Circuit Bay",
    pacingPacingTarget: "Unbroken Pacing (< 60s)",
    male: {
      load: "Dual 24 kg Kettlebells (48 kg Total)",
      target: "50-Meter Unbroken Walk",
      benchmark: "< 55.0 SEC",
      description: "Dual 24 kg competition kettlebells gripped at sides. Neutral spine, pinned scaps, upright posture across 50m marked turnaround."
    },
    female: {
      load: "Dual 8 kg Kettlebells (16 kg Total)",
      target: "50-Meter Controlled Carry",
      benchmark: "< 48.0 SEC",
      description: "Dual 8 kg kettlebells. Perfect spinal alignment, brisk gait cadence, zero lateral sway or resting bells against quads."
    },
    muscles: [
      { name: "Forearm Flexors / Grip", intensity: 98 },
      { name: "Trapezius & Upper Back", intensity: 94 },
      { name: "Transverse Abdominis", intensity: 90 },
      { name: "Gluteus Medius", intensity: 82 }
    ],
    movementStandards: [
      "Both weights must be deadlifted from ground simultaneously without tilting.",
      "Athlete must navigate around perimeter turnaround cone without cutting corner.",
      "Both bells must cross the finish perimeter before weights are set down.",
      "Grip chalk provided in staging pit."
    ],
    noRepPenalties: [
      "Dropping or throwing weights on turf: +5.0s Equipment Misuse Penalty.",
      "Resting weights on quads or hips while walking: Warning followed by +5.0s.",
      "Cutting the turnaround pylon: Must return and round the cone properly."
    ],
    duoStrategy: "Do not sprint the first 10m and blow out your forearms. Settle into quick, short heel-to-toe strides with ribs pulled down. Chalk hands thoroughly 30 seconds prior to entry.",
    technicalCues: [
      "Pack shoulders down and back into back pockets.",
      "Breathe through belly to preserve intra-abdominal pressure.",
      "Keep vision locked 10 meters ahead, not at the ground."
    ]
  },
  {
    id: 4,
    number: "04",
    tag: "STATION 04 // ERGOMETER POWER",
    title: "CONCEPT2 / ELECTRIC ROWING ERG",
    subtitle: "High-Lactate Split Cadence & Stroke Drive",
    category: "CARDIOVASCULAR LACTATE RESISTANCE",
    targetZone: "Station Bay 04 // Erg Rows",
    pacingPacingTarget: "Sub-1:35 / 500m Pace",
    male: {
      load: "Damper 6-7 (Standard Resistance)",
      target: "300m Max-Effort Row",
      benchmark: "< 56.0 SEC",
      description: "300-meter explosive ergometer row. Aggressive hip drive, quick catch and release, aiming for sub-minute completion."
    },
    female: {
      load: "Damper 5-6 (Standard Resistance)",
      target: "150m Explosive Cadence Row",
      benchmark: "< 34.0 SEC",
      description: "150-meter rapid cadence sprint. High strokes per minute (SPM 32-36) with fluid recoil and powerful leg drive."
    },
    muscles: [
      { name: "Latissimus Dorsi", intensity: 95 },
      { name: "Rhomboids & Traps", intensity: 90 },
      { name: "Hamstrings & Quads", intensity: 92 },
      { name: "Erector Spinae & Core", intensity: 88 }
    ],
    movementStandards: [
      "Athlete's feet strapped into footplates before first pull.",
      "Display monitor reset to zero meters prior to start.",
      "Flywheel handle pulled with both hands to lower ribcage.",
      "Display must decrement completely to 0m before athlete unstraps."
    ],
    noRepPenalties: [
      "Leaving ergometer before display reaches 0m: +5.0s Incomplete Distance Penalty.",
      "Premature strap release while flywheel is spinning: Penalty + judge warning.",
      "Tampering with damper during row: Disqualification."
    ],
    duoStrategy: "The non-rowing teammate should hold the monitor and scream target split times (500m split), while helping untie and strap the foot cradles for instant changeover if duos share distance.",
    technicalCues: [
      "Power order: Legs -> Torso -> Arms on the drive.",
      "Recovery order: Arms -> Torso -> Legs on the return.",
      "Keep heels pressed firmly against heel cups during extension."
    ]
  },
  {
    id: 5,
    number: "05",
    tag: "STATION 05 // LOW-TRACTION TURF DRIVE",
    title: "SLED PUSH",
    subtitle: "Heavy Steel Sled Drive Against Turf Friction",
    category: "HORIZONTAL LEG HYPERTROPHY / DRIVE",
    targetZone: "20M Turf Prowler Lane",
    pacingPacingTarget: "Relentless Drive (< 40s)",
    male: {
      load: "80 kg Plate Loaded Sled",
      target: "20-Meter Continuous Drive",
      benchmark: "< 32.0 SEC",
      description: "Drive an 80 kg steel prowler across 20 meters of heavy-pile athletic turf. Lock elbows or low-arm drive with explosive calf extension."
    },
    female: {
      load: "60 kg Plate Loaded Sled",
      target: "20-Meter Continuous Drive",
      benchmark: "< 36.0 SEC",
      description: "Drive a 60 kg steel prowler across 20 meters. Low center of gravity, forward shin angles, driving through turf."
    },
    muscles: [
      { name: "Quadriceps Femoris", intensity: 99 },
      { name: "Calf Gastrocnemius", intensity: 96 },
      { name: "Gluteus Maximus", intensity: 92 },
      { name: "Anterior Deltoids / Chest", intensity: 85 }
    ],
    movementStandards: [
      "Sled must begin fully behind starting 0.0m boundary line.",
      "Athlete pushes using either high vertical uprights or low crossbar.",
      "Entire sled frame (including rear skids) must fully cross the 20m line.",
      "No towing ropes permitted on this station."
    ],
    noRepPenalties: [
      "Stopping and abandoning sled outside designated lane: +5.0s.",
      "Stepping outside lane borders or pushing off turf barriers: +5.0s.",
      "Rear skids failing to cross line before celebration: Heat clock continues."
    ],
    duoStrategy: "Momentum is everything. Overcoming static friction takes 70% of energy; once the sled moves, NEVER let it come to a dead stop. Teammate calls pacing rhythms 'STEP, DRIVE, STEP, DRIVE'.",
    technicalCues: [
      "Keep body at roughly 45-degree forward lean angle.",
      "Drive knees toward chest rather than taking wide steps.",
      "Wear high-traction turf or cross-training shoes with rubber bite."
    ]
  },
  {
    id: 6,
    number: "06",
    tag: "STATION 06 // UPPER CHAIN TRACTION",
    title: "SLED PULL",
    subtitle: "Heavy Marine Battle Rope Hand-Over-Hand",
    category: "POSTERIOR CHAIN & UPPER BODY PULL",
    targetZone: "Pull Box Zone 06",
    pacingPacingTarget: "Rapid Recoil Pull (< 45s)",
    male: {
      load: "60 kg Loaded Sled + Battle Rope",
      target: "20-Meter Hand-over-Hand Pull",
      benchmark: "< 38.0 SEC",
      description: "Stationary pull from designated athlete box. Athlete retrieves 60 kg sled across 20m using 50mm heavy marine manila battle rope."
    },
    female: {
      load: "40 kg Loaded Sled + Battle Rope",
      target: "20-Meter Hand-over-Hand Pull",
      benchmark: "< 35.0 SEC",
      description: "Stationary pull from designated athlete box. 40 kg sled retrieved hand-over-hand with rapid forearm turnover."
    },
    muscles: [
      { name: "Latissimus Dorsi", intensity: 96 },
      { name: "Biceps Brachii & Brachialis", intensity: 93 },
      { name: "Finger / Hand Forearms", intensity: 95 },
      { name: "Posterior Chain & Core", intensity: 88 }
    ],
    movementStandards: [
      "Athlete must remain completely inside the designated 2m × 2m pulling box.",
      "No stepping out of the box during the pull.",
      "Hand-over-hand method; athlete cannot wrap rope around torso or limbs.",
      "Sled base must contact the 0m boundary marker."
    ],
    noRepPenalties: [
      "Stepping out of the 2m box during active pull: +5.0s Foot Fault Penalty.",
      "Sitting down on turf during pull (standing / athletic squat required): +5.0s.",
      "Partner assistance inside the active pull box: Disqualification."
    ],
    duoStrategy: "Drop into a deep quarter-squat anchor stance. Pull the rope into your rib cage, discard the slack behind you with your rear hand, and maintain hand turnover without hesitating.",
    technicalCues: [
      "Use your legs and bodyweight lean to initiate each big tug.",
      "Stack pulled rope neatly to side to prevent tripping in the box.",
      "Maintain tight grip pressure across the entire palm."
    ]
  },
  {
    id: 7,
    number: "07",
    tag: "STATION 07 // GRAND FINALE POWER",
    title: "TYRE FLIP",
    subtitle: "Heavy Industrial Tyre Triple-Extension Finale",
    category: "EXPLOSIVE FULL-BODY HIP HINGE",
    targetZone: "Championship Finale Ring",
    pacingPacingTarget: "6 Flips (< 35s)",
    male: {
      load: "Heavy Monster Industrial Tyre",
      target: "6 Continuous Flips",
      benchmark: "< 28.0 SEC",
      description: "6 full flips of the heavy monster industrial tyre. Deep squat chest wedge, explosive upward hip drive, push through to flat landing."
    },
    female: {
      load: "Small / Medium Tractor Tyre",
      target: "6 Continuous Flips",
      benchmark: "< 24.0 SEC",
      description: "6 full flips of the small/medium tractor tyre. Aggressive hip drive, synchronized push, landing flat before next flip."
    },
    muscles: [
      { name: "Gluteus Maximus", intensity: 99 },
      { name: "Hamstrings", intensity: 95 },
      { name: "Erector Spinae", intensity: 92 },
      { name: "Pectorals & Triceps", intensity: 90 }
    ],
    movementStandards: [
      "Tyre starts flat on designated start marker.",
      "Hands placed under bottom edge of tyre with chest firmly pressed to tread.",
      "Upward drive powered by legs and hips (triple extension).",
      "Tyre must land completely flat on ground to count as 1 repetition.",
      "Total required: exactly 6 valid repetitions."
    ],
    noRepPenalties: [
      "Using knees underneath tyre to bounce (Dangerous / Banned): 'NO REP'.",
      "Tyre stopping on side rim and rolling away: Rep must be reset flat.",
      "Failing to achieve 6 full flat landings: Heat incomplete."
    ],
    duoStrategy: "This is the final barrier before crossing the grand finish line! Both athletes can synchronize hands under the tyre: on count '3-2-1 EXPLODE', both heave simultaneously with maximum roar.",
    technicalCues: [
      "Never round your lumbar spine — stay in athletic wedge stance.",
      "Drive through your heels; push the tyre forward as it passes 45 degrees.",
      "Transition hands from underhand to push position as the tyre crowns."
    ]
  }
];

export const eventScheduleData = {
  date: "Saturday, 17th October 2026",
  time: "11:00 AM IST",
  venue: "Main Athletic Turf & Sports Arena, DYPCET Campus",
  location: "Kasaba Bawada, Kolhapur, Maharashtra 416006",
  entryFee: "₹100 Per Duo (Team of 2 Athletes)",
  registrationDeadline: "Thursday, 15th October 2026, 11:59 PM",
  organizer: "ASPIRE Student Association (Dept. of AIML, DYPCET)",
  poweredBy: "RUGGEDIAN™",
  waves: [
    {
      year: "SY & TY",
      title: "Second Year & Third Year Athletes",
      reportingTime: "11:00 AM Sharp",
      waveCode: "WAVE 01 // VETERAN BRIGADE",
      briefing: "11:15 AM Turf Intel & Movement Standard Walkthrough",
      startGun: "11:30 AM First Heat Gun",
      details: "For enrolled SY and TY engineering duos. Mandatory physical briefing and chip issuance at 11:00 AM."
    },
    {
      year: "FE",
      title: "First Year Athletes",
      reportingTime: "1:10 PM Sharp",
      waveCode: "WAVE 02 // FRESHMEN GAUNTLET",
      briefing: "1:25 PM Turf Intel & Movement Standard Walkthrough",
      startGun: "1:45 PM First Heat Gun",
      details: "Exclusively for First Year freshman duos. Complete station breakdown and orientation conducted before flag-off."
    }
  ],
  gearChecklist: [
    { id: "shoes", label: "Athletic Running / Turf Shoes with Grip", mandatory: true },
    { id: "collegeId", label: "Valid DYPCET College ID Card (Both Athletes)", mandatory: true },
    { id: "payment", label: "₹100 UPI Payment Screenshot with UTR / Transaction ID", mandatory: true },
    { id: "hydration", label: "Personal Hydration Water Bottle & Electrolytes", mandatory: true },
    { id: "apparel", label: "Breathable Athletic Apparel (T-shirt/Jersey + Shorts)", mandatory: true },
    { id: "waiver", label: "Signed Physical Fitness Declaration / Waiver", mandatory: true }
  ]
};
