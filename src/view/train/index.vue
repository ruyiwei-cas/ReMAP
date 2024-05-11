<template>
  <el-form :model="form" label-width="100px" class="input_form">
    <!--            <el-col :span="23">-->
    <!--              <el-form-item label="任务名称:" prop="name">-->
    <!--                <el-input v-model="form.name"/>-->
    <!--              </el-form-item>-->
    <!--            </el-col>-->
    <el-row class="al">
      <el-col :span="8">
        <el-form-item label="数据集" label-width="120px" prop="valuedataset">
          <el-select placeholder="请选择" v-model="form.valuedataset">
            <el-option
              v-for="item in datasetOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="模型" label-width="120px" prop="valueal">
          <el-select placeholder="请选择" v-model="form.valueal">
            <el-option
              v-for="item in alOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="Backbone选择" label-width="120px" prop="valueBackOne">
          <el-select placeholder="请选择" v-model="form.valueBackOne">
            <el-option
              v-for="item in backOneOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <div class="right">
      <p>模型参数</p>
      <el-row class="param">
        <el-col :span="6">
          <el-form-item label="图像输入尺寸" label-width="180px" prop="imgSize">
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-input
            size="mini"
            v-model="form.imgWidth"
            style="width: 70px;"
            clearable>
          </el-input>
          <span class="textSpan">宽(px)</span>
        </el-col>
        <el-col :span="4">
          <el-input
            size="mini"
            v-model="form.imgHeight"
            style="width: 70px;"
            clearable>
          </el-input>
          <span class="textSpan">高(px)</span>
        </el-col>
        <el-col :span="6" style="margin-top: -6px">
          <el-form-item label="强制等比" label-width="100px">
            <el-switch
              v-model="form.sizeSwitch">
            </el-switch>
          </el-form-item>

        </el-col>
      </el-row>
      <el-row class="param">
        <el-col :span="24">
          <el-form-item label="使用GPU" label-width="180px" prop="GPU">
            <el-radio v-model="form.GPU" label="1">是</el-radio>
            <el-radio v-model="form.GPU" label="2">否</el-radio>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="param">
        <el-col :span="24">
          <el-form-item label="高级模型参数" label-width="180px" prop="modelParams">
            <el-switch
              v-model="form.modelParams" active-text="隐藏">
            </el-switch>
          </el-form-item>
        </el-col>
      </el-row>
      <p>训练参数</p>
      <el-row class="param">
        <el-col :span="24">
          <el-form-item label="迭代轮数(Epoch)" label-width="180px" prop="epochNum">
            <el-input-number size="small" v-model="form.epochNum" label="描述文字"></el-input-number>
            <span class="textSpan">迭代轮数越多，训练时间越长</span>
          </el-form-item>
        </el-col>

      </el-row>
      <el-row class="param">
        <el-col :span="24">
          <el-form-item label="学习率(Learning Rate)" label-width="180px" prop="learningRateNum">
            <el-input-number size="small" v-model="form.learningRateNum" label="描述文字" :precision="5"
                             :step="0.0001"></el-input-number>
            <span v-html="learningText" class="textSpan"></span>
          </el-form-item>
        </el-col>

      </el-row>
      <el-row class="param">
        <el-col :span="24">
          <el-form-item label="批大小(Batch Size)" label-width="180px" prop="bacthSizeNum">
            <el-input-number size="small" v-model="form.bacthSizeNum" label="描述文字"></el-input-number>
            <span class="textSpan">Batch Size越大，所需显存（内存）越大</span>
          </el-form-item>
        </el-col>

      </el-row>
      <el-row class="param">
        <el-col :span="24">
          <el-form-item label="高级训练参数" label-width="180px" prop="trainParams">
            <el-switch
              v-model="form.trainParams" active-text="隐藏">
            </el-switch>
          </el-form-item>
        </el-col>

      </el-row>
    </div>
    <div class="left">
      <p>优化策略</p>
      <el-row class="param">
        <el-col :span="12">
          <el-form-item label="数据增强" label-width="120px" prop="forceData">
            <el-switch
              v-model="form.forceData">
            </el-switch>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="param">
        <el-col :span="8">
          <el-form-item label="Mixup策略" label-width="120px" prop="mixup">
            <el-radio v-model="form.mixup" label="1">开</el-radio>
            <el-radio v-model="form.mixup" label="2">关</el-radio>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="图像填充" label-width="120px" prop="fillImg">
            <el-radio v-model="form.fillImg" label="1">开</el-radio>
            <el-radio v-model="form.fillImg" label="2">关</el-radio>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="随机裁剪" label-width="120px" prop="randomCut">
            <el-radio v-model="form.randomCut" label="1">开</el-radio>
            <el-radio v-model="form.randomCut" label="2">关</el-radio>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="param">
        <el-col :span="8">
          <el-form-item label="随机水平翻转" label-width="120px" prop="randomTurnX">
            <el-radio v-model="form.randomTurnX" label="1">开</el-radio>
            <el-radio v-model="form.randomTurnX" label="2">关</el-radio>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="随机多尺度训练" label-width="120px" prop="randomSizeTrain">
            <el-radio v-model="form.randomSizeTrain" label="1">开</el-radio>
            <el-radio v-model="form.randomSizeTrain" label="2">关</el-radio>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="随机亮度" label-width="120px" prop="randomLight">
            <el-radio v-model="form.randomLight" label="1">开</el-radio>
            <el-radio v-model="form.randomLight" label="2">关</el-radio>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row class="param">
        <el-col :span="8">
          <el-form-item label="随机对比度" label-width="120px" prop="randomContrastRatio">
            <el-radio v-model="form.randomContrastRatio" label="1">开</el-radio>
            <el-radio v-model="form.randomContrastRatio" label="2">关</el-radio>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="随机饱和度" label-width="120px" prop="randomSaturation">
            <el-radio v-model="form.randomSaturation" label="1">开</el-radio>
            <el-radio v-model="form.randomSaturation" label="2">关</el-radio>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="随机色调" label-width="120px" prop="randomTone">
            <el-radio v-model="form.randomTone" label="1">开</el-radio>
            <el-radio v-model="form.randomTone" label="2">关</el-radio>
          </el-form-item>
        </el-col>
      </el-row>
      <p>高级设置</p>
      <el-row class="param">
        <el-col :span="8">
          <el-form-item label="随机亮度概率" label-width="180px" prop="randomLightRate">
            <el-input-number size="small" v-model="form.randomLightRate" label="描述文字"></el-input-number>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="亮度范围" label-width="180px" prop="lightRange">
            <el-input-number size="small" v-model="form.lightRange" label="描述文字"></el-input-number>
          </el-form-item>

        </el-col>
      </el-row>
      <el-row class="param">
        <el-col :span="8">
          <el-form-item label="随机对比度概率" label-width="180px" prop="randomContrastRatioRate">
            <el-input-number size="small" v-model="form.randomContrastRatioRate" label="描述文字"></el-input-number>
          </el-form-item>

        </el-col>
        <el-col :span="8">
          <el-form-item label="对比度范围" label-width="180px" prop="contrastRatioRange">
            <el-input-number size="small" v-model="form.contrastRatioRange" label="描述文字"></el-input-number>
          </el-form-item>

        </el-col>
      </el-row>
      <el-row class="param">
        <el-col :span="8">
          <el-form-item label="随机饱和度概率" label-width="180px" prop="randomSaturationRate">
            <el-input-number size="small" v-model="form.randomSaturationRate" label="描述文字"></el-input-number>
          </el-form-item>

        </el-col>
        <el-col :span="8">
          <el-form-item label="饱和度范围" label-width="180px" prop="saturationRange">
            <el-input-number size="small" v-model="form.saturationRange" label="描述文字"></el-input-number>
          </el-form-item>

        </el-col>
      </el-row>
      <el-row class="param">
        <el-col :span="8">
          <el-form-item label="随机色调概率" label-width="180px" prop="randomToneRate">
            <el-input-number size="small" v-model="form.randomToneRate" label="描述文字"></el-input-number>
          </el-form-item>

        </el-col>
        <el-col :span="8">
          <el-form-item label="色调范围" label-width="180px" prop="toneRange">
            <el-input-number size="small" v-model="form.toneRange" label="描述文字"></el-input-number>
          </el-form-item>

        </el-col>
      </el-row>
      <el-row class="param">
        <el-col :span="8">
          <el-form-item label="随机水平翻转概率" label-width="180px" prop="randomTurnXRate">
            <el-input-number size="small" v-model="form.randomTurnXRate" label="描述文字"></el-input-number>
          </el-form-item>

        </el-col>
      </el-row>
    </div>
    <el-col :span="8" :offset="10">
      <el-button type="primary" @click="startTrain">启动训练</el-button>
    </el-col>
  </el-form>
