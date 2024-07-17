---

# Simple Blogging Platform

A medium-like blogging platform where users can create blogs and read other people's blogs.

## Description

This project is a simple blogging platform designed to allow users to create their own blogs and read blogs created by others. The platform offers an easy-to-use interface and a seamless experience for both blog creation and reading.

## Features

- User authentication and authorization
- Create, edit, and delete blogs
- Read blogs posted by other users
- Responsive design for a great experience on both desktop and mobile devices

## Tech Stack

- **Frontend**: React.js
- **Backend**: Cloudflare Workers using Hono.js framework
- **Database**: PostgreSQL with Prisma as ORM
- **Validation**: Zod
- **Language**: TypeScript
- Monorepo Management: TurboRepo

## Installation

### Prerequisites

- Node.js
- PostgreSQL

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.wrangler` and `wrangler.toml` file in the `api` directory and add your PostgreSQL database connection details and wrangler files.

4. **Run the backend**:

   ```bash
   Backend is hosted on Cloudflare
   https://api.ksaifulla90.workers.dev
   ```

5. **Run the frontend**:
   ```bash
   npm run dev
   ```

## Usage

1. **Sign up or log in** to start creating blogs.
2. **Create a new blog** by navigating to the create blog section.
3. **Read blogs** from other users by browsing the home page.
