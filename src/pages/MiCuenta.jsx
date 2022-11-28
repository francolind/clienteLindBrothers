import {Header} from '../component/Header';
import {Footer} from '../component/Footer';
import { MiPerfil } from './MiPerfil';
import { Ajustes } from './Ajustes';
import { Ayuda } from './Ayuda';
import { Novedades } from './Novedades';
import { Preguntas } from './Preguntas.jsx';
import { Resumen } from './Resumen';
import { MisCompras } from './MisCompras';
import { CerrarSeccion } from './CerrarSeccion';


export const MiCuenta = ()=>{
    return(
        <div className="calzados">
             <Header/>
             
             <div>
             <div>mi perfil</div>
             <div>ajustes</div>
             <div>ayuda</div>
             <div>novedades</div>
             <div>preguntas</div>
             <div>resumen</div>
             <div>mis compras</div>
             <div>cerrar secion</div>
             </div>

             <div><h2> nombre email</h2>
                    <MiPerfil/>
                    <Ajustes/>
                    <Ayuda/>
                    <Novedades/>
                    <Preguntas/>
                    <Resumen/>
                    <MisCompras/>
                    <CerrarSeccion/>

             </div>
             <Footer/>
             
        </div>
    )
}