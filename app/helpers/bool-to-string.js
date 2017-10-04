import Ember from 'ember';

export function boolToString([boolVal]/*, hash*/) {
  return boolVal ? 'success' : 'failure';
}

export default Ember.Helper.helper(boolToString);
