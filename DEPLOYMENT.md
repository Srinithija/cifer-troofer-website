# Deployment Guide - Vercel

This guide walks you through deploying the Cyber Security Shop & Learning Platform to Vercel.

## Prerequisites
- GitHub account with your repo pushed
- Vercel account (free at vercel.com)
- Supabase project with database URL and API key

## Step 1: Push to GitHub

Ensure your code is committed and pushed:

```bash
cd C:\Users\ELCOT\Documents\website
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

## Step 2: Import Project on Vercel

1. Go to https://vercel.com/new
2. Click **Import Git Repository**
3. Select your GitHub repo (`cifer-troofer-website`)
4. Click **Import**

## Step 3: Configure Build Settings

On the Vercel import page:

- **Project Name**: Keep default or rename
- **Framework**: Leave as "Other" (Vercel will auto-detect Vite)
- **Root Directory**: Keep empty (Vercel will read `vercel.json`)

Vercel will automatically use the settings from `vercel.json`:
- Build command: `cd web && npm run build`
- Install command: `cd web && npm install`
- Output directory: `web/dist`

## Step 4: Add Environment Variables

Before deploying, add your Supabase credentials:

1. In Vercel project dashboard, go to **Settings** → **Environment Variables**
2. Add two variables:

| Name | Value |
|------|-------|
| `VITE_SUPABASE_URL` | Your Supabase project URL (e.g., `https://your-project.supabase.co`) |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anon public key |

3. **Save**

## Step 5: Deploy

Click **Deploy** on the Vercel page. The build will:
- Install dependencies
- Run `npm run build` in the `web` folder
- Output to `web/dist`
- Deploy to Vercel's CDN

Your app will be live at: `https://your-project.vercel.app`

## Step 6: Set Up Database

1. Go to your Supabase dashboard
2. Create tables using `web/supabase_schema.sql`
3. Add dev RLS policies from `web/supabase_dev_policies.sql` (for development) or create strict production policies

## Environment Variables Reference

Get these from your Supabase project:

**VITE_SUPABASE_URL:**
- Supabase Dashboard → Settings → API → Project URL

**VITE_SUPABASE_ANON_KEY:**
- Supabase Dashboard → Settings → API → Project API Key (anon, public)

## Troubleshooting

**Build fails with "npm: command not found"**
- Ensure `vercel.json` exists and has correct paths

**App loads but can't save data**
- Check environment variables are set correctly
- Verify Supabase RLS policies allow anonymous inserts

**Env vars not showing in app**
- Redeploy after adding environment variables
- Check that variables match `VITE_*` prefix (required for Vite)

## Redeploying

Every time you push to `main`, Vercel auto-deploys. To redeploy manually:
- Vercel Dashboard → Project → **Redeploy**

---

That's it! Your app is now live on Vercel.
