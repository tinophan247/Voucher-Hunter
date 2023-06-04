/* eslint-disable import/no-anonymous-default-export */
import { ApiService } from "./api.services";

export class ApiPartnerGateWay extends ApiService {
  getListPartner() {
    return this.get('partners');
  }

  createPartner(value) {
    return this.post('partners',value);
  }

  updatePartner(value) {
    return this.put(`partners/${value.id}`, value);
  }

  deletePartner(value) {
    return this.delete(`partners/${value.id}`, value);
  }
  
}
export default new ApiPartnerGateWay();