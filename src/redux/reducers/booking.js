import { ERROR } from "../constants/base";
import { GET_ROOM_HOTELID_ROOMTYPE } from "../constants/booking"; 

const initState = {
  data: [],
  room: {},
  error: false,
  success: true
}
const roomReducers = (state=initState,payload)=>{
  switch(payload.type){
    case GET_ROOM_HOTELID_ROOMTYPE:
      return{
        ...state,
        data:payload.data,
        success:true,
        error:false
      }
    default:
      return state;
  }
}
export default roomReducers;