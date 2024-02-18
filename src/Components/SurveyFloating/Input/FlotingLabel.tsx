import { useState } from 'react';

interface FloatingLabelProps {
  age: any;
  className?: string;
  onClick?: any;
  clicked?: boolean;
}

const FloatingLabel = ({
  age,
  className,
  onClick,
  clicked,
}: FloatingLabelProps) => {
  return (
    <div className="flex items-center flex-col gap-2">
      <p className="text-[#666666]">{age}</p>
      <div
        className={`hover:bg-primary01 border w-10 h-10 rounded-xl border-primary01 flex justify-center
        ${className} ${
          !clicked
            ? 'hover:bg-primary01 border w-10 h-10 rounded-xl border-primary01 flex justify-center'
            : 'bg-primary01 border w-10 h-10 rounded-xl border-primary01 flex justify-center'
        }`}
        onClick={onClick}
      >
        <img alt="whitebox" src="/assets/Survey/labelcheck.svg"></img>
      </div>
    </div>
  );
};

export default FloatingLabel;

// 단수 선택 박스
