import React, { useState } from 'react';
import Input2 from '../../Survey/Input/Input2';
import { useDispatch } from 'react-redux';
import { setSurveyFourth } from '../../../redux/slices/surveySlice';

interface Floating3Props {
  onNextButtonClick: (nextStep: number) => void;
}

function Floating3({ onNextButtonClick }: Floating3Props) {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    onNextButtonClick(4);
  };

  const [optionClicked, setOptionClicked] = useState('');

  const changeTag = (category: string, value: string) => {
    if (category === 'detail') {
      setOptionClicked(value);
    }
  };

  const Option1 = ['부동산/임대차', '재테크/재무관리'];
  const Option2 = ['공인중개사 준비', '기타'];

  dispatch(
    setSurveyFourth({
      detail:
        optionClicked === '부동산/임대차'
          ? 1
          : optionClicked === '재테크/재무관리'
            ? 2
            : optionClicked === '공인중개사 준비'
              ? 3
              : 4,
    }),
  );

  return (
    <div>
      <div className="flex w-full survey h-4/6">
        <div className="box1 m-14">
          <div className="flex question">
            <p className="text-[18px] font-semibold">
              2. 어떤 것을 배우고 싶으세요?
            </p>
          </div>
          <div className="grid grid-cols-2 mt-4 gap-36">
            <section className="flex flex-col gap-4">
              {Option1.map((option, index) => (
                <Input2
                  key={index}
                  question={option}
                  onClick={() => changeTag('detail', option)}
                  clicked={optionClicked === option}
                />
              ))}
            </section>

            <section className="flex flex-col gap-4">
              {Option2.map((option, index) => (
                <Input2
                  key={index}
                  question={option}
                  onClick={() => changeTag('detail', option)}
                  clicked={optionClicked === option}
                />
              ))}
            </section>
          </div>
        </div>
      </div>
      <div className="flex button">
        <button
          className="hover:opacity-80  w-[240px] h-[51px] bg-primary01 rounded-[50px] text-white ml-[451px] mt-[60px] flex justify-center py-3"
          onClick={handleButtonClick}
        >
          <p className="font-medium">다음으로</p>
          <img
            className="px-1 py-1"
            src="/assets/Survey/nextimg.svg"
            alt="다음"
          />
        </button>
      </div>
    </div>
  );
}

export default Floating3;
