import { sinhVienServ } from "../../sinhVienServ/sinhVienSer";
import {
  ADD_SV,
  DELETE_SV,
  EDIT_SV,
  GET_DANH_SACH_SV,
  SET_DANH_SACH_SV,
  UPDATE_SV,
} from "../constant/quanLySvConstant";

const initialState = {
  dssv: [],
  editSV: null,
};
const callAPI = (type, _id, _data) => {
  switch (type) {
    case ADD_SV: {
      sinhVienServ
        .themSinhVien(_data)
        .then(() => {
          alert("Thêm Sinh Viên thành công");
          // console.log("Thêm sv thành công");
        })
        .catch((err) => {
          // console.log(err);
          alert("Thêm Sinh Viên thất bại ", err);
        });
      return;
    }
    case DELETE_SV: {
      sinhVienServ
        .xoaSinhVien(_id)
        .then(() => {
          // console.log("Xóa sv thành công");
          alert("Xóa Sinh Viên thành công");
        })
        .catch((err) => {
          // console.log(err);
          alert("Xóa Sinh Viên thất bại ", err);
        });
      return;
    }
    case UPDATE_SV: {
      sinhVienServ
        .capNhatSinhVien(_id, _data)
        .then(() => {
          // console.log("Cập nhật Sinh Viên thành công");
          alert("Cập nhật Sinh Viên thành công");
        })
        .catch((err) => {
          // console.log(err);
          alert("Cập nhật Sinh Viên thất bại ", err);
        });
      return;
    }
  }
};

export const quanLySvReducer = (state = initialState, { type, payload }) => {
  let cloneDssv = [...state.dssv];
  switch (type) {
    case SET_DANH_SACH_SV:
      state.dssv = payload;
      return { ...state };
    case ADD_SV: {
      if (payload.id.trim() === "") {
        alert("Id cannot empty");
        return { ...state };
      }
      cloneDssv = [...cloneDssv, payload];
      callAPI(ADD_SV, payload.id, payload);
      return { ...state, dssv: cloneDssv };
    }
    case DELETE_SV: {
      let index = cloneDssv.findIndex((sv) => sv.id === payload);
      if (index !== -1) {
        cloneDssv = cloneDssv.filter((sv) => sv.id !== payload);
        callAPI(DELETE_SV, payload, null);
      }

      return { ...state, dssv: cloneDssv };
    }
    case EDIT_SV: {
      state.editSV = payload;
      return { ...state };
    }
    case UPDATE_SV: {
      let index = cloneDssv.findIndex((sv) => sv.id === payload.id);
      if (index !== -1) {
        cloneDssv[index] = payload;
        callAPI(UPDATE_SV, payload.id, payload);
      }
      return { ...state, dssv: cloneDssv };
    }
    default:
      return { ...state };
  }
};
