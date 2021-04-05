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
       {/* <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-coy.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-funky.css"
          as="script"
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-${'okaidia'}.css`}
          rel="stylesheet"
        /> */}
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
