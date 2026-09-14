# 🎬 NewTube

A modern **YouTube-inspired video platform** built with **Next.js**, featuring authentication, a scalable database layer, and type-safe API communication with tRPC.

> 🚧 **Project Status:** In Development

## ✨ Overview

**NewTube** is a full-stack web application inspired by modern video-sharing platforms.

The project is being built to explore and practice:

* Next.js App Router
* React
* TypeScript
* Clerk authentication
* Drizzle ORM
* PostgreSQL
* tRPC
* Tailwind CSS
* shadcn/ui
* Responsive application layouts
* Webhook-based user synchronization

The goal is to create a clean, scalable foundation for a video platform where users can eventually browse, search, watch, and interact with video content.

---

## 🚀 Tech Stack

| Technology               | Purpose                              |
| ------------------------ | ------------------------------------ |
| **Next.js 16**           | Full-stack React framework           |
| **React 19**             | UI development                       |
| **TypeScript**           | Type-safe development                |
| **Clerk**                | Authentication and user management   |
| **Drizzle ORM**          | Database ORM                         |
| **PostgreSQL**           | Application database                 |
| **tRPC**                 | Type-safe API layer                  |
| **TanStack React Query** | Server-state and API data management |
| **Tailwind CSS**         | Styling                              |
| **shadcn/ui**            | Reusable UI components               |
| **Lucide React**         | Icons                                |
| **Zod**                  | Input validation                     |
| **Bun**                  | Package manager/runtime              |
| **ngrok**                | Local webhook development            |

---

## 📁 Project Structure

```text
newtube/
│
├── app/
│   ├── (auth)/
│   │   ├── layout.tsx
│   │   ├── sign-in/
│   │   └── sign-up/
│   │
│   ├── (home)/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── protected/
│   │
│   ├── api/
│   │   ├── trpc/
│   │   └── users/
│   │
│   ├── feed/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── [videoId]/
│   │
│   ├── globals.css
│   └── layout.tsx
│
├── components/
│   └── ui/
│
├── db/
│   └── schema.ts
│
├── hooks/
│   └── use-mobile.ts
│
├── lib/
│   └── utils.ts
│
├── modules/
│   ├── auth/
│   └── home/
│
├── trpc/
│   ├── client.tsx
│   ├── init.ts
│   ├── query-client.tsx
│   └── routers/
│
├── public/
│   └── assets
│
├── proxy.ts
├── drizzle.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 🔐 Authentication

Authentication is handled using **Clerk**.

The project contains dedicated routes for:

```text
/sign-in
/sign-up
```

Clerk middleware is configured through `proxy.ts` to integrate authentication with the application's routes and API endpoints.

---

## 🗄️ Database

The application uses **PostgreSQL** with **Drizzle ORM**.

The current database schema contains a `users` table:

```text
users
├── id
├── clerkId
├── name
├── imageUrl
├── createdAt
└── updatedAt
```

Users are associated with their Clerk account through `clerkId`.

The project also includes a Clerk webhook endpoint for synchronizing user information with the application's database.

---

## 🔌 tRPC

The application uses **tRPC** to provide type-safe communication between the frontend and backend.

The current router contains a simple example procedure:

```text
hello
```

which accepts a text input and returns a greeting.

This provides the foundation for adding application-specific APIs such as:

* Video retrieval
* Video search
* User profiles
* Subscriptions
* Likes
* Comments
* Playlists
* Watch history

---

## 🎨 UI

The project uses:

* **Tailwind CSS**
* **shadcn/ui**
* **Lucide icons**
* Reusable React components

A large collection of reusable UI primitives is already included under:

```text
components/ui/
```

This makes it easier to build consistent interfaces throughout the application.

---

## 🏠 Application Areas

### Home

The home section provides the main application layout and navigation structure.

It includes components for:

* Navigation bar
* Search
* Sidebar
* Personal navigation
* Main navigation

### Feed

The feed section is intended to contain the application's video browsing experience.

Routes include:

```text
/feed
/feed/[videoId]
```

The dynamic `[videoId]` route provides the foundation for individual video pages.

### Protected Pages

The project also contains protected application routes that can be used for authenticated-only functionality.

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd newtube
```

### 2. Install dependencies

The project uses Bun.

```bash
bun install
```

You can also use npm if required:

```bash
npm install
```

### 3. Configure environment variables

Create:

```text
.env.local
```

and configure the required Clerk and database environment variables.

Example:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key

DATABASE_URL=your_postgresql_connection_string

CLERK_WEBHOOK_SECRET=your_webhook_secret
```

> Never commit `.env.local` or other files containing secrets to Git.

### 4. Start the development server

```bash
bun dev
```

The application will be available at:

```text
http://localhost:3000
```

---

## 🌐 Webhook Development

The project includes an ngrok development command for exposing the local application to the internet.

Run:

```bash
bun run dev:webhook
```

Or run both the Next.js development server and ngrok together:

```bash
bun run dev:all
```

This is useful when testing Clerk webhooks locally.

> Update the ngrok configuration in `package.json` if you use a different ngrok URL.

---

## 🧪 Available Scripts

| Command               | Description                      |
| --------------------- | -------------------------------- |
| `bun dev`             | Start Next.js development server |
| `bun build`           | Create production build          |
| `bun start`           | Start production server          |
| `bun lint`            | Run ESLint                       |
| `bun run dev:webhook` | Start ngrok tunnel               |
| `bun run dev:all`     | Start Next.js and ngrok together |

---

## 🏗️ Architecture

The current application follows a modular full-stack architecture:

```text
                 ┌────────────────────┐
                 │      Browser       │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │     Next.js        │
                 │   App Router       │
                 └─────────┬──────────┘
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼
       ┌──────────────┐          ┌──────────────┐
       │    Clerk     │          │    tRPC      │
       │ Authentication│          │ API Layer    │
       └──────────────┘          └──────┬───────┘
                                        │
                                        ▼
                                ┌──────────────┐
                                │   Drizzle    │
                                │     ORM      │
                                └──────┬───────┘
                                       │
                                       ▼
                                ┌──────────────┐
                                │ PostgreSQL   │
                                └──────────────┘
```

---

## 🛣️ Roadmap

The current project provides the foundation for a complete video platform.

Planned functionality can include:

* [ ] Video upload
* [ ] Video playback
* [ ] Video thumbnails
* [ ] Video search
* [ ] Video categories
* [ ] User profiles
* [ ] Subscriptions
* [ ] Likes and dislikes
* [ ] Comments
* [ ] Watch history
* [ ] Playlists
* [ ] Recommended videos
* [ ] Creator dashboard
* [ ] Video analytics
* [ ] Responsive mobile interface
* [ ] Improved feed algorithm

---

## 🔒 Security

Environment variables containing secrets should never be committed.

Make sure the following remain private:

```text
.env.local
```

Use `.env.example` to document required variables without exposing actual credentials.

---

## 📚 Learning Goals

This project is also intended as a practical full-stack learning project covering:

1. Next.js App Router
2. Server and client components
3. Authentication with Clerk
4. Database design with PostgreSQL
5. Drizzle ORM
6. Type-safe APIs with tRPC
7. React Query
8. Modular application architecture
9. Webhooks
10. Responsive UI development

---

## 📄 License

This project is currently intended for **learning and development purposes**.

Add an appropriate open-source license if the project is later released publicly.

---

## 👨‍💻 Author

**Raghav**

Built as a full-stack web development project while learning modern Next.js architecture and associated technologies.
