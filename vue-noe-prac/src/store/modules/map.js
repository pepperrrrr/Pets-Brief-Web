import { getPetsData } from '../../api'

const state = {
  isShow: false,
  tableList: [],
  infoData: null,
  petsData: {}
};

const getters = {

}

const actions = {
   async getData(){
       return await getPetsData()
    }
}


const mutations = {


}


export default {
    state,
    getters,
    actions,
    mutations
}