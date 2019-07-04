import { createAction } from 'redux-actions'

export const APP_SIDER = 'APP_SIDER'
export const APP_SHOW_LOADING = 'APP_SHOW_LOADING'
export const APP_CLOSE_LOADING = 'APP_CLOSE_LOADING'

// 显示/隐藏顶层loading bar
export const showLoadingBar = createAction(APP_SHOW_LOADING)

export const closeLoadingBar = createAction(APP_CLOSE_LOADING)

//  设置菜单
export const setSider = createAction(APP_SIDER, params => params)
