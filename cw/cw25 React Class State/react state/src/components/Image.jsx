function Image(props) {
    const {src, alt} = props;
    return (
        <img src={src} alt={alt} className="logo react"/>
    )
}

export default Image;