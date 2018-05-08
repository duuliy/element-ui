<template>
  <div>
    <div class="sceenitem" v-for="(item,index) in sceneArr" :key="item.id">
      <span>{{item.name}}</span>
      <!--将数据数组的index放置到input的value中同时将选中的选项的value传回到父组件-->
      <input type="radio" :value="item.scene_id"  name="sceenchoice" @change="getfuncchoise(item.scene_id)">
      <!--<input type="radio" :value="item.scene_name"  name="sceenchoice" @change="getfuncchoise(item.scene_name)">-->

    </div>
    <!--<span>{{scene_name}}</span>-->
    <!--<input type="radio" value="1" name="sceenchoice" @selected="selected">-->
  </div>
</template>

<script>
    export default {
      name: 'scenebox',
      data(){
        return {
          sceneArr: [],
//              sceneArr:[{scene_id:'1',scene_name:"卧室"},
//                {scene_id:'2',scene_name:"客厅"},
//                {scene_id:'3',scene_name:"厨房"},
//                {scene_id:'4',scene_name:"卫生间"},
//                {scene_id:'5',scene_name:"书房"}
//              ],
        }
      },
//      props: ['scene_name'],
      methods: {
//        selected:function(){
//            this.$emit("selected");
//          var sceenchoice=document.getElementsByName("sceenchoice");
//          for   (var i=0;i<sceenchoice.length;i++) {
//            if (sceenchoice[i].checked) {
//              console.log("******************",sceenchoice[i].value);
//            }
//          }
//        }
        getfuncchoise: function (index) {
          console.log("场景编号",index);
          this.$emit("chosefunc", index)
        }
      },
//      请求场景数据
      created(){
        this.$axios.get("/api/startDiyscene.do").then(response => {
          console.log("场景",response);
          this.sceneArr = response.data
          console.log(this.sceneArr)
        });
      }
    }


</script>

<style scoped>
  span,input{
    display: block;
  }
  input{
    margin-left: 30%;
  }
  .sceenitem{
    width: 50px;
    height: 40px;
    margin-right: 8%;
    display: inline-block;
    /*outline: 1px solid pink;*/
  }
  .sceenitem span,.sceenitem input{
    display: block;
  }
  .sceenitem input{
    margin-left: 30%;
  }
</style>
