furryApp
.component('helloComponent', {

  bindings: { 
      user: '=' 
  },
  template:  '<h1>{{$ctrl.user}}</h1>',
           
  controller: function() {
    console.log("user: "+ this.user);
  }
});