<template>
   <div class="modal" v-if="isModal">
      <div class="inner">
         <h2 class="mb10">{{ data[selectedInx].title }}</h2>
         <hr class="mb10" />
         <p class="mb10">
            {{ data[selectedInx].detail }}
         </p>
         <div class="btn btn-primary" @:click="$emit('closeModal')">닫기</div>
      </div>
      <div class="background" @:click="$emit('closeModal')"></div>
   </div>
</template>

<script>
export default {
   name: 'modalView',
   props: {
      data: Array,
      isModal: Boolean,
      selectedInx: Number,
   },
};
</script>

<style lang="scss" scoped>
$radius: 5px;

.modal {
   position: fixed;
   background-color: rgba(0, 0, 0, 0.5);
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 100;

   .inner {
      background: white;
      width: 500px;
      padding: 16px 16px;
      border-radius: $radius;

      @media screen and (max-width: 570px) {
         width: 90%;
      }
   }

   .background {
      position: absolute;
      background: rgba(0, 0, 0, 0);
      width: 100%;
      height: 100%;
      top: 0;
      z-index: -1;
   }
}
</style>
