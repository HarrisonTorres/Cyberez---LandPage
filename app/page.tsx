import styles from './page.module.css'

//components
import Header from './src/sections/header/header'
import Hero from './src/sections/hero/hero'
import Feature_About from './src/sections/feature-about/feature_about'
import Our_Services from './src/sections/feature-our-services/our_services'
import Characteristic from './src/sections/feature-characteristic/characteristic'
import Goal from './src/sections/feature-goal/goal'
import Plans from './src/sections/feature-plans/plans'
import Testimony from './src/sections/feature-testimony/testimony'
import Footer from './src/sections/footer/footer'


export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Feature_About />
      <Our_Services />
      <Characteristic />
      <Goal />
      <Plans />
      <Testimony />
      <Footer />
    </main>
  )
}
