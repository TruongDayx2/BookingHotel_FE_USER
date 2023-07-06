import axios from "axios";
import { ERROR } from "../constants/base";
import { GET_ROOM_HOTELID_ROOMTYPE } from "../constants/booking";

export const getRoomByHotelIdAndRoomType =(hotelId,rtId)=> async dispatch =>{
  try {
    const res = await axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_URL_USER,
      url: `room/hotel/${hotelId}/roomtype/${rtId}`,
      headers: {
          "Authorization": "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json" 
      }
  })
  if(res.status === 200){
    dispatch({
        type: GET_ROOM_HOTELID_ROOMTYPE,
        data: res.data
    })
}
else {
    dispatch({
        type: ERROR,
        data: null,
    })
}
} catch (error) {
dispatch({
    type: ERROR,
    data: null,
})
}
}

