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
export function getNextList(params) {
    return async dispatch => {
        let res = await getJSON(api.getTopics, params);
        if (res && res.data) {
            if (res.data.success) {
                if (res.data.data.length > 0) {
                    dispatch({ type: 'appendTopicList', list: res.data.data, page: params.page });
                }
            }
        }
    }
}
export function getTopicInfo(params) {
    return async dispatch => {
        let res = await getJSON(api.getTopicInfo + params.id, params);
        if (res && res.data && res.data.success) {
            dispatch({type: 'getTopicInfo', infoData: res.data.data});
        } else {
            console.error('请求话题详情失败！');
        }
    }
}
