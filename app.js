
  import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

  const project_url = "https://qgpnshjkycuamqrsekmx.supabase.co";
  const project_api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFncG5zaGpreWN1YW1xcnNla214Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0OTAwMTMsImV4cCI6MjA1MjA2NjAxM30.yomHocdiLdLOJRPnoTBX02UKWar_TkzHL7pVDqWBvVw"
  const supabase = createClient(project_url,project_api_key)

  

  console.log('Supabase Instance: ', supabase)
 
