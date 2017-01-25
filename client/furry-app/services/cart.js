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
          cart.set(articleId, cart.get(articleId));
        } else {
          cart.set(articleId, 1);
        }
        saveCart(cart);
    },
    removeArticle: (articleId) => {
      if (cart.has(articleId)) {
        if (cart.get(articleId) > 1) {
          cart.set(cart.get(articleId) --);
        } else {
          cart.delete(articleId);
        }
        saveCart(cart);
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