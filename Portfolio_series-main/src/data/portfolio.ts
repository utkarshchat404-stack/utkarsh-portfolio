/**
 * Central portfolio data — adapted from Utkarsh Kumar's supplied resume.
 * Enhancements are presentation-focused; factual experience remains resume-grounded.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Utkarsh Kumar',
  displayName: 'Utkarsh Kumar',
  firstName: 'UTKARSH',
  seriesTag: 'THE PROFESSIONAL SERIES',
  originalLabel: 'A KUMAR ORIGINAL',
  role: 'Customer Support & Operations Executive',
  tagline: ['Customer Support', 'Business Operations', 'Sales Support'],
  intro:
    'Customer Care and Operations professional with experience across customer support, executive business support, backend operations, sales coordination and client communication. Known for clear communication, calm problem-solving and dependable execution in fast-paced environments.',
  location: 'Indore, India',
  email: 'utkarsh.chat404@gmail.com',
  phone: '6260917206',
  links: {
    linkedin: '',
    github: '',
  },
  resumePdf: '/assets/Utkarsh_Kumar_Resume.pdf',
  portrait: {
    src: '/assets/utkarsh-portrait.jpg',
    srcSet: '/assets/utkarsh-portrait.jpg',
    alt: 'Portrait of Utkarsh Kumar',
  },
  interests: ['Customer Experience', 'Business Operations', 'Sales Support', 'Backend Operations'],
};

export const education = [
  {
    school: 'BBOSE',
    place: 'India',
    degree: '12th',
    period: '2021',
    score: 'Completed',
  },
  {
    school: 'SAGE University',
    place: 'Indore',
    degree: 'Bachelor of Technology — Computer Science & Engineering',
    period: '2022 — Dropped',
    score: 'Course discontinued',
  },
];

export const experience = [
  {
    company: 'Braintree Products USA',
    role: 'Operations Executive',
    place: 'USA Client Operations',
    period: 'December 2025 – May 2026',
    points: [
      'Managed L1 & L2 customer support, resolving queries, complaints and escalations efficiently.',
      'Handled the end-to-end customer lifecycle from inquiry through issue resolution.',
      'Supported sales operations through lead handling, follow-ups and conversions.',
      'Coordinated between customers, sales teams and internal departments.',
      'Maintained backend systems, data records and operational workflows for USA clients.',
      'Focused on quick turnaround time (TAT), customer satisfaction and reducing repeat issues.',
    ],
  },
  {
    company: 'Virtual Experts LLP',
    role: 'Business Support Executive',
    place: 'India',
    period: 'May 2024 – October 2025',
    points: [
      'Managed schedules and calendars for the CEO and senior executives.',
      'Coordinated meetings and conferences with internal and external stakeholders.',
      'Prepared and distributed meeting agendas, minutes and supporting materials.',
      'Handled confidential information and documents with discretion and organization.',
    ],
  },
  {
    company: 'Teleperformance',
    role: 'Customer Care Executive',
    place: 'India',
    period: '2024 · 1 Month',
    points: [
      'Served as a first point of contact through phone, email and chat.',
      'Addressed customer inquiries and provided information and timely resolutions.',
      'Handled complaints and escalated issues when required.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = { from: '#24060b', via: '#7b1428', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#75470b', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

/** Professional work highlights presented in the original portfolio's cinematic project UI. */
export const projects: Project[] = [
  {
    id: 'operations-executive',
    title: 'Operations Executive',
    year: '2025–2026',
    genre: 'CUSTOMER SUPPORT • OPERATIONS',
    logline: 'Customer and backend operations for USA clients, combining L1/L2 support, lifecycle handling, sales coordination and operational follow-through.',
    stack: ['L1 & L2 Support', 'Customer Lifecycle', 'Sales Operations', 'Backend Operations'],
    build: [
      'Managed customer queries, complaints and escalations while maintaining a professional, solution-focused approach.',
      'Supported lead handling, follow-ups and conversions and coordinated between customers, sales teams and internal departments.',
      'Maintained backend records and workflows for USA clients with a focus on turnaround time and customer satisfaction.',
    ],
    features: ['L1 & L2 customer support', 'Customer lifecycle management', 'Lead handling & follow-ups', 'Sales coordination', 'Backend records & workflows', 'TAT and customer satisfaction'],
    metrics: [
      { value: 'L1 + L2', label: 'support coverage' },
      { value: 'End-to-end', label: 'customer lifecycle' },
      { value: 'USA', label: 'client operations' },
      { value: 'Sales', label: 'lead & follow-up support' },
      { value: 'TAT', label: 'turnaround focus' },
    ],
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'business-support',
    title: 'Business Support',
    year: '2024–2025',
    genre: 'EXECUTIVE SUPPORT • ADMINISTRATION',
    logline: 'Executive support built around calendars, meetings, documentation and confidential information handling.',
    stack: ['Calendar Management', 'Meeting Coordination', 'Documentation', 'Confidential Data'],
    build: [
      'Managed schedules and calendars for the CEO and senior executives, helping keep priorities and meetings organized.',
      'Coordinated internal and external meetings and conferences and prepared agendas, minutes and supporting materials.',
      'Handled confidential documents with discretion and maintained organized records.',
    ],
    features: ['CEO & executive calendar management', 'Meeting scheduling', 'Agenda & minutes preparation', 'Stakeholder coordination', 'Confidential document handling'],
    metrics: [
      { value: 'CEO', label: 'executive support' },
      { value: 'Meetings', label: 'internal & external coordination' },
      { value: 'Docs', label: 'agenda & minutes support' },
      { value: 'Confidential', label: 'information handling' },
    ],
    palette: amber,
    motif: 'flow',
  },
  {
    id: 'customer-care',
    title: 'Customer Care',
    year: '2024',
    genre: 'CUSTOMER EXPERIENCE • COMMUNICATION',
    logline: 'Multi-channel customer care through phone, email and chat, with a focus on fast and practical issue resolution.',
    stack: ['Phone', 'Email', 'Chat', 'Complaint Resolution'],
    build: [
      'Served as a first point of contact for customers and responded to inquiries through multiple communication channels.',
      'Provided clear information, practical solutions and timely issue resolution.',
      'Handled complaints calmly and escalated cases when additional support was required.',
    ],
    features: ['Phone support', 'Email support', 'Chat support', 'Complaint handling', 'Issue escalation', 'Customer-focused communication'],
    metrics: [
      { value: '3', label: 'support channels' },
      { value: 'Customer', label: 'first-point support' },
      { value: 'Fast', label: 'issue resolution focus' },
      { value: 'Calm', label: 'complaint handling' },
    ],
    palette: ocean,
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'support',
    title: 'L1 & L2 Support',
    org: 'Braintree Products USA',
    detail: 'Managed customer queries, complaints and escalations while supporting the customer lifecycle.',
    laurel: 'OPERATIONS',
  },
  {
    id: 'sales',
    title: 'Sales Support',
    org: 'Braintree Products USA',
    detail: 'Supported lead handling, follow-ups and conversions while coordinating with sales and internal teams.',
    laurel: 'SALES OPERATIONS',
  },
  {
    id: 'executive',
    title: 'Executive Support',
    org: 'Virtual Experts LLP',
    detail: 'Supported the CEO and senior executives through calendar, meeting and documentation management.',
    laurel: 'BUSINESS SUPPORT',
  },
  {
    id: 'multichannel',
    title: 'Multi-Channel Care',
    org: 'Teleperformance',
    detail: 'Handled customer communication through phone, email and chat and escalated issues when required.',
    laurel: 'CUSTOMER CARE',
  },
  {
    id: 'strengths',
    title: 'Core Strengths',
    org: 'Professional Profile',
    detail: 'Communication, empathy, active listening, problem-solving, time management, conflict resolution and adaptability.',
    laurel: 'KEY SKILLS',
  },
];

