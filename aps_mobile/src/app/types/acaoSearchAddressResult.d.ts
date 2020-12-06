interface ExercisedValue {
    raw: number;
    fmt?: any;
    longFmt: string;
}

interface UnexercisedValue {
    raw: number;
    fmt?: any;
    longFmt: string;
}

interface CompanyOfficer {
    maxAge: number;
    name: string;
    age: number;
    title: string;
    yearBorn: number;
    exercisedValue: ExercisedValue;
    unexercisedValue: UnexercisedValue;
}

interface AssetProfile {
    address1: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone: string;
    fax: string;
    website: string;
    industry: string;
    sector: string;
    longBusinessSummary: string;
    companyOfficers: CompanyOfficer[];
    maxAge: number;
}

interface Result {
    assetProfile: AssetProfile;
}

interface QuoteSummary {
    result: Result[];
    error?: any;
}

export interface AcaoSearchAddressResult {
    quoteSummary: QuoteSummary;
}
