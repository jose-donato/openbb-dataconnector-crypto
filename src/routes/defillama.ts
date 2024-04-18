import { Hono } from "hono";

const defillama = new Hono();

defillama.get("/protocols", async (c) => {
	const response = await fetch("https://api.llama.fi/protocols");
	const data = await response.json();
	return c.json(data);
});

// Get historical TVL of a protocol and breakdowns by token and chain
defillama.get("/protocol/:protocol", async (c) => {
	const protocol = c.req.param("protocol");
	const response = await fetch(`https://api.llama.fi/protocol/${protocol}`);
	const data = await response.json();
	return c.json(data);
  });
  
  // Get historical TVL (excludes liquid staking and double counted tvl) of DeFi on all chains
  defillama.get("/v2/historicalChainTvl", async (c) => {
	const response = await fetch("https://api.llama.fi/v2/historicalChainTvl");
	const data = await response.json();
	return c.json(data);
  });
  
  // Get historical TVL (excludes liquid staking and double counted tvl) of a chain
  defillama.get("/v2/historicalChainTvl/:chain", async (c) => {
	const chain = c.req.param("chain");
	const response = await fetch(`https://api.llama.fi/v2/historicalChainTvl/${chain}`);
	const data = await response.json();
	return c.json(data);
  });
  
  // Simplified endpoint to get current TVL of a protocol
  defillama.get("/tvl/:protocol", async (c) => {
	const protocol = c.req.param("protocol");
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
defillama.get("/prices/current/:coins", async (c) => {
	const coins = c.req.param("coins");
	const response = await fetch(`https://api.llama.fi/prices/current/${coins}`);
	const data = await response.json();
	return c.json(data);
  });
  
  // Get historical prices of tokens by contract address
  defillama.get("/prices/historical/:timestamp/:coins", async (c) => {
	const timestamp = c.req.param("timestamp");
	const coins = c.req.param("coins");
	const response = await fetch(`https://api.llama.fi/prices/historical/${timestamp}/${coins}`);
	const data = await response.json();
	return c.json(data);
  });
  
  // Get historical prices for multiple tokens at multiple different timestamps
  defillama.get("/batchHistorical", async (c) => {
	// Assuming you have a way to pass the required parameters in the request
	const response = await fetch("https://api.llama.fi/batchHistorical");
	const data = await response.json();
	return c.json(data);
  });
  
  // Get token prices at regular time intervals
  defillama.get("/chart/:coins", async (c) => {
	const coins = c.req.param("coins");
	const response = await fetch(`https://api.llama.fi/chart/${coins}`);
	const data = await response.json();
	return c.json(data);
  });
  
  // Get percentage change in price over time
  defillama.get("/percentage/:coins", async (c) => {
	const coins = c.req.param("coins");
	const response = await fetch(`https://api.llama.fi/percentage/${coins}`);
	const data = await response.json();
	return c.json(data);
  });
  
  // Get earliest timestamp price record for coins
  defillama.get("/prices/first/:coins", async (c) => {
	const coins = c.req.param("coins");
	const response = await fetch(`https://api.llama.fi/prices/first/${coins}`);
	const data = await response.json();
	return c.json(data);
  });
  
  // Get the closest block to a timestamp
  defillama.get("/block/:chain/:timestamp", async (c) => {
	const chain = c.req.param("chain");
	const timestamp = c.req.param("timestamp");
	const response = await fetch(`https://api.llama.fi/block/${chain}/${timestamp}`);
	const data = await response.json();
	return c.json(data);
  });


  // List all stablecoins along with their circulating amounts
defillama.get("/stablecoins", async (c) => {
	const response = await fetch("https://api.llama.fi/stablecoins");
	const data = await response.json();
	return c.json(data);
  });
  
  // Get historical market cap sum of all stablecoins
  defillama.get("/stablecoincharts/all", async (c) => {
	const response = await fetch("https://api.llama.fi/stablecoincharts/all");
	const data = await response.json();
	return c.json(data);
  });
  
  // Get historical market cap sum of all stablecoins in a chain
  defillama.get("/stablecoincharts/:chain", async (c) => {
	const chain = c.req.param("chain");
	const response = await fetch(`https://api.llama.fi/stablecoincharts/${chain}`);
	const data = await response.json();
	return c.json(data);
  });
  
  // Get historical market cap and historical chain distribution of a stablecoin
  defillama.get("/stablecoin/:asset", async (c) => {
	const asset = c.req.param("asset");
	const response = await fetch(`https://api.llama.fi/stablecoin/${asset}`);
	const data = await response.json();
	return c.json(data);
  });
  
  // Get current market cap sum of all stablecoins on each chain
  defillama.get("/stablecoinchains", async (c) => {
	const response = await fetch("https://api.llama.fi/stablecoinchains");
	const data = await response.json();
	return c.json(data);
  });
  
  // Get historical prices of all stablecoins
  defillama.get("/stablecoinprices", async (c) => {
	const response = await fetch("https://api.llama.fi/stablecoinprices");
	const data = await response.json();
	return c.json(data);
  });


// Retrieve the latest data for all pools
defillama.get("/pools", async (c) => {
	const response = await fetch("https://api.llama.fi/pools");
	const data = await response.json();
	return c.json(data);
  });
  
  // Get historical APY and TVL of a pool
  defillama.get("/chart/:pool", async (c) => {
	const pool = c.req.param("pool");
	const response = await fetch(`https://api.llama.fi/chart/${pool}`);
	const data = await response.json();
	return c.json(data);
  });

  // Get the ABI for a function or event signature
defillama.get("/fetch/signature", async (c) => {
	// Assuming you have a way to pass the required parameters in the request
	const response = await fetch("https://api.llama.fi/fetch/signature");
	const data = await response.json();
	return c.json(data);
  });
  
  // Get the verbose ABI for a function or event signature for a particular contract
  defillama.get("/fetch/contract/:chain/:address", async (c) => {
	const chain = c.req.param("chain");
	const address = c.req.param("address");
	const response = await fetch(`https://api.llama.fi/fetch/contract/${chain}/${address}`);
	const data = await response.json();
	return c.json(data);
  });

  // Get the ABI for a function or event signature
defillama.get("/fetch/signature", async (c) => {
	// Assuming you have a way to pass the required parameters in the request
	const response = await fetch("https://api.llama.fi/fetch/signature");
	const data = await response.json();
	return c.json(data);
  });
  
  // Get the verbose ABI for a function or event signature for a particular contract
  defillama.get("/fetch/contract/:chain/:address", async (c) => {
	const chain = c.req.param("chain");
	const address = c.req.param("address");
	const response = await fetch(`https://api.llama.fi/fetch/contract/${chain}/${address}`);
	const data = await response.json();
	return c.json(data);
  });


  // List all dexs along with summaries of their volumes and dataType history data
defillama.get("/overview/dexs", async (c) => {
	const response = await fetch("https://api.llama.fi/overview/dexs");
	const data = await response.json();
	return c.json(data);
  });
  
  // List all dexs along with summaries of their volumes and dataType history data filtering by chain
  defillama.get("/overview/dexs/:chain", async (c) => {
	const chain = c.req.param("chain");
	const response = await fetch(`https://api.llama.fi/overview/dexs/${chain}`);
	const data = await response.json();
	return c.json(data);
  });
  
  // Get summary of dex volume with historical data
  defillama.get("/summary/dexs/:protocol", async (c) => {
	const protocol = c.req.param("protocol");
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
  defillama.get("/overview/options/:chain", async (c) => {
	const chain = c.req.param("chain");
	const response = await fetch(`https://api.llama.fi/overview/options/${chain}`);
	const data = await response.json();
	return c.json(data);
  });
  
  // Get summary of options dex volume with historical data
  defillama.get("/summary/options/:protocol", async (c) => {
	const protocol = c.req.param("protocol");
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
  defillama.get("/overview/fees/:chain", async (c) => {
	const chain = c.req.param("chain");
	const response = await fetch(`https://api.llama.fi/overview/fees/${chain}`);
	const data = await response.json();
	return c.json(data);
  });
  
  // Get summary of protocol fees and revenue with historical data
  defillama.get("/summary/fees/:protocol", async (c) => {
	const protocol = c.req.param("protocol");
	const response = await fetch(`https://api.llama.fi/summary/fees/${protocol}`);
	const data = await response.json();
	return c.json(data);
  });


export { defillama };
