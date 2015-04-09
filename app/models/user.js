import DS from 'ember-data';

var user = DS.Model.extend({
  last: DS.attr('string'),
  first: DS.attr('string'),
  avatar: DS.attr('string'),

  fullName: function() {
    return this.get('first') + " " + this.get('last');
  }.property('last', 'first')
});


user.reopenClass({
  FIXTURES: [{
    id: 0,
    first: 'José',
    last: 'Ramirez',
    avatar: 'http://i.imgur.com/A7Dy18f.png'
  }, {
    id: 1,
    first: 'Santiago',
    last: 'Murgolo',
    avatar: 'http://ict4kids.files.wordpress.com/2013/05/mrc-2.png'
  }, {
    id: 2,
    first: 'Roberto',
    last: 'Rodriguez',
    avatar: 'http://i.imgur.com/GJLwdc1.png'
  }]
});

export default user;