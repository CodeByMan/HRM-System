<div align="center">

# 🧑‍💼 HR Management System — Next.js HRMS

A modern full-stack Human Resources Management System built with **Next.js 15, React 19, TypeScript, PostgreSQL, Drizzle ORM, Better Auth, Tailwind CSS, and shadcn/ui** and customized with an **Aurora HR light/dark theme**. This HRMS helps organizations manage employees, roles, leave requests, leave balances, policies, manager approvals, and admin workflows from a clean role-based dashboard experience.

![Next.js](https://img.shields.io/badge/Framework-Next.js%2015-111827?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/Frontend-React%2019-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178c6?style=for-the-badge&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-4169e1?style=for-the-badge&logo=postgresql)
![Drizzle](https://img.shields.io/badge/ORM-Drizzle%20ORM-c5f74f?style=for-the-badge)
![License](https://img.shields.io/badge/License-See%20LICENSE-f97316?style=for-the-badge)

</div>

---

## 📌 Project Overview

**HR Management System** is a full-stack HR platform designed for companies and teams that need a simple, modern, and role-based way to manage employee information and leave workflows. The application includes authentication, admin controls, manager approval flows, employee dashboards, leave type configuration, leave balances, policy management, and profile management.

This project is suitable as a **Junior to Junior-Mid full-stack portfolio project** because it demonstrates real-world business logic, protected routes, database relationships, seeded role-based accounts, dashboard UI, and production-style full-stack architecture.

---

## ✨ Premium Features

- 🔐 **Better Auth authentication** with protected app routes
- 👥 **Role-based access control** for Admin, Manager, and User accounts
- 🧑‍💼 **Admin dashboard** for employee and HR system management
- 🧾 **Employee profile management** with extended user details
- 🏖️ **Leave application system** with full request workflow
- ✅ **Manager leave review flow** for approving, accepting, rejecting, or suspending requests
- 📊 **Leave balance management** for tracking employee leave availability
- 🗂️ **Leave type configuration** including casual, sick, annual, half-day, and short leave
- 📅 **Leave year management** for annual HR cycles
- 📝 **Leave remarks system** for request communication
- 📚 **Policy management** with rich text content support
- 🧑‍🤝‍🧑 **Team overview pages** for managers
- 🎨 **Aurora HR light/dark theme** across landing page, login, dashboard, admin, and manager pages
- 🎨 **Modern dashboard UI** built with Tailwind CSS, shadcn/ui, Radix UI, and Lucide icons
- 🌙 **Theme-ready interface** using Next Themes
- 🧪 **Seeded demo accounts** for Admin, Manager, and User testing
- 🛢️ **PostgreSQL database** managed with Drizzle ORM migrations

---

## 🖼️ Screenshots

Add your project screenshots inside `docs/screenshots/` and update the image names below.

| Login | Admin Dashboard |
|------|-----------------|
| ![Login](docs/screenshots/login.png) | ![Admin Dashboard](docs/screenshots/admin-dashboard.png) |

| Leave Requests | User Management |
|---------------|-----------------|
| ![Leave Requests](docs/screenshots/leave-requests.png) | ![User Management](docs/screenshots/users.png) |

| Leave Types | Policies |
|------------|----------|
| ![Leave Types](docs/screenshots/leave-types.png) | ![Policies](docs/screenshots/policies.png) |

---

## 🧰 Tech Stack

### Full Stack Framework

- Next.js 15
- React 19
- TypeScript
- App Router
- Server Components and API Routes

### Frontend

- Tailwind CSS
- shadcn/ui
- Radix UI
- Lucide React
- React Hook Form
- Zod
- TipTap rich text editor
- Sonner toast notifications
- next-themes
- date-fns

### Backend

- Next.js API routes
- Better Auth
- Drizzle ORM
- PostgreSQL
- Node PostgreSQL driver `pg`
- Resend email integration
- Slack webhook notification support

### Database

- PostgreSQL
- Drizzle Kit migrations
- Drizzle Studio
- Relational tables for users, sessions, profiles, leave requests, leave types, leave years, policies, and leave remarks

---

## 📁 Folder Structure

```bash
hr-management-system-main/
├── app/
│   ├── (auth)/
│   │   └── login/
│   ├── (root)/
│   │   ├── (dashboard)/
│   │   │   ├── leave/
│   │   │   ├── policies/
│   │   │   └── profile/
│   │   ├── admin/
│   │   │   ├── balances/
│   │   │   ├── leave-types/
│   │   │   ├── policies/
│   │   │   ├── settings/
│   │   │   └── users/
│   │   └── manager/
│   │       ├── requests/
│   │       └── team/
│   ├── api/
│   │   ├── auth/
│   │   ├── leave/
│   │   ├── policy/
│   │   └── user/
│   ├── globals.css
│   └── layout.tsx
├── components/
├── constants/
├── db/
│   ├── migrations/
│   ├── schema/
│   ├── drizzle.ts
│   ├── seed.ts
│   └── types.ts
├── enum/
├── hooks/
├── lib/
├── public/
├── types/
├── .env.example
├── .gitignore
├── drizzle.config.ts
├── LICENSE
├── next.config.ts
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```bash
notepad .env
```

Then add:

```env
DATABASE_URL=postgresql://hrms_user:HrmsPass123@localhost:5432/hrms_db

BETTER_AUTH_SECRET=local_hrms_secret_1234567890_change_me
BETTER_AUTH_URL=http://localhost:3001
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3001

RESEND_API_KEY=re_local_dummy_key
RESEND_FROM="HRMS <onboarding@resend.dev>"
RESEND_TO=

NEXT_PUBLIC_SLACK_WEBHOOK_URL=
```

| Variable | Description |
| --- | --- |
| `DATABASE_URL` | PostgreSQL connection string |
| `BETTER_AUTH_SECRET` | Secret key used by Better Auth |
| `BETTER_AUTH_URL` | Backend auth URL, usually `http://localhost:3001` |
| `NEXT_PUBLIC_BETTER_AUTH_URL` | Public auth URL used by the frontend |
| `RESEND_API_KEY` | Resend API key for email support |
| `RESEND_FROM` | Sender email identity for auth/system emails |
| `RESEND_TO` | Optional receiver email for testing |
| `NEXT_PUBLIC_SLACK_WEBHOOK_URL` | Optional Slack webhook URL for notifications |

For production, replace all dummy values with secure real values.

---

## 🛢️ PostgreSQL Setup on Windows

Open Command Prompt and run PostgreSQL using the full path:

```bat
"C:\Program Files\PostgreSQL\17\bin\psql.exe" -U postgres
```

Then create the project database and user:

```sql
CREATE USER hrms_user WITH PASSWORD 'HrmsPass123';

CREATE DATABASE hrms_db OWNER hrms_user;

GRANT ALL PRIVILEGES ON DATABASE hrms_db TO hrms_user;

\c hrms_db

GRANT ALL ON SCHEMA public TO hrms_user;

ALTER SCHEMA public OWNER TO hrms_user;

\q
```

If the database already exists and you want a fresh setup, run:

```sql
DROP DATABASE IF EXISTS hrms_db WITH (FORCE);
CREATE DATABASE hrms_db OWNER hrms_user;
GRANT ALL PRIVILEGES ON DATABASE hrms_db TO hrms_user;
\c hrms_db
GRANT ALL ON SCHEMA public TO hrms_user;
ALTER SCHEMA public OWNER TO hrms_user;
\q
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/CodeByMan/hr-management-system.git
cd hr-management-system
```

Or, if you already downloaded the project ZIP:

```bat
cd C:\Users\Work\Downloads\hr-management-system-main
```

### 2. Install dependencies

This project includes a `yarn.lock`, so Yarn is recommended.

If Yarn is not recognized on Windows, run Yarn through `npx`:

```bat
npx --yes yarn@1.22.22 install
```

### 3. Configure environment variables

Create `.env` in the project root and add the values from the **Environment Variables** section.

### 4. Run database migrations

```bat
npx --yes yarn@1.22.22 migrate
```

### 5. Seed demo data

```bat
npx --yes yarn@1.22.22 seed
```

### 6. Start the development server

```bat
npx --yes yarn@1.22.22 dev
```

The project runs at:

```bash
http://localhost:3001
```

Login page:

```bash
http://localhost:3001/login
```

---

## 🔐 Demo Login Credentials

Default password for all seeded users:

```bash
password1234
```

### Admin / HR

```bash
Username: muhammadali
Email: muhammadali@muhammadalinawaz.dev
Password: password1234
Role: ADMIN
```

### Managers

```bash
Username: ayesha
Email: ayesha@muhammadalinawaz.dev
Password: password1234
Role: MANAGER
```

```bash
Username: bilal
Email: bilal@muhammadalinawaz.dev
Password: password1234
Role: MANAGER
```

### Employees

```bash
Username: fatima
Email: fatima@muhammadalinawaz.dev
Password: password1234
Role: USER
```

```bash
Username: hamza
Email: hamza@muhammadalinawaz.dev
Password: password1234
Role: USER
```

```bash
Username: sara
Email: sara@muhammadalinawaz.dev
Password: password1234
Role: USER
```

```bash
Username: zainab
Email: zainab@muhammadalinawaz.dev
Password: password1234
Role: USER
```

> The customized login form can use the email username. Example: enter `muhammadali` instead of the full email.

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npx --yes yarn@1.22.22 dev` | Start Next.js development server on port `3001` |
| `npx --yes yarn@1.22.22 build` | Create production build |
| `npx --yes yarn@1.22.22 start` | Start production server on port `3001` |
| `npx --yes yarn@1.22.22 migrate` | Run Drizzle database migrations |
| `npx --yes yarn@1.22.22 seed` | Seed demo users and default leave data |
| `npx --yes yarn@1.22.22 generate` | Generate Drizzle migration files |
| `npx --yes yarn@1.22.22 studio` | Open Drizzle Studio for database inspection |

If Yarn is installed globally, you can use shorter commands:

```bash
yarn dev
yarn migrate
yarn seed
yarn studio
```

---

## 🔗 Main App Routes

| Module | Route |
| --- | --- |
| Login | `/login` |
| Dashboard | `/` |
| Leave Management | `/leave` |
| Policies | `/policies` |
| Profile | `/profile` |
| Admin Users | `/admin/users` |
| Admin Balances | `/admin/balances` |
| Admin Leave Types | `/admin/leave-types` |
| Admin Policies | `/admin/policies` |
| Admin Settings | `/admin/settings` |
| Manager Requests | `/manager/requests` |
| Manager Team | `/manager/team` |

---

## 🔌 API Modules

The backend is handled through Next.js API routes:

| Module | Base Route |
| --- | --- |
| Authentication | `/api/auth` |
| User Management | `/api/user` |
| Leave Management | `/api/leave` |
| Leave Remarks | `/api/leave/remark` |
| Leave Types | `/api/leave/type` |
| Leave Years | `/api/leave/year` |
| Policy Management | `/api/policy` |

---

## 🧪 Production Build

Create a production build:

```bash
npx --yes yarn@1.22.22 build
```

Start the production server:

```bash
npx --yes yarn@1.22.22 start
```

Production app runs at:

```bash
http://localhost:3001
```

---

## 🧑‍💻 Author

**Muhammad Ali Nawaz**  
Full-Stack Developer  
MERN Stack Developer and Data Engineer

---

## 📄 License

This project is licensed under the terms included in the [LICENSE](LICENSE) file.

---

<p align="center">
  <b>⭐ If you like this project, consider starring the repository!</b>
</p>
