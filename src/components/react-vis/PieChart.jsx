import React, { Component } from "react";
import { render } from "react-dom";
import { VictoryPie } from "victory";
import {VictoryBar, VictoryChart, VictoryAxis} from 'victory';

const data = [
  {group: 1, number: 61},
  {group: 2, number: 99}
];
class PieChart extends Component {
  render() {
    return  <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
      >
        <VictoryAxis

          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
  }
}
export default PieChart;
