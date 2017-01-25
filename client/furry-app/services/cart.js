furryApp.factory('$Cart', function() {

  /**
   * Fetch an existing cart in browser
   * @return {Map} a new or a filled map of articles
   */
  loadExistingCart = () => {
    let cart = localStorage.getItem('client_cart');
    if (cart != null)
        return new Map(JSON.parse(cart));
    else
        return new Map();
  };
  
  /**
   * Save an altered cart
   * @param {Map} map Map 
   */
  saveCart = (map) => {
    localStorage.setItem('client_cart', JSON.stringify(Array.from(map.entries())));
  };

  return {

    addArticle: (articleId) => {
        console.log(`Add to cart: ${articleId}`);

        let cart = loadExistingCart();
        if (cart.has(articleId)) {
          console.log('existing', cart.get(articleId));
          cart.set(articleId, cart.get(articleId) + 1);
        } else {
          console.log('Not existing', cart.get(articleId));
          cart.set(articleId, 1);
        }
        return saveCart(cart);
    },
    removeArticle: (articleId) => {
      console.log(`Remove from cart: ${articleId}`);

      let cart = loadExistingCart();
      if (cart.has(articleId)) {
        let articleCount = cart.get(articleId);
        if (articleCount > 1) {
          cart.set(articleId, articleCount -1);
        } else {
          cart.delete(articleId);
        }
        return saveCart(cart);
      }
    },
    resumeCart: () => {
        return loadExistingCart()
    },
    resetCart: () => {
        localStorageService.clearAll();
    }
  }

});