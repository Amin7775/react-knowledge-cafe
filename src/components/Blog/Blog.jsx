import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title,cover,author_img,author,posted_date,reading_time,hashtags}=blog;
    return (
        <div className='my-5'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex my-5 justify-between'>
            <div className='flex items-center gap-4'>
                <img className='h-16 w-16 rounded-full' src={author_img} alt="" />
                <div>
                    <h3>{author}</h3>
                    <h3>{posted_date}</h3>
                </div>
            </div>
            <h3>{reading_time}</h3>
            </div>
            <h3 className='text-2xl'>{title}</h3>
            <p>{
                hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }</p>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;


