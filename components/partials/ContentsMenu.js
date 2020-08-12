import MenuButton from '../base/MenuButton'

const menuContent = [
    {
        id: 0,
        alt: 'Audiencia del medio',
        text: 'Audiencias',
    },
    {
        id: 1,
        alt: 'Circulación del medio',
        text: 'Circulación',
    },
    {
        id: 2,
        alt: 'Tarifas para pauta en impresos',
        text: 'Espacios y tarifas Print',
    },
    {
        id: 3,
        alt: 'Tarifas para pauta online',
        text: 'Pautas en display',
    },
    {
        id: 4,
        alt: 'Costos de contenidos digitales',
        text: 'Contenidos Digitales',
    },
    {
        id: 5,
        alt: 'Publicidad en nuestro boletín de noticias',
        text: 'Newsletter',
    },
    {
        id: 6,
        alt: 'Alcances de audiencias',
        text: 'Alcances',
    },
]

export default function ContentsMenu ({showDisplayOptional}) {
    return (
        <div className="menuContainer">
            {menuContent.map(buttonM=>(
                <MenuButton key={buttonM.id} variant={showDisplayOptional} data={buttonM} classButton="menuButton"/>
            ))}
        </div>
    )
}
