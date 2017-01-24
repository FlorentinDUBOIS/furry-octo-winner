furryApp
.component('productsComponent', {

  bindings: { 
      products: '=' 
  },
  template:  '<h1>{{$ctrl.user}}</h1>',
           
  controller: function() {
    console.log("products: ", this.products);
  }
});