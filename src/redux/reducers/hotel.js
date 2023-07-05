import { ERROR } from "../constants/base";
import { GET_ALL } from "../constants/hotel";

const initState = {
  data: [],
  hotel: {},
  error: false,
  success: true
}
const hotelReducers = (state=initState,payload)=>{
  switch(payload.type){
    case GET_ALL:
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

export default hotelReducers;