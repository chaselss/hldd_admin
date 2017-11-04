var Page = function (option) {
  this.init(option)
}

$.extend(Page.prototype,{
  init: function (option) {
    this.createDom(option)
  },

  createDom: function (option) {
    this.header = new Header(option.head)
    this.sidebar = new Sidebar(option.sidebar)
    this.content = new Content(option.content)
    
    
  }
})