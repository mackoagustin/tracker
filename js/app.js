import "../components/button/button.js";
import "../components/text-block/text-block.js";
import "../components/icon-text/icon-text.js";
import "../components/benefit-block/benefit-block.js";
import "../components/app-section/app-section.js";
import "../components/app-section-right/app-section-right.js"
import "../components/price-block/price-block.js";
import "../components/faq/faq.js";
import "../components/tabs/tabs.js";
import "../components/nav-bar/nav-bar.js";
import "../components/form/form.js";
import "../components/footer/footer.js"
import "../components/testimonial/testimonial.js"

document.addEventListener("DOMContentLoaded", function () {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let downloadLink = document.getElementById("download-link");

    if (/android/i.test(userAgent)) {
        downloadLink.href = "https://play.google.com/store/apps/details?id=com.trackingapp.app";
    }
    if (/iPad|iPhone|iPod|Macintosh/.test(userAgent) && !window.MSStream) {
        downloadLink.href = "https://apps.apple.com/ar/app/tracker-real-state/id6502788419?l=en-GB";
    }
});
