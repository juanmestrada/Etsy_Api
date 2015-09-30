
var $ = require('jquery'),
	apikey = '6vx9gdvdpwo2prwjzl9ydh15',
	active_listings = (key)=> `https://openapi.etsy.com/v2/listings/active.js?callback=?&api_key=${apikey}&includes=Images,Shop`,
	shop_search = (key, shop_id) => `https://openapi.etsy.com/v2/shops/${shop_id}/listings/active.js?api_key=aavnvygu0h5r52qes74x9zvo&callback=?`,
	listing = (key, listing_id) => `https://openapi.etsy.com/v2/listings/${listing_id}.js?callback=?&api_key=${apikey}&includes=Images`,
	searchable = (key, category_path) => `https://openapi.etsy.com/v2/listings/active.js?callback=?&api_key=${apikey}&includes=Images&keywords=${category_path}`


export var getListings = () => { 
                                       
    return $.getJSON(active_listings(apikey))
        .then((data) => { 
            console.log(data);
            return data     
        })
	}

	export var getListing = (listing_id) => {
		
		return $.getJSON(listing(apikey, listing_id))
		.then((info) => {
			return info
		})
	}



	export var getItems = (category_path)=>{
		return $.getJSON(searchable(apikey, category_path))
		.then((item_info) => { 
			return item_info
		})
	}

	export var getShop = (shop_id) => { 
		return $.getJSON(shop_search(apikey, shop_id))
			.then((shop_info)=> {
				return shop_info

	})
}