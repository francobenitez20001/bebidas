import Header from './components/header';
import Formulario from './components/formulario';
import './bootstrap.min.css';
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
import ListaRecetas from './components/listaRecetas';
import ModalProvider from './context/ModalContext';
import DetalleReceta from './components/detalleReceta';

function App() {
  return (
    <>
      <CategoriasProvider>
        <RecetasProvider>
          <ModalProvider>
            <Header/>
            <div className="container mt-5">
              <div className="row">
                <Formulario/>
              </div>
              <ListaRecetas/>
            </div>
            <DetalleReceta/>
          </ModalProvider>
        </RecetasProvider>
      </CategoriasProvider>
    </>
  );
}

export default App;
