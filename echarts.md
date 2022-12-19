### 在vue中使用时需将option里数据加入计算属性中

### 双环圆组件

```vue
<template>
  <v-chart class="chart" :option="option">
  </v-chart>
</template>

<script>
import 'echarts'
import VChart from 'vue-echarts'
export default {
  name: 'ChartHospital',
  title: '双环圆',
  components: {
    VChart
  },
  props: {
    value: {
      type: String,
      default: '78'
    },
    color: {
      type: String,
      default: '#FEB844'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    option () {
      return {
        title: {
          text: '{a|' + this.value + '}{c|%}',
          x: 'center',
          y: 'center',
          textStyle: {
            rich: {
              a: {
                fontSize: 20,
                color: this.color,
                fontWeight: 'bold'
              },
              c: {
                fontSize: 20,
                color: this.color,
                fontWeight: 'normal'
              }
            }
          }
        },
        series: [
          // 内环
          {
            name: '',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
              // console.log(params, 'params')
              // console.log(api.style(10), 'api1')
              return {
                type: 'arc',
                shape: {
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() / 2,
                  r: Math.min(api.getWidth(), api.getHeight()) / 2.3 * 0.65,
                  startAngle: (0 + -0) * Math.PI / 180,
                  endAngle: (360 + -0) * Math.PI / 180
                },
                style: {
                  stroke: '#5470c6',
                  fill: 'transparent',
                  lineWidth: 0.5
                },
                silent: true
              }
            },
            data: [0]
          },
          // 外环
          {
            name: '',
            type: 'pie',
            radius: ['85%', '70%'],
            silent: true,
            clockwise: true,
            startAngle: 90,
            z: 0,
            zlevel: 0,
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [
              {
                value: this.value,
                name: '',
                itemStyle: {
                  normal: {
                    // 外环发光
                    borderWidth: 0.5,
                    shadowBlur: 20,
                    borderColor: this.color,
                    shadowColor: this.color,
                    color: { // 圆环的颜色
                      colorStops: [{
                        offset: 0,
                        color: this.color // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: this.color // 100% 处的颜色
                      }]
                    }
                  }
                }
              },
              {
                value: 100 - this.value,
                name: '',
                label: {
                  normal: {
                    show: false
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#173164'
                  }
                }
              }
            ]
          }
        ]
      }
    }

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.chart {
  width: 100px;
  height: 100px;
}
</style>

```

### 环形圆组件

```vue
<template>
    <v-chart class="chart" :option="option">
    </v-chart>
</template>

<script>
import 'echarts'
import VChart from 'vue-echarts'

export default {
  name: 'CircularCircle',
  title: '环形圆',
  components: {
    VChart
  },
  props: {
    value: {
      type: String,
      default: '78'
    },
    subtext: {
      type: String,
      default: '默认'
    },
    color: {
      type: String,
      default: '#10B9F8'
    }
  },
  data () {
    return {
    }
  },
  computed: {
    option () {
      return {
        title: {
          text: this.value + '%',
          x: 'center',
          y: '22%',
          textStyle: {
            fontWeight: 'normal',
            color: '#0580f2',
            fontSize: '16'
          },
          subtext: this.subtext,
          subtextStyle: {
            fontSize: 12,
            color: '#525C7C'
          }
        },
        color: ['#e9edfc'],

        series: [{
          name: 'Line 1',
          type: 'pie',
          clockWise: true,
          radius: ['85%', '100%'],
          itemStyle: {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          },
          hoverAnimation: false,
          data: [{
            value: this.value,
            name: '01',
            itemStyle: {
              normal: {
                color: this.color,
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            }
          }, {
            name: '02',
            value: 100 - this.value,
            itemStyle: {
              normal: {
                color: '#041955'
              }
            }
          }]
        }]
      }
    }

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.chart {
    width: 68px;
    height: 68px;
}
</style>

```

### 柱状图

