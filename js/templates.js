var toolbar = function() {
    return '<header id="top">
        <div class="container_nav">
            <div class="logo_nav" >
              <a class="log "href="https://medium.com/@jestradaf22">Etsy</a>
            </div>

            <div class="search_nav">   
               <form id="searchbox_nav" action="">
                  <input id="search" type="text" placeholder="Search For Items">
                  <input id="submit" type="submit" value="Search">
             </form>
            </div>

        </div>
    </header>'
}

var grid_cell = (url, title) => '<div class="grid_cell">

                        <div class="cell_info">
                            <div id="etsy_item" >
                                <a href="#">
                                    <img src="${url}">
                                </a>
                            </div>
                            <div class="etsy_details_box">
                                <div class="etsy_details">
                                    <p/>test item details</p>
                                </div>
                                <div class="etsy_details_seller">
                                    <p>Test Seller<span class="etsy_seller_price">Test</span><p>
                                </div>
                            </div>
                        </div>  
                    </div>'

export var details = (url, title) => '${toolbar()}
   <div class="details_content">
        <div class="details_body">
            <div class="listing">
                <div class="listing_left">
                    <div id="image_wrapper">
                        <div id="main_image">
                            <img src=""${details_item.Images[0]}">
                        </div>
                        <div id="other_images"> 
                            <ul id="image_list">
                                <li id="image-0" image-index="0">
                                    <img src="#">
                                </li>
                                <li id="image-1" image-index="1">
                                    <img src="#">
                                </li>
                                <li id="image-2" image-index="2">
                                    <img src="#">
                                </li>
                                <li id="image-3" image-index="3">
                                    <img src="#">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="listing_description">
                        <div class="description_text">${details_item.description}<br>Test<br><br>Test<br><br>Test<br><br><br>Test</div>
                    </div>
                </div>
                <div class="listing_right">
                    <div class="listing_cart_area">
                        <div class="listing_overview">
                            <div id="listing_right_text">
                                <h1><span id="lisitng_right_title">${details_item.title}</span></h1>
                            </div>
                            <div class="listing_right_overview">
                                <h3>Overview</h3>
                                <ul classs="listing_properties">
                                    <li>Handmade Item</li>
                                    <li>Materials:<span id="listing_materials"></span</li>
                                    <li>FeedBack:<span id="listing_feedback"></span></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>  
                    </div>  
                    <div class="related_listings_wrapper">
                        <div class="related_listings">
                            <div id="seller_info">
                                <div id="avatar"></div>
                                <div id="shop_name"></div>
                            </div>
                            <div id="other_items">
                                <ul>
                                    <div class="other_items_cell">
                                        <div  class="other_items_image">
                                        <a  href="#">
                                            <img src=""${url}"">
                                        </a>
                                        </div>
                                        <div class="other_items_cell_info">
                                            <div id="other_items_cell_details">Test</div>
                                            <div id="other_items_cell_price">$test</div>
                                        </div>  
                                    </div>
                                    <div class="other_items_cell">
                                        <div  class="other_items_image">
                                        <a  href="#">
                                            <img src=""${url}"">
                                        </a>
                                        </div>
                                        <div class="other_items_cell_info">
                                            <div id="other_items_cell_details">Test</div>
                                            <div id="other_items_cell_price">$test</div>
                                        </div>  
                                    </div>
                                    <div class="other_items_cell">
                                        <div  class="other_items_image">
                                        <a  href="#">
                                            <img src=""${url}"">
                                        </a>
                                        </div>
                                        <div class="other_items_cell_info">
                                            <div id="other_items_cell_details">Test</div>
                                            <div id="other_items_cell_price">$test</div>
                                        </div>  
                                    </div>
                                    <div class="other_items_cell">
                                        <div  class="other_items_image">
                                        <a  href="#">
                                            <img src=""${url}"">
                                        </a>
                                        </div>
                                        <div class="other_items_cell_info">
                                            <div id="other_items_cell_details">Test</div>
                                            <div id="other_items_cell_price">$test</div>
                                        </div>  
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>'





