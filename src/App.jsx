import project1 from "/public/static/images/myowntwitterimage.png"
import './App.css'
function App() {
  return (
    <div className="App">
      <p className="myname">GIANLUCA LARRAYA</p>
      <div className='trabajostitulo'>My work</div>
      <div className='line'></div>
      <div className='trabajos'>
      <div className="card-glass">
        <img src={project1}></img>
         <p className="cardtitle">My own Twitter</p>
         <p className="cardtext">Application that tries to imitate Twitter Web App. You can tweet, retweet and like tweets and follow and unfollow people. </p>
      </div>
      <div className="card-glass">Proyect</div>
      <div className="card-glass">Proyect</div>
      <div className="card-glass">Proyect</div>
      </div>
    </div>
  )
}

export default App
