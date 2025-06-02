function Button({className, id, children}) {
    
    return <button className={className} id={id} type="button">
        {children}
    </button>;
}

export default Button;