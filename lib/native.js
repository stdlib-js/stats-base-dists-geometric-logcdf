/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var addon = require( './../src/addon.node' );


// MAIN //

/**
* Evaluates the logarithm of the cumulative distribution function (CDF) for a geometric distribution with success probability `p` at a value `x`.
*
* @private
* @param {number} x - input value
* @param {Probability} p - success probability
* @returns {number} evaluated logCDF
*
* @example
* var y = logcdf( 2.0, 0.5 );
* // returns ~-0.134
*
* @example
* var y = logcdf( 2.0, 0.1 );
* // returns ~-1.306
*
* @example
* var y = logcdf( -1.0, 0.5 );
* // returns -Infinity
*
* @example
* var y = logcdf( NaN, 0.5 );
* // returns NaN
*
* @example
* var y = logcdf( 0.0, NaN );
* // returns NaN
*
* @example
* // Invalid probability
* var y = logcdf( 2.0, 1.4 );
* // returns NaN
*/
function logcdf( x, p ) {
	return addon( x, p );
}


// EXPORTS //

module.exports = logcdf;
