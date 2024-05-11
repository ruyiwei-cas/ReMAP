<template>
  <!-- 诱导视频-->
  <el-row class="title">
    <el-col :span="16" :offset="4">
      <h2>
        <VideoCamera style="width: 1em; height: 1em; margin-right: 3px;position:relative;top:4px"/>
        Induced&nbsp&nbspVideo
      </h2>
    </el-col>
  </el-row>
  <el-row :gutter="3" class="inducedVideo" style="padding-top: 30px">
    <el-col>
      <img src="../assets/induceVideo/001.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/002.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/003.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/004.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/005.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/006.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/007.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/008.gif" style="width:100%"/>
    </el-col>
  </el-row>
  <el-row :gutter="3" class="inducedVideo">
    <el-col :span="3">
      <img src="../assets/induceVideo/009.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/010.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/011.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/012.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/013.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/014.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/015.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/016.gif" style="width:100%"/>
    </el-col>
  </el-row>
  <el-row :gutter="3" class="inducedVideo">

    <el-col :span="3">
      <img src="../assets/induceVideo/017.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/018.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/019.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/020.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/021.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/022.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/023.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/024.gif" style="width:100%"/>
    </el-col>
  </el-row>
  <el-row :gutter="3" class="inducedVideo">
    <el-col :span="3">
      <img src="../assets/induceVideo/025.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/026.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/027.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/028.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/029.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/030.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/031.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/032.gif" style="width:100%"/>
    </el-col>
  </el-row>
  <el-row :gutter="3" class="inducedVideo" style="padding-bottom: 30px">
    <el-col :span="3">
      <img src="../assets/induceVideo/033.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/034.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/035.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/036.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/037.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/038.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/039.gif" style="width:100%"/>
    </el-col>
    <el-col :span="3">
      <img src="../assets/induceVideo/040.gif" style="width:100%"/>
    </el-col>
  </el-row>

</template>

<script>

export default {
  name: "main",
  data() {
    return {
      tableData: [
        {
          id: 1,
          rgb: require('../assets/induceVideo/001.gif'),
          depth: require('../assets/induceVideo/001.gif'),
          nir: require('../assets/induceVideo/001.gif'),
          mmwave: require('../assets/induceVideo/001.gif'),
          imu: require('../assets/induceVideo/001.gif'),
        },
        {
          id: 2,
          rgb: require('../assets/induceVideo/002.gif'),
          depth: require('../assets/induceVideo/002.gif'),
          nir: require('../assets/induceVideo/002.gif'),
          mmwave: require('../assets/induceVideo/002.gif'),
          imu: require('../assets/induceVideo/002.gif'),
        },
        {
          id: 3,
          rgb: require('../assets/induceVideo/003.gif'),
          depth: require('../assets/induceVideo/003.gif'),
          nir: require('../assets/induceVideo/003.gif'),
          mmwave: require('../assets/induceVideo/003.gif'),
          imu: require('../assets/induceVideo/003.gif'),
        },
        {
          id: 4,
          rgb: require('../assets/induceVideo/004.gif'),
          depth: require('../assets/induceVideo/004.gif'),
          nir: require('../assets/induceVideo/004.gif'),
          mmwave: require('../assets/induceVideo/004.gif'),
          imu: require('../assets/induceVideo/004.gif'),
        },
      ]
    }

  }
}
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.title {
  text-align: left !important;
  color: #159957 !important;
}

.headTitle {
  /*background-color: #0d5c37;*/
  background-color: #159957;
  background-image: linear-gradient(120deg, #155799, #159957);
  padding-top: 60px;
  padding-bottom: 60px;
  color: #ffff;
  font-size: 30px !important;
}

.inducedVideo {
  /*background-color: #85a046;*/
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}

.introduce, .collectionData {
  padding-top: 30px;
  padding-bottom: 30px;
}

.dataStructure {
  padding-top: 50px;
  padding-bottom: 100px;
}

.dataTable {
  font-size: 16px;
  color: #3333 !important;
}
</style>