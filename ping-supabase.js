// ping-supabase.js

// Hardcode your actual URL and Key right here inside the quotes
const SUPABASE_URL = "https://your-project-url.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsbWx2b3hzYmJ5dWpjdWZ1bWhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzODkzNDUsImV4cCI6MjA4NTk2NTM0NX0.keFRX9Ubx4lfYgQgj87jCp9e-VTAhzVrdB7DnCpV7qU";

async function pingSupabase() {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error("Missing Supabase environment variables.");
    process.exit(1);
  }

  // Remember to change 'your_table_name' below!
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
