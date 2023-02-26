const conversationId = '1629366528863764480';
const bearerToken = 'YOUR_BEARER_TOKEN';

fetch(`https://api.twitter.com/2/tweets/search/recent?query=conversation_id:${conversationId}`, {
  headers: {
    'Authorization': `Bearer ${bearerToken}`,
    'User-Agent': 'v2FilteredStreamJS',
    'Referer': 'https://your-app-url.com'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => {
  console.error('Error fetching tweets:', error);
});
