let Header = function (container) {
  this.container = container || $('body')
  this.init()
}

$.extend(Header.prototype,{
  init: function () {
    this.createDom()
  },
  
  createDom: function () {
    let html = new EJS({url: '/backend/templates/header'}).render({})
    this.container.prepend(html)
  }
})