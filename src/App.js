import './App.css';
import './noway.png'
import video from './wave.mp4'
import pic from './pictures/bek2022.png'






function App() {

  return (
    <div className="App">
      <div className="navBar">
        <a id="imgButton" href="#introduction"> </a>
        <div id="links">
          <a className="linkClick" href="#introduction"> Welcome</a>
          <a className="linkClick" href="#aboutMe">About Me</a>
          <a className="linkClick" href="#Projects">Projects</a>
          <a className="linkClick" href="#Testers">Testers</a>
          <a className="linkClick" href="#ContactMe">Contact Me</a>
        </div>
      </div>
      <div className="webpage">
        <div id="introduction" className="introduction">
          <div className='videoBack'>
            <video id="vid" onContextMenu={false} controls={false} src={video} autoPlay muted loop>
            </video>
          </div>
          <h1 id="introText">
            <a id="wel" className="linkClick" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Explore</a>
          </h1>
        </div>
        <div id="aboutMe" className="aboutMe">
          <div className="meBackground">
            <div id="aboutMeBio">
              <h1>
                Welcome
              </h1>
            </div>
          </div>
        </div>
        <div id="Projects" className="Projects">
          <div className="projectTab">
            <h1>My Projects : </h1>
            <div className="clicStuff"></div>
            <a id="clic" className="linkClick" href='https://endinhundred.netlify.app/'>100 GAME</a>
            <a id="clic" className="linkClick" href='https://bek2022.netlify.app/'> Correct Sequence Game</a>
            <a id="clic" className="linkClick" href='https://asilbec.github.io/weatherWebsite/'> Space-X luanch</a>

          </div>
        </div>
        <div id="Testers" className="Testers"> Testers</div>
        <div id="ContactMe" className="ContactMe"> ContactMe</div>
      </div>



    </div>
  );
}

export default App;
