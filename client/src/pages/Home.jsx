import {
  Announcement,
  Categories,
  Footer,
  Navbar,
  Newsletter,
  Products,
  Slider,
} from '../components'

export default function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  )
}