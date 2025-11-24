/**
 * Utility functions for extracting query parameters
 */

import type { Context } from "hono";

/**
 * Convert a MultiDict-like structure into a regular dict.
 * If there are more than one value for a key, the result will have a list of values.
 * Otherwise it will have the plain value.
 */
function semiflatten(
	multi: Record<string, string | string[]>,
): Record<string, string | string[]> {
	if (!multi || Object.keys(multi).length === 0) {
		return multi;
	}

	const result: Record<string, string | string[]> = {};
	for (const [key, value] of Object.entries(multi)) {
		if (Array.isArray(value)) {
			// biome-ignore lint/style/noNonNullAssertion: value is not null
			result[key] = value.length === 1 ? value[0]! : value;
		} else {
			result[key] = value;
		}
	}
	return result;
}

export function getQueryParams(c: Context): Record<string, string | string[]> {
	return semiflatten(c.req.queries());
}
