import store from '@/store';
import {
  getModule, Module, Mutation, VuexModule,
} from 'vuex-module-decorators';

@Module({ dynamic: true, store, name: 'UI' })
class UI extends VuexModule {
}

export default getModule(UI);
