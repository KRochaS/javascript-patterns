// Iterator Pattern

// Is another method of iteration through list of items
// The iterator is best used with a for loop 


newsFeeds = [
    {
      type: 'top-headlines',
      query: 'sources=bbc-news'
    },
     {
      type: 'everything',
      query: 'domains=techcrunch.com&language=en'
    },
     {
      type: 'everything',
      query: 'domains=comicbookmovie.com&language=en'
    }
];

for(let feed of newsFeeds) {
    console.log(feed.type);
}