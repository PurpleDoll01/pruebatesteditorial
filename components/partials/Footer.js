import LogoCriterio from '../../public/brands-logos/logoCriterio.png'
import Text from '../../components/base/Text'
import PlaceIcon from '../../public/icons/place.svg'
import EditorialIcon from '../../public/icons/publireportaje.svg'
import CommercialIcon from '../../public/icons/nse.svg'

export default function Footer () {
    return (
        <footer>
            <Text type="body1">
            Apoye medios de comunicación que en sus publicaciones impresas y redes digitales defienden la transparencia, el acceso a la información, la rendición de cuentas y combate a la corrupción.
            </Text>
            <div className="logofooter">
            <img src={LogoCriterio} alt="Logo Grupo Editorial Criterio" id="LogoCriterioFooter"/>
            </div>
            <div className="aboutText">
                <div className="address">
                    <div className="addressIcon">
                        <img src={PlaceIcon} alt="Ícono de ubicación" id="placeIcon"/>
                    </div>
                    <div className="addressText">
                        <Text type="body4">
                            <span className="bold">Dirección:</span> Prado Norte 145a Col. Lomas de Chapultepec
                        </Text>
                    </div>
                </div>
                <div className="contactUs">
                    <div className="editorialContact">
                        <div className="editorialIcon">
                            <img src={EditorialIcon} alt="Imagen Contacto Editorial" id="EditorialIcon"/>
                        </div>
                        <div className="editorialInfo">
                            <Text type="body4">
                                <span className="bold">Contacto Editorial:</span> <br/>
                                Tania Montalvo - Animal Político<br/>
                                Mayra Zepeda - Animal Gourmet<br/>
                                <a href="mailto:comercial@animalpolitico.com"> comercial@animalpolitico.com</a>
                                <br/>
                                T: 6267 8039
                            </Text>
                        </div>
                    </div>
                    <div className="commercialContact">
                        <div className="commercialIcon2">
                            <img src={CommercialIcon} alt="Imagen Contacto Comercial" id="CommercialIcon"/>
                        </div>
                        <div className="commercialInfo">
                            <Text type="body4">
                                <span className="bold">Contacto Comercial:</span> <br/>
                                Manuel Montes de Oca <br/>
                                <a href="mailto:mmontes@newsweekespanol.com"></a> mmontes@newsweekespanol.com <br/>
                                T: 6267 8039 ext. 128
                            </Text>
                        </div>
                    </div>
                </div>
            </div>




        </footer>
    )
}
