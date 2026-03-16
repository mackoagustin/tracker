import "../components/button/button.js";
import "../components/text-block/text-block.js";
import "../components/icon-text/icon-text.js";
import "../components/benefit-block/benefit-block.js";
import "../components/benefit-block-v2/benefit-block-v2.js";
import "../components/app-section/app-section.js";
import "../components/app-section-right/app-section-right.js"
import "../components/ap-section-slot/app-section-slot.js"
import "../components/app-section-slot-right/app-section-slot-right.js"
import "../components/price-block/price-block.js";
import "../components/faq/faq.js";
import "../components/tabs/tabs.js";
import "../components/nav-bar/nav-bar.js";
import "../components/form/form.js";
import "../components/footer/footer.js"
import "../components/testimonial/testimonial.js"
import "../components/role-list/role-list.js";

document.addEventListener("DOMContentLoaded", function () {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Puede haber múltiples anchors con el mismo id (mobile y desktop),
    // así que actualizamos todos los que existan.
    const downloadLinks = document.querySelectorAll("#download-link");
    const downloadApps = document.querySelectorAll("#download-app");

    const setHref = (elements, href) => {
        elements.forEach(el => {
            if (el) el.href = href;
        });
    };

    if (/android/i.test(userAgent)) {
        const playUrl = "https://play.google.com/store/apps/details?id=com.trackingapp.app";
        setHref(downloadLinks, playUrl);
        setHref(downloadApps, playUrl);
    }

    if (/iPad|iPhone|iPod|Macintosh/.test(userAgent) && !window.MSStream) {
        const iosUrl = "https://apps.apple.com/ar/app/tracker-real-state/id6502788419?l=en-GB";
        setHref(downloadLinks, iosUrl);
        setHref(downloadApps, iosUrl);
    }
});
