furryApp.factory('$Cart', function() {

  /**
   * Fetch an existing cart in browser
   * @return {Map} a new or a filled map of articles
   */
  loadExistingCart = () => {
    let cart = localStorage.clientCart;
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
    return localStorage.clientCart = JSON.stringify(Array.from(map.entries()));
  };

  return {

    /**
     * Increment count of article in client cart
     * @param {string} articleId Article UUID
     */
    addArticle: (articleId) => {
        console.log(`Add to cart: ${articleId}`);

        let cart = loadExistingCart();
        if (cart.has(articleId)) {
          cart.set(articleId, cart.get(articleId) + 1);
        } else {
          cart.set(articleId, 1);
        }
        saveCart(cart);
    },
    /**
     * Decrement count of article in client cart
     * @param {string} articleId Article UUID
     */
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
    /**
     * Get all items in cart with count for each
     * @return {Map} Map of articleId => count
     */
    resumeCart: () => {
        return loadExistingCart()
    },
    resetCart: () => {
        localStorageService.clearAll();
    }
  }
});