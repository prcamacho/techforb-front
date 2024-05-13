export interface AllAlertsResponse {
    name:           string;
    country:        string;
    totalAlerts:    number;
    severityCounts: SeverityCounts;
}

export interface SeverityCounts {
    ok?:    number;
    media?: number;
    roja?:  number;
}
