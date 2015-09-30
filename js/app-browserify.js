"use strict";

require("es5-shim")   
require("babel/register")

var Promise = require('es6-promise').Promise
var $ = require('jquery')
var Backbone = require('backbone')



import * as templates from "./templates.js"
import * as api from './etsy-api.js'

var $ = require('jquery'),
apikey = '6vx9gdvdpwo2prwjzl9ydh15',
active_listings = (key)=> `https://openapi.etsy.com/v2/listings/active.js?callback=?&api_key=${apikey}&includes=Images,Shop`,
shop_search = (key, shop_id) => `https://openapi.etsy.com/v2/shops/${shop_id}/listings/active.js?api_key=aavnvygu0h5r52qes74x9zvo&callback=?`,
listing = (key, listing_id) => `https://openapi.etsy.com/v2/listings/${listing_id}.js?callback=?&api_key=${apikey}&includes=Images`,
searchable = (key, category_path) => `https://openapi.etsy.com/v2/listings/active.js?callback=?&api_key=${apikey}&includes=Images&keywords=${category_path}`






var EtsyRouter = Backbone.Router.extend({
    routes: {
        'listings/:id/:shop_id': 'details',
        'search/:keywords': 'search',
        '*default': 'home',
        'listings/:id': 'listing'
    },
    home: function(anything) {

        api.getListings().then((etsyListings_json) => {
            console.log(etsyListings_json)
            this.etsyListings = etsyListings_json.results

            document.body.innerHTML = templates.homePage(this.etsyListings)
            console.log(this);
        }.bind(this))
    },

    details: function(id, shop_id) {
        var Promise;

        if (!this.etsyListings) {
            Promise = $.when(
                api.getListing(id),
                api.getShop(shop_id),
                api.getListings()
            )
        } else {

            Promise = $.when(
                api.getListing(id),
                api.getShop(shop_id)
            )
        }
        Promise.then((etsyListing_json, etsyShop_json, etsyListings_json) => {

            console.log(etsyListing_json)
            console.log(etsyShop_json)


            var listingData = etsyListing_json.results
            var shopData = etsyShop_json.results
            
            if (etsyListings_json)
                this.etsyListings = etsyListings_json.results

            var tmpl = templates.details(listingData, shopData, this.etsyListings)
            document.body.innerHTML = tmpl
            
        }.bind(this))

    },
    search: function(keywords) {
        api.getItems(keywords).then((keywords_json) => {

            document.body.innerHTML = templates.homePage(keywords_json.results)

        })
    },

    listing: function(id) {
        api.getListing(id).then((Listing_json) => {

            document.body.innerHTML = templates.details(Listing_json.results)

        })
    },
    
    initialize:function() {
        Backbone.history.start()
    }

})




var router = new EtsyRouter()

$('body').on('submit', 'form.search_form', (event) => {
    event.preventDefault();
    window.location.hash = `search/${document.querySelector(".search_item").value}`
})

 $('body').on('change', 'input.sale', (event) => {
    event.preventDefault();
    console.log(event.target)
    
    console.log($(event.target).context.checked)
    $(event.target).context.checked===true ? window.location.hash = `search/sale` : window.location.hash = `home`
 
       })












/*var detailsScreen= details()
var homeScreen= homePage()*/

/*$.getJSON(active_listings(apikey)).then((data) => { 
        console.log(data);
        
        





 $('.container').html(homeScreen)
});*/




