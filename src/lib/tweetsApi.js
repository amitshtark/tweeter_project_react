export async function getTweets() {
  const response = await fetch(`${import.meta.env.BASE_URL}dummyData.json`);
  const data = await response.json();

  return data
    .map((tweet, index) => ({
      ...tweet,
      id: index + 1,
    }))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function createTweet(tweet) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...tweet,
        id: Date.now(),
      });
    }, 2000);
  });
}