import Application from '@ember/application'
import Resolver from './resolver'
import loadInitializers from 'ember-load-initializers'
import config from './config/environment'

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
})

loadInitializers(App, config.modulePrefix)

export default App;
/*import ActiveModelAdapter from 'active-model-adapter'  
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin'

export default ActiveModelAdapter.extend(DataAdapterMixin, {  
  namespace: 'api/v1',
  host: 'http://localhost:4200',
});*/