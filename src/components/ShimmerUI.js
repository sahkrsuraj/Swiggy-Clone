const ShimmerUI = ()=>{
  const shimmer = Array.from({length: 20}).map((ele,ind)=>{
    return(
      <div key={ind} className="flex flex-col gap-3 w-64 h-66">
        <div className="bg-[#eee] rounded-s-md w-full h-[150px]"></div>
          <div className="flex flex-col gap-3">
          <div className="bg-[#eee] h-[14px] w-[80%]"></div>
          <div className="bg-[#eee] h-[14px] w-[50%]"></div>
        </div>
      </div>
    );
  })
  return(
    <div className="z-0 flex flex-col justify-center items-center relative top-40">
      <div className="grid grid-cols-[repeat(4,_16rem)] gap-8 py-8">
        {shimmer}
      </div>
    </div>
  );
}

export default ShimmerUI;