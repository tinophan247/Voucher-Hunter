/* eslint-disable import/no-anonymous-default-export */
import { ApiService } from "./api.services";

export class ApiAuthGateWay extends ApiService {
  register(payload) {
    return this.post('customers/register', payload);
  }

  getAllCustomer() {
    return this.get(`customers/`);
  }

  updateCustomer(value) {
    return this.put(`customers/${value.id}`, value);
  }

  deleteCustomer(value) {
    return this.delete(`customers/${value.id}`, value);
  }

  login(payload) {
    return this.post(`customers/login`, payload);
  };
}
export default new ApiAuthGateWay();