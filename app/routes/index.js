import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  fb: service(),
  pageID: '219045128760476',

  beforeModel() {
    return this.fb.FBInit();
  },

  model() {
    return this.fb.api(`/${this.pageID}/feed`);
  }
});
