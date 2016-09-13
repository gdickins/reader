import Backbone from 'backbone';

export default Backbone.Model.extend({
  defaults: {
    content: '',
    isRead: false,
  },
  toggleRead: function() {
    let readStatus = this.get('isRead');
    let confirmation = confirm("Update Read Status");
    if(confirmation) {
      this.set('isRead', !readStatus);
    };
  }
})
