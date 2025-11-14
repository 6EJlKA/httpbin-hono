import { Hono } from "hono";

import { getRequestBodyData } from "../utils/body";
import { getHeaders, getOrigin } from "../utils/headers";
import { getQueryParams } from "../utils/query";

export const anything = new Hono();

// Handle all methods for /anything and /anything/* (matches multiple path segments)
anything.all("/anything/*", async (c) => {
	const method = c.req.method;
	const args = getQueryParams(c);
	const headers = getHeaders(c);
	const origin = getOrigin(c);
	const url = c.req.url;
	const { form, files, data, json } = await getRequestBodyData(c);

	return c.json({
		args,
		data,
		files,
		form,
		headers,
		json,
		method,
		origin,
		url,
	});
});
