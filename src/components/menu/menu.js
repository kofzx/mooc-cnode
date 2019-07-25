import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtDrawer } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { showDrawer, hideDrawer, changeCata } from '../../actions/menu'
import './menu.less'

@connect(function (store) {
  return {...store.menu}
}, function (dispatch) {
  return {
      showMenu() {
          dispatch(showDrawer())
      },
      closeMenu() {
          dispatch(hideDrawer())
      },
      changeCata(cata) {
          dispatch(changeCata(cata))
      }
  }
})
class Menu extends Component {
    showDrawer() {
        this.props.showMenu && this.props.showMenu();
    }
    closeDrawer() {
        this.props.closeMenu && this.props.closeMenu();
    }
    getItems(cataData) {
        return cataData.map(item => item.value);
    }
    clickCata(index) {
        let { cataData, currentCata } = this.props;
        let clickCata = cataData[index];
        if (clickCata.key !== currentCata.key) {
            this.props.changeCata && this.props.changeCata(clickCata);
        }
    }
    render () {
        let { showDrawer, cataData } = this.props;
        let items = this.getItems(cataData);
        return (
            <View className='topiclist-menu'>
                <View style='position: absolute'>
                    <AtDrawer show={showDrawer} items={items} onItemClick={this.clickCata.bind(this)} onClose={this.closeDrawer.bind(this)} />
                </View>
                <Image className='image' src={require('../../assets/images/menu.png')} onClick={this.showDrawer.bind(this)} />
                <Text>{this.props.currentCata ? this.props.currentCata.value : ''}</Text>
                <Image className='image' src={require('../../assets/images/user.png')} />
            </View>
        )
    }
}
export default Menu;
