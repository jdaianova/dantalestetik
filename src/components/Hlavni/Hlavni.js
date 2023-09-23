import mainPhoto from '../../data/main-heart.png';
import './Hlavni.css';

function Hlavni() {
    return (
        <div className='Hlavni'>
            <div className="Slogan">
                <h1>stomatologická péče</h1>
                <h2>Zdraví vašich zubů je naší prioritou</h2>
                <h6>{"Zubní ordinace \n v Kuřimi"}</h6>
            </div>

            <div className="Doctor-info">
                <div className="Doctor-info-name">
                    <h3>Anastasiia</h3>
                    <h4>Neuimina</h4>
                    <h5>Lékař stomatolog</h5>
                </div>
                <img src={mainPhoto} className="Main-Photo" alt="doctors hands heart" />
            </div>

            <div className="Info">
                <p className="Info-first">Provádíme bezbolestné, komplexní ošetření zubu.</p>
                <p className="Info-second">Dovolujeme Vás informovat, že pohotovost pro naše pacienty
                    jen po předešlé telefonické dohodě.</p>
            </div>
        </div>
    )
}

export default Hlavni;