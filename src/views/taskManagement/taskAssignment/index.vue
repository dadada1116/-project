<template>
  <div class="task-main">
    <div class="taskassignment-title">
      <el-icon :size="20">
        <Edit />
      </el-icon>
      <span>待分配项目<span class="circle">{{ num }}</span> 个</span>
      <div class="buttons">
        <div class="left">
          <el-button type="primary">计算配额</el-button>
          <el-icon class="button-arrow"><CaretRight /></el-icon>
          <el-button type="primary">随机预分配</el-button>
          <el-icon class="button-arrow"><CaretRight /></el-icon>
          <el-button type="primary">确认发送</el-button>
        </div>
        <div class="right">
          <el-button type="warning">重置预分配</el-button>
        </div>
      </div>
    </div>
    <el-table :data="tableData" style="width: 100%; margin-top: 10px;margin-bottom: 10px;">
        <el-table-column fixed prop="name" label="序号" width="150" />
        <el-table-column fixed prop="name" label="姓名" width="150" />
        <el-table-column fixed prop="name" label="预分配" width="150" />
        <el-table-column fixed prop="name" label="公海库" width="150" />
        <el-table-column fixed prop="name" label="意向库" />
        <el-table-column fixed prop="name" label="随机添加" />
    </el-table>
    <el-button type="danger">列表上勾选点击后分配任务</el-button> 
    <el-button type="danger">勾选退回公海库</el-button> 
    <el-table :data="tableData" style="width: 100%; margin-top: 10px;">
        <el-table-column fixed prop="name" label="单位名称" width="150" />
        <el-table-column fixed prop="name" label="部门经理" width="150" />
        <el-table-column fixed prop="name" label="业务员"  />
        <el-table-column fixed prop="name" label="状态"  />
        <el-table-column fixed prop="name" label="业务类型" width="150" />
        <el-table-column fixed prop="name" label="企业资质" width="150" />
        <el-table-column fixed prop="name" label="所在市"  />
        <el-table-column fixed prop="name" label="所在县区" width="150" />
        <el-table-column fixed prop="name" label="单位地址" width="150" />
    </el-table>
  </div>
</template>
<script setup>
import { Edit, CaretRight } from "@element-plus/icons-vue";
import { ref } from "vue";
const tableData = ref([])
const num = ref(0);
</script>
<style scoped lang="scss">
.taskassignment-title {
    width: 100%;
    display: flex;
    align-items: center;

}
.buttons {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
}
.button-arrow {
    position: relative;
    top: 3px;
}
</style>