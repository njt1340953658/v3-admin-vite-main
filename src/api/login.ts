import { request } from '@/utils/service'

export interface ILoginData {
  /** admin 或 editor */
  username: 'admin' | 'editor'
  /** 密码 */
  password: string
  /** 验证码 */
  code: string
}

const api = {
  login: () => 'login/code',
  users: () => 'users/login',
  detail: () => 'users/info'
}

// 登录信息
export const loginApi = (params: Record<string, any>) => request(api.users(), params, 'post')

// 获取用户信息
export const getUserInfoApi = (params: Record<string, any>) => request(api.detail(), params, 'post')
