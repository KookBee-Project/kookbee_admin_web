import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/admin/adminSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { data, state, error } = useSelector((state) => state.admin);

  const [request, setRequest] = useState({
    userEmail: "",
    userPw: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setRequest({ ...request, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(request));
    navigate("/bootcamp");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex justify-center items-center h-1/2 w-4/12 min-w-20 min-h-30">
        <form
          onSubmit={onSubmit}
          className="flex justify-center items-center w-full h-full border-2 border-yellow-400 rounded-3xl"
        >
          <div className="flex flex-col w-9/12">
            <div className="text-center">
              <p className="text-2xl font-bold mb-10">로그인</p>
              <div className="text-left">
                <label htmlFor="userEmail" className="font-bold text-gray-500">
                  이메일
                </label>
                <input
                  id="userEmail"
                  className="border-2 border-gray-400 rounded-md w-full text-xl p-1 mb-5"
                  name="userEmail"
                  value={request.userEmail}
                  onChange={onChange}
                />
              </div>
              <div className="text-left">
                <label htmlFor="userPw" className="font-bold text-gray-500">
                  비밀번호
                </label>
                <input
                  id="userPw"
                  type="password"
                  className="border-2 border-gray-400 rounded-md w-full text-xl p-1 mb-10"
                  name="userPw"
                  value={request.userPw}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="flex text-center">
              <div className="w-1/2">
                <button
                  className="w-5/6 h-12 bg-yellow-400 border rounded-xl font-bold text-xl"
                  type="submit"
                >
                  로그인
                </button>
              </div>
              <Link to={"/signup"} className="w-1/2">
                <button
                  className="w-5/6 h-12 bg-yellow-400 border rounded-xl font-bold text-xl"
                  type="submit"
                >
                  회원가입
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
