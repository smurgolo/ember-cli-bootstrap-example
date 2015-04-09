export
default Ember.View.extend({
  tagName: 'div',

  classNames: ['span9', 'well'],

  willInsertElement: function() {

    //evento que se ejecuta antes de insertar la vista/template en el DOM

  },

  didInsertElement: function() {
    //evento que se ejecuta una vez insertado el template en el DOM
  }
});