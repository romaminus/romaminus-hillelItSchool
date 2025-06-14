function ErrorPage() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 error-container">
      <div className="text-center p-4"> 
        <div className="error-icon-custom bg-white border border-secondary rounded d-flex flex-column justify-content-center align-items-center mx-auto mb-4 position-relative">
              <div className="headband"></div>
              <div className="face mb-3">
                  <span className="smile"></span>
                  <span className="line"></span>
                  <span className="smile"></span>
              </div>
          </div>
          <h1 className="display-4 fw-bold mb-4">Упс! Щось пішло не так!</h1> <a href="/" className="btn btn-primary btn-lg">Повернутися на головну</a>
      </div>
  </div>
  );
}

export default ErrorPage;
