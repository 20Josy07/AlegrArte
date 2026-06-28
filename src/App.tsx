import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { About } from './components/About'
import { Values } from './components/Values'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { PackageCards } from './components/PackageCards'
import { Quality } from './components/Quality'
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
        <About />
        <Values />
        <Services />
        <Process />
        <PackageCards />
        <Quality />
        <Testimonials />
        <Gallery />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
