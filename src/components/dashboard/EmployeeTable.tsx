import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Employee } from "@/types/dashboard";
import { cn } from "@/lib/utils";

interface EmployeeTableProps {
  employees: Employee[];
}

export function EmployeeTable({ employees }: EmployeeTableProps) {
  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'Excellent (5)': return 'bg-success text-success-foreground';
      case 'Very Good (4)': return 'bg-primary text-primary-foreground';
      case 'Good (3)': return 'bg-primary-light text-primary';
      case 'Fair (2)': return 'bg-warning text-warning-foreground';
      case 'Poor (1)': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-success';
    if (score >= 80) return 'text-primary';
    if (score >= 60) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Employee Performance Breakdown
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary">
                <TableHead className="font-semibold text-secondary-foreground">Employee</TableHead>
                <TableHead className="font-semibold text-secondary-foreground">Department</TableHead>
                <TableHead className="font-semibold text-secondary-foreground text-center">Total Score</TableHead>
                <TableHead className="font-semibold text-secondary-foreground text-center">Rating</TableHead>
                <TableHead className="font-semibold text-secondary-foreground">KPIs Failed</TableHead>
                <TableHead className="font-semibold text-secondary-foreground text-center">Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((employee) => (
                <TableRow 
                  key={employee.id}
                  className="hover:bg-muted/50 transition-colors"
                >
                  <TableCell className="font-medium text-foreground">
                    {employee.name}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {employee.department}
                  </TableCell>
                  <TableCell className="text-center">
                    <span className={cn("font-bold text-lg", getScoreColor(employee.totalScore))}>
                      {employee.totalScore}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge className={cn("font-medium", getRatingColor(employee.rating))}>
                      {employee.rating}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {employee.kpisFailed.length > 0 ? (
                      <div className="flex flex-wrap gap-1">
                        {employee.kpisFailed.map((kpi, index) => (
                          <Badge key={index} variant="outline" className="text-xs bg-destructive-light text-destructive border-destructive/20">
                            {kpi}
                          </Badge>
                        ))}
                      </div>
                    ) : (
                      <Badge variant="outline" className="text-xs bg-success-light text-success border-success/20">
                        All KPIs Met
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground text-sm">
                    {new Date(employee.lastUpdated).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}