    <template>
  <div class="main">
    <el-form :inline="true" :model="form" label-width="120px">
      <el-form-item label="关键词">
        <el-input
          v-model="form.searchKey"
          placeholder="请输入关键词"
          style="width: 215px"
        />
      </el-form-item>
      <el-form-item label="所在库">
        <el-select
          clearable
          v-model="form.enterLibval"
          placeholder="请输入所在库"
        >
          <el-option
            v-for="item in form.enterLib"
            :key="item.id"
            :label="item.value"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="行业分类一级">
        <el-select
          clearable
          v-model="form.hyoneval"
          @change="changeHyone"
          placeholder="请选择行业分类一级"
        >
          <el-option
            v-for="item in form.hyone"
            :key="item.id"
            :label="item.value"
            :value="item.code"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="行业分类二级">
        <el-select clearable v-model="form.hytwoval" placeholder="请选择行业分类一级">
          <el-option
            v-for="item in form.hytwo"
            :key="item.id"
            :label="item.value"
            :value="item.code"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="企业资质">
        <el-select clearable v-model="form.dimenMarkval" placeholder="请选择企业资质">
          <el-option
            v-for="item in form.dimenMark"
            :key="item.id"
            :label="item.valuelabel"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="资质获得年份">
        <el-input
          v-model="form.geTime"
          placeholder="请选择获得年份"
          style="width: 215px"
        />
      </el-form-item>
      <el-form-item label="所属城市">
        <el-select
          clearable
          v-model="form.cityval"
          placeholder="请选择所属城市"
          @change="changeCity"
        >
          <el-option
            v-for="item in form.city"
            :key="item.id"
            :label="item.value"
            :value="item.code"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="所属县/区">
        <el-select clearable v-model="form.townval" placeholder="请输入所在库">
          <el-option
            v-for="item in form.town"
            :key="item.id"
            :label="item.value"
            :value="item.code"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="员工人数">
        <el-select
          clearable
          v-model="form.peopleNum.value"
          placeholder="请选择员工人数"
        >
          <el-option
            v-for="item in form.peopleNum"
            :key="item.id"
            :label="item.value"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="企业规模">
        <el-select
          clearable
          v-model="form.enterSizeval"
          placeholder="请选择企业规模"
        >
          <el-option
            v-for="item in form.enterSize"
            :key="item.id"
            :label="item.value"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="注册时间">
        <el-select
          clearable
          v-model="form.regiDateval"
          placeholder="请选择注册时间"
        >
          <el-option
            v-for="item in form.regiDate"
            :key="item.id"
            :label="item.value"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-select
          clearable
          v-model="form.conInforval"
          placeholder="请选择联系方式"
        >
          <el-option
            v-for="item in form.conInfor"
            :key="item.id"
            :label="item.value"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="联系结果">
        <el-select
          clearable
          v-model="form.CallStaval"
          placeholder="请选择联系结果"
        >
          <el-option
            v-for="item in form.CallSta"
            :key="item.id"
            :label="item.value"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <el-button type="primary" style="margin-left: 86.5%; margin-bottom: 20px" @click="fungetRecommend()"
      >查询</el-button
    >
    <el-button style="margin-bottom: 20px" @click="exportText()"
      >导出</el-button
    >
    <div>
      <el-table
        :data="tableData"
        style="width: 100%"
        ref="multipleTableRef"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column
          fixed
          prop="name"
          label="单位名称"
          width="200"
          show-overflow-tooltip
          align="center"
        />
        <el-table-column
          prop="lastRecord"
          label="最近联系"
          show-overflow-tooltip
          align="center"
        />
        <el-table-column
          prop="lastMemo"
          label="联系结果"
          show-overflow-tooltip
          align="center"
        />
        <el-table-column
          prop="badge"
          label="资质"
          show-overflow-tooltip
          align="center"
        />
        <el-table-column
          prop="people"
          label="员工人数"
          show-overflow-tooltip
          align="center"
        />
        <el-table-column
          prop="industry"
          label="行业领域"
          show-overflow-tooltip
          align="center"
        />
        <el-table-column
          prop="city"
          label="所属辖区"
          show-overflow-tooltip
          align="center"
        />
        <el-table-column
          fixed="right"
          label="操作"
          show-overflow-tooltip
          align="center"
        >
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick"
              >详情</el-button
            >
            <el-button link type="primary" size="small" @click="Edit">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="tableData.length"
      />
    </div>
  </div>
