import React, { useEffect, useState } from "react";
import TextFields from "../../components/TextField";
import TextFieldPassword from "../../components/TextFieldPassword";
import { useDispatch, useSelector } from "react-redux";
import { authActions, register } from "../../redux/authSlice";
import { Link } from "react-router-dom";
import SingleSelect from "../../components/SingleSelect";
import DatePickers from "../../components/DatePicker";
import {
  apiGetPublicDistricts,
  apiGetPublicProvinces,
  apiGetPublicWards,
} from "../../services/api.address";
import Notification from "../../components/Notification/index";
import Loader from "../../components/Loader";

const Register = () => {
  const dispatch = useDispatch();
  const { message, isSuccess ,isLoading} = useSelector((state) => state.auth);
  const [formState, setFormState] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    address: "",
    ward: 0,
    district: 0,
    province: 0,
    birthday: null,
    password: "",
  });
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [reTypePass, setReTypePass] = useState("");

  const convertDataProvince = (array) => {
    const ProvinceList = array.map((item) => ({
      value: item.province_id,
      label: item.province_name,
    }));
    return ProvinceList;
  };

  const convertDataDistrict = (array) => {
    const DistrictList = array.map((item) => ({
      value: item.district_id,
      label: item.district_name,
    }));
    return DistrictList;
  };

  const convertDataWard = (array) => {
    const WardList = array.map((item) => ({
      value: item.ward_id,
      label: item.ward_name,
    }));
    return WardList;
  };

  const handleCheckingPass = () => {
    if (reTypePass !== "") {
      if (reTypePass !== formState.password){
        return <p className="text-red-500 text-base">Mật khẩu không trùng khớp</p>
      }
    }
  };

  const handleDestroyErr = () => {
    dispatch(authActions.destroyerror());
  };


  const handleSubmitForm = (e) => {
    if (e) {
      e.preventDefault();
    }
    const newData = {
      fullname: formState.fullname,
      username: formState.username,
      email: formState.email,
      phone: formState.phone,
      address: formState.address,
      ward: formState.ward,
      district: formState.district,
      province: formState.province,
      birthday: formState.birthday,
      password: formState.password,
    };

    dispatch(register(newData));
  };

  useEffect(() => {
    const fetchPublicProvince = async () => {
      const response = await apiGetPublicProvinces();
      if (response.status === 200) {
        setProvinces(response?.data.results);
      }
    };
    fetchPublicProvince();
  }, []);

  useEffect(() => {
    const fetchPublicDistrict = async () => {
      const response = await apiGetPublicDistricts(formState.province);
      if (response.status === 200) {
        setDistricts(response?.data.results);
      }
    };
    formState.province && fetchPublicDistrict(formState.province);
  }, [formState.province]);

  useEffect(() => {
    const fetchPublicWard = async () => {
      const response = await apiGetPublicWards(formState.district);
      if (response.status === 200) {
        setWards(response?.data.results);
      }
    };
    formState.district && fetchPublicWard(formState.district);
  }, [formState.district]);

  if(isSuccess){
    setTimeout(() => {
      window.location.href = '/login'
    },1000)
  }

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
            Đăng ký
          </p>
        </div>
        <div className="w-40" />
      </div>
      <div className=" h-[800px] bg-[#578e44] mt-10">
      {isLoading && (
            <div className=" absolute w-full h-screen bg-black opacity-30 flex justify-center items-center">
              <Loader />
            </div>
          )}
        <div className="w-full flex justify-around">
          <img src="./img/Banner.png" alt="not-found" className="mt-10" />
          <form className="flex items-center mt-10" onSubmit={handleSubmitForm}>
            <div className="bg-white rounded-lg w-[520px] h-[700px]">
              <p className="flex justify-center mt-3 font-semibold text-2xl ">
                Tạo Tài Khoản
              </p>
              <div className="flex justify-center">
                <div>
                  <TextFields
                    label="Họ và tên"
                    width="450px"
                    value={formState.fullname}
                    onChange={(event) => {
                      setFormState({
                        ...formState,
                        fullname: event.target.value,
                      });
                    }}
                  />
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
                  <TextFields
                    label="Số điện thoại"
                    width="450px"
                    type="phone"
                    value={formState.phone}
                    onChange={(event) => {
                      setFormState({
                        ...formState,
                        phone: event.target.value,
                      });
                    }}
                  />
                  <div className="flex justify-between items-center">
                    <SingleSelect
                      label="Tỉnh/Thành phố"
                      width="200px"
                      options={convertDataProvince(provinces)}
                      value={formState.province}
                      onChange={(event) => {
                        setFormState({
                          ...formState,
                          province: event.target.value,
                        });
                      }}
                    />
                    <SingleSelect
                      label="Quận/Huyện"
                      width="200px"
                      options={convertDataDistrict(districts)}
                      value={formState.district}
                      onChange={(event) => {
                        setFormState({
                          ...formState,
                          district: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <SingleSelect
                      label="Phường/Xã"
                      width="200px"
                      options={convertDataWard(wards)}
                      value={formState.ward}
                      onChange={(event) => {
                        setFormState({
                          ...formState,
                          ward: event.target.value,
                        });
                      }}
                    />
                    <TextFields
                      label="Địa chỉ"
                      width="200px"
                      value={formState.address}
                      onChange={(event) => {
                        setFormState({
                          ...formState,
                          address: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <TextFields
                    label="Email"
                    width="450px"
                    type="email"
                    value={formState.email}
                    onChange={(event) => {
                      setFormState({
                        ...formState,
                        email: event.target.value,
                      });
                    }}
                  />
                  <div className="mt-3">
                    <DatePickers
                      value={formState.birthday}
                      onChange={(event) => {
                        setFormState({
                          ...formState,
                          birthday: event,
                        });
                      }}
                    />
                  </div>
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
                  <TextFieldPassword
                    label="Nhập lại mật Khẩu"
                    width="450px"
                    type="password"
                    value={reTypePass}
                    onChange={(event) => {
                      setReTypePass(event.target.value);
                    }}
                  />
                  {handleCheckingPass()}
                  <button
                    type="submit"
                    className="uppercase w-[450px] h-10 mt-10 bg-[#578e44] text-white rounded-md"
                  >
                    Đăng Ký
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {isSuccess && (
        <Notification
          show={isSuccess}
          message={message}
          type={"success"}
          handleDestroyErr={handleDestroyErr}
        />
      )}
    </div>
  );
};

export default Register;
