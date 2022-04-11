import axios from "axios";

const BASE_URL = "https://620e4f3d585fbc3359dda8e8.mockapi.io/sv";
export const sinhVienServ = {
  layDanhSinhVien: () => {
    return axios({
      method: "GET",
      url: BASE_URL,
    });
  },
  themSinhVien: (_data) => {
    return axios({
      method: "POST",
      url: BASE_URL,
      data: _data,
    });
  },
  xoaSinhVien: (_id) => {
    return axios({
      method: "DELETE",
      url: `${BASE_URL}/${_id}`,
    });
  },
  capNhatSinhVien: (_id, _data) => {
    return axios({
      method: "PUT",
      url: `${BASE_URL}/${_id}`,
      data: _data,
    });
  },
};
