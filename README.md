# Sales Dashboard

A modern, interactive sales analytics dashboard built with **Next.js 15**, **React 18**, **TypeScript**, **Tailwind CSS**, and **Recharts**. This project demonstrates professional software architecture using **atomic design principles**.

## 🎯 Features

- **Interactive Charts**: Bar, Line, and Pie chart visualizations using Recharts
- **Year-based Filtering**: Switch between 2022, 2023, and 2024 data
- **Threshold Filtering**: Filter sales data by minimum threshold
- **Real-time Statistics**: Total sales, revenue, units sold, and average sales calculations
- **Yearly Summary**: Aggregated statistics for each year
- **Atomic Design Architecture**: Scalable, maintainable component structure
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Type-safe**: Full TypeScript support throughout the codebase

## 🏗️ Architecture Overview

This project uses **Atomic Design Principles** to organize components into hierarchical layers:

```
Atoms (Basic Building Blocks)
  ├── Button      - Reusable button with variants (primary/secondary/outline)
  ├── Input       - Text input with label and error states
  ├── Badge       - Colored badge component
  ├── Card        - Wrapper component with shadow and padding
  └── StatBox     - Metric display with variant colors

Molecules (Atom Combinations)
  ├── YearSelector      - Button group for year selection
  ├── ChartSwitcher     - Chart type selector (Bar/Line/Pie)
  ├── ThresholdFilter   - Input for sales threshold
  └── Statistics        - Grid of StatBox metrics

Organisms (Molecule Combinations)
  ├── ControlPanel      - Combined controls (Year, Chart, Filter)
  ├── MetricsPanel      - Statistics display section
  ├── ChartSection      - Chart visualization with title
  └── SummarySection    - Yearly summary aggregations

Templates (Organisms + Layout)
  └── DashboardTemplate - Full dashboard layout orchestration

Pages
  └── /                 - Main dashboard page
```

**Benefits of Atomic Design:**
- **Reusability**: Components are modular and can be combined in various ways
- **Maintainability**: Clear hierarchy makes updates straightforward
- **Scalability**: Easy to add new components at any layer
- **Testing**: Smaller components are easier to test in isolation
- **Collaboration**: Clear structure helps teams work efficiently

## 🚀 Quick Start

### Prerequisites

- **Node.js** v24.11.1 or higher
- **npm** v11.6.2 or higher

### Installation

```bash
# Clone or navigate to the project
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📊 Data Structure

The dashboard uses realistic Kaggle-style sales data with 36 months of records (2022-2024):

```typescript
interface SalesRecord {
  month: string;      // e.g., "January", "February"
  year: number;       // 2022, 2023, or 2024
  sales: number;      // Monthly sales in dollars
  revenue: number;    // Monthly revenue in dollars
  units: number;      // Units sold in the month
}
```

**Sample Data:**
- 2022 Total: $261,600 sales, $2,616,000 revenue, 5,232 units
- 2023 Total: $520,500 sales, $5,205,000 revenue, 10,410 units
- 2024 Total: $914,300 sales, $9,143,000 revenue, 18,286 units

Located in `components/mockData.ts`.

## 🛠️ Project Structure

```
website/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main page entry point
│   └── globals.css             # Global Tailwind directives
├── components/
│   ├── atoms/                  # Basic UI building blocks
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   └── StatBox.tsx
│   ├── molecules/              # Atom combinations
│   │   ├── YearSelector.tsx
│   │   ├── ChartSwitcher.tsx
│   │   ├── ThresholdFilter.tsx
│   │   └── Statistics.tsx
│   ├── organisms/              # Complex UI sections
│   │   ├── ControlPanel.tsx
│   │   ├── MetricsPanel.tsx
│   │   ├── ChartSection.tsx
│   │   └── SummarySection.tsx
│   ├── templates/              # Page layouts
│   │   └── DashboardTemplate.tsx
│   ├── DashboardClient.tsx     # Client component with state
│   ├── SalesChart.tsx          # Recharts visualizations
│   ├── ChartSwitcher.tsx       # Legacy re-export
│   ├── FilterInput.tsx         # Legacy re-export
│   └── mockData.ts             # Sample data
├── package.json                # Dependencies and scripts
└── tailwind.config.ts          # Tailwind configuration
```

## 📦 Dependencies

### Core
- **next** (15.5.6): React framework with SSR
- **react** (18.2.0): UI library
- **react-dom** (18.2.0): React DOM utilities

### Styling
- **tailwindcss** (3.4.6): Utility-first CSS framework
- **postcss** (8.4.20): CSS processing
- **autoprefixer** (10.4.13): CSS vendor prefixes

### Data Visualization
- **recharts** (2.6.2): React charts library

### Development
- **typescript** (5.2.2): Static type checking
- **eslint** (9.39.1): Code linting
- **eslint-config-next**: ESLint config for Next.js

### Build Tools
- **next/image**: Image optimization
- **next/font**: Font optimization

## 🎨 Styling with Tailwind CSS

The project uses Tailwind CSS utility classes for all styling:

```tsx
// Example from Card.tsx
<div className="bg-white rounded-lg shadow-md p-6">
  {/* Tailwind utilities: bg-white, rounded-lg, shadow-md, p-6 */}
