function ErrorPage() {
  return (
    <div className="container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <main className="px-3">
        
        <h1>Page 404.</h1>
        <p className="lead">
          Cover is a one-page template for building simple and beautiful home
          pages. Download, edit the text, and add your own fullscreen background
          photo to make it your own.
        </p>
        <p className="lead">
          
          <a
            href="#"
            className="btn btn-lg btn-light fw-bold border-white bg-white"
          >
            Learn more
          </a>
        </p>
      </main>
      <footer className="mt-auto text-white-50">
        
        <p>
          Cover template for
          <a href="https://getbootstrap.com/" className="text-white">
            Bootstrap
          </a>
          , by
          <a href="https://x.com/mdo" className="text-white">
            @mdo
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default ErrorPage;