```vue
<template>
    <v-chart class="chart" :option="option">
    </v-chart>
</template>

<script>
import 'echarts'
import VChart from 'vue-echarts'

export default {
  name: 'Histogram',
  title: '柱状图',
  components: {
    VChart
  },
  // props: {
  //   value: {
  //     type: String,
  //     default: '78'
  //   },
  //   subtext: {
  //     type: String,
  //     default: '默认'
  //   },
  //   color: {
  //     type: String,
  //     default: '#10B9F8'
  //   }
  // },
  data () {
    return {
    }
  },
  computed: {
    option () {
      return {
        title: [
          {
            text: '单位：人',
            right: '0',
            top: '0',
            textStyle: {
              fontSize: 12,
              color: '#9d9d9d',
              fontWeight: 'lighter'
            }
          }],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '10%', //如果不写将无法充满空间
          left: '2%',
          right: '1%',
          bottom: '4%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['CT', 'MR', '伽马刀', 'PET-CT', 'PET-MR', '飞秒激光'],
            axisLabel: {  //解决空间过小字显示不全问题
              interval: 0,
              textStyle: {
                fontSize: '12'
              }
            },
            axisLine: {
              lineStyle: {
                fontSize: 12,
                color: '#5E6785' // 更改坐标轴颜色
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: true, //控制行列是否显示
              lineStyle: {
                color: '#323D63'
              }
            }
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '20',
            itemStyle: {
              normal: {
                color: function (params) {
                  var colorList = ['#10B9F8', '#FF6A6A', '#90ED7D', '#F7A35C', '#8085E9', '#920783']
                  return colorList[params.dataIndex]
                },
                label: {
                  show: true,
                  position: 'top',
                  formatter: '{c}',
                  textStyle: { // 数值样式
                    fontSize: 14,
                    color: 'auto'
                  }
                }
              }

            },
            data: [580, 420, 400, 280, 220, 170]
          }
        ]
      }
    }

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.chart {
    width: 315px;
    height: 160px;
}
</style>

```

### k线图

```vue
<template>
    <v-chart autoresize class="chart" :option="option">
    </v-chart>
</template>

<script>
import 'echarts'
import VChart from 'vue-echarts'
export default {
    name: 'Candlestick',
    title: 'k线图',
    components: {
        VChart
    },
    props: {
        value: {
            type: String,
            default: '78'
        },
        color: {
            type: String,
            default: '#FEB844'
        }
    },
    data() {
        return {
        }
    },
    computed: {
        option() {
            return {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: function (params) {
                        var tar = params[1];
                        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                    }
                },
                grid: {
                    top: '5%',
                    left: '2%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    splitLine: { show: false },
                    axisLabel: {
                        interval: 0,
                        textStyle: {
                            fontSize: '12'
                        },
                        axisLine: {
                            lineStyle: {
                                fontSize: 12,
                                color: '#5E6785' // 更改坐标轴颜色
                            }
                        }
                    },
                    data: ['总费用', '房租', '水电费', '交通费', '伙食费', '日用品数']
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        show: true, //控制行列是否显示
                        lineStyle: {
                            color: '#323D63'
                        }
                    }
                },
                series: [
                    {
                        name: '',
                        type: 'bar',
                        stack: '总量',
                        itemStyle: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        },
                        emphasis: {
                            itemStyle: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            }
                        },
                        data: [0, 100, 300, 500, 300, 400]
                    },
                    {
                        name: '生活费',
                        type: 'bar',
                        stack: '总量',
                        barWidth: 10,
                        itemStyle: {
                            color: '#658dff',
                            barBorderRadius: 6
                        },
                        data: [200, 300, 300, 600, 900, 1300]
                    }, {
                        name: "line",
                        type: "line",
                        lineStyle: {
                            color: "#215fa3",
                            width: 2
                        },
                        itemStyle: {
                            borderColor: "#215fa3"
                        },
                        data: [100, 250, 450, 800, 750, 1100]
                    }
                ]
            }
        }

    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style scoped lang="scss">
.chart {
    width: 330px;
    height: 157px;
}
</style>

```

