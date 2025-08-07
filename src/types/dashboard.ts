export interface KPI {
  id: string;
  name: string;
  value: number;
  target: number;
  unit: string;
  weight: number;
  status: 'excellent' | 'good' | 'warning' | 'poor';
  trend: 'up' | 'down' | 'stable';
  description: string;
}

export interface Employee {
  id: string;
  name: string;
  department: string;
  totalScore: number;
  rating: 'Poor (1)' | 'Fair (2)' | 'Good (3)' | 'Very Good (4)' | 'Excellent (5)';
  kpisFailed: string[];
  lastUpdated: string;
}

export interface TrendData {
  month: string;
  value: number;
  target: number;
}

export interface DashboardFilters {
  employee: string;
  month: string;
  department: string;
}