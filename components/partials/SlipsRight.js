import ContactIcon from '../../public/icons/newsletter.svg'
import PublicitariosIcon from '../../public/icons/publicidad-impresos.svg'
import ComercialesIcon from '../../public/icons/nse.svg'

import SlipButton from '../base/SlipButton'

const slipsRightContent = [
    {
        id: 3,
        logo: PublicitariosIcon,
        alt: 'Ícono de contenidos Publicitarios',
        text: 'Productos Publicitarios',
        height:'30'
    },
    {
        id: 4,
        logo: ComercialesIcon,
        alt: 'Ícono de contenidos Comerciales',
        text: 'Contenidos Comerciales',
        height:'30'
    },
]

export default function SlipsRight ({slipSelected, defaultContents}) {
    return (
        <div className="slipsRightContainer">
            {slipsRightContent.map(slipR => (
                <SlipButton key={slipR.id} buttonSelected={slipSelected} data={slipR} classButton="slipButtonRight" showDefault={defaultContents}  />
            ))}
        </div>
    )
}
