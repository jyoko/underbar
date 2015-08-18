# Underbar

Minimal functional helper library for JS, obviously heavily inspired by [Underscore](http://underscorejs.org) and [Lodash](https://lodash.com). Completed with a partner. Warning: Code isn't divided like the functions are listed below, but rather divided into the order we wanted to complete them! Most of the "interesting" function tests are in `spec/extra.js` and at the bottom of `src/underscore.js`.

Includes:

### Collections

* each
* map
* reduce
* filter
* reject
* every
* some
* contains
* pluck
* invoke
* sortBy
* shuffle

### Arrays

* first
* last
* indexOf
* uniq
* intersection
* difference
* zip
* flatten

### Functions

* once
* memoize
* delay
* throttle - passes test, really debounce
* throttleCorrect - fails test, but is actually throttle (notes in spec)

### Objects

* extend
* defaults

### Utility

* identity
