// ping-supabase.js

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY;

async function pingSupabase() {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error("Missing Supabase environment variables.");
    process.exit(1);
  }

  // We limit the query to 1 row to minimize bandwidth and processing
  const url = `${SUPABASE_URL}/rest/v1/your_table_name?select=*&limit=1`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log(`Successfully pinged Supabase! Status: ${response.status}`);
  } catch (error) {
    console.error("Failed to ping Supabase:", error.message);
    process.exit(1);
  }
}

pingSupabase();
