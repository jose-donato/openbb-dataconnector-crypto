import { Hono } from "hono";

const coingecko = new Hono();

coingecko.get("/top", async (c) => {
	const response = await fetch(
		"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false",
	);
	const data = await response.json();
	return c.json(data);
});

export { coingecko };
