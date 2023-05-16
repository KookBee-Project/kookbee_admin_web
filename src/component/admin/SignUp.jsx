import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkCode,
  getCompany,
  managerSignUp,
  teacherSignUp,
} from "../../store/admin/SignUpSlice";

const SignUp = () => {
  const { data, company } = useSelector((state) => state.signUp);

  // 초기값 세팅
  const [users, setUsers] = useState({
    userEmail: "",
    userPw: "",
    userPwConfirm: "",
    userName: "",
    userBirth: "",
    userPhoneNumber: "",
    userType: "",
    userStatus: "AVAILABLE",
    companyId: 0,
    campusList: [],
  });

  // 회사 코드 검증을 위한 초기값 세팅
  const [code, setCode] = useState({
    companyCode: "",
  });

  // 오류메세지 상태 저장
  const [userEmailMessage, setUserEmailMessage] = useState("");
  const [userPwMessage, setUserPwMessage] = useState("");
  const [userPwConfirmMessage, setUserPwConfirmMessage] = useState("");
  const [userNameMessage, setUserNameMessage] = useState("");
  const [userBirthMessage, setUserBirthMessage] = useState("");
  const [userPhoneNumberMessage, setUserPhoneNumberMessage] = useState("");

  const input_li = [
    {
      label: "이메일",
      type: "text",
      name: "userEmail",
      placeholder: "example@kookbee.com",
      message: userEmailMessage,
    },
    {
      label: "비밀번호",
      type: "password",
      name: "userPw",
      placeholder: "Password",
      message: userPwMessage,
    },
    {
      label: "비밀번호 재확인",
      type: "password",
      name: "userPwConfirm",
      placeholder: "Confirm Password",
      message: userPwConfirmMessage,
    },
    {
      label: "이름",
      type: "text",
      name: "userName",
      placeholder: "김쿡비",
      message: userNameMessage,
    },
    {
      label: "생년월일",
      type: "text",
      name: "userBirth",
      placeholder: "19990508",
      message: userBirthMessage,
    },
    {
      label: "연락처",
      type: "text",
      name: "userPhoneNumber",
      placeholder: "010-1234-5678",
      message: userPhoneNumberMessage,
    },
  ];

  const onCampusListHandler = (e) => {
    const { value, checked, name } = e.target;
    if (checked) {
      setUsers({ ...users, [name]: [...users.campusList, value] });
    } else {
      setUsers({
        ...users,
        [name]: users.campusList.filter((el) => el != value),
      });
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });

    // // 이메일 검사
    // const emailRegExp =
    //   /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    // if (!emailRegExp.test(value)) {
    //   setUserEmailMessage("이메일의 형식이 올바르지 않습니다!");
    // } else {
    //   setUserEmailMessage("");
    // }

    // // 비밀번호 검사
    // if (name === "userPw") {
    //   const passwordRegExp =
    //     /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    //   if (!passwordRegExp.test(value)) {
    //     setUserPwMessage(
    //       "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요."
    //     );
    //   } else {
    //     setUserPwMessage("");
    //   }
    // }

    // // 비밀번호 재확인
    // if (name === "userPwConfirm") {
    //   // 비동기라 순서가 늦게 진행될 때, userPwConfirm을 입력하고 있을 때 즉시 비교하여 작용한다.
    //   if (users.userPw === value) {
    //     // 입력되는 value값을 즉시 호출한다.
    //     setUserPwConfirmMessage("");
    //   } else {
    //     setUserPwConfirmMessage("비밀번호가 일치하지 않습니다.");
    //   }
    // }

    // // 이름 확인
    // if (name === "userName") {
    //   if (value.length < 2 || value.length > 5) {
    //     setUserNameMessage("이름은 2글자 이상 5글자 이하로 입력해주세요!");
    //   } else {
    //     setUserNameMessage("");
    //   }
    // }

    // // 생년월일 확인
    // if (name === "userBirth") {
    //   if (value.length != 8) {
    //     setUserBirthMessage("올바르지 않은 생년월일입니다.");
    //   } else {
    //     setUserBirthMessage("");
    //   }
    // }

    // // 연락처 양식 확인
    // if (name === "serName") {
    //   const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/;
    //   if (!phoneRegExp.test(value)) {
    //     setUserPhoneNumberMessage("올바른 형식이 아닙니다!");
    //   } else {
    //     setUserPhoneNumberMessage("");
    //   }
    // }
  };

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (users.userType === "MANAGER") {
      dispatch(managerSignUp(users));
    }
    if (users.userType === "TEACHER") {
      console.log(users);
      dispatch(teacherSignUp(users));
    }
  };

  const onChangeCode = (e) => {
    const { name, value } = e.target;
    setCode({ ...code, [name]: value });
  };

  const onCheckCode = (e) => {
    e.preventDefault();
    dispatch(getCompany(code));
  };

  useEffect(() => {
    dispatch(checkCode(company.companyId));
    setUsers({ ...users, companyId: company.companyId });
  }, [company]);

  return (
    <>
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full border border-yellow-200">
            <h1 class="mb-8 text-3xl text-center">회원가입</h1>
            <form method="POST" onSubmit={onSubmit}>
              <input
                type="radio"
                id="userType"
                name="userType"
                value="MANAGER"
                onChange={onChangeHandler}
              />
              매니저
              <input
                type="radio"
                id="userType"
                name="userType"
                value="TEACHER"
                onChange={onChangeHandler}
              />
              강사
              {input_li?.map((el) => (
                <>
                  <h2>{el.label}</h2>
                  <input
                    type={el.type}
                    class="block border border-grey-light w-full p-3 rounded mb-4 text-center"
                    name={el.name}
                    onChange={(e) => onChangeHandler(e)}
                    placeholder={el.placeholder}
                  />
                  <p className="message"> {el.message} </p>
                </>
              ))}
              {/* 매니저 선택시 메뉴창 조회 */}
              {users.userType === "MANAGER" ? (
                <>
                  <h2>회사코드</h2>
                  <input
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4 text-center"
                    name="companyCode"
                    onChange={(e) => onChangeCode(e)}
                    placeholder="회사코드를 입력하세요."
                  />
                  <h2>{company.companyName}</h2>
                  <button type="button" onClick={onCheckCode}>
                    코드 확인
                  </button>
                  <h2>캠퍼스</h2>
                  {data?.map((el) => (
                    <label>
                      <input
                        type="checkbox"
                        name="campusList"
                        value={el}
                        onChange={(e) => onCampusListHandler(e)}
                        placeholder=""
                      />
                      {el}
                    </label>
                  ))}
                </>
              ) : null}
              <div className="flex flex-col items-center">
                <button
                  type="submit"
                  class="w-2/5 text-center py-3 rounded-lg text-black bg-yellow-200 focus:outline-none my-1"
                >
                  가입하기
                </button>
              </div>
            </form>
            <div class="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                class="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div class="text-grey-dark mt-6">
            Already have an account?
            <a
              class="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
