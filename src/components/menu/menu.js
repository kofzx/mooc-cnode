import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './menu.less'

class Menu extends Component {
    render () {
        return (
            <View className='topiclist-menu'>
                <Image className='image' src={require('../../assets/images/menu.png')}></Image>
                <Text>全部</Text>
                <Image className='image' src={require('../../assets/images/user.png')}></Image>
            </View>
        )
    }
}
export default Menu;