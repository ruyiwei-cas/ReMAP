<template>
  <!-- 标题-->
  <el-row class="headTitle">
    <el-col :span="24">
      <h1>ReMAP Dataset</h1>
    </el-col>
  </el-row>
  <!-- 介绍-->
  <el-row class="title">
    <el-col :span="16" :offset="4">
      <h2>
        <EditPen style="width: 1em; height: 1em; margin-right: 3px;position:relative;top:4px"/>
        Introduce
      </h2>
    </el-col>
  </el-row>
  <el-row class="introduce">
    <el-col :span="16" :offset="4" style="text-align: left;margin-bottom: 30px;font-size: 18px;line-height:25px">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Affective and psychological perception are pivotal in
      human-machine interaction and
      essential domains within
      artificial intelligence. Existing physiological signal-based affective and psychological datasets primarily rely
      on contact-based sensors, potentially introducing extraneous affectives during the measurement process.
      Consequently, creating accurate non-contact affective and psychological perception datasets is crucial for
      overcoming these limitations and advancing affective intelligence. In this paper, we introduce the Remote
      Multimodal Affective and Psychological (ReMAP) dataset, for the first time, apply head micro-tremor (HMT) signals
      for affective and psychological perception. ReMAP features 68 participants and comprises two sub-datasets. The
      stimuli videos utilized for affective perception undergo rigorous screening to ensure the efficacy and
      universality of affective elicitation. Additionally, we propose a novel remote affective and psychological
      perception framework, leveraging multimodal complementarity and interrelationships to enhance affective and
      psychological perception capabilities. Extensive experiments demonstrate HMT as a "small yet powerful"
      physiological signal in psychological perception. Our method outperforms existing state-of-the-art approaches in
      remote affective recognition and psychological perception.

    </el-col>
    <el-col :span="16" :offset="4">
      <img src="../assets/introduceImg.png" style="width: 100%">
    </el-col>
  </el-row>
  <!-- 采集数据-->
  <el-row class="title">
    <el-col :span="16" :offset="4">
      <h2>
        <Folder style="width: 1em; height: 1em; margin-right: 3px;position:relative;top:4px"/>
        Examples&nbsp&nbspof&nbsp&nbspData&nbsp&nbspCollection
      </h2>
    </el-col>
  </el-row>
  <el-row class="collectionData">
    <el-col :span="16" :offset="4" style="text-align: left;margin-bottom: 30px;font-size: 18px;line-height:25px">
      <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To ensure the validity of the experimental data, we adhere to
        the following rules with participants:</h4>
      <ul>
        <li>The data collection process follows the principle of voluntariness,
          ensuring that participants are involved in the experiment’s entirely of their own accord
        </li>
        <li>Each participant
          signs an informed consent form, demonstrating a clear understanding of the significance, purpose, and scope of
          data collection.
        </li>
        <li>Self-assessment content provided by participants during the data collection process should
          be truthful and accurate.Before data collection commences, an introduct video is played to familiarize
          participants with the data collection process, educing unfamiliarity that could introduce additional emotions
          such as anxiety or fear. It also helps participants become acquainted with contact-based data collection
          devices, mitigating any extra emotional influence from their usage.The stimuli videos being played are as
          shown
          in Figure 3. All stimuli videos are sourced in 4K, and the playback devices all utilize screens with 4K
          resolution
        </li>
      </ul>
    </el-col>
    <el-col :span="16" :offset="4">
      <img src="../assets/introduceImg.png" style="width: 100%">
    </el-col>
    <!--    <el-col :span="16" :offset="4">-->
    <!--    -->
    <!--      <el-table :data="tableData" stripe style="width: 100%" class="dataTable">-->
    <!--        <el-table-column prop="id" label="ID" width="100" align="center"/>-->
    <!--        <el-table-column prop="rgb" label="RGB" align="center">-->
    <!--          <template v-slot="scope">-->
    <!--            <div v-show="scope.row.rgb">-->
    <!--              <img :src="scope.row.rgb" style="width: 100%">-->
    <!--            </div>-->
    <!--          </template>-->
    <!--        </el-table-column>-->
    <!--        <el-table-column prop="depth" label="Depth" align="center">-->
    <!--          <template v-slot="scope">-->
    <!--            <div v-show="scope.row.depth">-->
    <!--              <img :src="scope.row.depth" style="width: 100%">-->
    <!--            </div>-->
    <!--          </template>-->
    <!--        </el-table-column>-->
    <!--        <el-table-column prop="nir" label="Nir" align="center">-->
    <!--          <template v-slot="scope">-->
    <!--            <div v-show="scope.row.nir">-->
    <!--              <img :src="scope.row.nir" style="width: 100%">-->
    <!--            </div>-->
    <!--          </template>-->
    <!--        </el-table-column>-->
    <!--        <el-table-column prop="mmwave" label="MMWave" align="center">-->
    <!--          <template v-slot="scope">-->
    <!--            <div v-show="scope.row.mmwave">-->
    <!--              <img :src="scope.row.mmwave" style="width: 100%">-->
    <!--            </div>-->
    <!--          </template>-->
    <!--        </el-table-column>-->
    <!--        <el-table-column prop="imu" label="IMU" align="center">-->
    <!--          <template v-slot="scope">-->
    <!--            <div v-show="scope.row.imu">-->
    <!--              <img :src="scope.row.imu" style="width: 100%">-->
    <!--            </div>-->
    <!--          </template>-->
    <!--        </el-table-column>-->
    <!--        &lt;!&ndash;        <el-table-column prop="angle" label="Angle" align="center">&ndash;&gt;-->
    <!--        &lt;!&ndash;          <template v-slot="scope">&ndash;&gt;-->
    <!--        &lt;!&ndash;            <div v-show="scope.row.angle">&ndash;&gt;-->
    <!--        &lt;!&ndash;              <img :src="scope.row.angle" style="width: 100%">&ndash;&gt;-->
    <!--        &lt;!&ndash;            </div>&ndash;&gt;-->
    <!--        &lt;!&ndash;          </template>&ndash;&gt;-->
    <!--        &lt;!&ndash;        </el-table-column>&ndash;&gt;-->
    <!--      </el-table>-->
    <!--    </el-col>-->
  </el-row>
  <!-- 诱导视频-->
  <el-row class="title">
    <el-col :span="16" :offset="4">
      <h2>
        <VideoCamera style="width: 1em; height: 1em; margin-right: 3px;position:relative;top:4px"/>
        Stimuli&nbsp&nbspVideo
      </h2>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="16" :offset="4" style="text-align: left;margin-bottom: 30px;font-size: 18px;line-height:25px">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Stimuli videos under 4K resolution, encompassing a variety of
      formats including movies, TV dramas, animations, and documentaries: All videos are played using a 4K player to
      ensure the optimal emotion-inducing effect on the participants.<br/>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Due to the subjective differences in volunteer annotations, there
      will be discrepancies in the consistency of Valence-Arousal (VA) ratings for the 200 cropped video clips.
      Therefore, it is necessary to address the problem of selecting 40 video clips from the 200 that are evenly
      distributed in the VA space, have high consistency in VA ratings, and are most representative based on the
      volunteers’ VA scores. We employ a weighted K-means clustering algorithm to select the desired emotion-stimuli
      video clips.
    </el-col>
  </el-row>
  <el-row :gutter="3" class="inducedVideo" style="padding-top: 30px">
    <el-col :span="4">
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/001.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/002.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/003.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/004.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/005.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/006.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/007.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/008.gif" style="width:100%"/>
    </el-col>
    <el-col :span="4">
    </el-col>
  </el-row>
  <el-row :gutter="3" class="inducedVideo">
    <el-col :span="4">
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/009.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/010.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/011.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/012.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/013.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/014.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/015.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/016.gif" style="width:100%"/>
    </el-col>
    <el-col :span="4">
    </el-col>
  </el-row>
  <el-row :gutter="3" class="inducedVideo">
    <el-col :span="4">
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/017.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/018.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/019.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/020.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/021.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/022.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/023.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/024.gif" style="width:100%"/>
    </el-col>
    <el-col :span="4">
    </el-col>
  </el-row>
  <el-row :gutter="3" class="inducedVideo">
    <el-col :span="4">
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/025.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/026.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/027.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/028.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/029.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/030.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/031.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/032.gif" style="width:100%"/>
    </el-col>
    <el-col :span="4">
    </el-col>
  </el-row>
  <el-row :gutter="3" class="inducedVideo" style="padding-bottom: 30px">
    <el-col :span="4">
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/033.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/034.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/035.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/036.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/037.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/038.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/039.gif" style="width:100%"/>
    </el-col>
    <el-col :span="2">
      <img src="../assets/induceVideo/040.gif" style="width:100%"/>
    </el-col>
    <el-col :span="4">
    </el-col>
  </el-row>

  <!-- 数据结构-->
  <el-row class="title">
    <el-col :span="16" :offset="4">
      <h2>
        <Grid style="width: 1em; height: 1em; margin-right: 3px;position:relative;top:4px"/>
        Data&nbsp&nbspStructure
      </h2>
    </el-col>
  </el-row>
  <el-row class="dataStructure">
    <el-col :span="16" :offset="4">
      <img src="../assets/structure.png" style="width:100%"/>
    </el-col>
  </el-row>
  <!-- 附录-->
  <el-row class="title">
    <el-col :span="16" :offset="4">
      <h2>
        <Grid style="width: 1em; height: 1em; margin-right: 3px;position:relative;top:4px"/>
        APPENDIX
      </h2>
    </el-col>
  </el-row>
  <el-row class="appendix">
    <el-col :span="16" :offset="4" style="text-align: left;margin-bottom: 30px;font-size: 18px;line-height:25px">
      <h3>Abbreviations: Physiological Signals</h3>
      The following are abbreviations for physiological signals that appear in the paper, along with further
      explanations for these signals.: <b>EEG</b> - Electroencephalogram: This is a contact-based measurement method
      used to
      record brain electrical activity. <b>ECG</b> - Electrocardiogram: This refers to a contact-based measurement
      method used
      for recording cardiac electrical activity over a period of time. <b>EMG</b> - Electromyography: This is a
      technique for
      evaluating and recording the electrical activity produced by skeletal muscles. <b>EOG</b> - Electrooculography:
      This is a
      technique for measuring the corneoretinal standing potential that exists between the front and the back of the
      human eye. <b>GSR</b> - Galvanic Skin Response: Also known as electrodermal activity (EDA), this refers to changes
      in
      sweat gland activity that are reflective of the intensity of our emotional state, otherwise known as emotional
      arousal. <b>RA</b> – Respiratory Amplitude: This is employed to measure the number of breaths and the amplitude of
      respiration over a specific period of time. <b>ST</b> - Skin Temperature: By measuring an individual’s ST, we can
      observe
      inherent psychological and emotional changes.. <b>HR</b> - Heart Rate: This refers to the number of heartbeats per
      unit
      of time. It varies based on the body’s physical needs.
    </el-col>
    <el-col :span="16" :offset="4" style="text-align: left;margin-bottom: 30px;font-size: 18px;line-height:25px">
      <h3>Abbreviations: Stimuli Video Resolution</h3>
      In previously released affective and psychological datasets, the stimulus videos used to elicit emotions were
      primarily in Standard Definition (SD) and High Definition (HD) formats. However, in the ReMAP dataset, to achieve
      a more profound elicitation effect, we have opted to use 4K videos for stimulation. The specific resolutions and
      implications represented by SD, HD, and 4K are as follows: <b>SD</b>Standard Definition: This typically refers to
      a
      resolution of 640 x 480 pixels for NTSC (National Television System Committee, used in North America and other
      places) and 720 x 576 pixels for PAL (Phase Alternating Line, used in Europe and other places). <b>HD</b>High
      Definition:
      This generally refers to video of a higher resolution than SD. It usually means a resolution of 1280 x 720 pixels
      (also known as 720p) or 1920 x 1080 pixels (also known as 1080p or Full HD). <b>4K</b>- 4K Resolution: This is a
      high-definition resolution that has more than four times as many pixels as 1080p HD. It refers to a resolution of
      3840 x 2160 pixels. It provides more detailed and sharper images compared to HD

    </el-col>
    <el-col :span="16" :offset="4" style="text-align: left;margin-bottom: 30px;font-size: 18px;line-height:25px">
      <h3>AAbbreviations: Multimodal Sensors</h3>
      During the data collection process for the ReMAP dataset, we employ multimodal sensors (RGB, NIR, Depth, IMU,
      mmWave) to acquire physiological data. Among these, RGB, NIR, Depth, and mmWave are used to capture non-contact
      micro-motion human patterns, while the IMU provides the ground truth for HMT. The specific meanings of each
      modality are as follows: <b>RGB</b> - Red Green Blue: This is a color model used in imaging technologies. An RGB
      image is
      one that utilizes such a system. <b>NIR</b> - Near Infrared: This is a type of light in the electromagnetic
      spectrum that
      is just beyond visible light. Combined with visible light, it can achieve a wider range of imaging effects. <b>Depth</b>
      - Depth Sensing: In the context of imaging and cameras, depth refers to the ability to perceive the distance of an
      object. During data collection, Depth Sensing cameras employing various technologies, such as Time of Flight
      (TOF), create depth maps. <b>IMU</b> - Inertial Measurement Unit: This is a device that measures and reports a
      body’s
      specific force, angular rate, and the orientation of the body, using a combination of accelerometers, gyroscopes,
      and sometimes magnetometers.
      <b>mmWave/mmRadar</b> - Millimeter Wave Radar: This is a band of radio frequencies in the electromagnetic
      spectrum. In
      our actual data collection process, we use millimeter-wave radar that ranges from 60 to 64 gigahertz (GHz), with a
      bandwidth of 4Hz. It is referred to as the millimeter wave because the wavelengths in this band are measured in
      millmeters
    </el-col>
    <el-col :span="16" :offset="4" style="text-align: left;margin-bottom: 30px;font-size: 18px;line-height:25px">
      <h3>Abbreviations: Self-Assessment</h3>
      In the collection process for ReMAP dataset, three self-assessment forms are utilized. These include the BFMS for
      personality selfassessment, and the continuous (SAVA) and discrete emotion selfassessment scales. The discrete
      emotion self-assessment is based on six fundamental emotions: fear, anger, disgust, sadness, happiness, and
      surprise. The specific meanings of BFMS and SAVA are as follows: <b>BFMS</b> - Big-Five Marker Scale. The BFMS was
      designed to assess the constellation of traits defined by the Five Factor Theory of Personality. The OCEAN
      represents the five major traits measured by the Big-Five Marker Scale. Specifically, Openness is characterized by
      originality, curiosity, and ingenuity. Conscientiousness is characterized by orderliness, responsibility, and
      dependability. Extraversion is characterized by talkativeness, assertiveness, and energy. Agreeableness is
      characterized by good-naturedness, cooperativeness, and trust. Neuroticism is characterized by upsetability and is
      the polar opposite of emotional stability. This factor is sometimes scored in the opposite direction and referred
      to as Emotional Stability. <b>SAVA</b> - Self-Assessment of Valence-Arousal. The circumplex model of emotions was
      developed by James Russell. This model suggests that emotions are distributed in a two dimensional circular space,
      encompassing arousal and valence dimensions. Arousal represents the vertical axis, valence represents the
      horizontal axis, and the center of the circle represents neutral valence and moderate level of arousal. In this
      model, emotional states can be represented at any level of valence and arousal, or at neutral levels of one or
      both of these factors.
    </el-col>
  </el-row>
  <el-footer style="color: #159957">contact us：Yiwei.ru@cripac.ia.ac.cn
  </el-footer>
</template>

<script>

export default {
  name: "main",
  data() {
    return {
      tableData: [
        // {
        //   id: 1,
        //   rgb: require('../assets/emotion/rgb1.png'),
        //   depth: require('../assets/emotion/depth1.png'),
        //   nir: require('../assets/emotion/nir1.png'),
        //   mmwave: require('../assets/emotion/heart.png'),
        //   imu: require('../assets/emotion/position.png'),
        //   angle: require('../assets/emotion/angle.png'),
        // },
        // {
        //   id: 2,
        //   rgb: require('../assets/emotion/rgb2.png'),
        //   depth: require('../assets/emotion/depth2.png'),
        //   nir: require('../assets/emotion/nir2.png'),
        //   mmwave: require('../assets/emotion/heart.png'),
        //   imu: require('../assets/emotion/position.png'),
        //   angle: require('../assets/emotion/angle.png'),
        // },
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

.appendix {
  padding-bottom: 100px;
}

.dataTable {
  font-size: 16px;
  color: #3333 !important;
}

h3 {
  color: #159957 !important;;
}
</style>