import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  
  const [bookmarks, setBookmarks]=useState([]);

  const handleAddToBookmarks = (blog) =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }


  const [readingTime,setReadingTime]=useState(0);

  const handleMarkAsRead= (id,time) => {
    const convertTime = parseInt(time);
    const newReadingTime = readingTime+convertTime;
    setReadingTime(newReadingTime);

    // remove bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id!==id)
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <div className='max-w-7xl mx-auto'>
      <Header></Header>
       <div className='md:flex'>
       <Blogs 
       handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}
       ></Blogs>
       <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
       </div>
      </div>
    </>
  )
}

export default App
