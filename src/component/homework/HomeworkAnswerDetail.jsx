import HomeworkCommentCreate from "./HomeworkCommentCreate";

const HomeworkAnswerDetail = () => {
  const data = {
    homeworkTitle: "별그리기",
    curriculumName: "JAVA를 활용한 알고리즘",
    homeworkSkillSet: "JAVA",
    homeworkAnswerName: "정유철",
    homeworkSummitAt: "2023-04-17",
    homeworkAnswerContent:
      "별을 이렇게 저렇게 해서 만들었습니다. 다섯개의 별을 만들었습니다.",

    homeworkRating: "",
    homeworkRatingComment: "",
    // homeworkRating: "상",
    // homeworkRatingComment: "별을 아주 이쁘게 만들었습니다. 잘했습니다!",
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
          제출정보
          <div className="flex w-full">
            <div className="mt-2 w-1/2">
              이름
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                {data.homeworkAnswerName}
              </div>
            </div>
            <div className="mt-2 w-1/2">
              날짜
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                {data.homeworkSummitAt}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-10/12 font-bold mt-3">
          내용
          <div className="border-2 border-yellow-300 rounded-xl p-2 w-full h-40 font-semibold">
            {data.homeworkAnswerContent}
          </div>
        </div>
        {data.homeworkRating ? (
          <div className="flex flex-col w-10/12 font-bold mt-3 justify-between">
            강사님의 평가
            <div className="flex w-full">
              <div className="mt-2 w-4/5">
                코멘트
                <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                  {data.homeworkRatingComment}
                </div>
              </div>
              <div className="mt-2 w-1/5">
                평가
                <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                  {data.homeworkRating}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <HomeworkCommentCreate />
        )}
      </div>
    </div>
  );
};

export default HomeworkAnswerDetail;
