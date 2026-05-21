# Cyber Security Shop & Learning Platform

This is a React + Vite + Tailwind CSS frontend for a cybersecurity shop and learning platform. The app includes shop pages, course enrollment, contact form submission, and Supabase-backed persistence for contacts, enrollments, orders, and cart data.

## 🚀 Key Features

- React with Vite for fast development and builds
- Tailwind CSS for responsive UI styling
- Supabase integration for database persistence
- Course enrollment form with backend storage
- Checkout flow with order and order item creation
- Contact form that saves messages to Supabase
- Cart persistence and product-order mapping

## 📁 Project Structure

```text
web/
├── public/                      # Static assets and images
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── common/               # Shared layout components
│   │   └── ui/                   # Design system primitives
│   ├── data/                     # Seed/static data definitions
│   ├── pages/                    # Page-level route components
│   ├── styles/                   # Global and Tailwind CSS styles
│   ├── utils/                    # Helpers and Supabase client
│   │   └── supabaseClient.js     # Supabase client initialization
│   ├── App.jsx                   # App shell
│   ├── main.jsx                  # Application entry point
│   └── Routes.jsx                # Route definitions
├── index.html                    # App HTML template
├── package.json                  # Dependencies and scripts
├── tailwind.config.js            # Tailwind config
├── postcss.config.js            # PostCSS config
├── vite.config.js                # Vite config
└── README.md                     # Project documentation
```

## 🔧 Prerequisites

- Node.js 16 or higher
- npm (or yarn)
- Supabase project with a database

## ✅ Setup

1. Install dependencies:

```bash
cd web
npm install
```

2. Create environment variables in `web/.env`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-public-anon-key
```

3. Start the development server:

```bash
npm run start
```

4. Open the app at:

```text
http://localhost:4028
```

## 🧩 Supabase Integration

The app uses `src/utils/supabaseClient.js` to initialize the Supabase client:

```js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
```

### Tables used in Supabase

- `contacts`
- `enrollments`
- `products`
- `courses`
- `orders`
- `order_items`
- `cart_items`

### Development RLS policies

For local testing, use `web/supabase_dev_policies.sql` to allow anonymous inserts and selects in development. These policies are intentionally permissive and should not remain enabled in production.

## 🧪 Running Production Build

Build the app for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🛠️ Common Scripts

- `npm run start` — Run the Vite development server
- `npm run build` — Build production assets
- `npm run preview` — Preview the built app locally

## 📝 Notes for Developers

- Checkout logic is in `src/pages/Checkout/index.jsx`
- Enrollment submission is in `src/pages/Courses/CourseDetail.jsx`
- Contact form logic is in `src/pages/Contact/ContactInfo.jsx`
- Cart utilities are in `src/utils/cartUtils.js`

### Important behavior

- Order creation now includes `order_number`
- Enrollment records now include `course_id`
- Order items now include `product_id`
- The app may store non-UUID product ids in `order_items` if the product source uses numeric ids

## 📌 Troubleshooting

- If the app fails to start, confirm `web/.env` contains valid Supabase values
- If inserts fail, check Supabase RLS policies and `anon` permissions
- If the build fails due to syntax, open the file reported by Vite/Babel and look for unmatched JSX tags or braces

## 🙏 Acknowledgments

Built with React, Vite, Tailwind CSS, and Supabase.
