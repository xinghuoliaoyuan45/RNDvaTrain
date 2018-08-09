import React, {Component} from 'react';
import {connect} from 'react-redux';
import colors from 'js/themes/colors';
import {View, Text,Dimensions,InteractionManager,TouchableOpacity} from 'react-native'
import HeadStatusBar from 'js/components/HeadStatusBar';
import {Container, Row} from 'native-base'
import {Toast} from 'antd-mobile';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DeviceInfo from 'react-native-device-info';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;



const REQ_TIMEOUT = 30000;

class Login extends Component {

  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      loginName: "",
      // loginName: "13521664632",
      password: "",
      loginIndex: 1,
      placeViewHeight: 0,
    };
  }

  componentWillMount() {
    this.startTimer = setTimeout(()=>{this.showLoginUI();},REQ_TIMEOUT);
    InteractionManager.runAfterInteractions(() => {
      this.autologin();
    });
  }
  autologin() {
    Toast.loading("加载中");
    this.props.logoutSuccess();
    GLOBAL.storage.load({
      key: 'userLoginInfo',
      autoSync: true,
      syncInBackground: true,
    }).then(ret => {
      // console.log("ret",ret);

      this.setState({loginName: ret.loginName, password: ""});
      if(ret.loginName && ret.password){
        // 自动登录时，需要隐藏登录表单
        this.props.saveLoginForm({
          showLoginUI: false
        });
        this.props.login({
          loginName: ret.loginName,
          password: ret.password,
          apptype: Platform.OS.toUpperCase(),
          nowVersion: DeviceInfo.getVersion(),
        });
      }else{ //如果没有获取到登录账号和密码， 则显示登录输入框
        this.showLoginUI();
      }
      return ret;
    }).catch(err => {
      this.showLoginUI();
    }).finally(()=>{
      this.finallyTimer = setTimeout(()=>{this.showLoginUI();},REQ_TIMEOUT);
    });
  }
  showLoginUI = () =>{
    Toast.hide();
    this.props.saveLoginForm({
      showLoginUI: true
    });
  };

  _renderImageTouch=()=>{
    return(
      <Row style={{height: 90, marginTop: deviceHeight / 2 - 190}}>
        <TouchableOpacity style={{flex: 1}} onPress={() => {
          this.setState({loginIndex: 1})
        }}/>
      </Row>
    )
  }
  render() {
    return (
      <Container style={{backgroundColor: colors.white}}>
        <HeadStatusBar/>
        <ScrollView
          ref={(scroll)=>this._scroll = scroll}
          contentContainerStyle={{backgroundColor: colors.white}}>
          <View>
            <Image style={{
              width: deviceWidth,
              height: deviceHeight/2-80,
              // resizeMode:'stretch',
            }} source={require('js/assets/images/login-bg-1.png')}>
              {this._renderImageTouch()}
            </Image>
            <View style={{width:deviceWidth,height:40,flexDirection:'row'}}>
              <View style={{flex:1}}>
                {this.state.loginIndex == 1 && (
                  <Image style={{alignSelf:'center',width:20,height:10}} source={require('js/assets/images/login-arrow-left.png')}>
                    {this._renderImageTouch()}
                  </Image>

                )}
              </View>
              <View style={{flex:1}}>
                {this.state.loginIndex == 2 && (
                  <Image style={{alignSelf:'center',width:20,height:10}} source={require('js/assets/images/login-arrow-right.png')}>
                    {this._renderImageTouch()}
                  </Image>
                )}
              </View>
            </View>
            {
              this.props.loginForm.showLoginUI && (
                <View>
                  <View style={styless.formItem}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <MCIcon name={'account-outline'} size={22} color={colors.primaryLight2} style={styless.loginIcon}/>
                      <TextInput underlineColorAndroid="transparent" autoCapitalize={"none"}
                                 ref={"name"} style={{...styless.textInputStyles, flex: 1}} placeholder="用户名/手机号"
                                 placeholderTextColor={colors.textLight}
                                 maxLength={30}
                                 defaultValue={this.state.loginName}
                                 onChangeText={(text) => {
                                   this.setState({loginName: text});
                                 }}/>
                    </View>
                    <View style={{height: 1, backgroundColor: colors.lightBorderColor}}/>
                  </View>
                  <View style={styless.formItem}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                      <MCIcon name={'lock-outline'} size={20} color={colors.primaryLight2} style={styless.loginIcon}/>
                      <TextInput underlineColorAndroid="transparent" autoCapitalize={"none"}
                                 ref={"password"} style={{...styless.textInputStyles, flex: 1}} placeholder="密码"
                                 placeholderTextColor={colors.textLight}
                                 maxLength={30}
                                 defaultValue={this.state.password}
                                 secureTextEntry={true}
                                 onChangeText={(text) => this.setState({password: text})}
                      />
                    </View>
                    <View style={{height: 1, backgroundColor: colors.lightBorderColor}}/>
                  </View>
                  <TouchableOpacity onPress={this.submitForm}>
                    <View
                      style={{...styless.loginButton}}>
                      <Text style={{fontSize: 20, color: colors.white}}>{"登录"}</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={()=> {this.props.navigation.navigate("FindPassWord")}}>
                    <View style = {{ alignItems: "center",justifyContent: "center",marginTop:20}}>
                      <Text style={{fontSize: 15, color: colors.placeHolderTextColor}}>{"忘记密码?"}</Text>
                    </View>
                  </TouchableOpacity>

                </View>
              )
            }

          </View>
          <View style={{height:300}}/>
        </ScrollView>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
)(Login);
