export default {
     state:{
       isCollapse:false,
       tablist:[
           {
               path:'/',
               name:'home',
               label:'首页',
               icon:'home'
           }
       ],
       currentMenu:null
    },
    mutations:{
        collapseMenue(state){
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state,val){
            if(val.name !== 'home'){
                state.currentMenu = val
                const result = state.tablist.findIndex(item => item.name === val.name)
                if(result == -1){
                    state.tablist.push(val)
                }else{
                    state.currentMenu = null
                }
            }

        },
        closetag(state,val){
            const result = state.tablist.findIndex(item => item.name === val.name)
            state.tablist.splice(result,1)
        }
    },
    
}