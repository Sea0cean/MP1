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
    name: 'National College Students Mathematical Contest',
    description: 'Get first prize in the fourteenth National College Students Mathematical Contest.',
    date: '2023-03',
    location: 'Beibei , Chongqing',
  },
  {
    name: 'Chongqing College Students Information Security Contest',
    description: 'Get provincial second prize in the Chongqing College Students Information Security Contest.',
    date: '2023-11',
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
    date: '2024-06',
    location: 'Yubei , Chongqing',
  },
  {
    name: 'Information Security and Countermeasures Contest',
    description: 'Get national second prize in the Information Security and Countermeasures Contest.',
    date: '2024-07',
    location: 'Haidian, Beijing',
  },
  {
    name: 'National College Students Mathematical Contest in Modeling',
    description: 'Get provincial second prize in the National College Students Mathematical Contest in Modeling.',
    date: '2024-09',
    location: 'Beibei, Chongqing',
  },
  {
    name: 'Outstanding student leader of Southwest University',
    description: 'Get the Outstanding Student Leader of Southwest University in 2023-2024 academic year.',
    date: '2024-12',
    location: 'Beibei, Chongqing',
  },
]

// Research & Projects
export const projectHeadLine = "Research & Projects"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'Identification System',
    description: 'A flower Identification System based on PyTorch of Wechat mini program',
    link: { href: 'https://github.com/Sea0cean/Pytorch', label: 'GitHub Cards' },
    tags: ['Pytorch', 'Python', 'Wechat']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Volunteer Activity',
    description:
      'Planned and organized hematopoietic stem cell collection and storage activities of Southwest University.',
    date: '2023-04-16',
    location: 'Chongqing',
    link: 'https://baijiahao.baidu.com/s?id=1763975177828890583&wfr=spider&for=pc',
  },
]
