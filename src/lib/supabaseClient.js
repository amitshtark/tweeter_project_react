import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jzuitxcudononvulzkrc.supabase.co";
const supabaseKey = "sb_publishable_OeTuB16KIDw_GpggXT9pBA_jPe5TEVA";

export const supabase = createClient(supabaseUrl, supabaseKey);