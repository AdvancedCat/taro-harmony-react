import { Component } from "react";
import { View, Text, Picker } from "@tarojs/components";
import "./index.css";

export default class Index extends Component {
  state = {
    textValue: "",
  };

  render() {
    return (
      <View className="block">
        <View className="inline-block">
          <Text>selector:</Text>
          <Picker
            className="pickertext"
            mode="selector"
            value="4"
            range={["1", "2", "3", "4"]}
            onChange={this.onChange}
            onCancel={this.onCancel}
          ></Picker>
        </View>

        <View className="inline-block">
          <Text>disabled:</Text>
          <Picker
            className="picker"
            mode="selector"
            value="2"
            range={["1", "2", "3"]}
            onChange={this.onChange}
            onCancel={this.onCancel}
            disabled={true}
          ></Picker>
        </View>

        <View className="inline-block">
          <Text>multi:</Text>
          <Picker
            className="picker"
            mode="multiSelector"
            value={["a", "e", "g"]}
            range={[
              ["a", "b", "c"],
              ["d", "e"],
              ["f", "g", "h"],
            ]}
            onChange={this.onChange}
            onCancel={this.onCancel}
            onColumnChange={this.onColumnChange}
          ></Picker>
        </View>

        <View className="inline-block">
          <Text>time:</Text>
          <Picker
            className="picker"
            mode="time"
            value={"12:30"}
            onChange={this.onChange}
            onCancel={this.onCancel}
          ></Picker>
        </View>

        <View className="inline-block">
          <Text>date:</Text>
          <Picker
            className="picker"
            mode="date"
            start="2018-6-25"
            end="2030-12-31"
            value={"2021-11-11"}
            onChange={this.onChange}
            onCancel={this.onCancel}
          ></Picker>
        </View>
      </View>
    );
  }

  onChange = (e) => {
    console.log("[picker] change  " + "e.detail: " + print(e.detail));
  };

  onColumnChange = (e) => {
    console.log("[picker] columnchange  " + "e.detail: " + print(e.detail));
  };

  onCancel = (e) => {
    console.log("[picker] cancel  " + "e.detail: " + print(e.detail));
  };
}

function print(obj) {
  if (!obj) return "null";
  return JSON.stringify(obj);
}
