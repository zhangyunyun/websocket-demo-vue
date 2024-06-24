import store from '@/store'

/* 
  登录成功 ok
  获取到用户信息，token信息，将信息存储到本地localStorage中
*/
function deviceAuthRspHandle(message) {
    console.log(message)
    const wsToken = message.accessToken
    store.commit('SET_WEB_SOCKET_TOKEN', wsToken)
    localStorage.setItem('WEBSOCKET_TOKEN', wsToken)
}

export default {
    deviceAuthRspHandle
}