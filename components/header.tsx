import Link from 'next/link'
import styles from './header.module.css'
import BubbleNav from './bubble-nav'

const Header = () => {
  return (
    <div className={ styles.main }>
      <h1>
        {"{ CODERLLAMA }"}
      </h1>
      <BubbleNav/>

    </div>
  )
}

export default Header
