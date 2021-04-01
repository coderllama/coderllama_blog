import PostType from "../types/post"
import Link from 'next/link'

type Props = {
    post : PostType
}

const PostExcerptCard = ({post}: Props  ) => {

    const {title, coverImage, author} = post

    return (
        <div>
            <h2>
                <Link href={`/blog/posts/${post.slug}`}>
                { title }
                </Link>
            </h2>
            <img src={ coverImage } />
            <h3>
                by: { author }
            </h3>

            <p className="excerpt">

            </p>
        </div>
    )
}

export default PostExcerptCard