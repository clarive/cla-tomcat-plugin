var reg = require("cla/reg");

reg.register('service.tomcat.deploy', {
    name: 'Deploy WAR to Tomcat',
    icon: '/plugin/cla-tomcat-plugin/icon/tomcat.svg',
    form: '/plugin/cla-tomcat-plugin/form/tomcat-deploy.js',

    handler: function(ctx, config) {

        var ci = require("cla/ci");
        var log = require('cla/log');
        var web = require("cla/web");
        var util = require("cla/util");

        var update = config.update == '1' ? 'true' : 'false';
        var timeout = config.timeout || 10;
        var message = '';

        var tomcatServer = ci.findOne({
            mid: config.server + ''
        });

        if (!tomcatServer){
            log.fatal("Server CI doesn't exist");
        }

        var BASE_URL = tomcatServer.url ;

        if ( tomcatServer.port ) {
            BASE_URL += ':' + tomcatServer.port;
        }

        var deployUrl = BASE_URL + "/manager/text/deploy?";

        deployUrl += "path=" + config.appPath;
        deployUrl += "&war=" + config.warPath;
        deployUrl += "&update=" + update;

        var agent = web.agent({
            auto_parse: 1,
            username: tomcatServer.userName,
            password: tomcatServer.password,
        });

        var executeDeploy = agent.get(
            deployUrl
        );

        if ( executeDeploy.status != '200' ) {
            message = "Error (" + executeDeploy.status + "): " + executeDeploy.reason;
            log.fatal(message);
        }

        message = executeDeploy.content + '';
        var failError = message.match('^FAIL');

        if ( failError ) {
            log.fatal(message);
        } else {
            log.info(message);
        }

        return message;
    }
});
