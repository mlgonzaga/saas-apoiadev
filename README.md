# Apoia Dev

Apoia Dev is a modern web application built with Next.js, TypeScript, and Prisma, designed to provide a platform for developers to receive support and contributions.

## 🚀 Technologies

- [Next.js 15](https://nextjs.org/)
- [React 19](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- [Stripe](https://stripe.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest)
- [Zod](https://zod.dev/)

## 📦 Project Structure

```
apoia-dev/
├── src/              # Source code
├── public/           # Static files
├── prisma/          # Database schema and migrations
├── types/           # TypeScript type definitions
├── .next/           # Next.js build output
└── node_modules/    # Dependencies
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd apoia-dev
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
STRIPE_SECRET_KEY="your-stripe-secret-key"
STRIPE_WEBHOOK_SECRET="your-stripe-webhook-secret"
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run stripe:listen` - Listen to Stripe webhooks locally

## 🔧 Features

- Authentication with NextAuth.js
- Database management with Prisma
- Payment processing with Stripe
- Modern UI with TailwindCSS
- Form handling with React Hook Form
- Type safety with TypeScript and Zod
- State management with React Query

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
