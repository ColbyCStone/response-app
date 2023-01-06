import React, {useState, useEffect} from 'react'
import './App.css'




function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get').then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(data => console.log(data))
  },[])


  const handleDownload = () => {
    const fileBlob = new Blob(['Hello, world!'], {type: 'text/plain'});

    // Create a link element that will be used to trigger the download
    const downloadLink = document.createElement('a');

    // Set the link's href to the URL of the file blob
    downloadLink.href = URL.createObjectURL(fileBlob);

    // Set the link's download attribute to the file name you want
    downloadLink.download = 'hello-world.txt';

    // Append the link to the DOM
    document.body.appendChild(downloadLink);

    // Click the link to trigger the download
    downloadLink.click();

    // Remove the link from the DOM
    document.body.removeChild(downloadLink);
  }

  return (
    
    <div className="App"
    style={{
      backgroundColor: 'red'
    }}>
      <h1
      //style={{
      //  backgroundColor: 'brown',
      //  padding: "100px",
      //  fontFamily: "wingding",
      //  fontSize: 20
      //}}
      >Download Games</h1>     
      <button type = 'submit' onClick={handleDownload}>Game1</button>
      <button type = 'submit' onClick={handleDownload}>Game2</button>
      <button type = 'submit' onClick={handleDownload}>Game3</button>
      <button type = 'submit' onClick={handleDownload}>Game4</button>
      <button type = 'submit' onClick={handleDownload}>Game5</button>
      <button type = 'submit' onClick={handleDownload}>Game6</button>
      <button type = 'submit' onClick={handleDownload}>Game7</button>
      <button type = 'submit' onClick={handleDownload}>Game8</button>
    </div>
  )
}
export default App

// <div className="App">
  //   <h1>Download games</h1>
  //   <button type = 'submit' onClick={handleDownload}>Download File</button>
  // </div>