import api from 'src/utils/api'
import { createAction } from 'redux-actions'

export const APP_OAUTH_USER = 'APP_OAUTH_USER'

export const oauthUser = createAction(APP_OAUTH_USER, params =>
	api.get('/oauth/user', params),
)
