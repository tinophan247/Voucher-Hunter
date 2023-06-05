/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch} from "react-redux";
import TextFields from "../../../components/TextField";
import SingleSelect from "../../../components/SingleSelect";
import { Roles, defaultUser } from "../../../constant";
import {
  apiGetPublicDistricts,
  apiGetPublicProvinces,
  apiGetPublicWards,
} from "../../../services/api.address";
import {
  convertDataDistrict,
  convertDataProvince,
  convertDataWard,
} from "../../../utils/helper";
import { updateCustomer } from "../../../redux/authSlice";
import DatePickers from "../../../components/DatePicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditUser({ isShow, handleCloseModal, data }) {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState(defaultUser);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    setFormState({ ...data });
  }, [data]);

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

  const handleSubmitForm = (e) => {
    try {
      e.preventDefault();
      const newData = {
        id: formState.id,
        fullname: formState.fullname,
        email: formState.email,
        phone: formState.phone,
        province: formState.province,
        district: formState.district,
        ward: formState.ward,
        address: formState.address,
        birthday: formState.birthday,
        role: formState.role,
      };

      dispatch(updateCustomer(newData));
      console.log(newData)

      setTimeout(() => {
        window.location.reload(true);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal open={isShow}>
        <Box sx={style}>
          <form onSubmit={handleSubmitForm}>
            <div className="flex justify-between">
              <div />
              <div className="text-xl font-bold text-center">
                Sửa Thông Tin Người Dùng
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handleCloseModal()}
              >
                <CloseIcon />
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <div>
                <TextFields
                  label="Họ và Tên"
                  width="500px"
                  value={formState.fullname}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      fullname: event.target.value,
                    });
                  }}
                />
                <TextFields
                  label="Email"
                  width="500px"
                  value={formState.email}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      email: event.target.value,
                    });
                  }}
                />
                <TextFields
                  label="Số điện thoại"
                  width="500px"
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
                    width="240px"
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
                    width="240px"
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
                    width="240px"
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
                    width="240px"
                    value={formState.address}
                    onChange={(event) => {
                      setFormState({
                        ...formState,
                        address: event.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mt-3">
                  <DatePickers
                    width="500px"
                    label="Sinh nhật"
                    value={formState.birthday}
                    onChange={(event) => {
                      setFormState({
                        ...formState,
                        birthday: event,
                      });
                    }}
                  />
                </div>
                <SingleSelect
                  label="Phân Quyền"
                  width="500px"
                  options={Roles}
                  value={formState.role}
                  onChange={(event) => {
                    setFormState({
                      ...formState,
                      role: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="flex justify-end mt-10 gap-5">
              <button
                type="submit"
                className=" text-base font-bold bg-green-neon hover:bg-green-neon-hover w-32 h-10 rounded-lg  "
              >
                Lưu
              </button>
              <button
                onClick={() => handleCloseModal()}
                className=" text-base font-bold hover:bg-gray-200 w-32 h-10 rounded-lg border "
              >
                Hủy bỏ
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
