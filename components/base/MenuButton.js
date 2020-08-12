export default function MenuButton ({data, classButton, variant }) {
    function handleClick (e) {
        variant(data.id);
    }
    return (
            <div className={classButton} onClick={handleClick}>
                <p>{data.text}</p>
            </div>
    );
}
