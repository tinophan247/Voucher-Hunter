/* eslint-disable import/no-anonymous-default-export */
import { ApiService } from "./api.services";

export class ApiVoucher extends ApiService {
  getListVoucher() {
    return this.get('vouchers');
  }

  createVoucher(value) {
    return this.post('vouchers',value);
  }

  updateVoucher(value) {
    return this.put(`vouchers/${value.id}`, value);
  }

  deleteVoucher(value) {
    return this.delete(`vouchers/${value.id}`, value);
  }
  
}
export default new ApiVoucher();