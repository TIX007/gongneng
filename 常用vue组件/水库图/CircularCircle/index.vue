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
      type: Number,
      default: 78
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
