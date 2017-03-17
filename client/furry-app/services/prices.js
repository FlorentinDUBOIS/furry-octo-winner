furryApp.factory('$Prices', function($http, $rootScope) {

  const api = 'http://api.fixer.io'
  const nativeCurrency = 'EUR'

  invalidCache = true
  changes = {}

  load = () => {
      return new Promise((resolve) => {
        if (invalidCache) {
          $http
          .get(`${api}/latest?base=${nativeCurrency}`)
          .then((response) => {
            changes = response.data
            // push native currency
            changes.rates.EUR = 1
          
            invalidCache = !invalidCache
            setTimeout(() => {
                invalidCache = !invalidCache
            }, 10 * 60 * 1000) // 10m  
            resolve()
          })
        } 
        else resolve()
      })
    }

  return {

    /**
     * Get all available currencies
     * @return {Promise<string[]>} list of currencies
     */
    availableCurrencies() {
      return new Promise((resolve) => {
        load()
        .then(() => {
          resolve(Object.keys(changes.rates).sort())
        })
      })
    },

    /**
     * Convert the given price to the given currency
     * @param {number} price 
     * @param {string} currency 
     * @return {Promise<number>} calculated price
     */
    convert(price, currency) {
      return new Promise((resolve, reject) => {
        load()    
        .then(() => {
            if (changes.rates[currency] === undefined)
                reject('This currency is not available')
            if (changes.rates[currency] < 0) 
                reject ("Bad currency value, can't convert")

            resolve(price * changes.rates[currency])
        })
      })
    },

    /**
     * Convert price to the user currency
     * @param {number} price 
     */
    convertFast(price) {
      return this.convert(price, this.getUserCurrency())
    },

    /**
     * Get user prefered currency
     */
    getUserCurrency() {
        return localStorage.getItem('currency') || 'EUR'
    },

    /**
     * Set user prefered currency
     */
    setUserCurrency(currency) {
        localStorage.setItem('currency', currency)
        $rootScope.$broadcast('currencyChange')
        console.debug('Broadcast', 'currencyChange')
    }
  }
})