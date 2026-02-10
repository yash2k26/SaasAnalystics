export interface AnalyticsSummary {
    totalEvent: number;
    signupClicks: number;
    Pageview: number;
    revenue: number | null;
}

export interface AnalyticsTrend {
    date: string;
    page_view: number;
    user_signup: number;
    button_click: number;
    revenue: number;
}

export interface ApiResponse<T> {
    success: boolean;
    message?: string;
    data: T;
}
