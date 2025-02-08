document.addEventListener("DOMContentLoaded", function() {
    var ssLinksParent = document.querySelector('.uagb-block-f25a72a1');
    ssLinksParent ? .addEventListener('keyup', function(e) {
        var link = e.target.closest('.uagb-ss__link');
        if (link && e.keyCode === 13) {
            handleSocialLinkClick(link);
        }
    });

    ssLinksParent ? .addEventListener('click', function(e) {
        var link = e.target.closest('.uagb-ss__link');
        if (link) {
            handleSocialLinkClick(link);
        }
    });

    function handleSocialLinkClick(link) {
        var social_url = link.dataset.href;
        var target = "";
        if (social_url == "mailto:?body=") {
            target = "_self";
        }
        var request_url = "";
        if (social_url.indexOf("/pin/create/link/?url=") !== -1) {
            request_url = social_url + encodeURIComponent(window.location.href) + "&media=" + '';
        } else {
            request_url = social_url + encodeURIComponent(window.location.href);
        }
        window.open(request_url, target);
    }
    window.addEventListener('DOMContentLoaded', () => {
        const blockScope = document.querySelector('.uagb-block-1c0f4dcb');
        if (!blockScope) {
            return;
        }

        const anchorElement = blockScope.querySelector('a');
        if (!anchorElement) {
            return;
        }


        blockScope.addEventListener('keydown', (event) => {
            if (13 === event.keyCode || 32 === event.keyCode) {
                event.preventDefault();

                anchorElement.click();
            }
        });
    });
    window.addEventListener('DOMContentLoaded', () => {
        const blockScope = document.querySelector('.uagb-block-d9312b86');
        if (!blockScope) {
            return;
        }

        const anchorElement = blockScope.querySelector('a');
        if (!anchorElement) {
            return;
        }


        blockScope.addEventListener('keydown', (event) => {
            if (13 === event.keyCode || 32 === event.keyCode) {
                event.preventDefault();

                anchorElement.click();
            }
        });
    });
    window.addEventListener('DOMContentLoaded', () => {
        const blockScope = document.querySelector('.uagb-block-6101a016');
        if (!blockScope) {
            return;
        }

        const anchorElement = blockScope.querySelector('a');
        if (!anchorElement) {
            return;
        }


        blockScope.addEventListener('keydown', (event) => {
            if (13 === event.keyCode || 32 === event.keyCode) {
                event.preventDefault();

                anchorElement.click();
            }
        });
    });
    jQuery(document).ready(function() {
        let scope = jQuery(".wp-block-uagb-image-gallery.uagb-block-521031d2");
        if (scope.length) {
            scope.css("visibility", "visible");
            let getSlickCarousel = scope.find(".uagb-slick-carousel");
            if (getSlickCarousel.length) {
                getSlickCarousel.slick({
                    "arrows": false,
                    "dots": false,
                    "initialSlide": 0,
                    "infinite": true,
                    "autoplay": true,
                    "autoplaySpeed": 2000,
                    "pauseOnHover": true,
                    "speed": 500,
                    "slidesToShow": 3,
                    "prevArrow": "<button type='button' data-role='none' class='spectra-image-gallery__control-arrows spectra-image-gallery__control-arrows--carousel slick-prev slick-arrow' aria-label='Previous' tabindex='0' role='button'><svg xmlns='http:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' width='24' height='24'><path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'><\/path><\/svg><\/button>",
                    "nextArrow": "<button type='button' data-role='none' class='spectra-image-gallery__control-arrows spectra-image-gallery__control-arrows--carousel slick-next slick-arrow' aria-label='Previous' tabindex='0' role='button'><svg xmlns='http:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' width='24' height='24'><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'><\/path><\/svg><\/button>",
                    "rtl": false,
                    "responsive": [{
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 2
                        }
                    }, {
                        "breakpoint": 767,
                        "settings": {
                            "slidesToShow": 1
                        }
                    }]
                });
            }
        }
    });
    window.addEventListener('DOMContentLoaded', () => {
        const blockScope = document.querySelector('.uagb-block-60c5f9a2');
        if (!blockScope) {
            return;
        }

        const anchorElement = blockScope.querySelector('a');
        if (!anchorElement) {
            return;
        }


        blockScope.addEventListener('keydown', (event) => {
            if (13 === event.keyCode || 32 === event.keyCode) {
                event.preventDefault();

                anchorElement.click();
            }
        });
    });
    window.addEventListener('DOMContentLoaded', () => {
        const blockScope = document.querySelector('.uagb-block-21687caf');
        if (!blockScope) {
            return;
        }

        const anchorElement = blockScope.querySelector('a');
        if (!anchorElement) {
            return;
        }


        blockScope.addEventListener('keydown', (event) => {
            if (13 === event.keyCode || 32 === event.keyCode) {
                event.preventDefault();

                anchorElement.click();
            }
        });
    });
    window.addEventListener('DOMContentLoaded', () => {
        const blockScope = document.querySelector('.uagb-block-25b3fcde');
        if (!blockScope) {
            return;
        }

        const anchorElement = blockScope.querySelector('a');
        if (!anchorElement) {
            return;
        }


        blockScope.addEventListener('keydown', (event) => {
            if (13 === event.keyCode || 32 === event.keyCode) {
                event.preventDefault();

                anchorElement.click();
            }
        });
    });
});