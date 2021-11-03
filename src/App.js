import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/header.js";
import { API_KEY } from './constants/index.js'

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [imageTitle, setImageTitle] = useState('');
  const [API_ENDPOINT, setAPI_ENDPOINT] = useState('');
  const [photoDate, setPhotoDate] = useState('');

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}${API_ENDPOINT}`)
      .then(res => {
        console.log(res.data);
        setImageUrl(res.data.url);
        setImageTitle(res.data.title);
        setPhotoDate(res.data.date);
      })
      .catch(err => console.error(err))
  })
  
  
  return(
    <div className="App">
      <Header date={ photoDate}/>
      <div className="content-container">
        <h2>{imageTitle}</h2>
        <img src={imageUrl} alt={imageTitle} />
        <div className="date-selector">
          <form action="/action_page.php">
            Month (MM): <input type="text" name="month" />
            Day (DD): <input type="text" name="day" />

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
