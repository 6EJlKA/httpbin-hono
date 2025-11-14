import { Hono } from "hono";

import { getRequestBodyData } from "../utils/body";
import { getHeaders, getOrigin } from "../utils/headers";
import { getQueryParams } from "../utils/query";

export const httpMethods = new Hono();

// GET /get
httpMethods.get("/get", async (c) => {
	const args = getQueryParams(c);
	const headers = getHeaders(c);
	const origin = getOrigin(c);
	const url = c.req.url;

	return c.json({
		args,
		headers,
		origin,
		url,
	});
});

// POST /post
httpMethods.post("/post", async (c) => {
	const args = getQueryParams(c);
	const { form, files, data, json } = await getRequestBodyData(c);
	const origin = getOrigin(c);
	const headers = getHeaders(c);
	const url = c.req.url;

	return c.json({
		args,
		data,
		files,
		form,
		headers,
		json,
		origin,
		url,
	});
});

// PUT /put
httpMethods.put("/put", async (c) => {
	const args = getQueryParams(c);
	const { form, files, data, json } = await getRequestBodyData(c);
	const origin = getOrigin(c);
	const headers = getHeaders(c);
	const url = c.req.url;

	return c.json({
		args,
		data,
		files,
		form,
		headers,
		json,
		origin,
		url,
	});
});

// PATCH /patch
httpMethods.patch("/patch", async (c) => {
	const args = getQueryParams(c);
	const { form, files, data, json } = await getRequestBodyData(c);
	const origin = getOrigin(c);
	const headers = getHeaders(c);
	const url = c.req.url;

	return c.json({
		args,
		data,
		files,
		form,
		headers,
		json,
		origin,
		url,
	});
});

// DELETE /delete
httpMethods.delete("/delete", async (c) => {
	const args = getQueryParams(c);
	const { form, files, data, json } = await getRequestBodyData(c);
	const origin = getOrigin(c);
	const headers = getHeaders(c);
	const url = c.req.url;

	return c.json({
		args,
		data,
		files,
		form,
		headers,
		json,
		origin,
		url,
	});
});
