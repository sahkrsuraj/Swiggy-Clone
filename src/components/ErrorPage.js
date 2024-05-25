const ErrorPage = ()=>{
  return(
    <div className=" w-[100vw] h-[100vh] flex items-center justify-center bg-yellow-100">
      <div className="flex flex-col items-center justify-center">
        <div className="w-60 rounded-full">
          <img className='w-full rounded-full' src={require('../../assets/Images/error-image.jpg')} alt="error" />
        </div>
        <h2 className="text-2xl text-bold">404</h2>
        <h2 className="text-2xl text-bold">Oops! Something went wrong</h2>
      </div>
    </div>
  )
}

export default ErrorPage;