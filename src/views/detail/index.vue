<template>
    <div class="main">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="单位基本信息" name="first">
                <el-descriptions :column="1" border title="单位基本信息">
                    <el-descriptions-item label="信用代码">18100000000</el-descriptions-item>
                    <el-descriptions-item label="法人代表">Suzhou</el-descriptions-item>
                    <el-descriptions-item label="单位地址"> 222 </el-descriptions-item>
                    <el-descriptions-item label="邮政编码">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="注册资金">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="行业领域">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="主营业务">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="公司类型">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="核心技术">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="主营产品或服务">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="经营模式">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="员工人数">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="销售收入（万元）">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="厂房面积">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="所属市">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="所属区/县">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="街道">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="所在库">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="国标行业门类">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="网址">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="企业规模">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="企业简介">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="联系类型">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="最近一次备注">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="签约人">No.1188Province</el-descriptions-item>
                    <el-descriptions-item label="员工数量">No.1188Province</el-descriptions-item>
                </el-descriptions>
            </el-tab-pane>
            <el-tab-pane label="单位详细信息" name="third">
                <div class="tbabc"> 
                    <div>+</div>
                    <div>年份</div>
                    <div>销售产品</div>
                    <div>销售收入(万元，可精确小数点后两位)</div>
                    <div>总资产(万元)</div>
                    <div>净资产(万元)</div>
                    <div>在发工资人数(个)</div>
                    <div>科技人员数量(个)</div>
                    <div>年度研发费用(万元，可精确小数点后两位)</div>
                    <div>设备原值(万元，可精确小数点后两位)</div>
                    <div>科技设备原值(万元，可精确小数点后两位)</div>
                    <div>研发场地面积(平方米，可精确小数点后两位)</div>
                </div>
                <div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="关联合同情况" name="11">关联合同情况</el-tab-pane>
            <el-tab-pane label="企业资质情况" name="fourth">企业资质情况</el-tab-pane>
            <el-tab-pane label="企业画像" name="1">企业画像</el-tab-pane>
            <el-tab-pane label="知识产权" name="3">知识产权</el-tab-pane>
            <el-tab-pane label="联系方式" name="4">联系方式</el-tab-pane>
            <el-tab-pane label="知识产权清单" name="5">知识产权清单</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const activeName = 'first'
</script>
<style lang="scss" scoped>
.main {
    padding: 20px;
    .tbabc{
        height: 100px;
        div{
            display: inline-block;
            width: 100px;
            height: 100%;
            border: 1px solid #e7ecf1;
        }
    }
}
</style>