</template>
<script setup>
import { htLx, getRecommend,getExport} from "@/api/system/enterManagement.js";
import {useRouter} from 'vue-router'
import { reactive, ref } from "vue";
// const value = ref("");
const router = useRouter()
const form = ref({
  searchKey:'',
  city: [],
  town: [],
  hyone:[],
  hytwo:[],
  peopleNum: [],
  dimenMark: [],
  adminDivision: [],
  IndSector: [],
  CallSta: [],
  ConType: [],
  regiDate: [],
  enterLib: [],
  enterSize: [],
  conInfor: [],
  enterLibval: "",
  regiDateval: "",
  geTime: "",
  CallStaval: "",
  enterSizeval: "",
  conInforval: "",
  cityval: "",
  townval: "",
  hyoneval:'',
  hytwo:"",
});
const cendParams= reactive({
    "searchNode": {
        "operator": "and",
        "searchNodes": [
            {
                "operator": "and",
                "searchNodes": []
            },
            {
                "operator": "in",
                "table": "Company",
                "column": "processPointName",
                "value": "公海库"
            }
        ]
    },
    "processPointName": "公海库",
    "count": 200,
    "category": "企业查询"
})
const htLxParams = reactive([
  "资质标注",
  "拨打情况",
  "行业领域",
  "企业库",
  "行政区划",
  "企业库_员工人数",
  "企业库_企业规模",
  "企业库_注册时间",
  "企业库_注册资金",
  "企业库_联系方式",
  "合同类别",
  "业务推荐",
]);
const tableData = ref([]);
const exportParams = reactive({
  data: tableData,
  fileName: "企业查询导出功能",
  headerJson: "name:单位名称;lastUpdate:最近更新信息;lastRecord:最近联系;lastMemo:联系结果;processPointName:状态;badge:资质;registCapital:注册资金;people:员工人数;industry:行业领域;business:主营业务;city:所属市;town:所属区县;address:单位地址"
})
const searchParams = ref(
  {
    "searchNode": {
        "operator": "and",
        "searchNodes": [
            // {
            //     "operator": "and",
            //     "searchNodes": [
            //         {
            //             "operator": "not in",
            //             "table": "Badge",
            //             "column": "name",
            //             "value": "雏鹰企业"
            //         }
            //     ]
            // },
            {
                "operator": "in",
                "table": "Company",
                "column": "processPointName",
                "value": form.enterLibval
            },
            // {
            //     "operator": "or",
            //     "searchNodes": [
            //         {
            //             "operator": "and",
            //             "searchNodes": [
            //                 {
            //                     "operator": ">=",
            //                     "table": "Company",
            //                     "column": "capital",
            //                     "value": 3000
            //                 },
            //                 {
            //                     "operator": "<=",
            //                     "table": "Company",
            //                     "column": "capital",
            //                     "value": 5000
            //                 }
            //             ]
            //         }
            //     ]
            // },
            {
                "operator": "or",
                "searchNodes": [
                    {
                        "operator": "like",
                        "table": "Company",
                        "column": "name",
                        "value": form.value.searchKey
                    },
                    {
                        "operator": "like",
                        "table": "Company",
                        "column": "business",
                        "value": form.value.searchKey
                    },
                    {
                        "operator": "like",
                        "table": "Company",
                        "column": "industry",
                        "value": form.value.searchKey
                    },
                    {
                        "operator": "like",
                        "table": "Company",
                        "column": "lastMemo",
                        "value": form.value.searchKey
                    },
                    {
                        "operator": "like",
                        "table": "Company",
                        "column": "importMemo",
                        "value": form.value.searchKey
                    }
                ]
            },
            {
                "operator": "=",
                "table": "Company",
                "column": "industry1",
                "value": form.value.hyoneval
            },
            {
                "operator": "startWith",
                "table": "Company",
                "column": "regionCode",
                "value":  form.value.cityval
            },
            {
                "operator": "startWith",
                "table": "Company",
                "column": "regionCode",
                "value": form.value.townval
            },
            // {
            //     "operator": "in",
            //     "table": "Company",
            //     "column": "peopleScale",
            //     "value": "5人以下"
            // },
            // {
            //     "operator": "or",
            //     "searchNodes": [
            //         {
            //             "operator": "and",
            //             "searchNodes": [
            //                 {
            //                     "operator": "<=",
            //                     "table": "Company",
            //                     "column": "registDate",
            //                     "value": 1
            //                 }
            //             ]
            //         }
            //     ]
            // },
            {
                "operator": "in",
                "table": "Contact",
                "column": "type",
                "value":  form.value.conInforval
            },
            {
                "operator": "=",
                "table": "Company",
                "column": "lastMemo",
                "value": form.value.CallStaval
            },
            {
                "operator": "or",
                "searchNodes": []
            },
            {
                "operator": "=",
                "table": "Company",
                "column": "industry2",
                "value": form.value.hytwoval
            }
        ]
    },
    "processPointName": "公海库",
    "count": 200,
    "category": "企业查询"
}
)
function funhtLx() {
  htLx(htLxParams).then((response) => {
    if (response) {
      form.value.enterLib = response.企业库;
      form.value.enterSize = response.企业库_企业规模;
      form.value.peopleNum = response.企业库_员工人数;
      form.value.regiDate = response.企业库_注册时间;
      form.value.ConType = response.合同类别;
      form.value.CallSta = response.拨打情况;
      form.value.IndSector = response.行业领域;
      form.value.adminDivision = response.行政区划;
      form.value.conInfor = response.企业库_联系方式;
      response.行政区划.forEach((element) => {
        if (element.parentCode === null) {
          form.value.city.push(element)
        }
      })
      response.行业领域.forEach((element) => {
        if (element.parentCode === null) {
          form.value.hyone.push(element)
        }
      })
      response.资质标注.forEach(element=>{
        form.value.dimenMark.push({valuelabel:element.value + "：是",operator:"in",value:element.value},{valuelabel:element.value + "：否",operator:"not in",value:element.value})
      })
      }
  });
    
}
function fungetRecommend() {
  getRecommend(cendParams).then((response) => {
    if (response.obj.companyList) {
      tableData.value = response.obj.companyList;
    }
  });
}
function changeCity(val) {
  form.value.townval = "";
  form.value.town = [];
  form.value.adminDivision.forEach((element) => {
    if (val === element.parentCode) {
      form.value.town.push(element);
    }
  });
}
function changeHyone(val) {
  form.value.hytwoval = "";
  form.value.hytwo = [];
  form.value.IndSector.forEach((element) => {
    if (val === element.parentCode) {
      form.value.hytwo.push(element);

    }
  });
}
function exportText(){
  getExport(exportParams).then(res=>{
    if(res.success==true)
            {
                window.location.href ="http://47.98.241.196/ExcelExportController/exportExcel.do";
            }else
            {
                alert("导出失败");
            }
  })
}
function Edit(){
  router.push('/detail/index')
}
funhtLx();
fungetRecommend();
</script>  