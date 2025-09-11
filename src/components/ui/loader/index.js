function Loader({small}) {
    return (
      <div className="flex justify-center items-center">
        <div className={`${small ? "w-2 h-2" : "w-6 h-6"} border-2 border-background-loader border-t-transparent rounded-full animate-spin`}></div>
      </div>
    );
  }
  
  export default Loader;
  