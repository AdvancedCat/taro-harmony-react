import { Component } from "react";
import {
  View,
  Text,
  PickerView,
  PickerViewColumn,
  ScrollView,
} from "@tarojs/components";
import "./index.css";

export default class Index extends Component {
  render() {
    return (
      <ScrollView
        scrollY
        scrollTop={0}
        style={{
          height: "800px",
        }}
      >
        <View className="pv-inline-block">
          <Text>text range:</Text>
          <PickerView
            className="pv-pickerview"
            mode="selector"
            value={3}
            range={["1", "2", "3", "4"]}
            indicatorprefix="第"
            indicatorsuffix="个"
            onChange={this.onChange}
          ></PickerView>
        </View>

        <View className="pv-inline-block">
          <Text>text cn:</Text>
          <PickerView
            className="pv-pickerview"
            value={1}
            onChange={this.onChange}
            indicatorprefix="第"
            indicatorsuffix="个"
          >
            <View>
              <Text>无效参数</Text>
            </View>
            <PickerViewColumn>
              <View>
                <Text>1</Text>
              </View>
              <View>
                <Text>2</Text>
              </View>
              <View>
                <Text>3</Text>
              </View>
              <View>
                <Text>4</Text>
              </View>
            </PickerViewColumn>
          </PickerView>
        </View>

        <View className="pv-inline-block">
          <Text>multi-text cn:</Text>
          <PickerView
            className="pv-pickerview"
            value={[0, 1, 1]}
            onChange={this.onChange}
            onColumnChange={this.onColumnChange}
          >
            <PickerViewColumn>
              <View>
                <Text className="candidate">a</Text>
              </View>
              <View>
                <Text>b</Text>
              </View>
              <View>
                <Text>c</Text>
              </View>
            </PickerViewColumn>
            <PickerViewColumn>
              <View>
                <Text>d</Text>
              </View>
              <View>
                <Text>e</Text>
              </View>
            </PickerViewColumn>
            <PickerViewColumn>
              <View>
                <Text>f</Text>
              </View>
              <View>
                <Text>g</Text>
              </View>
              <View>
                <Text>h</Text>
              </View>
            </PickerViewColumn>
          </PickerView>
        </View>

        <View className="pv-inline-block">
          <Text>multi range:</Text>
          <PickerView
            className="pv-pickerview"
            value={[0, 1, 1]}
            range={[
              ["a", "b", "c"],
              ["d", "e"],
              ["f", "g", "h"],
            ]}
            onChange={this.onChange}
            onColumnChange={this.onColumnChange}
          ></PickerView>
        </View>

        <View className="pv-inline-block">
          <Text>time:</Text>
          <PickerView
            className="pv-pickerview"
            mode="time"
            value={"12:30"}
            onChange={this.onChange}
          ></PickerView>
        </View>

        <View className="pv-inline-block">
          <Text>time(秒):</Text>
          <PickerView
            className="pv-pickerview"
            mode="time"
            value={"12:30:45"}
            containsecond={true}
            onChange={this.onChange}
          ></PickerView>
        </View>

        <View className="pv-inline-block">
          <Text>date:</Text>
          <PickerView
            className="pv-pickerview"
            mode="date"
            start="2018-6-25"
            end="2030-12-31"
            value={"2021-11-11"}
            onChange={this.onChange}
          ></PickerView>
        </View>

        <View className="pv-inline-block">
          <Text>date:</Text>
          <PickerView
            className="pv-pickerview"
            mode="datetime"
            value={"2021-11-11-13-13"}
            onChange={this.onChange}
          ></PickerView>
        </View>
      </ScrollView>
    );
  }

  onChange = (e) => {
    console.log("[picker-view] change  " + "e.detail: " + print(e.detail));
  };

  onColumnChange = (e) => {
    console.log(
      "[picker-view] columnchange  " + "e.detail: " + print(e.detail)
    );
  };
}

function print(obj) {
  if (!obj) return "null";
  return JSON.stringify(obj);
}
