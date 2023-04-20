import Homework from "./Homework";
import HomeworkAnswerList from "./HomeworkAnswerList";

const HomeworkDetail = () => {
  const data = {
    homeworkTitle: "별그리기",
    homeworkContent: "*문자를 활용해서 별을 그려보세요",
    homeworkStartDate: "2023-04-16",
    homeworkEndDate: "2023-04-20",
    curriculumName: "JAVA를 활용한 알고리즘",
    homeworkSkillSet: "JAVA",
    summitStudent: 7,
    totalStudent: 10,
  };

  return (
    <div className="table w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="text-center font-bold text-3xl mt-10">
        {data.homeworkTitle}
      </div>
      <div className="flex flex-col items-center my-5 w-full">
        <div className="flex flex-col w-10/12 font-bold">
          커리큘럼명
          <div className="border-2 border-yellow-300 rounded-xl p-1 w-1/2 text-center font-semibold">
            {data.curriculumName}
          </div>
        </div>
        <div className="flex flex-col w-10/12 font-bold mt-3">
          관련스킬셋
          <div className="border-2 border-yellow-300 rounded-xl p-1 w-1/4 text-center font-semibold">
            {data.homeworkSkillSet}
          </div>
        </div>
        <div className="flex flex-col w-10/12 font-bold mt-3 justify-between">
          강의기간
          <div className="flex w-full">
            <div className="mt-2 w-1/2">
              시작일
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                {data.homeworkStartDate}
              </div>
            </div>
            <div className="mt-2 w-1/2">
              마감일
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                {data.homeworkEndDate}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-10/12 font-bold mt-3">
          내용
          <div className="border-2 border-yellow-300 rounded-xl p-1 w-full h-40 font-semibold">
            {data.homeworkContent}
          </div>
        </div>
        <HomeworkAnswerList />
      </div>
    </div>
  );
};

export default HomeworkDetail;
