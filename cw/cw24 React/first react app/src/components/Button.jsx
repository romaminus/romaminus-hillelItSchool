function Button({text, src}) {
    console.log(text, src);
    function handleClick(){
        console.log(`Button ${text} clicked)`);
        
    }
    if (src) {
        return <a href={src}>{text}</a>
    };
    return <button onClick={handleClick}>{text}</button>;
}

export default Button;