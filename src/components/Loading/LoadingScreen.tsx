const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="text-red-600 text-4xl font-bold mb-4">Loading</div>
        <div className="flex gap-2 justify-center">
          <span className="w-3 h-3 bg-red-600 rounded-full animate-bounce" />
          <span
            className="w-3 h-3 bg-red-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          />
          <span
            className="w-3 h-3 bg-red-600 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
