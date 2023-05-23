import './App.css';
import aura from './aura_green.png';
import teeth from './teeth_green.png';
import Hlavni from './Hlavni';

function App() {
  return (
    <div className="App">
      <header className="App-header External-container">
        <div className="App-header-container Internal-container ">

          <div className="Logo">
            <img src={aura} className="Logo-aura" alt="aura" />
            <img src={teeth} className="Logo-teeth" alt="teeth" />
          </div>

          <div className="Logo-info">

            <div className="Logo-info-first-row">
              <h2>Dental Estetik</h2>
              <p>s.r.o.</p>
            </div>

            <div className="Logo-info-second-row">
              <h5>725 439 518</h5>
              <h5>dentalestetik.cz</h5>
            </div>
          </div>

        </div>
      </header>

      <main className="App-main External-container">
        <div className="App-main-container Internal-container">

          <div className="Menu-buttons">
            <div className="Menu-button"
              Style="
            Color: black;
            background-color: #def2f1;">
              Hlavni
            </div>

            <div className="Menu-button">
              Adresa
            </div>

            <div className="Menu-button">
              služby
            </div>

            <div className="Menu-button">
              dotaz
            </div>

          </div>

          <div className="Main-part">
            <Hlavni />
          </div>

        </div>
      </main>

      <footer className="App-footer External-container">
        <div className="App-footer-container Internal-container ">

          <div className="">
            <h5>Telefonická objednávka: 725 439 518</h5>
          </div>

        </div>
      </footer>

    </div>
  );
}

export default App;
