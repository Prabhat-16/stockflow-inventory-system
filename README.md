# StockFlow Inventory Management System

Node.js-based B2B inventory management platform.

## Features

- Multi-warehouse inventory
- SKU uniqueness
- Low-stock alerts with sales velocity calculations
- Supplier integration
- Transaction-safe APIs
- Real-time inventory tracking

## Tech Stack

- Node.js
- Express
- Sequelize ORM
- SQLite (Development) / MySQL (Production)

## API Endpoints

- `POST /api/products` - Create new product
- `GET /api/companies/:companyId/alerts/low-stock` - Get low stock alerts

## Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

## Database Configuration

The application uses SQLite by default for development. To switch to MySQL:

1. Update `.env` file:
```env
DB_DIALECT=mysql
DB_NAME=stockflow
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
```

2. Ensure MySQL server is running on port 3306