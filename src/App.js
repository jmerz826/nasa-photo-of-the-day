import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/header.js";
import { API_KEY } from './constants/index.js';
import PhotoDetails from "./components/photoDetails";
import Footer from "./components/footer";
import DateSelector from "./components/dateSelector";
import styled from "styled-components";

const ContentContainer = styled.div`
  padding-top:1%;

  h2{
    margin-top: 0;
  }

  img{
    height:50vh;
    border: 5px solid black;  
  }
`

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [imageTitle, setImageTitle] = useState('');
  const [API_ENDPOINT, setAPI_ENDPOINT] = useState('');
  const [photoDate, setPhotoDate] = useState('');
  const [explanation, setExplanation] = useState('');
  const [copyright, setCopyright] = useState('');

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}${API_ENDPOINT}`)
      .then(res => {
        console.log(res.data);
        if (res.data.media_type !== 'image') {
          alert('Sorry, today\'s image is not a photo, please choose a different date.');
        }
        setImageUrl(res.data.url);
        setImageTitle(res.data.title);
        setPhotoDate(res.data.date);
        setExplanation(res.data.explanation);
        setCopyright(res.data.copyright);
      })
      .catch(err => console.error(err))
  }, [API_ENDPOINT])


  
  
  return(
    <div className="App">
      <Header date={ photoDate}/>
      <ContentContainer>
        <h2>{imageTitle}</h2>
        <img src={imageUrl} alt={imageTitle} />
        <PhotoDetails caption={explanation} />
        <DateSelector setPhotoDate={setPhotoDate} setAPI_ENDPOINT={setAPI_ENDPOINT} photoDate={photoDate} API_ENDPOINT={API_ENDPOINT}/>
      </ContentContainer>
      <Footer copyright={copyright} />
    </div>
  );
}

export default App;
