! function() {
    var e = {
            679: function(e, t, n) {
                "use strict";
                var r = n(864),
                    i = {
                        childContextTypes: !0,
                        contextType: !0,
                        contextTypes: !0,
                        defaultProps: !0,
                        displayName: !0,
                        getDefaultProps: !0,
                        getDerivedStateFromError: !0,
                        getDerivedStateFromProps: !0,
                        mixins: !0,
                        propTypes: !0,
                        type: !0
                    },
                    a = {
                        name: !0,
                        length: !0,
                        prototype: !0,
                        caller: !0,
                        callee: !0,
                        arguments: !0,
                        arity: !0
                    },
                    o = {
                        $$typeof: !0,
                        compare: !0,
                        defaultProps: !0,
                        displayName: !0,
                        propTypes: !0,
                        type: !0
                    },
                    s = {};

                function l(e) {
                    return r.isMemo(e) ? o : s[e.$$typeof] || i
                }
                s[r.ForwardRef] = {
                    $$typeof: !0,
                    render: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0
                }, s[r.Memo] = o;
                var c = Object.defineProperty,
                    u = Object.getOwnPropertyNames,
                    d = Object.getOwnPropertySymbols,
                    p = Object.getOwnPropertyDescriptor,
                    h = Object.getPrototypeOf,
                    f = Object.prototype;
                e.exports = function e(t, n, r) {
                    if ("string" != typeof n) {
                        if (f) {
                            var i = h(n);
                            i && i !== f && e(t, i, r)
                        }
                        var o = u(n);
                        d && (o = o.concat(d(n)));
                        for (var s = l(t), m = l(n), g = 0; g < o.length; ++g) {
                            var v = o[g];
                            if (!(a[v] || r && r[v] || m && m[v] || s && s[v])) {
                                var b = p(n, v);
                                try {
                                    c(t, v, b)
                                } catch (e) {}
                            }
                        }
                    }
                    return t
                }
            },
            885: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.CASE_SENSITIVE_TAG_NAMES_MAP = t.CASE_SENSITIVE_TAG_NAMES = void 0, t.CASE_SENSITIVE_TAG_NAMES = ["animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "linearGradient", "radialGradient", "textPath"], t.CASE_SENSITIVE_TAG_NAMES_MAP = t.CASE_SENSITIVE_TAG_NAMES.reduce((function(e, t) {
                    return e[t.toLowerCase()] = t, e
                }), {})
            },
            276: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = "html",
                    r = "head",
                    i = "body",
                    a = /<([a-zA-Z]+[0-9]?)/,
                    o = /<head[^]*>/i,
                    s = /<body[^]*>/i,
                    l = function(e, t) {
                        throw new Error("This browser does not support `document.implementation.createHTMLDocument`")
                    },
                    c = function(e, t) {
                        throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")
                    },
                    u = "object" == typeof window && window.DOMParser;
                if ("function" == typeof u) {
                    var d = new u;
                    l = c = function(e, t) {
                        return t && (e = "<".concat(t, ">").concat(e, "</").concat(t, ">")), d.parseFromString(e, "text/html")
                    }
                }
                if ("object" == typeof document && document.implementation) {
                    var p = document.implementation.createHTMLDocument();
                    l = function(e, t) {
                        if (t) {
                            var n = p.documentElement.querySelector(t);
                            return n && (n.innerHTML = e), p
                        }
                        return p.documentElement.innerHTML = e, p
                    }
                }
                var h, f = "object" == typeof document && document.createElement("template");
                f && f.content && (h = function(e) {
                    return f.innerHTML = e, f.content.childNodes
                }), t.default = function(e) {
                    var t, u, d = e.match(a),
                        p = d && d[1] ? d[1].toLowerCase() : "";
                    switch (p) {
                        case n:
                            var f = c(e);
                            return o.test(e) || null === (t = null == (g = f.querySelector(r)) ? void 0 : g.parentNode) || void 0 === t || t.removeChild(g), s.test(e) || null === (u = null == (g = f.querySelector(i)) ? void 0 : g.parentNode) || void 0 === u || u.removeChild(g), f.querySelectorAll(n);
                        case r:
                        case i:
                            var m = l(e).querySelectorAll(p);
                            return s.test(e) && o.test(e) ? m[0].parentNode.childNodes : m;
                        default:
                            return h ? h(e) : (g = l(e, i).querySelector(i)).childNodes;
                            var g
                    }
                }
            },
            152: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = r(n(276)),
                    a = n(507),
                    o = /<(![a-zA-Z\s]+)>/;
                t.default = function(e) {
                    if ("string" != typeof e) throw new TypeError("First argument must be a string");
                    if (!e) return [];
                    var t = e.match(o),
                        n = t ? t[1] : void 0;
                    return (0, a.formatDOM)((0, i.default)(e), null, n)
                }
            },
            507: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.formatDOM = t.formatAttributes = void 0;
                var r = n(584),
                    i = n(885);

                function a(e) {
                    for (var t = {}, n = 0, r = e.length; n < r; n++) {
                        var i = e[n];
                        t[i.name] = i.value
                    }
                    return t
                }

                function o(e) {
                    return function(e) {
                        return i.CASE_SENSITIVE_TAG_NAMES_MAP[e]
                    }(e = e.toLowerCase()) || e
                }
                t.formatAttributes = a, t.formatDOM = function e(t, n, i) {
                    void 0 === n && (n = null);
                    for (var s, l = [], c = 0, u = t.length; c < u; c++) {
                        var d = t[c];
                        switch (d.nodeType) {
                            case 1:
                                var p = o(d.nodeName);
                                (s = new r.Element(p, a(d.attributes))).children = e("template" === p ? d.content.childNodes : d.childNodes, s);
                                break;
                            case 3:
                                s = new r.Text(d.nodeValue);
                                break;
                            case 8:
                                s = new r.Comment(d.nodeValue);
                                break;
                            default:
                                continue
                        }
                        var h = l[c - 1] || null;
                        h && (h.next = s), s.parent = n, s.prev = h, s.next = null, l.push(s)
                    }
                    return i && ((s = new r.ProcessingInstruction(i.substring(0, i.indexOf(" ")).toLowerCase(), i)).next = l[0] || null, s.parent = n, l.unshift(s), l[1] && (l[1].prev = l[0])), l
                }
            },
            953: function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.Doctype = t.CDATA = t.Tag = t.Style = t.Script = t.Comment = t.Directive = t.Text = t.Root = t.isTag = t.ElementType = void 0,
                    function(e) {
                        e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"
                    }(n = t.ElementType || (t.ElementType = {})), t.isTag = function(e) {
                        return e.type === n.Tag || e.type === n.Script || e.type === n.Style
                    }, t.Root = n.Root, t.Text = n.Text, t.Directive = n.Directive, t.Comment = n.Comment, t.Script = n.Script, t.Style = n.Style, t.Tag = n.Tag, t.CDATA = n.CDATA, t.Doctype = n.Doctype
            },
            584: function(e, t, n) {
                "use strict";
                var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n);
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, r, i)
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    }),
                    i = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DomHandler = void 0;
                var a = n(953),
                    o = n(642);
                i(n(642), t);
                var s = {
                        withStartIndices: !1,
                        withEndIndices: !1,
                        xmlMode: !1
                    },
                    l = function() {
                        function e(e, t, n) {
                            this.dom = [], this.root = new o.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, "function" == typeof t && (n = t, t = s), "object" == typeof e && (t = e, e = void 0), this.callback = null != e ? e : null, this.options = null != t ? t : s, this.elementCB = null != n ? n : null
                        }
                        return e.prototype.onparserinit = function(e) {
                            this.parser = e
                        }, e.prototype.onreset = function() {
                            this.dom = [], this.root = new o.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null
                        }, e.prototype.onend = function() {
                            this.done || (this.done = !0, this.parser = null, this.handleCallback(null))
                        }, e.prototype.onerror = function(e) {
                            this.handleCallback(e)
                        }, e.prototype.onclosetag = function() {
                            this.lastNode = null;
                            var e = this.tagStack.pop();
                            this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e)
                        }, e.prototype.onopentag = function(e, t) {
                            var n = this.options.xmlMode ? a.ElementType.Tag : void 0,
                                r = new o.Element(e, t, void 0, n);
                            this.addNode(r), this.tagStack.push(r)
                        }, e.prototype.ontext = function(e) {
                            var t = this.lastNode;
                            if (t && t.type === a.ElementType.Text) t.data += e, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
                            else {
                                var n = new o.Text(e);
                                this.addNode(n), this.lastNode = n
                            }
                        }, e.prototype.oncomment = function(e) {
                            if (this.lastNode && this.lastNode.type === a.ElementType.Comment) this.lastNode.data += e;
                            else {
                                var t = new o.Comment(e);
                                this.addNode(t), this.lastNode = t
                            }
                        }, e.prototype.oncommentend = function() {
                            this.lastNode = null
                        }, e.prototype.oncdatastart = function() {
                            var e = new o.Text(""),
                                t = new o.CDATA([e]);
                            this.addNode(t), e.parent = t, this.lastNode = e
                        }, e.prototype.oncdataend = function() {
                            this.lastNode = null
                        }, e.prototype.onprocessinginstruction = function(e, t) {
                            var n = new o.ProcessingInstruction(e, t);
                            this.addNode(n)
                        }, e.prototype.handleCallback = function(e) {
                            if ("function" == typeof this.callback) this.callback(e, this.dom);
                            else if (e) throw e
                        }, e.prototype.addNode = function(e) {
                            var t = this.tagStack[this.tagStack.length - 1],
                                n = t.children[t.children.length - 1];
                            this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), t.children.push(e), n && (e.prev = n, n.next = e), e.parent = t, this.lastNode = null
                        }, e
                    }();
                t.DomHandler = l, t.default = l
            },
            642: function(e, t, n) {
                "use strict";
                var r, i = this && this.__extends || (r = function(e, t) {
                        return r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, r(e, t)
                    }, function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function __() {
                            this.constructor = e
                        }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
                    }),
                    a = this && this.__assign || function() {
                        return a = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }, a.apply(this, arguments)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.cloneNode = t.hasChildren = t.isDocument = t.isDirective = t.isComment = t.isText = t.isCDATA = t.isTag = t.Element = t.Document = t.CDATA = t.NodeWithChildren = t.ProcessingInstruction = t.Comment = t.Text = t.DataNode = t.Node = void 0;
                var o = n(953),
                    s = function() {
                        function e() {
                            this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null
                        }
                        return Object.defineProperty(e.prototype, "parentNode", {
                            get: function() {
                                return this.parent
                            },
                            set: function(e) {
                                this.parent = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "previousSibling", {
                            get: function() {
                                return this.prev
                            },
                            set: function(e) {
                                this.prev = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "nextSibling", {
                            get: function() {
                                return this.next
                            },
                            set: function(e) {
                                this.next = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.cloneNode = function(e) {
                            return void 0 === e && (e = !1), E(this, e)
                        }, e
                    }();
                t.Node = s;
                var l = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.data = t, n
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeValue", {
                        get: function() {
                            return this.data
                        },
                        set: function(e) {
                            this.data = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(s);
                t.DataNode = l;
                var c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Text, t
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 3
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.Text = c;
                var u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Comment, t
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 8
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.Comment = u;
                var d = function(e) {
                    function t(t, n) {
                        var r = e.call(this, n) || this;
                        return r.name = t, r.type = o.ElementType.Directive, r
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 1
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.ProcessingInstruction = d;
                var p = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.children = t, n
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "firstChild", {
                        get: function() {
                            var e;
                            return null !== (e = this.children[0]) && void 0 !== e ? e : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "lastChild", {
                        get: function() {
                            return this.children.length > 0 ? this.children[this.children.length - 1] : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "childNodes", {
                        get: function() {
                            return this.children
                        },
                        set: function(e) {
                            this.children = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(s);
                t.NodeWithChildren = p;
                var h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.CDATA, t
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 4
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);
                t.CDATA = h;
                var f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Root, t
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 9
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);
                t.Document = f;
                var m = function(e) {
                    function t(t, n, r, i) {
                        void 0 === r && (r = []), void 0 === i && (i = "script" === t ? o.ElementType.Script : "style" === t ? o.ElementType.Style : o.ElementType.Tag);
                        var a = e.call(this, r) || this;
                        return a.name = t, a.attribs = n, a.type = i, a
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 1
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "tagName", {
                        get: function() {
                            return this.name
                        },
                        set: function(e) {
                            this.name = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "attributes", {
                        get: function() {
                            var e = this;
                            return Object.keys(this.attribs).map((function(t) {
                                var n, r;
                                return {
                                    name: t,
                                    value: e.attribs[t],
                                    namespace: null === (n = e["x-attribsNamespace"]) || void 0 === n ? void 0 : n[t],
                                    prefix: null === (r = e["x-attribsPrefix"]) || void 0 === r ? void 0 : r[t]
                                }
                            }))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);

                function g(e) {
                    return (0, o.isTag)(e)
                }

                function v(e) {
                    return e.type === o.ElementType.CDATA
                }

                function b(e) {
                    return e.type === o.ElementType.Text
                }

                function y(e) {
                    return e.type === o.ElementType.Comment
                }

                function _(e) {
                    return e.type === o.ElementType.Directive
                }

                function C(e) {
                    return e.type === o.ElementType.Root
                }

                function E(e, t) {
                    var n;
                    if (void 0 === t && (t = !1), b(e)) n = new c(e.data);
                    else if (y(e)) n = new u(e.data);
                    else if (g(e)) {
                        var r = t ? w(e.children) : [],
                            i = new m(e.name, a({}, e.attribs), r);
                        r.forEach((function(e) {
                            return e.parent = i
                        })), null != e.namespace && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = a({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = a({}, e["x-attribsPrefix"])), n = i
                    } else if (v(e)) {
                        r = t ? w(e.children) : [];
                        var o = new h(r);
                        r.forEach((function(e) {
                            return e.parent = o
                        })), n = o
                    } else if (C(e)) {
                        r = t ? w(e.children) : [];
                        var s = new f(r);
                        r.forEach((function(e) {
                            return e.parent = s
                        })), e["x-mode"] && (s["x-mode"] = e["x-mode"]), n = s
                    } else {
                        if (!_(e)) throw new Error("Not implemented yet: ".concat(e.type));
                        var l = new d(e.name, e.data);
                        null != e["x-name"] && (l["x-name"] = e["x-name"], l["x-publicId"] = e["x-publicId"], l["x-systemId"] = e["x-systemId"]), n = l
                    }
                    return n.startIndex = e.startIndex, n.endIndex = e.endIndex, null != e.sourceCodeLocation && (n.sourceCodeLocation = e.sourceCodeLocation), n
                }

                function w(e) {
                    for (var t = e.map((function(e) {
                            return E(e, !0)
                        })), n = 1; n < t.length; n++) t[n].prev = t[n - 1], t[n - 1].next = t[n];
                    return t
                }
                t.Element = m, t.isTag = g, t.isCDATA = v, t.isText = b, t.isComment = y, t.isDirective = _, t.isDocument = C, t.hasChildren = function(e) {
                    return Object.prototype.hasOwnProperty.call(e, "children")
                }, t.cloneNode = E
            },
            484: function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(726),
                    i = n(606),
                    a = ["checked", "value"],
                    o = ["input", "select", "textarea"],
                    s = {
                        reset: !0,
                        submit: !0
                    };

                function l(e) {
                    return r.possibleStandardNames[e]
                }
                t.default = function(e, t) {
                    void 0 === e && (e = {});
                    var n = {},
                        c = Boolean(e.type && s[e.type]);
                    for (var u in e) {
                        var d = e[u];
                        if ((0, r.isCustomAttribute)(u)) n[u] = d;
                        else {
                            var p = u.toLowerCase(),
                                h = l(p);
                            if (h) {
                                var f = (0, r.getPropertyInfo)(h);
                                switch (a.includes(h) && o.includes(t) && !c && (h = l("default" + p)), n[h] = d, f && f.type) {
                                    case r.BOOLEAN:
                                        n[h] = !0;
                                        break;
                                    case r.OVERLOADED_BOOLEAN:
                                        "" === d && (n[h] = !0)
                                }
                            } else i.PRESERVE_CUSTOM_ATTRIBUTES && (n[u] = d)
                        }
                    }
                    return (0, i.setStyleProp)(e.style, n), n
                }
            },
            670: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n(196),
                    a = r(n(484)),
                    o = n(606),
                    s = {
                        cloneElement: i.cloneElement,
                        createElement: i.createElement,
                        isValidElement: i.isValidElement
                    };

                function l(e) {
                    return o.PRESERVE_CUSTOM_ATTRIBUTES && "tag" === e.type && (0, o.isCustomComponent)(e.name, e.attribs)
                }
                t.default = function e(t, n) {
                    for (var r = [], i = "function" == typeof(null == n ? void 0 : n.replace), c = (null == n ? void 0 : n.transform) || o.returnFirstArg, u = (null == n ? void 0 : n.library) || s, d = u.cloneElement, p = u.createElement, h = u.isValidElement, f = t.length, m = 0; m < f; m++) {
                        var g = t[m];
                        if (i) {
                            var v = n.replace(g);
                            if (h(v)) {
                                f > 1 && (v = d(v, {
                                    key: v.key || m
                                })), r.push(c(v, g, m));
                                continue
                            }
                        }
                        if ("text" !== g.type) {
                            var b = g,
                                y = {};
                            l(b) ? ((0, o.setStyleProp)(b.attribs.style, b.attribs), y = b.attribs) : b.attribs && (y = (0, a.default)(b.attribs, b.name));
                            var _ = void 0;
                            switch (g.type) {
                                case "script":
                                case "style":
                                    g.children[0] && (y.dangerouslySetInnerHTML = {
                                        __html: g.children[0].data
                                    });
                                    break;
                                case "tag":
                                    "textarea" === g.name && g.children[0] ? y.defaultValue = g.children[0].data : g.children && g.children.length && (_ = e(g.children, n));
                                    break;
                                default:
                                    continue
                            }
                            f > 1 && (y.key = m), r.push(c(p(g.name, y, _), g, m))
                        } else {
                            var C = !g.data.trim().length;
                            if (C && g.parent && !(0, o.canTextBeChildOfNode)(g.parent)) continue;
                            if ((null == n ? void 0 : n.trim) && C) continue;
                            r.push(c(g.data, g, m))
                        }
                    }
                    return 1 === r.length ? r[0] : r
                }
            },
            426: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.htmlToDOM = t.domToReact = t.attributesToProps = t.Text = t.ProcessingInstruction = t.Element = t.Comment = void 0;
                var i = r(n(152));
                t.htmlToDOM = i.default;
                var a = r(n(484));
                t.attributesToProps = a.default;
                var o = r(n(670));
                t.domToReact = o.default;
                var s = n(384);
                Object.defineProperty(t, "Comment", {
                    enumerable: !0,
                    get: function() {
                        return s.Comment
                    }
                }), Object.defineProperty(t, "Element", {
                    enumerable: !0,
                    get: function() {
                        return s.Element
                    }
                }), Object.defineProperty(t, "ProcessingInstruction", {
                    enumerable: !0,
                    get: function() {
                        return s.ProcessingInstruction
                    }
                }), Object.defineProperty(t, "Text", {
                    enumerable: !0,
                    get: function() {
                        return s.Text
                    }
                });
                var l = {
                    lowerCaseAttributeNames: !1
                };
                t.default = function(e, t) {
                    if ("string" != typeof e) throw new TypeError("First argument must be a string");
                    return e ? (0, o.default)((0, i.default)(e, (null == t ? void 0 : t.htmlparser2) || l), t) : []
                }
            },
            606: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.returnFirstArg = t.canTextBeChildOfNode = t.ELEMENTS_WITH_NO_TEXT_CHILDREN = t.PRESERVE_CUSTOM_ATTRIBUTES = t.setStyleProp = t.isCustomComponent = void 0;
                var i = n(196),
                    a = r(n(476)),
                    o = new Set(["annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph"]);
                t.isCustomComponent = function(e, t) {
                    return e.includes("-") ? !o.has(e) : Boolean(t && "string" == typeof t.is)
                };
                var s = {
                    reactCompat: !0
                };
                t.setStyleProp = function(e, t) {
                    if ("string" == typeof e)
                        if (e.trim()) try {
                            t.style = (0, a.default)(e, s)
                        } catch (e) {
                            t.style = {}
                        } else t.style = {}
                }, t.PRESERVE_CUSTOM_ATTRIBUTES = Number(i.version.split(".")[0]) >= 16, t.ELEMENTS_WITH_NO_TEXT_CHILDREN = new Set(["tr", "tbody", "thead", "tfoot", "colgroup", "table", "head", "html", "frameset"]), t.canTextBeChildOfNode = function(e) {
                    return !t.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(e.name)
                }, t.returnFirstArg = function(e) {
                    return e
                }
            },
            908: function(e, t) {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.Doctype = t.CDATA = t.Tag = t.Style = t.Script = t.Comment = t.Directive = t.Text = t.Root = t.isTag = t.ElementType = void 0,
                    function(e) {
                        e.Root = "root", e.Text = "text", e.Directive = "directive", e.Comment = "comment", e.Script = "script", e.Style = "style", e.Tag = "tag", e.CDATA = "cdata", e.Doctype = "doctype"
                    }(n = t.ElementType || (t.ElementType = {})), t.isTag = function(e) {
                        return e.type === n.Tag || e.type === n.Script || e.type === n.Style
                    }, t.Root = n.Root, t.Text = n.Text, t.Directive = n.Directive, t.Comment = n.Comment, t.Script = n.Script, t.Style = n.Style, t.Tag = n.Tag, t.CDATA = n.CDATA, t.Doctype = n.Doctype
            },
            384: function(e, t, n) {
                "use strict";
                var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n);
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, r, i)
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    }),
                    i = this && this.__exportStar || function(e, t) {
                        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DomHandler = void 0;
                var a = n(908),
                    o = n(79);
                i(n(79), t);
                var s = {
                        withStartIndices: !1,
                        withEndIndices: !1,
                        xmlMode: !1
                    },
                    l = function() {
                        function e(e, t, n) {
                            this.dom = [], this.root = new o.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, "function" == typeof t && (n = t, t = s), "object" == typeof e && (t = e, e = void 0), this.callback = null != e ? e : null, this.options = null != t ? t : s, this.elementCB = null != n ? n : null
                        }
                        return e.prototype.onparserinit = function(e) {
                            this.parser = e
                        }, e.prototype.onreset = function() {
                            this.dom = [], this.root = new o.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null
                        }, e.prototype.onend = function() {
                            this.done || (this.done = !0, this.parser = null, this.handleCallback(null))
                        }, e.prototype.onerror = function(e) {
                            this.handleCallback(e)
                        }, e.prototype.onclosetag = function() {
                            this.lastNode = null;
                            var e = this.tagStack.pop();
                            this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e)
                        }, e.prototype.onopentag = function(e, t) {
                            var n = this.options.xmlMode ? a.ElementType.Tag : void 0,
                                r = new o.Element(e, t, void 0, n);
                            this.addNode(r), this.tagStack.push(r)
                        }, e.prototype.ontext = function(e) {
                            var t = this.lastNode;
                            if (t && t.type === a.ElementType.Text) t.data += e, this.options.withEndIndices && (t.endIndex = this.parser.endIndex);
                            else {
                                var n = new o.Text(e);
                                this.addNode(n), this.lastNode = n
                            }
                        }, e.prototype.oncomment = function(e) {
                            if (this.lastNode && this.lastNode.type === a.ElementType.Comment) this.lastNode.data += e;
                            else {
                                var t = new o.Comment(e);
                                this.addNode(t), this.lastNode = t
                            }
                        }, e.prototype.oncommentend = function() {
                            this.lastNode = null
                        }, e.prototype.oncdatastart = function() {
                            var e = new o.Text(""),
                                t = new o.CDATA([e]);
                            this.addNode(t), e.parent = t, this.lastNode = e
                        }, e.prototype.oncdataend = function() {
                            this.lastNode = null
                        }, e.prototype.onprocessinginstruction = function(e, t) {
                            var n = new o.ProcessingInstruction(e, t);
                            this.addNode(n)
                        }, e.prototype.handleCallback = function(e) {
                            if ("function" == typeof this.callback) this.callback(e, this.dom);
                            else if (e) throw e
                        }, e.prototype.addNode = function(e) {
                            var t = this.tagStack[this.tagStack.length - 1],
                                n = t.children[t.children.length - 1];
                            this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), t.children.push(e), n && (e.prev = n, n.next = e), e.parent = t, this.lastNode = null
                        }, e
                    }();
                t.DomHandler = l, t.default = l
            },
            79: function(e, t, n) {
                "use strict";
                var r, i = this && this.__extends || (r = function(e, t) {
                        return r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, r(e, t)
                    }, function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function __() {
                            this.constructor = e
                        }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
                    }),
                    a = this && this.__assign || function() {
                        return a = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                            return e
                        }, a.apply(this, arguments)
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.cloneNode = t.hasChildren = t.isDocument = t.isDirective = t.isComment = t.isText = t.isCDATA = t.isTag = t.Element = t.Document = t.CDATA = t.NodeWithChildren = t.ProcessingInstruction = t.Comment = t.Text = t.DataNode = t.Node = void 0;
                var o = n(908),
                    s = function() {
                        function e() {
                            this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null
                        }
                        return Object.defineProperty(e.prototype, "parentNode", {
                            get: function() {
                                return this.parent
                            },
                            set: function(e) {
                                this.parent = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "previousSibling", {
                            get: function() {
                                return this.prev
                            },
                            set: function(e) {
                                this.prev = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "nextSibling", {
                            get: function() {
                                return this.next
                            },
                            set: function(e) {
                                this.next = e
                            },
                            enumerable: !1,
                            configurable: !0
                        }), e.prototype.cloneNode = function(e) {
                            return void 0 === e && (e = !1), E(this, e)
                        }, e
                    }();
                t.Node = s;
                var l = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.data = t, n
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeValue", {
                        get: function() {
                            return this.data
                        },
                        set: function(e) {
                            this.data = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(s);
                t.DataNode = l;
                var c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Text, t
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 3
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.Text = c;
                var u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Comment, t
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 8
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.Comment = u;
                var d = function(e) {
                    function t(t, n) {
                        var r = e.call(this, n) || this;
                        return r.name = t, r.type = o.ElementType.Directive, r
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 1
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(l);
                t.ProcessingInstruction = d;
                var p = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.children = t, n
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "firstChild", {
                        get: function() {
                            var e;
                            return null !== (e = this.children[0]) && void 0 !== e ? e : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "lastChild", {
                        get: function() {
                            return this.children.length > 0 ? this.children[this.children.length - 1] : null
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "childNodes", {
                        get: function() {
                            return this.children
                        },
                        set: function(e) {
                            this.children = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(s);
                t.NodeWithChildren = p;
                var h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.CDATA, t
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 4
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);
                t.CDATA = h;
                var f = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.type = o.ElementType.Root, t
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 9
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);
                t.Document = f;
                var m = function(e) {
                    function t(t, n, r, i) {
                        void 0 === r && (r = []), void 0 === i && (i = "script" === t ? o.ElementType.Script : "style" === t ? o.ElementType.Style : o.ElementType.Tag);
                        var a = e.call(this, r) || this;
                        return a.name = t, a.attribs = n, a.type = i, a
                    }
                    return i(t, e), Object.defineProperty(t.prototype, "nodeType", {
                        get: function() {
                            return 1
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "tagName", {
                        get: function() {
                            return this.name
                        },
                        set: function(e) {
                            this.name = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "attributes", {
                        get: function() {
                            var e = this;
                            return Object.keys(this.attribs).map((function(t) {
                                var n, r;
                                return {
                                    name: t,
                                    value: e.attribs[t],
                                    namespace: null === (n = e["x-attribsNamespace"]) || void 0 === n ? void 0 : n[t],
                                    prefix: null === (r = e["x-attribsPrefix"]) || void 0 === r ? void 0 : r[t]
                                }
                            }))
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t
                }(p);

                function g(e) {
                    return (0, o.isTag)(e)
                }

                function v(e) {
                    return e.type === o.ElementType.CDATA
                }

                function b(e) {
                    return e.type === o.ElementType.Text
                }

                function y(e) {
                    return e.type === o.ElementType.Comment
                }

                function _(e) {
                    return e.type === o.ElementType.Directive
                }

                function C(e) {
                    return e.type === o.ElementType.Root
                }

                function E(e, t) {
                    var n;
                    if (void 0 === t && (t = !1), b(e)) n = new c(e.data);
                    else if (y(e)) n = new u(e.data);
                    else if (g(e)) {
                        var r = t ? w(e.children) : [],
                            i = new m(e.name, a({}, e.attribs), r);
                        r.forEach((function(e) {
                            return e.parent = i
                        })), null != e.namespace && (i.namespace = e.namespace), e["x-attribsNamespace"] && (i["x-attribsNamespace"] = a({}, e["x-attribsNamespace"])), e["x-attribsPrefix"] && (i["x-attribsPrefix"] = a({}, e["x-attribsPrefix"])), n = i
                    } else if (v(e)) {
                        r = t ? w(e.children) : [];
                        var o = new h(r);
                        r.forEach((function(e) {
                            return e.parent = o
                        })), n = o
                    } else if (C(e)) {
                        r = t ? w(e.children) : [];
                        var s = new f(r);
                        r.forEach((function(e) {
                            return e.parent = s
                        })), e["x-mode"] && (s["x-mode"] = e["x-mode"]), n = s
                    } else {
                        if (!_(e)) throw new Error("Not implemented yet: ".concat(e.type));
                        var l = new d(e.name, e.data);
                        null != e["x-name"] && (l["x-name"] = e["x-name"], l["x-publicId"] = e["x-publicId"], l["x-systemId"] = e["x-systemId"]), n = l
                    }
                    return n.startIndex = e.startIndex, n.endIndex = e.endIndex, null != e.sourceCodeLocation && (n.sourceCodeLocation = e.sourceCodeLocation), n
                }

                function w(e) {
                    for (var t = e.map((function(e) {
                            return E(e, !0)
                        })), n = 1; n < t.length; n++) t[n].prev = t[n - 1], t[n - 1].next = t[n];
                    return t
                }
                t.Element = m, t.isTag = g, t.isCDATA = v, t.isText = b, t.isComment = y, t.isDirective = _, t.isDocument = C, t.hasChildren = function(e) {
                    return Object.prototype.hasOwnProperty.call(e, "children")
                }, t.cloneNode = E
            },
            139: function(e) {
                var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
                    n = /\n/g,
                    r = /^\s*/,
                    i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
                    a = /^:\s*/,
                    o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
                    s = /^[;\s]*/,
                    l = /^\s+|\s+$/g,
                    c = "";

                function u(e) {
                    return e ? e.replace(l, c) : c
                }
                e.exports = function(e, l) {
                    if ("string" != typeof e) throw new TypeError("First argument must be a string");
                    if (!e) return [];
                    l = l || {};
                    var d = 1,
                        p = 1;

                    function h(e) {
                        var t = e.match(n);
                        t && (d += t.length);
                        var r = e.lastIndexOf("\n");
                        p = ~r ? e.length - r : p + e.length
                    }

                    function f() {
                        var e = {
                            line: d,
                            column: p
                        };
                        return function(t) {
                            return t.position = new m(e), y(), t
                        }
                    }

                    function m(e) {
                        this.start = e, this.end = {
                            line: d,
                            column: p
                        }, this.source = l.source
                    }
                    m.prototype.content = e;
                    var g = [];

                    function v(t) {
                        var n = new Error(l.source + ":" + d + ":" + p + ": " + t);
                        if (n.reason = t, n.filename = l.source, n.line = d, n.column = p, n.source = e, !l.silent) throw n;
                        g.push(n)
                    }

                    function b(t) {
                        var n = t.exec(e);
                        if (n) {
                            var r = n[0];
                            return h(r), e = e.slice(r.length), n
                        }
                    }

                    function y() {
                        b(r)
                    }

                    function _(e) {
                        var t;
                        for (e = e || []; t = C();) !1 !== t && e.push(t);
                        return e
                    }

                    function C() {
                        var t = f();
                        if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                            for (var n = 2; c != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
                            if (n += 2, c === e.charAt(n - 1)) return v("End of comment missing");
                            var r = e.slice(2, n - 2);
                            return p += 2, h(r), e = e.slice(n), p += 2, t({
                                type: "comment",
                                comment: r
                            })
                        }
                    }

                    function E() {
                        var e = f(),
                            n = b(i);
                        if (n) {
                            if (C(), !b(a)) return v("property missing ':'");
                            var r = b(o),
                                l = e({
                                    type: "declaration",
                                    property: u(n[0].replace(t, c)),
                                    value: r ? u(r[0].replace(t, c)) : c
                                });
                            return b(s), l
                        }
                    }
                    return y(),
                        function() {
                            var e, t = [];
                            for (_(t); e = E();) !1 !== e && (t.push(e), _(t));
                            return t
                        }()
                }
            },
            921: function(e, t) {
                "use strict";
                var n = "function" == typeof Symbol && Symbol.for,
                    r = n ? Symbol.for("react.element") : 60103,
                    i = n ? Symbol.for("react.portal") : 60106,
                    a = n ? Symbol.for("react.fragment") : 60107,
                    o = n ? Symbol.for("react.strict_mode") : 60108,
                    s = n ? Symbol.for("react.profiler") : 60114,
                    l = n ? Symbol.for("react.provider") : 60109,
                    c = n ? Symbol.for("react.context") : 60110,
                    u = n ? Symbol.for("react.async_mode") : 60111,
                    d = n ? Symbol.for("react.concurrent_mode") : 60111,
                    p = n ? Symbol.for("react.forward_ref") : 60112,
                    h = n ? Symbol.for("react.suspense") : 60113,
                    f = n ? Symbol.for("react.suspense_list") : 60120,
                    m = n ? Symbol.for("react.memo") : 60115,
                    g = n ? Symbol.for("react.lazy") : 60116,
                    v = n ? Symbol.for("react.block") : 60121,
                    b = n ? Symbol.for("react.fundamental") : 60117,
                    y = n ? Symbol.for("react.responder") : 60118,
                    _ = n ? Symbol.for("react.scope") : 60119;

                function C(e) {
                    if ("object" == typeof e && null !== e) {
                        var t = e.$$typeof;
                        switch (t) {
                            case r:
                                switch (e = e.type) {
                                    case u:
                                    case d:
                                    case a:
                                    case s:
                                    case o:
                                    case h:
                                        return e;
                                    default:
                                        switch (e = e && e.$$typeof) {
                                            case c:
                                            case p:
                                            case g:
                                            case m:
                                            case l:
                                                return e;
                                            default:
                                                return t
                                        }
                                }
                            case i:
                                return t
                        }
                    }
                }

                function E(e) {
                    return C(e) === d
                }
                t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = r, t.ForwardRef = p, t.Fragment = a, t.Lazy = g, t.Memo = m, t.Portal = i, t.Profiler = s, t.StrictMode = o, t.Suspense = h, t.isAsyncMode = function(e) {
                    return E(e) || C(e) === u
                }, t.isConcurrentMode = E, t.isContextConsumer = function(e) {
                    return C(e) === c
                }, t.isContextProvider = function(e) {
                    return C(e) === l
                }, t.isElement = function(e) {
                    return "object" == typeof e && null !== e && e.$$typeof === r
                }, t.isForwardRef = function(e) {
                    return C(e) === p
                }, t.isFragment = function(e) {
                    return C(e) === a
                }, t.isLazy = function(e) {
                    return C(e) === g
                }, t.isMemo = function(e) {
                    return C(e) === m
                }, t.isPortal = function(e) {
                    return C(e) === i
                }, t.isProfiler = function(e) {
                    return C(e) === s
                }, t.isStrictMode = function(e) {
                    return C(e) === o
                }, t.isSuspense = function(e) {
                    return C(e) === h
                }, t.isValidElementType = function(e) {
                    return "string" == typeof e || "function" == typeof e || e === a || e === d || e === s || e === o || e === h || e === f || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === p || e.$$typeof === b || e.$$typeof === y || e.$$typeof === _ || e.$$typeof === v)
                }, t.typeOf = C
            },
            864: function(e, t, n) {
                "use strict";
                e.exports = n(921)
            },
            726: function(e, t, n) {
                "use strict";

                function r(e, t, n, r, i, a, o) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o
                }
                const i = {};
                ["children", "dangerouslySetInnerHTML", "defaultValue", "defaultChecked", "innerHTML", "suppressContentEditableWarning", "suppressHydrationWarning", "style"].forEach((e => {
                    i[e] = new r(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((([e, t]) => {
                    i[e] = new r(e, 1, !1, t, null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((e => {
                    i[e] = new r(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((e => {
                    i[e] = new r(e, 2, !1, e, null, !1, !1)
                })), ["allowFullScreen", "async", "autoFocus", "autoPlay", "controls", "default", "defer", "disabled", "disablePictureInPicture", "disableRemotePlayback", "formNoValidate", "hidden", "loop", "noModule", "noValidate", "open", "playsInline", "readOnly", "required", "reversed", "scoped", "seamless", "itemScope"].forEach((e => {
                    i[e] = new r(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((e => {
                    i[e] = new r(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((e => {
                    i[e] = new r(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((e => {
                    i[e] = new r(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((e => {
                    i[e] = new r(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                const a = /[\-\:]([a-z])/g,
                    o = e => e[1].toUpperCase();
                ["accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "xmlns:xlink", "x-height"].forEach((e => {
                    const t = e.replace(a, o);
                    i[t] = new r(t, 1, !1, e, null, !1, !1)
                })), ["xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type"].forEach((e => {
                    const t = e.replace(a, o);
                    i[t] = new r(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((e => {
                    const t = e.replace(a, o);
                    i[t] = new r(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((e => {
                    i[e] = new r(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), i.xlinkHref = new r("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((e => {
                    i[e] = new r(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                const {
                    CAMELCASE: s,
                    SAME: l,
                    possibleStandardNames: c
                } = n(229), u = RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")), d = Object.keys(c).reduce(((e, t) => {
                    const n = c[t];
                    return n === l ? e[t] = t : n === s ? e[t.toLowerCase()] = t : e[t] = n, e
                }), {});
                t.BOOLEAN = 3, t.BOOLEANISH_STRING = 2, t.NUMERIC = 5, t.OVERLOADED_BOOLEAN = 4, t.POSITIVE_NUMERIC = 6, t.RESERVED = 0, t.STRING = 1, t.getPropertyInfo = function(e) {
                    return i.hasOwnProperty(e) ? i[e] : null
                }, t.isCustomAttribute = u, t.possibleStandardNames = d
            },
            229: function(e, t) {
                t.SAME = 0, t.CAMELCASE = 1, t.possibleStandardNames = {
                    accept: 0,
                    acceptCharset: 1,
                    "accept-charset": "acceptCharset",
                    accessKey: 1,
                    action: 0,
                    allowFullScreen: 1,
                    alt: 0,
                    as: 0,
                    async: 0,
                    autoCapitalize: 1,
                    autoComplete: 1,
                    autoCorrect: 1,
                    autoFocus: 1,
                    autoPlay: 1,
                    autoSave: 1,
                    capture: 0,
                    cellPadding: 1,
                    cellSpacing: 1,
                    challenge: 0,
                    charSet: 1,
                    checked: 0,
                    children: 0,
                    cite: 0,
                    class: "className",
                    classID: 1,
                    className: 1,
                    cols: 0,
                    colSpan: 1,
                    content: 0,
                    contentEditable: 1,
                    contextMenu: 1,
                    controls: 0,
                    controlsList: 1,
                    coords: 0,
                    crossOrigin: 1,
                    dangerouslySetInnerHTML: 1,
                    data: 0,
                    dateTime: 1,
                    default: 0,
                    defaultChecked: 1,
                    defaultValue: 1,
                    defer: 0,
                    dir: 0,
                    disabled: 0,
                    disablePictureInPicture: 1,
                    disableRemotePlayback: 1,
                    download: 0,
                    draggable: 0,
                    encType: 1,
                    enterKeyHint: 1,
                    for: "htmlFor",
                    form: 0,
                    formMethod: 1,
                    formAction: 1,
                    formEncType: 1,
                    formNoValidate: 1,
                    formTarget: 1,
                    frameBorder: 1,
                    headers: 0,
                    height: 0,
                    hidden: 0,
                    high: 0,
                    href: 0,
                    hrefLang: 1,
                    htmlFor: 1,
                    httpEquiv: 1,
                    "http-equiv": "httpEquiv",
                    icon: 0,
                    id: 0,
                    innerHTML: 1,
                    inputMode: 1,
                    integrity: 0,
                    is: 0,
                    itemID: 1,
                    itemProp: 1,
                    itemRef: 1,
                    itemScope: 1,
                    itemType: 1,
                    keyParams: 1,
                    keyType: 1,
                    kind: 0,
                    label: 0,
                    lang: 0,
                    list: 0,
                    loop: 0,
                    low: 0,
                    manifest: 0,
                    marginWidth: 1,
                    marginHeight: 1,
                    max: 0,
                    maxLength: 1,
                    media: 0,
                    mediaGroup: 1,
                    method: 0,
                    min: 0,
                    minLength: 1,
                    multiple: 0,
                    muted: 0,
                    name: 0,
                    noModule: 1,
                    nonce: 0,
                    noValidate: 1,
                    open: 0,
                    optimum: 0,
                    pattern: 0,
                    placeholder: 0,
                    playsInline: 1,
                    poster: 0,
                    preload: 0,
                    profile: 0,
                    radioGroup: 1,
                    readOnly: 1,
                    referrerPolicy: 1,
                    rel: 0,
                    required: 0,
                    reversed: 0,
                    role: 0,
                    rows: 0,
                    rowSpan: 1,
                    sandbox: 0,
                    scope: 0,
                    scoped: 0,
                    scrolling: 0,
                    seamless: 0,
                    selected: 0,
                    shape: 0,
                    size: 0,
                    sizes: 0,
                    span: 0,
                    spellCheck: 1,
                    src: 0,
                    srcDoc: 1,
                    srcLang: 1,
                    srcSet: 1,
                    start: 0,
                    step: 0,
                    style: 0,
                    summary: 0,
                    tabIndex: 1,
                    target: 0,
                    title: 0,
                    type: 0,
                    useMap: 1,
                    value: 0,
                    width: 0,
                    wmode: 0,
                    wrap: 0,
                    about: 0,
                    accentHeight: 1,
                    "accent-height": "accentHeight",
                    accumulate: 0,
                    additive: 0,
                    alignmentBaseline: 1,
                    "alignment-baseline": "alignmentBaseline",
                    allowReorder: 1,
                    alphabetic: 0,
                    amplitude: 0,
                    arabicForm: 1,
                    "arabic-form": "arabicForm",
                    ascent: 0,
                    attributeName: 1,
                    attributeType: 1,
                    autoReverse: 1,
                    azimuth: 0,
                    baseFrequency: 1,
                    baselineShift: 1,
                    "baseline-shift": "baselineShift",
                    baseProfile: 1,
                    bbox: 0,
                    begin: 0,
                    bias: 0,
                    by: 0,
                    calcMode: 1,
                    capHeight: 1,
                    "cap-height": "capHeight",
                    clip: 0,
                    clipPath: 1,
                    "clip-path": "clipPath",
                    clipPathUnits: 1,
                    clipRule: 1,
                    "clip-rule": "clipRule",
                    color: 0,
                    colorInterpolation: 1,
                    "color-interpolation": "colorInterpolation",
                    colorInterpolationFilters: 1,
                    "color-interpolation-filters": "colorInterpolationFilters",
                    colorProfile: 1,
                    "color-profile": "colorProfile",
                    colorRendering: 1,
                    "color-rendering": "colorRendering",
                    contentScriptType: 1,
                    contentStyleType: 1,
                    cursor: 0,
                    cx: 0,
                    cy: 0,
                    d: 0,
                    datatype: 0,
                    decelerate: 0,
                    descent: 0,
                    diffuseConstant: 1,
                    direction: 0,
                    display: 0,
                    divisor: 0,
                    dominantBaseline: 1,
                    "dominant-baseline": "dominantBaseline",
                    dur: 0,
                    dx: 0,
                    dy: 0,
                    edgeMode: 1,
                    elevation: 0,
                    enableBackground: 1,
                    "enable-background": "enableBackground",
                    end: 0,
                    exponent: 0,
                    externalResourcesRequired: 1,
                    fill: 0,
                    fillOpacity: 1,
                    "fill-opacity": "fillOpacity",
                    fillRule: 1,
                    "fill-rule": "fillRule",
                    filter: 0,
                    filterRes: 1,
                    filterUnits: 1,
                    floodOpacity: 1,
                    "flood-opacity": "floodOpacity",
                    floodColor: 1,
                    "flood-color": "floodColor",
                    focusable: 0,
                    fontFamily: 1,
                    "font-family": "fontFamily",
                    fontSize: 1,
                    "font-size": "fontSize",
                    fontSizeAdjust: 1,
                    "font-size-adjust": "fontSizeAdjust",
                    fontStretch: 1,
                    "font-stretch": "fontStretch",
                    fontStyle: 1,
                    "font-style": "fontStyle",
                    fontVariant: 1,
                    "font-variant": "fontVariant",
                    fontWeight: 1,
                    "font-weight": "fontWeight",
                    format: 0,
                    from: 0,
                    fx: 0,
                    fy: 0,
                    g1: 0,
                    g2: 0,
                    glyphName: 1,
                    "glyph-name": "glyphName",
                    glyphOrientationHorizontal: 1,
                    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
                    glyphOrientationVertical: 1,
                    "glyph-orientation-vertical": "glyphOrientationVertical",
                    glyphRef: 1,
                    gradientTransform: 1,
                    gradientUnits: 1,
                    hanging: 0,
                    horizAdvX: 1,
                    "horiz-adv-x": "horizAdvX",
                    horizOriginX: 1,
                    "horiz-origin-x": "horizOriginX",
                    ideographic: 0,
                    imageRendering: 1,
                    "image-rendering": "imageRendering",
                    in2: 0,
                    in: 0,
                    inlist: 0,
                    intercept: 0,
                    k1: 0,
                    k2: 0,
                    k3: 0,
                    k4: 0,
                    k: 0,
                    kernelMatrix: 1,
                    kernelUnitLength: 1,
                    kerning: 0,
                    keyPoints: 1,
                    keySplines: 1,
                    keyTimes: 1,
                    lengthAdjust: 1,
                    letterSpacing: 1,
                    "letter-spacing": "letterSpacing",
                    lightingColor: 1,
                    "lighting-color": "lightingColor",
                    limitingConeAngle: 1,
                    local: 0,
                    markerEnd: 1,
                    "marker-end": "markerEnd",
                    markerHeight: 1,
                    markerMid: 1,
                    "marker-mid": "markerMid",
                    markerStart: 1,
                    "marker-start": "markerStart",
                    markerUnits: 1,
                    markerWidth: 1,
                    mask: 0,
                    maskContentUnits: 1,
                    maskUnits: 1,
                    mathematical: 0,
                    mode: 0,
                    numOctaves: 1,
                    offset: 0,
                    opacity: 0,
                    operator: 0,
                    order: 0,
                    orient: 0,
                    orientation: 0,
                    origin: 0,
                    overflow: 0,
                    overlinePosition: 1,
                    "overline-position": "overlinePosition",
                    overlineThickness: 1,
                    "overline-thickness": "overlineThickness",
                    paintOrder: 1,
                    "paint-order": "paintOrder",
                    panose1: 0,
                    "panose-1": "panose1",
                    pathLength: 1,
                    patternContentUnits: 1,
                    patternTransform: 1,
                    patternUnits: 1,
                    pointerEvents: 1,
                    "pointer-events": "pointerEvents",
                    points: 0,
                    pointsAtX: 1,
                    pointsAtY: 1,
                    pointsAtZ: 1,
                    prefix: 0,
                    preserveAlpha: 1,
                    preserveAspectRatio: 1,
                    primitiveUnits: 1,
                    property: 0,
                    r: 0,
                    radius: 0,
                    refX: 1,
                    refY: 1,
                    renderingIntent: 1,
                    "rendering-intent": "renderingIntent",
                    repeatCount: 1,
                    repeatDur: 1,
                    requiredExtensions: 1,
                    requiredFeatures: 1,
                    resource: 0,
                    restart: 0,
                    result: 0,
                    results: 0,
                    rotate: 0,
                    rx: 0,
                    ry: 0,
                    scale: 0,
                    security: 0,
                    seed: 0,
                    shapeRendering: 1,
                    "shape-rendering": "shapeRendering",
                    slope: 0,
                    spacing: 0,
                    specularConstant: 1,
                    specularExponent: 1,
                    speed: 0,
                    spreadMethod: 1,
                    startOffset: 1,
                    stdDeviation: 1,
                    stemh: 0,
                    stemv: 0,
                    stitchTiles: 1,
                    stopColor: 1,
                    "stop-color": "stopColor",
                    stopOpacity: 1,
                    "stop-opacity": "stopOpacity",
                    strikethroughPosition: 1,
                    "strikethrough-position": "strikethroughPosition",
                    strikethroughThickness: 1,
                    "strikethrough-thickness": "strikethroughThickness",
                    string: 0,
                    stroke: 0,
                    strokeDasharray: 1,
                    "stroke-dasharray": "strokeDasharray",
                    strokeDashoffset: 1,
                    "stroke-dashoffset": "strokeDashoffset",
                    strokeLinecap: 1,
                    "stroke-linecap": "strokeLinecap",
                    strokeLinejoin: 1,
                    "stroke-linejoin": "strokeLinejoin",
                    strokeMiterlimit: 1,
                    "stroke-miterlimit": "strokeMiterlimit",
                    strokeWidth: 1,
                    "stroke-width": "strokeWidth",
                    strokeOpacity: 1,
                    "stroke-opacity": "strokeOpacity",
                    suppressContentEditableWarning: 1,
                    suppressHydrationWarning: 1,
                    surfaceScale: 1,
                    systemLanguage: 1,
                    tableValues: 1,
                    targetX: 1,
                    targetY: 1,
                    textAnchor: 1,
                    "text-anchor": "textAnchor",
                    textDecoration: 1,
                    "text-decoration": "textDecoration",
                    textLength: 1,
                    textRendering: 1,
                    "text-rendering": "textRendering",
                    to: 0,
                    transform: 0,
                    typeof: 0,
                    u1: 0,
                    u2: 0,
                    underlinePosition: 1,
                    "underline-position": "underlinePosition",
                    underlineThickness: 1,
                    "underline-thickness": "underlineThickness",
                    unicode: 0,
                    unicodeBidi: 1,
                    "unicode-bidi": "unicodeBidi",
                    unicodeRange: 1,
                    "unicode-range": "unicodeRange",
                    unitsPerEm: 1,
                    "units-per-em": "unitsPerEm",
                    unselectable: 0,
                    vAlphabetic: 1,
                    "v-alphabetic": "vAlphabetic",
                    values: 0,
                    vectorEffect: 1,
                    "vector-effect": "vectorEffect",
                    version: 0,
                    vertAdvY: 1,
                    "vert-adv-y": "vertAdvY",
                    vertOriginX: 1,
                    "vert-origin-x": "vertOriginX",
                    vertOriginY: 1,
                    "vert-origin-y": "vertOriginY",
                    vHanging: 1,
                    "v-hanging": "vHanging",
                    vIdeographic: 1,
                    "v-ideographic": "vIdeographic",
                    viewBox: 1,
                    viewTarget: 1,
                    visibility: 0,
                    vMathematical: 1,
                    "v-mathematical": "vMathematical",
                    vocab: 0,
                    widths: 0,
                    wordSpacing: 1,
                    "word-spacing": "wordSpacing",
                    writingMode: 1,
                    "writing-mode": "writingMode",
                    x1: 0,
                    x2: 0,
                    x: 0,
                    xChannelSelector: 1,
                    xHeight: 1,
                    "x-height": "xHeight",
                    xlinkActuate: 1,
                    "xlink:actuate": "xlinkActuate",
                    xlinkArcrole: 1,
                    "xlink:arcrole": "xlinkArcrole",
                    xlinkHref: 1,
                    "xlink:href": "xlinkHref",
                    xlinkRole: 1,
                    "xlink:role": "xlinkRole",
                    xlinkShow: 1,
                    "xlink:show": "xlinkShow",
                    xlinkTitle: 1,
                    "xlink:title": "xlinkTitle",
                    xlinkType: 1,
                    "xlink:type": "xlinkType",
                    xmlBase: 1,
                    "xml:base": "xmlBase",
                    xmlLang: 1,
                    "xml:lang": "xmlLang",
                    xmlns: 0,
                    "xml:space": "xmlSpace",
                    xmlnsXlink: 1,
                    "xmlns:xlink": "xmlnsXlink",
                    xmlSpace: 1,
                    y1: 0,
                    y2: 0,
                    y: 0,
                    yChannelSelector: 1,
                    z: 0,
                    zoomAndPan: 1
                }
            },
            476: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = r(n(174)),
                    a = n(678);
                t.default = function(e, t) {
                    var n = {};
                    return e && "string" == typeof e ? ((0, i.default)(e, (function(e, r) {
                        e && r && (n[(0, a.camelCase)(e, t)] = r)
                    })), n) : n
                }
            },
            678: function(e, t) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.camelCase = void 0;
                var n = /^--[a-zA-Z0-9-]+$/,
                    r = /-([a-z])/g,
                    i = /^[^-]+$/,
                    a = /^-(webkit|moz|ms|o|khtml)-/,
                    o = /^-(ms)-/,
                    s = function(e, t) {
                        return t.toUpperCase()
                    },
                    l = function(e, t) {
                        return "".concat(t, "-")
                    };
                t.camelCase = function(e, t) {
                    return void 0 === t && (t = {}),
                        function(e) {
                            return !e || i.test(e) || n.test(e)
                        }(e) ? e : (e = e.toLowerCase(), (e = t.reactCompat ? e.replace(o, l) : e.replace(a, l)).replace(r, s))
                }
            },
            174: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = r(n(139));
                t.default = function(e, t) {
                    var n = null;
                    if (!e || "string" != typeof e) return n;
                    var r = (0, i.default)(e),
                        a = "function" == typeof t;
                    return r.forEach((function(e) {
                        if ("declaration" === e.type) {
                            var r = e.property,
                                i = e.value;
                            a ? t(r, i, e) : i && ((n = n || {})[r] = i)
                        }
                    })), n
                }
            },
            196: function(e) {
                "use strict";
                e.exports = window.React
            }
        },
        t = {};

    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var a = t[r] = {
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.exports
    }
    n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            "use strict";
            var e = window.wp.element,
                t = window.wp.data,
                r = window.wp.plugins,
                i = window.wp.blockEditor,
                a = window.wp.components;
            const o = 72,
                s = 32,
                l = 24,
                c = 16,
                u = 2,
                d = 1.4,
                p = 1.2,
                h = 1,
                f = "currentColor",
                m = "none",
                g = "#fff",
                v = {
                    stroke: f,
                    strokeWidth: d,
                    fill: m,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                },
                b = {
                    fill: f,
                    stroke: m
                },
                y = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: l,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M9.8132 15.9038L9 18.75L8.1868 15.9038C7.75968 14.4089 6.59112 13.2403 5.09619 12.8132L2.25 12L5.09619 11.1868C6.59113 10.7597 7.75968 9.59112 8.1868 8.09619L9 5.25L9.8132 8.09619C10.2403 9.59113 11.4089 10.7597 12.9038 11.1868L15.75 12L12.9038 12.8132C11.4089 13.2403 10.2403 14.4089 9.8132 15.9038Z",
                        ...v,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M16.8942 20.5673L16.5 21.75L16.1058 20.5673C15.8818 19.8954 15.3546 19.3682 14.6827 19.1442L13.5 18.75L14.6827 18.3558C15.3546 18.1318 15.8818 17.6046 16.1058 16.9327L16.5 15.75L16.8942 16.9327C17.1182 17.6046 17.6454 18.1318 18.3173 18.3558L19.5 18.75L18.3173 19.1442C17.6454 19.3682 17.1182 19.8954 16.8942 20.5673Z",
                        ...v,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M18.2589 8.71454L18 9.75L17.7411 8.71454C17.4388 7.50533 16.4947 6.56117 15.2855 6.25887L14.25 6L15.2855 5.74113C16.4947 5.43883 17.4388 4.49467 17.7411 3.28546L18 2.25L18.2589 3.28546C18.5612 4.49467 19.5053 5.43883 20.7145 5.74113L21.75 6L20.7145 6.25887C19.5053 6.56117 18.5612 7.50532 18.2589 8.71454Z",
                        ...v,
                        ...n
                    }))
                },
                _ = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: o,
                        height: l,
                        viewBox: "0 0 78 24",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M9.8132 15.9038L9 18.75L8.1868 15.9038C7.75968 14.4089 6.59112 13.2403 5.09619 12.8132L2.25 12L5.09619 11.1868C6.59113 10.7597 7.75968 9.59112 8.1868 8.09619L9 5.25L9.8132 8.09619C10.2403 9.59113 11.4089 10.7597 12.9038 11.1868L15.75 12L12.9038 12.8132C11.4089 13.2403 10.2403 14.4089 9.8132 15.9038Z",
                        ...v,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M16.8942 20.5673L16.5 21.75L16.1058 20.5673C15.8818 19.8954 15.3546 19.3682 14.6827 19.1442L13.5 18.75L14.6827 18.3558C15.3546 18.1318 15.8818 17.6046 16.1058 16.9327L16.5 15.75L16.8942 16.9327C17.1182 17.6046 17.6454 18.1318 18.3173 18.3558L19.5 18.75L18.3173 19.1442C17.6454 19.3682 17.1182 19.8954 16.8942 20.5673Z",
                        ...v,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M18.2589 8.71454L18 9.75L17.7411 8.71454C17.4388 7.50533 16.4947 6.56117 15.2855 6.25887L14.25 6L15.2855 5.74113C16.4947 5.43883 17.4388 4.49467 17.7411 3.28546L18 2.25L18.2589 3.28546C18.5612 4.49467 19.5053 5.43883 20.7145 5.74113L21.75 6L20.7145 6.25887C19.5053 6.56117 18.5612 7.50532 18.2589 8.71454Z",
                        ...v,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M31.8864 18H30.4091L34.6818 6.36364H36.1364L40.4091 18H38.9318L35.4545 8.20455H35.3636L31.8864 18ZM32.4318 13.4545H38.3864V14.7045H32.4318V13.4545ZM48.2216 11.2273L47.017 11.5682C46.9413 11.3674 46.8295 11.1723 46.6818 10.983C46.5379 10.7898 46.3409 10.6307 46.0909 10.5057C45.8409 10.3807 45.5208 10.3182 45.1307 10.3182C44.5966 10.3182 44.1515 10.4413 43.7955 10.6875C43.4432 10.9299 43.267 11.2386 43.267 11.6136C43.267 11.947 43.3883 12.2102 43.6307 12.4034C43.8731 12.5966 44.2519 12.7576 44.767 12.8864L46.0625 13.2045C46.8428 13.3939 47.4242 13.6837 47.8068 14.0739C48.1894 14.4602 48.3807 14.9583 48.3807 15.5682C48.3807 16.0682 48.2367 16.5152 47.9489 16.9091C47.6648 17.303 47.267 17.6136 46.7557 17.8409C46.2443 18.0682 45.6496 18.1818 44.9716 18.1818C44.0814 18.1818 43.3447 17.9886 42.7614 17.6023C42.178 17.2159 41.8087 16.6515 41.6534 15.9091L42.9261 15.5909C43.0473 16.0606 43.2765 16.4129 43.6136 16.6477C43.9545 16.8826 44.3996 17 44.9489 17C45.5739 17 46.0701 16.8674 46.4375 16.6023C46.8087 16.3333 46.9943 16.0114 46.9943 15.6364C46.9943 15.3333 46.8883 15.0795 46.6761 14.875C46.464 14.6667 46.1383 14.5114 45.6989 14.4091L44.2443 14.0682C43.4451 13.8788 42.858 13.5852 42.483 13.1875C42.1117 12.786 41.9261 12.2841 41.9261 11.6818C41.9261 11.1894 42.0644 10.7538 42.3409 10.375C42.6212 9.99621 43.0019 9.69886 43.483 9.48295C43.9678 9.26705 44.517 9.15909 45.1307 9.15909C45.9943 9.15909 46.6723 9.34848 47.1648 9.72727C47.661 10.1061 48.0133 10.6061 48.2216 11.2273ZM51.6491 14.8182L51.6264 13.1591H51.8991L55.7173 9.27273H57.3764L53.3082 13.3864H53.1946L51.6491 14.8182ZM50.3991 18V6.36364H51.7401V18H50.3991ZM55.9446 18L52.5355 13.6818L53.4901 12.75L57.6491 18H55.9446ZM64.2614 18H62.7841L67.0568 6.36364H68.5114L72.7841 18H71.3068L67.8295 8.20455H67.7386L64.2614 18ZM64.8068 13.4545H70.7614V14.7045H64.8068V13.4545ZM76.0057 6.36364V18H74.5966V6.36364H76.0057Z",
                        ...b,
                        ...n
                    }))
                },
                C = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 24 24",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M4.5 12.75l6 6 9-13.5",
                        ...v,
                        strokeWidth: p,
                        ...n
                    }))
                },
                E = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M2.66602 13.0007V3.00065C2.66602 2.55862 2.84161 2.1347 3.15417 1.82214C3.46673 1.50958 3.89065 1.33398 4.33268 1.33398H13.3327V14.6673H4.33268C3.89065 14.6673 3.46673 14.4917 3.15417 14.1792C2.84161 13.8666 2.66602 13.4427 2.66602 13.0007ZM2.66602 13.0007C2.66602 12.5586 2.84161 12.1347 3.15417 11.8221C3.46673 11.5096 3.89065 11.334 4.33268 11.334H13.3327",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M6 6.33333L7.33333 7.66667L10 5",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }))
                },
                w = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 24 24",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
                        ...v,
                        strokeWidth: p,
                        ...n
                    }))
                },
                x = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M2.4 10.8C1.63 10.8 1 10.17 1 9.4V2.4C1 1.63 1.63 1 2.4 1H9.4C10.17 1 10.8 1.63 10.8 2.4M6.6 5.2H13.6C14.3732 5.2 15 5.8268 15 6.6V13.6C15 14.3732 14.3732 15 13.6 15H6.6C5.8268 15 5.2 14.3732 5.2 13.6V6.6C5.2 5.8268 5.8268 5.2 6.6 5.2Z",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }))
                },
                k = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M8 8L12.2 12.2M8 12.2L12.2 8M2.4 10.8C1.63 10.8 1 10.17 1 9.4V2.4C1 1.63 1.63 1 2.4 1H9.4C10.17 1 10.8 1.63 10.8 2.4M6.6 5.2H13.6C14.3732 5.2 15 5.8268 15 6.6V13.6C15 14.3732 14.3732 15 13.6 15H6.6C5.8268 15 5.2 14.3732 5.2 13.6V6.6C5.2 5.8268 5.8268 5.2 6.6 5.2Z",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }))
                },
                S = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M8 13.334H14",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M11 2.33218C11.2652 2.06697 11.6249 1.91797 12 1.91797C12.1857 1.91797 12.3696 1.95455 12.5412 2.02562C12.7128 2.09669 12.8687 2.20086 13 2.33218C13.1313 2.4635 13.2355 2.61941 13.3066 2.79099C13.3776 2.96257 13.4142 3.14647 13.4142 3.33218C13.4142 3.5179 13.3776 3.7018 13.3066 3.87338C13.2355 4.04496 13.1313 4.20086 13 4.33218L4.66667 12.6655L2 13.3322L2.66667 10.6655L11 2.33218Z",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }))
                },
                M = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: l,
                        height: l,
                        viewBox: "0 0 19 18",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M14.918 2.25H4.41797C3.58954 2.25 2.91797 2.92157 2.91797 3.75V14.25C2.91797 15.0784 3.58954 15.75 4.41797 15.75H14.918C15.7464 15.75 16.418 15.0784 16.418 14.25V3.75C16.418 2.92157 15.7464 2.25 14.918 2.25Z",
                        ...v,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M7.41797 2.25V15.75",
                        ...v,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M11.168 6.75L13.418 9L11.168 11.25",
                        ...v,
                        ...n
                    }))
                },
                O = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 18 18",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M15.75 1.5V6H11.25",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M15.7516 9.75011C15.5923 11.2546 14.9323 12.6619 13.8774 13.7463C12.8225 14.8307 11.4338 15.5293 9.93435 15.7299C8.43486 15.9306 6.91143 15.6217 5.60853 14.8528C4.30562 14.0839 3.29878 12.8997 2.74957 11.49C2.20035 10.0804 2.14061 8.52708 2.57993 7.07942C3.01925 5.63175 3.93216 4.37364 5.17216 3.50696C6.41217 2.64029 7.90737 2.2153 9.41784 2.30019C10.9283 2.38509 12.3665 2.97494 13.5016 3.97511L15.7516 6.00011",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }))
                },
                z = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.32263 2.00631 4.71265 2.66082 3.50667 3.82667L2 5.33333",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M2 2V5.33333H5.33333",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14C9.67737 13.9937 11.2874 13.3392 12.4933 12.1733L14 10.6667",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M10.666 10.666H13.9993V13.9993",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }))
                },
                L = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M7.33333 8H2",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M10.6667 4H2",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M10.6667 12H2",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M12 6V10",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M14 8H10",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }))
                },
                T = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M7.33333 8H2",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M10.6667 4H2",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M10.6667 12H2",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M14 8H10",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }))
                },
                I = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M2 4.66667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H4.66667M11.3333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V4.66667M14 11.3333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H11.3333M4.66667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V11.3333M4.66667 5.33333H10M4.66667 8H11.3333M4.66667 10.6667H8.66667",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }))
                },
                P = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        left: (0, e.createElement)("svg", {
                            width: c,
                            height: c,
                            viewBox: "0 0 16 16",
                            fill: m,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M10 12L6 8L10 4",
                            ...v,
                            strokeWidth: d,
                            ...n
                        })),
                        right: (0, e.createElement)("svg", {
                            width: c,
                            height: c,
                            viewBox: "0 0 16 16",
                            fill: m,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M6 12L10 8L6 4",
                            ...v,
                            strokeWidth: d,
                            ...n
                        }))
                    }
                },
                R = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M8.00065 14.6673C11.6825 14.6673 14.6673 11.6825 14.6673 8.00065C14.6673 4.31875 11.6825 1.33398 8.00065 1.33398C4.31875 1.33398 1.33398 4.31875 1.33398 8.00065C1.33398 11.6825 4.31875 14.6673 8.00065 14.6673Z",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M5.33398 9.33398C5.33398 9.33398 6.33398 10.6673 8.00065 10.6673C9.66732 10.6673 10.6673 9.33398 10.6673 9.33398",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M6 6H6.00889",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M10 6H10.0089",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }))
                },
                A = function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M3.33398 5.33398L7.33398 9.33398",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M2.66602 9.33398L6.66602 5.33398L7.99935 3.33398",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M1.33398 3.33398H9.33398",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M4.66602 1.33398H5.33268",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M14.6667 14.6667L11.3333 8L8 14.6667",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }), (0, e.createElement)("path", {
                        d: "M9.33398 12H13.334",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }))
                },
                N = e => e.filter(Boolean).join(" "),
                V = async e => {
                    if (window.navigator.clipboard && window.isSecureContext) await window.navigator.clipboard.writeText(e);
                    else {
                        const t = document.createElement("textarea");
                        t.value = e, t.style.position = "absolute", t.style.left = "-999999px", t.style.opacity = "0", document.body.prepend(t), t.select();
                        try {
                            document.execCommand("copy")
                        } catch (e) {
                            console.error(e)
                        } finally {
                            t.remove()
                        }
                    }
                },
                H = e => e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                D = e => {
                    switch (!0) {
                        case e ? .percentage >= e ? .threshold ? .high:
                            return "high";
                        case e ? .percentage >= e ? .threshold ? .medium:
                            return "medium";
                        default:
                            return "low"
                    }
                };
            var F = window.wp.richText,
                j = window.wp.i18n,
                B = window.wp.apiFetch,
                W = n.n(B);
            const $ = async e => {
                const {
                    userCommand: t,
                    previousMessages: n,
                    useSystemMessage: r
                } = e, i = [];
                n ? .length && n.forEach((e => {
                    i.push({
                        role: e.role,
                        content: e.message
                    })
                })), i.push({
                    role: "user",
                    content: t
                });
                const a = {
                    message_array: i,
                    use_system_message: r,
                    is_admin: zip_ai_react ? .is_admin,
                    current_post_id: zip_ai_react ? .current_post_id,
                    current_page: zip_ai_react ? .current_page,
                    special_page: zip_ai_react ? .special_page
                };
                return W()({
                    path: "zip_ai/generate",
                    method: "POST",
                    data: a
                })
            };

            function U(e) {
                return U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, U(e)
            }

            function Z(e) {
                var t = function(e, t) {
                    if ("object" !== U(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(e, "string");
                        if ("object" !== U(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return String(e)
                }(e);
                return "symbol" === U(t) ? t : String(t)
            }

            function G(e, t, n) {
                return (t = Z(t)) in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function q(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(Object(n), !0).forEach((function(t) {
                        G(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function X() {
                return X = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, X.apply(this, arguments)
            }
            var K = n(196),
                J = function() {
                    function e(e) {
                        var t = this;
                        this._insertTag = function(e) {
                            var n;
                            n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, n), t.tags.push(e)
                        }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null
                    }
                    var t = e.prototype;
                    return t.hydrate = function(e) {
                        e.forEach(this._insertTag)
                    }, t.insert = function(e) {
                        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function(e) {
                            var t = document.createElement("style");
                            return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
                        }(this));
                        var t = this.tags[this.tags.length - 1];
                        if (this.isSpeedy) {
                            var n = function(e) {
                                if (e.sheet) return e.sheet;
                                for (var t = 0; t < document.styleSheets.length; t++)
                                    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                            }(t);
                            try {
                                n.insertRule(e, n.cssRules.length)
                            } catch (e) {}
                        } else t.appendChild(document.createTextNode(e));
                        this.ctr++
                    }, t.flush = function() {
                        this.tags.forEach((function(e) {
                            return e.parentNode && e.parentNode.removeChild(e)
                        })), this.tags = [], this.ctr = 0
                    }, e
                }(),
                Q = Math.abs,
                ee = String.fromCharCode,
                te = Object.assign;

            function ne(e) {
                return e.trim()
            }

            function re(e, t, n) {
                return e.replace(t, n)
            }

            function ie(e, t) {
                return e.indexOf(t)
            }

            function ae(e, t) {
                return 0 | e.charCodeAt(t)
            }

            function oe(e, t, n) {
                return e.slice(t, n)
            }

            function se(e) {
                return e.length
            }

            function le(e) {
                return e.length
            }

            function ce(e, t) {
                return t.push(e), e
            }
            var ue = 1,
                de = 1,
                pe = 0,
                he = 0,
                fe = 0,
                me = "";

            function ge(e, t, n, r, i, a, o) {
                return {
                    value: e,
                    root: t,
                    parent: n,
                    type: r,
                    props: i,
                    children: a,
                    line: ue,
                    column: de,
                    length: o,
                    return: ""
                }
            }

            function ve(e, t) {
                return te(ge("", null, null, "", null, null, 0), e, {
                    length: -e.length
                }, t)
            }

            function be() {
                return fe = he > 0 ? ae(me, --he) : 0, de--, 10 === fe && (de = 1, ue--), fe
            }

            function ye() {
                return fe = he < pe ? ae(me, he++) : 0, de++, 10 === fe && (de = 1, ue++), fe
            }

            function _e() {
                return ae(me, he)
            }

            function Ce() {
                return he
            }

            function Ee(e, t) {
                return oe(me, e, t)
            }

            function we(e) {
                switch (e) {
                    case 0:
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        return 5;
                    case 33:
                    case 43:
                    case 44:
                    case 47:
                    case 62:
                    case 64:
                    case 126:
                    case 59:
                    case 123:
                    case 125:
                        return 4;
                    case 58:
                        return 3;
                    case 34:
                    case 39:
                    case 40:
                    case 91:
                        return 2;
                    case 41:
                    case 93:
                        return 1
                }
                return 0
            }

            function xe(e) {
                return ue = de = 1, pe = se(me = e), he = 0, []
            }

            function ke(e) {
                return me = "", e
            }

            function Se(e) {
                return ne(Ee(he - 1, ze(91 === e ? e + 2 : 40 === e ? e + 1 : e)))
            }

            function Me(e) {
                for (;
                    (fe = _e()) && fe < 33;) ye();
                return we(e) > 2 || we(fe) > 3 ? "" : " "
            }

            function Oe(e, t) {
                for (; --t && ye() && !(fe < 48 || fe > 102 || fe > 57 && fe < 65 || fe > 70 && fe < 97););
                return Ee(e, Ce() + (t < 6 && 32 == _e() && 32 == ye()))
            }

            function ze(e) {
                for (; ye();) switch (fe) {
                    case e:
                        return he;
                    case 34:
                    case 39:
                        34 !== e && 39 !== e && ze(fe);
                        break;
                    case 40:
                        41 === e && ze(e);
                        break;
                    case 92:
                        ye()
                }
                return he
            }

            function Le(e, t) {
                for (; ye() && e + fe !== 57 && (e + fe !== 84 || 47 !== _e()););
                return "/*" + Ee(t, he - 1) + "*" + ee(47 === e ? e : ye())
            }

            function Te(e) {
                for (; !we(_e());) ye();
                return Ee(e, he)
            }
            var Ie = "-ms-",
                Pe = "-moz-",
                Re = "-webkit-",
                Ae = "comm",
                Ne = "rule",
                Ve = "decl",
                He = "@keyframes";

            function De(e, t) {
                for (var n = "", r = le(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || "";
                return n
            }

            function Fe(e, t, n, r) {
                switch (e.type) {
                    case "@layer":
                        if (e.children.length) break;
                    case "@import":
                    case Ve:
                        return e.return = e.return || e.value;
                    case Ae:
                        return "";
                    case He:
                        return e.return = e.value + "{" + De(e.children, r) + "}";
                    case Ne:
                        e.value = e.props.join(",")
                }
                return se(n = De(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
            }

            function je(e) {
                return ke(Be("", null, null, null, [""], e = xe(e), 0, [0], e))
            }

            function Be(e, t, n, r, i, a, o, s, l) {
                for (var c = 0, u = 0, d = o, p = 0, h = 0, f = 0, m = 1, g = 1, v = 1, b = 0, y = "", _ = i, C = a, E = r, w = y; g;) switch (f = b, b = ye()) {
                    case 40:
                        if (108 != f && 58 == ae(w, d - 1)) {
                            -1 != ie(w += re(Se(b), "&", "&\f"), "&\f") && (v = -1);
                            break
                        }
                    case 34:
                    case 39:
                    case 91:
                        w += Se(b);
                        break;
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        w += Me(f);
                        break;
                    case 92:
                        w += Oe(Ce() - 1, 7);
                        continue;
                    case 47:
                        switch (_e()) {
                            case 42:
                            case 47:
                                ce($e(Le(ye(), Ce()), t, n), l);
                                break;
                            default:
                                w += "/"
                        }
                        break;
                    case 123 * m:
                        s[c++] = se(w) * v;
                    case 125 * m:
                    case 59:
                    case 0:
                        switch (b) {
                            case 0:
                            case 125:
                                g = 0;
                            case 59 + u:
                                -1 == v && (w = re(w, /\f/g, "")), h > 0 && se(w) - d && ce(h > 32 ? Ue(w + ";", r, n, d - 1) : Ue(re(w, " ", "") + ";", r, n, d - 2), l);
                                break;
                            case 59:
                                w += ";";
                            default:
                                if (ce(E = We(w, t, n, c, u, i, s, y, _ = [], C = [], d), a), 123 === b)
                                    if (0 === u) Be(w, t, E, E, _, a, d, s, C);
                                    else switch (99 === p && 110 === ae(w, 3) ? 100 : p) {
                                        case 100:
                                        case 108:
                                        case 109:
                                        case 115:
                                            Be(e, E, E, r && ce(We(e, E, E, 0, 0, i, s, y, i, _ = [], d), C), i, C, d, s, r ? _ : C);
                                            break;
                                        default:
                                            Be(w, E, E, E, [""], C, 0, s, C)
                                    }
                        }
                        c = u = h = 0, m = v = 1, y = w = "", d = o;
                        break;
                    case 58:
                        d = 1 + se(w), h = f;
                    default:
                        if (m < 1)
                            if (123 == b) --m;
                            else if (125 == b && 0 == m++ && 125 == be()) continue;
                        switch (w += ee(b), b * m) {
                            case 38:
                                v = u > 0 ? 1 : (w += "\f", -1);
                                break;
                            case 44:
                                s[c++] = (se(w) - 1) * v, v = 1;
                                break;
                            case 64:
                                45 === _e() && (w += Se(ye())), p = _e(), u = d = se(y = w += Te(Ce())), b++;
                                break;
                            case 45:
                                45 === f && 2 == se(w) && (m = 0)
                        }
                }
                return a
            }

            function We(e, t, n, r, i, a, o, s, l, c, u) {
                for (var d = i - 1, p = 0 === i ? a : [""], h = le(p), f = 0, m = 0, g = 0; f < r; ++f)
                    for (var v = 0, b = oe(e, d + 1, d = Q(m = o[f])), y = e; v < h; ++v)(y = ne(m > 0 ? p[v] + " " + b : re(b, /&\f/g, p[v]))) && (l[g++] = y);
                return ge(e, t, n, 0 === i ? Ne : s, l, c, u)
            }

            function $e(e, t, n) {
                return ge(e, t, n, Ae, ee(fe), oe(e, 2, -2), 0)
            }

            function Ue(e, t, n, r) {
                return ge(e, t, n, Ve, oe(e, 0, r), oe(e, r + 1, -1), r)
            }
            var Ze = function(e, t, n) {
                    for (var r = 0, i = 0; r = i, i = _e(), 38 === r && 12 === i && (t[n] = 1), !we(i);) ye();
                    return Ee(e, he)
                },
                Ge = new WeakMap,
                qe = function(e) {
                    if ("rule" === e.type && e.parent && !(e.length < 1)) {
                        for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line;
                            "rule" !== n.type;)
                            if (!(n = n.parent)) return;
                        if ((1 !== e.props.length || 58 === t.charCodeAt(0) || Ge.get(n)) && !r) {
                            Ge.set(e, !0);
                            for (var i = [], a = function(e, t) {
                                    return ke(function(e, t) {
                                        var n = -1,
                                            r = 44;
                                        do {
                                            switch (we(r)) {
                                                case 0:
                                                    38 === r && 12 === _e() && (t[n] = 1), e[n] += Ze(he - 1, t, n);
                                                    break;
                                                case 2:
                                                    e[n] += Se(r);
                                                    break;
                                                case 4:
                                                    if (44 === r) {
                                                        e[++n] = 58 === _e() ? "&\f" : "", t[n] = e[n].length;
                                                        break
                                                    }
                                                default:
                                                    e[n] += ee(r)
                                            }
                                        } while (r = ye());
                                        return e
                                    }(xe(e), t))
                                }(t, i), o = n.props, s = 0, l = 0; s < a.length; s++)
                                for (var c = 0; c < o.length; c++, l++) e.props[l] = i[s] ? a[s].replace(/&\f/g, o[c]) : o[c] + " " + a[s]
                        }
                    }
                },
                Ye = function(e) {
                    if ("decl" === e.type) {
                        var t = e.value;
                        108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "")
                    }
                };

            function Xe(e, t) {
                switch (function(e, t) {
                    return 45 ^ ae(e, 0) ? (((t << 2 ^ ae(e, 0)) << 2 ^ ae(e, 1)) << 2 ^ ae(e, 2)) << 2 ^ ae(e, 3) : 0
                }(e, t)) {
                    case 5103:
                        return Re + "print-" + e + e;
                    case 5737:
                    case 4201:
                    case 3177:
                    case 3433:
                    case 1641:
                    case 4457:
                    case 2921:
                    case 5572:
                    case 6356:
                    case 5844:
                    case 3191:
                    case 6645:
                    case 3005:
                    case 6391:
                    case 5879:
                    case 5623:
                    case 6135:
                    case 4599:
                    case 4855:
                    case 4215:
                    case 6389:
                    case 5109:
                    case 5365:
                    case 5621:
                    case 3829:
                        return Re + e + e;
                    case 5349:
                    case 4246:
                    case 4810:
                    case 6968:
                    case 2756:
                        return Re + e + Pe + e + Ie + e + e;
                    case 6828:
                    case 4268:
                        return Re + e + Ie + e + e;
                    case 6165:
                        return Re + e + Ie + "flex-" + e + e;
                    case 5187:
                        return Re + e + re(e, /(\w+).+(:[^]+)/, Re + "box-$1$2" + Ie + "flex-$1$2") + e;
                    case 5443:
                        return Re + e + Ie + "flex-item-" + re(e, /flex-|-self/, "") + e;
                    case 4675:
                        return Re + e + Ie + "flex-line-pack" + re(e, /align-content|flex-|-self/, "") + e;
                    case 5548:
                        return Re + e + Ie + re(e, "shrink", "negative") + e;
                    case 5292:
                        return Re + e + Ie + re(e, "basis", "preferred-size") + e;
                    case 6060:
                        return Re + "box-" + re(e, "-grow", "") + Re + e + Ie + re(e, "grow", "positive") + e;
                    case 4554:
                        return Re + re(e, /([^-])(transform)/g, "$1" + Re + "$2") + e;
                    case 6187:
                        return re(re(re(e, /(zoom-|grab)/, Re + "$1"), /(image-set)/, Re + "$1"), e, "") + e;
                    case 5495:
                    case 3959:
                        return re(e, /(image-set\([^]*)/, Re + "$1$`$1");
                    case 4968:
                        return re(re(e, /(.+:)(flex-)?(.*)/, Re + "box-pack:$3" + Ie + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Re + e + e;
                    case 4095:
                    case 3583:
                    case 4068:
                    case 2532:
                        return re(e, /(.+)-inline(.+)/, Re + "$1$2") + e;
                    case 8116:
                    case 7059:
                    case 5753:
                    case 5535:
                    case 5445:
                    case 5701:
                    case 4933:
                    case 4677:
                    case 5533:
                    case 5789:
                    case 5021:
                    case 4765:
                        if (se(e) - 1 - t > 6) switch (ae(e, t + 1)) {
                            case 109:
                                if (45 !== ae(e, t + 4)) break;
                            case 102:
                                return re(e, /(.+:)(.+)-([^]+)/, "$1" + Re + "$2-$3$1" + Pe + (108 == ae(e, t + 3) ? "$3" : "$2-$3")) + e;
                            case 115:
                                return ~ie(e, "stretch") ? Xe(re(e, "stretch", "fill-available"), t) + e : e
                        }
                        break;
                    case 4949:
                        if (115 !== ae(e, t + 1)) break;
                    case 6444:
                        switch (ae(e, se(e) - 3 - (~ie(e, "!important") && 10))) {
                            case 107:
                                return re(e, ":", ":" + Re) + e;
                            case 101:
                                return re(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Re + (45 === ae(e, 14) ? "inline-" : "") + "box$3$1" + Re + "$2$3$1" + Ie + "$2box$3") + e
                        }
                        break;
                    case 5936:
                        switch (ae(e, t + 11)) {
                            case 114:
                                return Re + e + Ie + re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                            case 108:
                                return Re + e + Ie + re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                            case 45:
                                return Re + e + Ie + re(e, /[svh]\w+-[tblr]{2}/, "lr") + e
                        }
                        return Re + e + Ie + e + e
                }
                return e
            }
            var Ke = [function(e, t, n, r) {
                    if (e.length > -1 && !e.return) switch (e.type) {
                        case Ve:
                            e.return = Xe(e.value, e.length);
                            break;
                        case He:
                            return De([ve(e, {
                                value: re(e.value, "@", "@" + Re)
                            })], r);
                        case Ne:
                            if (e.length) return function(e, t) {
                                return e.map(t).join("")
                            }(e.props, (function(t) {
                                switch (function(e, t) {
                                    return (e = t.exec(e)) ? e[0] : e
                                }(t, /(::plac\w+|:read-\w+)/)) {
                                    case ":read-only":
                                    case ":read-write":
                                        return De([ve(e, {
                                            props: [re(t, /:(read-\w+)/, ":-moz-$1")]
                                        })], r);
                                    case "::placeholder":
                                        return De([ve(e, {
                                            props: [re(t, /:(plac\w+)/, ":" + Re + "input-$1")]
                                        }), ve(e, {
                                            props: [re(t, /:(plac\w+)/, ":-moz-$1")]
                                        }), ve(e, {
                                            props: [re(t, /:(plac\w+)/, Ie + "input-$1")]
                                        })], r)
                                }
                                return ""
                            }))
                    }
                }],
                Je = function(e) {
                    var t = e.key;
                    if ("css" === t) {
                        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
                        Array.prototype.forEach.call(n, (function(e) {
                            -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", ""))
                        }))
                    }
                    var r, i, a = e.stylisPlugins || Ke,
                        o = {},
                        s = [];
                    r = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function(e) {
                        for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) o[t[n]] = !0;
                        s.push(e)
                    }));
                    var l, c, u, d, p = [Fe, (d = function(e) {
                            l.insert(e)
                        }, function(e) {
                            e.root || (e = e.return) && d(e)
                        })],
                        h = (c = [qe, Ye].concat(a, p), u = le(c), function(e, t, n, r) {
                            for (var i = "", a = 0; a < u; a++) i += c[a](e, t, n, r) || "";
                            return i
                        });
                    i = function(e, t, n, r) {
                        l = n, De(je(e ? e + "{" + t.styles + "}" : t.styles), h), r && (f.inserted[t.name] = !0)
                    };
                    var f = {
                        key: t,
                        sheet: new J({
                            key: t,
                            container: r,
                            nonce: e.nonce,
                            speedy: e.speedy,
                            prepend: e.prepend,
                            insertionPoint: e.insertionPoint
                        }),
                        nonce: e.nonce,
                        inserted: o,
                        registered: {},
                        insert: i
                    };
                    return f.sheet.hydrate(s), f
                },
                Qe = function(e, t, n) {
                    var r = e.key + "-" + t.name;
                    !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles)
                },
                et = {
                    animationIterationCount: 1,
                    aspectRatio: 1,
                    borderImageOutset: 1,
                    borderImageSlice: 1,
                    borderImageWidth: 1,
                    boxFlex: 1,
                    boxFlexGroup: 1,
                    boxOrdinalGroup: 1,
                    columnCount: 1,
                    columns: 1,
                    flex: 1,
                    flexGrow: 1,
                    flexPositive: 1,
                    flexShrink: 1,
                    flexNegative: 1,
                    flexOrder: 1,
                    gridRow: 1,
                    gridRowEnd: 1,
                    gridRowSpan: 1,
                    gridRowStart: 1,
                    gridColumn: 1,
                    gridColumnEnd: 1,
                    gridColumnSpan: 1,
                    gridColumnStart: 1,
                    msGridRow: 1,
                    msGridRowSpan: 1,
                    msGridColumn: 1,
                    msGridColumnSpan: 1,
                    fontWeight: 1,
                    lineHeight: 1,
                    opacity: 1,
                    order: 1,
                    orphans: 1,
                    tabSize: 1,
                    widows: 1,
                    zIndex: 1,
                    zoom: 1,
                    WebkitLineClamp: 1,
                    fillOpacity: 1,
                    floodOpacity: 1,
                    stopOpacity: 1,
                    strokeDasharray: 1,
                    strokeDashoffset: 1,
                    strokeMiterlimit: 1,
                    strokeOpacity: 1,
                    strokeWidth: 1
                };

            function tt(e) {
                var t = Object.create(null);
                return function(n) {
                    return void 0 === t[n] && (t[n] = e(n)), t[n]
                }
            }
            var nt = /[A-Z]|^ms/g,
                rt = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
                it = function(e) {
                    return 45 === e.charCodeAt(1)
                },
                at = function(e) {
                    return null != e && "boolean" != typeof e
                },
                ot = tt((function(e) {
                    return it(e) ? e : e.replace(nt, "-$&").toLowerCase()
                })),
                st = function(e, t) {
                    switch (e) {
                        case "animation":
                        case "animationName":
                            if ("string" == typeof t) return t.replace(rt, (function(e, t, n) {
                                return ct = {
                                    name: t,
                                    styles: n,
                                    next: ct
                                }, t
                            }))
                    }
                    return 1 === et[e] || it(e) || "number" != typeof t || 0 === t ? t : t + "px"
                };

            function lt(e, t, n) {
                if (null == n) return "";
                if (void 0 !== n.__emotion_styles) return n;
                switch (typeof n) {
                    case "boolean":
                        return "";
                    case "object":
                        if (1 === n.anim) return ct = {
                            name: n.name,
                            styles: n.styles,
                            next: ct
                        }, n.name;
                        if (void 0 !== n.styles) {
                            var r = n.next;
                            if (void 0 !== r)
                                for (; void 0 !== r;) ct = {
                                    name: r.name,
                                    styles: r.styles,
                                    next: ct
                                }, r = r.next;
                            return n.styles + ";"
                        }
                        return function(e, t, n) {
                            var r = "";
                            if (Array.isArray(n))
                                for (var i = 0; i < n.length; i++) r += lt(e, t, n[i]) + ";";
                            else
                                for (var a in n) {
                                    var o = n[a];
                                    if ("object" != typeof o) null != t && void 0 !== t[o] ? r += a + "{" + t[o] + "}" : at(o) && (r += ot(a) + ":" + st(a, o) + ";");
                                    else if (!Array.isArray(o) || "string" != typeof o[0] || null != t && void 0 !== t[o[0]]) {
                                        var s = lt(e, t, o);
                                        switch (a) {
                                            case "animation":
                                            case "animationName":
                                                r += ot(a) + ":" + s + ";";
                                                break;
                                            default:
                                                r += a + "{" + s + "}"
                                        }
                                    } else
                                        for (var l = 0; l < o.length; l++) at(o[l]) && (r += ot(a) + ":" + st(a, o[l]) + ";")
                                }
                            return r
                        }(e, t, n);
                    case "function":
                        if (void 0 !== e) {
                            var i = ct,
                                a = n(e);
                            return ct = i, lt(e, t, a)
                        }
                }
                if (null == t) return n;
                var o = t[n];
                return void 0 !== o ? o : n
            }
            var ct, ut = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
                dt = function(e, t, n) {
                    if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
                    var r = !0,
                        i = "";
                    ct = void 0;
                    var a = e[0];
                    null == a || void 0 === a.raw ? (r = !1, i += lt(n, t, a)) : i += a[0];
                    for (var o = 1; o < e.length; o++) i += lt(n, t, e[o]), r && (i += a[o]);
                    ut.lastIndex = 0;
                    for (var s, l = ""; null !== (s = ut.exec(i));) l += "-" + s[1];
                    var c = function(e) {
                        for (var t, n = 0, r = 0, i = e.length; i >= 4; ++r, i -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16), n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
                        switch (i) {
                            case 3:
                                n ^= (255 & e.charCodeAt(r + 2)) << 16;
                            case 2:
                                n ^= (255 & e.charCodeAt(r + 1)) << 8;
                            case 1:
                                n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + (59797 * (n >>> 16) << 16)
                        }
                        return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36)
                    }(i) + l;
                    return {
                        name: c,
                        styles: i,
                        next: ct
                    }
                },
                pt = !!K.useInsertionEffect && K.useInsertionEffect,
                ht = pt || function(e) {
                    return e()
                },
                ft = (pt || K.useLayoutEffect, {}.hasOwnProperty),
                mt = K.createContext("undefined" != typeof HTMLElement ? Je({
                    key: "css"
                }) : null);
            mt.Provider;
            var gt = function(e) {
                    return (0, K.forwardRef)((function(t, n) {
                        var r = (0, K.useContext)(mt);
                        return e(t, r, n)
                    }))
                },
                vt = K.createContext({}),
                bt = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
                yt = function(e) {
                    var t = e.cache,
                        n = e.serialized,
                        r = e.isStringTag;
                    return Qe(t, n, r), ht((function() {
                        return function(e, t, n) {
                            Qe(e, t, n);
                            var r = e.key + "-" + t.name;
                            if (void 0 === e.inserted[t.name]) {
                                var i = t;
                                do {
                                    e.insert(t === i ? "." + r : "", i, e.sheet, !0), i = i.next
                                } while (void 0 !== i)
                            }
                        }(t, n, r)
                    })), null
                },
                _t = gt((function(e, t, n) {
                    var r = e.css;
                    "string" == typeof r && void 0 !== t.registered[r] && (r = t.registered[r]);
                    var i = e[bt],
                        a = [r],
                        o = "";
                    "string" == typeof e.className ? o = function(e, t, n) {
                        var r = "";
                        return n.split(" ").forEach((function(n) {
                            void 0 !== e[n] ? t.push(e[n] + ";") : r += n + " "
                        })), r
                    }(t.registered, a, e.className) : null != e.className && (o = e.className + " ");
                    var s = dt(a, void 0, K.useContext(vt));
                    o += t.key + "-" + s.name;
                    var l = {};
                    for (var c in e) ft.call(e, c) && "css" !== c && c !== bt && (l[c] = e[c]);
                    return l.ref = n, l.className = o, K.createElement(K.Fragment, null, K.createElement(yt, {
                        cache: t,
                        serialized: s,
                        isStringTag: "string" == typeof i
                    }), K.createElement(i, l))
                })),
                Ct = _t,
                Et = (n(679), function(e, t) {
                    var n = arguments;
                    if (null == t || !ft.call(t, "css")) return K.createElement.apply(void 0, n);
                    var r = n.length,
                        i = new Array(r);
                    i[0] = Ct, i[1] = function(e, t) {
                        var n = {};
                        for (var r in t) ft.call(t, r) && (n[r] = t[r]);
                        return n[bt] = e, n
                    }(e, t);
                    for (var a = 2; a < r; a++) i[a] = n[a];
                    return K.createElement.apply(null, i)
                });

            function wt() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return dt(t)
            }

            function xt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function kt(e, t) {
                if (e) {
                    if ("string" == typeof e) return xt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? xt(e, t) : void 0
                }
            }

            function St(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, a, o, s = [],
                            l = !0,
                            c = !1;
                        try {
                            if (a = (n = n.call(e)).next, 0 === t) {
                                if (Object(n) !== n) return;
                                l = !1
                            } else
                                for (; !(l = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); l = !0);
                        } catch (e) {
                            c = !0, i = e
                        } finally {
                            try {
                                if (!l && null != n.return && (o = n.return(), Object(o) !== o)) return
                            } finally {
                                if (c) throw i
                            }
                        }
                        return s
                    }
                }(e, t) || kt(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Mt(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }
            var Ot = window.ReactDOM;
            const zt = Math.min,
                Lt = Math.max,
                Tt = Math.round,
                It = Math.floor,
                Pt = e => ({
                    x: e,
                    y: e
                });

            function Rt(e) {
                return Vt(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function At(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function Nt(e) {
                var t;
                return null == (t = (Vt(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function Vt(e) {
                return e instanceof Node || e instanceof At(e).Node
            }

            function Ht(e) {
                return e instanceof Element || e instanceof At(e).Element
            }

            function Dt(e) {
                return e instanceof HTMLElement || e instanceof At(e).HTMLElement
            }

            function Ft(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof At(e).ShadowRoot)
            }

            function jt(e) {
                const {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: i
                } = Bt(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
            }

            function Bt(e) {
                return At(e).getComputedStyle(e)
            }

            function Wt(e) {
                const t = function(e) {
                    if ("html" === Rt(e)) return e;
                    const t = e.assignedSlot || e.parentNode || Ft(e) && e.host || Nt(e);
                    return Ft(t) ? t.host : t
                }(e);
                return function(e) {
                    return ["html", "body", "#document"].includes(Rt(e))
                }(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Dt(t) && jt(t) ? t : Wt(t)
            }

            function $t(e, t, n) {
                var r;
                void 0 === t && (t = []), void 0 === n && (n = !0);
                const i = Wt(e),
                    a = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
                    o = At(i);
                return a ? t.concat(o, o.visualViewport || [], jt(i) ? i : [], o.frameElement && n ? $t(o.frameElement) : []) : t.concat(i, $t(i, [], n))
            }

            function Ut(e) {
                return Ht(e) ? e : e.contextElement
            }

            function Zt(e) {
                const t = Ut(e);
                if (!Dt(t)) return Pt(1);
                const n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: i,
                        $: a
                    } = function(e) {
                        const t = Bt(e);
                        let n = parseFloat(t.width) || 0,
                            r = parseFloat(t.height) || 0;
                        const i = Dt(e),
                            a = i ? e.offsetWidth : n,
                            o = i ? e.offsetHeight : r,
                            s = Tt(n) !== a || Tt(r) !== o;
                        return s && (n = a, r = o), {
                            width: n,
                            height: r,
                            $: s
                        }
                    }(t);
                let o = (a ? Tt(n.width) : n.width) / r,
                    s = (a ? Tt(n.height) : n.height) / i;
                return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
                    x: o,
                    y: s
                }
            }
            const Gt = Pt(0);

            function qt(e) {
                const t = At(e);
                return "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none") && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : Gt
            }

            function Yt(e, t, n, r) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                const i = e.getBoundingClientRect(),
                    a = Ut(e);
                let o = Pt(1);
                t && (r ? Ht(r) && (o = Zt(r)) : o = Zt(e));
                const s = function(e, t, n) {
                    return void 0 === t && (t = !1), !(!n || t && n !== At(e)) && t
                }(a, n, r) ? qt(a) : Pt(0);
                let l = (i.left + s.x) / o.x,
                    c = (i.top + s.y) / o.y,
                    u = i.width / o.x,
                    d = i.height / o.y;
                if (a) {
                    const e = At(a),
                        t = r && Ht(r) ? At(r) : r;
                    let n = e.frameElement;
                    for (; n && r && t !== e;) {
                        const e = Zt(n),
                            t = n.getBoundingClientRect(),
                            r = Bt(n),
                            i = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            a = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
                        l *= e.x, c *= e.y, u *= e.x, d *= e.y, l += i, c += a, n = At(n).frameElement
                    }
                }
                return p = {
                    width: u,
                    height: d,
                    x: l,
                    y: c
                }, { ...p,
                    top: p.y,
                    left: p.x,
                    right: p.x + p.width,
                    bottom: p.y + p.height
                };
                var p
            }
            var Xt = K.useLayoutEffect,
                Kt = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"],
                Jt = function() {};

            function Qt(e, t) {
                return t ? "-" === t[0] ? e + t : e + "__" + t : e
            }

            function en(e, t) {
                for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
                var a = [].concat(r);
                if (t && e)
                    for (var o in t) t.hasOwnProperty(o) && t[o] && a.push("".concat(Qt(e, o)));
                return a.filter((function(e) {
                    return e
                })).map((function(e) {
                    return String(e).trim()
                })).join(" ")
            }
            var tn = function(e) {
                    return t = e, Array.isArray(t) ? e.filter(Boolean) : "object" === U(e) && null !== e ? [e] : [];
                    var t
                },
                nn = function(e) {
                    return e.className, e.clearValue, e.cx, e.getStyles, e.getClassNames, e.getValue, e.hasValue, e.isMulti, e.isRtl, e.options, e.selectOption, e.selectProps, e.setValue, e.theme, Y({}, Mt(e, Kt))
                },
                rn = function(e, t, n) {
                    var r = e.cx,
                        i = e.getStyles,
                        a = e.getClassNames,
                        o = e.className;
                    return {
                        css: i(t, e),
                        className: r(null != n ? n : {}, a(t, e), o)
                    }
                };

            function an(e) {
                return [document.documentElement, document.body, window].indexOf(e) > -1
            }

            function on(e) {
                return an(e) ? window.pageYOffset : e.scrollTop
            }

            function sn(e, t) {
                an(e) ? window.scrollTo(0, t) : e.scrollTop = t
            }

            function ln(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 200,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Jt,
                    i = on(e),
                    a = t - i,
                    o = 0;
                ! function t() {
                    var s, l = a * ((s = (s = o += 10) / n - 1) * s * s + 1) + i;
                    sn(e, l), o < n ? window.requestAnimationFrame(t) : r(e)
                }()
            }

            function cn(e, t) {
                var n = e.getBoundingClientRect(),
                    r = t.getBoundingClientRect(),
                    i = t.offsetHeight / 3;
                r.bottom + i > n.bottom ? sn(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + i, e.scrollHeight)) : r.top - i < n.top && sn(e, Math.max(t.offsetTop - i, 0))
            }

            function un() {
                try {
                    return document.createEvent("TouchEvent"), !0
                } catch (e) {
                    return !1
                }
            }
            var dn = !1,
                pn = {
                    get passive() {
                        return dn = !0
                    }
                },
                hn = "undefined" != typeof window ? window : {};
            hn.addEventListener && hn.removeEventListener && (hn.addEventListener("p", Jt, pn), hn.removeEventListener("p", Jt, !1));
            var fn = dn;

            function mn(e) {
                return null != e
            }

            function gn(e, t, n) {
                return e ? t : n
            }
            var vn = ["children", "innerProps"],
                bn = ["children", "innerProps"];
            var yn, Cn, En, wn = function(e) {
                    return "auto" === e ? "bottom" : e
                },
                xn = (0, K.createContext)(null),
                kn = function(e) {
                    var t = e.children,
                        n = e.minMenuHeight,
                        r = e.maxMenuHeight,
                        i = e.menuPlacement,
                        a = e.menuPosition,
                        o = e.menuShouldScrollIntoView,
                        s = e.theme,
                        l = ((0, K.useContext)(xn) || {}).setPortalPlacement,
                        c = (0, K.useRef)(null),
                        u = St((0, K.useState)(r), 2),
                        d = u[0],
                        p = u[1],
                        h = St((0, K.useState)(null), 2),
                        f = h[0],
                        m = h[1],
                        g = s.spacing.controlHeight;
                    return Xt((function() {
                        var e = c.current;
                        if (e) {
                            var t = "fixed" === a,
                                s = function(e) {
                                    var t = e.maxHeight,
                                        n = e.menuEl,
                                        r = e.minHeight,
                                        i = e.placement,
                                        a = e.shouldScroll,
                                        o = e.isFixedPosition,
                                        s = e.controlHeight,
                                        l = function(e) {
                                            var t = getComputedStyle(e),
                                                n = "absolute" === t.position,
                                                r = /(auto|scroll)/;
                                            if ("fixed" === t.position) return document.documentElement;
                                            for (var i = e; i = i.parentElement;)
                                                if (t = getComputedStyle(i), (!n || "static" !== t.position) && r.test(t.overflow + t.overflowY + t.overflowX)) return i;
                                            return document.documentElement
                                        }(n),
                                        c = {
                                            placement: "bottom",
                                            maxHeight: t
                                        };
                                    if (!n || !n.offsetParent) return c;
                                    var u, d = l.getBoundingClientRect().height,
                                        p = n.getBoundingClientRect(),
                                        h = p.bottom,
                                        f = p.height,
                                        m = p.top,
                                        g = n.offsetParent.getBoundingClientRect().top,
                                        v = o || an(u = l) ? window.innerHeight : u.clientHeight,
                                        b = on(l),
                                        y = parseInt(getComputedStyle(n).marginBottom, 10),
                                        _ = parseInt(getComputedStyle(n).marginTop, 10),
                                        C = g - _,
                                        E = v - m,
                                        w = C + b,
                                        x = d - b - m,
                                        k = h - v + b + y,
                                        S = b + m - _,
                                        M = 160;
                                    switch (i) {
                                        case "auto":
                                        case "bottom":
                                            if (E >= f) return {
                                                placement: "bottom",
                                                maxHeight: t
                                            };
                                            if (x >= f && !o) return a && ln(l, k, M), {
                                                placement: "bottom",
                                                maxHeight: t
                                            };
                                            if (!o && x >= r || o && E >= r) return a && ln(l, k, M), {
                                                placement: "bottom",
                                                maxHeight: o ? E - y : x - y
                                            };
                                            if ("auto" === i || o) {
                                                var O = t,
                                                    z = o ? C : w;
                                                return z >= r && (O = Math.min(z - y - s, t)), {
                                                    placement: "top",
                                                    maxHeight: O
                                                }
                                            }
                                            if ("bottom" === i) return a && sn(l, k), {
                                                placement: "bottom",
                                                maxHeight: t
                                            };
                                            break;
                                        case "top":
                                            if (C >= f) return {
                                                placement: "top",
                                                maxHeight: t
                                            };
                                            if (w >= f && !o) return a && ln(l, S, M), {
                                                placement: "top",
                                                maxHeight: t
                                            };
                                            if (!o && w >= r || o && C >= r) {
                                                var L = t;
                                                return (!o && w >= r || o && C >= r) && (L = o ? C - _ : w - _), a && ln(l, S, M), {
                                                    placement: "top",
                                                    maxHeight: L
                                                }
                                            }
                                            return {
                                                placement: "bottom",
                                                maxHeight: t
                                            };
                                        default:
                                            throw new Error('Invalid placement provided "'.concat(i, '".'))
                                    }
                                    return c
                                }({
                                    maxHeight: r,
                                    menuEl: e,
                                    minHeight: n,
                                    placement: i,
                                    shouldScroll: o && !t,
                                    isFixedPosition: t,
                                    controlHeight: g
                                });
                            p(s.maxHeight), m(s.placement), null == l || l(s.placement)
                        }
                    }), [r, i, a, o, n, l, g]), t({
                        ref: c,
                        placerProps: Y(Y({}, e), {}, {
                            placement: f || wn(i),
                            maxHeight: d
                        })
                    })
                },
                Sn = function(e, t) {
                    var n = e.theme,
                        r = n.spacing.baseUnit,
                        i = n.colors;
                    return Y({
                        textAlign: "center"
                    }, t ? {} : {
                        color: i.neutral40,
                        padding: "".concat(2 * r, "px ").concat(3 * r, "px")
                    })
                },
                Mn = Sn,
                On = Sn,
                zn = ["size"],
                Ln = ["innerProps", "isRtl", "size"],
                Tn = {
                    name: "8mmkcg",
                    styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
                },
                In = function(e) {
                    var t = e.size,
                        n = Mt(e, zn);
                    return Et("svg", X({
                        height: t,
                        width: t,
                        viewBox: "0 0 20 20",
                        "aria-hidden": "true",
                        focusable: "false",
                        css: Tn
                    }, n))
                },
                Pn = function(e) {
                    return Et(In, X({
                        size: 20
                    }, e), Et("path", {
                        d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
                    }))
                },
                Rn = function(e) {
                    return Et(In, X({
                        size: 20
                    }, e), Et("path", {
                        d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
                    }))
                },
                An = function(e, t) {
                    var n = e.isFocused,
                        r = e.theme,
                        i = r.spacing.baseUnit,
                        a = r.colors;
                    return Y({
                        label: "indicatorContainer",
                        display: "flex",
                        transition: "color 150ms"
                    }, t ? {} : {
                        color: n ? a.neutral60 : a.neutral20,
                        padding: 2 * i,
                        ":hover": {
                            color: n ? a.neutral80 : a.neutral40
                        }
                    })
                },
                Nn = An,
                Vn = An,
                Hn = function() {
                    var e = wt.apply(void 0, arguments),
                        t = "animation-" + e.name;
                    return {
                        name: t,
                        styles: "@keyframes " + t + "{" + e.styles + "}",
                        anim: 1,
                        toString: function() {
                            return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
                        }
                    }
                }(yn || (Cn = ["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"], En || (En = Cn.slice(0)), yn = Object.freeze(Object.defineProperties(Cn, {
                    raw: {
                        value: Object.freeze(En)
                    }
                })))),
                Dn = function(e) {
                    var t = e.delay,
                        n = e.offset;
                    return Et("span", {
                        css: wt({
                            animation: "".concat(Hn, " 1s ease-in-out ").concat(t, "ms infinite;"),
                            backgroundColor: "currentColor",
                            borderRadius: "1em",
                            display: "inline-block",
                            marginLeft: n ? "1em" : void 0,
                            height: "1em",
                            verticalAlign: "top",
                            width: "1em"
                        }, "", "")
                    })
                },
                Fn = ["data"],
                jn = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
                Bn = {
                    gridArea: "1 / 2",
                    font: "inherit",
                    minWidth: "2px",
                    border: 0,
                    margin: 0,
                    outline: 0,
                    padding: 0
                },
                Wn = {
                    flex: "1 1 auto",
                    display: "inline-grid",
                    gridArea: "1 / 1 / 2 / 3",
                    gridTemplateColumns: "0 min-content",
                    "&:after": Y({
                        content: 'attr(data-value) " "',
                        visibility: "hidden",
                        whiteSpace: "pre"
                    }, Bn)
                },
                $n = function(e) {
                    return Y({
                        label: "input",
                        color: "inherit",
                        background: 0,
                        opacity: e ? 0 : 1,
                        width: "100%"
                    }, Bn)
                },
                Un = function(e) {
                    var t = e.children,
                        n = e.innerProps;
                    return Et("div", n, t)
                },
                Zn = {
                    ClearIndicator: function(e) {
                        var t = e.children,
                            n = e.innerProps;
                        return Et("div", X({}, rn(e, "clearIndicator", {
                            indicator: !0,
                            "clear-indicator": !0
                        }), n), t || Et(Pn, null))
                    },
                    Control: function(e) {
                        var t = e.children,
                            n = e.isDisabled,
                            r = e.isFocused,
                            i = e.innerRef,
                            a = e.innerProps,
                            o = e.menuIsOpen;
                        return Et("div", X({
                            ref: i
                        }, rn(e, "control", {
                            control: !0,
                            "control--is-disabled": n,
                            "control--is-focused": r,
                            "control--menu-is-open": o
                        }), a, {
                            "aria-disabled": n || void 0
                        }), t)
                    },
                    DropdownIndicator: function(e) {
                        var t = e.children,
                            n = e.innerProps;
                        return Et("div", X({}, rn(e, "dropdownIndicator", {
                            indicator: !0,
                            "dropdown-indicator": !0
                        }), n), t || Et(Rn, null))
                    },
                    DownChevron: Rn,
                    CrossIcon: Pn,
                    Group: function(e) {
                        var t = e.children,
                            n = e.cx,
                            r = e.getStyles,
                            i = e.getClassNames,
                            a = e.Heading,
                            o = e.headingProps,
                            s = e.innerProps,
                            l = e.label,
                            c = e.theme,
                            u = e.selectProps;
                        return Et("div", X({}, rn(e, "group", {
                            group: !0
                        }), s), Et(a, X({}, o, {
                            selectProps: u,
                            theme: c,
                            getStyles: r,
                            getClassNames: i,
                            cx: n
                        }), l), Et("div", null, t))
                    },
                    GroupHeading: function(e) {
                        var t = nn(e);
                        t.data;
                        var n = Mt(t, Fn);
                        return Et("div", X({}, rn(e, "groupHeading", {
                            "group-heading": !0
                        }), n))
                    },
                    IndicatorsContainer: function(e) {
                        var t = e.children,
                            n = e.innerProps;
                        return Et("div", X({}, rn(e, "indicatorsContainer", {
                            indicators: !0
                        }), n), t)
                    },
                    IndicatorSeparator: function(e) {
                        var t = e.innerProps;
                        return Et("span", X({}, t, rn(e, "indicatorSeparator", {
                            "indicator-separator": !0
                        })))
                    },
                    Input: function(e) {
                        var t = e.cx,
                            n = e.value,
                            r = nn(e),
                            i = r.innerRef,
                            a = r.isDisabled,
                            o = r.isHidden,
                            s = r.inputClassName,
                            l = Mt(r, jn);
                        return Et("div", X({}, rn(e, "input", {
                            "input-container": !0
                        }), {
                            "data-value": n || ""
                        }), Et("input", X({
                            className: t({
                                input: !0
                            }, s),
                            ref: i,
                            style: $n(o),
                            disabled: a
                        }, l)))
                    },
                    LoadingIndicator: function(e) {
                        var t = e.innerProps,
                            n = e.isRtl,
                            r = e.size,
                            i = void 0 === r ? 4 : r,
                            a = Mt(e, Ln);
                        return Et("div", X({}, rn(Y(Y({}, a), {}, {
                            innerProps: t,
                            isRtl: n,
                            size: i
                        }), "loadingIndicator", {
                            indicator: !0,
                            "loading-indicator": !0
                        }), t), Et(Dn, {
                            delay: 0,
                            offset: n
                        }), Et(Dn, {
                            delay: 160,
                            offset: !0
                        }), Et(Dn, {
                            delay: 320,
                            offset: !n
                        }))
                    },
                    Menu: function(e) {
                        var t = e.children,
                            n = e.innerRef,
                            r = e.innerProps;
                        return Et("div", X({}, rn(e, "menu", {
                            menu: !0
                        }), {
                            ref: n
                        }, r), t)
                    },
                    MenuList: function(e) {
                        var t = e.children,
                            n = e.innerProps,
                            r = e.innerRef,
                            i = e.isMulti;
                        return Et("div", X({}, rn(e, "menuList", {
                            "menu-list": !0,
                            "menu-list--is-multi": i
                        }), {
                            ref: r
                        }, n), t)
                    },
                    MenuPortal: function(e) {
                        var t = e.appendTo,
                            n = e.children,
                            r = e.controlElement,
                            i = e.innerProps,
                            a = e.menuPlacement,
                            o = e.menuPosition,
                            s = (0, K.useRef)(null),
                            l = (0, K.useRef)(null),
                            c = St((0, K.useState)(wn(a)), 2),
                            u = c[0],
                            d = c[1],
                            p = (0, K.useMemo)((function() {
                                return {
                                    setPortalPlacement: d
                                }
                            }), []),
                            h = St((0, K.useState)(null), 2),
                            f = h[0],
                            m = h[1],
                            g = (0, K.useCallback)((function() {
                                if (r) {
                                    var e = function(e) {
                                            var t = e.getBoundingClientRect();
                                            return {
                                                bottom: t.bottom,
                                                height: t.height,
                                                left: t.left,
                                                right: t.right,
                                                top: t.top,
                                                width: t.width
                                            }
                                        }(r),
                                        t = "fixed" === o ? 0 : window.pageYOffset,
                                        n = e[u] + t;
                                    n === (null == f ? void 0 : f.offset) && e.left === (null == f ? void 0 : f.rect.left) && e.width === (null == f ? void 0 : f.rect.width) || m({
                                        offset: n,
                                        rect: e
                                    })
                                }
                            }), [r, o, u, null == f ? void 0 : f.offset, null == f ? void 0 : f.rect.left, null == f ? void 0 : f.rect.width]);
                        Xt((function() {
                            g()
                        }), [g]);
                        var v = (0, K.useCallback)((function() {
                            "function" == typeof l.current && (l.current(), l.current = null), r && s.current && (l.current = function(e, t, n, r) {
                                void 0 === r && (r = {});
                                const {
                                    ancestorScroll: i = !0,
                                    ancestorResize: a = !0,
                                    elementResize: o = "function" == typeof ResizeObserver,
                                    layoutShift: s = "function" == typeof IntersectionObserver,
                                    animationFrame: l = !1
                                } = r, c = Ut(e), u = i || a ? [...c ? $t(c) : [], ...$t(t)] : [];
                                u.forEach((e => {
                                    i && e.addEventListener("scroll", n, {
                                        passive: !0
                                    }), a && e.addEventListener("resize", n)
                                }));
                                const d = c && s ? function(e, t) {
                                    let n, r = null;
                                    const i = Nt(e);

                                    function a() {
                                        clearTimeout(n), r && r.disconnect(), r = null
                                    }
                                    return function o(s, l) {
                                        void 0 === s && (s = !1), void 0 === l && (l = 1), a();
                                        const {
                                            left: c,
                                            top: u,
                                            width: d,
                                            height: p
                                        } = e.getBoundingClientRect();
                                        if (s || t(), !d || !p) return;
                                        const h = {
                                            rootMargin: -It(u) + "px " + -It(i.clientWidth - (c + d)) + "px " + -It(i.clientHeight - (u + p)) + "px " + -It(c) + "px",
                                            threshold: Lt(0, zt(1, l)) || 1
                                        };
                                        let f = !0;

                                        function m(e) {
                                            const t = e[0].intersectionRatio;
                                            if (t !== l) {
                                                if (!f) return o();
                                                t ? o(!1, t) : n = setTimeout((() => {
                                                    o(!1, 1e-7)
                                                }), 100)
                                            }
                                            f = !1
                                        }
                                        try {
                                            r = new IntersectionObserver(m, { ...h,
                                                root: i.ownerDocument
                                            })
                                        } catch (e) {
                                            r = new IntersectionObserver(m, h)
                                        }
                                        r.observe(e)
                                    }(!0), a
                                }(c, n) : null;
                                let p, h = -1,
                                    f = null;
                                o && (f = new ResizeObserver((e => {
                                    let [r] = e;
                                    r && r.target === c && f && (f.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame((() => {
                                        f && f.observe(t)
                                    }))), n()
                                })), c && !l && f.observe(c), f.observe(t));
                                let m = l ? Yt(e) : null;
                                return l && function t() {
                                    const r = Yt(e);
                                    !m || r.x === m.x && r.y === m.y && r.width === m.width && r.height === m.height || n(), m = r, p = requestAnimationFrame(t)
                                }(), n(), () => {
                                    u.forEach((e => {
                                        i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n)
                                    })), d && d(), f && f.disconnect(), f = null, l && cancelAnimationFrame(p)
                                }
                            }(r, s.current, g, {
                                elementResize: "ResizeObserver" in window
                            }))
                        }), [r, g]);
                        Xt((function() {
                            v()
                        }), [v]);
                        var b = (0, K.useCallback)((function(e) {
                            s.current = e, v()
                        }), [v]);
                        if (!t && "fixed" !== o || !f) return null;
                        var y = Et("div", X({
                            ref: b
                        }, rn(Y(Y({}, e), {}, {
                            offset: f.offset,
                            position: o,
                            rect: f.rect
                        }), "menuPortal", {
                            "menu-portal": !0
                        }), i), n);
                        return Et(xn.Provider, {
                            value: p
                        }, t ? (0, Ot.createPortal)(y, t) : y)
                    },
                    LoadingMessage: function(e) {
                        var t = e.children,
                            n = void 0 === t ? "Loading..." : t,
                            r = e.innerProps,
                            i = Mt(e, bn);
                        return Et("div", X({}, rn(Y(Y({}, i), {}, {
                            children: n,
                            innerProps: r
                        }), "loadingMessage", {
                            "menu-notice": !0,
                            "menu-notice--loading": !0
                        }), r), n)
                    },
                    NoOptionsMessage: function(e) {
                        var t = e.children,
                            n = void 0 === t ? "No options" : t,
                            r = e.innerProps,
                            i = Mt(e, vn);
                        return Et("div", X({}, rn(Y(Y({}, i), {}, {
                            children: n,
                            innerProps: r
                        }), "noOptionsMessage", {
                            "menu-notice": !0,
                            "menu-notice--no-options": !0
                        }), r), n)
                    },
                    MultiValue: function(e) {
                        var t = e.children,
                            n = e.components,
                            r = e.data,
                            i = e.innerProps,
                            a = e.isDisabled,
                            o = e.removeProps,
                            s = e.selectProps,
                            l = n.Container,
                            c = n.Label,
                            u = n.Remove;
                        return Et(l, {
                            data: r,
                            innerProps: Y(Y({}, rn(e, "multiValue", {
                                "multi-value": !0,
                                "multi-value--is-disabled": a
                            })), i),
                            selectProps: s
                        }, Et(c, {
                            data: r,
                            innerProps: Y({}, rn(e, "multiValueLabel", {
                                "multi-value__label": !0
                            })),
                            selectProps: s
                        }, t), Et(u, {
                            data: r,
                            innerProps: Y(Y({}, rn(e, "multiValueRemove", {
                                "multi-value__remove": !0
                            })), {}, {
                                "aria-label": "Remove ".concat(t || "option")
                            }, o),
                            selectProps: s
                        }))
                    },
                    MultiValueContainer: Un,
                    MultiValueLabel: Un,
                    MultiValueRemove: function(e) {
                        var t = e.children,
                            n = e.innerProps;
                        return Et("div", X({
                            role: "button"
                        }, n), t || Et(Pn, {
                            size: 14
                        }))
                    },
                    Option: function(e) {
                        var t = e.children,
                            n = e.isDisabled,
                            r = e.isFocused,
                            i = e.isSelected,
                            a = e.innerRef,
                            o = e.innerProps;
                        return Et("div", X({}, rn(e, "option", {
                            option: !0,
                            "option--is-disabled": n,
                            "option--is-focused": r,
                            "option--is-selected": i
                        }), {
                            ref: a,
                            "aria-disabled": n
                        }, o), t)
                    },
                    Placeholder: function(e) {
                        var t = e.children,
                            n = e.innerProps;
                        return Et("div", X({}, rn(e, "placeholder", {
                            placeholder: !0
                        }), n), t)
                    },
                    SelectContainer: function(e) {
                        var t = e.children,
                            n = e.innerProps,
                            r = e.isDisabled,
                            i = e.isRtl;
                        return Et("div", X({}, rn(e, "container", {
                            "--is-disabled": r,
                            "--is-rtl": i
                        }), n), t)
                    },
                    SingleValue: function(e) {
                        var t = e.children,
                            n = e.isDisabled,
                            r = e.innerProps;
                        return Et("div", X({}, rn(e, "singleValue", {
                            "single-value": !0,
                            "single-value--is-disabled": n
                        }), r), t)
                    },
                    ValueContainer: function(e) {
                        var t = e.children,
                            n = e.innerProps,
                            r = e.isMulti,
                            i = e.hasValue;
                        return Et("div", X({}, rn(e, "valueContainer", {
                            "value-container": !0,
                            "value-container--is-multi": r,
                            "value-container--has-value": i
                        }), n), t)
                    }
                },
                Gn = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];

            function qn(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Z(r.key), r)
                }
            }

            function Yn(e, t) {
                return Yn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, Yn(e, t)
            }

            function Xn(e) {
                return Xn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, Xn(e)
            }

            function Kn(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = Xn(e);
                    if (t) {
                        var i = Xn(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return function(e, t) {
                        if (t && ("object" === U(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }(this, n)
                }
            }

            function Jn(e) {
                return function(e) {
                    if (Array.isArray(e)) return xt(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || kt(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var Qn = Number.isNaN || function(e) {
                return "number" == typeof e && e != e
            };

            function er(e, t) {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++)
                    if (!((r = e[n]) === (i = t[n]) || Qn(r) && Qn(i))) return !1;
                var r, i;
                return !0
            }
            for (var tr = {
                    name: "7pg0cj-a11yText",
                    styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
                }, nr = function(e) {
                    return Et("span", X({
                        css: tr
                    }, e))
                }, rr = {
                    guidance: function(e) {
                        var t = e.isSearchable,
                            n = e.isMulti,
                            r = e.isDisabled,
                            i = e.tabSelectsValue;
                        switch (e.context) {
                            case "menu":
                                return "Use Up and Down to choose options".concat(r ? "" : ", press Enter to select the currently focused option", ", press Escape to exit the menu").concat(i ? ", press Tab to select the option and exit the menu" : "", ".");
                            case "input":
                                return "".concat(e["aria-label"] || "Select", " is focused ").concat(t ? ",type to refine list" : "", ", press Down to open the menu, ").concat(n ? " press left to focus selected values" : "");
                            case "value":
                                return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
                            default:
                                return ""
                        }
                    },
                    onChange: function(e) {
                        var t = e.action,
                            n = e.label,
                            r = void 0 === n ? "" : n,
                            i = e.labels,
                            a = e.isDisabled;
                        switch (t) {
                            case "deselect-option":
                            case "pop-value":
                            case "remove-value":
                                return "option ".concat(r, ", deselected.");
                            case "clear":
                                return "All selected options have been cleared.";
                            case "initial-input-focus":
                                return "option".concat(i.length > 1 ? "s" : "", " ").concat(i.join(","), ", selected.");
                            case "select-option":
                                return "option ".concat(r, a ? " is disabled. Select another option." : ", selected.");
                            default:
                                return ""
                        }
                    },
                    onFocus: function(e) {
                        var t = e.context,
                            n = e.focused,
                            r = e.options,
                            i = e.label,
                            a = void 0 === i ? "" : i,
                            o = e.selectValue,
                            s = e.isDisabled,
                            l = e.isSelected,
                            c = function(e, t) {
                                return e && e.length ? "".concat(e.indexOf(t) + 1, " of ").concat(e.length) : ""
                            };
                        if ("value" === t && o) return "value ".concat(a, " focused, ").concat(c(o, n), ".");
                        if ("menu" === t) {
                            var u = s ? " disabled" : "",
                                d = "".concat(l ? "selected" : "focused").concat(u);
                            return "option ".concat(a, " ").concat(d, ", ").concat(c(r, n), ".")
                        }
                        return ""
                    },
                    onFilter: function(e) {
                        var t = e.inputValue,
                            n = e.resultsMessage;
                        return "".concat(n).concat(t ? " for search term " + t : "", ".")
                    }
                }, ir = function(e) {
                    var t = e.ariaSelection,
                        n = e.focusedOption,
                        r = e.focusedValue,
                        i = e.focusableOptions,
                        a = e.isFocused,
                        o = e.selectValue,
                        s = e.selectProps,
                        l = e.id,
                        c = s.ariaLiveMessages,
                        u = s.getOptionLabel,
                        d = s.inputValue,
                        p = s.isMulti,
                        h = s.isOptionDisabled,
                        f = s.isSearchable,
                        m = s.menuIsOpen,
                        g = s.options,
                        v = s.screenReaderStatus,
                        b = s.tabSelectsValue,
                        y = s["aria-label"],
                        _ = s["aria-live"],
                        C = (0, K.useMemo)((function() {
                            return Y(Y({}, rr), c || {})
                        }), [c]),
                        E = (0, K.useMemo)((function() {
                            var e, n = "";
                            if (t && C.onChange) {
                                var r = t.option,
                                    i = t.options,
                                    a = t.removedValue,
                                    s = t.removedValues,
                                    l = t.value,
                                    c = a || r || (e = l, Array.isArray(e) ? null : e),
                                    d = c ? u(c) : "",
                                    p = i || s || void 0,
                                    f = p ? p.map(u) : [],
                                    m = Y({
                                        isDisabled: c && h(c, o),
                                        label: d,
                                        labels: f
                                    }, t);
                                n = C.onChange(m)
                            }
                            return n
                        }), [t, C, h, o, u]),
                        w = (0, K.useMemo)((function() {
                            var e = "",
                                t = n || r,
                                a = !!(n && o && o.includes(n));
                            if (t && C.onFocus) {
                                var s = {
                                    focused: t,
                                    label: u(t),
                                    isDisabled: h(t, o),
                                    isSelected: a,
                                    options: i,
                                    context: t === n ? "menu" : "value",
                                    selectValue: o
                                };
                                e = C.onFocus(s)
                            }
                            return e
                        }), [n, r, u, h, C, i, o]),
                        x = (0, K.useMemo)((function() {
                            var e = "";
                            if (m && g.length && C.onFilter) {
                                var t = v({
                                    count: i.length
                                });
                                e = C.onFilter({
                                    inputValue: d,
                                    resultsMessage: t
                                })
                            }
                            return e
                        }), [i, d, m, C, g, v]),
                        k = (0, K.useMemo)((function() {
                            var e = "";
                            if (C.guidance) {
                                var t = r ? "value" : m ? "menu" : "input";
                                e = C.guidance({
                                    "aria-label": y,
                                    context: t,
                                    isDisabled: n && h(n, o),
                                    isMulti: p,
                                    isSearchable: f,
                                    tabSelectsValue: b
                                })
                            }
                            return e
                        }), [y, n, r, p, h, f, m, C, o, b]),
                        S = "".concat(w, " ").concat(x, " ").concat(k),
                        M = Et(K.Fragment, null, Et("span", {
                            id: "aria-selection"
                        }, E), Et("span", {
                            id: "aria-context"
                        }, S)),
                        O = "initial-input-focus" === (null == t ? void 0 : t.action);
                    return Et(K.Fragment, null, Et(nr, {
                        id: l
                    }, O && M), Et(nr, {
                        "aria-live": _,
                        "aria-atomic": "false",
                        "aria-relevant": "additions text"
                    }, a && !O && M))
                }, ar = [{
                    base: "A",
                    letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
                }, {
                    base: "AA",
                    letters: "Ꜳ"
                }, {
                    base: "AE",
                    letters: "ÆǼǢ"
                }, {
                    base: "AO",
                    letters: "Ꜵ"
                }, {
                    base: "AU",
                    letters: "Ꜷ"
                }, {
                    base: "AV",
                    letters: "ꜸꜺ"
                }, {
                    base: "AY",
                    letters: "Ꜽ"
                }, {
                    base: "B",
                    letters: "BⒷＢḂḄḆɃƂƁ"
                }, {
                    base: "C",
                    letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
                }, {
                    base: "D",
                    letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
                }, {
                    base: "DZ",
                    letters: "ǱǄ"
                }, {
                    base: "Dz",
                    letters: "ǲǅ"
                }, {
                    base: "E",
                    letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
                }, {
                    base: "F",
                    letters: "FⒻＦḞƑꝻ"
                }, {
                    base: "G",
                    letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
                }, {
                    base: "H",
                    letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
                }, {
                    base: "I",
                    letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
                }, {
                    base: "J",
                    letters: "JⒿＪĴɈ"
                }, {
                    base: "K",
                    letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
                }, {
                    base: "L",
                    letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
                }, {
                    base: "LJ",
                    letters: "Ǉ"
                }, {
                    base: "Lj",
                    letters: "ǈ"
                }, {
                    base: "M",
                    letters: "MⓂＭḾṀṂⱮƜ"
                }, {
                    base: "N",
                    letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
                }, {
                    base: "NJ",
                    letters: "Ǌ"
                }, {
                    base: "Nj",
                    letters: "ǋ"
                }, {
                    base: "O",
                    letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
                }, {
                    base: "OI",
                    letters: "Ƣ"
                }, {
                    base: "OO",
                    letters: "Ꝏ"
                }, {
                    base: "OU",
                    letters: "Ȣ"
                }, {
                    base: "P",
                    letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
                }, {
                    base: "Q",
                    letters: "QⓆＱꝖꝘɊ"
                }, {
                    base: "R",
                    letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
                }, {
                    base: "S",
                    letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
                }, {
                    base: "T",
                    letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
                }, {
                    base: "TZ",
                    letters: "Ꜩ"
                }, {
                    base: "U",
                    letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
                }, {
                    base: "V",
                    letters: "VⓋＶṼṾƲꝞɅ"
                }, {
                    base: "VY",
                    letters: "Ꝡ"
                }, {
                    base: "W",
                    letters: "WⓌＷẀẂŴẆẄẈⱲ"
                }, {
                    base: "X",
                    letters: "XⓍＸẊẌ"
                }, {
                    base: "Y",
                    letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
                }, {
                    base: "Z",
                    letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
                }, {
                    base: "a",
                    letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
                }, {
                    base: "aa",
                    letters: "ꜳ"
                }, {
                    base: "ae",
                    letters: "æǽǣ"
                }, {
                    base: "ao",
                    letters: "ꜵ"
                }, {
                    base: "au",
                    letters: "ꜷ"
                }, {
                    base: "av",
                    letters: "ꜹꜻ"
                }, {
                    base: "ay",
                    letters: "ꜽ"
                }, {
                    base: "b",
                    letters: "bⓑｂḃḅḇƀƃɓ"
                }, {
                    base: "c",
                    letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
                }, {
                    base: "d",
                    letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
                }, {
                    base: "dz",
                    letters: "ǳǆ"
                }, {
                    base: "e",
                    letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
                }, {
                    base: "f",
                    letters: "fⓕｆḟƒꝼ"
                }, {
                    base: "g",
                    letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
                }, {
                    base: "h",
                    letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
                }, {
                    base: "hv",
                    letters: "ƕ"
                }, {
                    base: "i",
                    letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
                }, {
                    base: "j",
                    letters: "jⓙｊĵǰɉ"
                }, {
                    base: "k",
                    letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
                }, {
                    base: "l",
                    letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
                }, {
                    base: "lj",
                    letters: "ǉ"
                }, {
                    base: "m",
                    letters: "mⓜｍḿṁṃɱɯ"
                }, {
                    base: "n",
                    letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
                }, {
                    base: "nj",
                    letters: "ǌ"
                }, {
                    base: "o",
                    letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
                }, {
                    base: "oi",
                    letters: "ƣ"
                }, {
                    base: "ou",
                    letters: "ȣ"
                }, {
                    base: "oo",
                    letters: "ꝏ"
                }, {
                    base: "p",
                    letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
                }, {
                    base: "q",
                    letters: "qⓠｑɋꝗꝙ"
                }, {
                    base: "r",
                    letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
                }, {
                    base: "s",
                    letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
                }, {
                    base: "t",
                    letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
                }, {
                    base: "tz",
                    letters: "ꜩ"
                }, {
                    base: "u",
                    letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
                }, {
                    base: "v",
                    letters: "vⓥｖṽṿʋꝟʌ"
                }, {
                    base: "vy",
                    letters: "ꝡ"
                }, {
                    base: "w",
                    letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
                }, {
                    base: "x",
                    letters: "xⓧｘẋẍ"
                }, {
                    base: "y",
                    letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
                }, {
                    base: "z",
                    letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
                }], or = new RegExp("[" + ar.map((function(e) {
                    return e.letters
                })).join("") + "]", "g"), sr = {}, lr = 0; lr < ar.length; lr++)
                for (var cr = ar[lr], ur = 0; ur < cr.letters.length; ur++) sr[cr.letters[ur]] = cr.base;
            var dr = function(e) {
                    return e.replace(or, (function(e) {
                        return sr[e]
                    }))
                },
                pr = function(e, t) {
                    void 0 === t && (t = er);
                    var n = null;

                    function r() {
                        for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                        if (n && n.lastThis === this && t(r, n.lastArgs)) return n.lastResult;
                        var a = e.apply(this, r);
                        return n = {
                            lastResult: a,
                            lastArgs: r,
                            lastThis: this
                        }, a
                    }
                    return r.clear = function() {
                        n = null
                    }, r
                }(dr),
                hr = function(e) {
                    return e.replace(/^\s+|\s+$/g, "")
                },
                fr = function(e) {
                    return "".concat(e.label, " ").concat(e.value)
                },
                mr = ["innerRef"];

            function gr(e) {
                var t = e.innerRef,
                    n = function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        var i = Object.entries(e).filter((function(e) {
                            var t = St(e, 1)[0];
                            return !n.includes(t)
                        }));
                        return i.reduce((function(e, t) {
                            var n = St(t, 2),
                                r = n[0],
                                i = n[1];
                            return e[r] = i, e
                        }), {})
                    }(Mt(e, mr), "onExited", "in", "enter", "exit", "appear");
                return Et("input", X({
                    ref: t
                }, n, {
                    css: wt({
                        label: "dummyInput",
                        background: 0,
                        border: 0,
                        caretColor: "transparent",
                        fontSize: "inherit",
                        gridArea: "1 / 1 / 2 / 3",
                        outline: 0,
                        padding: 0,
                        width: 1,
                        color: "transparent",
                        left: -100,
                        opacity: 0,
                        position: "relative",
                        transform: "scale(.01)"
                    }, "", "")
                }))
            }
            var vr = ["boxSizing", "height", "overflow", "paddingRight", "position"],
                br = {
                    boxSizing: "border-box",
                    overflow: "hidden",
                    position: "relative",
                    height: "100%"
                };

            function yr(e) {
                e.preventDefault()
            }

            function _r(e) {
                e.stopPropagation()
            }

            function Cr() {
                var e = this.scrollTop,
                    t = this.scrollHeight,
                    n = e + this.offsetHeight;
                0 === e ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1)
            }

            function Er() {
                return "ontouchstart" in window || navigator.maxTouchPoints
            }
            var wr = !("undefined" == typeof window || !window.document || !window.document.createElement),
                xr = 0,
                kr = {
                    capture: !1,
                    passive: !1
                },
                Sr = function(e) {
                    var t = e.target;
                    return t.ownerDocument.activeElement && t.ownerDocument.activeElement.blur()
                },
                Mr = {
                    name: "1kfdb0e",
                    styles: "position:fixed;left:0;bottom:0;right:0;top:0"
                };

            function Or(e) {
                var t = e.children,
                    n = e.lockEnabled,
                    r = e.captureEnabled,
                    i = function(e) {
                        var t = e.isEnabled,
                            n = e.onBottomArrive,
                            r = e.onBottomLeave,
                            i = e.onTopArrive,
                            a = e.onTopLeave,
                            o = (0, K.useRef)(!1),
                            s = (0, K.useRef)(!1),
                            l = (0, K.useRef)(0),
                            c = (0, K.useRef)(null),
                            u = (0, K.useCallback)((function(e, t) {
                                if (null !== c.current) {
                                    var l = c.current,
                                        u = l.scrollTop,
                                        d = l.scrollHeight,
                                        p = l.clientHeight,
                                        h = c.current,
                                        f = t > 0,
                                        m = d - p - u,
                                        g = !1;
                                    m > t && o.current && (r && r(e), o.current = !1), f && s.current && (a && a(e), s.current = !1), f && t > m ? (n && !o.current && n(e), h.scrollTop = d, g = !0, o.current = !0) : !f && -t > u && (i && !s.current && i(e), h.scrollTop = 0, g = !0, s.current = !0), g && function(e) {
                                        e.cancelable && e.preventDefault(), e.stopPropagation()
                                    }(e)
                                }
                            }), [n, r, i, a]),
                            d = (0, K.useCallback)((function(e) {
                                u(e, e.deltaY)
                            }), [u]),
                            p = (0, K.useCallback)((function(e) {
                                l.current = e.changedTouches[0].clientY
                            }), []),
                            h = (0, K.useCallback)((function(e) {
                                var t = l.current - e.changedTouches[0].clientY;
                                u(e, t)
                            }), [u]),
                            f = (0, K.useCallback)((function(e) {
                                if (e) {
                                    var t = !!fn && {
                                        passive: !1
                                    };
                                    e.addEventListener("wheel", d, t), e.addEventListener("touchstart", p, t), e.addEventListener("touchmove", h, t)
                                }
                            }), [h, p, d]),
                            m = (0, K.useCallback)((function(e) {
                                e && (e.removeEventListener("wheel", d, !1), e.removeEventListener("touchstart", p, !1), e.removeEventListener("touchmove", h, !1))
                            }), [h, p, d]);
                        return (0, K.useEffect)((function() {
                                if (t) {
                                    var e = c.current;
                                    return f(e),
                                        function() {
                                            m(e)
                                        }
                                }
                            }), [t, f, m]),
                            function(e) {
                                c.current = e
                            }
                    }({
                        isEnabled: void 0 === r || r,
                        onBottomArrive: e.onBottomArrive,
                        onBottomLeave: e.onBottomLeave,
                        onTopArrive: e.onTopArrive,
                        onTopLeave: e.onTopLeave
                    }),
                    a = function(e) {
                        var t = e.isEnabled,
                            n = e.accountForScrollbars,
                            r = void 0 === n || n,
                            i = (0, K.useRef)({}),
                            a = (0, K.useRef)(null),
                            o = (0, K.useCallback)((function(e) {
                                if (wr) {
                                    var t = document.body,
                                        n = t && t.style;
                                    if (r && vr.forEach((function(e) {
                                            var t = n && n[e];
                                            i.current[e] = t
                                        })), r && xr < 1) {
                                        var a = parseInt(i.current.paddingRight, 10) || 0,
                                            o = document.body ? document.body.clientWidth : 0,
                                            s = window.innerWidth - o + a || 0;
                                        Object.keys(br).forEach((function(e) {
                                            var t = br[e];
                                            n && (n[e] = t)
                                        })), n && (n.paddingRight = "".concat(s, "px"))
                                    }
                                    t && Er() && (t.addEventListener("touchmove", yr, kr), e && (e.addEventListener("touchstart", Cr, kr), e.addEventListener("touchmove", _r, kr))), xr += 1
                                }
                            }), [r]),
                            s = (0, K.useCallback)((function(e) {
                                if (wr) {
                                    var t = document.body,
                                        n = t && t.style;
                                    xr = Math.max(xr - 1, 0), r && xr < 1 && vr.forEach((function(e) {
                                        var t = i.current[e];
                                        n && (n[e] = t)
                                    })), t && Er() && (t.removeEventListener("touchmove", yr, kr), e && (e.removeEventListener("touchstart", Cr, kr), e.removeEventListener("touchmove", _r, kr)))
                                }
                            }), [r]);
                        return (0, K.useEffect)((function() {
                                if (t) {
                                    var e = a.current;
                                    return o(e),
                                        function() {
                                            s(e)
                                        }
                                }
                            }), [t, o, s]),
                            function(e) {
                                a.current = e
                            }
                    }({
                        isEnabled: n
                    });
                return Et(K.Fragment, null, n && Et("div", {
                    onClick: Sr,
                    css: Mr
                }), t((function(e) {
                    i(e), a(e)
                })))
            }
            var zr = {
                    name: "1a0ro4n-requiredInput",
                    styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
                },
                Lr = function(e) {
                    var t = e.name,
                        n = e.onFocus;
                    return Et("input", {
                        required: !0,
                        name: t,
                        tabIndex: -1,
                        "aria-hidden": "true",
                        onFocus: n,
                        css: zr,
                        value: "",
                        onChange: function() {}
                    })
                },
                Tr = {
                    clearIndicator: Vn,
                    container: function(e) {
                        var t = e.isDisabled;
                        return {
                            label: "container",
                            direction: e.isRtl ? "rtl" : void 0,
                            pointerEvents: t ? "none" : void 0,
                            position: "relative"
                        }
                    },
                    control: function(e, t) {
                        var n = e.isDisabled,
                            r = e.isFocused,
                            i = e.theme,
                            a = i.colors,
                            o = i.borderRadius;
                        return Y({
                            label: "control",
                            alignItems: "center",
                            cursor: "default",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            minHeight: i.spacing.controlHeight,
                            outline: "0 !important",
                            position: "relative",
                            transition: "all 100ms"
                        }, t ? {} : {
                            backgroundColor: n ? a.neutral5 : a.neutral0,
                            borderColor: n ? a.neutral10 : r ? a.primary : a.neutral20,
                            borderRadius: o,
                            borderStyle: "solid",
                            borderWidth: 1,
                            boxShadow: r ? "0 0 0 1px ".concat(a.primary) : void 0,
                            "&:hover": {
                                borderColor: r ? a.primary : a.neutral30
                            }
                        })
                    },
                    dropdownIndicator: Nn,
                    group: function(e, t) {
                        var n = e.theme.spacing;
                        return t ? {} : {
                            paddingBottom: 2 * n.baseUnit,
                            paddingTop: 2 * n.baseUnit
                        }
                    },
                    groupHeading: function(e, t) {
                        var n = e.theme,
                            r = n.colors,
                            i = n.spacing;
                        return Y({
                            label: "group",
                            cursor: "default",
                            display: "block"
                        }, t ? {} : {
                            color: r.neutral40,
                            fontSize: "75%",
                            fontWeight: 500,
                            marginBottom: "0.25em",
                            paddingLeft: 3 * i.baseUnit,
                            paddingRight: 3 * i.baseUnit,
                            textTransform: "uppercase"
                        })
                    },
                    indicatorsContainer: function() {
                        return {
                            alignItems: "center",
                            alignSelf: "stretch",
                            display: "flex",
                            flexShrink: 0
                        }
                    },
                    indicatorSeparator: function(e, t) {
                        var n = e.isDisabled,
                            r = e.theme,
                            i = r.spacing.baseUnit,
                            a = r.colors;
                        return Y({
                            label: "indicatorSeparator",
                            alignSelf: "stretch",
                            width: 1
                        }, t ? {} : {
                            backgroundColor: n ? a.neutral10 : a.neutral20,
                            marginBottom: 2 * i,
                            marginTop: 2 * i
                        })
                    },
                    input: function(e, t) {
                        var n = e.isDisabled,
                            r = e.value,
                            i = e.theme,
                            a = i.spacing,
                            o = i.colors;
                        return Y(Y({
                            visibility: n ? "hidden" : "visible",
                            transform: r ? "translateZ(0)" : ""
                        }, Wn), t ? {} : {
                            margin: a.baseUnit / 2,
                            paddingBottom: a.baseUnit / 2,
                            paddingTop: a.baseUnit / 2,
                            color: o.neutral80
                        })
                    },
                    loadingIndicator: function(e, t) {
                        var n = e.isFocused,
                            r = e.size,
                            i = e.theme,
                            a = i.colors,
                            o = i.spacing.baseUnit;
                        return Y({
                            label: "loadingIndicator",
                            display: "flex",
                            transition: "color 150ms",
                            alignSelf: "center",
                            fontSize: r,
                            lineHeight: 1,
                            marginRight: r,
                            textAlign: "center",
                            verticalAlign: "middle"
                        }, t ? {} : {
                            color: n ? a.neutral60 : a.neutral20,
                            padding: 2 * o
                        })
                    },
                    loadingMessage: On,
                    menu: function(e, t) {
                        var n, r = e.placement,
                            i = e.theme,
                            a = i.borderRadius,
                            o = i.spacing,
                            s = i.colors;
                        return Y((G(n = {
                            label: "menu"
                        }, function(e) {
                            return e ? {
                                bottom: "top",
                                top: "bottom"
                            }[e] : "bottom"
                        }(r), "100%"), G(n, "position", "absolute"), G(n, "width", "100%"), G(n, "zIndex", 1), n), t ? {} : {
                            backgroundColor: s.neutral0,
                            borderRadius: a,
                            boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
                            marginBottom: o.menuGutter,
                            marginTop: o.menuGutter
                        })
                    },
                    menuList: function(e, t) {
                        var n = e.maxHeight,
                            r = e.theme.spacing.baseUnit;
                        return Y({
                            maxHeight: n,
                            overflowY: "auto",
                            position: "relative",
                            WebkitOverflowScrolling: "touch"
                        }, t ? {} : {
                            paddingBottom: r,
                            paddingTop: r
                        })
                    },
                    menuPortal: function(e) {
                        var t = e.rect,
                            n = e.offset,
                            r = e.position;
                        return {
                            left: t.left,
                            position: r,
                            top: n,
                            width: t.width,
                            zIndex: 1
                        }
                    },
                    multiValue: function(e, t) {
                        var n = e.theme,
                            r = n.spacing,
                            i = n.borderRadius,
                            a = n.colors;
                        return Y({
                            label: "multiValue",
                            display: "flex",
                            minWidth: 0
                        }, t ? {} : {
                            backgroundColor: a.neutral10,
                            borderRadius: i / 2,
                            margin: r.baseUnit / 2
                        })
                    },
                    multiValueLabel: function(e, t) {
                        var n = e.theme,
                            r = n.borderRadius,
                            i = n.colors,
                            a = e.cropWithEllipsis;
                        return Y({
                            overflow: "hidden",
                            textOverflow: a || void 0 === a ? "ellipsis" : void 0,
                            whiteSpace: "nowrap"
                        }, t ? {} : {
                            borderRadius: r / 2,
                            color: i.neutral80,
                            fontSize: "85%",
                            padding: 3,
                            paddingLeft: 6
                        })
                    },
                    multiValueRemove: function(e, t) {
                        var n = e.theme,
                            r = n.spacing,
                            i = n.borderRadius,
                            a = n.colors,
                            o = e.isFocused;
                        return Y({
                            alignItems: "center",
                            display: "flex"
                        }, t ? {} : {
                            borderRadius: i / 2,
                            backgroundColor: o ? a.dangerLight : void 0,
                            paddingLeft: r.baseUnit,
                            paddingRight: r.baseUnit,
                            ":hover": {
                                backgroundColor: a.dangerLight,
                                color: a.danger
                            }
                        })
                    },
                    noOptionsMessage: Mn,
                    option: function(e, t) {
                        var n = e.isDisabled,
                            r = e.isFocused,
                            i = e.isSelected,
                            a = e.theme,
                            o = a.spacing,
                            s = a.colors;
                        return Y({
                            label: "option",
                            cursor: "default",
                            display: "block",
                            fontSize: "inherit",
                            width: "100%",
                            userSelect: "none",
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
                        }, t ? {} : {
                            backgroundColor: i ? s.primary : r ? s.primary25 : "transparent",
                            color: n ? s.neutral20 : i ? s.neutral0 : "inherit",
                            padding: "".concat(2 * o.baseUnit, "px ").concat(3 * o.baseUnit, "px"),
                            ":active": {
                                backgroundColor: n ? void 0 : i ? s.primary : s.primary50
                            }
                        })
                    },
                    placeholder: function(e, t) {
                        var n = e.theme,
                            r = n.spacing,
                            i = n.colors;
                        return Y({
                            label: "placeholder",
                            gridArea: "1 / 1 / 2 / 3"
                        }, t ? {} : {
                            color: i.neutral50,
                            marginLeft: r.baseUnit / 2,
                            marginRight: r.baseUnit / 2
                        })
                    },
                    singleValue: function(e, t) {
                        var n = e.isDisabled,
                            r = e.theme,
                            i = r.spacing,
                            a = r.colors;
                        return Y({
                            label: "singleValue",
                            gridArea: "1 / 1 / 2 / 3",
                            maxWidth: "100%",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                        }, t ? {} : {
                            color: n ? a.neutral40 : a.neutral80,
                            marginLeft: i.baseUnit / 2,
                            marginRight: i.baseUnit / 2
                        })
                    },
                    valueContainer: function(e, t) {
                        var n = e.theme.spacing,
                            r = e.isMulti,
                            i = e.hasValue,
                            a = e.selectProps.controlShouldRenderValue;
                        return Y({
                            alignItems: "center",
                            display: r && i && a ? "flex" : "grid",
                            flex: 1,
                            flexWrap: "wrap",
                            WebkitOverflowScrolling: "touch",
                            position: "relative",
                            overflow: "hidden"
                        }, t ? {} : {
                            padding: "".concat(n.baseUnit / 2, "px ").concat(2 * n.baseUnit, "px")
                        })
                    }
                },
                Ir = {
                    borderRadius: 4,
                    colors: {
                        primary: "#2684FF",
                        primary75: "#4C9AFF",
                        primary50: "#B2D4FF",
                        primary25: "#DEEBFF",
                        danger: "#DE350B",
                        dangerLight: "#FFBDAD",
                        neutral0: "hsl(0, 0%, 100%)",
                        neutral5: "hsl(0, 0%, 95%)",
                        neutral10: "hsl(0, 0%, 90%)",
                        neutral20: "hsl(0, 0%, 80%)",
                        neutral30: "hsl(0, 0%, 70%)",
                        neutral40: "hsl(0, 0%, 60%)",
                        neutral50: "hsl(0, 0%, 50%)",
                        neutral60: "hsl(0, 0%, 40%)",
                        neutral70: "hsl(0, 0%, 30%)",
                        neutral80: "hsl(0, 0%, 20%)",
                        neutral90: "hsl(0, 0%, 10%)"
                    },
                    spacing: {
                        baseUnit: 4,
                        controlHeight: 38,
                        menuGutter: 8
                    }
                },
                Pr = {
                    "aria-live": "polite",
                    backspaceRemovesValue: !0,
                    blurInputOnSelect: un(),
                    captureMenuScroll: !un(),
                    classNames: {},
                    closeMenuOnSelect: !0,
                    closeMenuOnScroll: !1,
                    components: {},
                    controlShouldRenderValue: !0,
                    escapeClearsValue: !1,
                    filterOption: function(e, t) {
                        if (e.data.__isNew__) return !0;
                        var n = Y({
                                ignoreCase: !0,
                                ignoreAccents: !0,
                                stringify: fr,
                                trim: !0,
                                matchFrom: "any"
                            }, undefined),
                            r = n.ignoreCase,
                            i = n.ignoreAccents,
                            a = n.stringify,
                            o = n.trim,
                            s = n.matchFrom,
                            l = o ? hr(t) : t,
                            c = o ? hr(a(e)) : a(e);
                        return r && (l = l.toLowerCase(), c = c.toLowerCase()), i && (l = pr(l), c = dr(c)), "start" === s ? c.substr(0, l.length) === l : c.indexOf(l) > -1
                    },
                    formatGroupLabel: function(e) {
                        return e.label
                    },
                    getOptionLabel: function(e) {
                        return e.label
                    },
                    getOptionValue: function(e) {
                        return e.value
                    },
                    isDisabled: !1,
                    isLoading: !1,
                    isMulti: !1,
                    isRtl: !1,
                    isSearchable: !0,
                    isOptionDisabled: function(e) {
                        return !!e.isDisabled
                    },
                    loadingMessage: function() {
                        return "Loading..."
                    },
                    maxMenuHeight: 300,
                    minMenuHeight: 140,
                    menuIsOpen: !1,
                    menuPlacement: "bottom",
                    menuPosition: "absolute",
                    menuShouldBlockScroll: !1,
                    menuShouldScrollIntoView: ! function() {
                        try {
                            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                        } catch (e) {
                            return !1
                        }
                    }(),
                    noOptionsMessage: function() {
                        return "No options"
                    },
                    openMenuOnFocus: !1,
                    openMenuOnClick: !0,
                    options: [],
                    pageSize: 5,
                    placeholder: "Select...",
                    screenReaderStatus: function(e) {
                        var t = e.count;
                        return "".concat(t, " result").concat(1 !== t ? "s" : "", " available")
                    },
                    styles: {},
                    tabIndex: 0,
                    tabSelectsValue: !0,
                    unstyled: !1
                };

            function Rr(e, t, n, r) {
                return {
                    type: "option",
                    data: t,
                    isDisabled: Fr(e, t, n),
                    isSelected: jr(e, t, n),
                    label: Hr(e, t),
                    value: Dr(e, t),
                    index: r
                }
            }

            function Ar(e, t) {
                return e.options.map((function(n, r) {
                    if ("options" in n) {
                        var i = n.options.map((function(n, r) {
                            return Rr(e, n, t, r)
                        })).filter((function(t) {
                            return Vr(e, t)
                        }));
                        return i.length > 0 ? {
                            type: "group",
                            data: n,
                            options: i,
                            index: r
                        } : void 0
                    }
                    var a = Rr(e, n, t, r);
                    return Vr(e, a) ? a : void 0
                })).filter(mn)
            }

            function Nr(e) {
                return e.reduce((function(e, t) {
                    return "group" === t.type ? e.push.apply(e, Jn(t.options.map((function(e) {
                        return e.data
                    })))) : e.push(t.data), e
                }), [])
            }

            function Vr(e, t) {
                var n = e.inputValue,
                    r = void 0 === n ? "" : n,
                    i = t.data,
                    a = t.isSelected,
                    o = t.label,
                    s = t.value;
                return (!Wr(e) || !a) && Br(e, {
                    label: o,
                    value: s,
                    data: i
                }, r)
            }
            var Hr = function(e, t) {
                    return e.getOptionLabel(t)
                },
                Dr = function(e, t) {
                    return e.getOptionValue(t)
                };

            function Fr(e, t, n) {
                return "function" == typeof e.isOptionDisabled && e.isOptionDisabled(t, n)
            }

            function jr(e, t, n) {
                if (n.indexOf(t) > -1) return !0;
                if ("function" == typeof e.isOptionSelected) return e.isOptionSelected(t, n);
                var r = Dr(e, t);
                return n.some((function(t) {
                    return Dr(e, t) === r
                }))
            }

            function Br(e, t, n) {
                return !e.filterOption || e.filterOption(t, n)
            }
            var Wr = function(e) {
                    var t = e.hideSelectedOptions,
                        n = e.isMulti;
                    return void 0 === t ? n : t
                },
                $r = 1,
                Ur = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && Yn(e, t)
                    }(a, e);
                    var t, n, r, i = Kn(a);

                    function a(e) {
                        var t;
                        if (function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, a), (t = i.call(this, e)).state = {
                                ariaSelection: null,
                                focusedOption: null,
                                focusedValue: null,
                                inputIsHidden: !1,
                                isFocused: !1,
                                selectValue: [],
                                clearFocusValueOnUpdate: !1,
                                prevWasFocused: !1,
                                inputIsHiddenAfterUpdate: void 0,
                                prevProps: void 0
                            }, t.blockOptionHover = !1, t.isComposing = !1, t.commonProps = void 0, t.initialTouchX = 0, t.initialTouchY = 0, t.instancePrefix = "", t.openAfterFocus = !1, t.scrollToFocusedOptionOnUpdate = !1, t.userIsDragging = void 0, t.controlRef = null, t.getControlRef = function(e) {
                                t.controlRef = e
                            }, t.focusedOptionRef = null, t.getFocusedOptionRef = function(e) {
                                t.focusedOptionRef = e
                            }, t.menuListRef = null, t.getMenuListRef = function(e) {
                                t.menuListRef = e
                            }, t.inputRef = null, t.getInputRef = function(e) {
                                t.inputRef = e
                            }, t.focus = t.focusInput, t.blur = t.blurInput, t.onChange = function(e, n) {
                                var r = t.props,
                                    i = r.onChange,
                                    a = r.name;
                                n.name = a, t.ariaOnChange(e, n), i(e, n)
                            }, t.setValue = function(e, n, r) {
                                var i = t.props,
                                    a = i.closeMenuOnSelect,
                                    o = i.isMulti,
                                    s = i.inputValue;
                                t.onInputChange("", {
                                    action: "set-value",
                                    prevInputValue: s
                                }), a && (t.setState({
                                    inputIsHiddenAfterUpdate: !o
                                }), t.onMenuClose()), t.setState({
                                    clearFocusValueOnUpdate: !0
                                }), t.onChange(e, {
                                    action: n,
                                    option: r
                                })
                            }, t.selectOption = function(e) {
                                var n = t.props,
                                    r = n.blurInputOnSelect,
                                    i = n.isMulti,
                                    a = n.name,
                                    o = t.state.selectValue,
                                    s = i && t.isOptionSelected(e, o),
                                    l = t.isOptionDisabled(e, o);
                                if (s) {
                                    var c = t.getOptionValue(e);
                                    t.setValue(o.filter((function(e) {
                                        return t.getOptionValue(e) !== c
                                    })), "deselect-option", e)
                                } else {
                                    if (l) return void t.ariaOnChange(e, {
                                        action: "select-option",
                                        option: e,
                                        name: a
                                    });
                                    i ? t.setValue([].concat(Jn(o), [e]), "select-option", e) : t.setValue(e, "select-option")
                                }
                                r && t.blurInput()
                            }, t.removeValue = function(e) {
                                var n = t.props.isMulti,
                                    r = t.state.selectValue,
                                    i = t.getOptionValue(e),
                                    a = r.filter((function(e) {
                                        return t.getOptionValue(e) !== i
                                    })),
                                    o = gn(n, a, a[0] || null);
                                t.onChange(o, {
                                    action: "remove-value",
                                    removedValue: e
                                }), t.focusInput()
                            }, t.clearValue = function() {
                                var e = t.state.selectValue;
                                t.onChange(gn(t.props.isMulti, [], null), {
                                    action: "clear",
                                    removedValues: e
                                })
                            }, t.popValue = function() {
                                var e = t.props.isMulti,
                                    n = t.state.selectValue,
                                    r = n[n.length - 1],
                                    i = n.slice(0, n.length - 1),
                                    a = gn(e, i, i[0] || null);
                                t.onChange(a, {
                                    action: "pop-value",
                                    removedValue: r
                                })
                            }, t.getValue = function() {
                                return t.state.selectValue
                            }, t.cx = function() {
                                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                return en.apply(void 0, [t.props.classNamePrefix].concat(n))
                            }, t.getOptionLabel = function(e) {
                                return Hr(t.props, e)
                            }, t.getOptionValue = function(e) {
                                return Dr(t.props, e)
                            }, t.getStyles = function(e, n) {
                                var r = t.props.unstyled,
                                    i = Tr[e](n, r);
                                i.boxSizing = "border-box";
                                var a = t.props.styles[e];
                                return a ? a(i, n) : i
                            }, t.getClassNames = function(e, n) {
                                var r, i;
                                return null === (r = (i = t.props.classNames)[e]) || void 0 === r ? void 0 : r.call(i, n)
                            }, t.getElementId = function(e) {
                                return "".concat(t.instancePrefix, "-").concat(e)
                            }, t.getComponents = function() {
                                return e = t.props, Y(Y({}, Zn), e.components);
                                var e
                            }, t.buildCategorizedOptions = function() {
                                return Ar(t.props, t.state.selectValue)
                            }, t.getCategorizedOptions = function() {
                                return t.props.menuIsOpen ? t.buildCategorizedOptions() : []
                            }, t.buildFocusableOptions = function() {
                                return Nr(t.buildCategorizedOptions())
                            }, t.getFocusableOptions = function() {
                                return t.props.menuIsOpen ? t.buildFocusableOptions() : []
                            }, t.ariaOnChange = function(e, n) {
                                t.setState({
                                    ariaSelection: Y({
                                        value: e
                                    }, n)
                                })
                            }, t.onMenuMouseDown = function(e) {
                                0 === e.button && (e.stopPropagation(), e.preventDefault(), t.focusInput())
                            }, t.onMenuMouseMove = function(e) {
                                t.blockOptionHover = !1
                            }, t.onControlMouseDown = function(e) {
                                if (!e.defaultPrevented) {
                                    var n = t.props.openMenuOnClick;
                                    t.state.isFocused ? t.props.menuIsOpen ? "INPUT" !== e.target.tagName && "TEXTAREA" !== e.target.tagName && t.onMenuClose() : n && t.openMenu("first") : (n && (t.openAfterFocus = !0), t.focusInput()), "INPUT" !== e.target.tagName && "TEXTAREA" !== e.target.tagName && e.preventDefault()
                                }
                            }, t.onDropdownIndicatorMouseDown = function(e) {
                                if (!(e && "mousedown" === e.type && 0 !== e.button || t.props.isDisabled)) {
                                    var n = t.props,
                                        r = n.isMulti,
                                        i = n.menuIsOpen;
                                    t.focusInput(), i ? (t.setState({
                                        inputIsHiddenAfterUpdate: !r
                                    }), t.onMenuClose()) : t.openMenu("first"), e.preventDefault()
                                }
                            }, t.onClearIndicatorMouseDown = function(e) {
                                e && "mousedown" === e.type && 0 !== e.button || (t.clearValue(), e.preventDefault(), t.openAfterFocus = !1, "touchend" === e.type ? t.focusInput() : setTimeout((function() {
                                    return t.focusInput()
                                })))
                            }, t.onScroll = function(e) {
                                "boolean" == typeof t.props.closeMenuOnScroll ? e.target instanceof HTMLElement && an(e.target) && t.props.onMenuClose() : "function" == typeof t.props.closeMenuOnScroll && t.props.closeMenuOnScroll(e) && t.props.onMenuClose()
                            }, t.onCompositionStart = function() {
                                t.isComposing = !0
                            }, t.onCompositionEnd = function() {
                                t.isComposing = !1
                            }, t.onTouchStart = function(e) {
                                var n = e.touches,
                                    r = n && n.item(0);
                                r && (t.initialTouchX = r.clientX, t.initialTouchY = r.clientY, t.userIsDragging = !1)
                            }, t.onTouchMove = function(e) {
                                var n = e.touches,
                                    r = n && n.item(0);
                                if (r) {
                                    var i = Math.abs(r.clientX - t.initialTouchX),
                                        a = Math.abs(r.clientY - t.initialTouchY);
                                    t.userIsDragging = i > 5 || a > 5
                                }
                            }, t.onTouchEnd = function(e) {
                                t.userIsDragging || (t.controlRef && !t.controlRef.contains(e.target) && t.menuListRef && !t.menuListRef.contains(e.target) && t.blurInput(), t.initialTouchX = 0, t.initialTouchY = 0)
                            }, t.onControlTouchEnd = function(e) {
                                t.userIsDragging || t.onControlMouseDown(e)
                            }, t.onClearIndicatorTouchEnd = function(e) {
                                t.userIsDragging || t.onClearIndicatorMouseDown(e)
                            }, t.onDropdownIndicatorTouchEnd = function(e) {
                                t.userIsDragging || t.onDropdownIndicatorMouseDown(e)
                            }, t.handleInputChange = function(e) {
                                var n = t.props.inputValue,
                                    r = e.currentTarget.value;
                                t.setState({
                                    inputIsHiddenAfterUpdate: !1
                                }), t.onInputChange(r, {
                                    action: "input-change",
                                    prevInputValue: n
                                }), t.props.menuIsOpen || t.onMenuOpen()
                            }, t.onInputFocus = function(e) {
                                t.props.onFocus && t.props.onFocus(e), t.setState({
                                    inputIsHiddenAfterUpdate: !1,
                                    isFocused: !0
                                }), (t.openAfterFocus || t.props.openMenuOnFocus) && t.openMenu("first"), t.openAfterFocus = !1
                            }, t.onInputBlur = function(e) {
                                var n = t.props.inputValue;
                                t.menuListRef && t.menuListRef.contains(document.activeElement) ? t.inputRef.focus() : (t.props.onBlur && t.props.onBlur(e), t.onInputChange("", {
                                    action: "input-blur",
                                    prevInputValue: n
                                }), t.onMenuClose(), t.setState({
                                    focusedValue: null,
                                    isFocused: !1
                                }))
                            }, t.onOptionHover = function(e) {
                                t.blockOptionHover || t.state.focusedOption === e || t.setState({
                                    focusedOption: e
                                })
                            }, t.shouldHideSelectedOptions = function() {
                                return Wr(t.props)
                            }, t.onValueInputFocus = function(e) {
                                e.preventDefault(), e.stopPropagation(), t.focus()
                            }, t.onKeyDown = function(e) {
                                var n = t.props,
                                    r = n.isMulti,
                                    i = n.backspaceRemovesValue,
                                    a = n.escapeClearsValue,
                                    o = n.inputValue,
                                    s = n.isClearable,
                                    l = n.isDisabled,
                                    c = n.menuIsOpen,
                                    u = n.onKeyDown,
                                    d = n.tabSelectsValue,
                                    p = n.openMenuOnFocus,
                                    h = t.state,
                                    f = h.focusedOption,
                                    m = h.focusedValue,
                                    g = h.selectValue;
                                if (!(l || "function" == typeof u && (u(e), e.defaultPrevented))) {
                                    switch (t.blockOptionHover = !0, e.key) {
                                        case "ArrowLeft":
                                            if (!r || o) return;
                                            t.focusValue("previous");
                                            break;
                                        case "ArrowRight":
                                            if (!r || o) return;
                                            t.focusValue("next");
                                            break;
                                        case "Delete":
                                        case "Backspace":
                                            if (o) return;
                                            if (m) t.removeValue(m);
                                            else {
                                                if (!i) return;
                                                r ? t.popValue() : s && t.clearValue()
                                            }
                                            break;
                                        case "Tab":
                                            if (t.isComposing) return;
                                            if (e.shiftKey || !c || !d || !f || p && t.isOptionSelected(f, g)) return;
                                            t.selectOption(f);
                                            break;
                                        case "Enter":
                                            if (229 === e.keyCode) break;
                                            if (c) {
                                                if (!f) return;
                                                if (t.isComposing) return;
                                                t.selectOption(f);
                                                break
                                            }
                                            return;
                                        case "Escape":
                                            c ? (t.setState({
                                                inputIsHiddenAfterUpdate: !1
                                            }), t.onInputChange("", {
                                                action: "menu-close",
                                                prevInputValue: o
                                            }), t.onMenuClose()) : s && a && t.clearValue();
                                            break;
                                        case " ":
                                            if (o) return;
                                            if (!c) {
                                                t.openMenu("first");
                                                break
                                            }
                                            if (!f) return;
                                            t.selectOption(f);
                                            break;
                                        case "ArrowUp":
                                            c ? t.focusOption("up") : t.openMenu("last");
                                            break;
                                        case "ArrowDown":
                                            c ? t.focusOption("down") : t.openMenu("first");
                                            break;
                                        case "PageUp":
                                            if (!c) return;
                                            t.focusOption("pageup");
                                            break;
                                        case "PageDown":
                                            if (!c) return;
                                            t.focusOption("pagedown");
                                            break;
                                        case "Home":
                                            if (!c) return;
                                            t.focusOption("first");
                                            break;
                                        case "End":
                                            if (!c) return;
                                            t.focusOption("last");
                                            break;
                                        default:
                                            return
                                    }
                                    e.preventDefault()
                                }
                            }, t.instancePrefix = "react-select-" + (t.props.instanceId || ++$r), t.state.selectValue = tn(e.value), e.menuIsOpen && t.state.selectValue.length) {
                            var n = t.buildFocusableOptions(),
                                r = n.indexOf(t.state.selectValue[0]);
                            t.state.focusedOption = n[r]
                        }
                        return t
                    }
                    return t = a, n = [{
                        key: "componentDidMount",
                        value: function() {
                            this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && cn(this.menuListRef, this.focusedOptionRef)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props,
                                n = t.isDisabled,
                                r = t.menuIsOpen,
                                i = this.state.isFocused;
                            (i && !n && e.isDisabled || i && r && !e.menuIsOpen) && this.focusInput(), i && n && !e.isDisabled ? this.setState({
                                isFocused: !1
                            }, this.onMenuClose) : i || n || !e.isDisabled || this.inputRef !== document.activeElement || this.setState({
                                isFocused: !0
                            }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (cn(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0)
                        }
                    }, {
                        key: "onMenuOpen",
                        value: function() {
                            this.props.onMenuOpen()
                        }
                    }, {
                        key: "onMenuClose",
                        value: function() {
                            this.onInputChange("", {
                                action: "menu-close",
                                prevInputValue: this.props.inputValue
                            }), this.props.onMenuClose()
                        }
                    }, {
                        key: "onInputChange",
                        value: function(e, t) {
                            this.props.onInputChange(e, t)
                        }
                    }, {
                        key: "focusInput",
                        value: function() {
                            this.inputRef && this.inputRef.focus()
                        }
                    }, {
                        key: "blurInput",
                        value: function() {
                            this.inputRef && this.inputRef.blur()
                        }
                    }, {
                        key: "openMenu",
                        value: function(e) {
                            var t = this,
                                n = this.state,
                                r = n.selectValue,
                                i = n.isFocused,
                                a = this.buildFocusableOptions(),
                                o = "first" === e ? 0 : a.length - 1;
                            if (!this.props.isMulti) {
                                var s = a.indexOf(r[0]);
                                s > -1 && (o = s)
                            }
                            this.scrollToFocusedOptionOnUpdate = !(i && this.menuListRef), this.setState({
                                inputIsHiddenAfterUpdate: !1,
                                focusedValue: null,
                                focusedOption: a[o]
                            }, (function() {
                                return t.onMenuOpen()
                            }))
                        }
                    }, {
                        key: "focusValue",
                        value: function(e) {
                            var t = this.state,
                                n = t.selectValue,
                                r = t.focusedValue;
                            if (this.props.isMulti) {
                                this.setState({
                                    focusedOption: null
                                });
                                var i = n.indexOf(r);
                                r || (i = -1);
                                var a = n.length - 1,
                                    o = -1;
                                if (n.length) {
                                    switch (e) {
                                        case "previous":
                                            o = 0 === i ? 0 : -1 === i ? a : i - 1;
                                            break;
                                        case "next":
                                            i > -1 && i < a && (o = i + 1)
                                    }
                                    this.setState({
                                        inputIsHidden: -1 !== o,
                                        focusedValue: n[o]
                                    })
                                }
                            }
                        }
                    }, {
                        key: "focusOption",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "first",
                                t = this.props.pageSize,
                                n = this.state.focusedOption,
                                r = this.getFocusableOptions();
                            if (r.length) {
                                var i = 0,
                                    a = r.indexOf(n);
                                n || (a = -1), "up" === e ? i = a > 0 ? a - 1 : r.length - 1 : "down" === e ? i = (a + 1) % r.length : "pageup" === e ? (i = a - t) < 0 && (i = 0) : "pagedown" === e ? (i = a + t) > r.length - 1 && (i = r.length - 1) : "last" === e && (i = r.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
                                    focusedOption: r[i],
                                    focusedValue: null
                                })
                            }
                        }
                    }, {
                        key: "getTheme",
                        value: function() {
                            return this.props.theme ? "function" == typeof this.props.theme ? this.props.theme(Ir) : Y(Y({}, Ir), this.props.theme) : Ir
                        }
                    }, {
                        key: "getCommonProps",
                        value: function() {
                            var e = this.clearValue,
                                t = this.cx,
                                n = this.getStyles,
                                r = this.getClassNames,
                                i = this.getValue,
                                a = this.selectOption,
                                o = this.setValue,
                                s = this.props,
                                l = s.isMulti,
                                c = s.isRtl,
                                u = s.options;
                            return {
                                clearValue: e,
                                cx: t,
                                getStyles: n,
                                getClassNames: r,
                                getValue: i,
                                hasValue: this.hasValue(),
                                isMulti: l,
                                isRtl: c,
                                options: u,
                                selectOption: a,
                                selectProps: s,
                                setValue: o,
                                theme: this.getTheme()
                            }
                        }
                    }, {
                        key: "hasValue",
                        value: function() {
                            return this.state.selectValue.length > 0
                        }
                    }, {
                        key: "hasOptions",
                        value: function() {
                            return !!this.getFocusableOptions().length
                        }
                    }, {
                        key: "isClearable",
                        value: function() {
                            var e = this.props,
                                t = e.isClearable,
                                n = e.isMulti;
                            return void 0 === t ? n : t
                        }
                    }, {
                        key: "isOptionDisabled",
                        value: function(e, t) {
                            return Fr(this.props, e, t)
                        }
                    }, {
                        key: "isOptionSelected",
                        value: function(e, t) {
                            return jr(this.props, e, t)
                        }
                    }, {
                        key: "filterOption",
                        value: function(e, t) {
                            return Br(this.props, e, t)
                        }
                    }, {
                        key: "formatOptionLabel",
                        value: function(e, t) {
                            if ("function" == typeof this.props.formatOptionLabel) {
                                var n = this.props.inputValue,
                                    r = this.state.selectValue;
                                return this.props.formatOptionLabel(e, {
                                    context: t,
                                    inputValue: n,
                                    selectValue: r
                                })
                            }
                            return this.getOptionLabel(e)
                        }
                    }, {
                        key: "formatGroupLabel",
                        value: function(e) {
                            return this.props.formatGroupLabel(e)
                        }
                    }, {
                        key: "startListeningComposition",
                        value: function() {
                            document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1))
                        }
                    }, {
                        key: "stopListeningComposition",
                        value: function() {
                            document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd))
                        }
                    }, {
                        key: "startListeningToTouch",
                        value: function() {
                            document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1))
                        }
                    }, {
                        key: "stopListeningToTouch",
                        value: function() {
                            document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd))
                        }
                    }, {
                        key: "renderInput",
                        value: function() {
                            var e = this.props,
                                t = e.isDisabled,
                                n = e.isSearchable,
                                r = e.inputId,
                                i = e.inputValue,
                                a = e.tabIndex,
                                o = e.form,
                                s = e.menuIsOpen,
                                l = e.required,
                                c = this.getComponents().Input,
                                u = this.state,
                                d = u.inputIsHidden,
                                p = u.ariaSelection,
                                h = this.commonProps,
                                f = r || this.getElementId("input"),
                                m = Y(Y(Y({
                                    "aria-autocomplete": "list",
                                    "aria-expanded": s,
                                    "aria-haspopup": !0,
                                    "aria-errormessage": this.props["aria-errormessage"],
                                    "aria-invalid": this.props["aria-invalid"],
                                    "aria-label": this.props["aria-label"],
                                    "aria-labelledby": this.props["aria-labelledby"],
                                    "aria-required": l,
                                    role: "combobox"
                                }, s && {
                                    "aria-controls": this.getElementId("listbox"),
                                    "aria-owns": this.getElementId("listbox")
                                }), !n && {
                                    "aria-readonly": !0
                                }), this.hasValue() ? "initial-input-focus" === (null == p ? void 0 : p.action) && {
                                    "aria-describedby": this.getElementId("live-region")
                                } : {
                                    "aria-describedby": this.getElementId("placeholder")
                                });
                            return n ? K.createElement(c, X({}, h, {
                                autoCapitalize: "none",
                                autoComplete: "off",
                                autoCorrect: "off",
                                id: f,
                                innerRef: this.getInputRef,
                                isDisabled: t,
                                isHidden: d,
                                onBlur: this.onInputBlur,
                                onChange: this.handleInputChange,
                                onFocus: this.onInputFocus,
                                spellCheck: "false",
                                tabIndex: a,
                                form: o,
                                type: "text",
                                value: i
                            }, m)) : K.createElement(gr, X({
                                id: f,
                                innerRef: this.getInputRef,
                                onBlur: this.onInputBlur,
                                onChange: Jt,
                                onFocus: this.onInputFocus,
                                disabled: t,
                                tabIndex: a,
                                inputMode: "none",
                                form: o,
                                value: ""
                            }, m))
                        }
                    }, {
                        key: "renderPlaceholderOrValue",
                        value: function() {
                            var e = this,
                                t = this.getComponents(),
                                n = t.MultiValue,
                                r = t.MultiValueContainer,
                                i = t.MultiValueLabel,
                                a = t.MultiValueRemove,
                                o = t.SingleValue,
                                s = t.Placeholder,
                                l = this.commonProps,
                                c = this.props,
                                u = c.controlShouldRenderValue,
                                d = c.isDisabled,
                                p = c.isMulti,
                                h = c.inputValue,
                                f = c.placeholder,
                                m = this.state,
                                g = m.selectValue,
                                v = m.focusedValue,
                                b = m.isFocused;
                            if (!this.hasValue() || !u) return h ? null : K.createElement(s, X({}, l, {
                                key: "placeholder",
                                isDisabled: d,
                                isFocused: b,
                                innerProps: {
                                    id: this.getElementId("placeholder")
                                }
                            }), f);
                            if (p) return g.map((function(t, o) {
                                var s = t === v,
                                    c = "".concat(e.getOptionLabel(t), "-").concat(e.getOptionValue(t));
                                return K.createElement(n, X({}, l, {
                                    components: {
                                        Container: r,
                                        Label: i,
                                        Remove: a
                                    },
                                    isFocused: s,
                                    isDisabled: d,
                                    key: c,
                                    index: o,
                                    removeProps: {
                                        onClick: function() {
                                            return e.removeValue(t)
                                        },
                                        onTouchEnd: function() {
                                            return e.removeValue(t)
                                        },
                                        onMouseDown: function(e) {
                                            e.preventDefault()
                                        }
                                    },
                                    data: t
                                }), e.formatOptionLabel(t, "value"))
                            }));
                            if (h) return null;
                            var y = g[0];
                            return K.createElement(o, X({}, l, {
                                data: y,
                                isDisabled: d
                            }), this.formatOptionLabel(y, "value"))
                        }
                    }, {
                        key: "renderClearIndicator",
                        value: function() {
                            var e = this.getComponents().ClearIndicator,
                                t = this.commonProps,
                                n = this.props,
                                r = n.isDisabled,
                                i = n.isLoading,
                                a = this.state.isFocused;
                            if (!this.isClearable() || !e || r || !this.hasValue() || i) return null;
                            var o = {
                                onMouseDown: this.onClearIndicatorMouseDown,
                                onTouchEnd: this.onClearIndicatorTouchEnd,
                                "aria-hidden": "true"
                            };
                            return K.createElement(e, X({}, t, {
                                innerProps: o,
                                isFocused: a
                            }))
                        }
                    }, {
                        key: "renderLoadingIndicator",
                        value: function() {
                            var e = this.getComponents().LoadingIndicator,
                                t = this.commonProps,
                                n = this.props,
                                r = n.isDisabled,
                                i = n.isLoading,
                                a = this.state.isFocused;
                            return e && i ? K.createElement(e, X({}, t, {
                                innerProps: {
                                    "aria-hidden": "true"
                                },
                                isDisabled: r,
                                isFocused: a
                            })) : null
                        }
                    }, {
                        key: "renderIndicatorSeparator",
                        value: function() {
                            var e = this.getComponents(),
                                t = e.DropdownIndicator,
                                n = e.IndicatorSeparator;
                            if (!t || !n) return null;
                            var r = this.commonProps,
                                i = this.props.isDisabled,
                                a = this.state.isFocused;
                            return K.createElement(n, X({}, r, {
                                isDisabled: i,
                                isFocused: a
                            }))
                        }
                    }, {
                        key: "renderDropdownIndicator",
                        value: function() {
                            var e = this.getComponents().DropdownIndicator;
                            if (!e) return null;
                            var t = this.commonProps,
                                n = this.props.isDisabled,
                                r = this.state.isFocused,
                                i = {
                                    onMouseDown: this.onDropdownIndicatorMouseDown,
                                    onTouchEnd: this.onDropdownIndicatorTouchEnd,
                                    "aria-hidden": "true"
                                };
                            return K.createElement(e, X({}, t, {
                                innerProps: i,
                                isDisabled: n,
                                isFocused: r
                            }))
                        }
                    }, {
                        key: "renderMenu",
                        value: function() {
                            var e = this,
                                t = this.getComponents(),
                                n = t.Group,
                                r = t.GroupHeading,
                                i = t.Menu,
                                a = t.MenuList,
                                o = t.MenuPortal,
                                s = t.LoadingMessage,
                                l = t.NoOptionsMessage,
                                c = t.Option,
                                u = this.commonProps,
                                d = this.state.focusedOption,
                                p = this.props,
                                h = p.captureMenuScroll,
                                f = p.inputValue,
                                m = p.isLoading,
                                g = p.loadingMessage,
                                v = p.minMenuHeight,
                                b = p.maxMenuHeight,
                                y = p.menuIsOpen,
                                _ = p.menuPlacement,
                                C = p.menuPosition,
                                E = p.menuPortalTarget,
                                w = p.menuShouldBlockScroll,
                                x = p.menuShouldScrollIntoView,
                                k = p.noOptionsMessage,
                                S = p.onMenuScrollToTop,
                                M = p.onMenuScrollToBottom;
                            if (!y) return null;
                            var O, z = function(t, n) {
                                var r = t.type,
                                    i = t.data,
                                    a = t.isDisabled,
                                    o = t.isSelected,
                                    s = t.label,
                                    l = t.value,
                                    p = d === i,
                                    h = a ? void 0 : function() {
                                        return e.onOptionHover(i)
                                    },
                                    f = a ? void 0 : function() {
                                        return e.selectOption(i)
                                    },
                                    m = "".concat(e.getElementId("option"), "-").concat(n),
                                    g = {
                                        id: m,
                                        onClick: f,
                                        onMouseMove: h,
                                        onMouseOver: h,
                                        tabIndex: -1
                                    };
                                return K.createElement(c, X({}, u, {
                                    innerProps: g,
                                    data: i,
                                    isDisabled: a,
                                    isSelected: o,
                                    key: m,
                                    label: s,
                                    type: r,
                                    value: l,
                                    isFocused: p,
                                    innerRef: p ? e.getFocusedOptionRef : void 0
                                }), e.formatOptionLabel(t.data, "menu"))
                            };
                            if (this.hasOptions()) O = this.getCategorizedOptions().map((function(t) {
                                if ("group" === t.type) {
                                    var i = t.data,
                                        a = t.options,
                                        o = t.index,
                                        s = "".concat(e.getElementId("group"), "-").concat(o),
                                        l = "".concat(s, "-heading");
                                    return K.createElement(n, X({}, u, {
                                        key: s,
                                        data: i,
                                        options: a,
                                        Heading: r,
                                        headingProps: {
                                            id: l,
                                            data: t.data
                                        },
                                        label: e.formatGroupLabel(t.data)
                                    }), t.options.map((function(e) {
                                        return z(e, "".concat(o, "-").concat(e.index))
                                    })))
                                }
                                if ("option" === t.type) return z(t, "".concat(t.index))
                            }));
                            else if (m) {
                                var L = g({
                                    inputValue: f
                                });
                                if (null === L) return null;
                                O = K.createElement(s, u, L)
                            } else {
                                var T = k({
                                    inputValue: f
                                });
                                if (null === T) return null;
                                O = K.createElement(l, u, T)
                            }
                            var I = {
                                    minMenuHeight: v,
                                    maxMenuHeight: b,
                                    menuPlacement: _,
                                    menuPosition: C,
                                    menuShouldScrollIntoView: x
                                },
                                P = K.createElement(kn, X({}, u, I), (function(t) {
                                    var n = t.ref,
                                        r = t.placerProps,
                                        o = r.placement,
                                        s = r.maxHeight;
                                    return K.createElement(i, X({}, u, I, {
                                        innerRef: n,
                                        innerProps: {
                                            onMouseDown: e.onMenuMouseDown,
                                            onMouseMove: e.onMenuMouseMove,
                                            id: e.getElementId("listbox")
                                        },
                                        isLoading: m,
                                        placement: o
                                    }), K.createElement(Or, {
                                        captureEnabled: h,
                                        onTopArrive: S,
                                        onBottomArrive: M,
                                        lockEnabled: w
                                    }, (function(t) {
                                        return K.createElement(a, X({}, u, {
                                            innerRef: function(n) {
                                                e.getMenuListRef(n), t(n)
                                            },
                                            isLoading: m,
                                            maxHeight: s,
                                            focusedOption: d
                                        }), O)
                                    })))
                                }));
                            return E || "fixed" === C ? K.createElement(o, X({}, u, {
                                appendTo: E,
                                controlElement: this.controlRef,
                                menuPlacement: _,
                                menuPosition: C
                            }), P) : P
                        }
                    }, {
                        key: "renderFormField",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = t.delimiter,
                                r = t.isDisabled,
                                i = t.isMulti,
                                a = t.name,
                                o = t.required,
                                s = this.state.selectValue;
                            if (o && !this.hasValue() && !r) return K.createElement(Lr, {
                                name: a,
                                onFocus: this.onValueInputFocus
                            });
                            if (a && !r) {
                                if (i) {
                                    if (n) {
                                        var l = s.map((function(t) {
                                            return e.getOptionValue(t)
                                        })).join(n);
                                        return K.createElement("input", {
                                            name: a,
                                            type: "hidden",
                                            value: l
                                        })
                                    }
                                    var c = s.length > 0 ? s.map((function(t, n) {
                                        return K.createElement("input", {
                                            key: "i-".concat(n),
                                            name: a,
                                            type: "hidden",
                                            value: e.getOptionValue(t)
                                        })
                                    })) : K.createElement("input", {
                                        name: a,
                                        type: "hidden",
                                        value: ""
                                    });
                                    return K.createElement("div", null, c)
                                }
                                var u = s[0] ? this.getOptionValue(s[0]) : "";
                                return K.createElement("input", {
                                    name: a,
                                    type: "hidden",
                                    value: u
                                })
                            }
                        }
                    }, {
                        key: "renderLiveRegion",
                        value: function() {
                            var e = this.commonProps,
                                t = this.state,
                                n = t.ariaSelection,
                                r = t.focusedOption,
                                i = t.focusedValue,
                                a = t.isFocused,
                                o = t.selectValue,
                                s = this.getFocusableOptions();
                            return K.createElement(ir, X({}, e, {
                                id: this.getElementId("live-region"),
                                ariaSelection: n,
                                focusedOption: r,
                                focusedValue: i,
                                isFocused: a,
                                selectValue: o,
                                focusableOptions: s
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.getComponents(),
                                t = e.Control,
                                n = e.IndicatorsContainer,
                                r = e.SelectContainer,
                                i = e.ValueContainer,
                                a = this.props,
                                o = a.className,
                                s = a.id,
                                l = a.isDisabled,
                                c = a.menuIsOpen,
                                u = this.state.isFocused,
                                d = this.commonProps = this.getCommonProps();
                            return K.createElement(r, X({}, d, {
                                className: o,
                                innerProps: {
                                    id: s,
                                    onKeyDown: this.onKeyDown
                                },
                                isDisabled: l,
                                isFocused: u
                            }), this.renderLiveRegion(), K.createElement(t, X({}, d, {
                                innerRef: this.getControlRef,
                                innerProps: {
                                    onMouseDown: this.onControlMouseDown,
                                    onTouchEnd: this.onControlTouchEnd
                                },
                                isDisabled: l,
                                isFocused: u,
                                menuIsOpen: c
                            }), K.createElement(i, X({}, d, {
                                isDisabled: l
                            }), this.renderPlaceholderOrValue(), this.renderInput()), K.createElement(n, X({}, d, {
                                isDisabled: l
                            }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField())
                        }
                    }], r = [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            var n = t.prevProps,
                                r = t.clearFocusValueOnUpdate,
                                i = t.inputIsHiddenAfterUpdate,
                                a = t.ariaSelection,
                                o = t.isFocused,
                                s = t.prevWasFocused,
                                l = e.options,
                                c = e.value,
                                u = e.menuIsOpen,
                                d = e.inputValue,
                                p = e.isMulti,
                                h = tn(c),
                                f = {};
                            if (n && (c !== n.value || l !== n.options || u !== n.menuIsOpen || d !== n.inputValue)) {
                                var m = u ? function(e, t) {
                                        return Nr(Ar(e, t))
                                    }(e, h) : [],
                                    g = r ? function(e, t) {
                                        var n = e.focusedValue,
                                            r = e.selectValue.indexOf(n);
                                        if (r > -1) {
                                            if (t.indexOf(n) > -1) return n;
                                            if (r < t.length) return t[r]
                                        }
                                        return null
                                    }(t, h) : null,
                                    v = function(e, t) {
                                        var n = e.focusedOption;
                                        return n && t.indexOf(n) > -1 ? n : t[0]
                                    }(t, m);
                                f = {
                                    selectValue: h,
                                    focusedOption: v,
                                    focusedValue: g,
                                    clearFocusValueOnUpdate: !1
                                }
                            }
                            var b = null != i && e !== n ? {
                                    inputIsHidden: i,
                                    inputIsHiddenAfterUpdate: void 0
                                } : {},
                                y = a,
                                _ = o && s;
                            return o && !_ && (y = {
                                value: gn(p, h, h[0] || null),
                                options: h,
                                action: "initial-input-focus"
                            }, _ = !s), "initial-input-focus" === (null == a ? void 0 : a.action) && (y = null), Y(Y(Y({}, f), b), {}, {
                                prevProps: e,
                                ariaSelection: y,
                                prevWasFocused: _
                            })
                        }
                    }], n && qn(t.prototype, n), r && qn(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), a
                }(K.Component);
            Ur.defaultProps = Pr;
            var Zr = (0, K.forwardRef)((function(e, t) {
                    var n = function(e) {
                        var t = e.defaultInputValue,
                            n = void 0 === t ? "" : t,
                            r = e.defaultMenuIsOpen,
                            i = void 0 !== r && r,
                            a = e.defaultValue,
                            o = void 0 === a ? null : a,
                            s = e.inputValue,
                            l = e.menuIsOpen,
                            c = e.onChange,
                            u = e.onInputChange,
                            d = e.onMenuClose,
                            p = e.onMenuOpen,
                            h = e.value,
                            f = Mt(e, Gn),
                            m = St((0, K.useState)(void 0 !== s ? s : n), 2),
                            g = m[0],
                            v = m[1],
                            b = St((0, K.useState)(void 0 !== l ? l : i), 2),
                            y = b[0],
                            _ = b[1],
                            C = St((0, K.useState)(void 0 !== h ? h : o), 2),
                            E = C[0],
                            w = C[1],
                            x = (0, K.useCallback)((function(e, t) {
                                "function" == typeof c && c(e, t), w(e)
                            }), [c]),
                            k = (0, K.useCallback)((function(e, t) {
                                var n;
                                "function" == typeof u && (n = u(e, t)), v(void 0 !== n ? n : e)
                            }), [u]),
                            S = (0, K.useCallback)((function() {
                                "function" == typeof p && p(), _(!0)
                            }), [p]),
                            M = (0, K.useCallback)((function() {
                                "function" == typeof d && d(), _(!1)
                            }), [d]),
                            O = void 0 !== s ? s : g,
                            z = void 0 !== l ? l : y,
                            L = void 0 !== h ? h : E;
                        return Y(Y({}, f), {}, {
                            inputValue: O,
                            menuIsOpen: z,
                            onChange: x,
                            onInputChange: k,
                            onMenuClose: M,
                            onMenuOpen: S,
                            value: L
                        })
                    }(e);
                    return K.createElement(Ur, X({
                        ref: t
                    }, n))
                })),
                Gr = Zr;
            const qr = t => {
                    const {
                        details: {
                            label: n,
                            position: r = "bottom"
                        }
                    } = t;
                    return (0, e.createElement)("div", {
                        className: `zip-ai-sidebar__tooltip zip-ai-sidebar__tooltip-positioned--${r}`
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__tooltip--content"
                    }, n))
                },
                Yr = t => {
                    const {
                        shortcut: {
                            label: n,
                            id: r,
                            icon: i = null,
                            clickEvent: a = null,
                            disabled: o = !1,
                            position: s = "bottom"
                        }
                    } = t, {
                        hoveredButton: l,
                        handleMouseEnter: c,
                        handleMouseLeave: u
                    } = (0, e.useContext)(di);
                    return (0, e.createElement)("button", {
                        className: N(["zip-ai-sidebar__chat-bubble--shortcut", !i && "zip-ai-sidebar__chat-bubble--shortcut-no-icon"]),
                        onClick: a,
                        disabled: o,
                        onMouseEnter: () => c(r),
                        onMouseLeave: u
                    }, i || n, i && r === l && (0, e.createElement)(qr, {
                        details: {
                            label: n,
                            position: s
                        }
                    }))
                },
                Xr = t => {
                    const {
                        filter: {
                            feature: n,
                            possibilityText: r = "",
                            clickEvent: i = null,
                            classNames: a = [],
                            disabled: o = !1
                        }
                    } = t;
                    return (0, e.createElement)("button", {
                        className: N(["zip-ai-sidebar__prompt--button", ...a]),
                        onClick: i,
                        disabled: o
                    }, (0, e.createElement)("span", {
                        className: "zip-ai-sidebar__prompt--heading"
                    }, n), (0, e.createElement)("span", {
                        className: "zip-ai-sidebar__prompt--subheading"
                    }, r))
                };
            var Kr = t => {
                const {
                    filter: {
                        id: n,
                        icon: r = null,
                        feature: i,
                        clickEvent: a = null,
                        disabled: o = !1,
                        options: s = [],
                        position: l = "top"
                    },
                    type: c = "button"
                } = t, {
                    hoveredButton: u,
                    handleMouseEnter: d,
                    handleMouseLeave: p,
                    setHoveredButton: h,
                    currentDropdown: f,
                    setCurrentDropdown: m,
                    setOpenDropdownNode: g
                } = (0, e.useContext)(di), [v, b] = (0, e.useState)(null), y = (0, e.useRef)(null), [_, C] = (0, e.useState)("360px"), E = (0, e.useRef)(null), w = (0, e.useRef)(null), x = () => null, k = function() {
                    let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    const c = "#64748b",
                        k = "#e6e7e9",
                        S = "#f2f5f7",
                        M = {
                            fontFamily: "Inter",
                            fontSize: "0.75rem",
                            fontWeight: "400",
                            lineHeight: "1rem"
                        },
                        O = {
                            container: e => ({ ...e,
                                maxWidth: "24px",
                                zIndex: 99999
                            }),
                            control: (e, t) => {
                                let {
                                    isDisabled: n
                                } = t;
                                return { ...e,
                                    ...M,
                                    minHeight: "24px",
                                    height: "24px",
                                    width: "24px",
                                    cursor: "pointer",
                                    opacity: n ? "0.5" : "1",
                                    backgroundColor: "transparent",
                                    color: n ? k : c,
                                    border: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    boxShadow: "none",
                                    zIndex: 99999
                                }
                            },
                            menu: e => ({ ...e,
                                right: 0,
                                width: "auto",
                                minWidth: "150px",
                                border: `1px solid ${k}`,
                                borderRadius: "6px",
                                boxShadow: "0 4px 8px -2px rgba( 16, 24, 40, 0.1 ), 0 2px 4px -2px rgba( 16, 24, 40, 0.06 )",
                                zIndex: 99999
                            }),
                            menuList: e => ({ ...e,
                                maxHeight: _
                            }),
                            valueContainer: e => ({ ...e,
                                height: "24px",
                                padding: 0,
                                display: "flex",
                                overflow: "hidden"
                            }),
                            input: e => ({ ...e,
                                height: "24px",
                                padding: 0,
                                margin: 0
                            }),
                            singleValue: e => ({ ...e,
                                maxWidth: 0
                            }),
                            dropdownIndicator: (e, t) => {
                                let {
                                    isDisabled: n
                                } = t;
                                return { ...e,
                                    padding: "4px",
                                    opacity: "1 !important",
                                    color: n ? k : c,
                                    "&:hover": {
                                        color: n ? k : c,
                                        backgroundColor: S
                                    },
                                    "&:active": {
                                        color: n ? k : c,
                                        backgroundColor: S
                                    }
                                }
                            },
                            indicatorsContainer: e => ({ ...e,
                                color: c,
                                height: "24px"
                            }),
                            option: e => ({ ...e,
                                ...M
                            })
                        };
                    return (0, e.createElement)("div", {
                        className: N(["zip-ai-sidebar__chat-bubble--interaction-dropdown", "zip-ai-sidebar__chat-bubble--shortcut", o && "zip-ai-sidebar__chat-bubble--interaction-dropdown-disabled"]),
                        onMouseEnter: () => {
                            n !== f && d(n)
                        },
                        onMouseLeave: () => n === f ? null : p(),
                        ref: E
                    }, (0, e.createElement)(Gr, {
                        placeholder: "",
                        options: s,
                        value: v,
                        onChange: e => (e => {
                            a(e), b(null)
                        })(e),
                        onInputChange: e => (e => {
                            if (!y ? .current) return;
                            const t = y.current,
                                n = t.children[0],
                                r = t.children[t.children.length - 1];
                            e ? (n.innerHTML = e, r.innerHTML = "") : (n.innerHTML = "", r.innerHTML = "Search…")
                        })(e),
                        onMenuOpen: () => (() => {
                            if (!E ? .current) return;
                            w ? .current && g(w.current);
                            const e = E.current.parentNode.getBoundingClientRect(),
                                r = window.innerHeight || document.documentElement.clientHeight;
                            if (e.bottom + 360 > r) {
                                const n = t ? 0 : 28;
                                C(`${r-e.bottom-80+n}px`)
                            } else C("360px");
                            m(n)
                        })(),
                        onMenuClose: () => {
                            m(null), h(null)
                        },
                        isDisabled: o,
                        isSearchable: t,
                        isMulti: !1,
                        menuPosition: "fixed",
                        menuPlacement: "auto",
                        components: {
                            ClearIndicator: x,
                            Control: t => Zn.Control && (0, e.createElement)(Zn.Control, t),
                            DropdownIndicator: t => {
                                let {
                                    children: n,
                                    ...i
                                } = t;
                                return Zn.DropdownIndicator && (0, e.createElement)(Zn.DropdownIndicator, i, r, n)
                            },
                            IndicatorSeparator: x,
                            Menu: n => {
                                let {
                                    children: r,
                                    ...a
                                } = n;
                                return Zn.Menu && (0, e.createElement)(Zn.Menu, a, (0, e.createElement)("div", {
                                    className: "zip-ai-sidebar__chat-bubble--interaction-dropdown-title"
                                }, i), t && (0, e.createElement)(e.Fragment, null, (0, e.createElement)("div", {
                                    className: "zip-ai-sidebar__chat-bubble--interaction-dropdown-search",
                                    ref: y
                                }, (0, e.createElement)("span", {
                                    className: "zip-ai-sidebar__chat-bubble--interaction-dropdown-search-value"
                                }), (0, e.createElement)("span", {
                                    className: "zip-ai-sidebar__chat-bubble--interaction-dropdown-search-cursor"
                                }), (0, e.createElement)("span", {
                                    className: "zip-ai-sidebar__chat-bubble--interaction-dropdown-search-placeholder"
                                }, "Search…"))), r)
                            }
                        },
                        styles: O,
                        classNamePrefix: "zip-ai-select",
                        ref: w
                    }), !o && n === u && n !== f && (0, e.createElement)(qr, {
                        details: {
                            label: i,
                            position: l
                        }
                    }))
                };
                switch (c) {
                    case "select":
                        return k();
                    case "select-without-search":
                        return k(!1);
                    default:
                        return (0, e.createElement)(Yr, {
                            shortcut: {
                                label: i,
                                id: n,
                                icon: r,
                                clickEvent: a,
                                disabled: o,
                                position: l
                            }
                        })
                }
            };
            const Jr = {
                    color: "#64748b"
                },
                Qr = (e, t, n) => {
                    t(e), n ? .current ? .focus()
                },
                ei = [{
                    value: "Arabic",
                    label: (0, j.__)("Arabic", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Azerbaijani",
                    label: (0, j.__)("Azerbaijani", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Bengali",
                    label: (0, j.__)("Bengali", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Belarusian",
                    label: (0, j.__)("Belarusian", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Bulgarian",
                    label: (0, j.__)("Bulgarian", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Chinese",
                    label: (0, j.__)("Chinese (Simplified)", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Croatian",
                    label: (0, j.__)("Croatian", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Czech",
                    label: (0, j.__)("Czech", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Danish",
                    label: (0, j.__)("Danish", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Dutch",
                    label: (0, j.__)("Dutch", "ultimate-addons-for-gutenberg")
                }, {
                    value: "English",
                    label: (0, j.__)("English", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Estonian",
                    label: (0, j.__)("Estonian", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Finnish",
                    label: (0, j.__)("Finnish", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Filipino",
                    label: (0, j.__)("Filipino", "ultimate-addons-for-gutenberg")
                }, {
                    value: "French",
                    label: (0, j.__)("French", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Georgian",
                    label: (0, j.__)("Georgian", "ultimate-addons-for-gutenberg")
                }, {
                    value: "German",
                    label: (0, j.__)("German", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Greek",
                    label: (0, j.__)("Greek", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Hebrew",
                    label: (0, j.__)("Hebrew", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Hindi",
                    label: (0, j.__)("Hindi", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Hungarian",
                    label: (0, j.__)("Hungarian", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Indonesian",
                    label: (0, j.__)("Indonesian", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Italian",
                    label: (0, j.__)("Italian", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Japanese",
                    label: (0, j.__)("Japanese", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Kazakh",
                    label: (0, j.__)("Kazakh", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Korean",
                    label: (0, j.__)("Korean", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Latvian",
                    label: (0, j.__)("Latvian", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Lithuanian",
                    label: (0, j.__)("Lithuanian", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Macedonian",
                    label: (0, j.__)("Macedonian", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Malay",
                    label: (0, j.__)("Malay", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Norwegian",
                    label: (0, j.__)("Norwegian", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Polish",
                    label: (0, j.__)("Polish", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Portuguese",
                    label: (0, j.__)("Portuguese", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Romanian",
                    label: (0, j.__)("Romanian", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Russian",
                    label: (0, j.__)("Russian", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Serbian",
                    label: (0, j.__)("Serbian", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Slovak",
                    label: (0, j.__)("Slovak", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Slovenian",
                    label: (0, j.__)("Slovenian", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Spanish",
                    label: (0, j.__)("Spanish", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Swahili",
                    label: (0, j.__)("Swahili", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Swedish",
                    label: (0, j.__)("Swedish", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Thai",
                    label: (0, j.__)("Thai", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Turkish",
                    label: (0, j.__)("Turkish", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Ukrainian",
                    label: (0, j.__)("Ukrainian", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Urdu",
                    label: (0, j.__)("Urdu", "ultimate-addons-for-gutenberg")
                }, {
                    value: "Vietnamese",
                    label: (0, j.__)("Vietnamese", "ultimate-addons-for-gutenberg")
                }],
                ti = [{
                    value: "friendly",
                    label: (0, j.__)("Friendly", "ultimate-addons-for-gutenberg")
                }, {
                    value: "formal",
                    label: (0, j.__)("Formal", "ultimate-addons-for-gutenberg")
                }, {
                    value: "casual",
                    label: (0, j.__)("Casual", "ultimate-addons-for-gutenberg")
                }, {
                    value: "professional",
                    label: (0, j.__)("Professional", "ultimate-addons-for-gutenberg")
                }, {
                    value: "informative",
                    label: (0, j.__)("Informative", "ultimate-addons-for-gutenberg")
                }, {
                    value: "playful",
                    label: (0, j.__)("Playful", "ultimate-addons-for-gutenberg")
                }, {
                    value: "serious",
                    label: (0, j.__)("Serious", "ultimate-addons-for-gutenberg")
                }, {
                    value: "humorous",
                    label: (0, j.__)("Humorous", "ultimate-addons-for-gutenberg")
                }, {
                    value: "polite",
                    label: (0, j.__)("Polite", "ultimate-addons-for-gutenberg")
                }, {
                    value: "emotional",
                    label: (0, j.__)("Emotional", "ultimate-addons-for-gutenberg")
                }],
                ni = e => {
                    e({
                        textCommand: "Fix the grammar and any spelling mistakes in the previous message.",
                        oneClickCommand: (0, j.__)("Fix any grammatical mistakes.", "ultimate-addons-for-gutenberg"),
                        useSystemMessage: !1
                    })
                },
                ri = e => {
                    e({
                        textCommand: "Rewrite it by making it 5 to 10 words longer - and keep it in the same language as the last message.",
                        oneClickCommand: (0, j.__)("Make it longer.", "ultimate-addons-for-gutenberg"),
                        useSystemMessage: !1
                    })
                },
                ii = e => {
                    e({
                        textCommand: "Make it shorter - and keep it in the same language as the last message.",
                        oneClickCommand: (0, j.__)("Make it shorter.", "ultimate-addons-for-gutenberg"),
                        useSystemMessage: !1
                    })
                },
                ai = (e, t) => {
                    t({
                        textCommand: `Rewrite in a ${e.value} tone - keep it in the same language, and keep it the exact same length.`
                            /* translators: %s: tone name */
                            ,
                        oneClickCommand: (0, j.sprintf)((0, j.__)("Change tone to %s.", "ultimate-addons-for-gutenberg"), e.label),
                        useSystemMessage: !1
                    })
                },
                oi = e => {
                    e({
                        textCommand: "Rewrite the text to convey the same meaning in different words, maintaining the original language and similar length.",
                        oneClickCommand: (0, j.__)("Rephrase", "ultimate-addons-for-gutenberg"),
                        useSystemMessage: !1
                    })
                },
                si = t => {
                    const {
                        currentText: n,
                        generationRef: r,
                        setUserInput: i,
                        refreshFilters: a,
                        setRefreshFilters: o,
                        generating: s,
                        setGenerating: l,
                        setAiResponseError: c,
                        setValidForSaving: u
                    } = t, {
                        chatLog: d,
                        setChatLog: p
                    } = (0, e.useContext)(di), h = ((e, t, n) => "editing_product" === zip_ai_react ? .current_view ? (e => ({
                        title: (0, j.__)("Create with AI", "ultimate-addons-for-gutenberg"),
                        filters: [{
                            feature: (0, j.__)("Write a short description", "ultimate-addons-for-gutenberg"),
                            possibilityText: (0, j.__)("for this product", "ultimate-addons-for-gutenberg"),
                            clickEvent: () => {
                                e({
                                    textCommand: "Write a one-line description for this product. Don't add any links.",
                                    oneClickCommand: (0, j.__)("Write a short description.", "ultimate-addons-for-gutenberg"),
                                    useSystemMessage: !0
                                })
                            }
                        }, {
                            feature: (0, j.__)("Write a long description", "ultimate-addons-for-gutenberg"),
                            possibilityText: (0, j.__)("for this product", "ultimate-addons-for-gutenberg"),
                            clickEvent: () => {
                                e({
                                    textCommand: "Write a one-paragraph description for this product. Don't add any links.",
                                    oneClickCommand: (0, j.__)("Write a long description.", "ultimate-addons-for-gutenberg"),
                                    useSystemMessage: !0
                                })
                            }
                        }]
                    }))(n) : ((e, t) => ({
                        title: (0, j.__)("Draft with AI", "ultimate-addons-for-gutenberg"),
                        filters: [{
                            feature: (0, j.__)("Give me an idea", "ultimate-addons-for-gutenberg"),
                            possibilityText: (0, j.__)("for an attractive heading about", "ultimate-addons-for-gutenberg"),
                            clickEvent: () => {
                                Qr((0, j.__)("Give me an idea for ", "ultimate-addons-for-gutenberg"), e, t)
                            }
                        }, {
                            feature: (0, j.__)("Show me a code snippet", "ultimate-addons-for-gutenberg"),
                            possibilityText: (0, j.__)("of blur-on-hover CSS", "ultimate-addons-for-gutenberg"),
                            clickEvent: () => {
                                Qr((0, j.__)("Show me a code snippet of ", "ultimate-addons-for-gutenberg"), e, t)
                            }
                        }, {
                            feature: (0, j.__)("Write me a description", "ultimate-addons-for-gutenberg"),
                            possibilityText: (0, j.__)("about a product for", "ultimate-addons-for-gutenberg"),
                            clickEvent: () => {
                                Qr((0, j.__)("Write me a description about ", "ultimate-addons-for-gutenberg"), e, t)
                            }
                        }]
                    }))(e, t))(i, r, (e => {
                        let {
                            textCommand: t,
                            oneClickCommand: r,
                            useSystemMessage: a
                        } = e;
                        const s = hi(d, n);
                        bi({
                            textContent: s,
                            textCommand: t,
                            setGenerating: l,
                            setText: i,
                            setRefreshFilters: o,
                            setAiResponseError: c,
                            chatLog: d,
                            setChatLog: p,
                            oneClickCommand: r,
                            setValidForSaving: u,
                            useSystemMessage: a
                        })
                    })), [f, m] = (0, e.useState)(h), g = navigator ? .clipboard && {
                        feature: (0, j.__)("Paste from clipboard", "ultimate-addons-for-gutenberg"),
                        possibilityText: (0, j.__)("and chat from there", "ultimate-addons-for-gutenberg"),
                        clickEvent: async () => {
                            l(!0);
                            const e = await navigator.clipboard.readText().then((e => e)).catch((() => ""));
                            e && (d.push({
                                id: 0,
                                from: "content",
                                message: e
                            }), p([...d]), o(!0)), l(!1)
                        }
                    };
                    return (0, e.useEffect)((() => {
                        a && (o(!1), m(h))
                    }), [a]), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__prompt"
                    }, f.filters.map(((t, n) => (0, e.createElement)(Xr, {
                        key: n,
                        filter: { ...t,
                            disabled: s
                        }
                    }))), g && (0, e.createElement)(Xr, {
                        filter: { ...g,
                            disabled: s
                        }
                    }))
                };
            var li = t => {
                    const {
                        bubbleType: n,
                        currentText: r,
                        setUserInput: i,
                        refreshFilters: a,
                        setRefreshFilters: o,
                        generating: s,
                        setGenerating: l,
                        setAiResponseError: c,
                        setValidForSaving: u
                    } = t, {
                        chatLog: d,
                        setChatLog: p,
                        editMode: h
                    } = (0, e.useContext)(di);
                    let f;
                    f = "content" === n ? "bottom" : "top";
                    const m = e => {
                            let {
                                textCommand: t,
                                oneClickCommand: n,
                                useSystemMessage: a
                            } = e;
                            const s = hi(d, r);
                            bi({
                                textContent: s,
                                textCommand: t,
                                setGenerating: l,
                                setText: i,
                                setRefreshFilters: o,
                                setAiResponseError: c,
                                chatLog: d,
                                setChatLog: p,
                                oneClickCommand: n,
                                setValidForSaving: u,
                                useSystemMessage: a
                            })
                        },
                        g = (e => ({
                            filters: [{
                                icon: E(Jr),
                                feature: (0, j.__)("Fix Grammar", "ultimate-addons-for-gutenberg"),
                                clickEvent: () => ni(e)
                            }, {
                                icon: L({
                                    width: 14,
                                    height: 14,
                                    ...Jr
                                }),
                                feature: (0, j.__)("Make Longer", "ultimate-addons-for-gutenberg"),
                                clickEvent: () => ri(e)
                            }, {
                                icon: T(Jr),
                                feature: (0, j.__)("Make Shorter", "ultimate-addons-for-gutenberg"),
                                clickEvent: () => ii(e)
                            }, {
                                icon: O(Jr),
                                feature: (0, j.__)("Rephrase", "ultimate-addons-for-gutenberg"),
                                clickEvent: () => oi(e)
                            }]
                        }))(m),
                        v = (e => ({
                            filters: [{
                                icon: R(),
                                feature: (0, j.__)("Change Tone", "ultimate-addons-for-gutenberg"),
                                options: ti,
                                clickEvent: t => ai(t, e)
                            }, {
                                icon: A(),
                                feature: (0, j.__)("Translate", "ultimate-addons-for-gutenberg"),
                                options: ei,
                                clickEvent: t => ((e, t) => {
                                    t({
                                        textCommand: `Translate to ${e.value}.`
                                            /* translators: %s: language name */
                                            ,
                                        oneClickCommand: (0, j.sprintf)((0, j.__)("Translate to %s.", "ultimate-addons-for-gutenberg"), e.label),
                                        useSystemMessage: !1
                                    })
                                })(t, e)
                            }]
                        }))(m),
                        [b, y] = (0, e.useState)(g),
                        [_, C] = (0, e.useState)(v);
                    return (0, e.useEffect)((() => {
                        a && (o(!1), y(g), C(v))
                    }), [a]), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--interaction"
                    }, b.filters.map(((t, n) => (0, e.createElement)(Kr, {
                        key: n,
                        filter: { ...t,
                            id: `ai-message-filter-${n+1}`,
                            disabled: s || h ? .enabled,
                            position: f
                        }
                    }))), _ ? .filters ? .length > 0 && (0, e.createElement)(e.Fragment, null, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--interaction-divider"
                    }), _.filters.map(((t, n) => {
                        let r;
                        switch (t.feature) {
                            case "Rephrase":
                                r = "button";
                                break;
                            case "Change Tone":
                                r = "select-without-search";
                                break;
                            default:
                                r = "select"
                        }
                        return (0, e.createElement)(Kr, {
                            type: r,
                            key: n,
                            filter: { ...t,
                                id: `ai-message-dropdown-${n+1}`,
                                disabled: s || h ? .enabled,
                                position: f
                            }
                        })
                    }))))
                },
                ci = n(426),
                ui = ci.default || ci;
            const di = (0, e.createContext)({
                    chatLog: [],
                    setChatLog: null,
                    editMode: {
                        enabled: !1,
                        value: "",
                        id: -1
                    },
                    setEditMode: null,
                    isOpen: !1,
                    setIsOpen: null,
                    isRichText: !1,
                    updateContent: null,
                    currentText: "",
                    hoveredButton: null,
                    setHoveredButton: null,
                    handleMouseEnter: null,
                    handleMouseLeave: null,
                    currentDropdown: null,
                    setCurrentDropdown: null,
                    footerRefHeight: 0,
                    setFooterRefHeight: null,
                    scrollButtonRef: null,
                    openedDropdownNode: null,
                    setOpenDropdownNode: null
                }),
                pi = (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-loader"
                }, (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-loader--dot dot-1"
                }), (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-loader--dot dot-2"
                }), (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-loader--dot dot-3"
                })),
                hi = (e, t) => e ? .filter((e => "ai" === e.from || "content" === e.from)) ? .pop() ? .message || t,
                fi = (e, t, n) => {
                    let r;
                    switch (t) {
                        case "progress":
                            r = e ? .progress;
                            break;
                        case "success":
                            r = e ? .success, setTimeout((() => {
                                n("default")
                            }), 750);
                            break;
                        default:
                            r = e.default
                    }
                    return r
                },
                mi = t => {
                    const {
                        message: n
                    } = t, [r, i] = (0, e.useState)("default");
                    if (!n) return null;
                    const a = n.split("\n"),
                        o = a.shift(),
                        s = a.join("\n").trim(),
                        l = {
                            default: x(),
                            progress: w(),
                            success: C()
                        };
                    return (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--code-block"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--code-block-title"
                    }, o, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--code-block-actions"
                    }, (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__chat-bubble--code-block-button",
                        onClick: async () => {
                            try {
                                i("progress"), await V(s), i("success")
                            } catch (e) {
                                console.error(e), i("default")
                            }
                        }
                    }, fi(l, r, i)))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--code-block-content"
                    }, (0, e.createElement)("code", null, s)))
                },
                gi = e => {
                    const t = e => `${zip_ai_react.site_url}${e.substring(e.indexOf("example.com")+11)}`,
                        n = (e.match(/example\.com/g) || []).length;
                    let r = 0;
                    for (; r < n;) e = e.replace(/(https?:\/\/)?(www\.)?example\.com\/.*/g, ((e, n) => t(e))), r++;
                    return e
                };
            var vi = t => {
                const {
                    currentText: n,
                    chatBubble: r,
                    updateContent: i,
                    closeModal: a,
                    generating: o,
                    setGenerating: s,
                    regeneratingId: l,
                    setRegeneratingId: u,
                    aiResponseError: p,
                    setAiResponseError: h,
                    userInput: f,
                    setUserInput: g = null,
                    refreshFilters: b,
                    setRefreshFilters: _ = null,
                    editCheck: E = null,
                    setEditCheck: M = null,
                    setValidForSaving: O = null
                } = t, {
                    chatLog: L,
                    setChatLog: T,
                    editMode: R,
                    setEditMode: A,
                    setHoveredButton: H
                } = (0, e.useContext)(di), [D, F] = (0, e.useState)(0), [B, W] = (0, e.useState)("default"), $ = (0, e.useRef)(null), U = r ? .variations ? .length && r.variations.length > 1;
                let Z;
                (0, e.useEffect)((() => {
                    if (!$ ? .current) return;
                    if (!R.value) return void($.current.style.height = "");
                    $.current.style.height = "0";
                    const e = $.current.scrollHeight,
                        t = Math.ceil(e / 20),
                        n = Math.max(1, Math.min(t, 10));
                    $.current.style.height = 20 * n + "px"
                }), [R]), (0, e.useEffect)((() => {
                    !l && "ai" === r ? .from && U && F(r.variations.length - 1)
                }), [l]), (0, e.useEffect)((() => {
                    "ai" === r ? .from && r ? .id && U && (L[r.id].message = r.variations[D], T([...L]))
                }), [D]), (0, e.useEffect)((() => {
                    "ai" === r ? .from && r ? .variations && r ? .id && r.id !== L ? .length - 1 && (L[r.id] && (L[r.id].variations = []), T([...L]))
                }), [L ? .length]);
                let G = r ? .action;
                const q = !p && r ? .id === L ? .length - 1;
                switch (r ? .from) {
                    case "user":
                        Z = E ? void 0 : [{
                            label: (0, j.__)("Edit Message", "ultimate-addons-for-gutenberg"),
                            icon: S(),
                            execute: () => {
                                null !== M && (M(!0), H(null)), R.id = r.id, R.enabled = !0, R.value = r ? .message, A({ ...R
                                })
                            }
                        }];
                        break;
                    case "ai":
                        if (!r ? .variations ? .length && r ? .message && q && (r.variations = [r ? .message]), Z = [], G = {
                                execute: async () => {
                                    if (null !== i) i(gi(r ? .message));
                                    else try {
                                        await V(gi(r ? .message))
                                    } catch {}
                                    a()
                                },
                                label: null !== i ? (0, j.__)("Replace Richtext", "ultimate-addons-for-gutenberg") : (0, j.__)("Copy & Close", "ultimate-addons-for-gutenberg"),
                                icon: null !== i ? I() : k()
                            }, Z.push({
                                label: (0, j.__)("Copy", "ultimate-addons-for-gutenberg"),
                                multiIcons: {
                                    default: x(),
                                    progress: w(),
                                    success: C()
                                },
                                execute: async () => {
                                    try {
                                        W("progress"), await V(r ? .message), W("success")
                                    } catch (e) {
                                        console.error(e), W("default")
                                    }
                                }
                            }), !q || !r ? .variations ? .length) break;
                        Z.push({
                            label: (0, j.__)("Regenerate", "ultimate-addons-for-gutenberg"),
                            icon: z(),
                            execute: () => {
                                yi({
                                    chatBubble: r,
                                    regenerationCommand: "Rephrase and change the last assistant message, ensuring that it abides by the last user command.",
                                    setGenerating: s,
                                    setRegeneratingId: u,
                                    setAiResponseError: h,
                                    chatLog: L,
                                    setChatLog: T
                                })
                            }
                        })
                }
                const Y = r.id === l,
                    X = "error" !== r ? .type && (Y || R ? .enabled),
                    K = () => (0, e.createElement)(e.Fragment, null, "user" === r ? .from && R ? .enabled && R ? .id === r.id ? (() => {
                        const t = () => {
                                if (null === g || null === _) return A({
                                    enabled: !1,
                                    value: r ? .message,
                                    id: -1
                                }), void(null !== M && M(!1));
                                const e = 0 === R.id,
                                    t = e ? void 0 : R.value,
                                    n = e ? R.value : L[R.id - 1] ? .message || "",
                                    i = L.slice(0, R.id);
                                bi({
                                    textContent: n,
                                    textCommand: t,
                                    setGenerating: s,
                                    setText: g,
                                    setRefreshFilters: _,
                                    setAiResponseError: h,
                                    chatLog: i,
                                    fallbackChatlog: L,
                                    setChatLog: T
                                }), R.enabled = !1, R.id = -1, A({ ...R
                                }), null !== M && M(!1)
                            },
                            n = e => "" === e ? .value ? .trim();
                        return (0, e.createElement)("div", {
                            className: "zip-ai-sidebar__chat-editor"
                        }, (0, e.createElement)("textarea", {
                            className: N(["zip-ai-sidebar__chat-editor--input"]),
                            value: R.value,
                            ref: $,
                            autoFocus: !0,
                            onChange: e => {
                                R.value = e.target.value, A({ ...R
                                })
                            },
                            onKeyDown: e => {
                                "Enter" !== e.key || e.shiftKey || n(e.target) || (R.value = e.target.value, A({ ...R
                                }), t())
                            }
                        }), (0, e.createElement)("div", {
                            className: "zip-ai-sidebar__chat-editor--footer"
                        }, (0, e.createElement)("div", {
                            className: "zip-ai-sidebar__chat-editor--info"
                        }, function() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return (0, e.createElement)("svg", {
                                width: c,
                                height: c,
                                viewBox: "0 0 14 14",
                                fill: m,
                                ...t
                            }, (0, e.createElement)("path", {
                                d: "M12.25 3.5H1.75M4.08333 7H1.75M4.08333 10.5H1.75M7 10.5C7.36729 10.9897 7.87937 11.3515 8.46368 11.534C9.04799 11.7165 9.67492 11.7106 10.2557 11.517C10.8364 11.3234 11.3415 10.952 11.6995 10.4554C12.0574 9.9588 12.25 9.36216 12.25 8.75C12.25 8.05381 11.9734 7.38613 11.4812 6.89385C10.9889 6.40156 10.3212 6.125 9.625 6.125C8.84917 6.125 8.14333 6.44 7.63583 6.9475L6.41667 8.16667M6.41667 8.16667V5.83333M6.41667 8.16667H8.75",
                                ...v,
                                strokeWidth: d,
                                ...n
                            }))
                        }({
                            width: 14,
                            height: 14
                        }), (0, j.__)("Note: All subsequent messages will be deleted after you update.", "ultimate-addons-for-gutenberg")), (0, e.createElement)("div", {
                            className: "zip-ai-sidebar__chat-editor--actions"
                        }, (0, e.createElement)("button", {
                            onClick: () => {
                                A({
                                    enabled: !1,
                                    value: r ? .message,
                                    id: -1
                                }), M(!1)
                            }
                        }, (0, j.__)("Cancel", "ultimate-addons-for-gutenberg")), (0, e.createElement)("button", {
                            className: "zip-ai-sidebar__chat-editor--action-primary",
                            onClick: () => {
                                t()
                            },
                            disabled: n(R)
                        }, (0, j.__)("Update", "ultimate-addons-for-gutenberg")))))
                    })() : (0, e.createElement)(e.Fragment, null, q && o && !l || ["loader", "regeneration"].includes(r ? .type) && Y ? (0, e.createElement)(e.Fragment, null, pi) : (0, e.createElement)("p", {
                        className: "zip-ai-sidebar__chat-bubble--message"
                    }, "ai" === r ? .from ? ((t, n, r, i) => {
                        if (!t ? .message) {
                            const e = r;
                            return t.id === e[e.length - 1].id && e.pop(), "user" === e[e.length - 1] ? .from && e.pop(), i([...e]), n((0, j.__)("It looks like I've encountered an error…", "ultimate-addons-for-gutenberg"))
                        }
                        const a = t => {
                                if (!t.includes("`")) return ui(o(t));
                                const n = [];
                                return t.split("`").forEach(((r, i) => {
                                    0 == i % 2 ? n.push(ui(o(t))) : n.push((0, e.createElement)("span", {
                                        className: "zip-ai-sidebar__chat-bubble--code"
                                    }, r))
                                })), n
                            },
                            o = e => (e = (e = (e = (e = (e = (e = (e = e.replaceAll(/^(#{1,6})\s+(.+)$/gm, ((e, t, n) => ((e, t, n) => `<strong>${n}</strong>`)(0, 0, n)))).replaceAll(/(\*\*|\_)([^]*?)\1/g, "<strong>$2</strong>")).replaceAll(/~~([^]*?)~~/g, "<del>$1</del>")).replaceAll(/(\*)([^]*?)(\*)/g, "<em>$2</em>")).replaceAll(/^>\s?(.*)$/gm, "<blockquote>$1</blockquote>")).replaceAll(/`{1,2}([^`]*)`{1,2}/gm, '<span class="zip-ai-sidebar__chat-bubble--code-inline"><code>$1</code></span>')).replaceAll(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank">$1</a>'), gi(e)),
                            s = t.message.split("```");
                        if (1 === s.length) return a(t.message);
                        const l = [];
                        return s.forEach(((t, n) => {
                            0 == n % 2 && l.push(a(t)), 1 == n % 2 && l.push((0, e.createElement)(mi, {
                                message: t
                            }))
                        })), l
                    })(r, h, L, T) : r ? .message), "loader" !== r ? .type && G && (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--footer"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--wrapper"
                    }, (0, e.createElement)("div", {
                        className: N(["zip-ai-sidebar__chat-bubble--interaction"])
                    }, (0, e.createElement)(Yr, {
                        shortcut: {
                            label: G ? .label || (0, j.__)("Click Here", "ultimate-addons-for-gutenberg"),
                            id: `ai-message-${r.id}-main-interaction`,
                            icon: G ? .icon,
                            clickEvent: () => {
                                G ? .execute()
                            },
                            disabled: X,
                            position: "top"
                        }
                    }), Z && (0, e.createElement)(e.Fragment, null, Z.map(((t, n) => (0, e.createElement)(Yr, {
                        key: n,
                        shortcut: {
                            label: t ? .label || (0, j.__)("Click Here", "ultimate-addons-for-gutenberg"),
                            id: `ai-message-${r.id}-interaction-${n+1}`,
                            icon: "ai" === r ? .from && t ? .multiIcons ? fi(t.multiIcons, B, W) : t ? .icon,
                            clickEvent: () => {
                                t ? .execute()
                            },
                            disabled: X,
                            position: "top"
                        }
                    })))), q && U ? (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--pagination"
                    }, (0, e.createElement)("button", {
                        onClick: () => {
                            F(D - 1)
                        },
                        disabled: Y || 0 === D
                    }, P().left), (0, e.createElement)("span", {
                        style: {
                            opacity: Y ? .25 : 1
                        }
                    }, (0, j.sprintf)(
                        // translators: %1$d is the current page, %2$d is the total number of pages.
                        (0, j.__)("%1$d/%2$d", "ultimate-addons-for-gutenberg"), D + 1, r.variations.length)), (0, e.createElement)("button", {
                        onClick: () => {
                            F(D + 1)
                        },
                        disabled: Y || D === r.variations.length - 1
                    }, P().right)) : (0, e.createElement)(e.Fragment, null)), q && "ai" === r ? .from && (0, e.createElement)(li, {
                        bubbleType: r.from,
                        currentText: n,
                        userInput: f,
                        setUserInput: g,
                        refreshFilters: b,
                        setRefreshFilters: _,
                        generating: o,
                        setGenerating: s,
                        setAiResponseError: h,
                        setValidForSaving: O
                    }))), "content" === r ? .from && q && (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--slidein-actions"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-bubble--wrapper"
                    }, (0, e.createElement)(li, {
                        bubbleType: r.from,
                        currentText: n,
                        userInput: f,
                        setUserInput: g,
                        refreshFilters: b,
                        setRefreshFilters: _,
                        generating: o,
                        setGenerating: s,
                        setAiResponseError: h,
                        setValidForSaving: O
                    })))), "user" === r ? .from && Z && (0, e.createElement)("div", {
                        className: N(["zip-ai-sidebar__chat-bubble--interaction", "zip-ai-sidebar__chat-bubble--interaction-for-user", "zip-ai-sidebar__chat-bubble--interaction-on-hover"])
                    }, Z.map(((t, n) => {
                        var i;
                        return (0, e.createElement)(Yr, {
                            key: n,
                            shortcut: {
                                label: t ? .label || (0, j.__)("Click Here", "ultimate-addons-for-gutenberg"),
                                id: `user-message-interaction-${n+1}`,
                                icon: null !== (i = "user" === r ? .from && t ? .multiIcons) && void 0 !== i ? i : t ? .icon,
                                clickEvent: () => {
                                    t ? .execute()
                                },
                                position: "bottom"
                            }
                        })
                    })))),
                    J = Array.isArray(r ? .additionalClasses) ? [...r.additionalClasses] : [];
                return (0, e.createElement)(e.Fragment, null, (0, e.createElement)("div", {
                    className: N(["zip-ai-sidebar__chat-bubble", r ? .from && `zip-ai-sidebar__chat-bubble--from-${(e=>{switch(e){case"user":return"human";case"content":return"content";case"ai":return"assistant";default:return"unknown"}})(r.from)}`, r ? .type && `zip-ai-sidebar__chat-bubble--type-${r.type}`, r ? .icon && "zip-ai-sidebar__chat-bubble--has-icon", ...J])
                }, r ? .icon ? (0, e.createElement)(e.Fragment, null, (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-bubble--icon-wrapper"
                }, "assistant" === r.icon ? (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-bubble--icon"
                }, y({
                    width: 16,
                    height: 16,
                    color: "#fff"
                })) : null), (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__chat-bubble--icon-content"
                }, K())) : K()))
            };
            const bi = e => {
                    const {
                        startingText: t = "",
                        textContent: n,
                        textCommand: r,
                        setGenerating: i,
                        setText: a,
                        setRefreshFilters: o,
                        setAiResponseError: s,
                        chatLog: l,
                        setChatLog: c,
                        fallbackChatlog: u = null,
                        oneClickCommand: d = null,
                        setValidForSaving: p = null,
                        useSystemMessage: h = !0
                    } = e, f = u || l || [];
                    let m = l ? .length ? l[l.length - 1].id + 1 : 0,
                        g = [...l, {
                            id: m,
                            from: "user",
                            message: d || (l ? .length || t ? r : n)
                        }];
                    g[g.length - 2] ? .from && "ai" !== g[g.length - 2].from && (g[g.length - 2].additionalClasses = ["not-last-message"]), ++m, i(!0), s(""), c([...g]);
                    const v = 0 === m ? [] : (e => {
                        const t = [];
                        return e.forEach((e => {
                            t.push({
                                role: "ai" === e.from ? "assistant" : "user",
                                message: e ? .message || ""
                            })
                        })), t
                    })(f);
                    g = [...g, {
                        id: m,
                        from: "ai",
                        type: "loader",
                        icon: "assistant",
                        additionalClasses: ["animated-chat-bubble"]
                    }], c([...g]), $({
                        userCommand: r || n,
                        previousMessages: v,
                        useSystemMessage: h
                    }).then((e => {
                        const t = e.data;
                        if (i(!1), e.success) {
                            t.message.startsWith('"') && t.message.endsWith('"') && (t.message = t.message.slice(1, -1));
                            const e = g.length - 1,
                                n = g[e];
                            m === n.id ? (delete n.type, n.message = t.message.trim(), n ? .additionalClasses ? .includes("animated-chat-bubble") && delete n.additionalClasses, g[e] = n, c([...g])) : (s((0, j.__)("Something went wrong while I was generating a response.", "ultimate-addons-for-gutenberg")), c([...f])), a(""), "function" == typeof p && p(!0)
                        } else s(`I seem to have encountered an error.\n${t.message}`), c([...f]);
                        o(!0)
                    })).catch((() => {
                        i(!1)
                    })), o(!0)
                },
                yi = e => {
                    const {
                        chatBubble: t,
                        regenerationCommand: n,
                        setGenerating: r,
                        setRegeneratingId: i,
                        setAiResponseError: a,
                        chatLog: o,
                        setChatLog: s
                    } = e, l = [];
                    o[t.id - 2] ? .message && l.push({
                        role: "assistant",
                        message: o[t.id - 2].message
                    }), l.push({
                        role: "user",
                        message: o[t.id - 1].message
                    }, {
                        role: "assistant",
                        message: t.variations[0]
                    }), t ? .variations ? .length && t.variations.length > 1 && t.variations.forEach(((e, t) => {
                        0 !== t && l.push({
                            role: "user",
                            message: n
                        }, {
                            role: "assistant",
                            message: e
                        })
                    })), i(t.id), r(!0), a(""), $({
                        userCommand: n,
                        previousMessages: l,
                        useSystemMessage: !1
                    }).then((e => {
                        const n = e.data;
                        r(!1), i(null), e.success ? (n.message.startsWith('"') && n.message.endsWith('"') && (n.message = n.message.slice(1, -1)), o.forEach(((e, r) => {
                            t.id === e.id && (delete o[r].type, o[r].message = n.message.trim(), o[r].variations.push(n.message.trim()), s([...o]))
                        }))) : a(`I seem to have encountered an error.\n${n.message}`)
                    })).catch((() => {
                        r(!1), i(null)
                    }))
                };
            var _i = t => {
                const {
                    chatLogId: n,
                    isAuthorized: r,
                    generationRef: i,
                    currentText: a,
                    userInput: o,
                    setUserInput: s,
                    setRefreshFilters: l,
                    generating: u,
                    setGenerating: p,
                    setAiResponseError: h,
                    validForSaving: f,
                    setValidForSaving: g
                } = t, {
                    chatLog: b,
                    setChatLog: y,
                    editMode: _,
                    setFooterRefHeight: C,
                    hoveredButton: E,
                    handleMouseEnter: w,
                    handleMouseLeave: x,
                    scrollButtonRef: k
                } = (0, e.useContext)(di), S = (0, e.useRef)(null);
                (0, e.useEffect)((() => {
                    S ? .current && C(S.current ? .offsetHeight)
                }), [S]), (0, e.useEffect)((() => {
                    if (!i ? .current) return;
                    if (!o) return i.current.style.height = "", void(S ? .current && C(S.current.offsetHeight));
                    i.current.style.height = "auto";
                    const e = i.current.scrollHeight - 24,
                        t = Math.ceil(e / 20),
                        n = Math.max(1, Math.min(t, 5));
                    i.current.style.height = 20 * n + 24 + 56 + "px", S ? .current && C(S.current.offsetHeight)
                }), [o]);
                let M = zip_ai_react ? .collab_product_details;
                "object" == typeof M && null !== M || (M = {});
                const {
                    ai_assistant_authorized_disable_url: O,
                    ai_assistant_unauthorized_disable_url: z
                } = M, L = () => {
                    let e, t;
                    b ? .length || a ? (e = hi(b, a), t = o) : e = o, bi({
                        startingText: a,
                        textContent: e,
                        textCommand: t,
                        setGenerating: p,
                        setText: s,
                        setRefreshFilters: l,
                        setAiResponseError: h,
                        chatLog: b,
                        setChatLog: y,
                        setValidForSaving: g
                    })
                };
                return (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__footer",
                    ref: S
                }, (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__input-prompt"
                }, (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__input-prompt--textarea-wrapper"
                }, (0, e.createElement)("textarea", {
                    className: "zip-ai-sidebar__input-prompt--text",
                    onChange: e => {
                        s(e.target ? .value || "")
                    },
                    onKeyDown: e => {
                        "Enter" !== e.key || e.shiftKey || (e.preventDefault(), "" !== o.trim() && L())
                    },
                    ref: i,
                    value: o,
                    disabled: u || !r || _ ? .enabled,
                    placeholder: u ? (0, j.__)("Generating…", "ultimate-addons-for-gutenberg") : b ? .length || "" === a ? (0, j.__)("How can I help you?", "ultimate-addons-for-gutenberg") : a
                })), (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__input-prompt--footer"
                }, (0, e.createElement)("button", {
                    className: "zip-ai-sidebar__input-prompt--button",
                    onClick: () => L(),
                    onMouseEnter: () => w("sidebar-send-button"),
                    onMouseLeave: x,
                    disabled: "" === o.trim() || u || !r || _ ? .enabled
                }, function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M4.00035 7.99998L2.17969 2.08398C6.53489 3.35043 10.6419 5.35118 14.3237 7.99998C10.6422 10.6492 6.53541 12.6504 2.18035 13.9173L4.00035 7.99998ZM4.00035 7.99998H9.00035",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }))
                }({
                    width: 16,
                    height: 16,
                    color: "#fff"
                }), "sidebar-send-button" === E && (0, e.createElement)(qr, {
                    details: {
                        label: (0, j.__)("Ask AI", "ultimate-addons-for-gutenberg"),
                        position: "left"
                    }
                })), f && (0, e.createElement)("button", {
                    className: "zip-ai-sidebar__input-prompt--button secondary-variant",
                    onClick: () => {
                        localStorage.removeItem(`zipAiPreservedChatlog${n}`), g(!1), y(a ? [{
                            id: 0,
                            from: "content",
                            message: a
                        }] : []), l(!0), k ? .current && k.current ? .classList.contains("scroll-button-is-visible") && (k.current.classList.remove("scroll-button-is-visible"), k.current.tabIndex = -1, k.current.setAttribute("aria-hidden", "true"))
                    },
                    onMouseEnter: () => w("sidebar-clear-button"),
                    onMouseLeave: x,
                    disabled: u || _ ? .enabled
                }, function() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, e.createElement)("svg", {
                        width: c,
                        height: c,
                        viewBox: "0 0 16 16",
                        fill: m,
                        ...t
                    }, (0, e.createElement)("path", {
                        d: "M2 4.00065H14M12.6667 4.00065V13.334C12.6667 14.0007 12 14.6673 11.3333 14.6673H4.66667C4 14.6673 3.33333 14.0007 3.33333 13.334V4.00065M5.33333 4.00065V2.66732C5.33333 2.00065 6 1.33398 6.66667 1.33398H9.33333C10 1.33398 10.6667 2.00065 10.6667 2.66732V4.00065",
                        ...v,
                        strokeWidth: d,
                        ...n
                    }))
                }({
                    color: "#fff"
                }), "sidebar-clear-button" === E && (0, e.createElement)(qr, {
                    details: {
                        label: (0, j.__)("Clear Chat", "ultimate-addons-for-gutenberg"),
                        position: "right"
                    }
                })))), (0, e.createElement)("div", {
                    className: "zip-ai-sidebar__input-prompt--disclaimer"
                }, r && O || !r && z ? ui((0, j.sprintf)(
                    // Translators: %1$s is the opening link tag, %2$s is the closing link tag.
                    (0, j.__)("AI Assistant can make mistakes. Want to %1$sdisable it?%2$s", "ultimate-addons-for-gutenberg"), `<a href="${r?O:z}" target="_blank">`, "</a>")) : (0, j.__)("AI Assistant can make mistakes.", "ultimate-addons-for-gutenberg")))
            };
            const Ci = (e, t) => {
                e.preventDefault();
                const {
                    setIsAuthorized: n,
                    setButtonLabel: r,
                    setSubHeading: i,
                    setUserTeamName: a,
                    setCreditDetails: o,
                    setCreditClass: s,
                    buttonLabels: l,
                    subHeadings: c
                } = t, u = e.target;
                u.disabled = !0;
                const d = (screen.width - 480) / 2,
                    p = (screen.height - 720) / 2,
                    h = window.open(zip_ai_react.auth_middleware, "ZipAiAuthorization", `width=480,height=720,top=${p},left=${d},scrollbars=0`),
                    f = new FormData;
                f.append("action", "verify_zip_ai_authenticity"), f.append("nonce", zip_ai_react.ajax_nonce);
                let m = 0;
                r(l ? .progress), i(ui(c ? .progressWithLink, {
                    replace: e => {
                        const {
                            name: t
                        } = e;
                        return "a" === t && (e.attribs.onClick = () => h.focus()), e
                    }
                }));
                const g = setInterval((() => {
                    (h.closed || 300 === m) && (h.closed || h.close(), clearInterval(g), r(l ? .error), i(c ? .error), u.disabled = !1), fetch(zip_ai_react.ajax_url, {
                        method: "POST",
                        credentials: "same-origin",
                        body: f
                    }).then((e => e.json())).then((e => {
                        if (e ? .success && e ? .data ? .is_authorized && (h.close(), localStorage.setItem("zipAiAuthorizationStatus", !0), n(!0), r(l ? .success), i(c ? .success), u.disabled = !1, clearInterval(g), e.data ? .team_name && "string" == typeof e.data.team_name && a(e.data.team_name), e.data ? .credit_details && e.data.credit_details ? .threshold)) {
                            o(e.data.credit_details);
                            const t = D(e.data.credit_details);
                            s(t), zip_ai_react.credit_details = e.data.credit_details
                        }
                    })), m++
                }), 500)
            };
            var Ei = t => {
                    const {
                        setIsAuthorized: n,
                        setUserTeamName: r,
                        setCreditDetails: i,
                        setCreditClass: a
                    } = t, o = "disconnected" === zip_ai_react ? .current_status ? (0, j.__)("Reconnect and Continue Using AI Features", "ultimate-addons-for-gutenberg") : (0, j.__)("Get Started with 1000 Free Monthly Credits", "ultimate-addons-for-gutenberg"), c = "disconnected" === zip_ai_react ? .current_status ? (0, j.__)("Reconnecting…", "ultimate-addons-for-gutenberg") : (0, j.__)("Getting Started…", "ultimate-addons-for-gutenberg"), u = (0, j.sprintf)(
                        // Translators: %1$s is the opening link tag, %2$s is the closing link tag.
                        (0, j.__)("Get started from %1$shere%2$s.", "ultimate-addons-for-gutenberg"), '<a class="zip-ai-sidebar__chat-window--placeholder-link" href="javascript:void(0);">', "</a>"), [d, p] = (0, e.useState)(o), [y, _] = (0, e.useState)((0, j.__)("The possibilities are endless!", "ultimate-addons-for-gutenberg"));
                    let C = zip_ai_react ? .collab_product_details;
                    "object" == typeof C && null !== C || (C = {
                        product_primary_color: "#007cba"
                    });
                    const {
                        product_name: E,
                        product_logo: w,
                        product_primary_color: x,
                        ai_assistant_learn_more_url: k
                    } = C;
                    return (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-logos"
                    }, w && (0, e.createElement)(e.Fragment, null, ui(w), (0, e.createElement)("svg", {
                        width: "13",
                        height: "12",
                        viewBox: "0 0 13 12",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, (0, e.createElement)("path", {
                        d: "M12.3125 5.75C12.3125 6.24219 11.9023 6.65234 11.4375 6.65234H7.5V10.5898C7.5 11.0547 7.08984 11.4375 6.625 11.4375C6.13281 11.4375 5.75 11.0547 5.75 10.5898V6.65234H1.8125C1.32031 6.65234 0.9375 6.24219 0.9375 5.75C0.9375 5.28516 1.32031 4.90234 1.8125 4.90234H5.75V0.964844C5.75 0.472656 6.13281 0.0625 6.625 0.0625C7.08984 0.0625 7.5 0.472656 7.5 0.964844V4.90234H11.4375C11.9023 4.875 12.3125 5.28516 12.3125 5.75Z",
                        fill: "#555d66"
                    }))), function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return (0, e.createElement)("svg", {
                            width: s,
                            height: s,
                            viewBox: "0 0 30 30",
                            fill: m,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M5 0C2.23858 0 0 2.23858 0 5V25C0 27.7614 2.23858 30 5 30H25C27.7614 30 30 27.7614 30 25V5C30 2.23858 27.7614 0 25 0H5ZM26.1432 10.7265C26.1459 10.7262 26.1487 10.7259 26.1514 10.7256L26.1349 10.7269C26.1377 10.7267 26.1405 10.7266 26.1432 10.7265ZM26.1432 10.7265C21.9125 11.174 19.2481 11.1414 18.4509 11.1007C18.3687 11.1071 18.3417 10.9723 18.4048 10.9331C20.7044 9.21451 21.5524 7.98503 21.7865 7.59037C21.8319 7.53551 21.776 7.45429 21.7102 7.45939C20.6151 7.42458 13.7358 7.29097 9.63266 7.95161C6.00268 8.5242 3.84948 11.2753 3.86235 14.851C3.87523 18.4266 6.09129 21.3863 9.29387 22.1304C17.4168 23.9986 22.9334 18.0944 23.8439 17.0311C23.9057 16.975 23.8485 16.8768 23.7649 16.8661L19.5924 16.8476C19.4937 16.8553 19.4654 16.7035 19.5615 16.6618C24.5276 14.3256 25.9654 11.5273 26.2442 10.8553C26.2709 10.7871 26.2208 10.7249 26.1432 10.7265Z",
                            ...b,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            ...n
                        }))
                    }({
                        width: 32,
                        height: 32,
                        color: "#ff580e"
                    })), (0, e.createElement)("h3", {
                        className: "zip-ai-sidebar__chat-window--placeholder-heading"
                    }, E ? (0, j.sprintf)( /* translators: %s: Plugin Name */
                        (0, j.__)("Build 10x Faster with %s AI", "ultimate-addons-for-gutenberg"), E) : (0, j.__)("Build 10x Faster with ZipWP", "ultimate-addons-for-gutenberg")), (0, e.createElement)("p", {
                        className: "zip-ai-sidebar__chat-window--placeholder-subheading"
                    }, E ? (0, j.sprintf)( /* translators: %s: Plugin Name */
                        (0, j.__)("%s offers AI features powered by ZipWP to help you build your website 10 times faster.", "ultimate-addons-for-gutenberg"), E) : (0, j.__)("ZipWP offers AI features to help you build your website 10 times faster.", "ultimate-addons-for-gutenberg")), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: l,
                            height: l,
                            viewBox: "0 0 20 20",
                            fill: m,
                            ...t
                        }, (0, e.createElement)("g", {
                            clipPath: "url(#zip_ai_translucent_set_translate_clip)"
                        }, (0, e.createElement)("mask", {
                            id: "zip_ai_translucent_set_translate_mask",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: 0,
                            y: 0,
                            width: 20,
                            height: 20
                        }, (0, e.createElement)("path", {
                            d: "M20 0H0V20H20V0Z",
                            fill: m
                        })), (0, e.createElement)("g", {
                            mask: "url(#zip_ai_translucent_set_translate_mask)"
                        }, (0, e.createElement)("path", {
                            d: "M17.0894 9.95182e-08H2.86902C2.10845 0.0011001 1.37934 0.303724 0.841531 0.841531C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8915 0.303724 18.6207 0.841531 19.1584C1.37934 19.6963 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6963 19.1584 19.1584C19.6962 18.6207 19.9989 17.8915 20 17.131V2.84407C19.9826 2.08372 19.6683 1.36038 19.1243 0.828843C18.5804 0.297306 17.8499 -0.00019865 17.0894 9.95182e-08Z",
                            ...b,
                            fill: g
                        })), (0, e.createElement)("path", {
                            d: "M15.2118 6.56641H9.524L10.3498 13.3547L8.85156 15.1588L9.096 15.5257H15.2118L15.6702 15.1588V6.99453L15.2118 6.56641Z",
                            ...b,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M8.60323 10.2789C8.58423 10.1838 7.92954 6.91022 7.90873 6.80647C7.87635 6.64416 7.73379 6.52734 7.56829 6.52734H6.87379C6.70829 6.52734 6.56573 6.64416 6.53329 6.80647C6.51223 6.91197 5.85685 10.1888 5.83884 10.2788C5.80123 10.467 5.9232 10.6498 6.11124 10.6875C6.29929 10.7251 6.48223 10.6031 6.51985 10.415L6.74179 9.30528H7.70029L7.92223 10.4151C7.95985 10.6032 8.14292 10.7251 8.33085 10.6875C8.51885 10.6498 8.64085 10.467 8.60323 10.2789ZM6.88067 8.61078L7.15848 7.22184H7.2836L7.56142 8.61078H6.88067Z",
                            ...b
                        }), (0, e.createElement)("path", {
                            d: "M14.1681 9.30583H13.1264V8.95858C13.1264 8.76683 12.9709 8.61133 12.7792 8.61133C12.5874 8.61133 12.4319 8.76683 12.4319 8.95858V9.30583H11.3902C11.1984 9.30583 11.043 9.46127 11.043 9.65308C11.043 9.84483 11.1984 10.0003 11.3902 10.0003H11.4742C11.6721 10.6395 11.97 11.1301 12.2978 11.5233C12.031 11.7673 11.761 11.9675 11.5205 12.1598C11.3708 12.2796 11.3465 12.4981 11.4663 12.6479C11.5862 12.7977 11.8047 12.8218 11.9543 12.7021C12.1962 12.5086 12.486 12.2936 12.7792 12.0246C13.0725 12.2938 13.3628 12.5092 13.604 12.7021C13.7537 12.8219 13.9722 12.7976 14.092 12.6479C14.2118 12.4981 14.1875 12.2796 14.0378 12.1598C13.7979 11.9679 13.5276 11.7676 13.2605 11.5233C13.5883 11.1301 13.8862 10.6395 14.0841 10.0003H14.1681C14.3599 10.0003 14.5153 9.84483 14.5153 9.65308C14.5153 9.46127 14.3599 9.30583 14.1681 9.30583ZM12.7792 11.013C12.5575 10.7347 12.3581 10.4026 12.2078 9.99802H13.3505C13.2002 10.4026 13.0008 10.7347 12.7792 11.013Z",
                            ...b
                        }), (0, e.createElement)("path", {
                            d: "M14.885 6.18079H9.87539L9.72657 4.98671C9.66151 4.46651 9.21714 4.07422 8.69289 4.07422H5.11594C4.54153 4.07422 4.07422 4.54153 4.07422 5.11593V12.7784C4.07422 13.3527 4.54153 13.82 5.11594 13.82H8.04395L8.19089 15.0142C8.25576 15.5333 8.70014 15.9267 9.22458 15.9267H14.885C15.4593 15.9267 15.9266 15.4594 15.9266 14.8849V7.22254C15.9266 6.6481 15.4593 6.18079 14.885 6.18079ZM5.11594 13.1256C4.92447 13.1256 4.7687 12.9698 4.7687 12.7784V5.11593C4.7687 4.92447 4.92447 4.76869 5.11594 4.76869H8.69289C8.86764 4.76869 9.01576 4.89944 9.03745 5.07274C9.08776 5.47637 9.99132 12.7252 10.0413 13.1256H5.11594ZM8.8597 14.7634L8.74364 13.82H9.67526L8.8597 14.7634ZM15.2321 14.8849C15.2321 15.0764 15.0764 15.2322 14.885 15.2322H9.37251L10.6944 13.7031C10.7621 13.6267 10.7924 13.5254 10.7784 13.4247L9.96195 6.87529H14.885C15.0764 6.87529 15.2321 7.03104 15.2321 7.22254V14.8849Z",
                            ...b
                        })), (0, e.createElement)("defs", {}, (0, e.createElement)("clipPath", {
                            id: "zip_ai_translucent_set_translate_clip"
                        }, (0, e.createElement)("rect", {
                            width: 20,
                            height: 20,
                            fill: g
                        }))))
                    }({
                        width: 32,
                        height: 32,
                        color: x
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, j.__)("Translate Your Pages", "ultimate-addons-for-gutenberg"))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: l,
                            height: l,
                            viewBox: "0 0 20 20",
                            fill: "none",
                            ...t
                        }, (0, e.createElement)("g", {
                            clipPath: "url(#zip_ai_translucent_set_pencil_clip)"
                        }, (0, e.createElement)("mask", {
                            id: "zip_ai_translucent_set_pencil_mask",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: 0,
                            y: 0,
                            width: 20,
                            height: 20
                        }, (0, e.createElement)("path", {
                            d: "M20 0H0V20H20V0Z",
                            fill: g
                        })), (0, e.createElement)("g", {
                            mask: "url(#zip_ai_translucent_set_pencil_mask)"
                        }, (0, e.createElement)("path", {
                            d: "M17.0894 9.94679e-08H2.86902C2.10845 0.00109999 1.37934 0.303724 0.841531 0.841531C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8916 0.303724 18.6207 0.841531 19.1584C1.37934 19.6962 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6962 19.1584 19.1584C19.6962 18.6207 19.9989 17.8916 20 17.131V2.84407C19.9826 2.08372 19.6683 1.36038 19.1243 0.828844C18.5804 0.297305 17.8499 -0.0001986 17.0894 9.94679e-08Z",
                            fill: m
                        })), (0, e.createElement)("path", {
                            d: "M10.8966 6.22266L5.72334 11.3959C5.59051 11.5288 5.52409 11.5952 5.48042 11.6768C5.43676 11.7583 5.41833 11.8505 5.38149 12.0347L4.77038 15.0903C4.7288 15.2982 4.70801 15.4021 4.76714 15.4612C4.82627 15.5203 4.93021 15.4995 5.13809 15.458L8.19368 14.8468C8.37787 14.81 8.46999 14.7916 8.55156 14.7479C8.63318 14.7043 8.69962 14.6378 8.83243 14.505L14.0057 9.33172L10.8966 6.22266Z",
                            ...b,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M8.34623 14.6906C8.22654 14.7584 8.09511 14.791 7.95842 14.825C7.94836 14.8275 7.93823 14.83 7.92811 14.8326L5.67534 15.3958L5.6602 15.3995C5.65418 15.401 5.64809 15.4026 5.64196 15.4041C5.54567 15.4282 5.43676 15.4555 5.3441 15.4646C5.24089 15.4747 5.05387 15.4738 4.90307 15.323C4.75227 15.1721 4.75134 14.9851 4.76144 14.882C4.7705 14.7893 4.79779 14.6803 4.82193 14.5841C4.82346 14.5779 4.82499 14.5718 4.82649 14.5658L5.39347 12.2979C5.396 12.2878 5.39851 12.2777 5.40101 12.2676C5.43499 12.1309 5.46765 11.9995 5.5354 11.8798C5.60315 11.7601 5.69905 11.6645 5.79882 11.565C5.80616 11.5577 5.81353 11.5503 5.82091 11.543L11.6877 5.67624L11.7044 5.65948C11.8984 5.46552 12.0697 5.29411 12.2265 5.17453C12.3964 5.04491 12.5923 4.94141 12.8367 4.94141C13.0811 4.94141 13.277 5.04491 13.4469 5.17453C13.6037 5.2941 13.775 5.46551 13.969 5.65947L13.9857 5.67624L14.5498 6.24029L14.5665 6.25708C14.7605 6.45096 14.9319 6.62239 15.0515 6.77908C15.1811 6.94896 15.2846 7.14496 15.2846 7.38933C15.2846 7.63377 15.1811 7.82971 15.0515 7.99958C14.9319 8.15633 14.7605 8.32771 14.5665 8.52164L14.5498 8.53839L8.68304 14.4051C8.67567 14.4125 8.66829 14.4199 8.66098 14.4272C8.56154 14.527 8.46586 14.6229 8.34623 14.6906ZM8.34623 14.6906L8.16148 14.3643",
                            ...v,
                            strokeWidth: h
                        }), (0, e.createElement)("path", {
                            d: "M10.8945 6.22266L14.0037 9.33173",
                            ...v,
                            strokeWidth: h
                        })), (0, e.createElement)("defs", {}, (0, e.createElement)("clipPath", {
                            id: "zip_ai_translucent_set_pencil_clip"
                        }, (0, e.createElement)("rect", {
                            width: 20,
                            height: 20,
                            fill: g
                        }))))
                    }({
                        width: 32,
                        height: 32,
                        color: x
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, j.__)("Write Content for Pages", "ultimate-addons-for-gutenberg"))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: l,
                            height: l,
                            viewBox: "0 0 20 20",
                            fill: m,
                            ...t
                        }, (0, e.createElement)("g", {
                            clipPath: "url(#zip_ai_translucent_set_code_clip)"
                        }, (0, e.createElement)("mask", {
                            id: "zip_ai_translucent_set_code_mask",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: 0,
                            y: 0,
                            width: 20,
                            height: 20
                        }, (0, e.createElement)("path", {
                            d: "M20 0H0V20H20V0Z",
                            fill: g
                        })), (0, e.createElement)("g", {
                            mask: "url(#zip_ai_translucent_set_code_mask)"
                        }, (0, e.createElement)("path", {
                            d: "M17.0894 9.94679e-08H2.86902C2.10845 0.00109999 1.37934 0.303724 0.841531 0.841531C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8916 0.303724 18.6207 0.841531 19.1584C1.37934 19.6962 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6962 19.1584 19.1584C19.6962 18.6207 19.9989 17.8916 20 17.131V2.84407C19.9826 2.08372 19.6683 1.36038 19.1243 0.828844C18.5804 0.297305 17.8499 -0.0001986 17.0894 9.94679e-08Z",
                            fill: m
                        })), (0, e.createElement)("path", {
                            d: "M7.10807 7.05957L3.66406 9.86632L7.10807 12.6731",
                            ...v,
                            strokeWidth: h
                        }), (0, e.createElement)("path", {
                            d: "M12.8945 12.6731L16.3385 9.86632L12.8945 7.05957",
                            ...v,
                            strokeWidth: h
                        }), (0, e.createElement)("path", {
                            d: "M11.07 5.93262L8.92969 14.0682",
                            ...v,
                            strokeWidth: h
                        })), (0, e.createElement)("defs", {}, (0, e.createElement)("clipPath", {
                            id: "zip_ai_translucent_set_code_clip"
                        }, (0, e.createElement)("rect", {
                            width: 20,
                            height: 20,
                            fill: g
                        }))))
                    }({
                        width: 32,
                        height: 32,
                        color: x
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, j.__)("Generate Custom Code", "ultimate-addons-for-gutenberg"))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: l,
                            height: l,
                            viewBox: "0 0 20 20",
                            fill: m,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M9.64707 4.57713L9.64707 4.57713L9.64911 4.57618C9.86656 4.47461 10.11 4.47461 10.3275 4.57618L10.3274 4.57618L10.3295 4.57713L15.4525 6.94209C15.4714 6.95246 15.4861 6.9665 15.4945 6.97869C15.4977 6.98334 15.4993 6.98653 15.4999 6.98825C15.4995 7.00094 15.4961 7.01005 15.4901 7.01903C15.4829 7.02978 15.4704 7.04221 15.4525 7.05205L10.3295 9.41701L10.3295 9.417L10.3275 9.41795C10.11 9.51953 9.86656 9.51953 9.64911 9.41795L9.64707 9.41701L4.52488 7.05241C4.51721 7.04796 4.51352 7.04351 4.51089 7.03912C4.50777 7.03393 4.5 7.01825 4.5 6.98534C4.5 6.97323 4.50311 6.96473 4.50697 6.95851C4.51044 6.9529 4.51595 6.94688 4.52487 6.94173L9.64707 4.57713Z",
                            ...v,
                            strokeWidth: h,
                            fill: f,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M15.6719 9.49569C15.8594 9.58953 16 9.77721 16 9.98836C16 10.223 15.8594 10.4106 15.6719 10.5045L10.5391 12.874C10.1875 13.0382 9.78906 13.0382 9.4375 12.874L4.30469 10.5045C4.11719 10.4106 4 10.223 4 9.98836C4 9.77721 4.11719 9.58953 4.30469 9.49569L5.57031 8.90918L9.13281 10.5514C9.67188 10.8095 10.3047 10.8095 10.8438 10.5514L14.4062 8.90918L15.6719 9.49569Z",
                            ...b,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M14.4062 11.9121L10.8438 13.5543C10.3047 13.8124 9.67188 13.8124 9.13281 13.5543L5.57031 11.9121L4.30469 12.4986C4.11719 12.5925 4 12.7801 4 12.9913C4 13.2259 4.11719 13.4136 4.30469 13.5074L9.4375 15.8769C9.78906 16.0411 10.1875 16.0411 10.5391 15.8769L15.6719 13.5074C15.8594 13.4136 16 13.2259 16 12.9913C16 12.7801 15.8594 12.5925 15.6719 12.4986L14.4062 11.9121Z",
                            ...b,
                            fillOpacity: .25
                        }))
                    }({
                        width: 32,
                        height: 32,
                        color: x
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, j.__)("Customize Templates", "ultimate-addons-for-gutenberg"))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: l,
                            height: l,
                            viewBox: "0 0 20 20",
                            fill: m,
                            ...t
                        }, (0, e.createElement)("g", {
                            clipPath: "url(#zip_ai_translucent_set_description_clip)"
                        }, (0, e.createElement)("mask", {
                            id: "zip_ai_translucent_set_description_mask",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: 0,
                            y: 0,
                            width: 20,
                            height: 20
                        }, (0, e.createElement)("path", {
                            d: "M20 0H0V20H20V0Z",
                            fill: g
                        })), (0, e.createElement)("g", {
                            mask: "url(#zip_ai_translucent_set_description_mask)"
                        }, (0, e.createElement)("path", {
                            d: "M17.0894 9.95182e-08H2.86902C2.10845 0.0011001 1.37934 0.303724 0.841531 0.841531C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8915 0.303724 18.6207 0.841531 19.1584C1.37934 19.6963 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6963 19.1584 19.1584C19.6962 18.6207 19.9989 17.8915 20 17.131V2.84407C19.9826 2.08372 19.6683 1.36038 19.1243 0.828843C18.5804 0.297306 17.8499 -0.00019865 17.0894 9.95182e-08Z",
                            fill: m
                        })), (0, e.createElement)("path", {
                            d: "M15.6076 12.8594H4.39062",
                            ...v,
                            strokeWidth: h
                        }), (0, e.createElement)("path", {
                            d: "M15.6076 14.8594H4.39062",
                            ...v,
                            strokeWidth: h
                        }), (0, e.createElement)("path", {
                            d: "M13.5742 16.8594H6.42578",
                            ...v,
                            strokeWidth: h
                        }), (0, e.createElement)("path", {
                            d: "M7.00476 4.83761H6.31051C6.28332 4.83761 6.26969 4.83761 6.25838 4.83551C6.20757 4.82605 6.16781 4.78629 6.15836 4.73548C6.15625 4.72414 6.15625 4.71054 6.15625 4.68334C6.15625 4.41135 6.15625 4.27535 6.17733 4.16202C6.27188 3.65383 6.66944 3.25624 7.17763 3.16171C7.29094 3.14063 7.42694 3.14062 7.69894 3.14062H12.25C12.5219 3.14062 12.6579 3.14063 12.7713 3.16171C13.2795 3.25624 13.6771 3.65383 13.7716 4.16202C13.7927 4.27535 13.7927 4.41135 13.7927 4.68334C13.7927 4.71054 13.7927 4.72414 13.7906 4.73548C13.7811 4.78629 13.7414 4.82605 13.6906 4.83551C13.6792 4.83761 13.6656 4.83761 13.6384 4.83761H12.9442V7.42855C12.9442 8.60711 12.9442 9.19636 12.5781 9.56249C12.2119 9.92855 11.6227 9.92855 10.4442 9.92855H9.50476C8.32626 9.92855 7.73694 9.92855 7.37088 9.56249C7.00476 9.19636 7.00476 8.60711 7.00476 7.42855V4.83761Z",
                            ...b,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M7.00476 4.83761V7.42855C7.00476 8.60711 7.00476 9.19636 7.37088 9.56249C7.73694 9.92855 8.32626 9.92855 9.50476 9.92855H10.4442C11.6227 9.92855 12.2119 9.92855 12.5781 9.56249C12.9442 9.19636 12.9442 8.60711 12.9442 7.42855V4.83761M7.00476 4.83761H12.9442M7.00476 4.83761H6.31051C6.28332 4.83761 6.26969 4.83761 6.25838 4.83551C6.20757 4.82605 6.16781 4.78629 6.15836 4.73548C6.15625 4.72414 6.15625 4.71054 6.15625 4.68334C6.15625 4.41135 6.15625 4.27535 6.17733 4.16202C6.27188 3.65383 6.66944 3.25624 7.17763 3.16171C7.29094 3.14063 7.42694 3.14062 7.69894 3.14062H12.25C12.5219 3.14062 12.6579 3.14063 12.7713 3.16171C13.2795 3.25624 13.6771 3.65383 13.7716 4.16202C13.7927 4.27535 13.7927 4.41135 13.7927 4.68334C13.7927 4.71054 13.7927 4.72414 13.7906 4.73548C13.7811 4.78629 13.7414 4.82605 13.6906 4.83551C13.6792 4.83761 13.6656 4.83761 13.6384 4.83761H12.9442",
                            ...v,
                            strokeWidth: h
                        }), (0, e.createElement)("path", {
                            d: "M9.125 8.23145H10.822",
                            ...v,
                            strokeWidth: h
                        })), (0, e.createElement)("defs", {}, (0, e.createElement)("clipPath", {
                            id: "zip_ai_translucent_set_description_clip"
                        }, (0, e.createElement)("rect", {
                            width: 20,
                            height: 20,
                            fill: g
                        }))))
                    }({
                        width: 32,
                        height: 32,
                        color: x
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, j.__)("Craft Product Descriptions", "ultimate-addons-for-gutenberg"))), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item"
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, e.createElement)("svg", {
                            width: 20,
                            height: 20,
                            viewBox: "0 0 20 20",
                            fill: m,
                            ...t
                        }, (0, e.createElement)("g", {
                            clipPath: "url(#zip_ai_translucent_set_chat_bubble_clip)"
                        }, (0, e.createElement)("mask", {
                            id: "zip_ai_translucent_set_chat_bubble_mask",
                            style: {
                                maskType: "luminance"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: 0,
                            y: 0,
                            width: 20,
                            height: 20
                        }, (0, e.createElement)("path", {
                            d: "M20 0H0V20H20V0Z",
                            fill: g
                        })), (0, e.createElement)("g", {
                            mask: "url(#zip_ai_translucent_set_chat_bubble_mask)"
                        }, (0, e.createElement)("path", {
                            d: "M17.0894 9.95178e-08H2.86902C2.10845 0.0011001 1.37934 0.303726 0.841531 0.841532C0.303724 1.37934 0.00109989 2.10845 0 2.86902V17.131C0.00109989 17.8916 0.303724 18.6207 0.841531 19.1584C1.37934 19.6963 2.10845 19.9989 2.86902 20H17.131C17.8916 19.9989 18.6207 19.6963 19.1584 19.1584C19.6962 18.6207 19.9989 17.8916 20 17.131V2.84408C19.9826 2.08373 19.6683 1.36038 19.1243 0.828844C18.5804 0.297307 17.8499 -0.00019865 17.0894 9.95178e-08Z",
                            fill: m
                        })), (0, e.createElement)("path", {
                            d: "M4.41797 12.358V6.41956L6.88217 4.40285L13.1931 4.21387L15.4984 6.41956V11.6964L14.5535 13.1324L12.5885 14.1053H10.8124L8.16704 15.6643L7.57623 15.2486L7.78911 14.1053H7.57623L6.01714 13.6527L4.41797 12.358Z",
                            ...b,
                            fillOpacity: .25
                        }), (0, e.createElement)("path", {
                            d: "M10.0022 8.344H7.5135C7.25581 8.344 7.04688 8.14281 7.04688 7.89463C7.04688 7.6465 7.25581 7.44531 7.5135 7.44531H10.0022C10.2599 7.44531 10.4689 7.6465 10.4689 7.89463C10.4689 8.14281 10.2599 8.344 10.0022 8.344Z",
                            ...b
                        }), (0, e.createElement)("path", {
                            d: "M7.04688 10.2912C7.04688 10.043 7.25581 9.8418 7.5135 9.8418H12.491C12.7487 9.8418 12.9576 10.043 12.9576 10.2912C12.9576 10.5394 12.7487 10.7405 12.491 10.7405H7.5135C7.25581 10.7405 7.04688 10.5394 7.04688 10.2912Z",
                            ...b
                        }), (0, e.createElement)("path", {
                            d: "M9.35681 3.84961H10.643C11.4964 3.84961 12.1655 3.84961 12.7033 3.89192C13.2509 3.935 13.7033 4.02419 14.1128 4.2251C14.786 4.55539 15.3333 5.08242 15.6763 5.73065C15.8849 6.12496 15.9775 6.56058 16.0223 7.08796C16.0662 7.60577 16.0662 8.25015 16.0662 9.07196V10.7236C16.0662 10.8773 16.0662 10.9709 16.0622 11.0524C15.9749 12.827 14.5006 14.2467 12.6578 14.3307C12.5731 14.3346 12.4662 14.3346 12.2888 14.3346H12.2711L12.2242 14.3346C11.6847 14.3379 11.1591 14.5001 10.7181 14.7995L10.6874 14.8204L9.06312 15.9377C8.12706 16.5815 6.897 15.6517 7.32419 14.6232C7.38162 14.485 7.27594 14.3346 7.12131 14.3346H6.74688C5.19315 14.3346 3.93359 13.1216 3.93359 11.6255V9.07196C3.93359 8.25015 3.93359 7.60577 3.97753 7.08796C4.02226 6.56058 4.11488 6.12496 4.32352 5.73065C4.66651 5.08242 5.21381 4.55539 5.88697 4.2251C6.29644 4.02419 6.74888 3.935 7.29644 3.89192C7.83425 3.84961 8.50338 3.84961 9.35681 3.84961ZM7.37244 4.78765C6.88256 4.82619 6.56669 4.90026 6.31069 5.02586C5.81312 5.26998 5.40859 5.65953 5.15507 6.13865C5.02465 6.38515 4.94772 6.68933 4.9077 7.16108C4.86723 7.63808 4.86687 8.24577 4.86687 9.09208V11.6255C4.86687 12.6253 5.70858 13.4358 6.74688 13.4358H7.12131C7.93619 13.4358 8.49337 14.2284 8.19075 14.957C8.10969 15.1521 8.34306 15.3285 8.52069 15.2064L10.1804 14.0648C10.7772 13.6599 11.4882 13.4404 12.2183 13.4359L12.2711 13.4358C12.4713 13.4358 12.5541 13.4358 12.6137 13.433C13.9757 13.3709 15.0654 12.3216 15.1299 11.01C15.1328 10.9524 15.1329 10.8818 15.1329 10.709V9.09208C15.1329 8.24577 15.1326 7.63808 15.0921 7.16108C15.052 6.68933 14.9751 6.38515 14.8447 6.13865C14.5912 5.65953 14.1866 5.26998 13.6891 5.02586C13.4331 4.90026 13.1172 4.82619 12.6273 4.78765C12.132 4.74867 11.5009 4.74832 10.6221 4.74832H9.37769C8.49888 4.74832 7.86781 4.74867 7.37244 4.78765Z",
                            ...b,
                            fillRule: "evenodd",
                            clipRule: "evenodd"
                        })), (0, e.createElement)("defs", {}, (0, e.createElement)("clipPath", {
                            id: "zip_ai_translucent_set_chat_bubble_clip"
                        }, (0, e.createElement)("rect", {
                            width: 20,
                            height: 20,
                            fill: g
                        }))))
                    }({
                        width: 32,
                        height: 32,
                        color: x
                    }), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder-grid-item-heading"
                    }, (0, j.__)("Engage with Comments", "ultimate-addons-for-gutenberg")))), (0, e.createElement)("p", {
                        className: "zip-ai-sidebar__chat-window--placeholder-padded-content"
                    }, y), (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__chat-window--placeholder-button",
                        onClick: e => Ci(e, {
                            setIsAuthorized: n,
                            setButtonLabel: p,
                            setSubHeading: _,
                            setUserTeamName: r,
                            setCreditDetails: i,
                            setCreditClass: a,
                            buttonLabels: {
                                progress: c,
                                success: (0, j.__)("Get Ready!", "ultimate-addons-for-gutenberg"),
                                error: o
                            },
                            subHeadings: {
                                progressWithLink: u,
                                success: (0, j.__)("The possibilities are endless!", "ultimate-addons-for-gutenberg"),
                                error: (0, j.__)("Something went wrong, please try again.", "ultimate-addons-for-gutenberg")
                            }
                        })
                    }, d), k && (0, e.createElement)("a", {
                        className: "zip-ai-sidebar__chat-window--placeholder-subheading zip-ai-sidebar__chat-window--placeholder-link",
                        href: k,
                        target: "_blank",
                        rel: "noreferrer"
                    }, (0, j.__)("Learn more", "ultimate-addons-for-gutenberg"))))
                },
                wi = t => {
                    const {
                        generationRef: n,
                        currentText: r,
                        updateContent: i,
                        closeModal: a,
                        generating: o,
                        setGenerating: s,
                        aiResponseError: l,
                        setAiResponseError: d,
                        userInput: p,
                        setUserInput: h,
                        refreshFilters: f,
                        setRefreshFilters: g,
                        setValidForSaving: b
                    } = t, {
                        chatLog: _,
                        setChatLog: C,
                        footerRefHeight: E,
                        scrollButtonRef: w
                    } = (0, e.useContext)(di), [x, k] = (0, e.useState)(null), [S, M] = (0, e.useState)(!1), [O, z] = (0, e.useState)(!1), L = (0, e.useRef)(null), T = () => {
                        if (!L ? .current) return;
                        const e = L.current,
                            t = Math.ceil(e.scrollTop) + Math.ceil(e.clientHeight);
                        z(!O && t < e.scrollHeight)
                    };
                    if ((0, e.useEffect)((() => {
                            if (!w ? .current) return;
                            const e = w.current;
                            O ? (e.classList.add("scroll-button-is-visible"), e.tabIndex = "", e.setAttribute("aria-hidden", "false")) : (e.classList.remove("scroll-button-is-visible"), e.tabIndex = -1, e.setAttribute("aria-hidden", "true"))
                        }), [O]), (0, e.useEffect)((() => {
                            if (L ? .current) return L.current.addEventListener("scroll", T), () => L.current.removeEventListener("scroll", T)
                        }), [L ? .current]), (0, e.useEffect)((() => {
                            L ? .current && (L.current.scrollTop = L.current ? .scrollHeight, T())
                        }), [L ? .current ? .lastChild, _]), x) {
                        const e = _.length - 1;
                        if ("ai" === _[e] ? .from && "loader" !== _ ? .type && _[e].id === x) {
                            const t = _;
                            t[e].type = "regeneration", C(t)
                        }
                    }
                    return (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window",
                        ref: L
                    }, _ ? .length || l ? (0, e.createElement)(e.Fragment, null, _ ? .length > 0 && _.map(((t, c) => (0, e.createElement)(vi, {
                        key: c,
                        generationRef: n,
                        currentText: r,
                        chatBubble: t,
                        updateContent: i,
                        closeModal: a,
                        generating: o,
                        setGenerating: s,
                        regeneratingId: x,
                        setRegeneratingId: k,
                        aiResponseError: l,
                        setAiResponseError: d,
                        userInput: p,
                        setUserInput: h,
                        refreshFilters: f,
                        setRefreshFilters: g,
                        editCheck: S,
                        setEditCheck: M,
                        setValidForSaving: b
                    }))), l && (() => {
                        const t = {
                            type: "error",
                            icon: "assistant",
                            message: l,
                            action: {
                                execute: () => {
                                    const e = _.filter((e => "error" !== e.from));
                                    d(""), C(e)
                                },
                                label: (0, j.__)("Dismiss", "ultimate-addons-for-gutenberg")
                            }
                        };
                        return (0, e.createElement)(vi, {
                            chatBubble: t
                        })
                    })()) : (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__chat-window--placeholder"
                    }, y({
                        width: 32,
                        height: 32,
                        color: "#5a03ef"
                    }), (0, e.createElement)("h3", {
                        className: "zip-ai-sidebar__chat-window--placeholder-heading"
                    }, (0, j.__)("Hi there! I'm here to assist you.", "ultimate-addons-for-gutenberg")), (0, e.createElement)("p", {
                        className: "zip-ai-sidebar__chat-window--placeholder-subheading"
                    }, (0, j.__)("Choose a prompt bellow or write on your own.", "ultimate-addons-for-gutenberg"), (0, e.createElement)("br", null), (0, j.__)("Ask me about what you need.", "ultimate-addons-for-gutenberg"))), (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__chat-window--scroll-button",
                        ref: w,
                        onClick: () => {
                            L ? .current && w ? .current && (w.current ? .blur(), L.current.scrollTo({
                                top: L.current.scrollHeight,
                                behavior: "smooth"
                            }))
                        },
                        style: {
                            bottom: `${E}px`
                        }
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return (0, e.createElement)("svg", {
                            width: c,
                            height: c,
                            viewBox: "0 0 16 16",
                            fill: m,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M8 3.33398V12.6673",
                            ...v,
                            strokeWidth: u,
                            ...n
                        }), (0, e.createElement)("path", {
                            d: "M12.6654 8L7.9987 12.6667L3.33203 8",
                            ...v,
                            strokeWidth: u,
                            ...n
                        }))
                    }()))
                },
                xi = n => {
                    const {
                        chatLogId: r,
                        setIsOpen: i,
                        setAdminIsOpen: a,
                        isSidebar: o = !1,
                        updateContent: s,
                        currentText: l = "",
                        autoRun: u,
                        setAutoRun: d
                    } = n, h = (0, e.useRef)(null), f = (0, e.useRef)(null), g = (0, e.useRef)(null), b = (0, e.useRef)(null), y = (0, e.useRef)(null), _ = JSON.parse(localStorage.getItem(`zipAiPreservedChatlog${r}`)) || [], C = JSON.parse(localStorage.getItem("zipAiAuthorizationStatus")) || zip_ai_react ? .is_authorized || !1, [E, w] = (0, e.useState)(_), [x, k] = (0, e.useState)(C), [S, M] = (0, e.useState)(zip_ai_react.current_plan_details ? .team_name), [O, z] = (0, e.useState)({
                        enabled: !1,
                        value: ""
                    }), [L, T] = (0, e.useState)(""), [I, P] = (0, e.useState)(""), [R, A] = (0, e.useState)(!1), [V, F] = (0, e.useState)(!1), [B, W] = (0, e.useState)(_.length > 0), [$, U] = (0, e.useState)(null), [Z, G] = (0, e.useState)(null), [q, Y] = (0, e.useState)(0), [X, K] = (0, e.useState)(!1), [J, Q] = (0, e.useState)(null), [ee, te] = (0, e.useState)(!1), [ne, re] = (0, e.useState)(zip_ai_react.credit_details), [ie, ae] = (0, e.useState)(D(zip_ai_react.credit_details)), [oe, se] = (0, e.useState)(null), [le, ce] = (0, e.useState)((0, j.__)("Login", "ultimate-addons-for-gutenberg")), [ue, de] = (0, e.useState)((0, j.__)("Login to use the AI Assistant!", "ultimate-addons-for-gutenberg")), pe = e => {
                        G(e), J && (J ? .blur(), U(null), Q(null))
                    }, he = () => G(null), fe = () => {
                        y ? .current ? .firstChild ? .classList ? .add("zip-ai-sidebar__header--user-popup-content-closed"), setTimeout((() => {
                            te(!1)
                        }), 100)
                    }, me = e => {
                        const t = y ? .current && !y.current ? .contains(e ? .target),
                            n = e ? .target ? .classList ? .contains("zip-ai-sidebar__header--user-popup");
                        (t || n) && fe()
                    };
                    (0, e.useEffect)((() => (document.addEventListener("mouseup", me), () => {
                        document.removeEventListener("mouseup", me)
                    })), []), (0, e.useEffect)((() => {
                        const e = E ? .length ? {
                            from: E[E.length - 1] ? .from,
                            message: E[E.length - 1] ? .message
                        } : null;
                        l && "content" !== e ? .from && (l.trim() !== e ? .message ? .trim() && (E.push({
                            id: E ? .length ? E[E.length - 1].id + 1 : 0,
                            from: "content",
                            message: l
                        }), w([...E])), (() => {
                            if (!u || !d) return;
                            const e = zip_ai_react ? .zip_ai_assistant_options ? .last_used ? .changeTone || void 0,
                                t = e => {
                                    let {
                                        textCommand: t,
                                        oneClickCommand: n,
                                        useSystemMessage: r
                                    } = e;
                                    const i = hi(E, l);
                                    bi({
                                        textContent: i,
                                        textCommand: t,
                                        setGenerating: F,
                                        setText: P,
                                        setRefreshFilters: A,
                                        setAiResponseError: T,
                                        chatLog: E,
                                        setChatLog: w,
                                        oneClickCommand: n,
                                        setValidForSaving: W,
                                        useSystemMessage: r
                                    })
                                };
                            if ("not_set" !== u && !X) {
                                switch (u) {
                                    case "fix_grammar":
                                        ni(t);
                                        break;
                                    case "rephrase":
                                        oi(t);
                                        break;
                                    case "make_shorter":
                                        ii(t);
                                        break;
                                    case "make_longer":
                                        ri(t);
                                        break;
                                    case "change_tone":
                                        ai(e, t)
                                }
                                d("not_set"), K(!0)
                            }
                        })())
                    }), []), (0, e.useEffect)((() => {
                        g ? .current && g.current ? .focus(), V && he()
                    }), [g, V]);
                    const ge = () => {
                        h ? .current.classList.add("close-it"), f ? .current.classList.add("close-it"), setTimeout((() => {
                            if ("content" === E[E.length - 1] ? .from && (E.pop(), w([...E])), B) {
                                const e = (e => e.map(((e, t) => ({ ...e,
                                    id: t
                                }))))(E.slice(-20));
                                localStorage.setItem(`zipAiPreservedChatlog${r}`, JSON.stringify(e)), w(e)
                            }
                            o && (0, t.dispatch)("core/edit-post").closeGeneralSidebar("zip-ai-page-settings-panel"), i(!1), a && a(!1)
                        }), 150)
                    };
                    return (0, e.createElement)(di.Provider, {
                        value: {
                            chatLog: E,
                            setChatLog: w,
                            editMode: O,
                            setEditMode: z,
                            currentDropdown: $,
                            setCurrentDropdown: U,
                            hoveredButton: Z,
                            setHoveredButton: G,
                            handleMouseEnter: pe,
                            handleMouseLeave: he,
                            footerRefHeight: q,
                            setFooterRefHeight: Y,
                            scrollButtonRef: b,
                            openedDropdownNode: J,
                            setOpenDropdownNode: Q
                        }
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar-overlay",
                        ref: h,
                        onClick: e => {
                            if (e.target === h ? .current) return ge()
                        },
                        onKeyDown: e => {
                            if ("Escape" === e.key) return ge()
                        },
                        role: "button",
                        tabIndex: "0"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar",
                        ref: f
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__header"
                    }, (0, e.createElement)("h2", {
                        className: "zip-ai-sidebar__header--title"
                    }, (0, j.__)("AI Assistant", "ultimate-addons-for-gutenberg")), (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__header--close",
                        onClick: () => ge(),
                        onMouseEnter: () => pe("sidebar-close-button"),
                        onMouseLeave: he
                    }, function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return (0, e.createElement)("svg", {
                            width: c,
                            height: c,
                            viewBox: "0 0 16 16",
                            fill: m,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M4 12L12 4M4 4L12 12",
                            ...v,
                            ...n
                        }))
                    }(), "sidebar-close-button" === Z && (0, e.createElement)(qr, {
                        details: {
                            label: (0, j.__)("Close", "ultimate-addons-for-gutenberg")
                        }
                    })), (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__header--user-wrapper"
                    }, (0, e.createElement)("button", {
                        onClick: () => ee ? fe() : (() => {
                            te(!0);
                            const e = new FormData;
                            e.append("action", "get_latest_credit_details"), e.append("nonce", zip_ai_react.ajax_nonce), se("zip-ai__progress-wrapper--loading");
                            const t = () => {
                                se("zip-ai__progress-wrapper--loaded"), setTimeout((() => {
                                    se(null)
                                }), 150)
                            };
                            fetch(zip_ai_react.ajax_url, {
                                method: "POST",
                                credentials: "same-origin",
                                body: e
                            }).then((e => e.json())).then((e => {
                                if (e ? .success && e ? .data ? .threshold) {
                                    re(e.data);
                                    const t = D(e.data);
                                    ae(t), zip_ai_react.credit_details = e.data
                                }
                                t()
                            })).catch((() => {
                                t()
                            }))
                        })(),
                        className: "zip-ai-sidebar__header--user-icon"
                    }, (() => {
                        if (!S || "string" != typeof S) return function() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return (0, e.createElement)("svg", {
                                width: c,
                                height: c,
                                viewBox: "0 0 24 24",
                                fill: m,
                                ...t
                            }, (0, e.createElement)("path", {
                                d: "M15.7498 6C15.7498 8.07107 14.0709 9.75 11.9998 9.75C9.92877 9.75 8.24984 8.07107 8.24984 6C8.24984 3.92893 9.92877 2.25 11.9998 2.25C14.0709 2.25 15.7498 3.92893 15.7498 6Z",
                                ...v,
                                strokeWidth: p,
                                ...n
                            }), (0, e.createElement)("path", {
                                d: "M4.50098 20.1182C4.57128 16.0369 7.90171 12.75 11.9998 12.75C16.0981 12.75 19.4286 16.0371 19.4987 20.1185C17.2159 21.166 14.6762 21.75 12.0002 21.75C9.32384 21.75 6.78394 21.1659 4.50098 20.1182Z",
                                ...v,
                                strokeWidth: p,
                                ...n
                            }))
                        }();
                        const t = S.split(" ").map((e => e.charAt(0)));
                        return `${t[0]?.toUpperCase()}${t[1]?.toUpperCase()||""}`
                    })())), ee && (0, e.createElement)("div", {
                        ref: y,
                        className: "zip-ai-sidebar__header--user-popup"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__header--user-popup-content"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__header--user-popup-header"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__header--user-popup-header-left"
                    }, (0, e.createElement)("h2", {
                        className: "zip-ai-sidebar__header--user-popup-title"
                    }, x ? S : (0, j.__)("Get Started", "ultimate-addons-for-gutenberg")), (0, e.createElement)("p", {
                        className: "zip-ai-sidebar__header--user-popup-details"
                    }, x ? (0, j.__)("Credit Usage", "ultimate-addons-for-gutenberg") : ue)), x && (0, e.createElement)("div", {
                        className: "zip-ai-sidebar__header--user-popup-header-right"
                    }, (0, e.createElement)("a", {
                        className: "zip-ai-sidebar__header--user-popup-link",
                        href: zip_ai_react ? .credit_topup_url,
                        target: "_blank",
                        rel: "noreferrer noopener"
                    }, (0, j.__)("Get More Credits", "ultimate-addons-for-gutenberg"), function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return (0, e.createElement)("svg", {
                            width: c,
                            height: c,
                            viewBox: "0 0 12 12",
                            fill: m,
                            ...t
                        }, (0, e.createElement)("path", {
                            d: "M5 3H3C2.44772 3 2 3.44772 2 4V9C2 9.55228 2.44772 10 3 10H8C8.55228 10 9 9.55228 9 9V7M7 2H10M10 2V5M10 2L5 7",
                            ...v,
                            ...n
                        }))
                    }({
                        width: 12,
                        height: 12
                    })))), (0, e.createElement)("br", null), x ? (0, e.createElement)((() => (0, e.createElement)("div", {
                        className: N(["zip-ai__progress-wrapper", oe])
                    }, (0, e.createElement)("div", {
                        className: "zip-ai__progress-bar"
                    }, (0, e.createElement)("div", {
                        className: N(["zip-ai__progress-bar--progress", `zip-ai__progress-bar--${ie}`]),
                        style: {
                            width: `${ne?.percentage||0}%`
                        }
                    })), (0, e.createElement)("div", {
                        className: "zip-ai__progress-details"
                    }, (0, e.createElement)("div", {
                        className: "zip-ai__progress-details--left"
                    }, H(ne ? .used || 0)), (0, e.createElement)("div", {
                        className: "zip-ai__progress-details--right"
                    }, (0, j.sprintf)(
                        // translators: %s the total amount of credits to this account, with comma separators.
                        (0, j.__)("of %s", "ultimate-addons-for-gutenberg"), H(ne ? .total || 0)))))), null) : (0, e.createElement)("button", {
                        className: "zip-ai-sidebar__header--user-popup-button",
                        onClick: e => Ci(e, {
                            setIsAuthorized: k,
                            setButtonLabel: ce,
                            setSubHeading: de,
                            setUserTeamName: M,
                            setCreditDetails: re,
                            setCreditClass: ae,
                            buttonLabels: {
                                progress: (0, j.__)("Logging in", "ultimate-addons-for-gutenberg"),
                                success: (0, j.__)("Logged in", "ultimate-addons-for-gutenberg"),
                                error: (0, j.__)("Login", "ultimate-addons-for-gutenberg")
                            },
                            subHeadings: {
                                progressWithLink: (0, j.sprintf)(
                                    // Translators: %1$s is the opening link tag, %2$s is the closing link tag.
                                    (0, j.__)("Continue logging in from %1$shere%2$s.", "ultimate-addons-for-gutenberg"), '<a class="zip-ai-sidebar__header--user-popup-inline-link" href="javascript:void(0);">', "</a>"),
                                success: (0, j.__)("Logged in!", "ultimate-addons-for-gutenberg"),
                                error: (0, j.__)("Something went wrong, please login again.", "ultimate-addons-for-gutenberg")
                            }
                        })
                    }, le)))), x ? (0, e.createElement)(e.Fragment, null, (0, e.createElement)(wi, {
                        generationRef: g,
                        currentText: l,
                        updateContent: s,
                        closeModal: ge,
                        generating: V,
                        setGenerating: F,
                        aiResponseError: L,
                        setAiResponseError: T,
                        userInput: I,
                        setUserInput: P,
                        refreshFilters: R,
                        setRefreshFilters: A,
                        setValidForSaving: W
                    }), !(l || E ? .length) && (0, e.createElement)(si, {
                        currentText: l,
                        generationRef: g,
                        setUserInput: P,
                        refreshFilters: R,
                        setRefreshFilters: A,
                        generating: V,
                        setGenerating: F,
                        setAiResponseError: T,
                        setValidForSaving: W
                    }), (0, e.createElement)(_i, {
                        chatLogId: r,
                        isAuthorized: x,
                        generationRef: g,
                        currentText: l,
                        userInput: I,
                        setUserInput: P,
                        setRefreshFilters: A,
                        generating: V,
                        setGenerating: F,
                        setAiResponseError: T,
                        validForSaving: B,
                        setValidForSaving: W
                    })) : (0, e.createElement)(Ei, {
                        setIsAuthorized: k,
                        setUserTeamName: M,
                        setCreditDetails: re,
                        setCreditClass: ae
                    }))))
                };
            const ki = document.querySelector("#zip-ai-sidebar"),
                Si = document.querySelector("#zip-ai-sidebar-admin-trigger"),
                Mi = document.querySelector("#wp-admin-bar-zip-ai-assistant"),
                Oi = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4294967295;
                    return Math.floor(Math.random() * (t - e + 1)) + e
                }(),
                zi = {
                    fill: "#000"
                },
                Li = t => {
                    const {
                        onChange: n,
                        value: r = {
                            text: ""
                        },
                        isRichText: o = !0,
                        isAdmin: s = !1,
                        setAdminIsOpen: l = null
                    } = t, [c, u] = (0, e.useState)(!1), [d, p] = (0, e.useState)(!1), [h, f] = (0, e.useState)("not_set"), m = (0, e.useRef)(null), [g, v] = (0, e.useState)(!1);
                    (0, e.useEffect)((() => {
                        o && !s || y()
                    }), []), (0, e.useEffect)((() => {
                        if (c && (document.body.style.overflow = "hidden"), o && !s && !c && d) {
                            const e = { ...r
                            };
                            n(e), p(!1)
                        }
                        const t = setTimeout((() => {
                            var t;
                            c && (m.current = null !== (t = m.current) && void 0 !== t ? t : (0, e.createRoot)(s ? Si : ki), m.current ? .render((0, e.createElement)(xi, {
                                chatLogId: Oi,
                                setIsOpen: u,
                                setAdminIsOpen: l,
                                isSidebar: !o && !s,
                                updateContent: o && !s ? b : null,
                                currentText: C(r.text),
                                autoRun: h,
                                setAutoRun: f
                            })))
                        }));
                        return () => {
                            document.body.style.overflow = "", clearTimeout(t);
                            const e = m.current;
                            m.current = void 0, setTimeout((() => {
                                e ? .unmount()
                            }))
                        }
                    }), [c]);
                    const b = e => {
                            let t = { ...r
                            };
                            t = (0, F.replace)(r, r.text, e), t.start = 0, t.end = 0, n(t)
                        },
                        y = e => {
                            u(!0), "" !== C(r.text) && e && "open" !== e && "not_set" !== e && f(e), v(!1)
                        },
                        C = e => {
                            if (s && !o) return document.getSelection().toString().trim().replace(/\n$/, "") || "";
                            if (!o) return "";
                            if (["Your Attractive Heading", "Engage Your Visitors"].includes(e)) return "";
                            const t = { ...r
                            };
                            return 0 === t.start && t.end === t.text.length || d || (n(t), p(!0)), e
                        },
                        w = zip_ai_react ? .zip_ai_assistant_options ? .last_used ? .changeTone || void 0;
                    return o ? (0, e.createElement)(i.BlockControls, null, (0, e.createElement)(a.Toolbar, {
                        className: "zip-ai-toolbar",
                        label: "Zip AI"
                    }, (0, e.createElement)(a.ToolbarButton, {
                        onClick: () => v(!g),
                        icon: _(),
                        label: (0, j.__)("AI Assistant", "ultimate-addons-for-gutenberg")
                    }), g && (0, e.createElement)((() => (0, e.createElement)(e.Fragment, null, (0, e.createElement)(a.Popover, {
                        position: "bottom center",
                        focusOnMount: "container",
                        className: "zip-ai-popover"
                    }, (0, e.createElement)(a.MenuItem, {
                        iconPosition: "left",
                        icon: E(zi),
                        onClick: () => y("fix_grammar")
                    }, (0, j.__)("Fix Grammar", "ultimate-addons-for-gutenberg")), (0, e.createElement)(a.MenuItem, {
                        iconPosition: "left",
                        icon: O(zi),
                        onClick: () => y("rephrase")
                    }, (0, j.__)("Rephrase", "ultimate-addons-for-gutenberg")), (0, e.createElement)(a.MenuItem, {
                        iconPosition: "left",
                        icon: T(zi),
                        onClick: () => y("make_shorter")
                    }, (0, j.__)("Make Shorter", "ultimate-addons-for-gutenberg")), (0, e.createElement)(a.MenuItem, {
                        iconPosition: "left",
                        icon: L(zi),
                        onClick: () => y("make_longer")
                    }, (0, j.__)("Make Longer", "ultimate-addons-for-gutenberg")), void 0 !== w && (0, e.createElement)(a.MenuItem, {
                        iconPosition: "left",
                        icon: R(zi),
                        onClick: () => y("change_tone")
                    }, (0, j.sprintf)( /* translators: %s: lastUsedTone label */
                        (0, j.__)("Change Tone to %s", "ultimate-addons-for-gutenberg"), w.label)), (0, e.createElement)(a.MenuItem, {
                        iconPosition: "left",
                        icon: M(zi),
                        onClick: () => y("open")
                    }, (0, j.__)("Something Else", "ultimate-addons-for-gutenberg"))))), null))) : null
                },
                Ti = () => {
                    const t = "widgets" !== zip_ai_react.is_widgets_page ? window ? .wp ? .editPost : null;
                    if (!t || !t ? .PluginSidebar || !t ? .PluginSidebarMoreMenuItem) return null;
                    const n = t.PluginSidebar,
                        r = t.PluginSidebarMoreMenuItem;
                    return "function" != typeof r || "function" != typeof n ? null : (0, e.createElement)(e.Fragment, null, (0, e.createElement)(r, {
                        target: "zip-ai-page-settings-panel",
                        icon: y()
                    }, (0, j.__)("AI Assistant", "ultimate-addons-for-gutenberg")), (0, e.createElement)(n, {
                        isPinnable: !0,
                        icon: y(),
                        name: "zip-ai-page-settings-panel",
                        title: (0, j.__)("AI Assistant", "ultimate-addons-for-gutenberg"),
                        className: "zip-ai-sidebar"
                    }, (0, e.createElement)(Li, {
                        isRichText: !1
                    })))
                },
                Ii = () => {
                    const [t, n] = (0, e.useState)(!1);
                    return (0, e.useEffect)((() => {
                        Mi.addEventListener("click", (e => {
                            e.preventDefault(), n(!0)
                        }))
                    }), []), t ? (0, e.createElement)(Li, {
                        isRichText: !1,
                        isAdmin: !0,
                        setAdminIsOpen: n
                    }) : null
                };
            if (zip_ai_react ? .is_ai_assistant_enabled) {
                zip_ai_react ? .is_customize_preview || (0, F.registerFormatType)("zipai/chat", {
                    tagName: "span",
                    className: "zip-ai-highlighted",
                    edit: Li,
                    title: (0, j.__)("AI Assistant", "ultimate-addons-for-gutenberg")
                }), (0, t.select)("core/editor") && (0, r.registerPlugin)("zip-ai-page-level-settings", {
                    render: Ti
                }), Si && Mi && (0, e.createRoot)(Si).render((0, e.createElement)(Ii, null));
                const n = () => {
                    localStorage.removeItem(`zipAiPreservedChatlog${Oi}`)
                };
                window.addEventListener("beforeunload", n)
            }
        }()
}();