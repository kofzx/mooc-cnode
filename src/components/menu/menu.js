import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { showDrawer } from '../../actions/menu'
import './menu.less'

@connect(function (store) {
  return {...store.menu}
}, function (dispatch) {
  return {showMenu() {
    dispatch(showDrawer())
  }}
})
class Menu extends Component {
    showDrawer() {
      this.props.showMenu && this.props.showMenu();
    }
    render () {
        return (
            <View className='topiclist-menu'>
                <Image className='image' src={require('../../assets/images/menu.png')} onClick={this.showDrawer.bind(this)}></Image>
                <Text>{this.props.currentCata ? this.props.currentCata.value : ''}</Text>
                <Image className='image' src={require('../../assets/images/user.png')}></Image>
            </View>
        )
    }
}
export default Menu;
