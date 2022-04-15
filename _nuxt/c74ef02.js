(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        743: function(e, t, r) {
            var content = r(761);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(234).default)("cb154d66", content, !0, {
                sourceMap: !1
            })
        },
        744: function(e, t, r) {
            var content = r(763);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(234).default)("08701428", content, !0, {
                sourceMap: !1
            })
        },
        760: function(e, t, r) {
            "use strict";
            r(743)
        },
        761: function(e, t, r) {
            var n = r(233)(!1);
            n.push([e.i, ".msg-alert{margin-top:20px;width:auto}", ""]), e.exports = n
        },
        762: function(e, t, r) {
            "use strict";
            r(744)
        },
        763: function(e, t, r) {
            var n = r(233)(!1);
            n.push([e.i, ".img-detail{width:65%}.img-wrap-detail{text-align:center}.card.bg-azalea-grad-alt{margin-top:32px}.my-swal{z-index:9999}#ape{margin-bottom:70px}", ""]), e.exports = n
        },
        774: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(14),
                o = (r(55), r(104), r(759)),
                c = r.n(o),
                l = r(742),
                d = r.n(l),
                f = {
                    name: "detail",
                    head: function() {
                        return {
                            title: "PolygonApes | #" + this.$route.params.id,
                            meta: [{
                                charset: "utf-8"
                            }, {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                            }, {
                                hid: "description",
                                name: "description",
                                content: "Bored Ape Yacht Club comes to polygon. Check out my Bored Ape from #PolygonApes — Ape in with me and join the minting 🐒"
                            }, {
                                hid: "image",
                                name: "image",
                                content: this.ipfs
                            }, {
                                hid: "twitter_card",
                                name: "twitter:card",
                                content: "summary"
                            }, {
                                hid: "twitter_title",
                                name: "twitter:title",
                                content: "PolygonApes | #" + this.$route.params.id
                            }, {
                                hid: "twitter_description",
                                name: "twitter:description",
                                content: "Bored Ape Yacht Club comes to polygon. Check out my Bored Ape from #PolygonApes — Ape in with me and join the minting 🐒 | Bored ape #" + this.$route.params.id
                            }, {
                                hid: "twitter_image_src",
                                name: "twitter:image:src",
                                content: this.ipfs
                            }, {
                                hid: "twitter_image_src",
                                name: "twitter:image:src",
                                content: this.ipfs
                            }, {
                                hid: "og_title",
                                name: "og_title",
                                content: "PolygonApes | Bored Ape" + this.$route.params.id
                            }, {
                                hid: "og_description",
                                name: "og:description",
                                content: "Bored Ape Yacht Club comes to polygon. Check out my Bored Ape from #PolygonApes — Ape in with me and join the minting 🐒 | Bored ape #" + this.$route.params.id
                            }, {
                                hid: "og_image",
                                name: "og:image",
                                content: this.ipfs
                            }, {
                                hid: "og_image",
                                name: "og:image:alt",
                                content: "Bored Ape" + this.$route.params.id
                            }, {
                                hid: "og_image_width",
                                name: "og:image:width",
                                content: 1024
                            }, {
                                hid: "og_image_height",
                                name: "og:image:height",
                                content: 512
                            }, {
                                hid: "og_url",
                                name: "og:url",
                                content: "https://polygonapes.com/detail/" + this.$route.params.id
                            }, {
                                hid: "og_site_name",
                                name: "og:site_name",
                                content: "PolygonApes"
                            }, {
                                hid: "og_type",
                                name: "og:type",
                                content: "website"
                            }, {
                                hid: "author",
                                name: "author",
                                content: "Polygon Bayc"
                            }]
                        }
                    },
                    components: {
                        Swal: c.a,
                        VueCompareImage: d.a
                    },
                    data: function() {
                        return {
                            offerPrice: 0,
                            rank: "",
                            transactionHash: "",
                            showAlert: "",
                            alertMessage: "",
                            ipfs: "",
                            is_transfering: !1,
                            walletStatus: !1,
                            btn_loading: !1,
                            connectingWallet: !1,
                            currentPunk: "",
                            is_load_this_punk: !1,
                            is_it_for_bidder: !1,
                            punk_loading: !0,
                            punks_attributes: {},
                            token_owner: !1,
                            is_for_sale: !1,
                            isCanceling: !1,
                            is_it_mine: !1,
                            bid: {},
                            offer: {},
                            isBuying: !1,
                            is_bidding: !1,
                            isOffering: !1,
                            showBidModal: !1,
                            canShowOffer: !1,
                            canShowBid: !1
                        }
                    },
                    created: function() {
                        var e = this;
                        this.btn_loading = !0, setInterval((function() {
                            e.walletStatus = e.$walletManager.walletStatus, e.btn_loading = !1
                        }), 1e3)
                    },
                    mounted: function() {
                        NioApp.components.docReady[21](jQuery), NioApp.components.winLoad[0](jQuery), NioApp.components.docReady[20](jQuery), NioApp.components.docReady[3](jQuery), NioApp.components.docReady[14](jQuery), NioApp.components.docReady[21](jQuery), this.initData(), this.updateApe()
                    },
                    methods: {
                        initData: function() {
                            var e = this;
                            if (this.$route.params.id >= 0 && this.$route.params.id < 1e4) {
                                this.rank = JSON.parse(JSON.stringify(this.$apeRanks))[0][this.$route.params.id];
                                var t = JSON.parse(JSON.stringify(this.$apeList[this.$route.params.id]));
                                this.ipfs = t.image, this.currentPunk = JSON.parse(JSON.stringify(this.$apeList[this.$route.params.id])), setTimeout((function() {
                                    e.walletStatus = e.$walletManager.walletStatus, e.is_load_this_punk || (e.is_load_this_punk = !0, e.loadData())
                                }), 100)
                            } else window.location.href = "/"
                        },
                        tryToConnect: function() {
                            this.connectingWallet = !0, this.$walletManager.tryToConnect(), this.walletStatus && (this.connectingWallet = !1)
                        },
                        updateApe: function() {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function t() {
                                var r;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.$axios.$get("https://polygonapes.com/backend/update/?token_id=" + e.$route.params.id);
                                        case 2:
                                            r = t.sent, console.log("apes updated ... ", r);
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        loadData: function() {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function t() {
                                var r, n;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return e.canShowOffer = !1, e.offer = {}, t.next = 4, e.$walletManager.getSelectedWallet();
                                        case 4:
                                            return r = t.sent, console.log("-------selectedWallet--------", r), t.next = 8, window.contractGlobal.methods.ownerOf(e.$route.params.id).call();
                                        case 8:
                                            return e.token_owner = t.sent, console.log("-------token_owner--------", e.token_owner), e.is_it_mine = !1, r.toLowerCase() === e.token_owner.toLowerCase() && (e.is_it_mine = !0), t.prev = 12, t.next = 15, window.contractGlobal.methods.getMarketLotInfo(e.$route.params.id).call();
                                        case 15:
                                            n = t.sent, e.offer = n[0] ? n : null, e.offerPrice = window.web3.utils.fromWei(e.offer.price), t.next = 23;
                                            break;
                                        case 20:
                                            t.prev = 20, t.t0 = t.catch(12), console.log(t.t0);
                                        case 23:
                                            console.log("------------------------", e.offer), e.offer.owner.toLowerCase() === e.token_owner.toLowerCase() && (e.canShowOffer = !0);
                                        case 25:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [12, 20]
                                ])
                            })))()
                        },
                        showBid: function() {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function t() {
                                var r;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.$walletManager.getSelectedWallet();
                                        case 2:
                                            r = t.sent, c.a.fire({
                                                input: "text",
                                                title: "Make a bid",
                                                text: "Enter Bid Price",
                                                type: "warning",
                                                showCancelButton: !0,
                                                showLoaderOnConfirm: !0,
                                                preConfirm: function(t) {
                                                    e.is_bidding || (e.is_bidding = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function n() {
                                                        return regeneratorRuntime.wrap((function(n) {
                                                            for (;;) switch (n.prev = n.next) {
                                                                case 0:
                                                                    if (n.prev = 0, !(e.bid && t >= e.bid.value && t >= 1) && e.bid) {
                                                                        n.next = 6;
                                                                        break
                                                                    }
                                                                    return n.next = 4, window.contract.methods.enterBidForPunk(e.$route.params.id).send({
                                                                        from: r,
                                                                        value: t
                                                                    }, (function(t, r) {
                                                                        r ? (c.a.fire({
                                                                            title: "Bid successfully created",
                                                                            text: "Refresh page after 'Enter Bid For Punk' Activity",
                                                                            icon: "success",
                                                                            confirmButtonText: "Cool"
                                                                        }), e.is_bidding = !1) : c.a.fire({
                                                                            title: "Error!",
                                                                            text: "Bid Rejected",
                                                                            icon: "error",
                                                                            confirmButtonText: "Cool"
                                                                        }), e.is_bidding = !1
                                                                    }));
                                                                case 4:
                                                                    n.next = 7;
                                                                    break;
                                                                case 6:
                                                                    t < 100 ? (c.a.fire({
                                                                        title: "Error!",
                                                                        text: "Bid value must be more than 100",
                                                                        icon: "error",
                                                                        confirmButtonText: "Cool"
                                                                    }), e.is_bidding = !1) : (c.a.fire({
                                                                        title: "Bid value must be more than Active bid",
                                                                        text: "".concat(window.web3.utils.fromWei(t)),
                                                                        icon: "error",
                                                                        confirmButtonText: "Cool"
                                                                    }), e.is_bidding = !1);
                                                                case 7:
                                                                    n.next = 12;
                                                                    break;
                                                                case 9:
                                                                    n.prev = 9, n.t0 = n.catch(0), console.log(n.t0);
                                                                case 12:
                                                                    e.is_bidding = !1;
                                                                case 13:
                                                                case "end":
                                                                    return n.stop()
                                                            }
                                                        }), n, null, [
                                                            [0, 9]
                                                        ])
                                                    }))), 500), e.is_bidding = !0)
                                                },
                                                allowOutsideClick: function() {
                                                    return !c.a.isLoading()
                                                }
                                            });
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        getPunkOffer: function() {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function t() {
                                var r;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, window.contract.methods.punksOfferedForSale(e.$route.params.id).call();
                                        case 3:
                                            r = t.sent, e.offer = r[0] ? r : null, t.next = 10;
                                            break;
                                        case 7:
                                            t.prev = 7, t.t0 = t.catch(0), console.log(t.t0);
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 7]
                                ])
                            })))()
                        },
                        showNewOffer: function() {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            e.showAlert = "", e.alertMessage = "", e.transactionHash = "", c.a.fire({
                                                customClass: {
                                                    container: "my-swal"
                                                },
                                                input: "text",
                                                title: "List For Sale",
                                                text: "Enter Polygon Price",
                                                type: "warning",
                                                showCancelButton: !0,
                                                showLoaderOnConfirm: !0,
                                                preConfirm: function(t) {
                                                    e.isOffering || (e.isOffering = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function r() {
                                                        return regeneratorRuntime.wrap((function(r) {
                                                            for (;;) switch (r.prev = r.next) {
                                                                case 0:
                                                                    try {
                                                                        setTimeout(Object(n.a)(regeneratorRuntime.mark((function r() {
                                                                            var o, l, d, f;
                                                                            return regeneratorRuntime.wrap((function(r) {
                                                                                for (;;) switch (r.prev = r.next) {
                                                                                    case 0:
                                                                                        return r.prev = 0, r.next = 3, e.$walletManager.getSelectedWallet();
                                                                                    case 3:
                                                                                        return o = r.sent, r.next = 6, e._checkApprovalForAll();
                                                                                    case 6:
                                                                                        if (l = r.sent, d = !1, l) {
                                                                                            r.next = 14;
                                                                                            break
                                                                                        }
                                                                                        return r.next = 11, e._firstApproveThen();
                                                                                    case 11:
                                                                                        d = r.sent, r.next = 15;
                                                                                        break;
                                                                                    case 14:
                                                                                        d = !0;
                                                                                    case 15:
                                                                                        d && (f = window.web3.utils.toWei(t), window.contract.methods.putOnMarket(e.$route.params.id, f).send({
                                                                                            from: o
                                                                                        }, function() {
                                                                                            var t = Object(n.a)(regeneratorRuntime.mark((function t(r, n) {
                                                                                                var o;
                                                                                                return regeneratorRuntime.wrap((function(t) {
                                                                                                    for (;;) switch (t.prev = t.next) {
                                                                                                        case 0:
                                                                                                            if (r ? (e.showAlert = "error", e.alertMessage = "Error: please check your wallet") : (e.showAlert = "success", e.alertMessage = "Your transaction has been broadcast to network please wait...!"), !n) {
                                                                                                                t.next = 11;
                                                                                                                break
                                                                                                            }
                                                                                                            o = null;
                                                                                                        case 3:
                                                                                                            if (null != o) {
                                                                                                                t.next = 9;
                                                                                                                break
                                                                                                            }
                                                                                                            return t.next = 6, web3.eth.getTransactionReceipt(n);
                                                                                                        case 6:
                                                                                                            o = t.sent, t.next = 3;
                                                                                                            break;
                                                                                                        case 9:
                                                                                                            o && o.status && (e.showAlert = "done", e.transactionHash = o.transactionHash, e.is_load_this_punk = !1, e.initData(), e.updateApe()), o && !o.status && (e.showAlert = "error", e.alertMessage = "Error: please check transaction", e.transactionHash = o.transactionHash);
                                                                                                        case 11:
                                                                                                            e.isOffering = !1;
                                                                                                        case 12:
                                                                                                        case "end":
                                                                                                            return t.stop()
                                                                                                    }
                                                                                                }), t)
                                                                                            })));
                                                                                            return function(e, r) {
                                                                                                return t.apply(this, arguments)
                                                                                            }
                                                                                        }())), r.next = 23;
                                                                                        break;
                                                                                    case 18:
                                                                                        r.prev = 18, r.t0 = r.catch(0), console.log(r.t0), c.a.fire({
                                                                                            customClass: {
                                                                                                container: "my-swal"
                                                                                            },
                                                                                            title: "Error!",
                                                                                            text: "Error Please Check console",
                                                                                            icon: "error",
                                                                                            confirmButtonText: "Okay"
                                                                                        }), e.isOffering = !1;
                                                                                    case 23:
                                                                                        return r.prev = 23, r.finish(23);
                                                                                    case 25:
                                                                                    case "end":
                                                                                        return r.stop()
                                                                                }
                                                                            }), r, null, [
                                                                                [0, 18, 23, 25]
                                                                            ])
                                                                        }))), 500)
                                                                    } catch (t) {
                                                                        console.log(t), e.isOffering = !1
                                                                    }
                                                                case 1:
                                                                case "end":
                                                                    return r.stop()
                                                            }
                                                        }), r)
                                                    }))), 500), e.isOffering = !0)
                                                },
                                                allowOutsideClick: function() {
                                                    return !c.a.isLoading()
                                                }
                                            });
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        showOffer: function() {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            c.a.fire({
                                                customClass: {
                                                    container: "my-swal"
                                                },
                                                input: "text",
                                                title: "Make an offer",
                                                text: "Enter Offer Price",
                                                type: "warning",
                                                showCancelButton: !0,
                                                showLoaderOnConfirm: !0,
                                                preConfirm: function(t) {
                                                    e.is_bidding || (e.is_bidding = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function r() {
                                                        var n, o;
                                                        return regeneratorRuntime.wrap((function(r) {
                                                            for (;;) switch (r.prev = r.next) {
                                                                case 0:
                                                                    if (r.prev = 0, !(t > 2)) {
                                                                        r.next = 15;
                                                                        break
                                                                    }
                                                                    return r.next = 4, e.$walletManager.getSelectedWallet();
                                                                case 4:
                                                                    return n = r.sent, r.next = 7, e._checkApprovalForAll();
                                                                case 7:
                                                                    if (o = r.sent, !1, !(!!o || e._firstApproveThen())) {
                                                                        r.next = 13;
                                                                        break
                                                                    }
                                                                    return r.next = 13, window.contract.methods.offerPunkForSale(e.$route.params.id, t).send({
                                                                        from: n
                                                                    }, (function(t, r) {
                                                                        r ? (c.a.fire({
                                                                            customClass: {
                                                                                container: "my-swal"
                                                                            },
                                                                            title: "New Offer successfully created!",
                                                                            text: "Refresh page after 'Offer Punk For Sale' Activity",
                                                                            icon: "success",
                                                                            confirmButtonText: "Cool"
                                                                        }), e.is_bidding = !1) : (c.a.fire({
                                                                            customClass: {
                                                                                container: "my-swal"
                                                                            },
                                                                            title: "Error!",
                                                                            text: "Bid rejected",
                                                                            icon: "error",
                                                                            confirmButtonText: "Cool"
                                                                        }), e.is_bidding = !1), e.isOffering = !1
                                                                    }));
                                                                case 13:
                                                                    r.next = 16;
                                                                    break;
                                                                case 15:
                                                                    t < 2 ? (c.a.fire({
                                                                        customClass: {
                                                                            container: "my-swal"
                                                                        },
                                                                        title: "Error!",
                                                                        text: "Bid value must be more than 2",
                                                                        icon: "error",
                                                                        confirmButtonText: "Cool"
                                                                    }), e.is_bidding = !1) : (c.a.fire({
                                                                        customClass: {
                                                                            container: "my-swal"
                                                                        },
                                                                        title: "Bid value must be more than Active bid",
                                                                        text: "".concat(window.web3.utils.fromWei(t)),
                                                                        icon: "error",
                                                                        confirmButtonText: "Cool"
                                                                    }), e.is_bidding = !1);
                                                                case 16:
                                                                    r.next = 21;
                                                                    break;
                                                                case 18:
                                                                    r.prev = 18, r.t0 = r.catch(0), console.log(r.t0);
                                                                case 21:
                                                                    e.is_bidding = !1;
                                                                case 22:
                                                                case "end":
                                                                    return r.stop()
                                                            }
                                                        }), r, null, [
                                                            [0, 18]
                                                        ])
                                                    }))), 500), e.is_bidding = !0)
                                                },
                                                allowOutsideClick: function() {
                                                    return !c.a.isLoading()
                                                }
                                            });
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        _checkApprovalForAll: function() {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function t() {
                                var r, a;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.$walletManager.getSelectedWallet();
                                        case 2:
                                            return r = t.sent, t.prev = 3, t.next = 6, window.contract.methods.isApprovedForAll(r, e.$walletManager.myAddress).call();
                                        case 6:
                                            return a = t.sent, t.abrupt("return", a);
                                        case 10:
                                            t.prev = 10, t.t0 = t.catch(3), console.log(t.t0);
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [3, 10]
                                ])
                            })))()
                        },
                        _firstApproveThen: function() {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function t() {
                                var r;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.$walletManager.getSelectedWallet();
                                        case 2:
                                            return r = t.sent, t.next = 5, window.contract.methods.setApprovalForAll(e.$walletManager.myAddress, !0).send({
                                                from: r
                                            }, (function(t, r) {
                                                if (r) return !0;
                                                c.a.fire({
                                                    customClass: {
                                                        container: "my-swal"
                                                    },
                                                    title: "Error!",
                                                    text: "Offer Rejected",
                                                    icon: "error",
                                                    confirmButtonText: "Cool"
                                                }), e.isOffering = !1
                                            }));
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        CancelOffer: function() {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            c.a.fire({
                                                customClass: {
                                                    container: "my-swal"
                                                },
                                                title: "Remove From Sale List",
                                                text: "Are you Sure?",
                                                type: "danger",
                                                showCancelButton: !0,
                                                showLoaderOnConfirm: !0,
                                                preConfirm: function() {
                                                    e.isCanceling || (e.isCanceling = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function t() {
                                                        var r;
                                                        return regeneratorRuntime.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.prev = 0, t.next = 3, e.$walletManager.getSelectedWallet();
                                                                case 3:
                                                                    r = t.sent, setTimeout(Object(n.a)(regeneratorRuntime.mark((function t() {
                                                                        return regeneratorRuntime.wrap((function(t) {
                                                                            for (;;) switch (t.prev = t.next) {
                                                                                case 0:
                                                                                    return t.prev = 0, t.next = 3, window.contract.methods.withdrawFromMarket(e.$route.params.id).send({
                                                                                        from: r
                                                                                    }, (function(t, r) {
                                                                                        r ? c.a.fire({
                                                                                            title: "Ape no longer for Sale",
                                                                                            text: "Refresh page",
                                                                                            icon: "success",
                                                                                            confirmButtonText: "Cool"
                                                                                        }) : c.a.fire({
                                                                                            customClass: {
                                                                                                container: "my-swal"
                                                                                            },
                                                                                            title: "Error!",
                                                                                            text: "Offer Cancellation failed",
                                                                                            icon: "error",
                                                                                            confirmButtonText: "Cool"
                                                                                        }), e.isCanceling = !1
                                                                                    }));
                                                                                case 3:
                                                                                    t.next = 8;
                                                                                    break;
                                                                                case 5:
                                                                                    t.prev = 5, t.t0 = t.catch(0), console.log(t.t0);
                                                                                case 8:
                                                                                case "end":
                                                                                    return t.stop()
                                                                            }
                                                                        }), t, null, [
                                                                            [0, 5]
                                                                        ])
                                                                    }))), 500), t.next = 10;
                                                                    break;
                                                                case 7:
                                                                    t.prev = 7, t.t0 = t.catch(0), console.log(t.t0);
                                                                case 10:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t, null, [
                                                            [0, 7]
                                                        ])
                                                    }))), 500), e.isCanceling = !0)
                                                },
                                                allowOutsideClick: function() {
                                                    return !c.a.isLozading()
                                                }
                                            });
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        AcceptOffer: function() {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function t() {
                                var r;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.$walletManager.getSelectedWallet();
                                        case 2:
                                            r = t.sent, e.isBuying = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function t() {
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (t.prev = 0, !e.offer) {
                                                                t.next = 6;
                                                                break
                                                            }
                                                            return t.next = 4, window.contract.methods.buyFromMarket(e.$route.params.id, r).send({
                                                                from: r,
                                                                value: e.offer[3]
                                                            }, (function(t, r) {
                                                                r ? c.a.fire({
                                                                    customClass: {
                                                                        container: "my-swal"
                                                                    },
                                                                    title: "Ape Was Bought",
                                                                    text: "Ape was bought for ".concat(window.web3.utils.fromWei(e.offer[3])),
                                                                    icon: "success",
                                                                    confirmButtonText: "Cool"
                                                                }) : c.a.fire({
                                                                    customClass: {
                                                                        container: "my-swal"
                                                                    },
                                                                    title: "Error!",
                                                                    text: "request failed",
                                                                    icon: "error",
                                                                    confirmButtonText: "Cool"
                                                                }), e.isBuying = !1
                                                            }));
                                                        case 4:
                                                            t.next = 7;
                                                            break;
                                                        case 6:
                                                            c.a.fire({
                                                                customClass: {
                                                                    container: "my-swal"
                                                                },
                                                                title: "Error!",
                                                                text: "Ape has not any Offer",
                                                                icon: "error",
                                                                confirmButtonText: "Cool"
                                                            });
                                                        case 7:
                                                            t.next = 12;
                                                            break;
                                                        case 9:
                                                            t.prev = 9, t.t0 = t.catch(0), console.log(t.t0);
                                                        case 12:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t, null, [
                                                    [0, 9]
                                                ])
                                            }))), 500);
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        CancelMyBid: function() {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            c.a.fire({
                                                customClass: {
                                                    container: "my-swal"
                                                },
                                                title: "Cancel my bid",
                                                text: "Are you Sure?",
                                                type: "danger",
                                                showCancelButton: !0,
                                                showLoaderOnConfirm: !0,
                                                preConfirm: function() {
                                                    e.isCanceling || (e.isCanceling = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function t() {
                                                        var r;
                                                        return regeneratorRuntime.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.prev = 0, t.next = 3, e.$walletManager.getSelectedWallet();
                                                                case 3:
                                                                    r = t.sent, setTimeout(Object(n.a)(regeneratorRuntime.mark((function t() {
                                                                        return regeneratorRuntime.wrap((function(t) {
                                                                            for (;;) switch (t.prev = t.next) {
                                                                                case 0:
                                                                                    return t.prev = 0, t.next = 3, window.contract.methods.withdrawBidForPunk(e.$route.params.id).send({
                                                                                        from: r
                                                                                    }, (function(t, r) {
                                                                                        r ? c.a.fire({
                                                                                            title: "Withdraw Bid Done",
                                                                                            text: "Refresh page after 'Ape No Longer For Sale' Activity",
                                                                                            icon: "success",
                                                                                            confirmButtonText: "Cool"
                                                                                        }) : c.a.fire({
                                                                                            title: "Error!",
                                                                                            text: "Bid Cancellation failed",
                                                                                            icon: "error",
                                                                                            confirmButtonText: "Cool"
                                                                                        }), e.isCanceling = !1
                                                                                    }));
                                                                                case 3:
                                                                                    t.next = 8;
                                                                                    break;
                                                                                case 5:
                                                                                    t.prev = 5, t.t0 = t.catch(0), console.log(t.t0);
                                                                                case 8:
                                                                                case "end":
                                                                                    return t.stop()
                                                                            }
                                                                        }), t, null, [
                                                                            [0, 5]
                                                                        ])
                                                                    }))), 500), t.next = 10;
                                                                    break;
                                                                case 7:
                                                                    t.prev = 7, t.t0 = t.catch(0), console.log(t.t0);
                                                                case 10:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t, null, [
                                                            [0, 7]
                                                        ])
                                                    }))), 500), e.isCanceling = !0)
                                                },
                                                allowOutsideClick: function() {
                                                    return !c.a.isLozading()
                                                }
                                            });
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        AcceptBid: function() {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.$walletManager.getSelectedWallet();
                                        case 2:
                                            t.sent, c.a.fire({
                                                title: "Accept Bid",
                                                text: "Accept Current Bid",
                                                type: "warning",
                                                showCancelButton: !0,
                                                showLoaderOnConfirm: !0,
                                                preConfirm: function() {
                                                    e.is_bidding || (e.is_bidding = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function t() {
                                                        var r, n;
                                                        return regeneratorRuntime.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.prev = 0, t.next = 3, e.$walletManager.getSelectedWallet();
                                                                case 3:
                                                                    return r = t.sent, t.next = 6, e._checkApprovalForAll();
                                                                case 6:
                                                                    if (n = t.sent, !e.bid) {
                                                                        t.next = 13;
                                                                        break
                                                                    }
                                                                    if (!1, !(!!n || e._firstApproveThen())) {
                                                                        t.next = 13;
                                                                        break
                                                                    }
                                                                    return t.next = 13, window.contract.methods.acceptBidForPunk(e.$route.params.id, 0).send({
                                                                        from: r
                                                                    }, (function(t, r) {
                                                                        r ? (c.a.fire({
                                                                            title: "Ape Was Sold!",
                                                                            text: "Refresh page after 'Offer Punk For Sale' Activity",
                                                                            icon: "success",
                                                                            confirmButtonText: "Cool"
                                                                        }), e.is_bidding = !1) : (c.a.fire({
                                                                            title: "Error!",
                                                                            text: "rejected",
                                                                            icon: "error",
                                                                            confirmButtonText: "Cool"
                                                                        }), e.is_bidding = !1), e.isOffering = !1
                                                                    }));
                                                                case 13:
                                                                    t.next = 18;
                                                                    break;
                                                                case 15:
                                                                    t.prev = 15, t.t0 = t.catch(0), console.log(t.t0);
                                                                case 18:
                                                                    e.is_bidding = !1;
                                                                case 19:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t, null, [
                                                            [0, 15]
                                                        ])
                                                    }))), 500), e.is_bidding = !0)
                                                },
                                                allowOutsideClick: function() {
                                                    return !c.a.isLoading()
                                                }
                                            });
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        ShowTransfer: function() {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            e.showAlert = "", e.alertMessage = "", e.transactionHash = "", c.a.fire({
                                                customClass: {
                                                    container: "my-swal"
                                                },
                                                input: "text",
                                                title: "Transfer Your PolygonApes",
                                                text: "Enter Wallet Address",
                                                type: "warning",
                                                showCancelButton: !0,
                                                showLoaderOnConfirm: !0,
                                                preConfirm: function(t) {
                                                    e.is_transfering || (e.is_transfering = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function r() {
                                                        var o;
                                                        return regeneratorRuntime.wrap((function(r) {
                                                            for (;;) switch (r.prev = r.next) {
                                                                case 0:
                                                                    if (r.prev = 0, !window.web3.utils.isAddress(t)) {
                                                                        r.next = 9;
                                                                        break
                                                                    }
                                                                    return r.next = 5, e.$walletManager.getSelectedWallet();
                                                                case 5:
                                                                    o = r.sent, t.toLowerCase() == o.toLowerCase() ? c.a.fire({
                                                                        customClass: {
                                                                            container: "my-swal"
                                                                        },
                                                                        title: "Transfer Failed!",
                                                                        text: "You cant send to your current wallet",
                                                                        icon: "error",
                                                                        confirmButtonText: "Okay"
                                                                    }) : setTimeout(Object(n.a)(regeneratorRuntime.mark((function r() {
                                                                        return regeneratorRuntime.wrap((function(r) {
                                                                            for (;;) switch (r.prev = r.next) {
                                                                                case 0:
                                                                                    try {
                                                                                        window.contract.methods.safeTransferFrom(o, t, e.$route.params.id).send({
                                                                                            from: o
                                                                                        }, function() {
                                                                                            var t = Object(n.a)(regeneratorRuntime.mark((function t(r, n) {
                                                                                                var o;
                                                                                                return regeneratorRuntime.wrap((function(t) {
                                                                                                    for (;;) switch (t.prev = t.next) {
                                                                                                        case 0:
                                                                                                            if (r ? (e.showAlert = "error", e.alertMessage = "Error: please check your wallet") : (e.showAlert = "success", e.alertMessage = "Your transaction has been broadcast to network please wait...!"), !n) {
                                                                                                                t.next = 11;
                                                                                                                break
                                                                                                            }
                                                                                                            o = null;
                                                                                                        case 3:
                                                                                                            if (null != o) {
                                                                                                                t.next = 9;
                                                                                                                break
                                                                                                            }
                                                                                                            return t.next = 6, web3.eth.getTransactionReceipt(n);
                                                                                                        case 6:
                                                                                                            o = t.sent, t.next = 3;
                                                                                                            break;
                                                                                                        case 9:
                                                                                                            o && o.status && (e.showAlert = "transferDone", e.transactionHash = o.transactionHash, e.is_load_this_punk = !1, e.initData(), e.updateApe()), o && !o.status && (e.showAlert = "error", e.alertMessage = "Error: please check transaction", e.transactionHash = o.transactionHash);
                                                                                                        case 11:
                                                                                                            e.is_transfering = !1;
                                                                                                        case 12:
                                                                                                        case "end":
                                                                                                            return t.stop()
                                                                                                    }
                                                                                                }), t)
                                                                                            })));
                                                                                            return function(e, r) {
                                                                                                return t.apply(this, arguments)
                                                                                            }
                                                                                        }())
                                                                                    } catch (t) {
                                                                                        console.log(t), c.a.fire({
                                                                                            customClass: {
                                                                                                container: "my-swal"
                                                                                            },
                                                                                            title: "Error!",
                                                                                            text: "Wallet address is not valid",
                                                                                            icon: "error",
                                                                                            confirmButtonText: "Okay"
                                                                                        }), e.is_transfering = !1
                                                                                    }
                                                                                case 1:
                                                                                case "end":
                                                                                    return r.stop()
                                                                            }
                                                                        }), r)
                                                                    }))), 500), r.next = 11;
                                                                    break;
                                                                case 9:
                                                                    c.a.fire({
                                                                        customClass: {
                                                                            container: "my-swal"
                                                                        },
                                                                        title: "Error!",
                                                                        text: "Wallet address is not valid",
                                                                        icon: "error",
                                                                        confirmButtonText: "Okay"
                                                                    }), e.is_transfering = !1;
                                                                case 11:
                                                                    r.next = 17;
                                                                    break;
                                                                case 13:
                                                                    r.prev = 13, r.t0 = r.catch(0), console.log(r.t0), e.is_transfering = !1;
                                                                case 17:
                                                                case "end":
                                                                    return r.stop()
                                                            }
                                                        }), r, null, [
                                                            [0, 13]
                                                        ])
                                                    }))), 500), e.is_transfering = !0)
                                                },
                                                allowOutsideClick: function() {
                                                    return !c.a.isLoading()
                                                }
                                            });
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        NewCancelOffer: function() {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            c.a.fire({
                                                customClass: {
                                                    container: "my-swal"
                                                },
                                                title: "Remove From Sale List",
                                                text: "Are you Sure?",
                                                type: "danger",
                                                showCancelButton: !0,
                                                showLoaderOnConfirm: !0,
                                                preConfirm: function() {
                                                    e.isCanceling || (e.isCanceling = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function t() {
                                                        var r;
                                                        return regeneratorRuntime.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.prev = 0, t.next = 3, e.$walletManager.getSelectedWallet();
                                                                case 3:
                                                                    r = t.sent, setTimeout(Object(n.a)(regeneratorRuntime.mark((function t() {
                                                                        return regeneratorRuntime.wrap((function(t) {
                                                                            for (;;) switch (t.prev = t.next) {
                                                                                case 0:
                                                                                    return t.prev = 0, t.next = 3, window.contract.methods.withdrawFromMarket(e.$route.params.id).send({
                                                                                        from: r
                                                                                    }, function() {
                                                                                        var t = Object(n.a)(regeneratorRuntime.mark((function t(r, n) {
                                                                                            var o;
                                                                                            return regeneratorRuntime.wrap((function(t) {
                                                                                                for (;;) switch (t.prev = t.next) {
                                                                                                    case 0:
                                                                                                        if (r ? (e.showAlert = "error", e.alertMessage = "Error: please check your wallet") : (e.showAlert = "success", e.alertMessage = "Your transaction has been broadcast to network please wait...!"), !n) {
                                                                                                            t.next = 11;
                                                                                                            break
                                                                                                        }
                                                                                                        o = null;
                                                                                                    case 3:
                                                                                                        if (null != o) {
                                                                                                            t.next = 9;
                                                                                                            break
                                                                                                        }
                                                                                                        return t.next = 6, web3.eth.getTransactionReceipt(n);
                                                                                                    case 6:
                                                                                                        o = t.sent, t.next = 3;
                                                                                                        break;
                                                                                                    case 9:
                                                                                                        o && o.status && (e.showAlert = "done", e.transactionHash = o.transactionHash, e.is_load_this_punk = !1, e.initData(), e.updateApe()), o && !o.status && (e.showAlert = "error", e.alertMessage = "Error: please check transaction", e.transactionHash = o.transactionHash);
                                                                                                    case 11:
                                                                                                        e.isCanceling = !1;
                                                                                                    case 12:
                                                                                                    case "end":
                                                                                                        return t.stop()
                                                                                                }
                                                                                            }), t)
                                                                                        })));
                                                                                        return function(e, r) {
                                                                                            return t.apply(this, arguments)
                                                                                        }
                                                                                    }());
                                                                                case 3:
                                                                                    t.next = 8;
                                                                                    break;
                                                                                case 5:
                                                                                    t.prev = 5, t.t0 = t.catch(0), console.log(t.t0);
                                                                                case 8:
                                                                                case "end":
                                                                                    return t.stop()
                                                                            }
                                                                        }), t, null, [
                                                                            [0, 5]
                                                                        ])
                                                                    }))), 500), t.next = 10;
                                                                    break;
                                                                case 7:
                                                                    t.prev = 7, t.t0 = t.catch(0), console.log(t.t0);
                                                                case 10:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t, null, [
                                                            [0, 7]
                                                        ])
                                                    }))), 500), e.isCanceling = !0)
                                                },
                                                allowOutsideClick: function() {
                                                    return !c.a.isLozading()
                                                }
                                            });
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        NewAcceptOffer: function() {
                            var e = this;
                            return Object(n.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            c.a.fire({
                                                customClass: {
                                                    container: "my-swal"
                                                },
                                                title: "Accept This Offer",
                                                text: "Are you Sure?",
                                                type: "primary",
                                                showCancelButton: !0,
                                                showLoaderOnConfirm: !0,
                                                preConfirm: function() {
                                                    e.isBuying || (e.isBuying = !0, setTimeout(Object(n.a)(regeneratorRuntime.mark((function t() {
                                                        var r;
                                                        return regeneratorRuntime.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.prev = 0, t.next = 3, e.$walletManager.getSelectedWallet();
                                                                case 3:
                                                                    r = t.sent, setTimeout(Object(n.a)(regeneratorRuntime.mark((function t() {
                                                                        return regeneratorRuntime.wrap((function(t) {
                                                                            for (;;) switch (t.prev = t.next) {
                                                                                case 0:
                                                                                    return t.prev = 0, t.next = 3, window.contract.methods.buyFromMarket(e.$route.params.id, r).send({
                                                                                        from: r,
                                                                                        value: e.offer[3]
                                                                                    }, function() {
                                                                                        var t = Object(n.a)(regeneratorRuntime.mark((function t(r, n) {
                                                                                            var o;
                                                                                            return regeneratorRuntime.wrap((function(t) {
                                                                                                for (;;) switch (t.prev = t.next) {
                                                                                                    case 0:
                                                                                                        if (r ? (e.showAlert = "error", e.alertMessage = "Error: please check your wallet") : (e.showAlert = "success", e.alertMessage = "Your transaction has been broadcast to network please wait...!"), !n) {
                                                                                                            t.next = 11;
                                                                                                            break
                                                                                                        }
                                                                                                        o = null;
                                                                                                    case 3:
                                                                                                        if (null != o) {
                                                                                                            t.next = 9;
                                                                                                            break
                                                                                                        }
                                                                                                        return t.next = 6, web3.eth.getTransactionReceipt(n);
                                                                                                    case 6:
                                                                                                        o = t.sent, t.next = 3;
                                                                                                        break;
                                                                                                    case 9:
                                                                                                        o && o.status && (e.showAlert = "done", e.transactionHash = o.transactionHash, e.is_load_this_punk = !1, e.initData(), e.updateApe(), c.a.fire({
                                                                                                            customClass: {
                                                                                                                container: "my-swal"
                                                                                                            },
                                                                                                            title: "Ape Bought",
                                                                                                            text: "Ape bought for ".concat(window.web3.utils.fromWei(e.offer[3])),
                                                                                                            icon: "success",
                                                                                                            confirmButtonText: "Cool"
                                                                                                        })), o && !o.status && (e.showAlert = "error", e.alertMessage = "Error: please check transaction", e.transactionHash = o.transactionHash);
                                                                                                    case 11:
                                                                                                        e.isBuying = !1;
                                                                                                    case 12:
                                                                                                    case "end":
                                                                                                        return t.stop()
                                                                                                }
                                                                                            }), t)
                                                                                        })));
                                                                                        return function(e, r) {
                                                                                            return t.apply(this, arguments)
                                                                                        }
                                                                                    }());
                                                                                case 3:
                                                                                    t.next = 8;
                                                                                    break;
                                                                                case 5:
                                                                                    t.prev = 5, t.t0 = t.catch(0), console.log(t.t0);
                                                                                case 8:
                                                                                case "end":
                                                                                    return t.stop()
                                                                            }
                                                                        }), t, null, [
                                                                            [0, 5]
                                                                        ])
                                                                    }))), 500), t.next = 10;
                                                                    break;
                                                                case 7:
                                                                    t.prev = 7, t.t0 = t.catch(0), console.log(t.t0);
                                                                case 10:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t, null, [
                                                            [0, 7]
                                                        ])
                                                    }))), 500), e.isBuying = !0)
                                                },
                                                allowOutsideClick: function() {
                                                    return !c.a.isLozading()
                                                }
                                            });
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        }
                    }
                },
                m = f,
                h = (r(760), r(762), r(40)),
                component = Object(h.a)(m, (function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", [r("div", {
                        staticClass: "main"
                    }, [e._m(0), e._v(" "), r("section", {
                        staticClass: "section bg-theme tc-light ov-h mb-100",
                        attrs: {
                            id: "ape"
                        }
                    }, [r("div", {
                        staticClass: "container"
                    }, [r("div", {
                        staticClass: "row align-items-center justify-content-center"
                    }, [r("div", {
                        staticClass: "col-md-9 col-lg-7"
                    }, [r("div", {
                        staticClass: "page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0"
                    }, [r("h1", {
                        staticClass: "text-white mb-0"
                    }, [e._v("Polygon Apes #" + e._s(this.$route.params.id))])])])])])]), e._v(" "), r("section", {
                        staticClass: "project-details-section ptb-100",
                        attrs: {
                            id: "apeDetail"
                        }
                    }, [r("div", {
                        staticClass: "container"
                    }, [r("div", {
                        staticClass: "row justify-content-between"
                    }, [r("div", {
                        staticClass: "col-md-12 col-lg-6"
                    }, [r("div", {
                        staticClass: "img-wrap-detail mb-md-4 mb-lg-0"
                    }, [r("a", {
                        staticClass: "team-show content-popup",
                        attrs: {
                            href: "#team-popup-1"
                        }
                    }), e._v(" "), r("img", {
                        staticClass: "img-detail rounded shadow-sm",
                        attrs: {
                            src: "https://polygonapes.com/assets/BaycImages/poly/" + this.$route.params.id + ".png",
                            alt: "Polygon Apes #" + this.$route.params.id
                        }
                    }), e._v(" "), r("div", {
                        staticClass: "team-popup bg-theme-dark tc-light mfp-hide",
                        attrs: {
                            id: "team-popup-1"
                        }
                    }, [r("a", {
                        staticClass: "mfp-close",
                        attrs: {
                            title: "Close"
                        }
                    }, [e._v("×")]), e._v(" "), r("div", {
                        staticClass: "row align-items-start"
                    }, [r("div", {
                        staticClass: "col-md-6"
                    }, [r("div", {
                        staticClass: "team-photo"
                    }, [r("img", {
                        staticClass: "img-detail rounded shadow-sm",
                        attrs: {
                            src: "https://polygonapes.com/assets/BaycImages/poly/" + this.$route.params.id + ".png",
                            alt: "Polygon Apes #" + this.$route.params.id
                        }
                    })])]), e._v(" "), r("div", {
                        staticClass: "col-md-6"
                    }, [r("div", {
                        staticClass: "team-popup-info pl-md-3"
                    }, [r("h2", {
                        staticClass: "mb-0 mb-2"
                    }, [e._v("Polygon Apes # " + e._s(this.$route.params.id))]), e._v(" "), r("h5", {
                        staticClass: "text-primary-alt"
                    }, [e._v("Rarity Rank # " + e._s(e.rank))]), e._v(" "), r("ul", {
                        staticClass: "team-social team-social-s2 mb-4"
                    }, [r("li", [r("a", {
                        attrs: {
                            target: "_blank",
                            href: "https://storageapi.fleek.co/facccd1b-5876-4e2d-938f-cfa73c22a990-bucket/papes/" + this.$route.params.id + ".png"
                        }
                    }, [r("em", {
                        staticClass: "fa fa-download bring-to-front fa-2x"
                    })])]), e._v(" "), r("li", [r("ShareNetwork", {
                        staticClass: "bring-to-front",
                        attrs: {
                            network: "telegram",
                            url: "https://polygonapes.com" + this.$route.path,
                            title: "PolygonApes #" + this.$route.params.id,
                            description: "Bored Ape Yacht Club comes to polygon. Check out my Bored Ape from #PolygonApes — Ape in with me and join the minting 🐒 | Bored ape #" + this.$route.params.id,
                            hashtags: "PolygonApes,Polygon,BAYC,APES,PolygonApes" + this.$route.params.id
                        }
                    }, [r("i", {
                        staticClass: "fab fa-telegram fa-2x"
                    })])], 1), e._v(" "), r("li", [r("ShareNetwork", {
                        staticClass: "bring-to-front",
                        attrs: {
                            network: "twitter",
                            url: "https://polygonapes.com" + this.$route.path,
                            title: "PolygonApes #" + this.$route.params.id,
                            description: "Bored Ape Yacht Club comes to polygon. Check out my Bored Ape from #PolygonApes — Ape in with me and join the minting 🐒 | Bored ape #" + this.$route.params.id,
                            hashtags: "PolygonApes,Polygon,BAYC,APES,PolygonApes" + this.$route.params.id
                        }
                    }, [r("i", {
                        staticClass: "fab fa-twitter fa-2x"
                    })])], 1), e._v(" "), r("li", [r("ShareNetwork", {
                        staticClass: "bring-to-front",
                        attrs: {
                            network: "facebook",
                            url: "https://polygonapes.com" + this.$route.path,
                            title: "PolygonApes #" + this.$route.params.id,
                            description: "Bored Ape Yacht Club comes to polygon. Check out my Bored Ape from #PolygonApes — Ape in with me and join the minting 🐒 | Bored ape #" + this.$route.params.id,
                            hashtags: "PolygonApes,Polygon,BAYC,APES,PolygonApes" + this.$route.params.id
                        }
                    }, [r("i", {
                        staticClass: "fab fa-facebook fa-2x"
                    })])], 1), e._v(" "), r("li", [r("ShareNetwork", {
                        staticClass: "bring-to-front",
                        attrs: {
                            network: "whatsapp",
                            url: "https://polygonapes.com" + this.$route.path,
                            title: "PolygonApes #" + this.$route.params.id,
                            description: "Bored Ape Yacht Club comes to polygon. Check out my Bored Ape from #PolygonApes — Ape in with me and join the minting 🐒 | Bored ape #" + this.$route.params.id,
                            hashtags: "PolygonApes,Polygon,BAYC,APES,PolygonApes" + this.$route.params.id
                        }
                    }, [r("i", {
                        staticClass: "fab fa-whatsapp fa-2x"
                    })])], 1)])]), e._v(" "), e._l(e.currentPunk.traits, (function(t, n, o) {
                        return r("div", {
                            staticClass: "p-2 m-2",
                            staticStyle: {
                                display: "inline-block"
                            }
                        }, [r("h3", {
                            staticClass: "text-white-50"
                        }, [e._v(e._s(n))]), e._v(" "), r("span", {
                            staticClass: "text-secondary"
                        }, [e._v(e._s(t))])])
                    }))], 2)])])]), e._v(" "), r("ul", {
                        staticClass: "team-social team-social-s2 mt-5 text-center "
                    }, [r("li", [r("a", {
                        attrs: {
                            target: "_blank",
                            href: "https://storageapi.fleek.co/facccd1b-5876-4e2d-938f-cfa73c22a990-bucket/papes/" + this.$route.params.id + ".png"
                        }
                    }, [r("em", {
                        staticClass: "fa fa-download bring-to-front fa-2x"
                    })])]), e._v(" "), r("li", [r("ShareNetwork", {
                        staticClass: "bring-to-front",
                        attrs: {
                            network: "telegram",
                            url: "https://polygonapes.com" + this.$route.path,
                            title: "PolygonApes #" + this.$route.params.id,
                            description: "Bored Ape Yacht Club comes to polygon. Check out my Bored Ape from #PolygonApes — Ape in with me and join the minting 🐒 | Bored ape #" + this.$route.params.id,
                            hashtags: "PolygonApes,Polygon,BAYC,APES,PolygonApes" + this.$route.params.id
                        }
                    }, [r("i", {
                        staticClass: "fab fa-telegram fa-2x"
                    })])], 1), e._v(" "), r("li", [r("ShareNetwork", {
                        staticClass: "bring-to-front",
                        attrs: {
                            network: "twitter",
                            url: "https://polygonapes.com" + this.$route.path,
                            title: "PolygonApes #" + this.$route.params.id,
                            description: "Bored Ape Yacht Club comes to polygon. Check out my Bored Ape from #PolygonApes — Ape in with me and join the minting 🐒 | Bored ape #" + this.$route.params.id,
                            hashtags: "PolygonApes,Polygon,BAYC,APES,PolygonApes" + this.$route.params.id
                        }
                    }, [r("i", {
                        staticClass: "fab fa-twitter fa-2x"
                    })])], 1), e._v(" "), r("li", [r("ShareNetwork", {
                        staticClass: "bring-to-front",
                        attrs: {
                            network: "facebook",
                            url: "https://polygonapes.com" + this.$route.path,
                            title: "PolygonApes #" + this.$route.params.id,
                            description: "Bored Ape Yacht Club comes to polygon. Check out my Bored Ape from #PolygonApes — Ape in with me and join the minting 🐒 | Bored ape #" + this.$route.params.id,
                            hashtags: "PolygonApes,Polygon,BAYC,APES,PolygonApes" + this.$route.params.id
                        }
                    }, [r("i", {
                        staticClass: "fab fa-facebook fa-2x"
                    })])], 1), e._v(" "), r("li", [r("ShareNetwork", {
                        staticClass: "bring-to-front",
                        attrs: {
                            network: "whatsapp",
                            url: "https://polygonapes.com" + this.$route.path,
                            title: "PolygonApes #" + this.$route.params.id,
                            description: "Bored Ape Yacht Club comes to polygon. Check out my Bored Ape from #PolygonApes — Ape in with me and join the minting 🐒 | Bored ape #" + this.$route.params.id,
                            hashtags: "PolygonApes,Polygon,BAYC,APES,PolygonApes" + this.$route.params.id
                        }
                    }, [r("i", {
                        staticClass: "fab fa-whatsapp fa-2x"
                    })])], 1)])]), e._v(" "), r("div", {
                        staticClass: "col-md-12 col-lg-6"
                    }, [r("div", {
                        staticClass: "project-details-sidebar"
                    }, [r("ul", {
                        staticClass: "project-info-list"
                    }, [r("li", {
                        staticClass: "d-flex align-items-center mb-3 p-4 rounded shadow-sm "
                    }, [r("div", {
                        staticClass: "d-block"
                    }, [r("h2", {
                        staticClass: "mb-0 text-white-50 mb-2 text-primary"
                    }, [e._v("Polygon Apes # " + e._s(this.$route.params.id))]), e._v(" "), r("p", {
                        staticClass: "text-primary-alt"
                    }, [e._v("Rarity Rank # " + e._s(e.rank))]), e._v(" "), "0x0000000000000000000000000000000000000000" != this.token_owner ? r("p", [e._v("Owned by : "), this.is_it_mine ? r("strong", {
                        staticClass: "text-success"
                    }, [e._v("(it`s\n                        mine)")]) : e._e(), e._v(" "), r("a", {
                        staticClass: "bring-to-front",
                        attrs: {
                            target: "_blank",
                            href: "https://polygonscan.com/address/" + this.token_owner
                        }
                    }, [e._v("\n                          " + e._s(this.token_owner.substr(0, 5)) + "\n                          ...\n                          " + e._s(this.token_owner.substr(this.token_owner.length - 4, this.token_owner.length - 1)) + "\n                        ")])]) : r("p", {}, [r("strong", {
                        staticClass: "text-black"
                    }, [e._v("Not Minted Yet")])])])]), e._v(" "), e._l(e.currentPunk.traits, (function(t, n, o) {
                        return r("div", {
                            staticClass: "p-2 m-2",
                            staticStyle: {
                                display: "inline-block"
                            }
                        }, [r("h3", {
                            staticClass: "text-primary"
                        }, [e._v(e._s(n))]), e._v(" "), r("span", {
                            staticClass: "text-primary-alt"
                        }, [e._v(e._s(t))])])
                    })), e._v(" "), r("hr"), e._v(" "), e.btn_loading ? r("div", [r("div", {
                        staticClass: "alert alert-info msg-alert",
                        attrs: {
                            role: "alert"
                        }
                    }, [e._v("\n                      Processing ...\n                    ")])]) : !1 === e.walletStatus ? r("div", [r("div", {
                        staticClass: "alert alert-info msg-alert",
                        attrs: {
                            role: "alert"
                        }
                    }, [e._v("\n                      Try to connect your wallet\n                    ")])]) : null === e.walletStatus ? r("div", [r("div", {
                        staticClass: "alert alert-info msg-alert",
                        attrs: {
                            role: "alert"
                        }
                    }, [r("p", [e._v("Please Connect Your Metamask")]), e._v(" "), r("button", {
                        staticClass: "btn btn-primary rounded",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: function(t) {
                                return e.tryToConnect()
                            }
                        }
                    }, [e._v("Connect to wallet\n                        "), 1 == e.connectingWallet ? r("i", {
                        staticClass: "spinner-border spinner-border-sm text-white"
                    }) : e._e()])])]) : e._e(), e._v(" "), this.$walletManager.startTestMarket && e.canShowOffer && e.offer && e.offer.isForSale ? r("li", {
                        staticClass: "d-flex align-items-center mb-3 p-4 rounded shadow-sm border"
                    }, [r("div", {
                        staticClass: "d-block"
                    }, [r("h5", {
                        staticClass: "mb-0 text-dark"
                    }, [e._v("Market Summery")]), e._v(" "), r("p", [r("i", {
                        staticClass: "text-dark"
                    }, [e._v("Offered by owner for "), r("strong", {
                        staticClass: "text-primary-alt",
                        staticStyle: {
                            "font-size": "x-large"
                        }
                    }, [e._v(e._s(e.offerPrice))]), e._v(" "), r("span", {
                        staticClass: "text-primary"
                    }, [e._v("Polygon")])])]), e._v(" "), e.is_it_mine && !this.isCanceling ? r("button", {
                        staticClass: "btn btn-danger btn-sm rounded",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: function(t) {
                                return e.NewCancelOffer()
                            }
                        }
                    }, [e._v("\n                        Remove From Sale List\n                      ")]) : e._e(), e._v(" "), e.is_it_mine || this.isBuying ? e._e() : r("button", {
                        staticClass: "btn btn-primary btn-sm rounded",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: function(t) {
                                return e.NewAcceptOffer()
                            }
                        }
                    }, [e._v("\n                        Accept offer\n                      ")]), e._v(" "), this.isCanceling ? r("label", [e._v("Processing ...")]) : e._e(), e._v(" "), this.isBuying ? r("label", [e._v("Processing ...")]) : e._e()])]) : e._e()], 2)])])]), e._v(" "), this.is_it_mine ? r("div", {
                        staticClass: "card "
                    }, [r("div", {
                        staticClass: "row align-items-center"
                    }, ["transferDone" !== e.showAlert ? r("div", {
                        staticClass: "col-lg-3 col-sm-4 download-option"
                    }, [r("em", {
                        staticClass: "icon fa fa-exchange-alt"
                    }), e._v(" "), this.is_transfering ? e._e() : r("button", {
                        staticClass: "btn btn-outline btn-dark btn-md",
                        on: {
                            click: function(t) {
                                return e.ShowTransfer()
                            }
                        }
                    }, [e._v("\n                  Transfer\n                ")]), e._v(" "), this.is_transfering ? r("label", [e._v("Transferring process ...")]) : e._e()]) : e._e(), e._v(" "), this.$walletManager.startTestMarket && !0 === e.walletStatus ? r("div", {
                        staticClass: "col-lg-3 col-sm-4 download-option"
                    }, [!e.offer && e.is_it_mine || !e.canShowOffer && e.offer && e.is_it_mine ? r("em", {
                        staticClass: "icon fa fa-receipt"
                    }) : e._e(), e._v(" "), this.isOffering ? e._e() : r("div", [!e.offer && e.is_it_mine || !e.canShowOffer && e.offer && e.is_it_mine ? r("button", {
                        staticClass: "btn btn-outline btn-dark btn-md",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: e.showNewOffer
                        }
                    }, [e._v("\n                    List For Sale\n                  ")]) : e._e()]), e._v(" "), this.isOffering ? r("label", [e._v("Processing ...")]) : e._e()]) : e._e()]), e._v(" "), r("div", {
                        staticClass: "col-12 download-option"
                    }, ["success" === e.showAlert ? r("div", {
                        staticClass: "alert alert-success msg-alert",
                        attrs: {
                            role: "alert"
                        }
                    }, [e._v("\n                " + e._s(e.alertMessage) + "\n              ")]) : e._e(), e._v(" "), "done" === e.showAlert || "transferDone" === e.showAlert ? r("div", {
                        staticClass: "alert alert-success msg-alert",
                        attrs: {
                            role: "alert"
                        }
                    }, [e._v("\n                Transaction Approved :\n                "), r("a", {
                        staticClass: "bring-to-front",
                        attrs: {
                            target: "_blank",
                            href: "https://polygonscan.com/tx/" + e.transactionHash
                        }
                    }, [e._v("\n                  " + e._s(this.transactionHash.substr(0, 5)) + "\n                  ...\n                  " + e._s(this.transactionHash.substr(this.transactionHash.length - 4, this.transactionHash.length - 1)) + "\n                ")]), e._v(" "), r("br"), e._v(" "), r("NuxtLink", {
                        staticClass: "mr-5 bring-to-front text-dark",
                        attrs: {
                            to: "/myWallet"
                        }
                    }, [e._v("\n                  Open My Wallet\n                ")])], 1) : e._e(), e._v(" "), "error" === e.showAlert ? r("div", {
                        staticClass: "alert alert-danger msg-alert",
                        attrs: {
                            role: "alert"
                        }
                    }, [e._v("\n                " + e._s(e.alertMessage) + "\n\n                "), e.transactionHash ? r("div", [e._v("\n                  transactionHash:\n                  "), r("a", {
                        staticClass: "bring-to-front",
                        attrs: {
                            target: "_blank",
                            href: "https://polygonscan.com/tx/" + e.transactionHash
                        }
                    }, [e._v("\n                    " + e._s(this.transactionHash.substr(0, 5)) + "\n                    ...\n                    " + e._s(this.transactionHash.substr(this.transactionHash.length - 4, this.transactionHash.length - 1)) + "\n                  ")])]) : e._e()]) : e._e()])]) : e._e()])])])])
                }), [function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "modal"
                    }, [r("p", [e._v("\n          Enter Bid Price\n        ")]), e._v(" "), r("br"), e._v(" "), r("div", {
                        staticClass: "InputBox -full"
                    }, [r("input", {
                        staticClass: "bring-to-front",
                        attrs: {
                            type: "text",
                            placeholder: "more than 100",
                            id: "NEWBID-BID_PRICE"
                        }
                    }), e._v(" "), r("i", {
                        staticClass: "ri-input-cursor-move"
                    })])])
                }], !1, null, null, null);
            t.default = component.exports
        }
    }
]);