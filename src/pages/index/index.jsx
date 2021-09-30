import { Component } from "react";
import { View, Text, Switch } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.css";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {
    // console.log('准备发送请求')
    // Taro.request(
    //   "https://storage.360buyimg.com/dsl/00121675/2561110/bc5e3bc7a4fa70a617a76db157c623fb.json",
    //   {
    //     success: (res) => {
    //       console.log('statusCode:' + res.statusCode);
    //     },
    //     fail: (res) => {
    //       console.log('errormsg:' + res.errMsg);
    //     },
    //   }
    // );
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
          <Text>默认样式</Text>
          <Switch checked onChange={this.onChange}/>

          <Text>中文样式</Text>
          <Switch checked onChange={this.onChange} className="switch-demo2" showtext="true" texton="开启" textoff="关闭"/>

          <Text>Checkbox样式</Text>
          <Switch type="checkbox" onChange={this.onChange} />
      </View>
    );
  }

  onChange(e) {
    console.log("单选框变化" + e.detail.value);
  }
}
