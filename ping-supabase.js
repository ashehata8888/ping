// ping-supabase.js

const SUPABASE_URL = "https://clmlvoxsbbyujcufumho.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsbWx2b3hzYmJ5dWpjdWZ1bWhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzODkzNDUsImV4cCI6MjA4NTk2NTM0NX0.keFRX9Ubx4lfYgQgj87jCp9e-VTAhzVrdB7DnCpV7qU";

async function pingSupabase() {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error("Missing Supabase environment variables.");
    process.exit(1);
  }

  const url = `${SUPABASE_URL}/rest/v1/faq_tracker?select=*&limit=1`;

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
    // This will print the EXACT reason the network request is failing
    console.error("--- NETWORK ERROR DETECTED ---");
    console.error("Message:", error.message);
    console.error(
      "Underlying Cause:",
      error.cause || "No deeper cause provided.",
    );
    process.exit(1);
  }
}

pingSupabase();
