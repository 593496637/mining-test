export interface TableRow {
  element: string;
  grade: string;
  amount: string;
}

export interface ResourceData {
  title: string;
  mainStats: { label: string; value: string }[];
  table: TableRow[];
}

export interface SummaryData {
  name: string;
  value: string;
  subName?: string; // Chemical formula if applicable
}

export interface LicenseData {
  company: string;
  detail1: string; // Scale or Area
  detail2?: string; // Depth (optional)
  validity: string;
}

export interface LicenseSection {
  title: string;
  count: number;
  items: LicenseData[];
}