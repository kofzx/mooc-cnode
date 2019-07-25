import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { getTopicList } from "../../actions/topiclist"
import Topic from './topic'

@connect(function (store) {
    return {
        ...store.topiclist,
        currentCata: store.menu.currentCata
    }
}, function (dispatch) {
    return {
        getTopicList(params) {
            dispatch(getTopicList(params));
        }
    }
})
class TopicList extends Component {
    componentWillMount() {
        let { page, limit, currentCata } = this.props;
        this.props.getTopicList && this.props.getTopicList({
            page,
            limit,
            tab: currentCata.key
        });
    }

    render () {
        let { list } = this.props;
        return (
            <ScrollView>{
                list.map(item => <Topic item={item} />)
            }</ScrollView>
        )
    }
}
export default TopicList;
