import woman from './woman.png';
import './Hlavni.css';

function Hlavni() {
    return (
        <>
            <div className="Slogan">
                <h1>stomatologická péče</h1>
                <h2>Zdraví vašich zubů je naší prioritou</h2>
            </div>

            <div className="Doctor-info">
                <img src={woman} className="Logo-woman" alt="woman" />
                <div className="Doctor-info-name">
                    <h6>{"Zubní ordinace \n v Kuřimi"}</h6>
                    <h3>Anastasiia</h3>
                    <h4>Neuimina</h4>
                    <h5>Lékař stomatolog</h5>
                </div>
            </div>

            <div className="Info">
                <p className="Info-first">Provádíme bezbolestné, komplexní ošetření zubu.</p>
                <p className="Info-second">Dovolujeme Vás informovat, že pohotovost pro naše pacienty
                    jen po předešlé telefonické dohodě.</p>
            </div>
        </>
    )
}

export default Hlavni;