import { Hono } from "hono";
import { cache } from "hono/cache";
import { cors } from "hono/cors";
import { coingecko } from "./routes/coingecko";
import { defillama } from "./routes/defillama";
import { WIDGETS_JSON } from "./utils/widgets.data";

const app = new Hono();

app.use("*", cors());
app.get(
	"*",
	cache({
		cacheName: "my-app",
		cacheControl: "max-age=3600", // 1 hour
	}),
);

app.get("/", (c) => c.json({ message: "Hello World" }));

app.route("/coingecko", coingecko);
app.route("/defillama", defillama);
//app.route("/taostats", taostats);

app.get("/widgets.json", (c) => c.json(WIDGETS_JSON));

export default app;
