import { ERROR } from "../constants/base";
import { POST_INFO } from "../constants/info";

const initState = {
  data: [],
  info: {},
  error: false,
  success: true
}
const infoReducers = (state=initState,payload)=>{
  switch(payload.type){
    case POST_INFO:
      return{
        ...state,
        success:true,
        error:false
      }
    default:
      return state;
  }
}
export default infoReducers;