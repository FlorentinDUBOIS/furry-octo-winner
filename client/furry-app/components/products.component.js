furryApp
.component('productsComponent', {

  bindings: { 
      products: '=' 
  },
  //template:  '<h1>{{$ctrl.user}}</h1>',
  templateURL: 'fury-app/templates/products.html',
           
  controller: function() {
    console.log("products: ", this.products);
  }
});