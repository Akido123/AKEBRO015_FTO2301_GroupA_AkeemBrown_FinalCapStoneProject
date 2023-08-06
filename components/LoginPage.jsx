import { createClient } from "@supabase/supabase-js"
import { Auth } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom" 

const supabase = createClient(
  "https://lwqrybcriflpipliqoxx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3cXJ5YmNyaWZscGlwbGlxb3h4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEyNDUzMTYsImV4cCI6MjAwNjgyMTMxNn0.vcvg5cFhKQkvOOpNm8JksWjJGvK8uTjR47Pkez5A4eQ"
)

function LoginPage() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== "SIGNED_OUT"){
      navigate("/main")
    }else{
      navigate("/")
    }
  })

  return(
      <Auth
      supabaseClient={supabase}
      />
  )
}

export default LoginPage