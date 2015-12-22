'use strict';

/**
 * @base modules
 *
 * @author Faizal Pribadi <faizal.pribadi@gmail.com>
 */
var debug = require('debug')('process-exit');

/**
 * This is reference api signature about 'process.exit'
 *
 * @link https://nodejs.org/api/process.html#process_exit_codes
 *
 * @private
 */
var _codes = {
	0: {
		name: 'UN_IMPLEMENTED',
		definition: 'The code is warning the default method of process with status code 0 is not implemented on node.js by default same as undefined'
	},
	1: {
		name: 'UNCAUGHT_FATAL_EXCEPTION',
		definition: "There was an uncaught exception, and it was not handled by a domain or an 'uncaughtException' event handler."
	},
	2: {
		name: 'UNUSED',
		definition: "(reserved by Bash for builtin misuse)"
	},
	3: {
		name: 'INTERNAL_JAVASCRIPT_PARSE_ERROR',
		definition: "The JavaScript source code internal in Node.js's bootstrapping process caused a parse error. This is extremely rare, and generally can only happen during development of Node.js itself."
	},
	4: {
		name: 'INTERNAL_JAVASCRIPT_EVALUATION_ERROR',
		definition: "The JavaScript source code internal in Node.js's bootstrapping process failed to return a function value when evaluated. This is extremely rare, and generally can only happen during development of Node.js itself."
	},
	5: {
		name: 'FATAL_ERROR',
		definition: "There was a fatal unrecoverable error in V8. Typically a message will be printed to stderr with the prefix FATAL ERROR."
	},
	6: {
		name: 'NON_FUNCTION_INTERNAL_EXCEPTION_HANDLER',
		definition: "There was an uncaught exception, but the internal fatal exception handler function was somehow set to a non-function, and could not be called."
	},
	7: {
		name: 'INTERNAL_EXCEPTION_HANDLER_RUN_TIME_FAILURE',
		definition: "There was an uncaught exception, and the internal fatal exception handler function itself threw an error while attempting to handle it. This can happen, for example, if a process.on('uncaughtException') or domain.on('error') handler throws an error."
	},
	8: {
		name: 'UNUSED',
		definition: "In previous versions of Node.js, exit code 8 sometimes indicated an uncaught exception."
	},
	9: {
		name: 'INVALID_ARGUMENT',
		definition: "Either an unknown option was specified, or an option requiring a value was provided without a value."
	},
	10: {
		name: 'INTERNAL_JAVASCRIPT_RUN_TIME_FAILURE',
		definition: "he JavaScript source code internal in Node.js's bootstrapping process threw an error when the bootstrapping function was called. This is extremely rare, and generally can only happen during development of Node.js itself."
	},
	12: {
		name: 'INVALID_DEBUG_ARGUMENT',
		definition: "The --debug and/or --debug-brk options were set, but an invalid port number was chosen."
	},
	128: {
		name: 'SIGNAL_EXIT',
		definition: " If Node.js receives a fatal signal such as SIGKILL or SIGHUP, then its exit code will be 128 plus the value of the signal code. This is a standard Unix practice, since exit codes are defined to be 7-bit integers, and signal exits set the high-order bit, and then contain the value of the signal code."
	}
};

/**
 *
 * @param {number} code bind number code of process.exit
 */
module.exports = function exit(code) {
	debug('%', console.info(_codes[code]));
	return code in _codes ? process.exit(_codes[code]): _codes[0];
};

