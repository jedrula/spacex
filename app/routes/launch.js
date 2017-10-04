import Ember from 'ember';

export default Ember.Route.extend({
  model({ flight_number }) {
    return this.modelFor('application').find(x => x.flight_number === parseInt(flight_number));
  }
});
