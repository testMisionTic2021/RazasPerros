import CardRazasPerros from 'components/CardRazasPerros';
import logo from 'media/logo2.png';
import 'styles/App.css';
import borderCollie from 'media/bodercollie.jpg'
import bulldog from 'media/bulldogsIngles.jpg'
import husky from 'media/husky.jpg'
import rhodesian from 'media/rhodesian.jpg'
import rottweiler from 'media/rottweiler.jpg'

function App() {
  return (
    <div className="App">
          <header>
        <ul className="navbar">
            <li>
                <img className="logo" src= {logo} alt="logo pagina"/>
            </li>
            
            <li>
                <button className="button mainButton">Nuevo Post</button>
            </li>
            
            <li>
                <div className="buscar" >
                    <input placeholder="buscar una raza" type="text"/>
                    <i className="fas fa-search button iconoBusqueda" ></i>
                </div>
            </li>
            
            <li>
                <button className="button mainButton">Nuevo Post</button>
            </li>
            
            <li>
                <button className="button secondaryButton">Login</button>
            </li>
            <li>
                <button className="button mainButton">Registro</button>
            </li>
        </ul>
    </header>
      
    <main>
        <section>
            <h1 className="centrado">Razas de Perros</h1>
            <ul className="breedCardContainer">
                <CardRazasPerros nombreRaza='BorderCollie' imagen={borderCollie} />
                <CardRazasPerros nombreRaza='Husky' imagen={husky} />
                <CardRazasPerros nombreRaza='Rhodesian' imagen={rhodesian} />
                
                
               
                
            </ul>
        </section>
        <section></section>
    </main>
    <footer>

    </footer>
    </div>
  );
}




export default App;
