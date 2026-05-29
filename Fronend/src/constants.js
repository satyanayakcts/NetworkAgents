export const SEVERITY_COLORS = {
  safe: '#10B981',
  info: '#3B82F6',
  warning: '#F59E0B',
  high: '#FB923C',
  critical: '#EF4444',
  expired: '#6B7280'
}

export const STRINGS = {
  APP_TITLE: 'Cisco EOL Lifecycle Management'
}

export const DUMMY_SUMMARY = {
  safe: 892,
  info: 185,
  warning: 95,
  high: 55,
  critical: 12,
  expired: 8
}

export const DUMMY_TIMELINE = [
  { month: 'Jan', safe: 45, critical: 0, expired: 0 },
  { month: 'Feb', safe: 67, critical: 0, expired: 0 },
  { month: 'Mar', safe: 32, critical: 0, expired: 0 },
  { month: 'Apr', safe: 18, critical: 0, expired: 0 },
  { month: 'May', safe: 8, critical: 0, expired: 0 },
  { month: 'Jun', safe: 3, critical: 0, expired: 0 },
  { month: 'Jul', safe: 0, critical: 3, expired: 0 },
  { month: 'Aug', safe: 0, critical: 2, expired: 0 },
  { month: 'Sep', safe: 0, critical: 1, expired: 1 },
  { month: 'Oct', safe: 0, critical: 2, expired: 3 },
  { month: 'Nov', safe: 0, critical: 1, expired: 2 },
  { month: 'Dec', safe: 0, critical: 0, expired: 4 }
]

export const DUMMY_ALERTS = [
  { id: '1', title: 'CORE-ROUTER-01', message: 'Critical: expires in 15 days', severity: 'critical' },
  { id: '2', title: 'EDGE-SWITCH-42', message: 'High: expires in 45 days', severity: 'high' },
  { id: '3', title: 'WAN-ACCELERATOR-7', message: 'Warning: expires in 120 days', severity: 'warning' }
]

export const DUMMY_DEVICES = [
  { id: '1', hostname: 'CORE-ROUTER-01', model: 'C9300', site: 'HQ', eosl_date: '2024-06-15', days_left: 15, status: 'critical' },
  { id: '2', hostname: 'EDGE-SWITCH-42', model: 'C2960X', site: 'Branch 1', eosl_date: '2024-07-20', days_left: 45, status: 'high' },
  { id: '3', hostname: 'WAN-ACCELERATOR-7', model: 'WAAS-7341', site: 'Branch 2', eosl_date: '2024-09-10', days_left: 120, status: 'warning' },
  { id: '4', hostname: 'DISTRIBUTION-SWITCH-03', model: 'C3850', site: 'HQ', eosl_date: '2025-02-28', days_left: 253, status: 'info' }
]
