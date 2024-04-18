import { Hono } from "hono";

const defillama = new Hono();

defillama.get("/protocols", async (c) => {
	// Index = name
	// Description = Get current TVL of all protocols using Defi LLama
	const response = await fetch("https://api.llama.fi/protocols");
	const data = await response.json();
	return c.json(data);
});

// Get historical TVL of a protocol and breakdowns by token and chain
defillama.get("/protocol", async (c) => {
	// Index = name
	// Description = Get current TVL of a specific protocol using Defi LLama
	const protocol = c.req.query("protocol");
	const response = await fetch(`https://api.llama.fi/protocol/${protocol}`);
	console.log(response)
	const data = await response.json();
	console.log(data)
	return c.json(data);
  });

// Get historical TVL (excludes liquid staking and double counted tvl) of DeFi on all chains
defillama.get("/v2/historicalChainTvl", async (c) => {
	// Index = name
	// Description = Get historicalChainTvl of all
	const response = await fetch("https://api.llama.fi/v2/historicalChainTvl");
	const data = await response.json();
	return c.json(data);
});

// Get historical TVL (excludes liquid staking and double counted tvl) of a chain
defillama.get("/v2/historicalChainTvl", async (c) => {
	// Index = name
	// Description = Get historicalChainTvl of a chain
	const chain = c.req.query("chain");
	const response = await fetch(`https://api.llama.fi/v2/historicalChainTvl/${chain}`);
	const data = await response.json();
	return c.json(data);
});

// Simplified endpoint to get current TVL of a protocol
defillama.get("/tvl", async (c) => {
const protocol = c.req.query("protocol");
const response = await fetch(`https://api.llama.fi/tvl/${protocol}`);
const data = await response.json();
return c.json(data);
});

// Get current TVL of all chains
defillama.get("/v2/chains", async (c) => {
const response = await fetch("https://api.llama.fi/v2/chains");
const data = await response.json();
return c.json(data);
});

// Get current prices of tokens by contract address
defillama.get("/prices/current", async (c) => {
const coins = c.req.query("coins");
const response = await fetch(`https://coins.llama.fi/prices/current/${coins}`);
const data = await response.json();
return c.json(data);
});

// Get historical prices of tokens by contract address
defillama.get("/prices/historical", async (c) => {
const timestamp = c.req.query("timestamp");
const coins = c.req.query("coins");
const response = await fetch(`https://coins.llama.fi/prices/historical/${timestamp}/${coins}`);
const data = await response.json();
return c.json(data);
});

// Get historical prices for multiple tokens at multiple different timestamps
defillama.get("/batchHistorical", async (c) => {
// Assuming you have a way to pass the required parameters in the request
const response = await fetch("https://coins.llama.fi/batchHistorical");
const data = await response.json();
return c.json(data);
});

// Get token prices at regular time intervals
defillama.get("/chart", async (c) => {
const coins = c.req.query("coins");
const response = await fetch(`https://coins.llama.fi/chart/${coins}`);
const data = await response.json();
return c.json(data);
});

// Get percentage change in price over time
defillama.get("/percentage", async (c) => {
const coins = c.req.query("coins");
const response = await fetch(`https://coins.llama.fi/percentage/${coins}`);
const data = await response.json();
return c.json(data);
});

// Get earliest timestamp price record for coins
defillama.get("/prices/first", async (c) => {
const coins = c.req.query("coins");
const response = await fetch(`https://coins.llama.fi/prices/first/${coins}`);
const data = await response.json();
return c.json(data);
});

// Get the closest block to a timestamp
defillama.get("/block", async (c) => {
const chain = c.req.query("chain");
const timestamp = c.req.query("timestamp");
const response = await fetch(`https://coins.llama.fi/block/${chain}/${timestamp}`);
const data = await response.json();
return c.json(data);
});


// List all stablecoins along with their circulating amounts
defillama.get("/stablecoins", async (c) => {
const response = await fetch("https://stablecoins.llama.fi/stablecoins");
const data = await response.json();
return c.json(data);
});

// Get historical market cap sum of all stablecoins
defillama.get("/stablecoincharts/all", async (c) => {
const response = await fetch("https://stablecoins.llama.fi/stablecoincharts/all");
const data = await response.json();
return c.json(data);
});

// Get historical market cap sum of all stablecoins in a chain
defillama.get("/stablecoincharts", async (c) => {
const chain = c.req.query("chain");
const response = await fetch(`https://stablecoins.llama.fi/stablecoincharts/${chain}`);
const data = await response.json();
return c.json(data);
});

// Get historical market cap and historical chain distribution of a stablecoin
defillama.get("/stablecoin", async (c) => {
const asset = c.req.query("asset");
const response = await fetch(`https://stablecoins.llama.fi/stablecoin/${asset}`);
const data = await response.json();
return c.json(data);
});

// Get current market cap sum of all stablecoins on each chain
defillama.get("/stablecoinchains", async (c) => {
const response = await fetch("https://stablecoins.llama.fi/stablecoinchains");
const data = await response.json();
return c.json(data);
});

