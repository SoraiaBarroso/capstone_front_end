import './Main.css'
import dish from '../assets/restauranfood.jpg';

function Main(){
    return (
        <>
            <main>
                <div className="left-section">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>
                        Lorem Ipsum es simplemente el texto de relleno de las  imprentas y archivos de texto.
                        Lorem Ipsum ha sido el texto de relleno  estándar de las industrias desde el año 1500,
                        texto de relleno  estándar de las industrias desde el año 1500.
                    </p>
                    <button>Reserve a table</button>
                </div>
                <div className="right-section">
                    <img className="dish-main" src={dish} alt="main"/>
                </div>
            </main>
        </>
    );
}

export default Main;