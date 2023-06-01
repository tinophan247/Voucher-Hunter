/* eslint-disable import/no-anonymous-default-export */
import { ApiService } from "./api.services";

export class ApiTypeOfStore extends ApiService {
  getListToS() {
    return this.get('typeOfStores');
  }

  createToS(value) {
    return this.post('typeOfStores',value);
  }

  updatToS(value) {
    return this.put(`typeOfStores/${value.id}`, value);
  }

  deleteToS(value) {
    return this.delete(`typeOfStores/${value.id}`, value);
  }
  
}
export default new ApiTypeOfStore();