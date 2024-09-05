<template>
   <NavbarView />
   <SearchBarView :data="data" @searchMovie="searchMovie" />
   <div class="container">
      <button @click="showAllMovie">전체보기</button>
   </div>
   <HotNNewView :data="filteredData" @openModal="i => modalOpen(i)" @increaseLike="i => increaseLike(i)" />
   <ModalView v-bind:data="data" :isModal="isModal" :selectedInx="selectedInx" @closeModal="modalClose" />
</template>

<script>
import mdata from '@/assets/mdata';
import NavbarView from './components/NavbarView.vue';
import ModalView from './components/ModalView.vue';
import HotNNewView from './components/HotNNewView.vue';
import SearchBarView from './components/SearchBarView.vue';

// export default는 단일
export default {
   name: 'appView',
   data() {
      return {
         data: mdata,
         filteredData: [...mdata],
         isModal: false,
         selectedInx: 0,
      };
   },
   methods: {
      increaseLike(i) {
         this.data[i].like++;
      },
      modalOpen(i) {
         this.selectedInx = i;
         this.isModal = true;
      },
      modalClose() {
         this.isModal = false;
      },
      searchMovie(movieName) {
         const movies = this.data.filter(item => {
            return item.title.includes(movieName);
         });

         if (movies.length != 0) this.filteredData = movies;
      },
      showAllMovie() {
         this.filteredData = [...this.data];
      },
   },
   components: {
      NavbarView: NavbarView,
      ModalView: ModalView,
      HotNNewView: HotNNewView,
      // key-value가 같으면 한번만 써도 됨
      SearchBarView,
   },
};
</script>

<style lang="scss">
$radius: 10px;

.container {
   width: 1000px;
   margin: 0 auto;

   @media screen and (max-width: 790px) {
      width: 100%;
      padding: 0 10px;
   }
   img {
      display: block;
   }
}

.cardWrap {
   display: flex;
   flex-wrap: wrap;
   gap: 10px;
   .card {
      width: calc((100% - 10px * 3) / 4);
      @media screen and (max-width: 790px) {
         width: calc((100% - 10px) / 2);
      }

      @media screen and (max-width: 560px) {
         width: calc(100%);
      }
      .imgWrap {
         width: 100%;
         position: relative;
         overflow: hidden;
         cursor: pointer;
         border-radius: $radius;
         img {
            width: 100%;
            transition: 0.3s;
         }
         &:hover {
            img {
               transform: scale(1.1);
            }
         }
         .hot {
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: red;
            color: white;
            padding: 5px 10px;
            border-radius: 6px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
            font-weight: bold;
         }
      }
   }
}
.mb10 {
   margin-bottom: 10px !important;
}
.btn {
   cursor: pointer;
   background-color: pink;
   border-radius: $radius;
   padding: 5px 16px;
   text-align: center;
   color: white;
   font-weight: bold;
   border: 0 none;
   transition: 0.1s;
   &.btn-primary {
      background-color: skyblue;
   }
   &.btn-info {
      background-color: greenyellow;
      color: darkslategray;
   }
   &:hover {
      transform: scale(0.98);
   }
}
</style>
