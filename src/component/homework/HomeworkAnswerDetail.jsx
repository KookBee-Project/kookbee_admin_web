import { useNavigate, useParams } from "react-router-dom";
import HomeworkCommentCreate from "./HomeworkCommentCreate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { readHomeworkAnswerDetail } from "../../store/homework/homeworkSlice";

const HomeworkAnswerDetail = () => {
  const { homeworkAnswerDetail } = useSelector((state) => state.homework);
  const { homeworkAnswerId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(homeworkAnswerId);
    dispatch(readHomeworkAnswerDetail(homeworkAnswerId));
  }, []);

  return (
    <div className="table w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="text-center font-bold text-3xl mt-10">
        {homeworkAnswerDetail?.homeworkQuestionTitle}
      </div>
      <div className="flex flex-col items-center my-5 w-full">
        <div className="flex flex-col w-10/12 font-bold">
          커리큘럼명
          <div className="border-2 border-yellow-300 rounded-xl p-1 w-1/2 text-center font-semibold">
            {homeworkAnswerDetail?.curriculumName}
          </div>
        </div>
        <div className="flex flex-col w-10/12 font-bold mt-3">
          관련스킬셋
          <div className="border-2 border-yellow-300 rounded-xl p-1 w-1/4 text-center font-semibold">
            {homeworkAnswerDetail?.skillSetName}
          </div>
        </div>
        <div className="flex flex-col w-10/12 font-bold mt-3 justify-between">
          제출정보
          <div className="flex w-full">
            <div className="mt-2 w-1/2">
              이름
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                {homeworkAnswerDetail?.studentName}
              </div>
            </div>
            <div className="mt-2 w-1/2">
              날짜
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                {homeworkAnswerDetail?.homeworkAnswerUpdateAt}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-10/12 font-bold mt-3">
          내용
          <div
            className="border-2 border-yellow-300 rounded-xl whitespace-pre-wrap break-all overflow-auto p-2 w-full h-40 font-semibold"
            dangerouslySetInnerHTML={{
              __html: homeworkAnswerDetail?.homeworkAnswerContent,
            }}
          />
        </div>
        <div className="flex flex-col font-bold mt-3">
          첨부파일
          {homeworkAnswerDetail?.homeworkAnswerImage ? (
            <input
              type="image"
              src={
                "https://storage.googleapis.com/kookbee-test-strorage/" +
                homeworkAnswerDetail?.homeworkAnswerImage
              }
              className="border-2 border-yellow-300 rounded-xl whitespace-pre-wrap break-all overflow-auto p-2 w-full h-40 font-semibold"
            />
          ) : (
            <p className="text-sm">등록된 첨부파일이 없습니다.</p>
          )}
        </div>
        {homeworkAnswerDetail?.homeworkAnswerScore ? (
          <div className="flex flex-col whitespace-pre-wrap break-all overflow-auto w-10/12 font-bold mt-3 justify-between">
            강사님의 평가
            <div className="flex w-full">
              <div className="mt-2 w-4/5">
                코멘트
                <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                  {homeworkAnswerDetail?.homeworkAnswerComment}
                </div>
              </div>
              <div className="mt-2 w-1/5">
                평가
                <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                  {homeworkAnswerDetail?.homeworkAnswerScore}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <HomeworkCommentCreate homeworkAnswerId={homeworkAnswerId} />
        )}
      </div>
    </div>
  );
};

export default HomeworkAnswerDetail;
