import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    // const {title} = bookmarks([]);
    
    return (
        <div className="w-1/3 bg-gray-300 ml-4">
            <div>
                <h3 className='text-4xl'> Reading Time : {readingTime}</h3>
                {
                    console.log(readingTime)
                }
            </div>
            <h3 className='text-3xl text-center mt-2 ml-4 p-2'>Bookmarks {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;