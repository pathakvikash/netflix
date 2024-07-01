import { Lang } from './small/Lang';
export default function Footer() {
  let data = [
    'FAQ',
    'Help Center',
    'Account',
    'Media Center',
    'Investor Relations',
    'Jobs',
    'Terms of Use',
    'Privacy',
    'Cookie Preferences',
    'Corporate Information',
    'Contact Us',
    'Speed Test',
    'Legal Notices',
    'Only on Netflix',
  ];
  return (
    <footer className='bg-black md:px-48 md:p-6 border-b-[6px] gap-3 border-gray-900 text-white px-4 pb-8 flex flex-col md:flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-start'>
      <h2 className='flex gap-1 sm:text-center text-[14px] text-[#757575]'>
        Questions? Call <p className='underline'>000-800-919-1694</p>{' '}
      </h2>

      <div className='grid grid-cols-1 gap-3 w-full justify-center sm:grid-cols-3 sm:col-gap-8 sm:justify-start'>
        {data.map((item, index) => (
          <a
            key={index}
            className='flex justify-start hover:text-red-600 underline text-[12px] text-[#757575] sm:text-center'
            href='#'
          >
            {item}
          </a>
        ))}
      </div>

      <div className='flex md:flex-col sm:flex-row sm:items-center text-[12px] text-[#757575]'>
        <Lang lang={['English', 'हिन्दी']} />
        <p className='sm:text-center'>Netflix India</p>
      </div>
    </footer>
  );
}
