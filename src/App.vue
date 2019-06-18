<template>
  <div id="app">

    <!-- Simple -->
    <mdb-navbar id="main-navbar" dark position="top" color="purple-gradient" scrolling :scrollingOffset="20">
      <mdb-navbar-brand to="/" waves class="font-weight-bold">
        MCG
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item to="/"><mdb-icon icon="search" size="1x" class="pr-2" /><strong>探す</strong></mdb-nav-item>
          <mdb-nav-item to="/partner"><mdb-icon icon="thumbs-up" size="1x" class="pr-2" /><strong>お相手から</strong></mdb-nav-item>
          <mdb-nav-item to="/message"><mdb-icon icon="comment-dots" size="1x" class="pr-2" /><strong>メッセージ</strong></mdb-nav-item>
          <mdb-nav-item to="/mypage"><mdb-icon icon="user-alt" size="1x" class="pr-2" /><strong>マイページ</strong></mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>

    <!-- アイコンver -->
    <!-- <mdb-navbar  color="aqua-gradient" class="lighten-3 py-4 mb-4">
      <mdb-navbar-nav nav>
        <mdb-nav-item to="/" anchorClass="white-text" active><p><mdb-icon icon="search" size="3x" class="amber-text pr-3" aria-hidden="true" />探す</p></mdb-nav-item>
        <mdb-nav-item to="/casts" anchorClass="white-text"><p><mdb-icon icon="thumbs-up" size="3x" class="indigo-text pr-3" aria-hidden="true" />お相手から</p></mdb-nav-item>
        <mdb-nav-item to="#" anchorClass="white-text"><p><mdb-icon icon="comment-dots" size="3x" class="pink-text pr-3" aria-hidden="true" />メッセージ</p></mdb-nav-item>
        <mdb-nav-item to="#" anchorClass="white-text"><p><mdb-icon icon="bell" size="3x" class="yellow-text pr-3" aria-hidden="true" /> お知らせ</p></mdb-nav-item>
        <mdb-nav-item to="#" anchorClass="white-text"><p><mdb-icon icon="user-alt" size="3x" class="green-text pr-3" aria-hidden="true" /> マイページ</p></mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar> -->

    <!-- origin -->
    <!-- <mdb-navbar id="main-navbar" dark position="top" color="stylish" scrolling :scrollingOffset="20">
      <mdb-navbar-brand to="/" waves class="font-weight-bold">
        MDB Vue
      </mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <mdb-nav-item exact to="/"><strong>Home</strong></mdb-nav-item>
          <mdb-nav-item to="/css"><strong>CSS</strong></mdb-nav-item>
          <mdb-nav-item to="/components"><strong>Components</strong></mdb-nav-item>
          <mdb-nav-item to="/advanced"><strong>Advanced</strong></mdb-nav-item>
          <mdb-nav-item to="/navigation"><strong>Navigation</strong></mdb-nav-item>
          <mdb-nav-item to="/forms"><strong>Forms</strong></mdb-nav-item>
          <mdb-nav-item to="/tables"><strong>Tables</strong></mdb-nav-item>
          <mdb-nav-item to="/modals"><strong>Modals</strong></mdb-nav-item>
          <mdb-nav-item to="/plugins"><strong>Plugins & addons</strong></mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar> -->

    <!-- 
    <p><mdb-icon icon="search" size="3x" class="amber-text pr-3" aria-hidden="true" /> amber-text</p>
    <p><mdb-icon icon="thumbs-up" size="3x" class="red-text pr-3" aria-hidden="true" /> red-text</p>
    <p><mdb-icon icon="comment-dots" size="3x" class="indigo-text pr-3" aria-hidden="true" /> indigo-text</p>
    <p><mdb-icon icon="bell" size="3x" class="cyan-text pr-3" aria-hidden="true" /> cyan-text</p>
    <p><mdb-icon icon="user-alt" size="3x" class="green-text pr-3" aria-hidden="true" /> green-text</p>
    
    <p><mdb-icon icon="camera-retro" size="5x" /> fa-camera-retro</p>
    <p><mdb-icon icon="bolt" size="3x" class="amber-text pr-3" aria-hidden="true" /> amber-text</p>
    <p><mdb-icon icon="bug" size="3x" class="red-text pr-3" aria-hidden="true" /> red-text</p>
    <p><mdb-icon icon="heart" size="3x" class="indigo-text pr-3" aria-hidden="true" /> indigo-text</p>
    <p><mdb-icon icon="bell" size="3x" class="cyan-text pr-3" aria-hidden="true" /> cyan-text</p>
    <p><mdb-icon icon="birthday-cake" size="3x" class="green-text pr-3" aria-hidden="true" /> green-text</p>
    -->

    <!-- <mdb-navbar  color="aqua-gradient" class="lighten-3 py-4 mb-4">
      <mdb-navbar-nav nav class="font-weight-bold">
        <mdb-nav-item href="#" active anchorClass="white-text">Active</mdb-nav-item>
        <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
        <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
        <mdb-nav-item href="#" anchorClass="white-text">Link</mdb-nav-item>
      </mdb-navbar-nav>
    </mdb-navbar> -->


    <main :style="{marginTop: '60px'}">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <mdb-footer color="purple-gradient">
      <p class="footer-copyright mb-0 py-3 text-center">
        &copy; {{new Date().getFullYear()}} Copyright: <a href="https://mdbootstrap.com/docs/vue/?utm_source=DemoApp&utm_medium=MDBVue"> MDBootstrap.com</a>
      </p>
    </mdb-footer>
    <!-- <img src="./assets/logo-mdb-vue-small.png">
    <router-view></router-view> -->
  </div>
</template>

<script>
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand, mdbFooter, mdbIcon } from 'mdbvue';

export default {
  name: 'App',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
    mdbFooter,
    mdbIcon
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
} */

.flyout {
	display:flex;
	flex-direction: column;
	min-height:100vh;
	justify-content: space-between;
}
.active{
  background-color: rgba(255, 255, 255, 0.1);
}
.demo-section {
  padding: 20px 0;
}
.demo-section > section {
  border: 1px solid #e0e0e0;
  padding: 15px;
}
.demo-section > h4 {
  font-weight: bold;
  margin-bottom: 20px;
}
.demo-title {
  color: #9e9e9e;
  font-weight: 700;
  margin-bottom: 0;
  padding-left: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

</style>
