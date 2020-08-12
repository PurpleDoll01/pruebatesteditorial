export default function SlipButton ({data, classButton, buttonSelected, showDefault }) {
        if (classButton==='slipButtonRight'){

            function handleClick (e) {
                buttonSelected(data.id)
                showDefault('No mostrar')
            }
            return (
                <div className={classButton} onClick={handleClick}>
                    <img src={data.logo} alt={data.alt} height={data.height}/>
                    <p>{data.text}</p>
                </div>
            )
        } else {
            function handleClick (e) {
                buttonSelected(data.id)
                showDefault('No mostrar')
            }
        return (
            <div className={classButton} onClick={handleClick}>
                <p>{data.text}</p>
                <img src={data.logo} alt={data.alt} height={data.height}/>
            </div>
        )
    }
}
