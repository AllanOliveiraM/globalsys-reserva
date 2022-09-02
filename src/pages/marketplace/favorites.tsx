import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Favorites = dynamic(() => import('views/Favorites'), {
  ssr: false,
})

const SuspenseWrapper = () => (
  <Suspense fallback={null}>
    <Favorites />
  </Suspense>
)

export default SuspenseWrapper
