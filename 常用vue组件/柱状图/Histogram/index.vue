<template>
    <v-chart class="chart" :option="option">
    </v-chart>
</template>

<script>
import 'echarts'
import VChart from 'vue-echarts'
import { numberOfEquipment } from '@/api/demo.js'

export default {
  name: 'Histogram',
  title: '柱状图',
  components: {
    VChart
  },
  data () {
    return {
      EquipmentList: []
    }
  },
  mounted () {
    this.list()
  },
  methods: {
    list () {
      numberOfEquipment()
        .then(response => {
          // 回调成功的逻辑
          const res = response.data
          if (res.code === 0) {
            // console.log(res)
            this.EquipmentList = res.result
          }
        })
    }
  },
  computed: {
    option () {
      return {
        title: [
          {
            text: '单位：检查量（个）',
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
          top: '25%', // 如果不写将无法充满空间
          left: '2%',
          right: '1%',
          bottom: '1%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.EquipmentList.map(h => h.name),
            axisLabel: { // 解决空间过小字显示不全问题
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
              show: true, // 控制行列是否显示
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
            data: this.EquipmentList.map(h => h.equipmentChecked)
          }
        ]
      }
    }

  }
}
</script>

<style scoped lang="scss">
.chart {
    width: 315px;
    height: 145px;
}
</style>
