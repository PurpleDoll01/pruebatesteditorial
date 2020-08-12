import { useState} from 'react';
import PortadasNW from '../../public/portadas/newsweekCover2.jpg'
import AudienciaNW from '../../public/contentImages/NWContents/Audiencia/Audiencia1.jpg'
import CirculacionNW from '../../public/contentImages/NWContents/Circulacion/Circulacion1.jpg'
import PrintNW from '../../public/contentImages/NWContents/Print/Print1.jpg'
import OnlineNW from '../../public/contentImages/NWContents/Display/Display1.jpg'
import OnlineNW2 from '../../public/contentImages/NWContents/Display/Display2.jpg'
import NewsletterNW from '../../public/contentImages/NWContents/Newsletter/NL1.jpg'
import AlcancesNW from '../../public/contentImages/NWContents/Alcance/Alcance1.jpg'
import PortadaAP from '../../public/portadas/apCover.jpg'
import AudienciasAP from '../../public/contentImages/AP/AudienciasAP1.jpg'
import CirculacionAP from '../../public/contentImages/AP/Circulacion.jpg'
import PrintAP from '../../public/contentImages/AP/PrintAP.png'
import DigitalAP from '../../public/contentImages/AP/DigitalAP.jpg'
import ContenidosAP from '../../public/contentImages/AP/Contenidos.jpg'
import NewsAP from '../../public/contentImages/AP/NewsAP.jpg'
import AlcancesAP from '../../public/contentImages/AP/AlcancesAP.jpg'
import PortadaAG from '../../public/portadas/agCover.png'
import AudienciasAG from '../../public/contentImages/AG/Audiencias.jpg'
import CirculacionAG from '../../public/contentImages/AG/CirculacionAG.jpg'
import TarifasAG from '../../public/contentImages/AG/TarifasAG.jpg'
import Tarifas2AG from '../../public/contentImages/AG/Tarifas2AG.jpg'
import NewsAG from '../../public/contentImages/AG/NewsAG.jpg'
import AlcancesAG from '../../public/contentImages/AG/AlcancesAG.jpg'
import Publicitarios1 from '../../public/portadas/Publicitarios.jpg'
import Comerciales1 from '../../public/portadas/Comerciales.jpg'
import MainDefault from './MainDefault.js'
import MainComponents from './MainComponents.js'
import SlipsLeft from './SlipsLeft.js'
import SlipsRight from './SlipsRight.js'

