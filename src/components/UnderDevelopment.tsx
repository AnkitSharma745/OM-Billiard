const UnderDevelopment = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-2">
          This Page is Under Development
        </h2>
        <p className="text-gray-500 mb-8">
          We are working hard to get this page ready for you. Please check back
          later!
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => window.history.back()}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
