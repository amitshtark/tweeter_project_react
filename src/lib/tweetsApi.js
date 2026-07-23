import { supabase } from "./supabaseClient.js"

export async function getTweets() {
  const { data, error} = await supabase
  .from("tweets")
  .select("*")
  .order("date", {ascending: false});
  
  if(error)
    throw error;

  return data;
}

export async function createTweet(tweet) {
  const { data, error} = await supabase
  .from("tweets")
  .insert(tweet)
  .select()
  .single();

  if(error)
    throw error;

  return data;
}