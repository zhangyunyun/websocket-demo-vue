<template>
  <div class="home">
    <h2>服务端接收到的消息</h2>
    <div class="applyBox">
        
    </div>
    <br>
    <br>
    <h2>客户端向服务端发送消息：</h2>
    <div class="sendBox">
        <button @click="sendLG()">登录消息</button>
        <button @click="sendHT()">发送心跳</button>
        <br>
        <br>
        <input type="text" name="" v-model="sendValue">
        <button type="" @click="sendWS()">发送消息</button>
        <br>
        <br>
        <button @click="linkWS()">建立websocket连接</button>
        <button @click="closeWS()">关闭websocket连接</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, refs, reactive } from 'vue'
import { onMounted, onUnmounted} from 'vue'
import { watch, computed } from 'vue'
import { createWebSocket, closeWebsocket, sendSock } from '../websocket/websocket.js'
import { DeviceAuthReq } from '@/api/webSocketApi'

const WebSocketUrl = ref('wss://gsydweixin.com/scrm-chat/websocket') //线网websocket后台地址
// const WebSocketUrl = ref('ws://localhost:5000') //本地websocket后台地址
const sendValue = ref('')

onMounted(() => {
  // console.log(WebSocketUrl.value)
  createWebSocket(WebSocketUrl.value)
})

onUnmounted(() => {
  closeWebsocket()
})

//打开连接
const linkWS = () => {
  createWebSocket(WebSocketUrl.value)
}

//关闭连接
const closeWS = () => {
  closeWebsocket()
}

//发送登录信息
const sendLG = () => {
  //let message = sendValue.value
  //向后端服务器发送消息
  //sendSock(message)
  const loginName = '13893212101'
  DeviceAuthReq(loginName)
}

//发送心跳信息
const sendHT = () => {
   
}

//发送消息
const sendWS = () => {
  
}
</script>
