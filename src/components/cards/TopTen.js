import { homedata } from '@/constant/data';
export default function TopTen() {
  return (
    <div className='flex flex-col pl-6 mt-6'>
      <h2 className='text-xl text-white font-bold'>{'Top 10 In US Today'}</h2>
      <div className='flex overflow-x-auto no-scrollbar py-6'>
        {homedata.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className='relative w-[200px] flex items-center justify-center inset-0 flex-shrink-0'
          >
            <span className='text-[12rem] text-gray-800 font-bold '>
              {index + 1}
            </span>
            <img
              className='w-28 h-36 hover:duration-300 hover:transition-transform hover:scale-[2.2] absolute right-[-30px] rounded-md'
              src={item.poster}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
