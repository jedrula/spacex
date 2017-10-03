import Ember from 'ember';
import fetch from 'fetch';

const { Route } = Ember;

export default Route.extend({
  model() {
     return fetch('https://api.spacexdata.com/v1/launches').then(response => response.json());
  }
});
