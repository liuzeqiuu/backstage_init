<template>
  <div id="main-page">
    <header class="main-header">
      <!-- <h1><div class="logo"></div></h1> -->
      <p><a href="#" @click="exitLogin">退出</a></p>
      <p>欢迎您</p>
    </header>
    <section class="main-section">
      <el-menu
        background-color="#252525"
        text-color="#8f989f"
        active-text-color="#fff"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        v-show="!is_nav_collapse">
        <div v-if="menu_list.length" v-for="(menu, index) in menu_list" :key="index">
          <el-menu-item v-if="!menu.children" :index= "menu.index" @click="routeTo(menu.path, menu.index)">
            <template slot="title">
              <!--<i class="iconfont" :class="menu.icon"></i>-->
              <span slot="title">{{menu.name}}</span>
            </template>
          </el-menu-item>
          <el-submenu v-if="menu.children && menu.children.length" :index= "menu.index">
            <template slot="title">
              <!--<i class="iconfont" :class="menu.icon"></i>-->
              <span slot="title">{{menu.name}}</span>
            </template>
            <el-menu-item v-for="(child, child_index) in menu.children" :key="child_index" :index= "child.index" @click="routeTo(child.path, child.index)">
              <template slot="title">
                <!--<i class="iconfont" :class="child.icon"></i>-->
                <span slot="title">{{child.name}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </div>
      </el-menu>
      <!--导航收起按钮-->

      <!--<div @click="is_nav_collapse = !is_nav_collapse" class="sidebar-close-button" :class="is_nav_collapse ? 'close':''">-->
        <!--<i class="el-icon-d-arrow-left" :class="is_nav_collapse ? 'el-icon-d-arrow-right':''"></i>-->
      <!--</div>-->

      <!--按钮结束-->
      <div class="main-wrap" :class="is_nav_collapse ? 'expend':''">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>
<script>
export default{
  data () {
    return {
      active_nav_index:'1',
      username: '',
      is_nav_collapse: false,
      menu_list: [{
        index: '1',
        icon: 'icon-home',
        name: '用户管理',
        path: '',
        children: [{
          index: '1-1',
          icon: 'icon-jilu',
          name: '商家管理',
          path: '/Main/businessManagement',
        }]
      },{
        index: '2',
        icon: 'icon-edit-',
        name: '通用设置',
        path: '',
        children: [{
          index: '2-1',
          icon: 'icon-jilu',
          name: '资金方白名单',
          path: '/Main/MoneyList',
        }]
      },{
        index: '3',
        icon: 'icon-bar-chart-',
        name: '订单管理',
        path: ''
      }
      ]
    }
  },
  created() {
    // 使当前导航高亮
    this.deepMenu(this.menu_list, (menu) => {
      if (this.$route.fullPath.indexOf(menu.path) !== -1) {
        this.active_nav_index = menu.index
      }
    })
    // if (sessionStorage.name === undefined) {
    //   this.username = 'XXX';
    // } else{
    //   this.username = sessionStorage.name;
    // }
  },
  methods: {
    // 退出登录
    exitLogin() {
      // sessionStorage.clear();
      this.$router.push({
        path: '/login'
      });
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    routeTo(routePath, routeIdx){
      this.active_nav_index = routeIdx;
      this.active_nav_index = routeIdx;
      this.$router.push({
        path: routePath
      });
    },
    // 深层遍历 menu_list
    deepMenu (menu_list, fn) {
      menu_list.forEach((menu) => {
        // console.log(menu.children)
        menu.children ? this.deepMenu(menu.children, fn) : fn(menu)
      })
    }
  },
  watch: {
    $route: function (newRoute) {
      this.deepMenu(this.menu_list, (menu) => {
        if (newRoute.fullPath.indexOf(menu.path) !== -1) {
          this.active_nav_index = menu.index
        }
      })
    }
  }
}
</script>
<style scoped>
  #main-page{
    height: 100%;
    position: relative;
  .main-header{
    height: 50px;
    line-height: 50px;
    background: #171A25;
    background-color: #252525;
    padding: 0 20px;
  h1{
    font-size: 20px;
    float: left;
    padding-left:50px;
  padding-top:12px;

    .logo{
      width: 60px;
      height: 32px;
      background: url("../assets/img/icon.png") no-repeat -630px -235px;
    }
  }
  p{
    float: right;
    color: #fff;
    margin: 0 10px;
  a{
    color: #fff;
  }
  }
  }
  .main-section{
    position: absolute;
    width: 100%;
    top: 50px;
    bottom: 0;
  .el-menu-vertical-demo {
    float: left;
    height: 100%;
    overflow-y: scroll;
    width: 220px;
  &::-webkit-scrollbar {/*滚动条整体样式*/
     width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
     height: 1px;
   }
  &::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
     border-radius: 10px;
     -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
     background: #535353;
   }
  &::-webkit-scrollbar-track {/*滚动条里面轨道*/
     -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
     border-radius: 10px;
     background: #EDEDED;
   }
  .iconfont{
    margin-right: 5px;
  }
  }
  .sidebar-close-button{
    position:fixed;
    font-size: 18px;
    left:177px;
    z-index:1000;
    top:50%;
    line-height: 40px;
    text-align: center;
    height:40px;
    width:22px;
    margin-top: -20px;
    background-color:#5b586d;
    border-radius: 5px 0 0 5px;
    color:#fff;
  &.close{
     left: 0;
     border-radius: 0px 5px 5px 0;
   }
  }
  .main-wrap{
    height: 100%;
    margin-left: 220px;
    padding: 20px;
    background: #fff;
  &.expend{
     margin-left: 23px;
   }
  }
  }
  }
</style>
