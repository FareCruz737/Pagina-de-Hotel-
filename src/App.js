import img from './arch/img'; 
import pasando from './arch/pasando'; 
import './App.css';
import { useEffect,  useState } from 'react';





function App () {
const [Cam, setCam] = useState(0); 
useEffect(() => {


const cambiar = setInterval(() => {
setCam((Cam) => (Cam + 1) % pasando.length);
}, 2000)

return () => clearInterval(cambiar); 
}, [Cam, pasando])
// Use de Cambiar imagenes// 


return (
<div className='App'>


 <header> 
<div className='about'>
<span> <a href='/'>inico</a></span>

<span><a href='/'>nosotros</a></span>
<span><a href='/'>Habitaciones</a></span>
<div className='h2-box'><h1>Hotelneza</h1> </div>
<span><a href='/'> mision</a></span>
<span><a href='/'>Galeria</a></span>
<span><a href='/'>conctatos</a></span>
</div> 
</header>

{/* EN el pain tiene las cajas principales de lo que son la parte alta de la pagina. 
en el css estan las funcionalidades */}

{/* main */}


<div className='central'>
<img src={img[12].principal}/>

<div className='Bienvenida'> 
<h2>Tu lugar tu casa</h2>
<p>¡Bienvenidos a Hotelneza
tu puerta de entrada a experiencias de hospedaje
excepcionales! En Hotelneza,
 creemos que cada viaje merece un alojamiento único y memorable.</p>
 </div>
</div>

{/* Experimento */}

{/* <h2>Tu lugar tu casa</h2>
<p>¡Bienvenidos a Hotelneza
tu puerta de entrada a experiencias de hospedaje
excepcionales! En Hotelneza,
 creemos que cada viaje merece un alojamiento único y memorable.</p> */}
{/* Vas a estar con la otra caja de la imagenes */}

<div className='father-reser-3'>

<img src={img[2].imgUrl} width={800} height={'450px'}/> 

<section className='reser-2'>
<h2>Descubre el Arte de Hospedarte:</h2>
<p>Sumérgete en un mundo de 
confort y elegancia con nuestra 
selección de hoteles, diseñados para satisfacer tus 
expectativas más exigentes. Desde lujosas suites hasta encantadoras posadas, 
en Hotelneza encontrarás el lugar perfecto para cada ocasión.</p>
</section>
</div>

<h2 className='paraiso'>Hotelneza es tu paraiso</h2>
<section className='img-present'>
<img src={img[3].imgUrl}/><img src={img[4].imgUrl}/> <img src={img[5].imgUrl}/> <img src={img[6].imgUrl}/> <img src={img[7].imgUrl}/> 
</section>

<div className='father-reser-4'>
<article className='reser-3'> 
<h3>Tu Destino, Tu Estilo:</h3>
<p>¿Buscas un retiro de lujo frente al mar o una experiencia 
acogedora en el corazón de la ciudad? Nuestro catálogo diverso 
abarca una amplia gama de destinos y estilos de hospedaje para que encuentres la 
opción que mejor se adapte a tus preferencias y necesidades.</p>
</article>

<img  src={img[8].imgUrl} width={750} height={300}/> 
{/* Recuerda poner una git de mar y otras imagenes que debajo que vaya 
cambiando */}
</div>


<h2 className='h2'>Mas que un paraiso</h2>
<section className='Cambiante'>
<img src={pasando[Cam].img} alt={`Imagen ${pasando[Cam].img}`} width={'90%'} height={600}/>
</section>

<div className='servicios'>
<section className='reser-4'> 
<h2>Tu Comodidad, Nuestra Prioridad:</h2>
<p>Desde el momento en que reservas hasta el último día de tu estancia, 
nuestro equipo está dedicado a asegurar tu comodidad y satisfacción. 
Hotelneza es más que una plataforma de reservas; es
 tu socio de confianza para explorar el mundo con estilo y tranquilidad.</p>
 </section>
<div className='img-4'>
<img src={pasando[4].img2} width={500}/> <img src={pasando[5].img2} width={500}/> <img src={pasando[6].img2} width={500} /> <img src={pasando[7].img2}/>   
 </div>

</div>

<footer> 
<p>Ceado por Jocelito &copy;</p>
</footer>
</div>

); }

export default App;
