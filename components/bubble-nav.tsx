import styles from './bubble-nav.module.css'
import Link from 'next/link'
type Props = {
}

type BubbleNavItemProps = {
    title: string
    alt?: string
    link: string
}

const BubbleNavItem = ({ title, alt, link }: BubbleNavItemProps) => {
    return (
        <Link href={link}>
            <a  className={styles.item}>
            {title}
            </a>
        </Link>
    )
}

const BubbleNav = ({ }: Props) => {

    const bubbleNavItems = [
        {
            title: 'Blog 🦙',
            alt: 'Blog',
            link: '/blog',
            hoverList : [
                {
                    title : "Learn How to Pre-render Pages Using Static Generation with Next.js",
                    coverImage: "/assets/blog/hello-world/cover.jpg"
                },
                {
                    title : "Learn How to Pre-render Pages Using Static Generation with Next.js",
                    coverImage: "/assets/blog/hello-world/cover.jpg"
                },
                {
                    title : "Learn How to Pre-render Pages Using Static Generation with Next.js",
                    coverImage: "/assets/blog/hello-world/cover.jpg"
                }
            ]

        },
        {
            title: 'Videos 📽',
            link: '/youtube'
        },
        {
            title: 'Contact ✉',
            link: '/contact',
        },
        {
            title: 'Tutorials 🎓',
            link: '/tutorials',
        },
    ]

    var i = 0
    return (
        <div className={styles.main}>
            {
                bubbleNavItems.map(navItem => <BubbleNavItem link={navItem.link} key={i++} title={navItem.title} />)
            }
        </div>
    )
}

export default BubbleNav