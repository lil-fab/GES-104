module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const { name, matric, score, total } = req.body || {};
  if (typeof name !== "string" || typeof matric !== "string" || !Number.isInteger(score) || !Number.isInteger(total) || score < 0 || score > total || total > 100 || name.length > 100 || matric.length > 30)
    return res.status(400).json({ error: "Invalid data" });
  const r = await fetch(process.env.SUPABASE_URL + "/rest/v1/results", {
    method: "POST",
    headers: { apikey: process.env.SUPABASE_SERVICE_KEY, Authorization: "Bearer " + process.env.SUPABASE_SERVICE_KEY, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify({ name: name.trim(), matric: matric.trim(), score, total }),
  });
  return res.status(r.ok ? 200 : 500).json({ ok: r.ok });
};
