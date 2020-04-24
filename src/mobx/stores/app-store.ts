import { extendObservable, action } from 'mobx';

class AppStore {
  public title?: string;
  public user?: any;

  constructor() {
    extendObservable(this, {
      title: 'MobX Router Tutorial',
      user: undefined
    });
  }

  setTitle = action((title: string | undefined) => {
    this.title = title;
  });
}

export default AppStore;