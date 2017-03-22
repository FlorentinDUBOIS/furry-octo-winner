(function () {
  angular
    .module('furryApp')
    .factory('$Prices', $Prices)

  function $Prices($http, $rootScope, $log, $q, $timeout, NativeCurrency, FIXER_API) {
    let invalidCache = true
    let changes = {}

    function load() {
      return $q(function(resolve, reject) {
        if (invalidCache) {
          return $http
            .get(`${ FIXER_API }/latest?base=${ NativeCurrency }`)
            .catch(reject)
            .then(function(response) {
              changes = response.data
              changes.rates.EUR = 1

              invalidCache = !invalidCache
              $timeout(function() {
                invalidCache = !invalidCache
              }, 10 * 60 * 1000)

              resolve()
            })
        }

        resolve()
      })
    }

    return {
      /**
       * Get all available currencies
       * @return {Promise<string[]>} list of currencies
       */
      availableCurrencies() {
        return $q(function(resolve) {
          load()
            .then(function() {
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
        return $q(function(resolve, reject) {
          load()
          .then(function() {
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
          $log.debug('Broadcast', 'currencyChange')
      }
    }
  }

  $Prices.$inject = ['$http', '$rootScope', '$log', '$q', '$timeout', 'NativeCurrency', 'FIXER_API']
} ())
