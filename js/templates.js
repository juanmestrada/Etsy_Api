


var toolbar = (listing) => `<header id="top">
        <div class="container_nav">
            <div class="search_nav">   
               <form class='search_form'>
                  <input id="search"  type="search" class="search_item" placeholder="Search">
                  <input id="submit" type="submit" class="submit" value="Search">
             </form>
            </div>

        </div>
    </header>`


var grid_cell = () => `<div class="grid_cell">

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
                    </div>`



export var homePage = (listing) => { 
    
    var hashRoute = window.location.hash;

var saleCheckedStatus;

(hashRoute.indexOf('sale') > -1) ? saleCheckedStatus = 'checked' : saleCheckedStatus = ''
console.log('testing indexOf sale in hashroute...')
console.log(hashRoute.indexOf('sale'))

    return `${toolbar()} 
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
                <div class="grid_inner grid-2-400 grid-4-800">
                    
                
     ${listing.map((v, i) => {
            //if (listing[i].Images[0].url_170x135) {};
                        return `<div class="grid_cell">
     
                        <div class="cell_info">
                            <div id="etsy_item" >
                                <a href="#listings/${listing[i].listing_id}/${listing[i].Shop.shop_id}">
                                    <img src="${listing[i].Images[0].url_170x135}"/>
                                </a>
                            </div>
                            <div class="etsy_details_box">
                                <div class="etsy_details">
                                <p> ${listing[i].title} <span>  $${listing[i].price} </span> 
                                    <p/></p>
                                </div>
                                <div class="etsy_details_seller">
                                    <p class="seller">${listing[i].Shop.shop_name}<span class="etsy_seller_price">$${listing[i].price}</span><p>
                                </div>
                            </div>
                        </div>  
                    </div>`
    }).join('') }  
                </div>  
            </div>
        
    </div>`
   
}

export var details = (listingData, shopData, etsyListings) => { 
    var mappedImages = listingData[0].Images.map((imageObj) => {
        return `<img src="${imageObj.url_570xN}">`
    })


    var mainImage = mappedImages.shift(),
        secondaryImages = mappedImages.join('')

    var mappedShopItems = shopData.map((listingObj) => {
            return `<li> ${listingObj.title} </li>`
        }).join("")

    var currentIndex;
    
    etsyListings.forEach( (etsyListing, i, array) => {
            if(etsyListing.listing_id === listingData[0].listing_id){
                console.log(i)
                currentIndex = i;
            }
        })
  
    return `${toolbar()}
   <div class="details_content">
        <div class="details_body">
            <div class="listing">
                <div class="listing_left">
                    <div id="image_wrapper">
                        <div id="main_image">
                            <a href ='#listings/${etsyListings[Math.max(0,currentIndex-1)].listing_id}/${etsyListings[Math.max(0,currentIndex-1)].Shop.shop_id}' class="arrow-left">  </a> 
                ${mainImage}
                <a href ='#listings/${etsyListings[Math.min(25, currentIndex+1)].listing_id}/${etsyListings[Math.min(25, currentIndex+1)].Shop.shop_id}' class="arrow-right"> </a> 
                 
                            <img src="">
                        </div>
                        <div id="other_images"> 
                            <ul id="image_list">
                            ${secondaryImages}
                                
                            </ul>
                        </div>
                    </div>
                    <div class="listing_description">
                        <div class="description_text"><br>${listingData[0].description}<br></div>
                    </div>
                </div>
                <div class="listing_right">
                    <div class="listing_cart_area">
                        <div class="listing_overview">
                            <div id="listing_right_text">
                                <h6><span id="lisitng_right_title">${listingData[0].title}</span><br><br>$${listingData[0].price}</h6>
                            </div>
                            <div class="listing_right_overview">
                                <h7><strong>Overview</strong></h7>
                                <ul classs="listing_properties">
                                    <li>Handmade Item ${listingData[0].used_manufacturer}</li>
                                    <li>Materials:<span id="listing_materials"> ${listingData[0].materials}</span</li>
                                    <li>Favorited by:<span id="listing_feedback"> ${listingData[0].num_favorers} people</span></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>  
                    </div>  
                    <div class="related_listings_wrapper">
                        <div class="related_listings">
                            <div id="seller_info">
                                <div id="avatar">
                                    
                                </div>
                                <div id="shop_name"></div>
                            </div>
                            <div id="other_items">
                                <h6> Other Items available from this seller:  </h6>
                                <ul>
                                    ${mappedShopItems}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>`
}


