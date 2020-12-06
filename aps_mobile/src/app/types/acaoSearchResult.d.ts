interface Result {
    language: string;
    region: string;
    quoteType: string;
    quoteSourceName: string;
    triggerable: boolean;
    currency: string;
    regularMarketChange: number;
    regularMarketChangePercent: number;
    regularMarketTime: number;
    regularMarketPrice: number;
    regularMarketDayHigh: number;
    regularMarketDayRange: string;
    regularMarketDayLow: number;
    regularMarketVolume: number;
    regularMarketPreviousClose: number;
    bid: number;
    ask: number;
    bidSize: number;
    askSize: number;
    fullExchangeName: string;
    financialCurrency: string;
    regularMarketOpen: number;
    averageDailyVolume3Month: number;
    averageDailyVolume10Day: number;
    fiftyTwoWeekLowChange: number;
    fiftyTwoWeekLowChangePercent: number;
    fiftyTwoWeekRange: string;
    fiftyTwoWeekHighChange: number;
    fiftyTwoWeekHighChangePercent: number;
    fiftyTwoWeekLow: number;
    fiftyTwoWeekHigh: number;
    trailingAnnualDividendRate: number;
    trailingPE: number;
    trailingAnnualDividendYield: number;
    epsTrailingTwelveMonths: number;
    sharesOutstanding: number;
    bookValue: number;
    fiftyDayAverage: number;
    fiftyDayAverageChange: number;
    fiftyDayAverageChangePercent: number;
    twoHundredDayAverage: number;
    twoHundredDayAverageChange: number;
    twoHundredDayAverageChangePercent: number;
    marketCap: number;
    priceToBook: number;
    sourceInterval: number;
    exchangeDataDelayedBy: number;
    firstTradeDateMilliseconds: number;
    priceHint: number;
    marketState: string;
    exchange: string;
    shortName: string;
    longName: string;
    messageBoardId: string;
    exchangeTimezoneName: string;
    exchangeTimezoneShortName: string;
    gmtOffSetMilliseconds: number;
    market: string;
    esgPopulated: boolean;
    tradeable: boolean;
    symbol: string;
}

interface QuoteResponse {
    result: Result[];
    error?: any;
}

export interface AcaoSearchResult {
    quoteResponse: QuoteResponse;
}
