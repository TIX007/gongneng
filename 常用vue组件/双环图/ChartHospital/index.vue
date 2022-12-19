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
      type: Number,
      default: 78
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
      let _that = this
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
              // console.log(_that.color, 'params')
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
                  stroke: _that.color,
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
