(function() {
  'use strict';

  window._ = {};

  // Returns whatever value is passed as the argument.
  _.identity = function(val) {
    return val;
  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    return n === undefined ? array[array.length - 1] : array.slice(Math.max(0, array.length - n), array.length);
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  _.each = function(collection, iterator) {
    if ( Array.isArray(collection) ) {
      for (var i=0,len=collection.length; i<len; i++) {
        iterator(collection[i],i,collection);
      }
    } else {
      for (var key in collection) {
        iterator(collection[key],key,collection);
      }
    }
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    var result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {
    var isArray = Array.isArray(collection);
    if (isArray) {
      var result = [];
    } else {
      var result = {};
    }
    _.each(collection, function(value,key) {
      if (test(value)) {
        if (isArray) {
          result.push(value);
        } else {
          result[key] = value;
        }
      }
    });
    return result;
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
    return _.filter(collection, function(value, key) {
      return (!test(value));
    });
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var result = [];
    _.each(array, function(val) {
      if (_.indexOf(result, val) === -1) {
        result.push(val);
      }
    });
    return result;
  };


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    var result = (Array.isArray(collection))?[]:{};
    _.each(collection, function(val,key) {
      result[key] = iterator(val);
    });
    return result;
  };

  // Takes an array of objects and returns and array of the values of
  // a certain property in it.
  _.pluck = function(collection, key) {
    return _.map(collection, function(item){
      return item[key];
    });
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item.
  _.reduce = function(collection, iterator, accumulator) {
    var first = true;
    if (typeof accumulator !== 'undefined') {
      first = false;
    }
    _.each(collection, function(value) {
      if ( first ) {
        accumulator = value;
        first = false;
      } else {
        accumulator = iterator(accumulator,value);
      }
    });
    return accumulator;
  };

  // Determine if the array or object contains a given value.
  _.contains = function(collection, target) {
    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
    var iterator = iterator || _.identity;
    return _.reduce(collection, function(acc,val) {
      if ( acc ) {
        acc = iterator(val);
      }
      return !!acc;
    },true);
  };

  // Determine whether any of the elements pass a truth test.
  _.some = function(collection, iterator) {
    var iterator = iterator || _.identity;
    return !_.every(collection, function(val) {
      return !iterator(val);
    });
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  _.extend = function(obj) {
    _.each([].slice.apply(arguments,[1]), function(object) {
      _.each(object, function(val,key) {
        obj[key] = val;
      })
    })
    return obj;
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
    _.each([].slice.apply(arguments,[1]), function(object) {
      _.each(object, function(val,key) {
        if (!obj.hasOwnProperty(key)) {
          obj[key] = val;
        }
      })
    })
    return obj;
  };


  /**
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   *
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    var alreadyCalled = false;
    var result;

    return function() {
      if (!alreadyCalled) {
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }

      return result;
    };
  };

  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
  };


  /**
   * OTHER COLLECTION OPERATIONS
   * ==============================
   */

  // Randomizes the order of an array's contents.
  _.shuffle = function(array) {
  };


  /**
   * EXTRAS
   * =================
   *
   */

  // Calls the method named by functionOrKey on each value in the list.
  _.invoke = function(collection, functionOrKey, args) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. 
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  // If given a truthy value for shallow, only flatten one layer
  _.flatten = function(nestedArray, shallow) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function(func, wait) {
  };
}());
