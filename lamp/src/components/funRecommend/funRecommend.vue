<template>
  <div>
    <div id="yuanbox">
      <div v-for="(item,index) in funReData"
           :key="item.act_id"
           @click='jump(index)'
        ></div>
    </div>


    <!--============================智能遥控部分===================================-->

    <div class="d_jump" id="yaokong">
      <div class="ybanner">

        <img :src="'static/'+funReData[0].main_path" alt="" class="bg"/>
        <div class="zhezhao"></div>
        <img :src="'static/'+funReData[0].act_img1" alt="" class="ph"/>

        <div class="ybtext">
          <h1>{{funReData[0].act_name}}</h1>
          <p>{{funReData[0].info}}</p>
        </div>

      </div>
      <div class="ymiaoshu">
        <div class="ymtext">
          <h1>{{funReData[0].act_info}}</h1>
          <p>{{funReData[0].act_all_info}}</p>
        </div>
        <div class="yimgbox">
          <img :src="'static/'+funReData[0].act_img2" alt=""/>
          <img :src="'static/'+funReData[0].act_img3" alt=""/>
        </div>

      </div>
    </div>
    <!--=================================感应照明===============================================-->
    <div class="d_jump" id="zhaoming">
      <div class="zbanner">
        <img :src="'static/'+funReData[1].main_path" alt=""/>

        <div class="zbtext">
          <h1>{{funReData[1].act_name}}</h1>
          <p>{{funReData[1].info}}</p>
        </div>

      </div>
      <div class="zmiaoshu">
        <div class="zmtext">
          <h1>{{funReData[1].act_info}}</h1>
          <p>{{funReData[1].act_all_info}}</p>
        </div>
        <div class="imgzm">
          <img :src="'static/'+funReData[1].act_img1" alt="" style="width: 880px;height:454px"/>
        </div>


      </div>

    </div>

    <!--=======================================智能调色====================================================-->
    <div class="d_jump" id="tiaose">
      <div class="tbanner">
        <img :src="'static/'+funReData[2].main_path" alt="" class="bg"/>
        <div class="tzhezhao"></div>
        <img :src="'static/'+funReData[2].act_img1" alt="" class="ph"/>

        <div class="tbtext">
          <h1>{{funReData[2].act_name}}</h1>
          <p>{{funReData[2].info}}</p>
        </div>

      </div>
      <div class="tmiaoshu">
        <div class="tmtext">
          <h1>{{funReData[2].act_info}}</h1>
          <p>{{funReData[2].act_all_info}}</p>
        </div>
        <img :src="'static/'+funReData[2].act_img2" alt=""/>

      </div>

    </div>

    <!--=======================================智能控温===========================================================-->
    <div class="d_jump" id="kongwen">
      <div class="kbanner">
        <img :src="'static/'+funReData[3].main_path" alt="" class="bg"/>
        <img :src="'static/'+funReData[3].act_img1" alt="" class="ph"/>

        <div class="kbtext">
          <h1>{{funReData[3].act_name}}</h1>
          <p>{{funReData[3].info}}</p>
        </div>

      </div>
      <div class="kmiaoshu">
        <div class="kmtext">
          <h1>{{funReData[3].act_info}}</h1>
          <p>{{funReData[3].act_all_info}}</p>
        </div>
        <div class="kimgbox">
          <img :src="'static/'+funReData[3].act_img2" alt="" class="imgleft"/>
          <img :src="'static/'+funReData[3].act_img3" alt="" class="imgright"/>
        </div>


      </div>

    </div>
    <!--=========================================自调亮度====================================================================-->
    <div class="d_jump" id="liangdu">
      <div class="lbanner">
        <img :src="'static/'+funReData[4].main_path" alt="" class="bg"/>
        <img :src="'static/'+funReData[4].act_img1" alt="" class="ph"/>

        <div class="lbtext">
          <h1>{{funReData[4].act_name}}</h1>
          <p>{{funReData[4].info}}</p>
        </div>

      </div>
      <div class="lmiaoshu">
        <div class="lmtext">
          <h1>{{funReData[4].act_info}}</h1>
          <p>{{funReData[4].act_all_info}}</p>
        </div>

        <img :src="'static/'+funReData[4].act_img2" alt=""/>



      </div>

    </div>
    <!--=========================================安全检测====================================================================-->
    <div class="d_jump" id="anquan">
      <div class="abanner">
        <img :src="'static/'+funReData[5].main_path" alt="" class="bg"/>
        <!--<img src="../../../static/funReImages/aphone3.jpg" alt="" class="ph"/>-->

        <div class="abtext">
          <h1>{{funReData[5].act_name}}</h1>
          <p>{{funReData[5].info}}</p>
        </div>

      </div>
      <div class="amiaoshu">
        <div class="amtext">
          <h1>{{funReData[5].act_info}}</h1>
          <p>{{funReData[5].act_all_info}}</p>
        </div>
        <div class="aimgbox">
          <img :src="'static/'+funReData[5].act_img1" alt=""/>
          <img :src="'static/'+funReData[5].act_img2" alt=""/>
          <img :src="'static/'+funReData[5].act_img3" alt=""/>
          <img :src="'static/'+funReData[5].act_img4" alt=""/>

        </div>




      </div>

    </div>
    <!--=========================================助眠功能====================================================================-->
    <div class="d_jump" id="zhumian">
      <div class="zmbanner">
        <img :src="'static/'+funReData[6].main_path" alt="" class="bg"/>
        <img :src="'static/'+funReData[6].act_img1" alt="" class="ph"/>

        <div class="zmbtext">
          <h1>{{funReData[6].act_name}}</h1>
          <p>{{funReData[6].info}}</p>
        </div>

      </div>
      <div class="zmmiaoshu">
        <div class="zmmtext">
          <h1>{{funReData[6].act_info}}</h1>
          <p>{{funReData[6].act_all_info}}</p>
        </div>
        <div class="zmimgbox">
          <img :src="'static/'+funReData[6].act_img2" alt=""/>

        </div>




      </div>

    </div>

  </div>


