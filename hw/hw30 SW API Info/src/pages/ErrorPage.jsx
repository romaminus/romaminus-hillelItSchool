function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-4 text-center">
        <div className="relative flex flex-col items-center justify-center p-4 mx-auto mb-4 bg-white border border-gray-400 rounded-full w-36 h-36">
          <div className="absolute top-0 w-full h-8 bg-purple-500 rounded-t-full"></div>
          <div className="flex items-center justify-center mt-6">
            <span className="w-4 h-4 mx-1 bg-gray-700 rounded-full"></span>
            <span className="w-8 h-1 bg-gray-700 rounded"></span>
            <span className="w-4 h-4 mx-1 bg-gray-700 rounded-full"></span>
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Упс! Щось пішло не так!
        </h1>
        <a
          href="/"
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Повернутися на головну
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
