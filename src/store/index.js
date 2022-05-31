import {createStore} from 'vuex';

import {useAppConfigProvider} from './mudules/app.config.provider';

export default createStore({
  modules:{
    app:useAppConfigProvider()
  }
})