import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  detailedLaunch: computed.alias('model'),
})
