/* 
  根据下发的消息类型
  分发接收到的消息 
*/
import previewHandle from './msgHandler/previewHandler'

export default function handler(e) {
    console.log(e.data)
    const msg = JSON.parse(e.data)
    const msgType = msg.msgType
        // const message = msg.message ? JSON.parse(msg.message) : null
        // const accessToken = msg.accessToken
        
    //消息处理
    switch (msgType) {
        //websocket server 登陆结果 ok
        case 'DeviceAuthRsp':
            previewHandle.deviceAuthRspHandle(msg)
            break;
    }
}