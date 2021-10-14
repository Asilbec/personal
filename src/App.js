import './App.css';
import React from 'react'
import space from './pictures/worldj.pg.jpg'
import pic2 from './pictures/endinhundred.jpg'
import pic3 from './pictures/bek2022.png'
import pic4 from './pictures/vsco.jpg'


function App() {
  function back() {
    document.getElementById('a1').style.display = 'flex';
    document.getElementById('a2').style.display = 'none'
    document.getElementById('a3').style.display = 'none'


  }

  function aboutMe() {
    document.getElementById('a1').style.display = 'none';
    document.getElementById('a2').style.display = 'flex'
    document.getElementById('a3').style.display = 'none'
  }

  function project() {
    document.getElementById('a1').style.display = 'none';
    document.getElementById('a2').style.display = 'none'
    document.getElementById('a3').style.display = 'flex'
  }

  return (
    <div className="App">
      <div id="a1" className="entireBackground">
        <div className="welcomeScreen">
          <div className="linkButtons">
            <button id="about" onClick={() => aboutMe()} className="linkz">{'\t'}<mark> About    </mark>    </button>
            <button id="Projects" onClick={() => project()} className="linkz">{'\t'}<mark> Projects </mark>  </button>
            <button id="Contact" className="linkz">{'\t'}<mark> Contact  </mark>  </button>
          </div>
        </div>
      </div>
      <div id="a2" className="entireBackground">
        <div className="welcomeScreen">
          <button id='back' onClick={() => back()} >Back</button>
          <div className="about">
            <h1>About Me</h1>
            <p>Representatives and direct Taxes shall be apportioned among the
              several States which may be included within this Union, according to their
              respective <mark>shall be made, theor a Term of Years, and
                excluding Indians not taxed, three fifths of all other Persons. The actual
                Enumeration shall be made within three Years after the first Meeting of the
                Congress of the United States,</mark> and within every subsequent Term of ten Years,
              <h2>Experince</h2>
              in such Manner as they shall by Law direct. The Number of Representatives shall
              not exceed one for every thirty Thousand, but each State shall have at Least one Representative; and until
              such enumeration shall be made, the State of New Hampshire shall be entitled to chuse three, Massachusetts eight,
              Rhode-Island and Providence <mark>shall be made, the</mark> six, New Jersey four, Pennsylvania eight, Delaware one,
              Maryland <mark>six, Virginia ten, North Carolina five, South Carolina five, and Georgia three.
                Representatives and direct Taxes shall be </mark> apportioned among the
              several States which may be included within this Union, according to their
              respective Numbers, which shall be determined by adding to the whole Number
              <h2>Just More Info</h2>
              of free Persons, including those bound to Service for a Term of Years, and
              excluding Indians not taxed, three fifths of all other Persons. The actual
              Enumeration shall be made<mark> within three Years after </mark>the first Meeting of the
              Congress of the United States, and within every subsequent Term of ten Years,
              in such Manner as they shall by Law direct. The Number of Representatives shall
              not exceed one for every thirty Thousand, but each State shall have at Least one Representative; and until
              such enumeration <mark>shall be made, the</mark> State of New Hampshire shall be entitled to chuse three, Massachusetts eight,
              Rhode-Island and Providence Plantations one, Connecticut five, New-York six, New Jersey four, Pennsylvania eight, Delaware one,
              Maryland six, Virginia ten, North Carolina five, South Carolina five, and Georgia three.
            </p>
            <h1>Testers</h1>
          </div>
        </div>
      </div>
      <div id="a3" className="entireBackground">
        <div id='projectsxx' className="welcomeScreen">

          <button id='back' onClick={() => back()} >Back</button>
          <div className="about">
            <h1>Projects</h1>
            <h2><mark>Space-X Launcher</mark></h2>
            <a href='https://asilbec.github.io/weatherWebsite/'>
              <img alt='' src={space}></img>
            </a>
            <h3>A javascript based website that shows the upcoming laucnhes for space-X</h3>
          </div>

          <div className="about">
            <h2><mark>Houndred Game</mark></h2>
            <a href='https://endinhundred.netlify.app/'>
              <img src={pic2} alt=''></img>
            </a>
            <h3>A fun react-based math game</h3>
          </div>

          <div className="about">
            <h2><mark>Sequence Game</mark></h2>
            <a href='https://bek2022.netlify.app/'>
              <img alt='' src={pic3}></img>
            </a>
            <h3>A react based game in which the user has to correct the right sequence to get the right answer</h3>
          </div>


          <div className="about">
            <h2><mark>Vsco</mark></h2>
            <a href='https://bek2022.netlify.app/'>
              <img alt='' src={pic4}></img>
            </a>
            <h3>Tried to compy Vsco</h3>
          </div>


        </div>
      </div>

    </div >
  );
}

export default App;
