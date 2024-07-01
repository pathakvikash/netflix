import SliderItem from './SliderItem';
export default function Slider({ title, data }) {
  return (
    <div className='flex pl-6 mt-[-10%] flex-col space-y-4'>
      <h2 className='text-xl text-white font-bold'>{title}</h2>
      <div className='flex pl-6 scrollbar-hidden gap-1 overflow-x-auto no-scrollbar py-9'>
        {data?.map((item, index) => (
          <SliderItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
