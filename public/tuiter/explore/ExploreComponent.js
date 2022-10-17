import PostSummaryList from "./PostSummaryList/PostSummaryList.js";
import SearchComponent from "./SearchComponent.js";

const ExploreComponent = () => {
    return(`
            ${SearchComponent()}
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
           </ul>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
