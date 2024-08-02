import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  loadingData: boolean;
  chartHidden: boolean;
  chartOptions;
  mergeOptions;
  initOpts = {
    height: 400
  };
  constructor() {
    this.chartOptions = {
      tooltip: {
        trigger: "axis"
      },
      dataset: {
        dimensions: ["date", "value"],
        source: []
      },
      xAxis: {
        type: "time"
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "Ratings",
          type: "line",
          connectNulls: true,
          symbolSize: 5,
          dimensions: ["date", "value"]
        }
      ],
      dataZoom: [
        {
          type: "inside"
        },
        {
          // For slider zoom
        }
      ]
    };
  }

  onChartInit() {}

  loadData1() {
    this.mergeOptions = {
      dataset: {
        source: [
          {
            date: "2018/4/20",
            value: 3
          },
          {
            date: "2018/5/19",
            value: 3
          },
          {
            date: "2018/6/20",
            value: 3
          },
          {
            date: "2018/7/11",
            value: 3
          },
          {
            date: "2018/8/29",
            value: 5
          },
          {
            date: "2018/9/21",
            value: 6
          },
          {
            date: "2018/10/14",
            value: 6
          },
          {
            date: "2018/11/14",
            value: 6
          },
          {
            date: "2018/12/14",
            value: 12
          },
          {
            date: "2019/1/31",
            value: 12
          },
          {
            date: "2019/2/14",
            value: 12
          },
          {
            date: "2019/3/18",
            value: 12
          },
          {
            date: "2019/4/18",
            value: 12
          },
          {
            date: "2019/5/22",
            value: 12
          },
          {
            date: "2019/6/13",
            value: 12
          },
          {
            date: "2019/7/13",
            value: 12
          },
          {
            date: "2019/8/23",
            value: 12
          },
          {
            date: "2019/9/13",
            value: 0
          },
          {
            date: "2019/9/18",
            value: 12
          }
        ]
      },
      dataZoom: [
        {
          type: "inside",
          startValue: "2018/4/20",
          endValue: "2019/9/18"
        }
      ]
    };
  }

  loadData2() {
    this.mergeOptions = {
      dataset: {
        source: [
          {
            date: "2018/8/29",
            value: 2
          },
          {
            date: "2018/9/21",
            value: 57
          },
          {
            date: "2018/10/14",
            value: 35
          },
          {
            date: "2018/11/14",
            value: 41
          },
          {
            date: "2018/12/14",
            value: 43
          },
          {
            date: "2019/1/31",
            value: 49
          },
          {
            date: "2019/2/14",
            value: 50
          },
          {
            date: "2019/3/18",
            value: 51
          },
          {
            date: "2019/4/18",
            value: 51
          },
          {
            date: "2019/5/22",
            value: 57
          },
          {
            date: "2019/6/13",
            value: 62
          },
          {
            date: "2019/7/13",
            value: 63
          },
          {
            date: "2019/8/23",
            value: 74
          },
          {
            date: "2019/9/13",
            value: 0
          },
          {
            date: "2019/9/18",
            value: 78
          },
          {
            date: "2019/10/16",
            value: 80
          }
        ]
      },
      dataZoom: [
        {
          type: "inside",
          startValue: "2018/8/29",
          endValue: "2019/10/16"
        }
      ]
    };
  }

  changeTimeRange1() {
    this.mergeOptions = {
      dataZoom: []
    };
    this.mergeOptions = {
      dataZoom: [
        {
          type: "inside",
          startValue: "2018/12/31",
          endValue: "2019/9/18"
        }
      ]
    };
  }
  changeTimeRange2() {
    this.mergeOptions = {
      dataZoom: []
    };
    this.mergeOptions = {
      dataZoom: [
        {
          type: "inside",
          startValue: "2018/12/31",
          endValue: "2019/10/16"
        }
      ]
    };
  }
}
