import { request } from '@/utils/service'

export interface ILoginData {
  username: 'admin' | 'editor'
  password: string
  code: string
}

const api = {
  login: () => 'login/code',
  users: () => 'users/login',
  detail: () => 'users/info'
}

// 登录信息
export const loginApi = (params: ILoginData) => request(api.users(), params, 'post')

// 获取用户信息
export const getUserInfoApi = (params: Record<string, any>) => request(api.detail(), params, 'post')
