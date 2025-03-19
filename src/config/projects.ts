// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards & Honors
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: 'National College Students Mathematical Competition',
    description: 'Get first prize in the fourteenth National College Students Mathematical Competition.',
    date: '2023-3',
    location: 'Beibei , Chongqing',
  },
  {
    name: 'Chongqing college students Information security competition',
    description: 'Get first prize in the fourteenth National College Students Mathematical competition.',
    date: '2023-3',
    location: 'Beibei , Chongqing',
  },
  {
    name: 'Merit student of Southwest University',
    description: 'Get the Merit student of Southwest University in 2022-2023 academic year.',
    date: '2023-12',
    location: 'Beibei, Chongqing',
  },
  {
    name: 'Outstanding volunteer of Red Cross volunteer service',
    description: 'Get the Outstanding volunteer of Red Cross volunteer service.',
    date: '2024-6',
    location: 'Yubei , Chongqing',
  },
  {
    name: 'Outstanding student leader of Southwest University',
    description: 'Get the Outstanding Student Leader of Southwest University in 2023-2024 academic year.',
    date: '2024-12',
    location: 'Beibei, Chongqing',
  },
  {
    name: 'National College Students Mathematical competition in Modeling',
    description: 'Get provincial second prize in the National College Students Mathematical competition in Modeling.',
    date: '2024-9',
    location: 'Beibei, Chongqing',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'Student Final Project Portfolio',
    description: 'Static website portfolio',
    link: { href: 'scls-cs.com', label: 'GitHub Cards' },
    tags: ['Website', 'Next.js', 'TailwindCSS', 'DaisyUI', 'Portfolio']
  },
  {
    name: 'Seeking DNA',
    description: '2022 SCLS Hackathon',
    link: { href: 'https://scls-cs.gitbook.io/scls-apcs-lab/lab5-dna', label: 'Hackathon' },
    tags: ['Hackathon', 'Java']
  },
  {
    name: 'Texas Holdem Poker Judge',
    description: '2024 SCLS Hackathon',
    link: { href: 'https://onecompiler.com/challenges/42yf4n5yn/scls-hackathon', label: 'Hackathon' },
    tags: ['Hackathon']
  },
  {
    name: 'AI Camp Course Development',
    description: 'Developed a comprehensive AI curriculum for high school students, incorporating real-world projects and startup concepts.',
    link: { href: 'https://scls-cs.gitbook.io/ai-camp', label: 'View Course' },
    tags: ['Education', 'AI']
  },

  {
    name: 'Provincial second prize in the National College Students Mathematical Contest in Modeling',
    description: 'Developed a comprehensive AI curriculum for high school students, incorporating real-world projects and startup concepts.',
    link: { href: 'https://scls-cs.gitbook.io/ai-camp', label: 'View Course' },
    tags: ['Education', 'AI']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Python Workshop',
    description:
      'Teaching basic Python programming concepts to beginners. Covering variables, control flow, and functions.',
    date: '2024-02-24',
    location: 'Shanghai',
    link: 'https://example.com/python-workshop',
  },
  {
    name: 'AI Ethics Discussion',
    description:
      'A group discussion about the ethical implications of AI development and its impact on society.',
    date: '2024-03-01',
    location: 'Shanghai',
    link: 'https://example.com/ai-ethics',
  },
  {
    name: 'Code Review Session',
    description:
      'Helping students improve their coding skills through peer code review and best practices sharing.',
    date: '2024-03-15',
    location: 'Shanghai',
  },
]
