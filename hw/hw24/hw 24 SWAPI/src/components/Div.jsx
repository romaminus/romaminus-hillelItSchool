function Div({className, id, style, children}) {
    return <div className={className} style={style} id={id}>
        {children}
    </div>;
}

export default Div;