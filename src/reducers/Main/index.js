import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import {
	MANAGE_USER_FILTER,
	MANAGE_UPDATE_USER_FILTER,
} from 'actions/Main/index'

const userInfo = handleActions(
	{
		[MANAGE_USER_FILTER]: (state, { payload }) => payload,
		[MANAGE_UPDATE_USER_FILTER]: (state, { payload }) => {
			let data = state.data.map(item => {
				return item.id === payload.id
					? {
						...item,
						statusFk: payload.statusFk,
					  }
					: item
			})
			return Object.assign({}, state, {
				data,
			})
		},
	},
	null,
)

export default combineReducers({
	userInfo,
})