export var home = (Etsy) => '${toolbar()}
    <div class="content">
            <div class="aside_all">
            <h5>Show Results For:</h5>
                <div class="aside_outer">
                    <div class="aside_inner">
                        <ul>
                            <li>
                                <a class="aside_links" href="#"><span class="aside_text">Beer</span>
                            </li>
                            <li>
                                <a class="aside_links" href="#"><span class="aside_text">Sports</span>
                            </li>
                            <li>
                                <a class="aside_links" href="#"><span class="aside_text">Cars</span>
                            </li>
                            <li>
                                <a class="aside_links" href="#"><span class="aside_text">Guns</span>
                            </li>
                            <li>
                                <a class="aside_links" href="#"><span class="aside_text">Grilling Stuff</span>
                            </li>
                            <li>
                                <a class="aside_links" href="#"><span class="aside_text">Tools</span>
                            </li>
                            <li>
                                <a class="aside_links" href="#"><span class="aside_text">Beards</span>
                            </li>
                            <li>
                                <a class="aside_links" href="#"><span class="aside_text">Beard Accessories</span>
                            </li>
                            <li>
                                <a class="aside_links" href="#"><span class="aside_text">Bare Knuckle Boxing</span>
                            </li>
                            <li>
                                <a class="aside_links" href="#"><span class="aside_text">Explosions</span>
                            </li>
                            <li>
                                <a class="aside_links" href="#"><span class="aside_text">More Manly Things</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           <div class="grid">
                <div class="grid_info">
                    <div class="grid_left">
                        <span>
                            <a class="grid_info_link" href="#" title="All Categories"><span class="grid_info_etzy">All Categories</span></a>
                        </span>
                        <span class="grid_info_api">Test</span>
                        
                    </div>
                    <div class="grid_right"><span class="grid_info_common">Sort By:<span class="grid_info_etzy">Revelancy</span></span></div>
                </div>
                <div class="grid_inner">
                    <div class="grid_cell">

                        <div class="cell_info">
                            <div id="etsy_item" >
                             ${trending_items.map((trending_item) =>{
                                return <a href= "#details/${trending_item.listing_id}">
                                    <img src="${trending_item.Images[0].url_570xN}">
                                </a>
                            </div>
                            <div class="etsy_details_box">
                                <div class="etsy_details">
                                    <p/>test item details</p>
                                </div>
                                <div class="etsy_details_seller">
                                    <p>${trending_item.title}<span class="etsy_seller_price">${trending_item.price}</span><p>
                                </div>
                                }).join('')
                                } 
                            </div>
                        </div>  
                    
                        <div class="cell_info">
                            <div id="etsy_item" >
                             ${trending_items.map((trending_item) =>{
                                return <a href= "#details/${trending_item.listing_id}">
                                    <img src="${trending_item.Images[0].url_570xN}">
                                </a>
                            </div>
                            <div class="etsy_details_box">
                                <div class="etsy_details">
                                    <p/>test item details</p>
                                </div>
                                <div class="etsy_details_seller">
                                    <p>${trending_item.title}<span class="etsy_seller_price">${trending_item.price}</span><p>
                                </div>
                                }).join('')
                                } 
                            </div>
                        </div>  

                         <div class="cell_info">
                            <div id="etsy_item" >
                             ${trending_items.map((trending_item) =>{
                                return <a href= "#details/${trending_item.listing_id}">
                                    <img src="${trending_item.Images[0].url_570xN}">
                                </a>
                            </div>
                            <div class="etsy_details_box">
                                <div class="etsy_details">
                                    <p/>test item details</p>
                                </div>
                                <div class="etsy_details_seller">
                                    <p>${trending_item.title}<span class="etsy_seller_price">${trending_item.price}</span><p>
                                </div>
                                }).join('')
                                } 
                            </div>
                        </div>  
                    
                        <div class="cell_info">
                            <div id="etsy_item" >
                             ${trending_items.map((trending_item) =>{
                                return <a href= "#details/${trending_item.listing_id}">
                                    <img src="${trending_item.Images[0].url_570xN}">
                                </a>
                            </div>
                            <div class="etsy_details_box">
                                <div class="etsy_details">
                                    <p/>test item details</p>
                                </div>
                                <div class="etsy_details_seller">
                                    <p>${trending_item.title}<span class="etsy_seller_price">${trending_item.price}</span><p>
                                </div>
                                }).join('')
                                } 
                            </div>
                        </div>  





                    </div>
                </div>  
            </div>
        
    </div>`