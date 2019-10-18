<template>
  <div>
    <el-container class="user_info">
      <el-header class="mt40 t_a_c user_info_header">
        <img src="../assets/img/rankList.png" alt="">
      </el-header>
      <el-main style="padding: 0 100px">
        <template>
          <el-table :data="tableData" align="center"  style="width: 100%">
            <el-table-column prop="ranking" align="center"  label="排名" width="160">
              <!--<template slot-scope="scope">-->
              <!--</template>-->
            </el-table-column>
            <el-table-column prop="name" align="center" label="获奖者" width="160">
            </el-table-column>
            <el-table-column prop="forecast" align="center" label="预测价格" width="160">
            </el-table-column>
            <el-table-column prop="Actual" align="center" label="实际价格" width="160">
            </el-table-column>
            <el-table-column prop="price" align="center" label="奖金" width="160">
            </el-table-column>
          </el-table>
        </template>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'rankList',
  data () {
    return {
      tableData: [{
        ranking: '1',
        name: 'xxxx',
        forecast: '1.28835',
        Actual: '1.28835',
        price: '$1000'
      }, {
        ranking: '2',
        name: 'xxxx',
        forecast: '1.28835',
        Actual: '1.28835',
        price: '$1000'
      }, {
        ranking: '3',
        name: 'xxxx',
        forecast: '1.28835',
        Actual: '1.28835',
        price: '$1000'
      }, {
        ranking: '4',
        name: 'xxxx',
        forecast: '1.28835',
        Actual: '1.28835',
        price: '$1000'
      }, {
        ranking: '5',
        name: 'xxxx',
        forecast: '1.28835',
        Actual: '1.28835',
        price: '$1000'
      }, {
        ranking: '6',
        name: 'xxxx',
        forecast: '1.28835',
        Actual: '1.28835',
        price: '$1000'
      }, {
        ranking: '7',
        name: 'xxxx',
        forecast: '1.28835',
        Actual: '1.28835',
        price: '$1000'
      }, {
        ranking: '8',
        name: 'xxxx',
        forecast: '1.28835',
        Actual: '1.28835',
        price: '$1000'
      }, {
        ranking: '幸运奖',
        name: 'xxxx',
        forecast: '1.28835',
        Actual: '1.28835',
        price: '$1000'
      }]
    }
  },
  methods: {
    indexMethod (index) {
      return index * 2
    }
  }
}
</script>

<style scoped>
  .user_info {
    margin: 50px auto;
    background-color: #fff;
    width: 1100px;
    /*padding-top: 50px;*/
    border-radius: 30px;
    padding-bottom: 100px;
  }

  .user_info_header {
    margin: 80px auto;
    /*padding-left: 100px;*/
  }

  .user_info_content {
    width: 500px;
    margin: 0 auto;
  }
  .cell{max-height: 94px !important;overflow: auto !important;}
</style>
