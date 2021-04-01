import PostType from "../types/post";
import PostExcerptCard from "./post-excerpt-card";


function RecentPosts({ posts }: { posts: PostType[] }) {

    let postExcerptCardKey = 1

    return (
        <>
            <h2>
                Recent Posts
            </h2>
            <div>
                {
                    posts.map((post: PostType) => {
                        return (
                            <PostExcerptCard key={ postExcerptCardKey++ } post={post} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default RecentPosts