
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Southwest University',
      major: 'Software Engineering',
      logo: 'college',
      start: '2022',
      end: '2026'
    },
  ]