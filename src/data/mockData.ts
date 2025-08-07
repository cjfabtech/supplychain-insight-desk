import { KPI, Employee, TrendData } from '@/types/dashboard';

export const mockKPIs: KPI[] = [
  {
    id: 'inventory-accuracy',
    name: 'Inventory Accuracy',
    value: 92,
    target: 95,
    unit: '%',
    weight: 20,
    status: 'good',
    trend: 'up',
    description: 'Accuracy between system stock and physical count'
  },
  {
    id: 'shrinkage',
    name: 'Shrinkage',
    value: 1.5,
    target: 2.0,
    unit: '%',
    weight: 5,
    status: 'excellent',
    trend: 'down',
    description: 'Loss of inventory (stolen, damaged, lost)'
  },
  {
    id: 'inventory-turnover',
    name: 'Inventory Turnover',
    value: 6,
    target: 8,
    unit: 'x',
    weight: 10,
    status: 'warning',
    trend: 'stable',
    description: 'How often inventory is sold/replaced'
  },
  {
    id: 'holding-time',
    name: 'Inventory Holding Time',
    value: 2.1,
    target: 3.0,
    unit: 'Days',
    weight: 5,
    status: 'excellent',
    trend: 'down',
    description: 'Average time inventory stays before shipment'
  },
  {
    id: 'receiving-efficiency',
    name: 'Receiving Efficiency',
    value: 88,
    target: 90,
    unit: '%',
    weight: 15,
    status: 'good',
    trend: 'up',
    description: 'Speed and accuracy of incoming goods process'
  },
  {
    id: 'damage-rate',
    name: 'Product Damage Rate',
    value: 3.2,
    target: 2.0,
    unit: '%',
    weight: 10,
    status: 'poor',
    trend: 'up',
    description: 'Rate of product damage in warehouse'
  },
  {
    id: 'shipping-error',
    name: 'Shipping Error',
    value: 1.8,
    target: 2.5,
    unit: '%',
    weight: 5,
    status: 'excellent',
    trend: 'down',
    description: 'Rate of incorrect shipments'
  },
  {
    id: 'job-order-tracking',
    name: 'Job Order Tracking',
    value: 75,
    target: 85,
    unit: '%',
    weight: 5,
    status: 'warning',
    trend: 'stable',
    description: 'Effectiveness of tracking and placing job orders'
  },
  {
    id: 'attendance',
    name: 'Attendance & Punctuality',
    value: 94,
    target: 95,
    unit: '%',
    weight: 15,
    status: 'good',
    trend: 'up',
    description: 'Staff discipline and presence'
  },
  {
    id: 'filemaker-usage',
    name: 'FileMaker Efficiency',
    value: 82,
    target: 90,
    unit: '%',
    weight: 10,
    status: 'good',
    trend: 'up',
    description: 'Familiarity and proper usage of FileMaker System'
  }
];

export const mockEmployees: Employee[] = [
  {
    id: 'ron-taberes',
    name: 'Ron Taberes',
    department: 'Warehouse Operations',
    totalScore: 65,
    rating: 'Good (3)',
    kpisFailed: ['Attendance'],
    lastUpdated: '2024-01-15'
  },
  {
    id: 'ricardo-francisco',
    name: 'Ricardo Francisco',
    department: 'Inventory Management',
    totalScore: 55,
    rating: 'Good (3)',
    kpisFailed: ['Job Order Tracking'],
    lastUpdated: '2024-01-15'
  },
  {
    id: 'maria-santos',
    name: 'Maria Santos',
    department: 'Receiving',
    totalScore: 85,
    rating: 'Very Good (4)',
    kpisFailed: [],
    lastUpdated: '2024-01-15'
  },
  {
    id: 'john-cruz',
    name: 'John Cruz',
    department: 'Shipping',
    totalScore: 42,
    rating: 'Fair (2)',
    kpisFailed: ['Product Damage Rate', 'FileMaker Efficiency'],
    lastUpdated: '2024-01-15'
  }
];

export const mockTrendData: Record<string, TrendData[]> = {
  'inventory-accuracy': [
    { month: 'Aug', value: 89, target: 95 },
    { month: 'Sep', value: 90, target: 95 },
    { month: 'Oct', value: 88, target: 95 },
    { month: 'Nov', value: 91, target: 95 },
    { month: 'Dec', value: 92, target: 95 },
    { month: 'Jan', value: 92, target: 95 }
  ],
  'shrinkage': [
    { month: 'Aug', value: 2.1, target: 2.0 },
    { month: 'Sep', value: 1.9, target: 2.0 },
    { month: 'Oct', value: 2.2, target: 2.0 },
    { month: 'Nov', value: 1.7, target: 2.0 },
    { month: 'Dec', value: 1.6, target: 2.0 },
    { month: 'Jan', value: 1.5, target: 2.0 }
  ],
  'shipping-error': [
    { month: 'Aug', value: 2.8, target: 2.5 },
    { month: 'Sep', value: 2.6, target: 2.5 },
    { month: 'Oct', value: 2.4, target: 2.5 },
    { month: 'Nov', value: 2.1, target: 2.5 },
    { month: 'Dec', value: 1.9, target: 2.5 },
    { month: 'Jan', value: 1.8, target: 2.5 }
  ]
};