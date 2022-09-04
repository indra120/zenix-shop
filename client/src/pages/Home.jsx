import {
  Announcement,
  Categories,
  Navbar,
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
    </>
  )
}