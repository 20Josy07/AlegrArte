import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { PackageCards } from './components/PackageCards'
import { Testimonials } from './components/Testimonials'
import { Gallery } from './components/Gallery'
import { FAQ } from './components/FAQ'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'
import { WaveDivider } from './components/ui/shared'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WaveDivider className="-mt-1" />
        <Marquee />
        <Services />
        <Process />
        <PackageCards />
        <Testimonials />
        <Gallery />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
