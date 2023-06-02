/* eslint-disable import/no-anonymous-default-export */
import { ApiService } from "./api.services";

export class ApiStore extends ApiService {
  getListStore() {
    return this.get('stores');
  }

  createStore(value) {
    return this.post('stores',value);
  }

  updateStore(value) {
    return this.put(`stores/${value.id}`, value);
  }

  deleteStore(value) {
    return this.delete(`stores/${value.id}`, value);
  }
  
}
export default new ApiStore();