<template>
   <div class="container">
      <h2 class="mb10">HOT & NEW</h2>
      <div class="cardWrap">
         <div class="card" v-for="item in data" v-bind:key="item.id">
            <div class="imgWrap">
               <img v-bind:src="`${item.img}`" :alt="`${item.img}`" />
               <div class="hot" v-if="item.hotIcon">HOT</div>
            </div>
            <div class="cardBody">
               <h4>{{ item.title }}</h4>
               <p>❤️ {{ item.num }}</p>
               <p>대여 : {{ item.won }}원</p>
               <p>구매 : {{ item.won }}원</p>
               <p>👍 {{ item.like }} <button @:click="$emit('increaseLike', item.id)">클릭</button></p>
            </div>
            <div class="btn btn-info" @:click="$emit('openModal', item.id)">상세보기</div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'HotNNewView',
   props: {
      data: Array,
   },
};
</script>

<style lang="scss" scoped></style>
