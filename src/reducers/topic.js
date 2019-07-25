const TOPIC_STATE = {
    page: 1,
    limit: 20,
    list: [],
};

export default function topiclist(preState = TOPIC_STATE, action) {
    switch (action.type) {
        case 'getTopicList':
            return {
                ...preState,
                list: action.list,
                page: 1
            };
        case 'appendTopicList':
            return {
                ...preState,
                list: preState.list.concat(action.list),
                page: action.page
            };
        default:
            return {...preState};
    }
}
