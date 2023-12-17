import React from 'react';

const FiltersTableTwo = ({ filter }) => {
  return (
    <div className='px-2 py-1 bg-gray-200 rounded-full w-auto inline-block'>
        <p className='text-black text-sm leading-loose font-semibold w-auto inline-block'>
            {filter}
        </p>
    </div>
  )
}

export default FiltersTableTwo;
