<template>
  <div >
    <el-tag
      v-for="(tag,index) in tags" :key="tag.name" :closable="tag.name !=='home'"
      :effect="$route.name === tag.name ?'dark':'plain'"
     class="tagitem"
     @click="changemenu(tag)"
     @close="deletemenu(tag,index)"
    >
      {{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "CommonTag",
  computed: {
    ...mapState({
      tags: (state) => state.tab.tablist,
    }),
  },
  methods:{
      ...mapMutations({
          close:'closetag'
      }),
      changemenu(val){
          this.$router.push({
              name:val.name
          })

      },
      deletemenu(val,index){
          const length = this.tags.length-1
          this.close(val)
          if(val.name !== this.$route.name){
              return
          }
          if(index == length){
              this.$router.push({
                  name:this.tags[index-1].name
              })
          } else {
              this.$router.push({
                  name:this.tags[index].name
              })
          }
          
      }
  }
};
</script>

<style lang="less" scoped>
.tagitem{
    margin: 10px 5px;
}
</style>