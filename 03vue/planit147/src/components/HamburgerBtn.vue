<template>
   <button @click="$emit('toggle')" class="hamburger" :class="{ 'is-active': isActive }">
      <span class="line"></span>
      <span class="line"></span>
   </button>
</template>

<script>
export default {
   name: 'HamburgerBtn',
   props: {
      isActive: Boolean,
   },
};
</script>

<style lang="scss" scoped>
.hamburger {
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   width: 20px;
   height: 20px;
   background: transparent;
   border: none;
   cursor: pointer;
   padding: 0;

   .line {
      width: 100%;
      height: 3px;
      background-color: #333;
      transition: all 0.3s;
   }

   &.is-active {
      .line {
         &:nth-child(1) {
            transform: translateY(5px) rotate(45deg);
         }

         &:nth-child(2) {
            transform: translateY(-5px) rotate(-45deg);
         }
      }
   }
}
</style>
