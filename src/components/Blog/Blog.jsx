import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddToBookmarks,handleMarkAsRead}) => {
    const {title,cover,author_img,author,posted_date,reading_time,hashtags}=blog;
    return (
        <div className='mb-14'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex my-4 justify-between'>
            <div className='flex items-center gap-4'>
                <img className='h-16 w-16 rounded-full' src={author_img} alt="" />
                <div>
                    <h3 className='font-semibold'>{author}</h3>
                    <h3>{posted_date}</h3>
                </div>
            </div>
            <div>
            <span className='font-medium mr-2'>Min Read : {reading_time}</span>
            <button onClick={()=>handleAddToBookmarks(blog)}><FaBookmark className='text-xl text-red-600'></FaBookmark></button>
            </div>
            </div>
            <h3 className='text-3xl font-bold'>{title}</h3>
            <p>{
                hashtags.map((hash, idx) => <span className='mr-2' key={idx}><a href="">{hash}</a></span>)
                }</p>

            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;


