export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'SeaOcean'
export const headline = '你且听这风浪，永远二十赶朝暮'
export const introduction =
  "Coucou Les Amis! My name is Derek Hu. I'm from Hubei and an alumnus of BUPT, UChicago, and Tsinghua. I’ve been teaching Computer Science at SCLS since 2020."
export const email = 'seaoceanovo@gmail.com'
export const githubUsername = 'Sea0cean'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Coucou Les Amis! My name is Derek Hu. I'm from Hubei and an alumnus of BUPT, UChicago, and Tsinghua. I’ve been teaching Computer Science at SCLS since 2020.",
  'Currently I am working on a new course called AI Camp, an innovative course where high school students create real-world products and startups while exploring the frontiers of AI.',
  "I started this blog to share the insights I learn every day. Most blogs focus on education in Artificial Intelligence and general computer science, while others share the life lessons I've learned.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.douyin.com/user/MS4wLjABAAAAvOkmk8hdEYnktobGnbquvxfIlsaXxb6Lof2qvOxPuRODGECLen0adABWaMzPl1-B',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/522239138',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
  'apachetomcat',
]
