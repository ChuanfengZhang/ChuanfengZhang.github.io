new Vue({
  el: '#app',
  data: {
    message: 'test',
  url:  'https://codepen.io/Chuanfeng/full/BLWPBO'
  },
  ready: function(){
    this.getApi();
  },
  methods: {
    getApi: function(){
    $('#message').fadeOut();
  this.message = $.ajax({url:"https://api.lwl12.com/hitokoto/main/get",async:false}).responseText;
    $('#message').fadeIn();
    }
  }
})
