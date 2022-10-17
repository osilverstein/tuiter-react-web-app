import PostSummaryItem from './PostSummaryItem.js';
import posts from './posts.js';
const PostSummaryList = () => {
  //post contains topic, userName, time, image, title
  //iterate over the posts array using the PostSummaryItem function to generate the list
  return(`
    <ul class="list-group">
      ${posts.map(post => PostSummaryItem({ post })).join('')}
    </ul>
  `);
}
export default PostSummaryList;
