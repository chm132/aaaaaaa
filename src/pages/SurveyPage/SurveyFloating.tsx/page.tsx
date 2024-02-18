import { useState } from 'react';
import { useParams } from 'react-router-dom';

import TimeLine from '../../../Components/TimeLine';
import Floating1 from '../../../Components/SurveyFloating/SurveyComponents/Floating1';
import Floating2 from '../../../Components/SurveyFloating/SurveyComponents/Floating2';
import Floating4 from '../../../Components/SurveyFloating/SurveyComponents/Floating4';
import Floating5 from '../../../Components/SurveyFloating/SurveyComponents/Floating5';
import Floating6 from '../../../Components/SurveyFloating/SurveyComponents/Floating6';
import Floating7 from '../../../Components/SurveyFloating/SurveyComponents/Floating7';
import Floating8 from '../../../Components/SurveyFloating/SurveyComponents/Floating8';
import Floating3 from '../../../Components/SurveyFloating/SurveyComponents/Floating3';
import FloatingProgressBar from '../../../Components/SurveyFloating/ProgressBar';

const FloatingComponents = [
  Floating1,
  Floating2,
  Floating3,
  Floating4,
  Floating5,
  Floating6,
  Floating7,
  Floating8,
];

const SurveyFloating = () => {
  const [step, setStep] = useState(1);

  const handleNextButtonClick = (nextStep: number) => {
    // Survey 컴포넌트에서 전달받은 nextStep으로 step을 변경
    setStep(nextStep);
  };

  return (
    <div>
      <TimeLine
        title="내용"
        imgSrc={`/assets/TimeLine/mypage.png`}
        contents="내용"
      />
      <div className="w-full h-[627px] bg-[#E6E6E6]">
        <FloatingProgressBar step={step} />
        <div className="w-[1142px] h-[480px] bg-[#FFFFFF] rounded-[30px] shadow-xl flex relative m-auto top-[47px]">
          {FloatingComponents.map(
            (FloatingComponents, index) =>
              step === index + 1 && (
                <FloatingComponents
                  key={index}
                  onNextButtonClick={handleNextButtonClick}
                />
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyFloating;
