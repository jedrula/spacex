import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  launches: computed.alias('model'),
  filteredLaunches: computed('launches.@each.flight_number', 'launchFilter', function() {
    const launchFilter = this.get('launchFilter');
    if (!launchFilter) {
      return this.get('launches');
    } else {
      return this.get('launches').filter(launch => launch.flight_number === parseInt(launchFilter, 10));
    }
  }),
  actions: {
    showDetails(launch) {
      // this.set('launch', )
      // TODO finish
    }
  }
})
