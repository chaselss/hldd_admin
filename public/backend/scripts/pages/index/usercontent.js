let Content = function (container) {
  this.container = container || $('body')
  this.init()
}

$.extend(Content.prototype,{
  init: function () {
    this.createDom()
  },
  
  createDom: function () {
    let html = new EJS({url: '/backend/templates/usercontent.ejs'}).render({})
    this.container.prepend(html)
  }
})