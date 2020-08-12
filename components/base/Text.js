export default function Text({ children, type }) {
    if (type==='header1') {
        return (
            <h1 className="header1">
                {children}
            </h1>
        )
    } else if (type==='header2') {
        return (
            <h2 className="header2">
                {children}
            </h2>
        )
    } else if (type==='header3') {
        return (
            <h2 className="header3">
                {children}
            </h2>
        )
    } else if (type==='body1') {
        return (
            <p className="body1">
                {children}
            </p>
        )
    } else if (type==='body2') {
        return (
            <p className="body2">
                {children}
            </p>
        )
    }else if (type==='body4') {
        return (
            <p className="body4">
                {children}
            </p>
        )
    } else if (type==='body5') {
        return (
            <p className="body5">
                {children}
            </p>
        )
    }
}
