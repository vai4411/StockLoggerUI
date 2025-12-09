export interface Stock {
  stock_name: string;
  buy_price: string;
  quantity: string;
}

export interface UpdateStock{
  stock_name: string;
  sell_price: string;
}

export interface StockHistory {
  id: string;
  stock_name: string;
  buy_price: string;
  sell_price: string | null;
  buy_date: string;
  sell_date: string | null;
  quantity: string;
}