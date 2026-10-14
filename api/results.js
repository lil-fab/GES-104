module.exports = async (req, res) => {
  if (!process.env.ADMIN_PASSWORD || req.headers["x-admin-password"] !== process.env.ADMIN_PASSWORD)
    return res.status(401).json({ error: "Unauthorized" });
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_KEY) return res.status(500).json({ error: "Missing SUPABASE_URL or SUPABASE_SERVICE_KEY in Vercel" });
  const r = await fetch(process.env.SUPABASE_URL + "/rest/v1/results?select=name,matric,score,total,created_at&order=created_at.desc&limit=5000", {
    headers: { apikey: process.env.SUPABASE_SERVICE_KEY, Authorization: "Bearer " + process.env.SUPABASE_SERVICE_KEY },
  });
  if (!r.ok) return res.status(500).json({ error: "Database error", detail: (await r.text()).slice(0, 200) });
  res.status(200).json(await r.json());
};