</template>
<script>

import {startTrain} from "@/api/system/train";

export default {
  data() {
    return {
      form: {},
      // //target选项
      // valueal: '',
      // valuebackOne: '',
      // valuedataset: '',

      // radioList: {
      //   radio1: '1',
      //   radio2: '1',
      //   radio3: '1',
      //   radio4: '1',
      //   radio5: '1',
      //   radio6: '1',
      //   radio7: '1',
      //   radio8: '1',
      //   radio9: '1',
      //   radio10: '1',
      //
      // },
      learningText: '0 < Learning Rate < 1',
      // value11: true,
      // switchList: {
      //   value1: true,
      //   value11: true,
      //   value12: true,
      //   value13: true
      // },
      // inputList: {
      //   input1: '',
      //   input2: ''
      // },
      alOptions: [
        {
          value: 'YOLOv5',
          label: 'YOLOv5'
        }, {
          value: 'YOLOv8',
          label: 'YOLOv8'
        }, {
          value: 'UNet',
          label: 'UNet'
        }, {
          value: 'DeepLabv3+',
          label: 'DeepLabv3+'
        }],
      backOneOptions: [
        {
          value: 'ResNet18',
          label: 'ResNet18'
        }, {
          value: 'ResNet50 vd',
          label: 'ResNet50 vd'
        }, {
          value: 'ResNet101',
          label: 'ResNet101'
        }, {
          value: 'ResNet101_vd',
          label: 'ResNet101_vd'
        },
        {
          value: 'HRNet W18',
          label: 'HRNet W18'
        }],
      datasetOptions: [
        {
          value: '行人',
          label: '行人(1237)'
        }, {
          value: '车辆',
          label: '车辆(1455)'
        }, {
          value: '昆虫',
          label: '昆虫(976)'
        }, {
          value: '植物',
          label: '植物(2166)'
        }, {
          value: '美食',
          label: '美食(1549)'
        }
      ],
      // numList: {
      //   num1: 0,
      //   num2: 0,
      //   num3: 0,
      //   num4: 0,
      //   num5: 0,
      //   num6: 0,
      //   num7: 0,
      //   num8: 0,
      //   num9: 0,
      //   num10: 0,
      //   num11: 0,
      //   num12: 0,
      // },
    }
  },
  methods: {
    // handleChange(value) {
    //   console.log(value);
    // },
    startTrain() {
      console.log("form:", this.form)
      startTrain(this.form).then(response => {
        console.log("response:", response)
        //this.picList = response.data
        //console.log("picList:", this.picList)
        //this.atchDownload(this.picList, row.datasetName)
        //this.loading = false;
      })
    }
  }
}
</script>
<style scoped lang="scss">
.al {
  margin-top: 20px !important;
  margin-left: 50px !important;
}

.param {
  margin-top: 10px !important;
  margin-left: 50px !important;
}

element.el-form-item__label {
  width: unset !important;
}

.left {
  width: 50%;
  float: left;
}

.right {
  width: 50%;
  float: left;
}

.textSpan {
  margin-left: 20px;
  font-size: 14px;
  color: #7a7979;
}

p {
  font-size: 20px;
  font-weight: bolder;
  margin-left: 80px;
  padding-left: 15px;
  border-left: 5px solid #2b73c0;
  margin-top: 20px;
}


</style>

