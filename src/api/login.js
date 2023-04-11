import request from '@/utils/request'

// 登录方法
export function login(username, loginPassword, vCode, uuid) {
  const data = {
    username,
    loginPassword,
    vCode,
    uuid
  }
  return request({
    url: '/LogonController/logIn.do',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 注册方法
export function register(data) {
  return request({
    url: '/register',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

  // 获取用户详细信息
  export function getInfo() {
    return request({
      url: '/userController/getCurrentUser.do',
      method: 'post'
    })
}

// 退出方法
export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/validateController/getImage.do',
    headers: {
      isToken: false,
    
    },
    responseType:"blob",
    method: 'get',
    timeout: 20000
  })
}