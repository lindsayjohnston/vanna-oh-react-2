import lindsay from './blue_lindsay.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>VANNA OH!'S NEAT WEBSITE</h1>
        <img src={lindsay} className="App-logo" alt="logo" />
        <p>
          We are working on making this website real goddamn cool. 
        </p>
        <ul>
          <li><a href="https://vannaoh.bandcamp.com/merch">MERCH</a></li>
          <li><a href="https://www.youtube.com/watch?v=Hphz0jDpxGU">WATCH</a></li>
          <li><a href="https://open.spotify.com/artist/6hAuQeCv7JIhulgsOHWd3I?si=zYsuG-QSQbSxtjt7fdhDwg">LISTEN</a></li>
        </ul>
       
      </header>
    </div>
  );
}

export default App;
