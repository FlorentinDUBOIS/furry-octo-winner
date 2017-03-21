(function () {
  angular
    .module('furryApp')
    .factory('$Cart', $Cart)

  function $Cart($log) {
    return {
      addArticle(articleId) {
        $log.info(`Add to cart: ${ articleId }`)

        let cart = loadExistingCart()

        if (cart.has(articleId)) {
          cart.set(articleId, cart.get(articleId) + 1)
        } else {
          cart.set(articleId, 1)
        }

        saveCart(cart)
      },

      /**
       * Decrement count of article in client cart
       * @param {string} articleId Article UUID
       */
      removeArticle(articleId) {
        $log.info(`Remove from cart: ${articleId}`);

        let cart = loadExistingCart()
        if (cart.has(articleId)) {
          let articleCount = cart.get(articleId)
          if (articleCount > 1) {
            cart.set(articleId, articleCount -1)
          } else {
            cart.delete(articleId)
          }

          return saveCart(cart)
        }
      },

      /**
       * Get all items in cart with count for each
       * @return {Map} Map of articleId => count
       */
      resumeCart() {
        return loadExistingCart()
      },

      /**
       * Sum every counted article
       * @return {number} Sum of all cart
       */
      count() {
        return Array
          .from(loadExistingCart())
          .reduce((acc, val, i) => acc + val[1], 0)
      },

      /**
       * remove every entries of user cart
       */
      resetCart() {
          $log.info('Cart is reseted')

          localStorage.removeItem('clientCart')
      }
    }


    /**
     * Fetch an existing cart in browser
     * @return {Map} a new or a filled map of articles
     */
    function loadExistingCart() {
      if (localStorage.clientCart) {
        return new Map(JSON.parse(localStorage.clientCart))
      }

      return new Map()
    }

    /**
     * Save an altered cart
     * @param {Map} map Map
     */
    function saveCart(map) {
      return localStorage.clientCart = JSON.stringify(Array.from(map.entries()));
    }
  }

  $Cart.$inject = ['$log']
} ())
