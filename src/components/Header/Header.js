import './Header.css';
import aura from '../../data/aura_green.png';
import teeth from '../../data/teeth_green.png';

function Header() {
  return (
    <header className="App-header">
      <div className="App-header-content">

        <div className="Logo">
          <img src={aura} className="Logo-aura" alt="aura-circles" />
          <img src={teeth} className="Logo-teeth" alt="logo-teeth" />
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
  )
};

export default Header;