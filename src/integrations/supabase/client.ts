// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://bcruadamezzuczadbksn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjcnVhZGFtZXp6dWN6YWRia3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2MTU3MjUsImV4cCI6MjA1OTE5MTcyNX0.DXoH7OUFiDEvL03f0BGse1ETW0iUKX7DmV52WA5lWO0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);