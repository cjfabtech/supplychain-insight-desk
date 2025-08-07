import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { KPI } from "@/types/dashboard";
import { cn } from "@/lib/utils";

interface KPICardProps {
  kpi: KPI;
}

export function KPICard({ kpi }: KPICardProps) {
  const getStatusColor = () => {
    switch (kpi.status) {
      case 'excellent': return 'bg-success text-success-foreground';
      case 'good': return 'bg-primary text-primary-foreground';
      case 'warning': return 'bg-warning text-warning-foreground';
      case 'poor': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = () => {
    switch (kpi.status) {
      case 'excellent': return 'Excellent';
      case 'good': return 'Good';
      case 'warning': return 'Needs Improvement';
      case 'poor': return 'Poor';
      default: return 'Unknown';
    }
  };

  const getTrendIcon = () => {
    switch (kpi.trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-success" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-destructive" />;
      case 'stable': return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getProgressPercentage = () => {
    if (kpi.id === 'shrinkage' || kpi.id === 'damage-rate' || kpi.id === 'shipping-error') {
      // For negative KPIs, lower is better
      return Math.max(0, Math.min(100, ((kpi.target - kpi.value) / kpi.target) * 100 + 50));
    }
    return Math.min(100, (kpi.value / kpi.target) * 100);
  };

  return (
    <Card className="animate-fade-in shadow-card hover:shadow-large transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {kpi.name}
          </CardTitle>
          {getTrendIcon()}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-bold text-foreground">
            {kpi.value}
            <span className="text-sm font-normal text-muted-foreground ml-1">
              {kpi.unit}
            </span>
          </div>
          <Badge className={cn("text-xs font-medium", getStatusColor())}>
            {getStatusText()}
          </Badge>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Target: {kpi.target}{kpi.unit}</span>
            <span>Weight: {kpi.weight}%</span>
          </div>
          
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                kpi.status === 'excellent' ? "bg-gradient-success" :
                kpi.status === 'good' ? "bg-gradient-primary" :
                kpi.status === 'warning' ? "bg-gradient-warning" : "bg-gradient-danger"
              )}
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground leading-relaxed">
          {kpi.description}
        </p>
      </CardContent>
    </Card>
  );
}