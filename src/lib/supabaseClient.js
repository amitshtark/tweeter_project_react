import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://amitshtark.github.io/tweeter_project_react";
const supabaseKey = "https://jzuitxcudononvulzkrc.supabase.co";

export const supabase = createClient(supabaseUrl, supabaseKey);