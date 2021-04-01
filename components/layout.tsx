import Footer from './footer'
import Header from './header'
import Meta from './meta'
import style from './layout.module.css'
type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <div className={style.main}>
      <Meta />
      <div className="min-h-screen">
        <Header/>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
