// ==UserScript==
// @name Easyrentcars apply filters
// @match https://www.easyrentcars.com/carsearch*
// @grant none
// ==/UserScript==

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey) {
        window.location.href += "&dealer=29,30,42,78,44,49,290,34,32&filter=1&seat=1&distance=5&popular=2¤cy=EUR&unit_price=17.82,40.82&deals=3&sort=1&coupon_sub_id=OFF10";
    }
    return false;
});