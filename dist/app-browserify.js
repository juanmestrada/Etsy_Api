"use strict";

// es5 polyfills, powered by es5-shim
require("es5-shim")
// es6 polyfills, powered by babel
require("babel/register")

var Promise = require('es6-promise').Promise
var $ = require('jquery')
var Backbone = require('backbone')


import * as templates from "./templates.js"

import * as api from './etsy-api.js'



var EtsyRouter = Backbone.Router.extend({
	routes: {
		'listings/:id': 'details',
		'search/:keywords': 'search',
		'*default':'home'
	},
	home: function(anything){

		api.getListings().then((etsyListings_json)=> {
			console.log(etsyListings_json)

			document.body.innerHTML= templates.home(etsyListings_json.results)
		})
	},
	details:function(id){
		api.getListing(id).then((etsyListing_json)=>{
			var v = etsyListing_json.results[0]
		document.body.innerHTML = templates.details(v) 
	})
},
search: function(keywords) {
	api.getItems(keywords).then((keywords_json)=> {

	document.body.innerHTML=templates.home(keywords_json.results)
})

},
	initialize:function(){
		Backbone.history.start()

	},
})

var router = new EtsyRouter()

// if (form_search) {
$('body').on('submit', 'form.search_form', (event) => {
    event.preventDefault();
	window.location.hash = `search/${document.querySelector(".search_item").value}`
})
// }
