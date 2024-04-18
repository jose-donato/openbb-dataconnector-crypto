{
  "defillama_protocols": {
    "name": "DefiLlama Protocols",
    "description": "Get current TVL of all protocols using Defi LLama",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_protocols",
    "endpoint": "/defillama/protocols",
    "params": {
      "optional": {}
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "name",
        "showAll": true
      }
    }
  },
  "defillama_protocol": {
    "name": "DefiLlama Protocol",
    "description": "Description for DefiLlama Protocol",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_protocol",
    "endpoint": "/defillama/protocol/:protocol",
    "params": {
      "optional": {
        "protocol": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_v2_historicalChainTvl": {
    "name": "DefiLlama V2 HistoricalChainTvl",
    "description": "Description for DefiLlama V2 HistoricalChainTvl",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_v2_historicalChainTvl",
    "endpoint": "/defillama/v2/historicalChainTvl/:chain",
    "params": {
      "optional": {
        "chain": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_tvl": {
    "name": "DefiLlama Tvl",
    "description": "Description for DefiLlama Tvl",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_tvl",
    "endpoint": "/defillama/tvl/:protocol",
    "params": {
      "optional": {
        "protocol": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_v2_chains": {
    "name": "DefiLlama V2 Chains",
    "description": "Description for DefiLlama V2 Chains",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_v2_chains",
    "endpoint": "/defillama/v2/chains",
    "params": {
      "optional": {}
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_prices_current": {
    "name": "DefiLlama Prices Current",
    "description": "Description for DefiLlama Prices Current",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_prices_current",
    "endpoint": "/defillama/prices/current/:coins",
    "params": {
      "optional": {
        "coins": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_prices_historical": {
    "name": "DefiLlama Prices Historical",
    "description": "Description for DefiLlama Prices Historical",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_prices_historical",
    "endpoint": "/defillama/prices/historical/:timestamp/:coins",
    "params": {
      "optional": {
        "timestamp": "string",
        "coins": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_batchHistorical": {
    "name": "DefiLlama BatchHistorical",
    "description": "Description for DefiLlama BatchHistorical",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_batchHistorical",
    "endpoint": "/defillama/batchHistorical",
    "params": {
      "optional": {}
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_chart": {
    "name": "DefiLlama Chart",
    "description": "Description for DefiLlama Chart",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_chart",
    "endpoint": "/defillama/chart/:pool",
    "params": {
      "optional": {
        "pool": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_percentage": {
    "name": "DefiLlama Percentage",
    "description": "Description for DefiLlama Percentage",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_percentage",
    "endpoint": "/defillama/percentage/:coins",
    "params": {
      "optional": {
        "coins": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_prices_first": {
    "name": "DefiLlama Prices First",
    "description": "Description for DefiLlama Prices First",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_prices_first",
    "endpoint": "/defillama/prices/first/:coins",
    "params": {
      "optional": {
        "coins": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_block": {
    "name": "DefiLlama Block",
    "description": "Description for DefiLlama Block",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_block",
    "endpoint": "/defillama/block/:chain/:timestamp",
    "params": {
      "optional": {
        "chain": "string",
        "timestamp": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_stablecoins": {
    "name": "DefiLlama Stablecoins",
    "description": "Description for DefiLlama Stablecoins",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_stablecoins",
    "endpoint": "/defillama/stablecoins",
    "params": {
      "optional": {}
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_stablecoincharts_all": {
    "name": "DefiLlama Stablecoincharts All",
    "description": "Description for DefiLlama Stablecoincharts All",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_stablecoincharts_all",
    "endpoint": "/defillama/stablecoincharts/all",
    "params": {
      "optional": {}
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_stablecoincharts": {
    "name": "DefiLlama Stablecoincharts",
    "description": "Description for DefiLlama Stablecoincharts",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_stablecoincharts",
    "endpoint": "/defillama/stablecoincharts/:chain",
    "params": {
      "optional": {
        "chain": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_stablecoin": {
    "name": "DefiLlama Stablecoin",
    "description": "Description for DefiLlama Stablecoin",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_stablecoin",
    "endpoint": "/defillama/stablecoin/:asset",
    "params": {
      "optional": {
        "asset": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_stablecoinchains": {
    "name": "DefiLlama Stablecoinchains",
    "description": "Description for DefiLlama Stablecoinchains",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_stablecoinchains",
    "endpoint": "/defillama/stablecoinchains",
    "params": {
      "optional": {}
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_stablecoinprices": {
    "name": "DefiLlama Stablecoinprices",
    "description": "Description for DefiLlama Stablecoinprices",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_stablecoinprices",
    "endpoint": "/defillama/stablecoinprices",
    "params": {
      "optional": {}
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_pools": {
    "name": "DefiLlama Pools",
    "description": "Description for DefiLlama Pools",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_pools",
    "endpoint": "/defillama/pools",
    "params": {
      "optional": {}
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_fetch_signature": {
    "name": "DefiLlama Fetch Signature",
    "description": "Description for DefiLlama Fetch Signature",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_fetch_signature",
    "endpoint": "/defillama/fetch/signature",
    "params": {
      "optional": {}
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_fetch_contract": {
    "name": "DefiLlama Fetch Contract",
    "description": "Description for DefiLlama Fetch Contract",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_fetch_contract",
    "endpoint": "/defillama/fetch/contract/:chain/:address",
    "params": {
      "optional": {
        "chain": "string",
        "address": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_overview_dexs": {
    "name": "DefiLlama Overview Dexs",
    "description": "Description for DefiLlama Overview Dexs",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_overview_dexs",
    "endpoint": "/defillama/overview/dexs/:chain",
    "params": {
      "optional": {
        "chain": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_summary_dexs": {
    "name": "DefiLlama Summary Dexs",
    "description": "Description for DefiLlama Summary Dexs",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_summary_dexs",
    "endpoint": "/defillama/summary/dexs/:protocol",
    "params": {
      "optional": {
        "protocol": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_overview_options": {
    "name": "DefiLlama Overview Options",
    "description": "Description for DefiLlama Overview Options",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_overview_options",
    "endpoint": "/defillama/overview/options/:chain",
    "params": {
      "optional": {
        "chain": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_summary_options": {
    "name": "DefiLlama Summary Options",
    "description": "Description for DefiLlama Summary Options",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_summary_options",
    "endpoint": "/defillama/summary/options/:protocol",
    "params": {
      "optional": {
        "protocol": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_overview_fees": {
    "name": "DefiLlama Overview Fees",
    "description": "Description for DefiLlama Overview Fees",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_overview_fees",
    "endpoint": "/defillama/overview/fees/:chain",
    "params": {
      "optional": {
        "chain": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  },
  "defillama_summary_fees": {
    "name": "DefiLlama Summary Fees",
    "description": "Description for DefiLlama Summary Fees",
    "category": "crypto",
    "searchCategory": "crypto",
    "widgetType": "individual",
    "widgetId": "defillama_summary_fees",
    "endpoint": "/defillama/summary/fees/:protocol",
    "params": {
      "optional": {
        "protocol": "string"
      }
    },
    "gridData": {
      "w": 40,
      "h": 10
    },
    "data": {
      "table": {
        "index": "change this to your actual index",
        "showAll": true
      }
    }
  }
}