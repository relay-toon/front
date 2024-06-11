import Image from 'next/image';
import { useState } from 'react';

export default function FilterDropdown({ selectedFilter, onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const filterTypeList = [
    { label: '진행중', value: false },
    { label: '완료', value: true },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterChange = (value) => {
    onFilterChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex h-9 w-20 items-center justify-center rounded-md border border-gray-300 bg-white px-2 text-base font-medium"
        onClick={toggleDropdown}
      >
        {filterTypeList.find((f) => f.value === selectedFilter)?.label}
        <Image
          src="/svg/filterIcon.svg"
          alt="filterIcon"
          width={16}
          height={16}
        />
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-20 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          {filterTypeList.map((type) => (
            <button
              key={type.label}
              className="block w-full px-4 py-2 text-left text-[14px] text-gray-700 hover:bg-gray-100"
              onClick={() => handleFilterChange(type.value)}
            >
              {type.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
