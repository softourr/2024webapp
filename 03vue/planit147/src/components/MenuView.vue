<template>
   <div class="menu_wrap">
      <div class="menu">
         <h1>logo</h1>
         <div class="link">
            <div class="menu_item collapse">ABOUT</div>
            <div class="menu_item collapse">WORKS</div>
            <div class="menu_item collapse">LINEUP 147</div>
            <div class="menu_item collapse">FAQ</div>
         </div>
         <div class="lang collapse">KO</div>
         <HamburgerBtn class="menu_btn" :isActive="isMenuOpen" @toggle="btnToggle" />
      </div>
   </div>
</template>

<script>
import HamburgerBtn from './HamburgerBtn.vue';

export default {
   name: 'MenuView',
   data() {
      return {
         isMenuOpen: false,
      };
   },
   methods: {
      btnToggle() {
         this.isMenuOpen = !this.isMenuOpen;
      },
   },
   components: {
      HamburgerBtn: HamburgerBtn,
   },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';

.menu_wrap {
   padding: 20px;
   height: 80px;
   .menu {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .link {
         width: 600px;
         display: flex;
         justify-content: space-between;

         .menu_item {
            position: relative;
            font-size: 1em;
            font-weight: 600;
            padding: 10px 20px;
            cursor: pointer;
            transition: 0.4s;
            &:hover {
               color: $brand-color-main;
            }
            &:before {
               content: '';
               width: 9px;
               height: 9px;
               border: 2px solid black;
               box-shadow: inset 0 0 0 0;
               border-radius: 50%;
               position: absolute;
               left: 0;
               top: 13.5px;
               transition: 0.4s;
            }
            &:hover:before {
               content: '';
               border: 2px solid $brand-color-main;
               box-shadow: inset 0 0 0 5px $brand-color-main;
            }
         }
      }

      .collapse {
         @media screen and (max-width: 1024px) {
            display: none;
         }
      }

      .menu_btn {
         @media screen and (min-width: 1024px) {
            display: none;
         }
      }
   }
}
</style>
