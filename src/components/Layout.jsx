import { Announcement } from '.'

export default function Layout({ children }) {
  return (
    <>
      <Announcement />
      {children}
    </>
  )
}