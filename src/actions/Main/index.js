import api from 'src/utils/api'
import { createAction } from 'redux-actions'

export const MANAGE_USER_FILTER = 'MANAGE_USER_FILTER'
export const MANAGE_ADD_USER = 'MANAGE_ADD_USER'
export const MANAGE_MODIFY_USER = 'MANAGE_MODIFY_USER'
export const MANAGE_DELETE_USER = 'MANAGE_DELETE_USER'
export const MANAGE_USER_PWD = 'MANAGE_USER_PWD'
export const MANAGE_USER_STATUS = 'MANAGE_USER_STATUS'
export const MANAGE_USER_SELF_PWD = 'MANAGE_USER_SELF_PWD'
export const MANAGE_UPDATE_USER_FILTER = 'MANAGE_UPDATE_USER_FILTER'

/**
 * 用户查询
 * starttime
 * endtime
 * status
 * limit
 * offset
 * filtervalue
 * orderby: dateOfLastLogin date_create account name cellphone email
 * ASC DESC
 * */
export const userGetFilter = createAction(MANAGE_USER_FILTER, params =>
	api.get('/users/filter', params),
)

export const userFilter = createAction(MANAGE_USER_FILTER, params =>
	api.post('/users/filter', params),
)

export const updateUser = createAction(
	MANAGE_UPDATE_USER_FILTER,
	params => params,
)

//  用户添加
export const addUser = createAction(MANAGE_ADD_USER, params =>
	api.post('/user', params),
)

//  用户修改
export const modifyUser = createAction(MANAGE_MODIFY_USER, params =>
	api.put('/user', params),
)

//  用户删除
export const deleteUser = createAction(MANAGE_DELETE_USER, params =>
	api.delete(`/users/${params}`),
)

/**
 * 重置密码
 * id
 * newpass
 */
export const userPwd = createAction(MANAGE_USER_PWD, params =>
	api.patch('/user/pwd', params),
)

/**
 * 更改状态
 * id
 * status (DISABLED、ENABLED、LOCKED)
 * */
export const userStatus = createAction(MANAGE_USER_STATUS, params =>
	api.patch('/user/status', params),
)

/**
 * 修改密码
 * oldpass
 * newpass
 */
export const userSelfPwd = createAction(MANAGE_USER_SELF_PWD, params =>
	api.patch('/user/self/pwd', params),
)
