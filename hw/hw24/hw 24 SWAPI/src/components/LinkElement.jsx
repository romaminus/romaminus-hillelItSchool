function Link({className, href, text, children}) {
    const content = text || children;
    return <a className={className} href={href}>{content}</a>
}

export default Link;