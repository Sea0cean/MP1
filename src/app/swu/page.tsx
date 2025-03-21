import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { SWUEats } from '@/components/home/SWUEats'

export default function SWUPage() {
  return (
    <SimpleLayout
      title="What About SWU"
      intro="Explore the deliciousness around SWU, see what I recommend!"
    >
      <SWUEats />
    </SimpleLayout>
  )
}
