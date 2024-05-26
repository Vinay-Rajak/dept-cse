export default function FeedBack({ rating, pImg, para, pName, pCompany }) {
  return (
    <>
      <div className="p-2  m-auto text-center ">
        <h1 className="text-base font-black ">Rating- {rating}</h1>
        <p className="text-sm font-extrabold my-4">{para}</p>
        <div className="flex w-[100%] ">
          <div className="flex item-center justify-center w-[100%] ">
            {" "}
            <img
              className="w-14 h-14 m-2 rounded-full bg-red-400"
              src={pImg}
              alt="profile-img"
            />
            <div className="mx-2 pr-2 border-r-2 border-gray-500">
              <h1 className="text-sm font-extrabold">{pName}</h1>
              <p className="text-sm">{`Software Engineer, ${pCompany} Company`}</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}