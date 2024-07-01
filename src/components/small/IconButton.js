export default function IconButton({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className='bg-gray-800 border-white border-2 hover:text-white hover:bg-gray-600 w-7 h-7 rounded-full flex items-center justify-center'
    >
      {icon}
    </button>
  );
}
