const { createClient } = supabase

  const project_url = "https://qgpnshjkycuamqrsekmx.supabase.co";
  const project_api_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFncG5zaGpreWN1YW1xcnNla214Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0OTAwMTMsImV4cCI6MjA1MjA2NjAxM30.yomHocdiLdLOJRPnoTBX02UKWar_TkzHL7pVDqWBvVw"
  const supabaseconfig = createClient(project_url,project_api_key)

  // console.log('Supabase Instance: ', supabaseconfig)
 
let btn = document.getElementById("btn");
btn.addEventListener("click", async () =>{
let email = document.getElementById("email");
let pass = document.getElementById("pass");

try {
  const { data, error } = await supabaseconfig.auth.signUp({
    email: email.value,
    password: pass.value
  })
  console.log(data,error);
} catch (error) {
  console.log(error);
}
  
})