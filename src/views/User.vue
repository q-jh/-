<template>
  <div>
    <Userheader></Userheader>

  </div>
</template>

<script>
import Userheader from '@/components/Userheader'
import {reqGetUser} from '@/api/index'
export default {
    name:'User',
    components:{Userheader},
    mounted(){
      this.getuserdata()

    },
    methods:{
      async getuserdata(){
        let result = await reqGetUser()
        console.log(result)

      }

    },

}
</script>

<style lang="less" scoped>

</style>