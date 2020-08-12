import Text from '../base/Text'
import ContentsMenu from '../partials/ContentsMenu'

export default function MainComponents ({showInfo, displayOptional}) {
    return (
        <div className="mainContentContainer">
            <ContentsMenu showDisplayOptional={displayOptional}/>
            <div className="contentSelected">
                <div className="selectedHeader">
                    <Text type="header3">
                        Descripción del producto:
                    </Text>
                    <Text type="header2">
                        {showInfo.title}
                    </Text>
                </div>
                <div className="mainContent">
                    <img src={showInfo.image} alt="Portadas"/>
                    <Text type="body5">
                        {showInfo.content}
                    </Text>
                </div>
            </div>
        </div>
    )
}
