module.exports = async (req, res) => {
  if (!process.env.ADMIN_PASSWORD || req.headers["x-admin-password"] !== process.env.ADMIN_PASSWORD)
    return res.status(401).json({ error: "Unauthorized" });
  const r = await fetch(process.env.SUPABASE_URL + "/rest/v1/results?select=name,matric,score,total,created_at&order=created_at.desc&limit=5000", {
    headers: { apikey: process.env.SUPABASE_SERVICE_KEY, Authorization: "Bearer " + process.env.SUPABASE_SERVICE_KEY },
  });
  if (!r.ok) return res.status(500).json({ error: "Database error" });
  res.status(200).json(await r.json());
};
