
### 用vue3实现echarts
```vue
<template>
  <div class="dashboard-container">
    <!-- 顶部问候语和天气 -->
    <div class="header">
      <h1>早安, LinaBell, 开始您一天的工作吧！</h1>
      <div class="weather">今日热，20℃ - 32℃！</div>
    </div>

    <!-- 统计卡片 -->
    <el-row class="stats-container">
      <el-col :span="6" :xs="24" :sm="12" :md="6" :lg="6" class="stat-card" v-for="(stat, index) in 4" :key="index">
        <StatCard title="总销售额" :value="12560.5" :compare-value="-5.3" :icon="Money" />
      </el-col>
    </el-row>

    <!-- 项目卡片网格 -->
    <div class="projects-title">项目</div>
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card" @click="handleProjectClick(project)">
        <div class="project-name">{{ project.name }}</div>
        <div class="project-motto">{{ project.motto }}</div>
        <div class="project-footer">
          <span class="project-team">{{ project.team }}</span>
          <span class="project-date">{{ project.date }}</span>
        </div>
      </div>
    </div>

    <!-- 快速导航 -->
    <div class="quick-nav-title">快速导航</div>
    <div class="quick-nav-grid">
      <div v-for="nav in quickNavs" :key="nav" class="nav-item" @click="handleNavClick(nav)">
        {{ nav }}
      </div>
    </div>

    <!-- 待办事项 -->
    <div class="todos-title">特办事项</div>
    <div class="todos-list">
      <div v-for="todo in todos" :key="todo.id" class="todo-item" @click="handleTodoClick(todo)">
        <div class="todo-title">{{ todo.title }}</div>
        <div class="todo-desc">{{ todo.description }}</div>
      </div>
    </div>

    <!-- 最近动态 -->
    <div class="activities-title">司机动态</div>
    <div class="activities-list">
      <div class="activity-item">
        <div class="activity-action">已发车</div>
        <div class="activity-detail">豫A5729Q 已发车</div>
      </div>
      <div class="activity-item">
        <div class="activity-action">未打卡</div>
        <div class="activity-detail">司机 王某某 未打卡</div>
      </div>
      <div class="activity-item">
        <div class="activity-action">已卸货</div>
        <div class="activity-detail">豫A7909G 已卸货</div>
      </div>
    </div>

    <div class="growth-chart">
      <el-row :gutter="20">
        <el-col class="lg-mb-20" :xs="24" :sm="24" :md="24" :lg="12">
          <el-card shadow="hover" header="率">
            <div class="user-source-chart" :ref="chartRefs.set"></div>
          </el-card>
        </el-col>
        <el-col class="lg-mb-20" :xs="24" :sm="24" :md="24" :lg="12">
          <el-card shadow="hover" header="出车次数">
            <div class="user-surname-chart" :ref="chartRefs.set"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { useTemplateRefsList, useEventListener } from '@vueuse/core';
import { Money, ShoppingCart } from '@element-plus/icons-vue';
import { reactive, nextTick, onMounted, onActivated, onBeforeMount } from 'vue';
// 项目数据
const projects = [
  { id: 1, name: 'Github', motto: '不要等待机会，而要创造机会。', team: '开源组', date: '2021-04-01' },
  { id: 2, name: 'Angular', motto: '热情和欲望可以突破一切难关。', team: 'UI', date: '2021-04-01' },
  { id: 3, name: 'Vue', motto: '现在的你决定将来的你。', team: '算法组', date: '2021-04-01' },
  { id: 4, name: 'React', motto: '健康的身体是实现目标的基石。', team: '技术牛', date: '2021-04-01' },
  { id: 5, name: 'Html5', motto: '没有什么才能让努力更重要。', team: '上班摸鱼', date: '2021-04-01' },
  { id: 6, name: 'JS', motto: '随意走出来的，而不是空想出来的。', team: '架构组', date: '2021-04-01' }
];

// 快速导航
const quickNavs = ['首页', '双表盘', '组件', '系统管理', '权限管理', '目录'];

// 待办事项
const todos = [
  {
    id: 1,
    title: '重新部署代码提交',
    description: '更新后提交15016套的通信代码，确保代码清晰度超过5。'
  },
  {
    id: 2,
    title: '系统性能优化',
    description: '使用并优化系统性能，并且优化资源库。'
  },
  {
    id: 3,
    title: '安全检查',
    description: '运行系统安全检查，确保没有安全漏洞或未被破坏的可用。'
  }
];

const state: {
  charts: any[];
  remark: string;
  workingTimeFormat: string;
  pauseWork: boolean;
} = reactive({
  charts: [],
  remark: 'dashboard.Loading',
  workingTimeFormat: '',
  pauseWork: false
});

// 点击处理函数
const handleProjectClick = (project: any) => {
  console.log('Project clicked:', project);
  // 这里可以添加导航逻辑
};

const handleNavClick = (nav: string) => {
  console.log('Navigation clicked:', nav);
  // 这里可以添加导航逻辑
};

const handleTodoClick = (todo: any) => {
  console.log('Todo clicked:', todo);
  // 这里可以添加导航逻辑
};

// 出车表
const chartRefs = useTemplateRefsList<HTMLDivElement>();

const initUserSurnameChart = () => {
  const userSurnameChart = echarts.init(chartRefs.value[1] as HTMLElement);
  const data = genData(20);
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
      data: data.legendData,
      textStyle: {
        color: '#73767a'
      }
    },
    series: [
      {
        name: '姓名',
        type: 'pie',
        radius: '55%',
        center: ['40%', '50%'],
        data: data.seriesData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  function genData(count: any) {
    // prettier-ignore
    const nameList = [
      '赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
    ];
    const legendData = [];
    const seriesData = [];
    for (let i = 0; i < count; i++) {
      const name = Math.random() > 0.85 ? makeWord(2, 1) + '·' + makeWord(2, 0) : makeWord(2, 1);
      legendData.push(name);
      seriesData.push({
        name: name,
        value: Math.round(Math.random() * 100000)
      });
    }
    return {
      legendData: legendData,
      seriesData: seriesData
    };
    function makeWord(max: any, min: any) {
      const nameLen = Math.ceil(Math.random() * max + min);
      const name = [];
      for (let i = 0; i < nameLen; i++) {
        name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
      }
      return name.join('');
    }
  }
  userSurnameChart.setOption(option);
  console.log(userSurnameChart);
  state.charts.push(userSurnameChart);
};

const echartsResize = () => {
  nextTick(() => {
    for (const key in state.charts) {
      state.charts[key].resize()
    }
  })
}


// onActivated(() => {
//   echartsResize()
// })

onMounted(() => {
  initUserSurnameChart();
  // useEventListener(window, 'resize', echartsResize)
});

// onBeforeMount(() => {
//   for (const key in state.charts) {
//     state.charts[key].dispose()
//   }
// })
</script>

<style scoped>
.dashboard-container {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  padding: 20px;
  /* background-color: #f5f7fa; */
  color: #333;
  /* max-width: 1200px; */
  margin: 0 auto;
}

.header {
  margin-bottom: 30px;
}

.header h1 {
  font-size: 24px;
  font-weight: normal;
  margin: 0;
  color: #333;
}

.weather {
  font-size: 16px;
  color: #666;
  margin-top: 5px;
}

.stats-container {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.stat-card {
  flex: 1;
  background: white;
  border-radius: 8px;
  /* padding: 15px 20px; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.stat-title {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.projects-title,
.quick-nav-title,
.todos-title,
.activities-title {
  font-size: 18px;
  margin: 20px 0 15px;
  color: #333;
  font-weight: normal;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 20px;
}

.project-card {
  background: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.2s;
}

.project-card:hover {
  transform: translateY(-3px);
}

.project-name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.project-motto {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.4;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
}

.quick-nav-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.nav-item {
  background: white;
  border-radius: 6px;
  padding: 12px 15px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.2s;
}

.nav-item:hover {
  background: #f0f7ff;
  color: #409eff;
}

.todos-list {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
}

.todo-item {
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.todo-item:last-child {
  border-bottom: none;
}

.todo-item:hover {
  background-color: #f9f9f9;
}

.todo-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.todo-desc {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}

.activities-list {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.activity-item {
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}

.activity-item:last-child {
  border-bottom: none;
}

.activity-action {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

.activity-detail {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}

.growth-chart {
  margin-bottom: 20px;
}

.user-source-chart,
.user-surname-chart {
  height: 400px;
}
</style>
```
