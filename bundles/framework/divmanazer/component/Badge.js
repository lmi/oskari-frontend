/**
 * @class Oskari.userinterface.component.Badge
 */
Oskari.clazz
    .define('Oskari.userinterface.component.Badge',

        /**
         * @method create called automatically on construction
         * @static
         *
         */

        function () {
            this.compiledTemplates = {};
            this.compileTemplates();
            this.ui = null;
            this.container = null;
            this.compileTemplates();
        }, {
            templates: {
                "default": '<span class="oskari-badge"></span>',
                "success": '<span class="oskari-badge oskari-badge-success"></span>',
                "warning": '<span class="oskari-badge oskari-badge-warning"></span>',
                "important": '<span class="oskari-badge oskari-badge-important"></span>',
                "info": '<span class="oskari-badge oskari-badge-info"></span>',
                "inverse": '<span class="oskari-badge oskari-badge-inverse"></span>',
                "oskari":'<span class="oskari-badge oskari-badge-oskari"></span>'
            },
            compileTemplates: function () {
                var p;
                for (p in this.templates) {
                    if (this.templates.hasOwnProperty(p)) {
                        this.compiledTemplates[p] = jQuery(this.templates[p]);
                    }
                }
            },
            insertTo: function (container) {
                this.container = container;
            },
            setContent: function (pContent, status) {
                if (this.ui) {
                    this.ui.remove();
                    this.ui = null;
                }

                var txtspan = this.compiledTemplates[status || 'default'].clone();
                txtspan.append(pContent);
                this.container.append(txtspan);
                this.ui = txtspan;
                this.calculateRightFloat();
            },
            calculateRightFloat: function () {
                var parent = this.container.parent();
                var children = parent.children();
                for ( var i = 0; i < children.length; i++ ) {
                    var width = jQuery(children[i]).width()
                    console.log(width)
                }
            },
            hide: function () {
                if (this.ui) {
                    this.ui.remove();
                    this.ui = null;
                }
            }
        });
