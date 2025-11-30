/**
 * Mock Sales Data - Kaggle Style
 * Realistic sales data for 2022, 2023, 2024 with monthly breakdowns
 */

export type SalesRecord = {
  month: string;
  year: number;
  sales: number;
  revenue: number;
  units: number;
};

export const salesData: SalesRecord[] = [
  // 2022 Data
  { month: "Jan", year: 2022, sales: 12500, revenue: 125000, units: 250 },
  { month: "Feb", year: 2022, sales: 14200, revenue: 142000, units: 284 },
  { month: "Mar", year: 2022, sales: 16800, revenue: 168000, units: 336 },
  { month: "Apr", year: 2022, sales: 15600, revenue: 156000, units: 312 },
  { month: "May", year: 2022, sales: 18900, revenue: 189000, units: 378 },
  { month: "Jun", year: 2022, sales: 21500, revenue: 215000, units: 430 },
  { month: "Jul", year: 2022, sales: 23100, revenue: 231000, units: 462 },
  { month: "Aug", year: 2022, sales: 22300, revenue: 223000, units: 446 },
  { month: "Sep", year: 2022, sales: 20800, revenue: 208000, units: 416 },
  { month: "Oct", year: 2022, sales: 24600, revenue: 246000, units: 492 },
  { month: "Nov", year: 2022, sales: 28900, revenue: 289000, units: 578 },
  { month: "Dec", year: 2022, sales: 32400, revenue: 324000, units: 648 },

  // 2023 Data
  { month: "Jan", year: 2023, sales: 28500, revenue: 285000, units: 570 },
  { month: "Feb", year: 2023, sales: 31200, revenue: 312000, units: 624 },
  { month: "Mar", year: 2023, sales: 35800, revenue: 358000, units: 716 },
  { month: "Apr", year: 2023, sales: 33600, revenue: 336000, units: 672 },
  { month: "May", year: 2023, sales: 38900, revenue: 389000, units: 778 },
  { month: "Jun", year: 2023, sales: 42500, revenue: 425000, units: 850 },
  { month: "Jul", year: 2023, sales: 45100, revenue: 451000, units: 902 },
  { month: "Aug", year: 2023, sales: 43300, revenue: 433000, units: 866 },
  { month: "Sep", year: 2023, sales: 41800, revenue: 418000, units: 836 },
  { month: "Oct", year: 2023, sales: 48600, revenue: 486000, units: 972 },
  { month: "Nov", year: 2023, sales: 52900, revenue: 529000, units: 1058 },
  { month: "Dec", year: 2023, sales: 58400, revenue: 584000, units: 1168 },

  // 2024 Data
  { month: "Jan", year: 2024, sales: 52500, revenue: 525000, units: 1050 },
  { month: "Feb", year: 2024, sales: 56200, revenue: 562000, units: 1124 },
  { month: "Mar", year: 2024, sales: 61800, revenue: 618000, units: 1236 },
  { month: "Apr", year: 2024, sales: 59600, revenue: 596000, units: 1192 },
  { month: "May", year: 2024, sales: 65900, revenue: 659000, units: 1318 },
  { month: "Jun", year: 2024, sales: 72500, revenue: 725000, units: 1450 },
  { month: "Jul", year: 2024, sales: 78100, revenue: 781000, units: 1562 },
  { month: "Aug", year: 2024, sales: 75300, revenue: 753000, units: 1506 },
  { month: "Sep", year: 2024, sales: 72800, revenue: 728000, units: 1456 },
  { month: "Oct", year: 2024, sales: 81600, revenue: 816000, units: 1632 },
  { month: "Nov", year: 2024, sales: 89900, revenue: 899000, units: 1798 },
  { month: "Dec", year: 2024, sales: 98400, revenue: 984000, units: 1968 },
];

// Aggregated yearly totals
export const yearlyData = [
  { year: 2022, sales: 261600, revenue: 2616000, units: 5232 },
  { year: 2023, sales: 520500, revenue: 5205000, units: 10410 },
  { year: 2024, sales: 914300, revenue: 9143000, units: 18286 },
];

// Aggregated quarterly totals
export const quarterlyData = [
  { quarter: "Q1 2022", sales: 43500, revenue: 435000, units: 870 },
  { quarter: "Q2 2022", sales: 56000, revenue: 560000, units: 1120 },
  { quarter: "Q3 2022", sales: 66200, revenue: 662000, units: 1324 },
  { quarter: "Q4 2022", sales: 85900, revenue: 859000, units: 1718 },
  { quarter: "Q1 2023", sales: 95500, revenue: 955000, units: 1910 },
  { quarter: "Q2 2023", sales: 115000, revenue: 1150000, units: 2300 },
  { quarter: "Q3 2023", sales: 130200, revenue: 1302000, units: 2604 },
  { quarter: "Q4 2023", sales: 159800, revenue: 1598000, units: 3196 },
  { quarter: "Q1 2024", sales: 170500, revenue: 1705000, units: 3410 },
  { quarter: "Q2 2024", sales: 198000, revenue: 1980000, units: 3960 },
  { quarter: "Q3 2024", sales: 226700, revenue: 2267000, units: 4534 },
  { quarter: "Q4 2024", sales: 269100, revenue: 2691000, units: 5382 },
];
