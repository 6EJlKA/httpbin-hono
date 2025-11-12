import { env } from "cloudflare:test";
import { describe, expect, it } from "vitest";

import { httpMethods } from "../../src/routes/http-methods";

describe("Example", () => {
	it("Should return 200 response", async () => {
		const res = await httpMethods.request("/hello", {}, env);

		expect(res.status).toBe(200);
		expect(await res.json()).toEqual({
			hello: "world",
			var: "my variable",
		});
	});
});
