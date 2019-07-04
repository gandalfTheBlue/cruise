import api from 'src/utils/api'
import { createAction } from 'redux-actions'

export const LOGIN_LOGIN = 'LOGIN_LOGIN'

export const login = createAction(LOGIN_LOGIN, params =>
	api.post('/login', params),
)