// Get historical prices of all stablecoins
defillama.get("/stablecoinprices", async (c) => {
const response = await fetch("https://stablecoins.llama.fi/stablecoinprices");
const data = await response.json();
return c.json(data);
});


// Retrieve the latest data for all pools
defillama.get("/pools", async (c) => {
const response = await fetch("https://yields.llama.fi/pools");
const data = await response.json();
return c.json(data);
});

// Get historical APY and TVL of a pool
defillama.get("/chart", async (c) => {
const pool = c.req.query("pool");
const response = await fetch(`https://yields.llama.fi/chart/${pool}`);
const data = await response.json();
return c.json(data);
});

// Get the ABI for a function or event signature
defillama.get("/fetch/signature", async (c) => {
// Assuming you have a way to pass the required parameters in the request
const response = await fetch("https://abi-decoder.llama.fi/fetch/signature");
const data = await response.json();
return c.json(data);
});

// Get the verbose ABI for a function or event signature for a particular contract
defillama.get("/fetch/contract", async (c) => {
const chain = c.req.query("chain");
const address = c.req.query("address");
const response = await fetch(`https://abi-decoder.llama.fi/fetch/contract/${chain}/${address}`);
const data = await response.json();
return c.json(data);
});


// List all dexs along with summaries of their volumes and dataType history data
defillama.get("/overview/dexs", async (c) => {
const response = await fetch("https://bridges.llama.fi/overview/dexs");
const data = await response.json();
return c.json(data);
});


// List all dexs along with summaries of their volumes and dataType history data filtering by chain
defillama.get("/overview/dexs", async (c) => {
const chain = c.req.query("chain");
const response = await fetch(`https://api.llama.fi/overview/dexs/${chain}`);
const data = await response.json();
return c.json(data);
});

// Get summary of dex volume with historical data
defillama.get("/summary/dexs", async (c) => {
const protocol = c.req.query("protocol");
const response = await fetch(`https://api.llama.fi/summary/dexs/${protocol}`);
const data = await response.json();
return c.json(data);
});

// List all options dexs along with summaries of their volumes and dataType history data
defillama.get("/overview/options", async (c) => {
const response = await fetch("https://api.llama.fi/overview/options");
const data = await response.json();
return c.json(data);
});

// List all options dexs along with summaries of their volumes and dataType history data filtering by chain
defillama.get("/overview/options", async (c) => {
const chain = c.req.query("chain");
const response = await fetch(`https://api.llama.fi/overview/options/${chain}`);
const data = await response.json();
return c.json(data);
});

// Get summary of options dex volume with historical data
defillama.get("/summary/options", async (c) => {
const protocol = c.req.query("protocol");
const response = await fetch(`https://api.llama.fi/summary/options/${protocol}`);
const data = await response.json();
return c.json(data);
});

// List all protocols along with summaries of their fees and revenue and dataType history data
defillama.get("/overview/fees", async (c) => {
const response = await fetch("https://api.llama.fi/overview/fees");
const data = await response.json();
return c.json(data);
});

// List all protocols along with summaries of their fees and revenue and dataType history data by chain
defillama.get("/overview/fees", async (c) => {
const chain = c.req.query("chain");
const response = await fetch(`https://api.llama.fi/overview/fees/${chain}`);
const data = await response.json();
return c.json(data);
});

// Get summary of protocol fees and revenue with historical data
defillama.get("/summary/fees/:protocol", async (c) => {
const protocol = c.req.query("protocol");
const response = await fetch(`https://api.llama.fi/summary/fees/${protocol}`);
const data = await response.json();
return c.json(data);
});

// List all bridges along with summaries of recent bridge volumes
defillama.get("/bridges", async (c) => {
    const response = await fetch("https://bridges.llama.fi/bridges");
    const data = await response.json();
    return c.json(data);
});

// Get summary of bridge volume and volume breakdown by chain
defillama.get("/bridge", async (c) => {
    const id = c.req.query("id");
    const response = await fetch(`https://bridges.llama.fi/bridge/${id}`);
    const data = await response.json();
    return c.json(data);
});

// Get historical volumes for a bridge, chain, or bridge on a particular chain
defillama.get("/bridgevolume", async (c) => {
    const chain = c.req.query("chain");
    const response = await fetch(`https://bridges.llama.fi/bridgevolume/${chain}`);
    const data = await response.json();
    return c.json(data);
});

// Get a 24hr token and address volume breakdown for a bridge
defillama.get("/bridgedaystats", async (c) => {
    const timestamp = c.req.query("timestamp");
    const chain = c.req.query("chain");
    const response = await fetch(`https://bridges.llama.fi/bridgedaystats/${timestamp}/${chain}`);
    const data = await response.json();
    return c.json(data);
});

// Get all transactions for a bridge within a date range
defillama.get("/transactions", async (c) => {
    const chain = c.req.query("id");
    const response = await fetch(`https://bridges.llama.fi/transactions/${id}`);
    const data = await response.json();
    return c.json(data);
});



export { defillama };
