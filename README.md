# GES 104 CBT Practice (Vercel + Supabase)

127 questions, 30 random per session. Students enter name + matric; you view results at the "Admin" link (password protected).

## 1. Database (Supabase, free)
1. Create a project at supabase.com.
2. SQL Editor -> paste and run `supabase.sql`.
3. Project Settings -> API: copy the **Project URL** and the **service_role** key (keep it secret).

## 2. Deploy
1. Push this folder to a GitHub repo, then import it at vercel.com (no build settings needed).
2. In Vercel -> Settings -> Environment Variables add:
   - `SUPABASE_URL` = Project URL
   - `SUPABASE_SERVICE_KEY` = service_role key
   - `ADMIN_PASSWORD` = a password only you know
3. Redeploy. Open the site, click **Admin** at the bottom, enter your password.

## Editing questions
Edit `questions.js`. One question per line: `question|option A|option B|option C|option D|correct letter`.
Questions in `NEW` have the correct option shuffled at runtime; avoid "above/only" style options there.
