<template>
  <mdb-container>
    <div class="search-list">
      <mdb-btn gradient="peach" rounded>本日のPickup</mdb-btn>
      <mdb-btn gradient="aqua" class="float-right" rounded>検索条件</mdb-btn>
    </div>
    <mdb-row>
      <mdb-col md="12">
        <mdb-card-group class="my-5">
          <mdb-card personal class="mb-md-0 mb-4">
            <mdb-view hover>
              <a><mdb-card-image top src="https://assets.honeyplaza.biz/cast/2abe6c36/photo/l_1.jpg" alt="mdbCard image cap"/></a>
              <a><mdb-mask overlay="white-slight"/></a>
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
              <a><mdb-card-image top src="https://assets.honeyplaza.biz/cast/dbd576c7/photo/l_1.jpg" alt="mdbCard image cap"/></a>
              <a><mdb-mask overlay="white-slight"/></a>
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
              <a><mdb-card-image top src="https://assets.honeyplaza.biz/cast/0f3a666f/photo/l_1.jpg" alt="mdbCard image cap"/></a>
              <a><mdb-mask overlay="white-slight"/></a>
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
import { mdbBtn, mdbContainer, mdbRow, mdbCol, mdbCard, mdbCardBody, mdbCardGroup, mdbCardTitle, mdbCardText, mdbCardImage, mdbMask, mdbIcon, mdbView } from 'mdbvue';

export default {
  name: 'SearchList',
  data () {
    return {
      msg: 'SearchList'
    };
  },
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
    mdbView,
  },
}
</script>

<style scoped>
</style>
