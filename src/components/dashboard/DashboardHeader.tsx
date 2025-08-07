import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, TrendingUp } from "lucide-react";
import { DashboardFilters } from "@/types/dashboard";

interface DashboardHeaderProps {
  filters: DashboardFilters;
  onFiltersChange: (filters: DashboardFilters) => void;
}

export function DashboardHeader({ filters, onFiltersChange }: DashboardHeaderProps) {
  const updateFilter = (key: keyof DashboardFilters, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <Card className="bg-gradient-primary text-dashboard-header-foreground shadow-large">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Supply Chain KPI Dashboard</h1>
              <p className="text-white/80 text-sm">Real-time performance monitoring and analytics</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-white/80" />
              <span className="text-sm text-white/80">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long',
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 mt-6">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-white/90">Filters:</span>
          </div>
          
          <Select value={filters.department} onValueChange={(value) => updateFilter('department', value)}>
            <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="warehouse">Warehouse Operations</SelectItem>
              <SelectItem value="inventory">Inventory Management</SelectItem>
              <SelectItem value="receiving">Receiving</SelectItem>
              <SelectItem value="shipping">Shipping</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={filters.month} onValueChange={(value) => updateFilter('month', value)}>
            <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="January" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="january">January</SelectItem>
              <SelectItem value="december">December</SelectItem>
              <SelectItem value="november">November</SelectItem>
              <SelectItem value="october">October</SelectItem>
              <SelectItem value="september">September</SelectItem>
              <SelectItem value="august">August</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={filters.employee} onValueChange={(value) => updateFilter('employee', value)}>
            <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="All Employees" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Employees</SelectItem>
              <SelectItem value="ron-taberes">Ron Taberes</SelectItem>
              <SelectItem value="ricardo-francisco">Ricardo Francisco</SelectItem>
              <SelectItem value="maria-santos">Maria Santos</SelectItem>
              <SelectItem value="john-cruz">John Cruz</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
}