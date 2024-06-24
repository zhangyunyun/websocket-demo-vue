/* 
   websocket发送消息接口函数
*/
import { sendSock } from '@/websocket/websocket'
import base64 from '@/hooks/base64.js'
/**
 * 备(手机客户端、客服客户端)获取通信token请求
 * 回调 DeviceAuthRsp
 * @param {String} userName 用户名
 * @param {String} password 密码
 */

export function DeviceAuthReq(loginName){
  const msg = {
    "Id": 1010,
    "AccessToken": "",
    "MsgType": "DeviceAuthReq",
    "Content": {
      "Credential": base64.encode(loginName),
      "AuthType": 2
    }
  }

  //发送信息
  sendSock(msg)
}

/* 
  向服务端发送心跳
*/
