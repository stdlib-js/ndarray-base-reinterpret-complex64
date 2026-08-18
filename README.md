<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# reinterpretComplex64

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Reinterpret a single-precision complex floating-point [ndarray][@stdlib/ndarray/base/ctor] as a real-valued single-precision floating-point [ndarray][@stdlib/ndarray/base/ctor] containing interleaved real and imaginary components.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import reinterpretComplex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-reinterpret-complex64@esm/index.mjs';
```

#### reinterpretComplex64( x )

Reinterprets a single-precision complex floating-point [ndarray][@stdlib/ndarray/base/ctor] as a real-valued single-precision floating-point [ndarray][@stdlib/ndarray/base/ctor] containing interleaved real and imaginary components.

```javascript
import ones from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ones@esm/index.mjs';

var x = ones( 'complex64', [ 2, 2 ], 'row-major' );
// returns <ndarray>[ [ <Complex64>[ 1.0, 0.0 ], <Complex64>[ 1.0, 0.0 ] ], [ <Complex64>[ 1.0, 0.0 ], <Complex64>[ 1.0, 0.0 ] ] ]

var out = reinterpretComplex64( x );
// returns <ndarray>[ [ [ 1.0, 0.0 ], [ 1.0, 0.0 ] ], [ [ 1.0, 0.0 ], [ 1.0, 0.0 ] ] ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The returned [ndarray][@stdlib/ndarray/base/ctor] is a view on the input [ndarray][@stdlib/ndarray/base/ctor] data buffer.
-   The returned [ndarray][@stdlib/ndarray/base/ctor] has an additional trailing dimension of size two whose elements correspond to the real and imaginary components, respectively, of each complex-valued element in the input [ndarray][@stdlib/ndarray/base/ctor].
-   The returned [ndarray][@stdlib/ndarray/base/ctor] is a "base" [ndarray][@stdlib/ndarray/base/ctor], and, thus, the returned [ndarray][@stdlib/ndarray/base/ctor] does not perform bounds checking or afford any of the guarantees of the non-base [ndarray][@stdlib/ndarray/ctor] constructor. The primary intent of this function is to reinterpret an ndarray-like object within internal implementations and to do so with minimal overhead.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@esm/index.mjs';
import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@esm/index.mjs';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@esm/index.mjs';
import reinterpretComplex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-reinterpret-complex64@esm/index.mjs';

// Create a single-precision complex floating-point ndarray:
var buf = new Complex64Array( discreteUniform( 8, -5, 5 ) );
var x = ndarray( 'complex64', buf, [ 2, 2 ], [ 2, 1 ], 0, 'row-major' );

// Reinterpret as a single-precision floating-point ndarray:
var out = reinterpretComplex64( x );
console.log( ndarray2array( out ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->


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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-reinterpret-complex64.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-reinterpret-complex64

[test-image]: https://github.com/stdlib-js/ndarray-base-reinterpret-complex64/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-reinterpret-complex64/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-reinterpret-complex64/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-reinterpret-complex64?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-reinterpret-complex64.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-reinterpret-complex64/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-reinterpret-complex64/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-reinterpret-complex64/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-reinterpret-complex64/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-reinterpret-complex64/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-reinterpret-complex64/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-reinterpret-complex64/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-reinterpret-complex64/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-reinterpret-complex64/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/esm

[@stdlib/ndarray/base/ctor]: https://github.com/stdlib-js/ndarray-base-ctor/tree/esm

</section>

<!-- /.links -->
