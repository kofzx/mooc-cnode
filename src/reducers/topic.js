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
                list: action.list
            };
        default:
            return {...preState};
    }
}
