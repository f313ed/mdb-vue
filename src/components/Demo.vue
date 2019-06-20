<template>
  <!-- <div>
    <mdb-btn gradient="peach" rounded>Peach gradient button</mdb-btn>
    <mdb-btn gradient="purple" rounded>Purple gradient button</mdb-btn>
    <mdb-btn gradient="blue" rounded>Blue gradient button</mdb-btn>
    <mdb-btn gradient="aqua" rounded>Aqua gradient button</mdb-btn>
  </div> -->


  <mdb-container>
    <mdb-row>
      <mdb-col md="12">
        <mdb-card-group class="my-5">
          <mdb-card personal class="mb-md-0 mb-4">
            <mdb-view hover>
              <mdb-card-image top src="https://assets.honeyplaza.biz/cast/2abe6c36/photo/l_1.jpg" alt="mdbCard image cap"/>
              <a><md-mask overlay="white-slight"/></a>
            </mdb-view>
            <mdb-card-body>
              <a><mdb-card-title>かんな</mdb-card-title></a>
              <a class="card-meta">09:00 〜 26:00</a>
              <a><mdb-icon icon="heart" class="pink-text pl-2 float-right" /></a>
              <a class="card-meta"></a>
              <mdb-card-text>激カワ!!美少女♪</mdb-card-text>
              <hr/>
              <p class="card-meta"><mdb-icon icon="angle-up" class="pink-text pr-2"/>上昇中</p>
            </mdb-card-body>
          </mdb-card>
          <mdb-card personal class="mb-md-0 mb-4">
            <mdb-view hover>
              <mdb-card-image top src="https://assets.honeyplaza.biz/cast/dbd576c7/photo/l_1.jpg" alt="mdbCard image cap"/>
              <a><md-mask overlay="white-slight"/></a>
            </mdb-view>
            <mdb-card-body>
              <a><mdb-card-title>しおん</mdb-card-title></a>
              <a><mdb-icon far icon="heart" class="pink-text pl-2 float-right" /></a>
              <a class="card-meta">09:00 〜 26:00</a>
              <mdb-card-text>可愛さと色気の核融合</mdb-card-text>
              <hr/>
              <p class="card-meta"><mdb-icon icon="angle-up" class="pink-text pr-2"/>上昇中</p>
            </mdb-card-body>
          </mdb-card>
          <mdb-card personal class="mb-md-0 mb-4">
            <mdb-view hover>
              <mdb-card-image top src="https://assets.honeyplaza.biz/cast/0f3a666f/photo/l_1.jpg" alt="mdbCard image cap"/>
              <a><md-mask overlay="white-slight"/></a>
            </mdb-view>
            <mdb-card-body>
              <a><mdb-card-title>ゆきほ</mdb-card-title></a>
              <a><mdb-icon far icon="heart" class="pink-text pl-2 float-right" /></a>
              <a class="card-meta">09:00 〜 26:00</a>
              <mdb-card-text>黒髪＆未経験＆自信</mdb-card-text>
              <hr/>
              <p class="card-meta"><mdb-icon icon="angle-double-up" class="pink-text pr-2"/>急上昇</p>
            </mdb-card-body>
          </mdb-card>
        </mdb-card-group>
      </mdb-col>
    </mdb-row>
  </mdb-container>

</template>

<script>
import { mdbBtn } from 'mdbvue';
import { mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardGroup, mdbCardTitle, mdbCardText, mdbCardImage, mdbMask, mdbIcon, mdbView } from 'mdbvue';

export default {
  name: 'Demo',
  components: {
    mdbBtn,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardGroup,
    mdbCardTitle,
    mdbCardText,
    mdbCardImage,
    mdbMask,
    mdbIcon,
    mdbView
  },
  data () {
    return {
      msg: 'ButtonPage'
    };
  }
}
</script>




<style scoped>
</style>
