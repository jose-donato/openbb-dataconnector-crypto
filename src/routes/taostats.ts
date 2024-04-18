import { Hono } from "hono";

const taostats = new Hono();

taostats.get("/data.json", async (c) => {
	const response = await fetch("https://taostats.io/data.json");
	const data = await response.json();
	return c.json(data);
});

export { taostats };
