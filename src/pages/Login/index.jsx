import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import TextFields from "../../components/TextField";
import TextFieldPassword from "../../components/TextFieldPassword";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/authSlice";
import Loader from "../../components/Loader";

const Login = () => {
  const dispatch = useDispatch();
  const {isLoggedIn, isLoading} = useSelector((state) => state.auth);
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const handleSubmitForm = (e) => {
    if (e) {
      e.preventDefault();
    }
    const newData = {
      username: formState.username,
      password: formState.password,
    };

    dispatch(login(newData));
  };

  return (
    <div className="w-full mt-10">
      <div className="w-full flex justify-around bg-white">
        <div className="flex">
          <Link
            to="/"
            className="uppercase font-bold text-3xl flex items-center"
          >
            Voucher Hunter
          </Link>
          <p className="flex items-center text-2xl font-medium  ml-20">
            Đăng nhập
          </p>
        </div>
        <div className="w-40" />
      </div>
      <div className=" h-[650px] bg-[#578e44] mt-10">
        {isLoading && (
          <div className=" absolute w-full h-screen bg-black opacity-30 flex justify-center items-center">
            <Loader />
          </div>
        )}
        <div className="w-full flex justify-around">
          <img src="./img/Banner.png" alt="not-found" className="mt-10" />
          <form className="flex items-center mt-10" onSubmit={handleSubmitForm}>
            <div className="bg-white rounded-lg w-[520px] h-[520px]">
              <p className="flex justify-center mt-3 font-semibold text-2xl ">
                Đăng nhập
              </p>
              <div className="flex justify-center">
                <div>
                  <TextFields
                    label="Tên đăng nhập"
                    width="450px"
                    value={formState.username}
                    onChange={(event) => {
                      setFormState({
                        ...formState,
                        username: event.target.value,
                      });
                    }}
                  />
                  <TextFieldPassword
                    label="Mật Khẩu"
                    width="450px"
                    type="password"
                    value={formState.password}
                    onChange={(event) => {
                      setFormState({
                        ...formState,
                        password: event.target.value,
                      });
                    }}
                  />
                  <button
                    type="submit"
                    className="uppercase w-[450px] h-10 mt-10 bg-[#578e44] text-white rounded-md"
                  >
                    Đăng nhập
                  </button>
                </div>
              </div>
            </div>
            {isLoggedIn && <Navigate to='/' replace />}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
