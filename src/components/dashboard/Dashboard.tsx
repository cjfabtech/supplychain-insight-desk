import { useState } from "react";
import { DashboardHeader } from "./DashboardHeader";
import { KPICard } from "./KPICard";
import { TrendChart } from "./TrendChart";
import { EmployeeTable } from "./EmployeeTable";
import { DashboardFilters } from "@/types/dashboard";
import { mockKPIs, mockEmployees, mockTrendData } from "@/data/mockData";

export function Dashboard() {
  const [filters, setFilters] = useState<DashboardFilters>({
    employee: 'all',
    month: 'january',
    department: 'all'
  });

  // Filter employees based on current filters
  const filteredEmployees = mockEmployees.filter(employee => {
    if (filters.employee !== 'all' && employee.id !== filters.employee) return false;
    if (filters.department !== 'all') {
      const departmentMap: Record<string, string> = {
        'warehouse': 'Warehouse Operations',
        'inventory': 'Inventory Management',
        'receiving': 'Receiving',
        'shipping': 'Shipping'
      };
      if (employee.department !== departmentMap[filters.department]) return false;
    }
    return true;
  });

  // Calculate overall performance metrics
  const totalKPIs = mockKPIs.length;
  const excellentKPIs = mockKPIs.filter(kpi => kpi.status === 'excellent').length;
  const goodKPIs = mockKPIs.filter(kpi => kpi.status === 'good').length;
  const warningKPIs = mockKPIs.filter(kpi => kpi.status === 'warning').length;
  const poorKPIs = mockKPIs.filter(kpi => kpi.status === 'poor').length;

  const overallScore = Math.round(
    mockKPIs.reduce((acc, kpi) => {
      const score = kpi.status === 'excellent' ? 100 : 
                   kpi.status === 'good' ? 80 : 
                   kpi.status === 'warning' ? 60 : 40;
      return acc + (score * kpi.weight / 100);
    }, 0)
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="p-6 space-y-6">
        <DashboardHeader filters={filters} onFiltersChange={setFilters} />
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-card rounded-lg p-4 shadow-card border border-border">
            <div className="text-2xl font-bold text-success">{excellentKPIs}</div>
            <div className="text-sm text-muted-foreground">Excellent KPIs</div>
          </div>
          <div className="bg-card rounded-lg p-4 shadow-card border border-border">
            <div className="text-2xl font-bold text-primary">{goodKPIs}</div>
            <div className="text-sm text-muted-foreground">Good KPIs</div>
          </div>
          <div className="bg-card rounded-lg p-4 shadow-card border border-border">
            <div className="text-2xl font-bold text-warning">{warningKPIs}</div>
            <div className="text-sm text-muted-foreground">Need Improvement</div>
          </div>
          <div className="bg-card rounded-lg p-4 shadow-card border border-border">
            <div className="text-2xl font-bold text-foreground">{overallScore}%</div>
            <div className="text-sm text-muted-foreground">Overall Score</div>
          </div>
        </div>

        {/* KPI Scorecards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {mockKPIs.map((kpi) => (
            <KPICard key={kpi.id} kpi={kpi} />
          ))}
        </div>

        {/* Trend Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <TrendChart
            title="Inventory Accuracy"
            data={mockTrendData['inventory-accuracy']}
            color="hsl(214, 84%, 56%)"
            unit="%"
          />
          <TrendChart
            title="Shrinkage Rate"
            data={mockTrendData['shrinkage']}
            color="hsl(120, 60%, 50%)"
            unit="%"
          />
          <TrendChart
            title="Shipping Errors"
            data={mockTrendData['shipping-error']}
            color="hsl(0, 84%, 60%)"
            unit="%"
          />
        </div>

        {/* Employee Performance Table */}
        <EmployeeTable employees={filteredEmployees} />
      </div>
    </div>
  );
}