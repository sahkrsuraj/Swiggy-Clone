const Delivery = ()=>{
  return(
    <div className=" w-[100vw] h-[100vh] flex items-center justify-center bg-white">
      <div className="w-60 rounded-full">
        <img className='w-full rounded-full' src={require('../../assets/Images/delivery.gif')} alt="delivery" />
      </div>
      <p className="text-2xl text-bold">Your food is on the way.</p>
    </div>
  )
}

export default Delivery;