</template>

<script type="es6">
  export default {
    name:'funRecommend',
    data(){
      return{
         funReData:[
           {act_id:1,act_name:'智能遥控',info:'履行所有LED灯泡的照明和节能功效',main_path:'funReImages/bg1.jpg',act_img1:'funReImages/yphone1.png',act_img2:'funReImages/yphone2.jpg',act_img3:'funReImages/yk.jpg',act_img4:'images/1.jpg',act_info:'内置大功率灯珠，灯头内有WIFI+蓝牙接收模块',act_all_info:'配备相应的APP+WIFI+蓝牙手持智能控制能实现1600万种颜色的调节，灯光亮度多级调节，智能遥控灯泡颜色可DIY调出自已喜欢的多种颜色。'},
           {act_id:2,act_name:'感应照明',info:'履行所有LED灯泡的照明和节能功效',main_path:'funReImages/bg2.jpg',act_img1:'funReImages/gy.gif',act_img2:'images/1.jpg',act_img3:'images/1.jpg',act_img4:'images/1.jpg',act_info:'内置大功率灯珠，灯头内有WIFI+蓝牙接收模块',act_all_info:'配备相应的APP+WIFI+蓝牙手持智能控制能实现1600万种颜色的调节，灯光亮度多级调节，智能遥控灯泡颜色可DIY调出自已喜欢的多种颜色。'},
           {act_id:3,act_name:'智能调色',info:'履行所有LED灯泡的照明和节能功效',main_path:'funReImages/bg3.jpg',act_img1:'funReImages/tphine.png',act_img2:'funReImages/tiaose.jpg',act_img3:'images/1.jpg',act_img4:'images/1.jpg',act_info:'内置大功率灯珠，灯头内有WIFI+蓝牙接收模块',act_all_info:'配备相应的APP+WIFI+蓝牙手持智能控制能实现1600万种颜色的调节，灯光亮度多级调节，智能遥控灯泡颜色可DIY调出自已喜欢的多种颜色。'},
           {act_id:4,act_name:'智能控温',info:'履行所有LED灯泡的照明和节能功效',main_path:'funReImages/bg4.jpg',act_img1:'funReImages/kphone.jpg',act_img2:'funReImages/left.jpg',act_img3:'funReImages/12.jpg',act_img4:'images/1.jpg',act_info:'内置大功率灯珠，灯头内有WIFI+蓝牙接收模块',act_all_info:'配备相应的APP+WIFI+蓝牙手持智能控制能实现1600万种颜色的调节，灯光亮度多级调节，智能遥控灯泡颜色可DIY调出自已喜欢的多种颜色。'},
           {act_id:5,act_name:'自调亮度',info:'履行所有LED灯泡的照明和节能功效',main_path:'funReImages/bg5.jpg',act_img1:'funReImages/lphone.jpg',act_img2:'funReImages/l.jpg',act_img3:'images/1.jpg',act_img4:'images/1.jpg',act_info:'内置大功率灯珠，灯头内有WIFI+蓝牙接收模块',act_all_info:'配备相应的APP+WIFI+蓝牙手持智能控制能实现1600万种颜色的调节，灯光亮度多级调节，智能遥控灯泡颜色可DIY调出自已喜欢的多种颜色。'},
           {act_id:6,act_name:'安全检测',info:'监测房间环境，预防天然气泄漏，漏电以及火灾灯安全事故',main_path:'funReImages/life_banner2.jpg',act_img1:'funReImages/card_01.png',act_img2:'funReImages/card_02.png',act_img3:'funReImages/card_03.png',act_img4:'funReImages/card_04.png',act_info:'LED灯监测房间环境，预防安全事故',act_all_info:'配备相应的APP+WIFI+蓝牙手持智能控制能实现1600万种颜色的调节，灯光亮度多级调节，智能遥控灯泡颜色可DIY调出自已喜欢的多种颜色。'},
           {act_id:7,act_name:'助眠功能',info:'营造舒缓安然气氛，让你更好自然入睡',main_path:'funReImages/bg6.jpg',act_img1:'funReImages/sphone.jpg',act_img2:'funReImages/simg.jpg',act_img3:'images/1.jpg',act_img4:'images/1.jpg',act_info:'开启“睡眠模式”，安心入睡如此简单。',act_all_info:'睡眠环境监测编辑内置了光线、温湿度、声音等多款传感器，能够捕捉用户睡眠环境的状态。'}
         ]

      }
    },

    mounted(){
      setTimeout(function(){
        var ybtext=document.getElementsByClassName("ybtext")[0];
        ybtext.style.webkitTransition="all .6s linear";
        ybtext.style.top="10%";
        ybtext.style.opacity="1";
      },100);
      setTimeout(function(){
        var yaokong=document.getElementById("yaokong");
        var yimg=yaokong.getElementsByTagName("img");
        yimg[1].style.webkitTransition="all .6s linear";
        yimg[1].style.left="7%";
        yimg[1].style.top="10%";
        yimg[1].style.opacity="1";
      },600);
      setTimeout(function(){
        var zhezhao=document.getElementsByClassName("zhezhao")[0]
        zhezhao.style.webkitTransition="all .8s linear";
        zhezhao.style.opacity="0";
      },1400);

      var yuan=yuanbox.getElementsByTagName("div");
      yuan[0].className="active";

      this.$nextTick(function(){
        window.addEventListener('scroll',this.onScroll)
      })
    },
    methods:{
      /*锚点滑动效果*/
      jump(index){
        let jump=document.querySelectorAll('.d_jump');
        //获取需要滚动的距离
        let total=jump[index].offsetTop;
        console.log(total);
        /*获取当前滚动条与窗体顶部的距离*/
        let distance=document.documentElement.scrollTop ||window.pageYOffset ||document.body.scrollTop;
         /*平滑滚动，时长500ms,每10毫秒一跳，共50跳*/
        let step=total/50;
        if(total>distance){
          smoothDown();
        }else{
          let newTotal=distance-total;
          step=newTotal/50;
          smoothUp();
        }
        function smoothDown(){
          if(distance<total){
            distance+=step;
            document.body.scrollTop=distance;
            document.documentElement.scrollTop=distance;
            window.pageYOffset=distance;
            setTimeout(smoothDown,10)
          }else{
            document.body.scrollTop=total;
            document.documentElement.scrollTop=total;
            window.pageYOffset=total
          }
        }
        function smoothUp(){
          if(distance>total){
            distance-=step;
            document.body.scrollTop=distance;
            document.documentElement.scrollTop=distance;
            window.pageYOffset=distance;
            setTimeout(smoothUp,10)
          }else{
            document.body.scrollTop=total;
            document.documentElement.scrollTop=total;
            window.pageYOffset=total
          }
        }
      },
      onScroll(){
        let scrolled=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
//        console.log('aaa',window.document.documentElement);
        /*===================================图片加载效果==========================*/
        var ymiaoshu=document.getElementsByClassName("ymiaoshu")[0];
        var zmiaoshu=document.getElementsByClassName("zmiaoshu")[0];
        var tmiaoshu=document.getElementsByClassName("tmiaoshu")[0];
        var kmiaoshu=document.getElementsByClassName("kmiaoshu")[0];
        var lmiaoshu=document.getElementsByClassName("lmiaoshu")[0];
        var amiaoshu=document.getElementsByClassName("amiaoshu")[0];
        var zmmiaoshu=document.getElementsByClassName("zmmiaoshu")[0];
        if(scrolled>=130){
           var yh=ymiaoshu.getElementsByTagName("h1")[0];
          yh.style.marginTop="3%";
          yh.style.opacity="1";
          yh.style.webkitTransition="all .6s linear";
         }
        if(scrolled>=200){
          var yp=ymiaoshu.getElementsByTagName("p")[0];
          yp.style.marginTop="0px";
          yp.style.opacity="1";
          yp.style.webkitTransition="all .6s linear";
        }
        if(scrolled>=470){
          var yimgbox=document.getElementsByClassName("yimgbox")[0];
          var yimg=yimgbox.getElementsByTagName("img");
          yimgbox.style.marginTop="5%";
          yimg[0].style.opacity="1";
          yimg[1].style.opacity="1";
          yimg[0].style.webkitTransition="all .8s linear";
          yimg[1].style.webkitTransition="all .8s linear";
          yimg[0].style.marginLeft="17%";
          yimg[1].style.marginLeft="70px";
        }
        if(scrolled>=900){
          var zbtext=document.getElementsByClassName("zbtext")[0];
          zbtext.style.opacity="1";
          zbtext.style.top="10%";
          zbtext.style.webkitTransition="all .8s linear";
        }
        if(scrolled>=1450){
          var zh=zmiaoshu.getElementsByTagName("h1")[0];
          zh.style.opacity="1";
          zh.style.marginTop="3%";
          zh.style.webkitTransition="all .8s linear";
        }
        if(scrolled>=1600){
          var zp=zmiaoshu.getElementsByTagName("p")[0];
          zp.style.opacity="1";
          zp.style.marginTop="0px";
          zp.style.webkitTransition="all .8s linear";
          setTimeout(function(){
            var imgzm=document.getElementsByClassName("imgzm")[0];
            imgzm.style.opacity="1";
            imgzm.style.marginTop="3%";
            imgzm.style.webkitTransition="all .8s linear";

          },800)
        }if(scrolled>2100){
          var tiaose=document.getElementById("tiaose");
          var tbtext=document.getElementsByClassName("tbtext")[0];
          var tzhezhao=tiaose.getElementsByClassName("tzhezhao")[0];
          tbtext.style.top="10%";
          tbtext.style.opacity="1";
          tbtext.style.webkitTransition="all .8s linear";
          setTimeout(function(){
            var ph=tiaose.getElementsByClassName("ph")[0];
            ph.style.left="7%";
            ph.style.top="10%";
            ph.style.opacity="1";
            ph.style.webkitTransition="all .8s linear";

          },700);
          setTimeout(function(){
            tzhezhao.style.opacity="0.6";
            tzhezhao.style.webkitTransition="all .8s linear";
          },1100);
          setTimeout(function(){
            tzhezhao.style.opacity="0.3";
            tzhezhao.style.webkitTransition="all .8s linear";
          },1500);
          setTimeout(function(){
            tzhezhao.style.opacity="0";
            tzhezhao.style.webkitTransition="all .8s linear";
          },1900);
        }
        if(scrolled>=2900){
          var th=tmiaoshu.getElementsByTagName("h1")[0];
          th.style.marginTop="3%";
          th.style.opacity="1";
          th.style.webkitTransition="all .8s linear";
        }
        if(scrolled>=3000){
          var tp=tmiaoshu.getElementsByTagName("p")[0];
          tp.style.marginTop="0";
          tp.style.opacity="1";
          tp.style.webkitTransition="all .8s linear";
          setTimeout(function(){
           var timg=tmiaoshu.getElementsByTagName("img")[0];
            timg.style.marginTop="3%";
            timg.style.opacity="1";
            timg.style.webkitTransition="all .8s linear";
          },700)

        }
        if(scrolled>=3700){
          var kongwen=document.getElementById("kongwen");
          var kbtext=kongwen.getElementsByClassName("kbtext")[0];
          kbtext.style.top="10%";
          kbtext.style.opacity="1";
          kbtext.style.webkitTransition="all .8s linear";
          setTimeout(function(){
            var kph=kongwen.getElementsByClassName("ph")[0];
            kph.style.top="10%";
            kph.style.left="7%";
            kph.style.opacity="1";
            kph.style.webkitTransition="all .8s linear";
          },600);

        }
        if(scrolled>=4200){
          var kh=kmiaoshu.getElementsByTagName("h1")[0];
          kh.style.marginTop="3%";
          kh.style.opacity="1";
          kh.style.webkitTransition="all .8s linear";
        }
        if(scrolled>=4280){
          var kp=kmiaoshu.getElementsByTagName("p")[0];
          kp.style.marginTop="0px";
          kp.style.opacity="1";
          kp.style.webkitTransition="all .8s linear";
          setTimeout(function(){
            var imgleft=kmiaoshu.getElementsByClassName("imgleft")[0];
            var imgright=kmiaoshu.getElementsByClassName("imgright")[0];
            imgleft.style.marginLeft="17%";
            imgright.style.marginLeft="50px";
            imgleft.style.opacity="1";
            imgright.style.opacity="1";
            imgleft.style.webkitTransition="all .8s linear";
            imgright.style.webkitTransition="all .8s linear";
          },600)
        }
        if(scrolled>=4800){
          var liangdu=document.getElementById("liangdu");
          var lbtext=liangdu.getElementsByClassName("lbtext")[0];
          lbtext.style.top="10%";
          lbtext.style.opacity="1";
          lbtext.style.webkitTransition="all .8s linear";
          setTimeout(function(){
            var lph=liangdu.getElementsByClassName("ph")[0];
            lph.style.top="10%";
            lph.style.left="7%";
            lph.style.opacity="1";
            lph.style.webkitTransition="all .8s linear";
          },600);
        }
        if(scrolled>=5400){
          var lh=lmiaoshu.getElementsByTagName("h1")[0];
          lh.style.marginTop="3%";
          lh.style.opacity="1";
          lh.style.webkitTransition="all .8s linear";
        }
        if(scrolled>=5500){
          var lp=lmiaoshu.getElementsByTagName("p")[0];
          lp.style.marginTop="0px";
          lp.style.opacity="1";
          lp.style.webkitTransition="all .8s linear";
          setTimeout(function(){
            var limg=lmiaoshu.getElementsByTagName("img")[0];
            limg.style.marginTop="3%";
            limg.style.opacity="1";
            limg.style.webkitTransition="all .8s linear";
          },600)
        }
        if(scrolled>=6250){
          var anquan=document.getElementById("anquan");
          var abtext=anquan.getElementsByClassName("abtext")[0];
          abtext.style.top="10%";
          abtext.style.opacity="1";
          abtext.style.webkitTransition="all .8s linear";
        }
        if(scrolled>=6700){
          var ah=amiaoshu.getElementsByTagName("h1")[0];
          ah.style.marginTop="3%";
          ah.style.opacity="1";
          ah.style.webkitTransition="all .8s linear";
        }
        if(scrolled>=6800){
          var ap=amiaoshu.getElementsByTagName("p")[0];
          var aimg=amiaoshu.getElementsByTagName("img");
          ap.style.marginTop="0px";
          ap.style.opacity="1";
          ap.style.webkitTransition="all .8s linear";
          setTimeout(function(){
            aimg[0].style.marginTop="10%";
            aimg[0].style.opacity="1";
            aimg[0].style.webkitTransition="all .8s linear";
          },600);
          setTimeout(function(){
            aimg[1].style.marginTop="10%";
            aimg[1].style.opacity="1";
            aimg[1].style.webkitTransition="all .8s linear";
          },1100);
          setTimeout(function(){
            aimg[2].style.marginTop="10%";
            aimg[2].style.opacity="1";
            aimg[2].style.webkitTransition="all .8s linear";
          },1600);
          setTimeout(function(){
            aimg[3].style.marginTop="10%";
            aimg[3].style.opacity="1";
            aimg[3].style.webkitTransition="all .8s linear";
          },2100);

        }

        if(scrolled>=7500){
          var zhumian=document.getElementById("zhumian");
          var zmbtext=zhumian.getElementsByClassName("zmbtext")[0];
          zmbtext.style.top="10%";
          zmbtext.style.opacity="1";
          zmbtext.style.webkitTransition="all .8s linear";
          setTimeout(function(){
            var zmph=zhumian.getElementsByClassName("ph")[0];
            zmph.style.top="10%";
            zmph.style.left="7%";
            zmph.style.opacity="1";
            zmph.style.webkitTransition="all .8s linear";
          },600);
        }
        if(scrolled>=8100){
          var zmh=zmmiaoshu.getElementsByTagName("h1")[0];
          zmh.style.marginTop="3%";
          zmh.style.opacity="1";
          zmh.style.webkitTransition="all .8s linear";
        }
        if(scrolled>=8210){
          var zmp=zmmiaoshu.getElementsByTagName("p")[0];
          zmp.style.marginTop="0px";
          zmp.style.opacity="1";
          zmp.style.webkitTransition="all .8s linear";
          setTimeout(function(){
            var zmimg=zmmiaoshu.getElementsByTagName("img")[0];
            zmimg.style.marginTop="3%";
            zmimg.style.opacity="1";
            zmimg.style.webkitTransition="all .8s linear";
          },600)
        }



        /*------------------------------修改锚点状态------------------------------*/
        var yuanbox=document.getElementById("yuanbox");
        var yuan=yuanbox.getElementsByTagName("div");
        for(var j=0;j<=yuan.length-1;j++){
          if(scrolled<1390){
            if(j==0){
              yuan[0].className="active"
            }else{
              yuan[j].className="";
            }
          }else if(scrolled<2601&&scrolled>=1390){
            if(j==1){
              yuan[1].className="active"
            }else{
              yuan[j].className="";
            }
          }else if(scrolled<4011&&scrolled>=2601){
            if(j==2){
              yuan[2].className="active"
            }else{
              yuan[j].className="";
            }
          }else if(scrolled<5322&&scrolled>=4011){
            if(j==3){
              yuan[3].className="active"
            }else{
              yuan[j].className="";
            }
          }else if(scrolled<6032&&scrolled>=5322){
            if(j==4){
              yuan[4].className="active"
            }else{
              yuan[j].className="";
            }
          }else if(scrolled<8043&&scrolled>=6032){
            if(j==5){
              yuan[5].className="active"
            }else{
              yuan[j].className="";
            }

          }else{
            if(j==6){
              yuan[6].className="active";

            }else{
              yuan[j].className=""
            }

          }


        }
      }
    }

  }




