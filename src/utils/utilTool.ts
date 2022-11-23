import { useUserStoreHook } from '@/store/modules/user'

/** 全局权限判断函数，和指令 v-permission 功能类似 */
export const checkPermission = (value: string[]): boolean => {
  if (value && value instanceof Array && value.length > 0) {
    const roles = useUserStoreHook().roles
    const permissionRoles = value
    return roles.some((role) => {
      return permissionRoles.includes(role)
    })
  } else {
    console.error("need roles! Like v-permission=\"['admin','editor']\"")
    return false
  }
}

/** 将全局 CSS 导入 JS 中使用 没有拿到值时，会返回空串*/
export const getCssVariableValue = (cssVariableName: string) => {
  let cssVariableValue = ''
  try {
    cssVariableValue = getComputedStyle(document.documentElement).getPropertyValue(cssVariableName)
  } catch (error) {
    console.error(error)
  }
  return cssVariableValue
}

// 字符串拼接a=1&b=2
export const stringify = (obj: object) => {
  if (!obj) return false
  return Object.entries(obj)
    .map((item) => `${item[0]}=${item[1]}`)
    .join('&')
}
