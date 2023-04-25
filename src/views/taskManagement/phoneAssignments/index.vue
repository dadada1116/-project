<template>
  <div class="main">
    <el-form :inline="true" :model="form" label-width="120px">
      <el-form-item label="开始日期">
        <el-date-picker
          v-model="form.start"
          type="date"
          placeholder="Pick a day"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
        />
      </el-form-item>
      <el-form-item label="结束日期">
        <el-date-picker
          v-model="form.start"
          type="date"
          placeholder="Pick a day"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
        />
      </el-form-item>
      <el-form-item label="分组">
        <el-select  clearable multiple v-model="form.region" placeholder="请选择分组">
          <el-option label="业务员" value="shanghai" />
          <el-option label="年份" value="beijing" />
          <el-option label="月份" value="beijing" />
          <el-option label="日期" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="按业务员分">
        <el-select  clearable multiple v-model="form.region" placeholder="请选择分组">
          <el-option label="业务员" value="shanghai" />
          <el-option label="年份" value="beijing" />
          <el-option label="月份" value="beijing" />
          <el-option label="日期" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="按年份分">
        <el-select  clearable multiple v-model="form.region" placeholder="请选择分组">
          <el-option label="业务员" value="shanghai" />
          <el-option label="年份" value="beijing" />
          <el-option label="月份" value="beijing" />
          <el-option label="日期" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="按月份分">
        <el-select  clearable multiple v-model="form.region" placeholder="请选择分组">
          <el-option label="业务员" value="shanghai" />
          <el-option label="年份" value="beijing" />
          <el-option label="月份" value="beijing" />
          <el-option label="日期" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <el-button type="primary" style="margin-left: 20px;">查询</el-button>
    <el-table :data="tableData"  style="width: 100%; margin-top: 10px;margin-bottom: 10px;">
        <el-table-column  prop="name" label="业务员" width="150" />
        <el-table-column  prop="name" label="拨打情况" width="150" />
        <el-table-column  prop="name" label="有意向" width="150" />
        <el-table-column  prop="name" label="意向率" width="150" />
        <el-table-column  prop="name" label="无意向" />
        <el-table-column  prop="name" label="未接通" />
        <el-table-column  prop="name" label="未接通率" />
        <el-table-column  prop="name" label="跟踪" />
        <el-table-column  prop="name" label="加微信" />
        <el-table-column  prop="name" label="已上门" />
        <el-table-column  prop="name" label="上门率" />
        <el-table-column  prop="name" label="签约" />
        <el-table-column  prop="name" label="导入电话" />
        <el-table-column  prop="name" label="导入公司" />
        
    </el-table>
  </div>
</template>
<script setup>
import { ref } from "vue";
const form = ref({});
</script>
<style lang="scss" scoped>
.main {
  padding: 20px;
}
</style>