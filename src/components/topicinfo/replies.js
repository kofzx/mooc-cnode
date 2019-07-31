import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image, RichText } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { myTimeToLocal } from '../../utils/date'
import './replies.less'

const isWeapp = process.env.TARO_ENV == "weapp";

class Replies extends Component {
    render () {
        let { replies } = this.props;
        return (
            <View className='topicinfo-replies'>
                {
                    replies.map((item, index) => {
                        return <View key={item.id} className='topicinfo-repliy'>
                            <Image className='topicinfo-repliy-image' src={item.author ? item.author.avatar_url : ''} />
                            <View className='topicinfo-repliy-right'>
                                <View className='topicinfo-repliy-right-body'>
                                    <View className='topicinfo-repliy-right-pie'>
                                        <Text className='loginname'>{item.author ? item.author.loginname : ''}</Text>
                                        <Text className='floor'>{(index + 1) + '楼'}</Text>
                                        <Text className='time'>{myTimeToLocal(item.create_at)}</Text>
                                    </View>
                                    <View className='topicinfo-repliy-right-content'>
                                        {
                                            isWeapp ? <RichText nodes={item.content} /> :
                                                <View dangerouslySetInnerHTML={{__html: item.content}} ></View>
                                        }
                                    </View>
                                </View>
                                <View className='topicinfo-repliy-right-zan'>
                                    <Image className='topicinfo-repliy-image' src={require('../../assets/images/zan-off.png')} />
                                    <Text>0</Text>
                                    <Image className='topicinfo-repliy-image' src={require('../../assets/images/share.png')} />
                                </View>
                            </View>
                        </View>
                    })
                }
            </View>
        )
    }
}
export default Replies;
