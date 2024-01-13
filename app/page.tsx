import Dev from '@/components/Dev'
import Distribution from '@/components/Distribution'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import LegacyVision from '@/components/LegacyVision'
import Mission from '@/components/Mission'
import Symbol from '@/components/Symbol'
import Tokenomics from '@/components/Tokenomics'

export default function Home() {
  return (
    <div className='globalFont'>
      <Hero/>
      <Symbol/>
      <LegacyVision/>
      <Mission/>
      <Tokenomics/>
      <Distribution/>
      <Dev/>
      <Footer/>
    </div>
  )
}
