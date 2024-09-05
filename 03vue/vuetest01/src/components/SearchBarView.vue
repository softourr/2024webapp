<template>
   <div class="container">
      <div class="searchWrap">
         <!-- input 즉시 반영됨 -->
         <!-- <input type="search" 
                @input="
                    inputText = $event.target.value;
                    " 
                placeholder="검색어를 입력하세요" /> -->
         <!-- <input class="search" type="search" v-model="inputText" placeholder="검색어를 입력하세요" /> -->

         <!-- input 확인 시 반영됨 -->
         <input type="search" @change="handleSearch" placeholder="검색어를 입력하세요" />
         <button class="searchBtn">click</button>
      </div>
   </div>
</template>

<script>
export default {
   name: 'SearchBarComp',
   data() {
      return {
         inputText: '',
      };
   },
   methods: {
      handleSearch(event) {
         this.$emit('searchMovie', event.target.value);
         this.inputText = event.target.value;
         event.target.value = '';
      },
   },
   props: {
      data: Object,
   },
   watch: {
      inputText(name) {
         const findName = this.data.filter(movie => {
            return movie.title.includes(name);
         });
         console.log(findName.length);
         if (findName.length == 0) {
            alert('영화가 없습니다');
         }
      },
   },
};
</script>

<style lang="scss" scoped>
.search {
   width: 270px;
   border: 1px solid #e1e1e1;
   padding: 8px 16px;
}
</style>
