<template>
  <div class="main">
    <el-form :inline="true" :model="form" label-width="120px">
      <el-form-item label="最近时间">
        <el-date-picker
          v-model="form.start"
          type="daterange"
          placeholder="Pick a day"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
        />
      </el-form-item>
      <el-form-item label="入库时间">
        <el-date-picker
          v-model="form.start"
          type="daterange"
          placeholder="Pick a day"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
        />
      </el-form-item>
      <el-form-item label="执行人">
        <el-select
          clearable
          multiple
          v-model="form.region"
          placeholder="请选择分组"
        >
          <el-option label="业务员" value="shanghai" />
          <el-option label="年份" value="beijing" />
          <el-option label="月份" value="beijing" />
          <el-option label="日期" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="渠道来源">
        <el-select clearable v-model="form.region" placeholder="请选择分组">
          <el-option label="业务员" value="shanghai" />
          <el-option label="年份" value="beijing" />
          <el-option label="月份" value="beijing" />
          <el-option label="日期" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="关键字">
        <el-input placeholder="请输入关键字"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" style="margin-left: 20px">查询</el-button>
    <el-table
      :data="tableData"
      style="width: 100%; margin-top: 10px; margin-bottom: 10px"
    >
      <el-table-column prop="name" label="单位名称" width="150" />
      <el-table-column prop="name" label="商务专员" width="150" />
      <el-table-column prop="name" label="渠道" width="150" />
      <el-table-column prop="name" label="情况" width="150" />
      <el-table-column prop="name" label="最近跟踪" />
      <el-table-column prop="name" label="入库时间" />
      <el-table-column prop="name" label="跟踪次数" />
      <el-table-column prop="name" label="市" />
      <el-table-column prop="name" label="区" />

      <el-table-column fixed="right" label="操作" width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="handleClick"
            >Detail</el-button
          >
          <el-button link type="primary" size="small">Edit</el-button>
        </template>
      </el-table-column>
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