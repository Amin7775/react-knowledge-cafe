import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    // const {title} = bookmarks([]);
    
    return (
        <div className="w-1/3 bg-gray-300 ml-4">
            <h3 className='text-3xl text-center mt-2 ml-4 p-2'>Bookmarks {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks: PropTypes.array
}
export default Bookmarks;