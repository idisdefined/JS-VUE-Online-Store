Vue.component("arrivals", {
  template: `
    <section class="promo-catalog">
        <div class="wrap promo-catalog">
            <nav class="promo-catalog-title">
                <h1 class="promo-catalog-title-2">
                    NEW ARRIVALS
                </h1>
                <a href="#" class="promo-catalog-title-3">
                    HOME&nbsp; / MEN&nbsp; / <span class="promo-catalog-title-4">
                     NEW ARRIVALS
                </span>
                </a>
            </nav>
        </div>
    </section>

    <filterrs></filterrs>
`,
});

Vue.component("filterrs", {
  template: `
    <section class="catalog-filter wrap">
            <div class="filter-content">
            <details class="filter">
                <summary class="filter-sum-1"> FILTER
                    <svg class="filter-svg" width="15" height="10" viewBox="0 0 15 10" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                         />
                    </svg>
                </summary>

                
                
                    <details class="filter-title">
                        <summary class="filter-sum-2">CATEGORY</summary>
                        <ul class="filter-list">
                            <li class="filter-item"><a href="#" class="filter-link">Accessories</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Bags</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Denim</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Hoodies & Sweatshirts</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Jackets & Coats</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Polos</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Shirts</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Shoes</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Sweaters & Knits</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">T-Shirts</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Tanks</a></li>
                        </ul>
                    </details>
            
                    <details class="filter-title">
                        <summary class="filter-sum-2">BRAND</summary>
                        <ul class="filter-list">
                            <li class="filter-item"><a href="#" class="filter-link">Accessories</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Bags</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Denim</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Hoodies & Sweatshirts</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Jackets & Coats</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Polos</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Shirts</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Shoes</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Sweaters & Knits</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">T-Shirts</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Tanks</a></li>
                        </ul>
                    </details>

                    <details class="filter-title">
                        <summary class="filter-sum-2">DESIGNER</summary>
                        <ul class="filter-list">
                            <li class="filter-item"><a href="#" class="filter-link">Accessories</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Bags</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Denim</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Hoodies & Sweatshirts</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Jackets & Coats</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Polos</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Shirts</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Shoes</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Sweaters & Knits</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">T-Shirts</a></li>
                            <li class="filter-item"><a href="#" class="filter-link">Tanks</a></li>
                        </ul>
                    </details>
            </details>
                </div>

                
            <div class="catalog-filters-title">
                <details class="f-size">
                    <summary class="f-size-2"><span class="filters-title">TRENDING NOW</span>
                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                                fill="#6F6E6E" />
                        </svg>
                    </summary>
                </details>
               
                <details class="f-size">
                    <summary class="f-size-2"><span class="filters-title">SIZE</span>
                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                                fill="#6F6E6E" />
                        </svg>
                
                    </summary>
                
                    <div class="size-content size-f">
                        <div class="checkbox">
                            <input class="custom-checkbox" type="checkbox" id="color-1" name="color-1" value="indigo">
                            <label for="color-1">XS</label>
                        </div>
                        <div class="checkbox">
                            <input class="custom-checkbox" type="checkbox" id="color-2" name="color-2" value="red">
                            <label for="color-2">S</label>
                        </div>
                        <div class="checkbox">
                            <input class="custom-checkbox" type="checkbox" id="color-4" name="color-4" value="yellow">
                            <label for="color-4">M</label>
                        </div>
                        <div class="checkbox">
                            <input class="custom-checkbox" type="checkbox" id="color-5" name="color-5" value="green">
                            <label for="color-5">L</label>
                        </div>
                    </div>
                </details>

                <details class="f-size">
                    <summary class="f-size-2"><span class="filters-title">PRICE</span>
                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                                fill="#6F6E6E" />
                        </svg>
                    </summary>
                </details>
           </div>
        </section>
`,
});
