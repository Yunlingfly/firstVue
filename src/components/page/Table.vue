<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-profile"></i> 简历库</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
                <el-select v-model="select_cate" placeholder="选择部门" class="handle-select mr10">
                    <el-option key="1" label="全部" value=""></el-option>
                    <el-option key="2" label="研发部" value="研发部"></el-option>
                    <el-option key="3" label="销售部" value="销售部"></el-option>
                    <el-option key="4" label="市场部" value="市场部"></el-option>
                </el-select>
                <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="search" @click="search">搜索</el-button>
            </div>
            <el-table :data="data" border class="table" ref="multipleTable" @selection-change="handleSelectionChange" stripe>
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="jobCategory" label="职位类别" width="120">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="80">
                </el-table-column>
                <el-table-column prop="status" label="状态" width="120">
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="60">
                </el-table-column>
                <el-table-column prop="education" label="学历" width="120">
                </el-table-column>
                <el-table-column prop="age" label="年龄" width="60">
                </el-table-column>
                <el-table-column prop="phone" label="手机号" width="120">
                </el-table-column>
                <el-table-column prop="position" label="应聘职位" width="120">
                </el-table-column>
                <el-table-column prop="date" label="简历接收时间" width="120">
                </el-table-column>
                <el-table-column prop="source" label="来源" width="120">
                </el-table-column>
                <el-table-column prop="address" label="地址" :formatter="formatter">
                </el-table-column>

                <el-table-column label="操作" width="180" align="center" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-document" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
                        <el-button type="text" icon="el-icon-edit" @click="handleUpdateStatus(scope.$index, scope.row)">安排面试</el-button>
                        <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="50px">
                <el-form-item label="部门">
                    <el-input v-model="form.jobCategory"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 更新状态提示框 -->
        <el-dialog title="提示" :visible.sync="upVisible" width="300px" center>
            <div class="del-dialog-cnt">确定通过？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="upVisible = false">取 消</el-button>
                <el-button type="primary" @click="updateRow">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
  name: "basetable",
  data() {
    return {
      url: "",
      tableData: [],
      cur_page: 1,
      multipleSelection: [],
      select_cate: "",
      select_word: "",
      del_list: [],
      is_search: false,
      editVisible: false,
      upVisible: false,
      delVisible: false,
      form: {
        name: "",
        jobCategory: "",
        status: "0",
        address: "",
        sex: ""
      },
      idx: -1
    };
  },
  created() {
    this.getData();
  },
  computed: {
    data() {
      return this.tableData.filter(d => {
        let is_del = false;
        for (let i = 0; i < this.del_list.length; i++) {
          if (d.name === this.del_list[i].name) {
            is_del = true;
            break;
          }
        }
        if (!is_del) {
          if (
            d.jobCategory.indexOf(this.select_cate) > -1 &&
            (d.name.indexOf(this.select_word) > -1 ||
              d.jobCategory.indexOf(this.select_word) > -1)
          ) {
            return d;
          }
        }
      });
    }
  },
  methods: {
    // 分页导航
    handleCurrentChange(val) {
      this.cur_page = val;
      this.getData();
    },
    // 获取 easy-mock 的模拟数据
    getData() {
      // 开发环境使用 easy-mock 数据，正式环境使用 json 文件
      if (process.env.NODE_ENV === "development") {
        this.url = "http://localhost:8082/user/testJson";
      }
      this.$axios
        .post(this.url, {
          pageNum: this.cur_page,
          pageSize: 20
        })
        .then(res => {
          this.tableData = res.data;
        });
    },
    search() {
      this.is_search = true;
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    handleEdit(index, row) {
      this.idx = index;
      const item = this.tableData[index];
      this.form = {
        name: item.name,
        jobCategory: item.jobCategory,
        status: item.status,
        sex: item.sex,
        address: item.address
      };
      this.editVisible = true;
    },
    handleUpdateStatus(index, row) {
      this.idx = index;
      const item = this.tableData[index];
      this.form = {
        name: item.name,
        jobCategory: item.jobCategory,
        status: item.status,
        sex: item.sex,
        address: item.address
      };
      this.upVisible = true;
    },
    handleDelete(index, row) {
      this.idx = index;
      this.delVisible = true;
    },
    delAll() {
      const length = this.multipleSelection.length;
      let str = "";
      this.del_list = this.del_list.concat(this.multipleSelection);
      for (let i = 0; i < length; i++) {
        str += this.multipleSelection[i].name + " ";
      }
      this.$message.error("删除了" + str);
      this.multipleSelection = [];
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 保存编辑
    saveEdit() {
      this.$set(this.tableData, this.idx, this.form);
      this.editVisible = false;
      this.$message.success(`修改第 ${this.idx + 1} 行成功`);
    },
    // 确定更新
    updateRow() {
      this.form.status="1";
      this.$set(this.tableData, this.idx, this.form);
      this.$message.success("更新成功");
      this.upVisible = false;
    },
    // 确定删除
    deleteRow() {
      this.tableData.splice(this.idx, 1);
      this.$message.success("删除成功");
      this.delVisible = false;
    }
  }
};
</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
}
.del-dialog-cnt {
  font-size: 16px;
  text-align: center;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
</style>
