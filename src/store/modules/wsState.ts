/* 
  websocket状态
*/
import { SET_WEB_SOCKET_STATE,SET_WEB_SOCKET_TOKEN } from '@/store/mutation-types'
const wsStore = {
 state:{
  webSocketState:0,  //websocket状态
  webSocketToken:localStorage.getItem('WEBSOCKET_TOKEN'), //wensocket_token获取登录后存储的token值
 },

 mutations:{
  SET_WEB_SOCKET_STATE(state:any, wsState:number) {
    state.webSocketState = wsState
  },
  SET_WEB_SOCKET_TOKEN(state:any, wsToken:string){
    state.webSocketToken = wsToken
  }
 },
 actions:{
   
 }
}
export default wsStore