<template>
   <div class="conWrap mb10">
      <div class="container menu">
         <a href="#" class="on">영화</a>
         <a href="#">방송</a>
         <a href="#">랭킹</a>
         <a href="#">무료</a>
         <a href="#">이벤트</a>
         <a href="#">멤버십</a>
      </div>
   </div>
   <div class="conWrapBg mb10"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.conWrapBg {
   width: 100%;
   height: 60px;
}

.conWrap {
   position: fixed;
   width: 100%;
   background: white;
   border-bottom: 1px solid #888;
   z-index: 1;

   .menu {
      display: flex;
      a {
         display: block;
         //  width: 80px;
         //  background: pink;
         margin-right: 5px;
         font-weight: bold;
         position: relative;
         padding: 16px 0;
         padding-right: 24px;

         &.on:after,
         &:hover::after {
            content: '';
            // display: block;
            position: absolute;
            bottom: -3px;
            left: 0;
            width: 50px;
            height: 5px;
            background-color: red;
         }
         @media screen and (max-width: 560px) {
            a {
               padding-right: 5px;
            }
         }
      }
   }
}
</style>
