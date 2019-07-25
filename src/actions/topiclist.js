import { getJSON, postJSON } from '../utils/request'
import api from '../constants/api'

export function getTopicList(params) {
    return async dispatch => {
        let res = await getJSON(api.getTopics, params);
        if (res && res.data) {
            if (res.data.success) {
                dispatch({ type: 'getTopicList', list: res.data.data });
            }
        }
    }
}
