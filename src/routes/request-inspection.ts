import { Hono } from "hono";

import { getHeaders, getOrigin } from "../utils/headers";

export const requestInspection = new Hono();

// GET /ip
// Returns the requester's IP Address.
// Original: https://github.com/postmanlabs/httpbin/blob/f8ec666b4d1b654e4ff6aedd356f510dcac09f83/httpbin/core.py#L303
requestInspection.get("/ip", (c) => {
	const origin = getOrigin(c);

	return c.json({
		origin,
	});
});

// GET /headers
// Original: https://github.com/postmanlabs/httpbin/blob/f8ec666b4d1b654e4ff6aedd356f510dcac09f83/httpbin/core.py#L333
requestInspection.get("/headers", (c) => {
	const headers = getHeaders(c);

	return c.json({
		headers,
	});
});

// GET /user-agent
// Return the incoming requests's User-Agent header.
// Original: https://github.com/postmanlabs/httpbin/blob/f8ec666b4d1b654e4ff6aedd356f510dcac09f83/httpbin/core.py#L349
requestInspection.get("/user-agent", (c) => {
	const userAgent = c.req.header("user-agent");

	return c.json({
		"user-agent": userAgent ?? null,
	});
});
