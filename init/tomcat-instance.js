var ci = require("cla/ci");

ci.createRole("Tomcat");

ci.createClass("TomcatInstance", {
    form: '/plugin/cla-tomcat-plugin/form/tomcat-instance.js',
    icon: '/plugin/cla-tomcat-plugin/icon/tomcat.svg',
    roles: ["Tomcat"],
    has: {
        url: {
            is: "rw",
            isa: "Str",
            required: true
        },
        port: {
            is: "rw",
            isa: "Str",
            required: false
        },
        userName: {
            is: "rw",
            isa: "Str",
            required: true
        },
        password: {
            is: "rw",
            isa: "Str",
            required: true
        }
    }

});