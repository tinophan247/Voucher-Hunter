/* eslint-disable import/no-anonymous-default-export */
import { ApiService } from "./api.services";

export class ApiEvent extends ApiService {
  getListEvent() {
    return this.get('events');
  }

  createEvent(value) {
    return this.post('events',value);
  }

  updateEvent(value) {
    return this.put(`events/${value.id}`, value);
  }

  deleteEvent(value) {
    return this.delete(`events/${value.id}`, value);
  }
  
}
export default new ApiEvent();