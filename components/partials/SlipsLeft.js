import SlipButton from '../base/SlipButton'

import LogoNWSq from '../../public/brands-logos/Logo-NWSquare.png'
import LogoAPSq from '../../public/brands-logos/Logo-Animal-Politico-Pequeno.jpg'
import LogoAGSq from '../../public/brands-logos/Logo-Animal-Gourmet-Pequeno.jpg'

const slipsLeftContent = [
    {
        id: 0,
        logo: LogoNWSq,
        alt: 'logo Newsweek pequeño',
        text: 'Newsweek',
        height:'30'
    },
    {
        id: 1,
        logo: LogoAPSq,
        alt: 'logo Animal Político pequeño',
        text: 'Animal Político',
        height:'30'
    },
    {
        id: 2,
        logo: LogoAGSq,
        alt: 'Logo Animal Gourmet pequeño',
        text: 'Animal Gourmet',
        height:'30'
    }
]

export default function SlipsLeft ({slipSelected, defaultContents}) {
    return (

        <div className="slipsLeftContainer">
            {slipsLeftContent.map(slipL => (
                <SlipButton key={slipL.id} buttonSelected={slipSelected} data={slipL} classButton="slipButtonLeft" showDefault={defaultContents}/>
            ))}
        </div>
    )
}
