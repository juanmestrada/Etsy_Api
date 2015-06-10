"use strict";


require("es5-shim")   
require("babel/register")

var Promise = require('es6-promise').Promise
var $ = require('jquery')
var Backbone = require('backbone')


import * as templates from "./templates.js"

import * as api from './etsy-api.js'



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

            document.body.innerHTML = templates.home(etsyListings_json.results)
        })
    },

    details: function(id, shop_id) {

        $.when(
            api.getListing(id),
            api.getShop(shop_id)
        ).then((etsyListing_json, etsyShop_json) => {

            console.log(etsyListing_json)
            console.log(etsyShop_json)

            var listingData = etsyListing_json.results
            var shopData = etsyShop_json.results
            document.body.innerHTML = templates.details(listingData, shopData)
        })
    },
    search: function(keywords) {
        api.getItems(keywords).then((keywords_json) => {

            document.body.innerHTML = templates.home(keywords_json.results)

        })
    },

        listing: function(id) {
                api.getListing(id).then((Listing_json) => {

                    document.body.innerHTML = templates.details(Listing_json.results)

                })
            },

    

    initialize: function() {
        Backbone.history.start()

    },
})



var router = new EtsyRouter()


$('body').on('submit', 'form.search_form', (event) => {
    event.preventDefault();
    window.location.hash = `search/${document.querySelector(".search_item").value}`
})

// just Node?
// var fetch = require('node-fetch')
// Browserify?
// require('whatwg-fetch') //--> not a typo, don't store as a var

// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
// var Router = require('./app.js')

// window.addEventListener('load', app)

// function app() {
// start app
// new Router()
// }
