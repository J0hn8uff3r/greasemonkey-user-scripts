// ==UserScript==
// @name Priceline cars
// @namespace Violentmonkey Scripts22
// @match https://www.priceline.com/drive/search/r/*
// @grant none
// ==/UserScript==

var REGEX_RENTALCAR = /&discountCode=([A-Z]{2})/i;
var REGEX_CONTRACT_ID = /&partnerCorpDiscountCode=([A-Z0-9a-z]{4,20})?/i;
var REGEX_DISCOUNT = /&partnerPromotionCode=([A-Z0-9a-z]{4,20})?/i;
var CURRENT_URL = window.location.href;

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey) {
        var rentalcar = CURRENT_URL.match(REGEX_RENTALCAR);
        var contract = CURRENT_URL.match(REGEX_CONTRACT_ID);
        var discount = CURRENT_URL.match(REGEX_DISCOUNT);
        var message = "Company: " + rentalcar[1] + "\nContract ID: " + contract[1] + "\nDiscount: " + discount[1] + "\n";
        alert(message);
    }
    return false;
});