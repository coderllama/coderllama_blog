import PostType from "../types/post"
import Link from 'next/link'
import styles from './post-excerpt-card.module.css'
type Props = {
    post: PostType
}

const racco_bois = 'https://i.pinimg.com/originals/be/21/05/be2105b2d9f6fab212787a4a36a77cb8.jpg'

const PostExcerptCard = ({ post }: Props) => {

    const { title, coverImage, author } = post

    return (
        <Link href={`/blog/posts/${post.slug}`}>
            <div className={styles.main}>
                <div className={styles.imgContainer}>
                    <img src={coverImage || racco_bois} />
                </div>
                <h2 className={styles.titleContainer}>
                    {title}
                </h2>

                <div className={styles.postDescription}>
                    <p>
                        This post does not have a description summary at the moment
                    </p>
                </div>

                <h3 className={styles.authorText}>
                    by: {"Anupama Codippily"}
                </h3>

                <p className="excerpt">

                </p>
            </div>
        </Link>
    )
}

export default PostExcerptCard