</div>
```

**Color System:**
- Blue: `bg-blue-600`, `text-blue-600` (Primary)
- Green: `bg-green-600`, `text-green-600` (Success)
- Purple: `bg-purple-600`, `text-purple-600` (Info)
- Amber: `bg-amber-600`, `text-amber-600` (Warning)
- Gray: Various gray shades for neutral elements

## 📈 Charts

The dashboard provides three chart types using Recharts:

### Bar Chart
- Shows sales and units sold by month
- Dual Y-axes for different scales
- Hover tooltips with detailed information

### Line Chart
- Visualizes sales trends over time
- Smooth monotone curve interpolation
- Legend and grid for reference

### Pie Chart
- Shows sales distribution by year
- Color-coded segments
- Interactive labels

## 🔄 Data Flow

```
DashboardClient (State Management)
  ├── chartType (bar|line|pie)
  ├── selectedYear (2022|2023|2024)
  └── minThreshold (number)
        ↓
  Calculates filtered data & statistics
        ↓
  DashboardTemplate (Orchestration)
    ├── ControlPanel (Organisms)
    │   ├── YearSelector (Molecule)
    │   ├── ChartSwitcher (Molecule)
    │   └── ThresholdFilter (Molecule)
    ├── MetricsPanel (Organisms)
    │   └── Statistics (Molecule with StatBox atoms)
    ├── ChartSection (Organisms)
    │   └── SalesChart (Recharts component)
    └── SummarySection (Organisms)
```

## 🧪 Running Tests

Currently, the project doesn't include test setup, but the atomic design structure makes testing easy:

```bash
# To add tests, install testing libraries
npm install --save-dev jest @testing-library/react

# Add test scripts to package.json
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Push to GitHub first
git push origin main

# Then connect to Vercel
# https://vercel.com/new

# Vercel will automatically build and deploy
```

### Deploy to Other Platforms

The project builds to `.next/` directory:

```bash
npm run build
npm start
```

**Environment Variables:**
No environment variables required for basic usage.

## 🔐 Security

- **Next.js Security**: All dependencies updated to latest secure versions
- **No Vulnerabilities**: Verified with `npm audit`
- **CSP Support**: Ready for Content Security Policy headers

Run security checks:
```bash
npm audit
npm audit fix
```

## 🐛 Troubleshooting

### Port 3000 Already in Use
```powershell
# Find process using port 3000
Get-NetTCPConnection -LocalPort 3000 | Get-Process

# Kill the process
Stop-Process -Id <PID> -Force
```

### Build Fails
```bash
# Clear Next.js cache
rm -r .next

# Reinstall dependencies
rm -r node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Charts Not Rendering
- Ensure `ssr: false` is set for dynamic imports (already configured)
- Check browser console for React/Recharts errors
- Verify data structure matches SalesRecord type

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Recharts Documentation](https://recharts.org)
- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)

## 👤 Author

Created as a modern sales dashboard reference implementation with professional software architecture.

## 📄 License

MIT License - feel free to use this project for learning or as a starting point for your own applications.

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to fork and submit pull requests.

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review the project structure to understand component relationships
3. Check browser console for error messages
4. Verify all dependencies are installed with `npm install`

---

**Built with ❤️ using Next.js 15, React 18, TypeScript, Tailwind CSS, and Recharts**
