import PostType from "../types/post";
import PostExcerptCard from "./post-excerpt-card";
import styles from './recent-posts.module.css'

function RecentPosts({ posts }: { posts: PostType[] }) {

    let postExcerptCardKey = 1

    return (
        <div className={styles.main}>
            <h2 className={styles.recentPostsHeading}>
                Recent Posts 📰
            </h2>
            {/* <hr></hr> */}
            <div className={styles.recentPostContainer}>
                {
                    posts.map((post: PostType) => {
                        return (
                            <PostExcerptCard key={ postExcerptCardKey++ } post={post} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RecentPosts