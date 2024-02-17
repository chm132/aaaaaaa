import React from 'react';
import LessonCard from '../../Announcement/LessonCard';
import TimeLine from '../../TimeLine';
import { useNavigate, useParams } from 'react-router-dom';
import { categoryMapping } from './../../../pages/CategoryPage/page';

const dummyLessons = [
  {
    id: 1,
    img: '/path/to/dummy/image1.jpg',
    title: '더미 레슨 1',
    endDate: '2024-02-28',
    startDate: '2024-02-25',
    endTime: '14:00',
    startTime: '12:00',
  },
  {
    id: 2,
    img: '/path/to/dummy/image2.jpg',
    title: '더미 레슨 2',
    endDate: '2024-03-05',
    startDate: '2024-03-01',
    endTime: '16:00',
    startTime: '14:00',
  },
  {
    id: 3,
    img: '/path/to/dummy/image3.jpg',
    title: '더미 레슨 3',
    endDate: '2024-03-10',
    startDate: '2024-03-07',
    endTime: '18:00',
    startTime: '16:00',
  },
  {
    id: 4,
    img: '/path/to/dummy/image4.jpg',
    title: '더미 레슨 4',
    endDate: '2024-03-15',
    startDate: '2024-03-12',
    endTime: '20:00',
    startTime: '18:00',
  },
];







const SurveyResult = () => {
  const categoryName = useParams()?.category || '스마트폰';
  const navigate =useNavigate();

  const handleGoToSurvey = () => {
    // /survey로 이동
    navigate('/:category/:categoryId/survey');
  };

  const handleGoToList = () => {
    // /:category/:categoryID로 이동
    navigate('/:category/:categoryId');
  }

  return (
    <div>
      <TimeLine
        title={categoryName}
        imgSrc={`/assets/TimeLine/${categoryMapping[categoryName]}.png`}
        contents={`${categoryName}에 있는 디지털 서비스 사용이 어려우신가요? 올래에서 함께 배우세요!`}
      />
      <div className="w-full h-[716px] bg-[#F2F2F2] flex flex-col justify-center items-center">
      <div className='text-center font-medium text-2xl py-4'>
        찾았어요! 이런 교육은 어떠세요?
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        {dummyLessons.map((lesson) => (
          <div key={lesson.id} className='w-full bg-red-50 mb-0'>
            <LessonCard {...lesson} />
          </div>
        ))}
      </div>
        <div className="w-full h-14 flex justify-center gap-14 mt-14">
          <button className="hover:opacity-80 w-[299px] h-[56px] bg-[#B3B3B3] rounded-[50px] text-white flex justify-center py-4 gap-2"
           onClick={handleGoToSurvey}
          >
            <img
             src="/assets/Survey/backimg.svg"
              alt="img"
            />
          <p className="font-medium">설문 다시하기</p>
        </button>
    <button className="hover:opacity-80 w-[307px] h-[56px] bg-primary01 rounded-[50px] text-white flex justify-center py-4 gap-2"
      onClick={handleGoToList}
      >
      <img
        src="/assets/Survey/listimg.svg"
        alt="img"
      />
      <p className="font-medium">목록으로 돌아가기</p>
    </button>
  </div>
</div>
    </div>
   
  );
};

export default SurveyResult;
