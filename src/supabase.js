import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uppigiobyeaafcyeruxi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwcGlnaW9ieWVhYWZjeWVydXhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNDY0NzgsImV4cCI6MjA2MDgyMjQ3OH0.DAu631A1KOkBnzN-F4Y4ReeOnVyqDSZeFQNpVp6iJy8'; // استخدم المفتاح هنا
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
