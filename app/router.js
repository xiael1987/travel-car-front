import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('organiser');
  this.route('services');
  this.route('contact');
  this.route('devis');
  this.route('login');
  this.route('changepassword');
  this.route('confirm');
  
  this.route('home', function () {
    this.route('accueil');
    this.route('confirm');
    this.route('contact');
    this.route('devis');
    this.route('login');
    this.route('changepassword');
    this.route('organiser');
    this.route('services');
    this.route('profil');
  });

  this.route('homeagent', function () {
    this.route('accueilagent');
    this.route('devisagent');
    this.route('chaufagent');
    this.route('dossieragent');
    this.route('enquetagent');
  });
});

export default Router;