export const WIDGETS_JSON = {
	defillama_protocols: {
		name: "DefiLlama Protocols",
		description: "Get current TVL of all protocols using Defi LLama",
		category: "crypto",
		searchCategory: "crypto",
		widgetType: "individual",
		widgetId: "defillama_protocols",
		endpoint: "/defillama/protocols",
		gridData: {
			w: 40,
			h: 10,
		},
		data: {
			table: {
				index: "name",
				showAll: true,
			},
		},
	},
	coingecko_top_coins: {
		name: "Coingecko Top Coins",
		description: "Get top coins by market cap using Coingecko",
		category: "crypto",
		searchCategory: "crypto",
		widgetType: "individual",
		widgetId: "coingecko_top_coins",
		endpoint: "/coingecko/top",
		gridData: {
			w: 40,
			h: 10,
		},
		data: {
			table: {
				index: "name",
				showAll: true,
			},
		},
	},
};
