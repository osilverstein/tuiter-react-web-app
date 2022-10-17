//function that returns the twitter navigation sidebar
//it is a function because it is a component
//has: a list of links to the different pages
// logo, home, explore, notifications, messages, bookmarks, lists, profile, more
// rounded blue tweet button at the bottom

const NavigationSidebar = () => {
  return(`
    <div class="list-group">
      <a class="list-group-item" href="/">
        <i class="fab fa-twitter"></i></a>
      <a class="list-group-item" href="/">
        <i class="fas fa-home"></i> Home</a>
      <a class="list-group-item" href="/explore">
        <i class="fas fa-hashtag"></i> Explore</a>
      <a class="list-group-item" href="/notifications">
        <i class="far fa-bell"></i> Notifications</a>
      <a class="list-group-item" href="/messages">
        <i class="far fa-envelope"></i> Messages</a>
      <a class="list-group-item" href="/bookmarks">
        <i class="far fa-bookmark"></i> Bookmarks</a>
      <a class="list-group-item" href="/lists">
        <i class="far fa-list-alt"></i> Lists</a>
      <a class="list-group-item" href="/profile">
        <i class="far fa-user"></i> Profile</a>
      <a class="list-group-item" href="/more">
        <i class="fas fa-ellipsis-h"></i> More</a>
    </div>
    <div class="d-grid mt-2">
      <a href="tweet.html"
         class="btn btn-primary btn-block rounded-pill">
         Tweet</a>
    </div>
  `);
 }
 export default NavigationSidebar;