</script>

<style scoped>

  /*侧导航小圆点*/
  #yuanbox{
    position: fixed;
    top: 45%;
    right: 2%;
    z-index: 999;
  }
  #yuanbox div{
    margin-top: 10px;
    width: 8px;
    height:8px;
    border: 1px solid #929292;
    border-radius: 8px;
  }
  .active{
    width:10px;
    height:10px;
    background-color:#929292;
    border-radius: 10px;
  }
  #yuanbox .yuan:hover{
    background-color: #3c3c3c;
    cursor: pointer;
  }

  /*==============================智能遥控部分====================================*/
  #yaokong{
    width: 100%;
    /*overflow: hidden;*/
  }
  #yaokong .bg{
    width: 100%;
    height: 550px;
    position: absolute;
  }
  #yaokong .ph{
    width: 270px;
    height: 450px;
    left: 40%;
    top:95%;
    opacity: 0;
    position: absolute;

  }
  .ybanner{
    position: relative;
    width: 100%;
    height: 550px;
  }
  .zhezhao{
    position: absolute;
    width: 100%;
    height: 550px;
    background-color: #000011;
    opacity: 0.9;
  }
  .ybtext{
    position: absolute;
    top: 90%;
    left: 40%;
    color: white;
    opacity: 0;
  }
  .ybanner h1{
    font-size: 36px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
  }
  .ybanner p{
    font-size: 20px;
    line-height: 35px;
    margin-top: 20px;
    text-align: center;
  }
  .ymiaoshu{
    width: 100%;
    height: 720px;
  }

  .ymiaoshu h1{
    font-size: 28px;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    color: #5E5E5E;
    margin-top: 8%;
    opacity: 0;
  }
  .ymiaoshu p{
    margin-left: 17%;
    margin-top:3% ;
    width: 65%;
    font-size: 18px;
    line-height: 35px;
    color: #797979;
    text-align: center;
    opacity: 0;
  }
  .ymiaoshu .yimgbox{
    margin-top: 2%;
  }
  .ymiaoshu .yimgbox img:nth-of-type(1){
    width: 308px;
    height: 503px;
    margin-left: -220px;
    opacity: 0;
  }
  .ymiaoshu .yimgbox img:nth-of-type(2){
    width: 540px;
    height: 489px;
    margin-left:700px;
    opacity: 0;
  }
  /*========================================感应照明===================================================*/
  #zhaoming{
    width: 100%;
  }
  #zhaoming img{
    width: 100%;
    height: 550px;
    position: absolute;
  }
  .zbanner{
    position: relative;
    width: 100%;
    height: 550px;
  }
  .zbtext{
    position: absolute;
    top: 95%;
    left: 40%;
    opacity: 0;
  }
  .zbanner h1{
    font-size: 36px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    color: white;
  }
  .zbanner p{
    font-size: 20px;
    margin-top: 20px;
    line-height: 35px;
    color: white;
    text-align: center;
  }
  .zmiaoshu{
    width: 100%;
    height: 720px;
  }

  .zmiaoshu h1{
    font-size: 28px;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    color: #5E5E5E;
    margin-top: 17%;
    opacity: 0;
  }
  .zmiaoshu p{
    margin-top: 17%;
    margin-left: 17%;
    width: 65%;
    font-size: 18px;
    line-height: 35px;
    color: #797979;
    text-align: center;
    opacity: 0;
  }
  .imgzm{
    margin-left: 18%;
    margin-top: 17%;
    opacity: 0;
  }


  /*==============================智能调色============================================*/
  #tiaose{
    width: 100%;
  }
  #tiaose .bg{
    width: 100%;
    height: 550px;
    position: absolute;
  }
  #tiaose .ph{
    width: 270px;
    height: 450px;
    left: 40%;
    top:90%;
    opacity: 0;
    position: absolute;
  }
  .tbanner{
    position: relative;
    width: 100%;
    height: 550px;
  }
  .tbtext{
    position: absolute;
    top: 95%;
    left: 40%;
    opacity: 0;
  }
  .tbanner h1{
    font-size: 36px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    color:white;
  }
  .tzhezhao{
    height: 550px;
    background-color:black;
    opacity: 0.8;
  }
  .tbanner p{
    margin-top: 20px;
    font-size: 20px;
    line-height: 35px;
    color: white;
    text-align: center;
  }
  .tmiaoshu{
    width: 100%;
    height: 720px;
  }

  .tmiaoshu h1{
    font-size: 28px;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    color: #5E5E5E;
    opacity: 0;
    margin-top:17%;
  }
  .tmiaoshu p{
    margin-left: 17%;
    margin-top: 17%;
    width: 65%;
    font-size: 18px;
    line-height: 35px;
    color: #797979;
    text-align: center;
    opacity: 0;
  }
  .tmiaoshu img{
    margin-left: 20%;
    margin-top: 17%;
    width: 790px;
    height: 492px;
    opacity: 0;
  }
  /*=============================智能控温=========================================*/
  #kongwen{
    width: 100%;
  }
  #kongwen .bg{
    width: 100%;
    height: 550px;
    position: absolute;
  }
  #kongwen .ph{
    width: 270px;
    height: 450px;
    left: 40%;
    top:90%;
    opacity: 0;
    position: absolute;
  }
  .kbanner{
    position: relative;
    width: 100%;
    height: 550px;
  }
  .kbtext{
    position: absolute;
    opacity: 0;
    top: 90%;
    left: 40%;
  }
  .kbanner h1{
    font-size: 36px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    color: white;
  }
  .kbanner p{
    font-size: 20px;
    margin-top: 20px;
    line-height: 35px;
    color: white;
    text-align: center;
  }
  .kmiaoshu{
    width: 100%;
    height: 720px;
  }

  .kmiaoshu h1{
    font-size: 28px;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    color: #5E5E5E;
    margin-top: 17%;
    opacity: 0;
  }
  .kmiaoshu p{
    margin-left: 17%;
    margin-top: 17%;
    width: 65%;
    opacity: 0;
    font-size: 18px;
    line-height: 35px;
    color: #797979;
    text-align: center;
  }

  .kimgbox{
    height: 500px;
    margin-top: 5%;
  }
  .kmiaoshu .imgleft{
    width: 587px;
    height: 432px;
    opacity: 0;
  }
  .kmiaoshu .imgright{
    margin-left:29%;
    width: 357px;
    height: 432px;
    opacity: 0;
  }
  /*===============================自调亮度========================================*/
  #liangdu{
    width: 100%;
    position: relative;
  }
  #liangdu .bg{
    width: 100%;
    height: 630px;
    position: absolute;
  }
  #liangdu .ph{
    width: 270px;
    height: 450px;
    left: 40%;
    top:90%;
    opacity: 0;
    position: absolute;
  }
  .lbanner{
    position: relative;
    width: 100%;
    height: 550px;
    overflow: hidden;
  }
  .lbtext{
    position: absolute;
    top: 90%;
    opacity: 0;
    left: 40%;
  }
  .lbanner h1{
    font-size: 36px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    color:white;
  }
  .lbanner p{
    margin-top: 20px;
    font-size: 20px;
    line-height: 35px;
    color: white;
    text-align: center;
  }
  .lmiaoshu{
    width: 100%;
    height: 820px;
  }

  .lmiaoshu h1{
    font-size: 28px;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    color: #5E5E5E;
    margin-top: 17%;
    opacity: 0;
  }
  .lmiaoshu p{
    margin-left: 17%;
    margin-top: 17%;
    opacity: 0;
    width: 65%;
    font-size: 18px;
    line-height: 35px;
    color: #797979;
    text-align: center;
  }

  .lmiaoshu img{
    margin-left: 20%;
    margin-top: 17%;
    opacity: 0;
    width: 790px;
    height: 570px;
  }
  /*===============================安全检测========================================*/
  #anquan{
    width: 100%;
  }
  .abanner{
    position: relative;
    width: 100%;
    height: 550px;
    overflow: hidden;
  }
  .abanner .bg{
    width: 100%;
    height: 630px;
    position: absolute;
  }
  .abanner .ph{
    width: 245px;
    height: 460px;
    opacity: 0;
    left: 7%;
    top:10%;
    position: absolute;
  }
  .abtext{
    position: absolute;
    top: 90%;
    opacity: 0;
    left: 35%;
  }
  .abanner h1{
    font-size: 36px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    color:white;
  }
  .abanner p{
    margin-top: 20px;
    font-size: 20px;
    line-height: 35px;
    color:white;
    text-align: center;
  }
  .amiaoshu{
    width: 100%;
    height: 720px;
  }

  .amiaoshu h1{
    font-size: 28px;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    color:#5E5E5E;
    margin-top: 17%;
    opacity: 0;
  }
  .amiaoshu p{
    margin-left: 17%;
    margin-top: 17%;
    opacity: 0;
    width: 65%;
    font-size: 18px;
    line-height: 35px;
    color: #797979;
    text-align: center;
  }
  .aimgbox{
    width: 800px;
    position: relative;
    left: 20%;
    top:5%;
  }
  .amiaoshu img{
    position: absolute;
    float: left;
    width: 331px;
    height: 427px;
    margin-top: 70%;

  }

  .amiaoshu img:nth-of-type(2){
    left: 150px;
  }
  .amiaoshu img:nth-of-type(3){
    left: 300px;
  }
  .amiaoshu img:nth-of-type(4){
    left: 450px;
  }
  /*===============================助眠功能========================================*/
  #zhumian{
    width: 100%;
  }
  .zmbanner{
    position: relative;
    width: 100%;
    height: 550px;
    overflow: hidden;
  }
  .zmbanner .bg{
    width: 100%;
    height: 630px;
    position: absolute;
  }
  .zmbanner .ph{
    width: 270px;
    height: 460px;
    opacity: 0;
    left: 40%;
    top:90%;
    position: absolute;
  }
  .zmbtext{
    position: absolute;
    top: 90%;
    opacity: 0;
    left: 40%;
  }
  .zmbanner h1{
    font-size: 36px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    color:white;
  }
  .zmbanner p{
    font-size: 20px;
    line-height: 35px;
    margin-top: 20px;
    color:white;
    text-align: center;
  }
  .zmmiaoshu{
    width: 100%;
    height: 720px;
  }

  .zmmiaoshu h1{
    font-size: 28px;
    font-weight: 500;
    line-height: 50px;
    text-align: center;
    color:#5E5E5E;
    margin-top: 17%;
    opacity: 0;
  }
  .zmmiaoshu p{
    margin-left: 17%;
    margin-top: 17%;
    opacity: 0;
    width: 65%;
    font-size: 18px;
    line-height: 35px;
    color: #797979;
    text-align: center;
  }
  .zmimgbox{
    width: 800px;
    position: relative;
    left: 21%;
    top:5%;
  }
  .zmmiaoshu img{
    position: absolute;
    /*float: left;*/
    width: 762px;
    height:548px;
    margin-top: 17%;
    opacity: 0;

  }



</style>
