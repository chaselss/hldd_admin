let Sidebar = function (container) {
  this.container = container || $('body')
  this.init()
}

$.extend(Sidebar.prototype,{
  init: function () {
    this.createDom()
  },
  
  createDom: function () {
    let html = new EJS({url: '/backend/templates/sidebar.ejs'}).render({})
    this.container.prepend(html)
  }
})