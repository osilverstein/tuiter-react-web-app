import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
  //iterate over the who array using the WhoToFollowListItem function to generate the list
   return (`
           <ul class="list-group">
            ${who.map(who => WhoToFollowListItem({ who })).join('')}

           </ul>
`); }

export default WhoToFollowList;