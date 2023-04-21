import Notification from "./Notification";

const NotificationDetail = () => {
  const data = {
    productTitle: "5월1일 컴백관련공지사항",
    productContent: "까먹고 안 구현해서 링크만 놨는데 나중에 구현할께요",
    productStartDate: "2023-04-16",
    productEndDate: "2023-04-20",
    bootcampName: "미완 미완",
    borrowStudent: 7,
    totalStudent: 10,
  };

  return (
    <div className="table w-1/2 h-5/6 min-w-40 min-h-40 my-20 mx-20 border-4 border-yellow-300 rounded-3xl">
      <div className="text-center font-bold text-3xl mt-10">
        {data.productTitle}
      </div>
      <div className="flex flex-col items-center my-5 w-full">
        <div className="flex flex-col w-10/12 font-bold">
          과정명
          <div className="border-2 border-yellow-300 rounded-xl p-1 w-1/2 text-center font-semibold">
            {data.bootcampName}
          </div>
        </div>
        <div className="flex flex-col w-10/12 font-bold mt-3 justify-between">
          대여기간
          <div className="flex w-full">
            <div className="mt-2 w-1/2">
              시작일
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                {data.productStartDate}
              </div>
            </div>
            <div className="mt-2 w-1/2">
              마감일
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                {data.productEndDate}
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex flex-col w-10/12 font-bold mt-3 justify-between">
          학생수
          <div className="flex w-full">
            <div className="mt-2 w-1/2">
              빌린학생수
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                {data.borrowStudent}
              </div>
            </div>
            <div className="mt-2 w-1/2">
              총 학생수
              <div className="border-2 border-yellow-300 rounded-xl p-1 w-4/5 text-center font-semibold">
                {data.totalStudent}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-10/12 font-bold mt-3">
          내용
          <div className="border-2 border-yellow-300 rounded-xl p-1 w-full h-40 font-semibold">
            {data.productContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetail;