export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'customer-support',
    title: 'Customer Support',
    subtitle: 'Customer-facing service & issue resolution',
    skills: [
      { name: 'Customer Support', mono: 'CS', note: 'Core' },
      { name: 'L1 & L2 Support', mono: 'L2' },
      { name: 'Complaint Resolution', mono: 'CR' },
      { name: 'Issue Escalation', mono: 'ES' },
      { name: 'Customer Lifecycle', mono: 'CL' },
    ],
  },
  {
    id: 'communication',
    title: 'Communication',
    subtitle: 'Clear, empathetic and professional interaction',
    skills: [
      { name: 'Written Communication', mono: 'WR' },
      { name: 'Verbal Communication', mono: 'VR' },
      { name: 'Active Listening', mono: 'AL' },
      { name: 'Empathy & Patience', mono: 'EP' },
    ],
  },
  {
    id: 'operations',
    title: 'Operations',
    subtitle: 'Keeping workflows accurate and moving',
    skills: [
      { name: 'Backend Operations', mono: 'BO' },
      { name: 'Data Records', mono: 'DR' },
      { name: 'Time Management', mono: 'TM' },
      { name: 'Turnaround Time', mono: 'TT' },
      { name: 'Attention to Detail', mono: 'AD' },
    ],
  },
  {
    id: 'business-support',
    title: 'Business Support',
    subtitle: 'Executive and administrative coordination',
    skills: [
      { name: 'Calendar Management', mono: 'CM' },
      { name: 'Meeting Coordination', mono: 'MC' },
      { name: 'Agendas & Minutes', mono: 'AM' },
      { name: 'Confidential Documents', mono: 'CD' },
    ],
  },
  {
    id: 'sales-support',
    title: 'Sales Support',
    subtitle: 'Supporting leads and customer conversion workflows',
    skills: [
      { name: 'Lead Handling', mono: 'LH' },
      { name: 'Follow-Ups', mono: 'FU' },
      { name: 'Conversions', mono: 'CV' },
      { name: 'Team Coordination', mono: 'TC' },
    ],
  },
  {
    id: 'professional',
    title: 'Professional Strengths',
    subtitle: 'How I approach customer and business needs',
    skills: [
      { name: 'Problem-Solving', mono: 'PS' },
      { name: 'Conflict Resolution', mono: 'CR' },
      { name: 'Adaptability', mono: 'AD' },
      { name: 'High-Pressure Handling', mono: 'HP' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2021',
    synopsis: 'Completed 12th through BBOSE.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'BBOSE — 12th, completed in 2021.',
        tags: ['BBOSE', '12th'],
        runtime: '2021',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Computer Science Journey',
    period: '2022',
    synopsis: 'Started a Bachelor of Technology in Computer Science & Engineering at SAGE University, Indore; course later discontinued.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Next Step',
        description: 'B.Tech in Computer Science & Engineering at SAGE University, Indore — 2022, later dropped.',
        tags: ['B.Tech', 'CSE', 'SAGE University'],
        runtime: '2022',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Customer Care',
    period: '2024',
    synopsis: 'Entered customer-facing support through Teleperformance.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The First Contact',
        description: 'Customer Care Executive at Teleperformance, supporting customers through phone, email and chat.',
        tags: ['Phone', 'Email', 'Chat'],
        runtime: '2024 · 1 Month',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Business Support',
    period: '2024 – 2025',
    synopsis: 'Moved into executive and business support at Virtual Experts LLP.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Coordinator',
        description: 'Managed executive calendars, meetings, agendas, minutes and confidential information.',
        tags: ['Executive Support', 'Meetings', 'Documentation'],
        runtime: 'May 2024 – Oct 2025',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: 'Operations',
    period: '2025 – 2026',
    synopsis: 'Expanded into L1/L2 support, customer lifecycle, sales operations and backend workflows for USA clients.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Operations Executive',
        description: 'Operations Executive at Braintree Products USA with customer, sales and backend responsibilities.',
        tags: ['L1 & L2', 'Sales Support', 'USA Clients'],
        runtime: 'Dec 2025 – May 2026',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Latest role', title: 'Operations', detail: 'Braintree Products USA · Dec 2025 – May 2026', palette: crimson },
  { label: 'Support level', title: 'L1 + L2', detail: 'Queries, complaints and escalations', palette: ocean },
  { label: 'Customer flow', title: 'End-to-End', detail: 'From inquiry through issue resolution', palette: amber },
  { label: 'Sales support', title: 'Lead Follow-Ups', detail: 'Lead handling, follow-ups and conversions', palette: jade },
  { label: 'Business support', title: 'Executive', detail: 'CEO and senior executive support', palette: violet },
  { label: 'Communication', title: '3 Channels', detail: 'Phone · Email · Chat', palette: ocean },
  { label: 'Operations', title: 'Backend', detail: 'Data records and operational workflows', palette: crimson },
  { label: 'Customer care', title: 'Resolution', detail: 'Practical solutions and escalation handling', palette: amber },
  { label: 'Strength', title: 'Problem-Solving', detail: 'Calm, practical and customer-focused', palette: jade },
  { label: 'Based in', title: 'Indore', detail: 'India', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Profile',
    title: 'Customer Support + Operations',
    lines: ['Customer Care and Operations professional', 'Focused on communication, issue resolution and dependable execution.'],
    chips: ['Customer Support', 'Operations', 'Business Support'],
  },
  {
    kicker: 'Latest role',
    title: 'Operations Executive',
    lines: ['Braintree Products USA · December 2025 – May 2026', 'L1/L2 support · customer lifecycle · sales operations · backend workflows'],
    chips: ['L1 & L2', 'Sales Support', 'USA Clients'],
  },
  {
    kicker: 'Business support',
    title: 'Executive Support',
    lines: ['Virtual Experts LLP · May 2024 – October 2025', 'CEO calendars · meetings · agendas · minutes · confidential documents'],
    chips: ['Calendar', 'Meetings', 'Documentation'],
  },
  {
    kicker: 'Customer care',
    title: 'Multi-Channel Support',
    lines: ['Teleperformance · 2024', 'Customer communication through phone, email and chat.'],
    chips: ['Phone', 'Email', 'Chat'],
  },
  {
    kicker: 'Strengths',
    title: 'People + Process',
    lines: ['Communication · Empathy · Active Listening', 'Problem-Solving · Time Management · Conflict Resolution · Adaptability'],
  },
  {
    kicker: 'Education',
    title: '12th · BBOSE',
    lines: ['Completed in 2021', 'B.Tech CSE at SAGE University, Indore was started in 2022 and later discontinued.'],
  },
  {
    kicker: 'Contact',
    title: 'Let’s Connect',
    lines: ['6260917206', 'utkarsh.chat404@gmail.com', 'Indore, India'],
  },
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Utkarsh',
    blurb: 'The complete professional story',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Experience, skills & resume first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Operations',
    blurb: 'Customer support & workflows first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Explorer',
    blurb: 'Career story & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Profile • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Chapters • Career & education`, palette: amber },
  originals: { nav: 'Experience', card: 'Work Highlights', meta: `${projects.length} Professional Highlights`, palette: crimson },
  picks: { nav: 'Highlights', card: 'Top Highlights', meta: 'Selected resume highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Strengths', card: 'Professional Strengths', meta: `${achievements.length} Highlights`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
