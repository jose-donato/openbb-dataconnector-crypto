import { Hono } from "hono";

const defillama = new Hono();

defillama.get("/protocols", async (c) => {
	const response = await fetch("https://api.llama.fi/protocols");
	const data = await response.json();
	return c.json(data);
});

export { defillama };
