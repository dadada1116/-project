import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import defAva from '@/assets/images/profile.jpg'
const useUserStore = defineStore(
  'user',
  {
    state: () => ({
      isLogin: false,
      name: '',
      avatar: '',
      roles: [],
      permissions: [],
      userInfo:{}
    }),
    actions: {
      // 登录
      login(userInfo) {

        const username = userInfo.username.trim()
        const loginPassword = userInfo.password
        const vCode = userInfo.code
        const uuid = userInfo.uuid
        return new Promise((resolve, reject) => {
          login(username, loginPassword, vCode, uuid).then(res => {
            if (res.success) {
              this.isLogin = true
              resolve()
            } else {
              this.isLogin = false
              reject("用户名或者密码错误")
            }

          }).catch(error => {
            this.isLogin = false
            reject(error)
          })
        })
      },
      // 获取用户信息
      getInfo() {
        return new Promise((resolve, reject) => {
          getInfo().then(res => {
            this.userInfo =res
            this.name = res.userName
            // this.avatar = avatar;
            // 没头像
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      // 退出系统
      logOut() {
        return new Promise((resolve, reject) => {

          // logout(this.token).then(() => {
          //   this.token = ''
          //   this.roles = []
          //   this.permissions = []
          //   removeToken()
            resolve()
          // }).catch(error => {
          //   reject(error)
          // })
        })
      }
    }
  })

export default useUserStore
