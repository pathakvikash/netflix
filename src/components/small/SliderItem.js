import IconButton from './IconButton';
import Like from '../svgComp/Like';
import Dislike from '../svgComp/Dislike';

export default function SliderItem({ item }) {
  return (
    <div
      className={`relative group w-[200px] h-[250px] flex-shrink-0 cursor-pointer transition-transform duration-300
        hover:transform hover:scale-125 hover:z-10
      }`}
    >
      <img
        src={item.banner}
        alt={item.title}
        className={`w-full h-auto rounded-md`}
      />

      <div className='w-full bg-black p-2 text-white rounded-md hidden group-hover:flex flex-col'>
        <div className='flex justify-between p-1'>
          <div className='flex gap-2'>
            <IconButton icon='►' />
            <IconButton icon='+' />
            <IconButton icon={<Like />} />
            <IconButton icon={<Dislike />} />
          </div>
          <IconButton icon='▾' />
        </div>

        <p className='text-sm'>{item.title}</p>

        <p className='text-sm text-green-500'>{item.rating}</p>

        <p className='text-sm'>
          {item.genre.map((item, index) => (
            <span key={index}>{item.name}・</span>
          ))}
        </p>
      </div>
    </div>
  );
}
