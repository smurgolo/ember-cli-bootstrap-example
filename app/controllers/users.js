import Ember from 'ember';

export default Ember.ArrayController.extend({

  hasUsers: Ember.computed.gt('model.length', 0),

  totalUsers: function() {
    return this.get('model.length');
  }.property('model.length')
});