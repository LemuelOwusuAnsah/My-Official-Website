export type CaseStudy = {
  slug: string
  title: string
  tag: string
  pitch: string
  status: 'shipped' | 'in-progress'
  liveUrl: string
  repoUrl?: string
  stack: string[]
  accent: { bg: string; text: string; muted: string; ring: string }
  sections: { heading: string; body: string }[]
  roadmap?: { heading: string; items: string[] }
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'capital-quest',
    title: 'Capital Quest',
    tag: 'Game',
    pitch: 'A retro arcade geography game where you identify world capitals across three difficulty tiers.',
    status: 'shipped',
    liveUrl: 'https://lemuelowusuansah.github.io/Capital-Quest/',
    repoUrl: 'https://github.com/LemuelOwusuAnsah/Capital-Quest',
    stack: ['Vanilla JavaScript', 'HTML5', 'CSS3', 'LocalStorage', 'Web Audio API'],
    accent: {
      bg: 'bg-[#fb923c] dark:bg-[#c2410c]',
      text: 'text-[#431407] dark:text-[#ffedd5]',
      muted: 'text-[#7c2d12] dark:text-[#fed7aa]',
      ring: 'border-[#431407]/15 dark:border-[#ffedd5]/15',
    },
    sections: [
      {
        heading: 'The brief',
        body: 'Most geography apps ask a question and give a score. None of them make you feel like you are playing. I wanted to build something a kid in Accra would open on a Saturday and lose an hour to — while quietly learning the capitals of the world. So: arcade rules, arcade sound, arcade difficulty curve.',
      },
      {
        heading: 'What it does',
        body: 'Three difficulty levels — Metropolis, Nations, and the world. Each round shows a capital or a country and you match them. Levels end with a retro-arcade "LEVEL COMPLETED" screen. Fail three times and the game stops. Player profiles persist your high scores. The leaderboard keeps every session on the same device honest. Sound effects use Web Audio — no audio files, all synthesized at runtime.',
      },
      {
        heading: 'How it is built',
        body: 'Vanilla JavaScript, no framework. State is a single store object with a small reducer pattern. The rendering layer diffs only the DOM nodes that change — no virtual DOM, just targeted updates. Persistence uses localStorage for profiles and scores. The whole thing runs offline after first load.',
      },
      {
        heading: 'Decisions and trade-offs',
        body: 'I chose vanilla over React deliberately. A game that runs on a 3G connection in Accra has no business downloading a 40 KB framework to render three buttons and a country name. The cost is more code in the state layer. The benefit is a 60 KB total bundle and a game that feels instant even on a five-year-old laptop.',
      },
      {
        heading: 'What I would do differently',
        body: 'I would extract the game-loop timing into a proper state machine from the start. Right now pause, resume, and level transitions are handled by a mix of flags and DOM classes. A cleaner FSM would make adding new modes much easier. That refactor is on the roadmap.',
      },
    ],
    roadmap: {
      heading: 'Backend roadmap',
      items: [
        'Global leaderboard backed by MySQL — same design as Calculoria',
        'Player accounts so progress follows you across devices',
        'Multi-language question bank (FR, ES, DE, PT)',
        'An admin panel where new questions can be added without touching code',
        'Daily challenge mode with a rolling cache for offline play',
      ],
    },
  },
  {
    slug: 'body-metrics',
    title: 'Body Metrics',
    tag: 'Health tracker',
    pitch: 'A BMI tracker with history, progress charts, goal setting, and weekly reminders.',
    status: 'shipped',
    liveUrl: 'https://lemuelowusuansah.github.io/Body-Metrics-01/',
    repoUrl: 'https://github.com/LemuelOwusuAnsah/Body-Metrics-01',
    stack: ['Vanilla JavaScript', 'HTML5', 'CSS3', 'LocalStorage', 'SVG Charts'],
    accent: {
      bg: 'bg-[#c4b5fd] dark:bg-[#6d28d9]',
      text: 'text-[#2e1065] dark:text-[#ede9fe]',
      muted: 'text-[#4c1d95] dark:text-[#ddd6fe]',
      ring: 'border-[#2e1065]/15 dark:border-[#ede9fe]/15',
    },
    sections: [
      {
        heading: 'The brief',
        body: 'BMI apps usually give you a number and walk away. That is useless. What a person actually wants is a picture of their trend, a target they can see, and a nudge to log again next week. Body Metrics was built around that idea: know the number, own the goal.',
      },
      {
        heading: 'What it does',
        body: 'Enter height and weight (kg/cm or lb/ft-in). Get your BMI and a color-coded category. Save the reading. Over time, a chart shows your trend. Set a target weight and see progress toward it with visual milestones. Weekly reminders can be enabled from the browser. Data can be exported as JSON so you own it.',
      },
      {
        heading: 'How it is built',
        body: 'Vanilla JavaScript and hand-rolled SVG for the chart. No chart library. All state lives in localStorage as an array of readings — every calculation (BMI, category, distance to goal) is derived from that array, not stored. That means the app never has a stale number: delete a reading and everything recomputes.',
      },
      {
        heading: 'Decisions and trade-offs',
        body: 'No backend was the right call for a first version. Health data is sensitive; asking users to trust a server before the app has proven itself is backwards. localStorage keeps everything on their device. The cost is: no cross-device sync, no backup if the browser clears storage. That is why export exists.',
      },
      {
        heading: 'What I would do differently',
        body: 'I would build the chart as a proper component from day one, not a function that returns a string of SVG. It is hard to animate and hard to test. The current chart works, but a small chart module with a fixed API would have saved time later.',
      },
    ],
    roadmap: {
      heading: 'Backend roadmap',
      items: [
        'Optional account system for cross-device sync — PHP sessions, MySQL storage',
        'Encrypted health data at rest, with a clear privacy policy',
        'Server-side trends that surface anomalies and send a quiet email',
        'Wearable import (Apple Health / Google Fit) as an opt-in',
        'A shared "household" mode for families tracking together',
      ],
    },
  },
  {
    slug: 'lans-wellness',
    title: 'Lans Wellness Clinic',
    tag: 'Healthcare frontend',
    pitch: 'The frontend foundation for an integrative health clinic — built to grow into a full patient portal.',
    status: 'in-progress',
    liveUrl: 'https://lemuelowusuansah.github.io/Lans-Wellness-Clinic--Frontend-/',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    accent: {
      bg: 'bg-[#bef264] dark:bg-[#4d7c0f]',
      text: 'text-[#1a2e05] dark:text-[#ecfccb]',
      muted: 'text-[#365314] dark:text-[#d9f99d]',
      ring: 'border-[#1a2e05]/15 dark:border-[#ecfccb]/15',
    },
    sections: [
      {
        heading: 'The brief',
        body: 'Ghanaian clinics often run on a WhatsApp number, a paper diary, and a photocopier. Patients cannot see availability, do not know which specialist to ask for, and lose referral notes between visits. Lans Wellness Clinic is the front door for a clinic that wants to change that — a calm, professional site that will grow into a real booking and patient portal.',
      },
      {
        heading: 'Where it stands now',
        body: 'A clean, responsive frontend is live: services overview, team introduction, and the shape of the booking flow. It is deliberately a foundation, not a finished product. The design language — spacing, type, color — is set so that adding pages later does not require redesign.',
      },
      {
        heading: 'Decisions and trade-offs',
        body: 'Starting with the frontend first was intentional. Healthcare software fails when it is built around what engineers find interesting, not what patients and staff actually do all day. The frontend is a design and UX decision; the backend is a business decision. Getting the design settled before adding PHP and MySQL means the backend will serve a page that already makes sense.',
      },
      {
        heading: 'What I would do differently',
        body: 'I would have talked to three real receptionists and one nurse before writing any HTML. The structure is right, but a single afternoon of shadowing would have sharpened the booking flow into something that matches how a clinic actually runs its day. That conversation is the next step.',
      },
    ],
    roadmap: {
      heading: 'Backend roadmap',
      items: [
        'Patient booking flow with real-time availability — PHP + MySQL, plus an email confirmation',
        'Optional patient accounts to see past visits, prescriptions, and referral notes',
        'Staff dashboard: today\'s schedule, patient check-in, quick note entry',
        'Role-based access (patient, receptionist, doctor, admin) with audit logging',
        'Integration with Ghana Health Service referral forms and NHIS claims',
        'SMS reminders 24h before an appointment — Twilio or a local Ghanaian gateway',
      ],
    },
  },
  {
    slug: 'lans-multimedia',
    title: 'Lans Multimedia',
    tag: 'Technology & multimedia',
    pitch: 'A Ghanaian technology and multimedia company providing digital solutions, creative production, and practical computer training.',
    status: 'in-progress',
    liveUrl: 'https://web.facebook.com/lansmultimedia',
    stack: ['Web development', 'Mobile solutions', 'Multimedia production', 'Computer training'],
    accent: {
      bg: 'bg-[#fbbf24] dark:bg-[#b45309]',
      text: 'text-[#422006] dark:text-[#fef3c7]',
      muted: 'text-[#78350f] dark:text-[#fde68a]',
      ring: 'border-[#422006]/15 dark:border-[#fef3c7]/15',
    },
    sections: [
      {
        heading: 'The company',
        body: 'Lans Multimedia is the technology and multimedia company I founded to help people, organizations, and businesses make better use of digital tools. Its work brings together web and mobile solutions, multimedia production, technology support, and practical computer training.',
      },
      {
        heading: 'What we do',
        body: 'The company supports clients with websites and web applications, mobile-focused digital experiences, creative and multimedia production, IT guidance, and computer skills training. The aim is practical: make technology understandable, useful, and accessible to the people who need it.',
      },
      {
        heading: 'Who it serves',
        body: 'Lans Multimedia works with individuals, small businesses, organizations, learners, and teams that need a reliable technology partner. That includes people starting their digital journey, organizations improving their online presence, and clients who need training alongside a finished product.',
      },
      {
        heading: 'Where we are now',
        body: 'We are refurbishing a new premises and preparing to resume services fully. The online side of the company will be active again this week, with updates on available services, training, projects, and ways to work with us shared as the relaunch takes shape.',
      },
    ],
    roadmap: {
      heading: 'Services resuming this week',
      items: [
        'Online enquiries for web, mobile, and multimedia projects',
        'Computer training and practical digital skills support',
        'Technology guidance for individuals, businesses, and organizations',
        'Updates on the refurbished Lans Multimedia premises and reopening plans',
      ],
    },
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug)
}
