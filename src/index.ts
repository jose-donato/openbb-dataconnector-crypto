import { Hono } from "hono";
import { cache } from "hono/cache";
import { coingecko } from "./routes/coingecko";
import { defillama } from "./routes/defillama";

const app = new Hono();

app.get(
	"*",
	cache({
		cacheName: "my-app",
		cacheControl: "max-age=3600", // 1 hour
	}),
);

app.route("/coingecko", coingecko);
app.route("/defillama", defillama);

export default app;
