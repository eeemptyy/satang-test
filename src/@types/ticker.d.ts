interface ITicker {
  symbol: string;
  lastPrice: string;
  volume: string;
  priceChange?: string;
  priceChangePercent?: string;
  weightedAvgPrice?: string;
  prevClosePrice?: string;
  lastQty?: string;
  bidPrice?: string;
  askPrice?: string;
  openPrice?: string;
  highPrice?: string;
  lowPrice?: string;
  quoteVolume?: string;
  openTime?: number;
  closeTime?: number;
  firstId?: number;
  lastId?: number;
  count?: number;
}

export type { ITicker };
