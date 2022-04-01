<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterFibonacciSeq

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which generates a [Fibonacci sequence][fibonacci-number].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [Fibonacci numbers][fibonacci-number] are the integer sequence

<!-- <equation class="equation" label="eq:fibonacci_sequence" align="center" raw="0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \ldots" alt="Fibonacci sequence"> -->

<div class="equation" align="center" data-raw-text="0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, \ldots" data-equation="eq:fibonacci_sequence">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@aa77a2f6e76d2e9da5b49bffa45ee5167d6c16e1/lib/node_modules/@stdlib/math/iter/sequences/fibonacci/docs/img/equation_fibonacci_sequence.svg" alt="Fibonacci sequence">
    <br>
</div>

<!-- </equation> -->

The sequence is defined by the recurrence relation

<!-- <equation class="equation" label="eq:fibonacci_recurrence_relation" align="center" raw="F_n = F_{n-1} + F_{n-2}" alt="Fibonacci sequence recurrence relation"> -->

<div class="equation" align="center" data-raw-text="F_n = F_{n-1} + F_{n-2}" data-equation="eq:fibonacci_recurrence_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@aa77a2f6e76d2e9da5b49bffa45ee5167d6c16e1/lib/node_modules/@stdlib/math/iter/sequences/fibonacci/docs/img/equation_fibonacci_recurrence_relation.svg" alt="Fibonacci sequence recurrence relation">
    <br>
</div>

<!-- </equation> -->

with seed values `F_0 = 0` and `F_1 = 1`.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterFibonacciSeq from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-sequences-fibonacci@esm/index.mjs';
```

#### iterFibonacciSeq( \[options] )

Returns an iterator which generates a [Fibonacci sequence][fibonacci-number].

```javascript
var it = iterFibonacciSeq();
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns 1

v = it.next().value;
// returns 1

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **iter**: number of iterations. Default: `79`.

The returned iterator can only generate the first `79` [Fibonacci numbers][fibonacci-number], as larger [Fibonacci numbers][fibonacci-number] cannot be safely represented in [double-precision floating-point format][ieee754]. By default, the function returns an iterator which generates all `79` numbers. To limit the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 2
};
var it = iterFibonacciSeq( opts );
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns 1

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import iterFibonacciSeq from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-sequences-fibonacci@esm/index.mjs';

// Create an iterator:
var it = iterFibonacciSeq();

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/fibonacci`][@stdlib/math/base/special/fibonacci]</span><span class="delimiter">: </span><span class="description">compute the nth Fibonacci number.</span>
-   <span class="package-name">[`@stdlib/math/iter/sequences/lucas`][@stdlib/math/iter/sequences/lucas]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a Lucas sequence.</span>
-   <span class="package-name">[`@stdlib/math/iter/sequences/negafibonacci`][@stdlib/math/iter/sequences/negafibonacci]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a negaFibonacci sequence.</span>
-   <span class="package-name">[`@stdlib/math/iter/sequences/nonfibonacci`][@stdlib/math/iter/sequences/nonfibonacci]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a non-Fibonacci integer sequence.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-sequences-fibonacci.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-sequences-fibonacci

[test-image]: https://github.com/stdlib-js/math-iter-sequences-fibonacci/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-iter-sequences-fibonacci/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-sequences-fibonacci/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-sequences-fibonacci?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-sequences-fibonacci.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-sequences-fibonacci/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-sequences-fibonacci/tree/deno
[umd-url]: https://github.com/stdlib-js/math-iter-sequences-fibonacci/tree/umd
[esm-url]: https://github.com/stdlib-js/math-iter-sequences-fibonacci/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-sequences-fibonacci/main/LICENSE

[fibonacci-number]: https://en.wikipedia.org/wiki/Fibonacci_number

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/fibonacci]: https://github.com/stdlib-js/math-base-special-fibonacci/tree/esm

[@stdlib/math/iter/sequences/lucas]: https://github.com/stdlib-js/math-iter-sequences-lucas/tree/esm

[@stdlib/math/iter/sequences/negafibonacci]: https://github.com/stdlib-js/math-iter-sequences-negafibonacci/tree/esm

[@stdlib/math/iter/sequences/nonfibonacci]: https://github.com/stdlib-js/math-iter-sequences-nonfibonacci/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
