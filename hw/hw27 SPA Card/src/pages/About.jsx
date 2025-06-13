function About() {
    return ( 
        <div className="container container-height d-flex flex-column justify-content-center align-items-center">
            <h1 className="title">
                This is About Page
            </h1>
            <p className="descr">
                You can enjoy, you did it)
            </p>
            <ul>
                You can also:
                <li className="list-item">switch topics</li>
                <li className="list-item">log in without a password</li>
                <li className="list-item">and don't worry, input results are saved</li>
            </ul>
        </div>
     );
}

export default About;