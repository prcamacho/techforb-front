export interface AddAlerts {
    name:            string;
    country:         string;
    alertSeverities: AlertSeverity[];
}

export interface AlertSeverity {
    severity: string;
    count:    string;
}
