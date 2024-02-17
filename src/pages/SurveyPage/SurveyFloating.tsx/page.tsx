import { useState } from 'react';
import { useParams } from 'react-router-dom';


import ProgressBar from '../../../Components/Survey/SurveyComponent/ProgressBar';
import Survey1 from '../../../Components/Survey/SurveyComponent/Survey1';
import Survey2 from '../../../Components/Survey/SurveyComponent/Survey2';
import Survey3 from '../../../Components/Survey/SurveyComponent/Survey3';
import Survey4 from '../../../Components/Survey/SurveyComponent/Survey4';
import Survey5 from '../../../Components/Survey/SurveyComponent/Survey5';
import Survey6 from '../../../Components/Survey/SurveyComponent/Survey6';
import SurveyResult from '../../../Components/Survey/SurveyComponent/Result';

const SurveyComponents = [
  Survey1,
  Survey2,
  Survey3,
  Survey4,
  Survey5,
  Survey6,
];

const SurveyFloating = () => {
  const [step, setStep] = useState(1);

  const handleNextButtonClick = (nextStep: number) => {
    // Survey 컴포넌트에서 전달받은 nextStep으로 step을 변경
    setStep(nextStep);
  };

  return (
    <div>
      <div className=' 배너 자리'></div>
      <div className="w-full h-[627px] bg-[#E6E6E6]">
        <ProgressBar step={step} />
        <div className="w-[1142px] h-[480px] bg-[#FFFFFF] rounded-[30px] shadow-xl flex relative m-auto top-[47px]">
          {SurveyComponents.map(
            (SurveyComponent, index) =>
              step === index + 1 && (
                <SurveyComponent
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
