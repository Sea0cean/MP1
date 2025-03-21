export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'SeaOcean'
export const headline = '你且听这风浪，永远二十赶朝暮'
export const introduction = [
  "Coucou Les Amis! My name is SeaOcean.",
  "I'm from Anhui and an alumnus of Southwest University.",
  "I am now looking forward to my postgraduate life."
]
export const email = 'seaoceanovo@gmail.com'
export const githubUsername = 'Sea0cean'

// about page
export const aboutMeHeadline = 'About Me'
export const aboutParagraphs = [
  "Coucou Les Amis! My name is SeaOcean. I'm from Anhui and an alumnus of Southwest University. I am now looking forward to my postgraduate life.",
  'Currently I am preparing for my postgraduate, hope for getting a satisfactory result',
  "I started this blog to share the insights I learn every day. Most blogs focus on education in daily life, like artificial intelligence, general computer science, simple algorithm learning and network security, while others share the life I was in Southwest University.",
]

// blog
export const blogHeadLine = "What I've learning about."
export const blogIntro =
  "Here is a record of my study, which mainly includes artificial intelligence, general computer science, simple algorithm learning and network security (mainly about CTF)."

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
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/Sea0cean',
  },
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/SeaOceanOvO',
  },
  {
    name: 'Xiaohongshu',
    icon: 'xiaohongshu',
    href: 'https://www.xiaohongshu.com/user/profile/62d4593d000000000303c5c1',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'java',
  'python',
  'mysql',
  'nodedotjs',
  'nginx',
  'docker',
  'git',
  'github',
  'ios',
  'apple',
  'wechat',
  'apachetomcat',
  'linux',
  'vue',
  'css3',
  'html5',
  'markdown',
]
