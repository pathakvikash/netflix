import Like from './svgComp/Like';
import Dislike from './svgComp/Dislike';

function MoreInfo({ handleMoreInfo, data }) {
  return (
    <div className='fixed inset-0 flex justify-center items-center z-10 p-4 sm:p-8'>
      <div className='relative bg-black rounded-[30px] overflow-hidden border w-full max-w-[900px] max-h-[90vh]'>
        <img
          src='https://image.tmdb.org/t/p/original/eAIHqfS3kXm7kZl4j7ZBfdegyEz.jpg'
          alt=''
          className=''
        />
        <div
          className='absolute right-5 top-5 text-white cursor-pointer'
          onClick={handleMoreInfo}
        >
          X
        </div>
        <div className='absolute left-[1rem] right-[1rem] top-[5rem] sm:top-[20rem] p-4'>
          <h2 className='text-2xl sm:text-3xl text-white'>
            Bad Boys for Life{data.title}
          </h2>

          <div className='flex justify-start items-center gap-2 mt-4'>
            <button className='bg-white text-black px-4 py-2 border rounded-md'>
              Play
            </button>
            <div className='border flex justify-center items-center w-8 h-8 rounded-full bg-black text-white'>
              +
            </div>
            <div className='border flex justify-center items-center w-8 h-8 rounded-full bg-black'>
              <Like />
            </div>
            <div className='border flex justify-center items-center w-8 h-8 rounded-full bg-black'>
              <Dislike />
            </div>
          </div>
          <p className='text-green-400 font-bold mt-4'>71.3% Match</p>
        </div>
        <div className='p-4 sm:p-8 flex'>
          <div className='text-gray-300 flex-1'>
            Marcus and Mike are forced to confront new threats, career changes,
            and midlife crises as they join the newly created elite team AMMO of
            the Miami police department to take down the ruthless Armando Armas,
            the vicious leader of a Miami drug cartel.
          </div>
          <div className='flex flex-1 flex-col sm:flex-row justify-between items-start mt-4 gap-4'>
            <div className='flex-1'>
              <p className='text-gray-300'>Genre:</p>
              <p>Action, Crime, Thriller</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
