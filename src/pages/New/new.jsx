import './new.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { useState } from 'react';





function New({input, title }) {
  const [file, setFile] = useState('');


  // console.log(file)
  return (
    <div className='new'>
      <Sidebar/>
    <div className="newContainer">
    <Navbar/>
    <div className="top">
      <h1>{title}</h1>
    </div>
    <div className="bottom">
      <div className="left">
        <img src={
          file ? URL.createObjectURL(file) : "https://us.123rf.com/450wm/mathier/mathier1905/mathier190500002/134557216-no-thumbnail-image-placeholder-for-forums-blogs-and-websites.jpg?ver=6"
        }/>
       </div>
      <div className="right">
        <form>
        <div className="formInput">
          <input style={{display:'none'}} id='file' type="file" 
           onChange={(e) => setFile(e.target.files[0])}
          />
                <label htmlFor='file'>
                <span>Upload Image</span>
                <AddToPhotosIcon className='icon'/>
                </label>
          </div>
          <>        
          { input.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
            </>
          
          <button>Send</button>
        </form>
      </div>
    </div>
    </div>
    </div>
  )
}

export default New