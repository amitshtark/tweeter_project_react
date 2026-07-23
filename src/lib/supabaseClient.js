import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://amitshtark.github.io/tweeter_project_react/#/profile";
const supabaseKey = "https://jzuitxcudononvulzkrc.supabase.co/rest/v1";

export const supabase = createClient(supabaseUrl, supabaseKey);