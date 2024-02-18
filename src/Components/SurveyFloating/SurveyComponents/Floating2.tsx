import { useState } from 'react';

import { transValue } from '../../../utils/transValue';
import { useDispatch } from 'react-redux';
import { setSurveyOne } from '../../../redux/slices/surveySlice';
import FloatingLabel from '../Input/FlotingLabel';

interface Floating2Props {
  onNextButtonClick: (nextStep: number) => void;
}

function Floating2({ onNextButtonClick }: Floating2Props) {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    onNextButtonClick(3);
  };

  const [categoryClicked, setCategoryClicked] = useState('');

  const changeTag = (category: string, value: string) => {
    if (category === 'gender') {
      setCategoryClicked(value);
    } else if (category === 'age') {
      setCategoryClicked(value);
    }
  };

  const buttonList = [
    '스마트폰',
    '컴퓨터',
    '키오스크',
    '외국어',
    '운동',
    '공예',
    '부동산',
    '심리',
    '취업/창업',
    '요리',
    '악기',
    '자산',
  ];

  return (
    <div>
      <div className="flex w-full survey h-4/6">
        <div className="box1 m-14">
          <div className="flex question">
            <p className=" text-[18px] font-semibold">
              1. 어떤 분야를 배우고 싶으세요?
            </p>
          </div>
          <div className="flex gap-10 mt-12 click">
            {buttonList.map((option, index) => (
              <FloatingLabel
                key={index}
                age={option}
                onClick={() => changeTag('age', option)}
                clicked={categoryClicked === option}
              />
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={handleButtonClick}
        className=" hover:opacity-80  w-[240px] h-[51px] bg-primary01 rounded-[50px] text-white ml-[451px] mt-[60px] flex justify-center py-3"
      >
        <p className="font-medium">다음으로</p>
        <img
          className="px-1 py-1 "
          src="/assets/Survey/nextimg.svg"
          alt="img"
        />
      </button>
    </div>
  );
}

export default Floating2;
