import { Component } from "react";
import { View, Text, Picker } from "@tarojs/components";
import "./index.css";

export default class Index extends Component {
  render() {
    return (
      <View className="block">
        <View className="inline-block">
          <Text>selector:</Text>
          <Picker
            className="picker"
            mode="selector"
            value={3}
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
            value={1}
            range={["1", "2", "3"]}
            onChange={this.onChange}
            onCancel={this.onCancel}
            disabled={true}
          ></Picker>
        </View>

        <View className="inline-block">
          <Text>selector RK:</Text>
          <Picker
            className="picker"
            mode="selector"
            value={1}
            range={[
              { id: 0, name: "小红" },
              { id: 1, name: "小明" },
              { id: 2, name: "小丽" },
            ]}
            rangeKey="name"
            onChange={this.onChange}
            onCancel={this.onCancel}
          ></Picker>
        </View>

        <View className="inline-block">
          <Text>multi:</Text>
          <Picker
            className="picker"
            mode="multiSelector"
            value={[0, 1, 1]}
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
          <Text>multi RK:</Text>
          <Picker
            className="picker"
            mode="multiSelector"
            value={[0, 1, 1]}
            range={[
              [{id:0,name:'A'},{id:1,name:'B'},{id:2,name:'C'}],
              [{id:0,name:'D'},{id:1,name:'E'}],
              [{id:0,name:'F'},{id:1,name:'G'},{id:2,name:'H'}]
            ]}
            rangeKey="name"
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

        <View className="inline-block">
          <Text>date:</Text>
          <Picker
            className="picker"
            mode="datetime"
            value={"2021-11-11-13-13"}
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
