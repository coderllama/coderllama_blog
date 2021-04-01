import CoverImage from './cover-image'
import Author from '../types/author'
// import style from '../styles/courseHeader.module.css'

type Props = {
    title: string,
    coverImage: string,
    author: Author
}

const CourseHeader = ({ title, coverImage, author }: Props) => {
    return (
        <div className='courseDetailsTop'> 
            <h4 className='courseDetailsCourseAuthor'>
                <div className="authorImgThumbnailHolder">
                    <img src={author.picture} className="imgThumbnail"></img>
                </div>
                    Authored by: {author.name}
            </h4>
            <h1 className='courseName'>
                {title}
            </h1>
            <div className="courseDetailsPurchaseCourse">
                <h2 className='courseDetailsCoursePrice'>
                    {/* $ {coursePrice} */}
                </h2>
                <button className='buyButton'>
                    BUY Course
                    </button>
            </div>
        </div>
    )
}

export default CourseHeader