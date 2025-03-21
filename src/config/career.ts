// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: 'Southwest University Red Cross',
      title: 'Secretary, Minister, President',
      logo: 'coffee',
      start: '2022',
      end: '2025'
    },
  ]