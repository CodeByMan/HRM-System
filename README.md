<div align="center">

# 🧑‍💼 HR Management System — Next.js Employee Leave HRMS

A modern full-stack **Human Resources Management System** built with **Next.js 15, React 19, TypeScript, PostgreSQL, Drizzle ORM, Better Auth, Tailwind CSS, and shadcn/ui**.  
This HRMS helps teams manage employee records, leave requests, manager approvals, leave balances, policies, and role-based HR workflows from a polished **Aurora light/dark dashboard**.

![Next.js](https://img.shields.io/badge/Frontend-React%2019-61dafb?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/Frontend-React%2019-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178c6?style=for-the-badge&logo=typescript)
![PostgreSQL](https://img.shields.io/badge/License-See%20LICENSE-f97316?style=for-the-badge&logo=postgresql)
![Drizzle](https://img.shields.io/badge/ORM-Drizzle%20ORM-c5f74f?style=for-the-badge)
![License](https://img.shields.io/badge/License-See%20LICENSE-f97316?style=for-the-badge)

</div>

---

## 📌 Project Overview

**HR Management System** is a full-stack HR operations platform focused on managing **already-hired employees** and their internal leave workflows. It provides role-based dashboards for **Admin/HR**, **Manager**, and **Employee/User** accounts.

The system is designed for practical business use cases such as employee records, leave applications, leave approvals, leave balances, leave types, leave year configuration, HR policies, and profile management.

---

## ✨ Premium Features

- 🔐 **Better Auth authentication** with protected application routes
- 👥 **Role-based access control** for Admin, Manager, and Employee users
- 🏠 **Static landing page** with Aurora HR visual design
- 🎨 **light/dark theme** across landing, login, dashboard, admin, and manager pages
- 🧑‍💼 **Admin dashboard** for employee and system management
- 👤 **Employee profile management** with extended user details
- 🏖️ **Leave request workflow** for applying and tracking leaves
- ✅ **Manager approval flow** for reviewing leave requests
- 📊 **Leave balance tracking** for employee leave availability
- 🗂️ **Leave type management** for casual, sick, annual, half-day, and short leaves
- 📅 **Leave year setup** for annual HR cycles
- 📝 **Leave remarks system** for communication on requests
- 📚 **Policy management** with rich text support
- 🧑‍🤝‍🧑 **Team overview** for managers
- 🔔 **Toast notifications** using Sonner
- 🧾 **Form validation** with React Hook Form and Zod
- 🛢️ **PostgreSQL database** managed through Drizzle ORM migrations
- 🧪 **Seeded demo accounts** for quick testing

---

## 🖼️ Screenshots

| Home Page |
|-------------|
| ![Home Page](docs/screenshots/homepage.png) |

| Login | Dashboard |
|-----------|-------------|
| ![Login](docs/screenshots/login.png) | ![Dashboard](docs/screenshots/dashboard.png) |

---

## 🧰 Tech Stack

### Full-Stack Framework

- Next.js 15
- React 19
- TypeScript
- App Router
- Server Components
- API Routes

### Frontend

- Tailwind CSS
- shadcn/ui
- Radix UI
- Lucide React Icons
- React Hook Form
- Zod
- TipTap rich text editor
- Sonner toast notifications
- next-themes
- date-fns
- Custom Aurora light/dark theme

### Backend

- Next.js API Routes
- Better Auth
- Drizzle ORM
- Node PostgreSQL driver `pg`
- Resend email integration
- Slack webhook notification support

### Database

- PostgreSQL
- Drizzle Kit migrations
- Drizzle Studio
- Relational schema design
- Seed data for demo users, leave types, leave balances, and policies

---

## 👤 User Roles & Flow

| Role | Description |
| --- | --- |
| **Admin / HR** | Manages employees, leave balances, leave types, policies, and system settings |
| **Manager** | Reviews team leave requests and checks team overview |
| **Employee / User** | Applies for leave, checks leave history, views policies, and manages profile |

### Main Workflow

1. Admin/HR manages employee records and leave settings.
2. Employee applies for leave from the dashboard.
3. Manager reviews the request and updates the status.
4. Employee checks leave history and remaining leave balance.
5. Admin/HR manages policies, leave types, and system-level settings.

---

## 📁 Folder Structure

```bash
hr-management-system-main/
├── app/
│   ├── (auth)/
│   │   └── login/
│   ├── (root)/
│   │   ├── (dashboard)/
│   │   │   ├── dashboard/
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
│   ├── layout.tsx
│   └── page.tsx
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
| `BETTER_AUTH_URL` | Auth URL, usually `http://localhost:3001` |
| `NEXT_PUBLIC_BETTER_AUTH_URL` | Public auth URL used by the frontend |
| `RESEND_API_KEY` | Resend API key for email support |
| `RESEND_FROM` | Sender email identity for system emails |
| `RESEND_TO` | Optional receiver email for testing |
| `NEXT_PUBLIC_SLACK_WEBHOOK_URL` | Optional Slack webhook URL for notifications |

For production, replace all dummy values with secure real values.

---

## 🛢️ PostgreSQL Setup on Windows

Open Command Prompt and run PostgreSQL using the full path:

```bat
"C:\Program Files\PostgreSQL\17\bin\psql.exe" -U postgres
```

Create the project database and user:

```sql
CREATE USER hrms_user WITH PASSWORD 'HrmsPass123';

CREATE DATABASE hrms_db OWNER hrms_user;

GRANT ALL PRIVILEGES ON DATABASE hrms_db TO hrms_user;

\c hrms_db

GRANT ALL ON SCHEMA public TO hrms_user;

ALTER SCHEMA public OWNER TO hrms_user;

\q
```

For a fresh reset:

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
git clone https://github.com/your-username/hr-management-system.git
cd hr-management-system
```

If you already downloaded the ZIP:

```bat
cd C:\Users\Work\Downloads\hr-management-system-main
```

### 2. Install dependencies

This project includes a `yarn.lock`, so Yarn is recommended.

If Yarn is not recognized on Windows, use Yarn through `npx`:

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
| `npx --yes yarn@1.22.22 seed` | Seed demo users and default HR data |
| `npx --yes yarn@1.22.22 generate` | Generate Drizzle migration files |
| `npx --yes yarn@1.22.22 studio` | Open Drizzle Studio for database inspection |

If Yarn is installed globally:

```bash
yarn dev
yarn build
yarn start
yarn migrate
yarn seed
yarn studio
```

---

## 🔗 Main App Routes

| Module | Route | Description |
| --- | --- | --- |
| Landing Page | `/` | Public static landing page |
| Login | `/login` | Authentication page |
| Dashboard | `/dashboard` | Authenticated user dashboard |
| Apply Leave | `/leave/apply` | Employee leave application page |
| Leave History | `/leave/history` | Employee leave history page |
| Policies | `/policies` | Company policy viewer |
| Profile | `/profile` | User profile page |
| Admin Users | `/admin/users` | Employee/user management |
| Admin Balances | `/admin/balances` | Leave balance management |
| Admin Leave Types | `/admin/leave-types` | Leave type configuration |
| Admin Policies | `/admin/policies` | Policy management |
| Admin Settings | `/admin/settings` | Leave year and system settings |
| Manager Requests | `/manager/requests` | Team leave request review |
| Manager Team | `/manager/team` | Manager team overview |

---

## 🔌 API Modules

The backend is handled through Next.js API routes:

| Module | Base Route | Description |
| --- | --- | --- |
| Authentication | `/api/auth` | Better Auth API handlers |
| User Management | `/api/user` | User listing, creation, updates, and deletion |
| Leave Management | `/api/leave` | Leave request creation and retrieval |
| Leave Remarks | `/api/leave/remark` | Remarks/comments on leave requests |
| Leave Types | `/api/leave/type` | Leave type management |
| Leave Years | `/api/leave/year` | Leave year configuration |
| Policy Management | `/api/policy` | HR policy creation, update, and deletion |

---

## 🧑‍💻 Author

**Muhammad Ali Nawaz**  
MERN Stack Developer

---

## 📄 License

This project is licensed under the terms included in the [LICENSE](LICENSE) file.

---

<p align="center">
  <b>⭐ If you like this project, consider starring the repository!</b>
</p>
