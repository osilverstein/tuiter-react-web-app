//return a search result box
const SearchComponent = () => {
  return (`
    <div class="row">
              <div class="col-11">
                <div class="input-group mb-3">
                  <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i
                      class="fas fa-search"></i></button>
                  <input type="text" class="form-control" placeholder="Search Twitter" aria-label="Recipient's username"
                    aria-describedby="button-addon2">
                </div>
              </div>
              <div class="col-1">
                <i class="fas fa-cog fa-2x text-primary" style="font-size: 1.5rem; margin-top: 0.5rem;"></i>
              </div>
            </div>
  `);
}

export default SearchComponent;