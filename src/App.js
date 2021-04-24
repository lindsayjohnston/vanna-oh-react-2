import lindsay from './blue_lindsay.png';
//import './App.css';
import {Component} from 'react';
import styles from './App.module.css';

class App extends Component {

  state={
    hidden: true
  };

  menuStyle= styles.Hidden;

  clickHandler=()=>{
    this.setState({hidden: !this.state.hidden})
  }

  render () {
    if(!this.state.hidden){
        this.menuStyle=styles.Shown;
    } else{
      this.menuStyle=styles.Hidden;
    }

    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
        <h1>VANNA OH!'S NEAT WEBSITE</h1>
          <img src={lindsay} className={styles.AppLogo} alt="logo" />
          <p>
            We are working on making this website real goddamn cool. 
          </p>
          <ul>
            <li><a target="_blank" href="https://vannaoh.bandcamp.com/merch" rel="noreferrer" >MERCH</a></li>
            <li><a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=Hphz0jDpxGU">WATCH</a></li>
            <li><a rel="noreferrer" target="_blank" href="https://open.spotify.com/artist/6hAuQeCv7JIhulgsOHWd3I?si=zYsuG-QSQbSxtjt7fdhDwg">LISTEN</a></li>
            <li><a rel="noreferrer"  target="_blank" href="https://lindsayjohnston.github.io/vo-robot-interface1/">AI INTERFACE</a></li>
            <li onClick={this.clickHandler}
            className={styles.Clickable}>TIPS</li>
            <div className={this.menuStyle} >
              <ul className={styles.Menu}>
                <li><a rel="noreferrer"  href='https://venmo.com/code?user_id=1619857669881856848' target= "_blank">VENMO (@VANNAOH)</a></li>
                <li><a rel="noreferrer" href='https://paypal.me/vannaoh?locale.x=en_US' target= "_blank">PAYPAL</a></li>
                <li><a rel="noreferrer" href='https://cash.app/vannaoh' target= "_blank">CASHAPP</a></li>
              </ul>
            </div>
          </ul>
         
        </header>
      </div>
    );


  }
  
}

export default App;
