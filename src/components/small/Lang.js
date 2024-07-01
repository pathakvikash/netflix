export function Lang({ lang }) {
  return (
    <div>
      <select
        name=''
        id=''
        className='bg-black border rounded-md border-white p-2'
      >
        {lang.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
