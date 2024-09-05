<!-- vbase -->

<!-- HTML 문서 -->
<template>
   <div class="container secWrap">
      <h3>HOT & NEW</h3>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data" v-bind:key="i">
            <div class="imgWrap">
               <img v-bind:src="item.img" alt="" />
            </div>
            <div class="cardText">
               <h3>{{ item.title }}</h3>
               <p>💕{{ item.num }}</p>
               <p>대여 : {{ item.won }}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'App',
   data() {
      return {
         todos: ['서울', '부산', '진주'],
         data: [
            { title: '핸섬가이즈', num: '8.6', won: '11,000', img: require('@/assets/images/handsome.jpg') },
            { title: '핸섬가이즈', num: '8.6', won: '11,000', img: require('@/assets/images/handsome.jpg') },
            { title: '핸섬가이즈', num: '8.6', won: '11,000', img: require('@/assets/images/handsome.jpg') },
         ],
      };
   },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';
.secWrap {
   padding: 5px 16px;
}

.cardWrap {
   display: flex;
   gap: 10px;
   .card {
      width: 212px;
      img {
         width: 100%;
      }
      .imgWrap {
         width: 100%;
         overflow: hidden;

         img {
            display: block;
            width: 100%;
            transition: 0.3s;
         }
         &:hover {
            transform: scale(1.05);
         }
      }
      .cardText {
         padding: 5px;
      }
   }
}
</style>

<!-- 
  scss 문법

  // 변수 사용
  $color : #000;

  // 자손은 중괄호 안에 중괄호
  div{
    ul{
      display: block;
      li{
        width:10px;
        // 변수 사용
        background: $color;
      }
    }
    // 자기 자신의 경우 &
    &.on{
      background:skyblue
    }
    // 자식의 경우 >
    >div.box{
      width:100px
    }
  }
-->