const mediaInfo = [
    {
        id: 0,
        title: "Newsweek en Español",
        image: PortadasNW,
        content: <>La versión en habla hispana para México y América Latina. <br/>
        Con más de 15 años, periodismo destacado con reportajes de investigación, entrevistas y análisis de profundidad, crónicas y noticias oportunas.<br/>
        Las mejores plumas nacionales e internacionales. <br/>
        Expertos en temas: Internacionales, negocios, ciencia, tecnología, salud, cultura, política, viajes, estilo de vida, deportes, entre otros.<br/>
        ° 70% de contenido hecho en México y LATAM<br/>
        ° 30% de contenido de Newsweek Internacional <br/> </>,
        additionalContent: [
            {
                title: "Audiencias Newsweek en Español",
                image: AudienciaNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Circulación Newsweek en Español",
                image: CirculacionNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Espacios y tarifas Print Newsweek en Español",
                image: PrintNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Tarifas para pauta online Newsweek en Español",
                image: OnlineNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Contenidos Digitales Newsweek en Español",
                image: OnlineNW2,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Newsletter Newsweek en Español",
                image: NewsletterNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Alcances Newsweek en Español",
                image: AlcancesNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            }
        ]
    },
    {
        id: 1,
        title: "Animal Político",
        image: PortadaAP,
        content: <>Nuestro objetivo es llevar a nuestros lectores información exclusiva, veraz, que responda a la nueva definición de rapidez
        que marca la tecnología. Con miras a observar a los actores y procesos políticos, fomentar la participación ciudadana, y una
        mejor toma de decisiones.<br/>
        Es un medio que, a diferencia de otros, ofrece periodismo fidedigno y de calidad. No tiene intereses políticos,
        sólo publica lo que informativamente le interesa al lector.<br/>
        Los contenidos que publica Animal Político, responden a noticias que marcan la Agenda Nacional, así como investigaciones
        periodísticas de fondo que han dado al medio la primer posición en relevancia y prestigio a Nivel Nacional.<br/>
        Su expertise<br/>
        Crear contenido de calidad con los mejores periodistas y editores del país<br/>
        En Abril de 2018, ganamos el Premio Ortega y Gasset del Periodismo por nuestra labor periodística en 2017,
        también somos acreedores al premio nacional de periodismo y finalistas del premio Gabriel García Márquez 2018.<br/>  </>,
        additionalContent: [
            {
                title: "Audiencias Animal Político",
                image: AudienciasAP,
                content: <>"Nuestro objetivo es llevar a nuestros lectores información exclusiva, veraz, que responda a la nueva definición de rapidez que marca la tecnología. <br/>Es un medio con miras a observar a los actores y procesos políticos, fomentar la participación ciudadana, y una mejor toma de decisiones. <br/> Es un medio que, a diferencia de otros, ofrece periodismo fidedigno y de calidad. No tiene intereses políticos, sólo publica lo que informativamente le interesa al lector. <br/><br/>Los contenidos que publica Animal Político, responden a noticias que marcan la Agenda Nacional, así como investigaciones periodísticas de fondo que han dado al medio la primer posición en relevancia y prestigio a Nivel Nacional."</>
            },
            {
                title: "Circulación Animal Político",
                image: CirculacionAP,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Espacios y tarifas Print Animal Político",
                image: PrintAP,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Tarifas para pauta online Animal Político",
                image: DigitalAP,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Contenidos Digitales Animal Político",
                image: ContenidosAP,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Newsletter Animal Político",
                image: NewsAP,
                content: "De Lunes a Viernes enviamos a nuestra base de datos, las noticias más relevantes del día con la opción de incluir en este envío, notas patrocinadas de forma destacada y/o incluir Banner de publicidad."
            },
            {
                title: "Alcances Animal Político",
                image: AlcancesAP,
                content: "Para lograr los alcances comprometidos, los contenidos comerciales son amplificados en nuestras redes sociales y con display autopromo, así como amplificación cruzada con nuestras demás plataformas."
            }
        ]
    },
    {
        id: 2,
        title: "Animal Gourmet",
        image: PortadaAG,
        content: <>Animal Gourmet es periodismo gastronómico<br/><br/>
        interesado en contar historias detrás de platillos, chefs, restaurantes, recetas, tendencias y tradiciones culinarias. <br/> Nos distingue del resto de los medios especializados, el ADN social que deviene de Animal Político con quién compartimos objetivo para difundir la cultura y tradiciones del País.<br/>
        Estamos convencidos de que la gastronomía es un tema trasversal que une personas, culturas y países,
        otras disciplinas son igualmente de nuestro interés.<br/>
        En Animal Gourmet generamos información propia y la opinión de quienes se han sumado a esta
        iniciativa y retomamos lo más importante que se genera en el mundo.<br/>
        Ofreceremos además, las experiencias de otros periodistas, expertos en el tema, viajeros, escritores y líderes de opinión, quienes desde su trinchera disfrutan de la cultura culinaria y desde su expertise nos llevan a viajar por el mundo gourmet.<br/></>,
        additionalContent: [
            {
                title: "Audiencias Animal Gourmet",
                image: AudienciasAG,
                content: <>"Ofreceremos además, las experiencias de otros periodistas, expertos en el tema, viajeros, escritores y
                líderes de opinión, quienes desde su trinchera disfrutan de la cultura culinaria y desde su expertise nos llevan a viajar por el mundo gourmet"</>
            },
            {
                title: "Circulación Animal Gourmet",
                image: CirculacionAG,
                content: "En Animal Gourmet generamos información propia y la opinión de quienes se han sumado a esta iniciativa y retomamos lo más importante que se genera en el mundo."
            },
            {
                title: "Espacios y tarifas Animal Gourmet",
                image: TarifasAG,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Tarifas para pauta online Animal Gourmet",
                image: Tarifas2AG,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Contenidos Digitales Animal Gourmet",
                image: Publicitarios1,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Newsletter Animal Gourmet",
                image: NewsAG,
                content: "Actualmente nos encontramos trabajando el el siguiente paso para deleitar la personalización de contenidos para nuestros clientes. ¡Contáctanos y haz parte del camino! "
            },
            {
                title: "Alcances Animal Gourmet",
                image: AlcancesAG,
                content: <>"Para lograr los alcances comprometidos, los contenidos comerciales son amplificados en nuestras redes sociales y con display autopromo, así como amplificación cruzada con nuestras demás plataformas."</>
            },
        ]
    },
    {
        id: 3,
        title: "Productos Publicitarios",
        image: Publicitarios1,
        content: <>En los formatos tradicionales de páginas, dobles páginas, forros y cintillos, ofrecemos a nuestros socios comerciales la
        posibilidad de llegar a nuestros lectores con sus campañas directas de anuncios publicitarios.</>,
        additionalContent: [
            {
                title: "Audiencias Newsweek en Español",
                image: AudienciaNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Circulación Newsweek en Español",
                image: CirculacionNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Espacios y tarifas Print Newsweek en Español",
                image: PrintNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Tarifas para pauta online Newsweek en Español",
                image: OnlineNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Contenidos Digitales Newsweek en Español",
                image: OnlineNW2,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Newsletter Newsweek en Español",
                image: NewsletterNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Alcances Newsweek en Español",
                image: AlcancesNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            }
        ]
    },
    {
        id: 4,
        title: "Contenidos Comerciales",
        image: Comerciales1,
        content: <>Con un diseño original y creativo comunicamos a nuestras audiencias de una manera gráfica, el objetivo y estrategia de nuestros socios comerciales. Este formato resulta ideal para comunicar con las audiencias más jóvenes, muchas de las cuales
        forman parte de nuestra comunidad.</>,
        additionalContent: [
            {
                title: "Audiencias Newsweek en Español",
                image: AudienciaNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Circulación Newsweek en Español",
                image: CirculacionNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Espacios y tarifas Print Newsweek en Español",
                image: PrintNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Tarifas para pauta online Newsweek en Español",
                image: OnlineNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Contenidos Digitales Newsweek en Español",
                image: OnlineNW2,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Newsletter Newsweek en Español",
                image: NewsletterNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            },
            {
                title: "Alcances Newsweek en Español",
                image: AlcancesNW,
                content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut vitae, quia sit ipsam nulla quos eius illum distinctio ipsa."
            }
        ]
    },
]

export default function Main () {
    const [content, setContent] = useState('No mostrar');
    const [optionalContents, setOptionalContents] = useState('No mostrar');

    const infoMedia = mediaInfo[content]
    let finalInfo={}
    if (infoMedia) {
        if(optionalContents==='No mostrar') {
            finalInfo=infoMedia
        } else {
            finalInfo=infoMedia.additionalContent[optionalContents]
        }
    }
    return (
        <div className="mainContainer">
            <SlipsLeft slipSelected={setContent} defaultContents={setOptionalContents}/>
            { content === 'No mostrar' ? (<MainDefault />): (<MainComponents showInfo={finalInfo ? finalInfo : infoMedia} displayOptional={setOptionalContents} />)}
            <SlipsRight slipSelected={setContent} defaultContents={setOptionalContents}/>
        </div>
    )
}
