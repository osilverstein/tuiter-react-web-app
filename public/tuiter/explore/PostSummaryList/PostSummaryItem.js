//post contains topic, userName, time, image, title
const PostSummaryItem = ({ post }) => {
  //left side has text right side has image
  //left:
  //muted topic at top
  //userName below topic with time next to it
  //title below userName
  //right:
  //image
  return(`
    <li class="list-group-item">
      <div class="d-flex align-items-center">
        <img src="${post.image}"
             class="rounded-circle me-3"
             style="width: 48px; height: 48px;">
        <div>
          <small class="text-muted">${post.topic}</small>
          <strong>${post.userName}</strong>
          <p class="mb-0">${post.time}</p>
          <p class="mb-0">${post.title}</p>
        </div>
      </div>
    </li>
  `);
}

export default PostSummaryItem;