(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        745: function (t, e, o) {
            var content = o(765);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(234).default)("1b7833da", content, !0, {
                sourceMap: !1
            })
        },
        764: function (t, e, o) {
            "use strict";
            o(745)
        },
        765: function (t, e, o) {
            var n = o(233)(!1);
            n.push([t.i, "a.btn.btn-primary.btn-round{left:40px}#mintTime{margin-bottom:35px}", ""]), t.exports = n
        },
        775: function (t, e, o) {
            "use strict";
            o.r(e);
            var n = o(14),
                l = (o(55), o(104), o(742)),
                c = {
                    layout: "Footer",
                    components: {
                        VueCompareImage: o.n(l).a
                    },
                    head: {
                        title: "ThunderZeta | Thunder Zeta Now On Thundercore"
                    },
                    data: function () {
                        return {
                            apeLeft: 1e4,
                            apePercent: 0,
                            apePercentString: 0
                        }
                    },
                    created: function () {
                        var t = this;
                        this.$walletManager.mintStart && setInterval((function () {
                            t.loadApeLeft()
                        }), 1e4), setTimeout((function () {
                            $(".clients-carousel").owlCarousel({
                                autoplay: !0,
                                loop: !0,
                                margin: 15,
                                dots: !1,
                                slideTransition: "linear",
                                autoplayTimeout: 4500,
                                autoplayHoverPause: !0,
                                autoplaySpeed: 4500,
                                responsive: {
                                    0: {
                                        items: 2
                                    },
                                    500: {
                                        items: 3
                                    },
                                    600: {
                                        items: 4
                                    },
                                    800: {
                                        items: 5
                                    },
                                    1200: {
                                        items: 6
                                    }
                                }
                            }), $(".screen-carousel").owlCarousel({
                                loop: !0,
                                margin: 0,
                                center: !0,
                                dots: !0,
                                nav: !1,
                                autoplay: !0,
                                responsive: {
                                    0: {
                                        items: 1
                                    },
                                    768: {
                                        items: 3
                                    },
                                    991: {
                                        items: 4
                                    },
                                    1200: {
                                        items: 4
                                    },
                                    1920: {
                                        items: 4
                                    }
                                }
                            })
                        }), 100)
                    },
                    mounted: function () {
                        this.$walletManager.mintStart && this.loadApeLeft(), NioApp.components.docReady[3](jQuery), NioApp.components.docReady[14](jQuery), NioApp.components.docReady[21](jQuery), NioApp.components.winLoad[0](jQuery), NioApp.components.docReady[13](jQuery), NioApp.winLoad()
                    },
                    methods: {
                        copyContract: function () {
                            navigator.clipboard.writeText(this.$walletManager.myAddress), toastr.clear(), toastr.options = {
                                closeButton: !0,
                                newestOnTop: !1,
                                preventDuplicates: !0,
                                positionClass: "toast-bottom-right",
                                showDuration: "1000",
                                hideDuration: "10000",
                                timeOut: "2000",
                                extendedTimeOut: "1000"
                            }, toastr.success("Contract Copied")
                        },
                        loadApeLeft: function () {
                            var t = this;
                            return Object(n.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    for (; ;) switch (e.prev = e.next) {
                                        case 0:
                                            setTimeout(Object(n.a)(regeneratorRuntime.mark((function e() {
                                                var o;
                                                return regeneratorRuntime.wrap((function (e) {
                                                    for (; ;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, window.contractGlobal.methods.getNotMintedAmount().call();
                                                        case 2:
                                                            o = e.sent, t.apeLeft = parseInt(o), t.apePercent = 100 * (1e4 - parseInt(o)) / 1e4, t.apePercentString = t.apePercent + "%";
                                                        case 6:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))), 1e3);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    }
                },
                r = (o(764), o(40)),
                component = Object(r.a)(c, (function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", [o("div", {
                        staticClass: "header-banner bg-theme-grad-alt ",
                        attrs: {
                            id: "main"
                        }
                    }, [o("div", {
                        staticClass: "nk-banner"
                    }, [o("div", {
                        staticClass: "banner banner-fs banner-single banner-with-token-box-s1 "
                    }, [o("div", {
                        staticClass: "ui-shape ui-shape-header ui-shape-light"
                    }), t._v(" "), o("div", {
                        staticClass: "banner-wrap"
                    }, [o("div", {
                        staticClass: "container"
                    }, [o("div", {
                        staticClass: "row align-items-center justify-content-center"
                    }, [o("div", {
                        staticClass: "col-sm-10 col-md-10 col-xl-9"
                    }, [o("div", {
                        staticClass: "banner-caption tc-light text-center"
                    }, [t._m(0), t._v(" "), t._m(1), t._v(" "), o("div", {
                        staticClass: "cpn-btns mb-5"
                    }, [o("ul", {
                        staticClass: "btn-grp justify-content-center  "
                    }, [o("li", [this.$walletManager.mintStart ? o("NuxtLink", {
                        staticClass: "btn btn-md btn-round btn-with-icon btn-light",
                        attrs: {
                            to: "/mint"
                        }
                    }, [o("span", [t._v("Mint Some Zetas")]), t._v(" "), o("em", {
                        staticClass: "icon fas fa-angle-double-right"
                    })]) : o("a", {
                        staticClass: "btn btn-md btn-round btn-with-icon btn-light",
                        attrs: {
                            href: "#",
                            id: "mintTime"
                        }
                    }, [t._m(2)])], 1), t._v(" "), o("li", [o("a", {
                        staticClass: "btn btn-md btn-round btn-with-icon btn-light",
                        attrs: {
                            href: "https://scan.thundercore.com/address/" + this.$walletManager.myAddress + "/contracts",
                            target: "_blank"
                        }
                    }, [o("span", [t._v("Thunder Zetas Contract")]), t._v(" "), o("em", {
                        staticClass: "icon fas fa-paperclip"
                    })])])])])])])])]), t._v(" "), t._m(3)])]), t._v(" "), o("div", {
                        staticClass: "nk-ovm mask-b mask-contain-bottom"
                    })]), t._v(" "), o("div", {
                        staticClass: "token-box token-box-s1  "
                    }, [o("div", {
                        staticClass: "container"
                    }, [o("div", {
                        staticClass: "row no-gutters justify-content-center"
                    }, [o("div", {
                        staticClass: "col-xl-4 col-md-5"
                    }, [o("div", {
                        staticClass: "token-countdown-wrapper split split-left split-md-left"
                    }, [this.$walletManager.mintStart ? o("h5", {
                        staticClass: "title-sm"
                    }, [t._v("Mint is live")]) : t._e(), t._v(" "), this.$walletManager.mintStart ? o("small", [t._v("Mint Before All Gone (Minted: " + t._s(1e4 - t.apeLeft) + ")")]) : o("small", [t._v("Mint Before All Gone (Minted: 0)")]), t._v(" "), this.$walletManager.mintStart ? o("NuxtLink", {
                        staticClass: "btn btn-primary btn-round",
                        attrs: {
                            to: "/mint"
                        }
                    }, [t._v("Mint\n                  Now\n                ")]) : t._e(), t._v(" "), this.$walletManager.mintStart ? t._e() : o("div", {
                        staticClass: "countdown-small countdown-s2 countdown",
                        attrs: {
                            "data-date": "2022/01/6 10:00:00 GMT",
                            "data-day-text": "D",
                            "data-hour-text": "H",
                            "data-min-text": "M",
                            "data-sec-text": "S"
                        }
                    })], 1)]), t._v(" "), o("div", {
                        staticClass: "col-xl-6 col-md-7"
                    }, [o("div", {
                        staticClass: "token-status token-status-s1 bg-theme tc-light text-left split split-right split-md-right"
                    }, [o("h5", {
                        staticClass: "title-sm"
                    }, [t._v("Mint Progress (" + t._s(t.apePercentString) + ")")]), t._v(" "), o("div", {
                        staticClass: "progress-bar progress-bar-s1"
                    }, [o("div", {
                        staticClass: "progress-percent progress-percent-s1 bg-theme-grad-alt",
                        style: {
                            width: t.apePercentString
                        }
                    })]), t._v(" "), o("div", {
                        staticClass: "progress-points"
                    }, [o("span", [t._v("Remaining " + t._s(t.apeLeft))]), t._v(" "), o("span", [t._v("10,000 Zetas Total")])])])])])])]), t._v(" "), o("div", {
                        staticClass: "particles-container particles-bg",
                        attrs: {
                            id: "particles-bg"
                        }
                    })]), t._v(" "), o("main", {
                        staticClass: "nk-pages"
                    }, [t._m(4), t._v(" "), t._m(5), t._v(" "), t._m(6), t._v(" "), o("section", {
                        staticClass: "section bg-theme ov-h text-center tc-light overlay-x"
                    }, [o("div", {
                        staticClass: "container"
                    }, [o("div", {
                        staticClass: "nk-block nk-block-text-wrap"
                    }, [o("div", {
                        staticClass: "row align-items-center justify-content-center"
                    }, [o("div", {
                        staticClass: "col"
                    }, [o("div", {
                        staticClass: "nk-block-text"
                    }, [o("h3", {
                        staticClass: "fw-3 pb-2"
                    }, [t._v("\n                    Contract Address On Thundercore\n                  ")]), t._v(" "), o("p", {
                        staticClass: "lead-s2 animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".3"
                        }
                    }, [o("a", {
                        attrs: {
                            href: "https://scan.thundercore.com/address/" + this.$walletManager.myAddress + "/contracts",
                            target: "_blank"
                        }
                    }, [t._v("\n\n                      " + t._s(this.$walletManager.myAddress) + "\n                    ")])])])])])])])]), t._v(" "), t._m(7), t._v(" "), t._m(8), t._v(" "), t._m(9)])])
                }), [function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "cpn-title"
                    }, [o("h1", {
                        staticClass: "title title-xl-s2 title-semibold pt-5 mt-5 "
                    }, [t._v("THUNDER ZETA ON Thundercore")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "cpn-text cpn-text-center"
                    }, [o("p", {
                        staticClass: "lead  "
                    }, [t._v("ThunderZeta are now on Thundercore! Don't miss the chance to own them")]), t._v(" "), o("p", {
                        staticClass: "lead"
                    }, [t._v("ThunderZeta is among the first high-quality art projects on Thundercore\n                      ")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("span", [t._v(" Mint will be started at  "), o("br"), t._v(" "), o("h4", {
                        staticClass: "text-primary-alt"
                    }, [t._v("May 27, 2022, 12:00 GMT")])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("div", {
                        staticClass: "banner-social-wrap text-center  "
                    }, [o("ul", {
                        staticClass: "banner-social banner-social-vertical"
                    }, [o("li", [o("a", {
                        attrs: {
                            target: "_blank",
                            href: "https://t.me/thundercorezetas"
                        }
                    }, [o("em", {
                        staticClass: "fab fa-telegram"
                    })])]), t._v(" "), o("li", [o("a", {
                        attrs: {
                            href: "https://twitter.com/thundercorezetas",
                            target: "_blank"
                        }
                    }, [o("em", {
                        staticClass: "fab fa-twitter"
                    })])]), t._v(" "), o("li", [o("a", {
                        attrs: {
                            href: "https://discord.gg/WUsdfsfgcfrvSv",
                            target: "_blank"
                        }
                    }, [o("em", {
                        staticClass: "fab fa-discord"
                    })])]), t._v(" "), o("li", [o("a", {
                        attrs: {
                            href: "https://thundercorezetas.medium.com/",
                            target: "_blank"
                        }
                    }, [o("em", {
                        staticClass: "fab fa-medium-m"
                    })])])])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("section", {
                        staticClass: "section bg-light-grad",
                        attrs: {
                            id: "about"
                        }
                    }, [o("div", {
                        staticClass: "container"
                    }, [o("div", {
                        staticClass: "nk-block nk-block-features-s2"
                    }, [o("div", {
                        staticClass: "row align-items-center flex-row-reverse gutter-vr-30px"
                    }, [o("div", {
                        staticClass: "col-lg-5"
                    }, [
                        o("div", {
                            staticClass: "gfx py-4 mx-auto mx-lg-0 animated",
                            attrs: {
                                "data-animate": "fadeInUp",
                                "data-delay": ".1",
                            }
                        }, [o("img", {
                            staticClass: "tiltImage",
                            attrs: {
                                src: "/assets/zetas/1.png",
                                alt: "gfx",
                                "data-tilt": ""
                            }
                        })])
                    ]), t._v(" "), o("div", {
                        staticClass: "col-lg-7"
                    }, [o("div", {
                        staticClass: "nk-block-text pdb-r"
                    }, [o("h2", {
                        staticClass: "title title-thin animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".1"
                        }
                    }, [t._v("About Thunder Zeta")]), t._v(" "), o("h2", {
                        staticClass: "animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".2"
                        }
                    }, [t._v("The ThunderZeta is a unique\n                   collection. ")]), t._v(" "), o("p", {
                        staticClass: "animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".3"
                        }
                    }, [t._v("\n                    ThunderZeta, is an exclusive 10,000 Zetas who are living on the thundercore blockchain. No two pieces of these 10,000\n                    digital\n                    beauties are alike. Each being unique and pristine, there is an order of rarity that makes certain\n                    ones more valuable than the others.Thunder Zeta aims to become next NFT trend.\n                  ")]), t._v(" "), o("p", {
                        staticClass: "animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".5"
                        }
                    }, [t._v("\n                    ThunderZeta is the first high quality NFT project on Thundercore blockchain, everyone can get a Zeta. Well, as long as you\n                    are within\n                    the first 10,000. All Zetas will cost the same amount.\n  Thunder zeta token will be launched in nov and staking to earn passive income for the thunderzeta holders.\n     Thunderzeta DAO will be established to give the thunder zeta holders rights to vote and make decisions. \n                ")]), t._v(" "), o("p", {
                        staticClass: "animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".7"
                        }
                    }, [t._v("\n                    ThunderZeta is among the first high-quality art projects on Thundercore still nascent NFT landscape.\n                    With their\n                    Ethereum NFTs already trading in the secondary market for over 100 ETH a piece\n                  ")])]), t._v(" "), o("div", {
                        staticClass: "row gutter-vr-20px flex-wrap"
                    }, [o("div", {
                        staticClass: "col-sm-6"
                    }, [o("div", {
                        staticClass: "feature feature-s1 animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".4"
                        }
                    }, [o("div", {
                        staticClass: "feature-icon feature-icon-s5 feature-icon-s5-1"
                    }, [o("em", {
                        staticClass: "icon fas fa-check"
                    })]), t._v(" "), o("div", {
                        staticClass: "feature-text feature-text-s1"
                    }, [o("h6", [t._v("MARKETPLACE")]), t._v(" "), o("p", [t._v("Market place where you can trade your Thundercore Thunder Zeta")])])])]), t._v(" "), o("div", {
                        staticClass: "col-sm-6"
                    }, [o("div", {
                        staticClass: "feature feature-s1 animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".4"
                        }
                    }, [o("div", {
                        staticClass: "feature-icon feature-icon-s5 feature-icon-s5-2"
                    }, [o("em", {
                        staticClass: "icon fas fa-check"
                    })]), t._v(" "), o("div", {
                        staticClass: "feature-text feature-text-s1"
                    }, [o("h6", [t._v("ERC-721")]), t._v(" "), o("p", [t._v("The Zetas are stored as ERC-721 tokens on the Thundercore blockchain and hosted on IPFS.\n                          Purchasing an zeta costs 5000 TT.")])])])]), t._v(" "), o("div", {
                        staticClass: "col-sm-6"
                    }, [o("div", {
                        staticClass: "feature feature-s1 animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".5"
                        }
                    }, [o("div", {
                        staticClass: "feature-icon feature-icon-s5 feature-icon-s5-3"
                    }, [o("em", {
                        staticClass: "icon fas fa-check"
                    })]), t._v(" "), o("div", {
                        staticClass: "feature-text feature-text-s1"
                    }, [o("h6", [t._v("Fair Launch")]), t._v(" "), o("p", [t._v("Fair Launch, fair distribution.")])])])]), t._v(" "), o("div", {
                        staticClass: "col-sm-6"
                    }, [o("div", {
                        staticClass: "feature feature-s1 animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".6"
                        }
                    }, [o("div", {
                        staticClass: "feature-icon feature-icon-s5 feature-icon-s5-4"
                    }, [o("em", {
                        staticClass: "icon fas fa-check"
                    })]), t._v(" "), o("div", {
                        staticClass: "feature-text feature-text-s1"
                    }, [o("h6", [t._v("Rarity")]), t._v(" "), o("p", [t._v("10,000 Provably-rare Thunder Zeta tokens.")])])])])])])])])])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("section", {
                        staticClass: "section bg-theme tc-light ov-h",
                        attrs: {
                            id: "roadmap"
                        }
                    }, [o("div", {
                        staticClass: "container"
                    }, [o("div", {
                        staticClass: "section-head text-center wide-auto-sm"
                    }, [o("h4", {
                        staticClass: "title title-semibold animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".1"
                        }
                    }, [t._v("Roadmap")]), t._v(" "), o("p", {
                        staticClass: "animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".2"
                        }
                    }, [t._v("\n              Our goal is to continue these activities long into the future and make it a primary purpose of our\n              community, to be a force for good in our world\n            ")])]), t._v(" "), o("div", {
                        staticClass: "nk-block"
                    }, [o("div", {
                        staticClass: "row justify-content-center"
                    }, [o("div", {
                        staticClass: "col-xl-12"
                    }, [o("div", {
                        staticClass: "roadmap-all mgb-m50 animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".3"
                        }
                    }, [o("div", {
                        staticClass: "roadmap-wrap roadmap-wrap-s1 mb-0"
                    }, [o("div", {
                        staticClass: "row no-gutters"
                    }, [o("div", {
                        staticClass: "col-lg"
                    }, [o("div", {
                        staticClass: "roadmap roadmap-s1 roadmap-done text-lg-center"
                    }, [o("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [o("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [o("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("1")]), t._v(" "), o("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("Build Tech")])]), t._v(" "), o("ul", {
                        staticClass: "roadmap-step-list roadmap-step-list-s1"
                    }, [o("li", [t._v("Build Smart Contract")]), t._v(" "), o("li", [t._v("Creating the Thunderzeta Artworks")])])])])]), t._v(" "), o("div", {
                        staticClass: "col-lg"
                    }, [o("div", {
                        staticClass: "roadmap roadmap-s1 roadmap-done text-lg-center"
                    }, [o("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [o("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [o("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("2")]), t._v(" "), o("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("Community Development")])]), t._v(" "), o("ul", {
                        staticClass: "roadmap-step-list roadmap-step-list-s1"
                    }, [o("li", [t._v("Medium")]), t._v(" "), o("li", [t._v("Telegram")]), t._v(" "), o("li", [t._v("Twitter")]), t._v(" "), o("li", [t._v("Airdrop to the TTpunks holders")])])])])]), t._v(" "), o("div", {
                        staticClass: "col-lg"
                    }, [o("div", {
                        staticClass: "roadmap roadmap-s1 roadmap-done text-lg-center"
                    }, [o("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [o("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [o("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("3")]), t._v(" "), o("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("Website Designs")])]), t._v(" "), o("ul", {
                        staticClass: "roadmap-step-list roadmap-step-list-s1"
                    }, [o("li", [t._v("Designing website")]), t._v(" "), o("li", [t._v("Launching the website.")])])])])]), t._v(" "), o("div", {
                        staticClass: "col-lg"
                    }, [o("div", {
                        staticClass: "roadmap roadmap-s1 text-lg-center"
                    }, [o("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [o("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [o("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("4")]), t._v(" "), o("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("Launch minting!")])]), t._v(" "), o("ul", {
                        staticClass: "roadmap-step-list roadmap-step-list-s1"
                    }, [o("li", [t._v("Start at\n                                "), o("h5", [t._v("\n                                  June 4, 2022 at 12:00 GMT\n                                ")])])])])])])])]), t._v(" "), o("div", {
                        staticClass: "roadmap-wrap roadmap-wrap-s1 mb-0"
                    }, [o("div", {
                        staticClass: "row flex-row-reverse no-gutters"
                    }, [o("div", {
                        staticClass: "col-lg"
                    }, [o("div", {
                        staticClass: "roadmap roadmap-s1 text-lg-center"
                    }, [o("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [o("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [o("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("5")]), t._v(" "), o("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("Token launch")])]), t._v(" "), o("ul", {
                        staticClass: "roadmap-step-list roadmap-step-list-s1"
                    }, [o("li", [t._v("Thunderzeta ERC20 token launch")]), t._v(" "), o("li", [t._v("Token airdrop and use cases Development")])])])])]), t._v(" "), o("div", {
                        staticClass: "col-lg"
                    }, [o("div", {
                        staticClass: "roadmap roadmap-s1 text-lg-center"
                    }, [o("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [o("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [o("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("6")]), t._v(" "), o("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("DAO")])]), t._v(" "), o("ul", {
                        staticClass: "roadmap-step-list roadmap-step-list-s1"
                    }, [o("li", [t._v("establishment of decentralized autonomous organization")])])])])]), t._v(" "), o("div", {
                        staticClass: "col-lg"
                    }, [o("div", {
                        staticClass: "roadmap roadmap-s1 text-lg-center"
                    }, [o("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [o("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [o("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("7")]), t._v(" "), o("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("Marketplace Integration")])]), t._v(" "), o("ul", {
                        staticClass: "roadmap-step-list roadmap-step-list-s1"
                    }, [o("li", [t._v("Launching on the Marketplace")])])])])])])]), t._v(" "), o("div", {
                        staticClass: "roadmap-wrap roadmap-wrap-s1 mb-lg-0"
                    }, [o("div", {
                        staticClass: "row no-gutters"
                    }, [o("div", {
                        staticClass: "col-lg"
                    }, [o("div", {
                        staticClass: "roadmap roadmap-s1 text-lg-center"
                    }, [o("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [o("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [o("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("8")]), t._v(" "), o("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("NFT derivatives ")])]), t._v(" "), o("ul", {
                        staticClass: "roadmap-step-list roadmap-step-list-s1"
                    }, [o("li", [t._v("NFT derivaties like MAYC will be airdropped to the thunderzeta holders")])])])])]), t._v(" "), o("div", {
                        staticClass: "col-lg"
                    }, [o("div", {
                        staticClass: "roadmap roadmap-s1 text-lg-center"
                    }, [o("div", {
                        staticClass: "roadmap-step roadmap-step-s1"
                    }, [o("div", {
                        staticClass: "roadmap-head roadmap-head-s1"
                    }, [o("span", {
                        staticClass: "roadmap-time roadmap-time-s1"
                    }, [t._v("9")]), t._v(" "), o("span", {
                        staticClass: "roadmap-title roadmap-title-s1"
                    }, [t._v("Staking and game")])]), t._v(" "), o("ul", {
                        staticClass: "roadmap-step-list roadmap-step-list-s1"
                    }, [o("li", [t._v("Staking will be launched for thunderzetas to stake the NFTs and earn passive income. gamification and metaverse possiblities will be explored as well for more utilities  ")])])])])])])])])])])])]), t._v(" "), o("div", {
                        staticClass: "nk-ovm shape-n"
                    })])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("section", {
                        staticClass: "section bg-white",
                        attrs: {
                            id: "team"
                        }
                    }, [o("div", {
                        staticClass: "container"
                    }, [o("div", {
                        staticClass: "section-head section-head-s7 text-center wide-auto-sm"
                    }, [o("h2", {
                        staticClass: "title title-thin animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".1"
                        }
                    }, [t._v("Team")])]), t._v(" "), o("div", {
                        staticClass: "nk-block nk-block-team-list"
                    }, [o("div", {
                        staticClass: "section-head section-head-sm section-head-s7 text-center wide-auto-sm"
                    }, [o("h2", {
                        staticClass: "title-md title-thin animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".2"
                        }
                    }, [t._v("Core Team Member")])]), t._v(" "), o("div", {
                        staticClass: "row justify-content-center"
                    }, [o("div", {
                        staticClass: "col-lg-3 col-sm-6"
                    }, [o("div", {
                        staticClass: "team animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".5"
                        }
                    }, [o("div", {
                        staticClass: "team-photo"
                    }, [o("img", {
                        staticClass: "tiltImageSm",
                        attrs: {
                            src: "/assets/zetas/2.png",
                            alt: "team"
                        }
                    }), t._v(" "), o("ul", {
                        staticClass: "team-social"
                    })]), t._v(" "), o("h5", {
                        staticClass: "team-name title title-sm"
                    }, [t._v("Stan")]), t._v(" "), o("span", {
                        staticClass: "team-position"
                    }, [t._v("CEO & Lead Of Marketing")])])]), t._v(" "), o("div", {
                        staticClass: "col-lg-3 col-sm-6"
                    }, [o("div", {
                        staticClass: "team animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".4"
                        }
                    }, [o("div", {
                        staticClass: "team-photo"
                    }, [o("img", {
                        staticClass: "tiltImageSm",
                        attrs: {
                            src: "/assets/zetas/3.png",
                            alt: "team"
                        }
                    }), t._v(" "), o("ul", {
                        staticClass: "team-social"
                    })]), t._v(" "), o("h5", {
                        staticClass: "team-name title title-sm"
                    }, [t._v("Luca")]), t._v(" "), o("span", {
                        staticClass: "team-position"
                    }, [t._v("CTO & Lead Blockchain")])])]), t._v(" "), o("div", {
                        staticClass: "col-lg-3 col-sm-6"
                    }, [o("div", {
                        staticClass: "team animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".3"
                        }
                    }, [o("div", {
                        staticClass: "team-photo"
                    }, [o("img", {
                        staticClass: "tiltImageSm",
                        attrs: {
                            src: "/assets/zetas/4.png",
                            alt: "team"
                        }
                    }), t._v(" "), o("ul", {
                        staticClass: "team-social"
                    })]), t._v(" "), o("h5", {
                        staticClass: "team-name title title-sm"
                    }, [t._v("Tinti")]), t._v(" "), o("span", {
                        staticClass: "team-position"
                    }, [t._v("Software Engineer")])])]), t._v(" "), o("div", {
                        staticClass: "col-lg-3 col-sm-6"
                    }, [o("div", {
                        staticClass: "team animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".6"
                        }
                    }, [o("div", {
                        staticClass: "team-photo"
                    }, [o("img", {
                        staticClass: "tiltImageSm",
                        attrs: {
                            src: "/assets/zetas/5.png",
                            alt: "team"
                        }
                    }), t._v(" "), o("ul", {
                        staticClass: "team-social"
                    })]), t._v(" "), o("h5", {
                        staticClass: "team-name title title-sm"
                    }, [t._v("Cristina")]), t._v(" "), o("span", {
                        staticClass: "team-position"
                    }, [t._v("Adviser & Event Organizer, Community Manager ")])]), t._v(" "), o("div", {
                        staticClass: "team-popup mfp-hide",
                        attrs: {
                            id: "team-popup-4"
                        }
                    }, [o("a", {
                        staticClass: "mfp-close",
                        attrs: {
                            title: "Close"
                        }
                    }, [t._v("×")]), t._v(" "), o("div", {
                        staticClass: "row align-items-start"
                    }, [o("div", {
                        staticClass: "col-md-6"
                    }, [o("div", {
                        staticClass: "team-photo"
                    }, [])])])])])])])])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("section", {
                        staticClass: "section bg-light-alt",
                        attrs: {
                            id: "faqs"
                        }
                    }, [o("div", {
                        staticClass: "container"
                    }, [o("div", {
                        staticClass: "row justify-content-between gutter-vr-30px"
                    }, [o("div", {
                        staticClass: "col-lg-4"
                    }, [o("div", {
                        staticClass: "section-head section-head-s7 wide-auto-sm text-lg-left text-center"
                    }, [o("h2", {
                        staticClass: "title title-thin animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".1"
                        }
                    }, [t._v("FAQs")]), t._v(" "), o("p", {
                        staticClass: "lead animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".2"
                        }
                    }, [t._v("\n                  If you have any other questions, please contact us through our official social media channels.\n                ")])])]), t._v(" "), o("div", {
                        staticClass: "col-lg-7"
                    }, [o("div", {
                        staticClass: "accordion animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".3",
                            id: "faq-36"
                        }
                    }, [o("div", {
                        staticClass: "accordion-item accordion-item-s3"
                    }, [o("h5", {
                        staticClass: "accordion-title accordion-title-sm",
                        attrs: {
                            "data-toggle": "collapse",
                            "data-target": "#faq-36-1"
                        }
                    }, [t._v("What is\n                    the Thunder Zetas project? "), o("span", {
                        staticClass: "accordion-icon accordion-icon-s1"
                    })]), t._v(" "), o("div", {
                        staticClass: "collapse show",
                        attrs: {
                            id: "faq-36-1",
                            "data-parent": "#faq-36"
                        }
                    }, [o("div", {
                        staticClass: "accordion-content"
                    }, [o("p", [t._v(" ThunderZeta, is an exclusive 10,000 only mint-able premium NFT. No two pieces of these 10,000\n                        digital beauties are alike. Each being unique and pristine, there is an order of rarity that\n                        makes certain ones more valuable than the others.")])])])]), t._v(" "), o("div", {
                        staticClass: "accordion-item accordion-item-s3"
                    }, [o("h5", {
                        staticClass: "accordion-title accordion-title-sm collapsed",
                        attrs: {
                            "data-toggle": "collapse",
                            "data-target": "#faq-36-2"
                        }
                    }, [t._v("What is an NFT? "), o("span", {
                        staticClass: "accordion-icon accordion-icon-s1"
                    })]), t._v(" "), o("div", {
                        staticClass: "collapse",
                        attrs: {
                            id: "faq-36-2",
                            "data-parent": "#faq-36"
                        }
                    }, [o("div", {
                        staticClass: "accordion-content"
                    }, [o("p", [t._v("Non Fungible Token, replace Fungible to Replaceable. There you get it! It is unique one of kind\n                        item that is provably rare. Think baseball cards on steroids.")])])])]), t._v(" "), o("div", {
                        staticClass: "accordion-item accordion-item-s3"
                    }, [o("h5", {
                        staticClass: "accordion-title accordion-title-sm collapsed",
                        attrs: {
                            "data-toggle": "collapse",
                            "data-target": "#faq-36-3"
                        }
                    }, [t._v("How much does a zeta cost? "), o("span", {
                        staticClass: "accordion-icon accordion-icon-s1"
                    })]), t._v(" "), o("div", {
                        staticClass: "collapse",
                        attrs: {
                            id: "faq-36-3",
                            "data-parent": "#faq-36"
                        }
                    }, [o("div", {
                        staticClass: "accordion-content"
                    }, [o("p", [t._v("Each zeta costs 5000 TT(+gas) with a maximum mint of 20 Zetas. Find out more about our Mint\n                        Time in our Discord.")])])])]), t._v(" "), o("div", {
                        staticClass: "accordion-item accordion-item-s3"
                    }, [o("h5", {
                        staticClass: "accordion-title accordion-title-sm collapsed",
                        attrs: {
                            "data-toggle": "collapse",
                            "data-target": "#faq-36-4"
                        }
                    }, [t._v("How do I purchase a Zeta? "), o("span", {
                        staticClass: "accordion-icon accordion-icon-s1"
                    })]), t._v(" "), o("div", {
                        staticClass: "collapse",
                        attrs: {
                            id: "faq-36-4",
                            "data-parent": "#faq-36"
                        }
                    }, [o("div", {
                        staticClass: "accordion-content"
                    }, [o("p", [t._v("You will be able to mint directly on our website, using Metamask. Mint Now")])])])]), t._v(" "), o("div", {
                        staticClass: "accordion-item accordion-item-s3"
                    }, [o("h5", {
                        staticClass: "accordion-title accordion-title-sm collapsed",
                        attrs: {
                            "data-toggle": "collapse",
                            "data-target": "#faq-36-5"
                        }
                    }, [t._v("How do I use Metamask?\n                    "), o("span", {
                        staticClass: "accordion-icon accordion-icon-s1"
                    })]), t._v(" "), o("div", {
                        staticClass: "collapse",
                        attrs: {
                            id: "faq-36-5",
                            "data-parent": "#faq-36"
                        }
                    }, [o("div", {
                        staticClass: "accordion-content"
                    }, [o("p", [t._v("just head straight to the source https://metamask.io/")]), t._v(" "), o("p", [t._v("How to view Thundercore token on Metamask\n                        "), o("a", {
                        attrs: {
                            target: "_blank",
                            href: "https://autofarm.gitbook.io/autofarm-network/how-tos/huobi-eco-chain-thundercore/metamask-add-huobi-eco-chain-thundercore-network"
                        }
                    }, [t._v("Click\n                          here")])])])])]), t._v(" "), o("div", {
                        staticClass: "accordion-item accordion-item-s3"
                    }, [o("h5", {
                        staticClass: "accordion-title accordion-title-sm collapsed",
                        attrs: {
                            "data-toggle": "collapse",
                            "data-target": "#faq-36-6"
                        }
                    }, [t._v("Anything else I should know? "), o("span", {
                        staticClass: "accordion-icon accordion-icon-s1"
                    })]), t._v(" "), o("div", {
                        staticClass: "collapse",
                        attrs: {
                            id: "faq-36-6",
                            "data-parent": "#faq-36"
                        }
                    }, [o("div", {
                        staticClass: "accordion-content"
                    }, [o("p", [t._v("Yup, you need some TT. You can buy it on Huobi or even directly from the Bridge\n                        Wallet. ")])])])])])])])])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("section", {
                        staticClass: "section bg-theme tc-light"
                    }, [o("div", {
                        staticClass: "container"
                    }, [o("div", {
                        staticClass: "section-head section-head-s7 text-center wide-auto-sm"
                    }, [o("h2", {
                        staticClass: "title title-thin animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".1"
                        }
                    }, [t._v("Some Rare Zetas")]), t._v(" "), o("p", [t._v("Still available some rare mint before all gone ")])]), t._v(" "), o("div", {
                        staticClass: "nk-block"
                    }, [o("div", {
                        staticClass: "has-carousel carousel-nav-center",
                        attrs: {
                            "data-items": "4",
                            "data-items-tab-p": "2",
                            "data-navs": "true"
                        }
                    }, [o("div", {
                        staticClass: "item"
                    }, [o("div", {
                        staticClass: "team team-s2 team-odd"
                    }, [o("div", {
                        staticClass: "team-photo"
                    }, [o("img", {
                        staticClass: "tiltImageSm",
                        attrs: {
                            src: "/assets/zetas/6.png",
                            alt: "", 
                            "data-tilt": ""
                        }
                    })]), t._v(" "), o("h5", {
                        staticClass: "team-name title title-md"
                    }, [t._v("Zeta #7495")]), t._v(" "), o("span", {
                        staticClass: "team-position"
                    }, [t._v("Rarity Rank #1")])])]), t._v(" "), o("div", {
                        staticClass: "item"
                    }, [o("div", {
                        staticClass: "team team-s2 team-odd"
                    }, [o("div", {
                        staticClass: "team-photo"
                    }, [o("img", {
                        staticClass: "tiltImageSm",
                        attrs: {
                            src: "/assets/zetas/7.png",
                            alt: "", 
                            "data-tilt": ""
                        }
                    })]), t._v(" "), o("h5", {
                        staticClass: "team-name title title-md"
                    }, [t._v("Zeta #3953")]), t._v(" "), o("span", {
                        staticClass: "team-position"
                    }, [t._v("Rarity Rank #2")])])]), t._v(" "), o("div", {
                        staticClass: "item"
                    }, [o("div", {
                        staticClass: "team team-s2 team-odd"
                    }, [o("div", {
                        staticClass: "team-photo"
                    }, [o("img", {
                        staticClass: "tiltImageSm",
                        attrs: {
                            src: "/assets/zetas/8.png",
                            alt: "", 
                            "data-tilt": ""
                        }
                    })]), t._v(" "), o("h5", {
                        staticClass: "team-name title title-md"
                    }, [t._v("Zeta #9606")]), t._v(" "), o("span", {
                        staticClass: "team-position"
                    }, [t._v("Rarity Rank #3")])])]), t._v(" "), o("div", {
                        staticClass: "item"
                    }, [o("div", {
                        staticClass: "team team-s2 team-odd"
                    }, [o("div", {
                        staticClass: "team-photo"
                    }, [o("img", {
                        staticClass: "tiltImageSm",
                        attrs: {
                            src: "/assets/zetas/9.png",
                            alt: "", 
                            "data-tilt": ""
                        }
                    })]), t._v(" "), o("h5", {
                        staticClass: "team-name title title-md"
                    }, [t._v("Zeta #7616")]), t._v(" "), o("span", {
                        staticClass: "team-position"
                    }, [t._v("Rarity Rank #4")])])]), t._v(" "), o("div", {
                        staticClass: "item"
                    }, [o("div", {
                        staticClass: "team team-s2 team-odd"
                    }, [o("div", {
                        staticClass: "team-photo"
                    }, [o("img", {
                        staticClass: "tiltImageSm",
                        attrs: {
                            src: "/assets/zetas/10.png",
                            alt: "", 
                            "data-tilt": ""
                        }
                    })]), t._v(" "), o("h5", {
                        staticClass: "team-name title title-md"
                    }, [t._v("Zeta #4873")]), t._v(" "), o("span", {
                        staticClass: "team-position"
                    }, [t._v("Rarity Rank #5")])])]), t._v(" "), o("div", {
                        staticClass: "item"
                    }, [o("div", {
                        staticClass: "team team-s2 team-odd"
                    }, [o("div", {
                        staticClass: "team-photo"
                    }, [o("img", {
                        staticClass: "tiltImageSm",
                        attrs: {
                            src: "/assets/zetas/11.png",
                            alt: "",
                            "data-tilt": ""
                        }
                    })]), t._v(" "), o("h5", {
                        staticClass: "team-name title title-md"
                    }, [t._v("Zeta #8811")]), t._v(" "), o("span", {
                        staticClass: "team-position"
                    }, [t._v("Rarity Rank #6")])])]), t._v(" "), o("div", {
                        staticClass: "item"
                    }, [o("div", {
                        staticClass: "team team-s2 team-odd"
                    }, [o("div", {
                        staticClass: "team-photo"
                    }, [o("img", {
                        staticClass: "tiltImageSm",
                        attrs: {
                            src: "/assets/zetas/12.png",
                            alt: "", 
                            "data-tilt": ""
                        }
                    })]), t._v(" "), o("h5", {
                        staticClass: "team-name title title-md"
                    }, [t._v("Zeta #8135")]), t._v(" "), o("span", {
                        staticClass: "team-position"
                    }, [t._v("Rarity Rank #7")])])]), t._v(" "), o("div", {
                        staticClass: "item"
                    }, [o("div", {
                        staticClass: "team team-s2 team-odd"
                    }, [o("div", {
                        staticClass: "team-photo"
                    }, [o("img", {
                        staticClass: "tiltImageSm",
                        attrs: {
                            src: "/assets/zetas/13.png",
                            alt: "", 
                            "data-tilt": ""
                        }
                    })]), t._v(" "), o("h5", {
                        staticClass: "team-name title title-md"
                    }, [t._v("Zeta #446")]), t._v(" "), o("span", {
                        staticClass: "team-position"
                    }, [t._v("Rarity Rank #8")])])]), t._v(" "), o("div", {
                        staticClass: "item"
                    }, [o("div", {
                        staticClass: "team team-s2 team-odd"
                    }, [o("div", {
                        staticClass: "team-photo"
                    }, [o("img", {
                        staticClass: "tiltImageSm",
                        attrs: {
                            src: "/assets/zetas/14.png",
                            alt: "", 
                            "data-tilt": ""
                        }
                    })]), t._v(" "), o("h5", {
                        staticClass: "team-name title title-md"
                    }, [t._v("Zeta #2087")]), t._v(" "), o("span", {
                        staticClass: "team-position"
                    }, [t._v("Rarity Rank #9")])])]), t._v(" "), o("div", {
                        staticClass: "item"
                    }, [o("div", {
                        staticClass: "team team-s2 team-odd"
                    }, [o("div", {
                        staticClass: "team-photo"
                    }, [o("img", {
                        staticClass: "tiltImageSm",
                        attrs: {
                            src: "/assets/zetas/15.png",
                            alt: "", 
                            "data-tilt": ""
                        }
                    })]), t._v(" "), o("h5", {
                        staticClass: "team-name title title-md"
                    }, [t._v("Zeta #73")]), t._v(" "), o("span", {
                        staticClass: "team-position"
                    }, [t._v("Rarity Rank #10")])])])])])])])
                }, function () {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("section", {
                        staticClass: "section section-contact bg-light-alt",
                        attrs: {
                            id: "contact"
                        }
                    }, [o("div", {
                        staticClass: "ui-shape ui-shape-s7"
                    }), t._v(" "), o("div", {
                        staticClass: "container"
                    }, [o("div", {
                        staticClass: "section-head text-center wide-auto"
                    }, [o("h4", {
                        staticClass: "title title-semibold animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".1"
                        }
                    }, [t._v("Contact Thunder Zetas")]), t._v(" "), o("p", {
                        staticClass: "animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".2"
                        }
                    }, [t._v("Any question? Reach out to us and we’ll get back\n              to you shortly.")])]), t._v(" "), o("div", {
                        staticClass: "nk-block block-contact"
                    }, [o("div", {
                        staticClass: "row justify-content-center text-center"
                    }, [o("div", {
                        staticClass: "col-lg-12 col-xl-12"
                    }, [o("ul", {
                        staticClass: "contact-list contact-list-s1 flex-wrap flex-md-nowrap pdb-l"
                    }, [o("li", {
                        staticClass: "animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".3"
                        }
                    }, [o("em", {
                        staticClass: "contact-icon fab fa-discord"
                    }), t._v(" "), o("div", {
                        staticClass: "contact-text"
                    }, [o("a", {
                        attrs: {
                            href: "https://discord.gg/WUfgcfrvSv",
                            target: "_blank"
                        }
                    }, [o("span", [t._v("Join our discord")])])])]), t._v(" "), o("li", {
                        staticClass: "animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".4"
                        }
                    }, [o("em", {
                        staticClass: "contact-icon fab fa-telegram"
                    }), t._v(" "), o("div", {
                        staticClass: "contact-text"
                    }, [o("a", {
                        attrs: {
                            href: "https://t.me/thundercorezetas",
                            target: "_blank"
                        }
                    }, [o("span", [t._v("Join our Telegram")])])])]), t._v(" "), o("li", {
                        staticClass: "animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".5"
                        }
                    }, [o("em", {
                        staticClass: "contact-icon fab fa-twitter"
                    }), t._v(" "), o("div", {
                        staticClass: "contact-text"
                    }, [o("a", {
                        attrs: {
                            href: "https://twitter.com/thundercorezetas",
                            target: "_blank"
                        }
                    }, [o("span", [t._v("Join our Twitter")])])])]), t._v(" "), o("li", {
                        staticClass: "animated",
                        attrs: {
                            "data-animate": "fadeInUp",
                            "data-delay": ".5"
                        }
                    }, [o("em", {
                        staticClass: "contact-icon fab fa-medium"
                    }), t._v(" "), o("div", {
                        staticClass: "contact-text"
                    }, [o("a", {
                        attrs: {
                            href: "https://thundercorezetas.medium.com/",
                            target: "_blank"
                        }
                    }, [o("span", [t._v("Join our Medium")])])])])])])])])])])
                }], !1, null, null, null);
            e.default = component.exports
        }
    }
]);