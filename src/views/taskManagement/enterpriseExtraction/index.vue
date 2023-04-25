<template>
  <div class="main">
    <el-form :inline="true" :model="form" label-width="120px">
      <el-form-item label="关键词">
        <el-select clearable v-model="form.region" placeholder="请选择关键词">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="所在库">
        <el-select  clearable multiple v-model="form.region" placeholder="请输入所在库">
          <el-option label="公海库" value="shanghai" />
          <el-option label="意向库" value="beijing" />
          <el-option label="签约库" value="beijing" />
          <el-option label="错误库" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="行业分类一级">
        <el-select  clearable  v-model="form.region" placeholder="请输入所在库">
          <el-option label="公海库" value="shanghai" />
          <el-option label="意向库" value="beijing" />
          <el-option label="签约库" value="beijing" />
          <el-option label="错误库" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="行业分类二级">
        <el-select  clearable  v-model="form.region" placeholder="请输入所在库">
          <el-option label="公海库" value="shanghai" />
          <el-option label="意向库" value="beijing" />
          <el-option label="签约库" value="beijing" />
          <el-option label="错误库" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="企业资质">
        <el-select  clearable  v-model="form.region" placeholder="请输入所在库">
          <el-option label="公海库" value="shanghai" />
          <el-option label="意向库" value="beijing" />
          <el-option label="签约库" value="beijing" />
          <el-option label="错误库" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="资质获得年份">
        <el-select  clearable  v-model="form.region" placeholder="请输入所在库">
          <el-option label="公海库" value="shanghai" />
          <el-option label="意向库" value="beijing" />
          <el-option label="签约库" value="beijing" />
          <el-option label="错误库" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="所属市">
        <el-select  clearable  v-model="form.region" placeholder="请输入所在库">
          <el-option label="公海库" value="shanghai" />
          <el-option label="意向库" value="beijing" />
          <el-option label="签约库" value="beijing" />
          <el-option label="错误库" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="所属县">
        <el-select  clearable  v-model="form.region" placeholder="请输入所在库">
          <el-option label="公海库" value="shanghai" />
          <el-option label="意向库" value="beijing" />
          <el-option label="签约库" value="beijing" />
          <el-option label="错误库" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="员工人数">
        <el-select multiple clearable  v-model="form.region" placeholder="">
          <el-option label="公海库" value="shanghai" />
          <el-option label="意向库" value="beijing" />
          <el-option label="签约库" value="beijing" />
          <el-option label="错误库" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="企业规模">
        <el-select multiple clearable  v-model="form.region" placeholder="">
          <el-option label="公海库" value="shanghai" />
          <el-option label="意向库" value="beijing" />
          <el-option label="签约库" value="beijing" />
          <el-option label="错误库" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="注册时间">
        <el-select multiple clearable  v-model="form.region" placeholder="">
          <el-option label="公海库" value="shanghai" />
          <el-option label="意向库" value="beijing" />
          <el-option label="签约库" value="beijing" />
          <el-option label="错误库" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="注册资金">
        <el-select multiple clearable  v-model="form.region" placeholder="">
          <el-option label="公海库" value="shanghai" />
          <el-option label="意向库" value="beijing" />
          <el-option label="签约库" value="beijing" />
          <el-option label="错误库" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-select multiple clearable  v-model="form.region" placeholder="">
          <el-option label="公海库" value="shanghai" />
          <el-option label="意向库" value="beijing" />
          <el-option label="签约库" value="beijing" />
          <el-option label="错误库" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="联系结果">
        <el-select  clearable  v-model="form.region" placeholder="请选择">
          <el-option label="公海库" value="shanghai" />
          <el-option label="意向库" value="beijing" />
          <el-option label="签约库" value="beijing" />
          <el-option label="错误库" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="搜索数量">
        <el-select  clearable  v-model="form.region" placeholder="">
          <el-option label="公海库" value="shanghai" />
          <el-option label="意向库" value="beijing" />
          <el-option label="签约库" value="beijing" />
          <el-option label="错误库" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="排序">
        <el-select multiple clearable  v-model="form.region" placeholder="">
          <el-option label="更新时间" value="shanghai" />
          <el-option label="注册资金" value="beijing" />
          <el-option label="企业人数" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <el-button type="primary" style="margin-left: 20px;">查询</el-button>
    <el-button>导出</el-button>
    <el-table :data="tableData" style="width: 100%; padding: 0 20px;margin-top: 10px;">
        <el-table-column fixed prop="name" label="单位名称" width="150" />
        <el-table-column prop="lastUpdate" label="信息更新" width="120" />
        <el-table-column prop="state" label="最近联系" width="120" />
        <el-table-column prop="city" label="联系结果" width="120" />
        <el-table-column prop="processPointName" label="状态" width="120" />
        <el-table-column prop="zip" label="资质" width="120" />
        <el-table-column prop="zip" label="注册资金" width="120" />
        <el-table-column prop="zip" label="员工人数" width="120" />
        <el-table-column prop="zip" label="行业领域" width="120" />
        <el-table-column prop="zip" label="主营业务" width="120" />
        <el-table-column prop="zip" label="所属辖区" width="120" />
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
import { reactive, ref } from "vue";
const form = ref({});
const tableData = ref([])
</script>
<style lang="scss">
.main{
    padding: 10px;
}
</style>