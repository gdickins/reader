import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    content: '',
    isRead: false,
  },
  toggleRead: function() {
    let readStatus = this.get('isRead');
    this.set('isRead', !readStatus);
  }
})
