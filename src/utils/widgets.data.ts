export const WIDGETS_JSON = {
	defillama_protocols: {
		name: "DefiLlama Protocols",
		description: "Get current TVL of all protocols",
		source: ["defillama"],
		category: "Crypto",
		sub_category: "DeFi",
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
		category: "Crypto",
		sub_category: "Price",
		source: ["coingecko"],
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
