const WhoToFollowListItem = ({ who }) => {
  return(`
    <li class="list-group-item">
      <div class="d-flex align-items-center">
        <img src="${who.avatarIcon}"
             class="rounded-circle me-3"
             style="width: 48px; height: 48px;">
        <div>
          <strong>${who.userName}</strong>
          <p class="mb-0">@${who.handle}</p>
        </div>
      </div>
    </li>
  `);
}

export default WhoToFollowListItem;