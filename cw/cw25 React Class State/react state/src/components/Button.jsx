function Button({text, src}) {
    let count = 0;
    function handleClick(){
        console.log(`Button ${text, count} clicked)`);
        count++;
    }
    if (src) {
        return <a href={src}>{text}</a>
    };
    return <button onClick={handleClick}>{text} - {count}</button>;
}

export default Button;