var reg = require("cla/reg");

reg.register('service.tomcat.deploy', {
    name: 'Deploy WAR to Tomcat',
    icon: '/plugin/cla-tomcat-plugin/icon/tomcat.svg',
    form: '/plugin/cla-tomcat-plugin/form/tomcat-deploy.js',

    handler: function(ctx, config) {

        var regRemote = require("cla/reg");
        var ci = require("cla/ci");
        var log = require('cla/log');
        var web = require("cla/web");
        var util = require("cla/util");
        var path = require("cla/path");

        var update = config.update == '1' ? 'true' : 'false';
        var timeout = config.timeout || 10;
        var message = '';

        var tomcatInstance = ci.findOne({
            mid: config.instance + ''
        });

        if (!tomcatInstance){
            log.fatal("Server CI doesn't exist");
        }

        var serverMid = tomcatInstance.server[0];

        var server = ci.findOne({
            mid: serverMid + ''
        });

        var remotePath = server.remote_temp || "/tmp";

        var remoteWarPath = path.join(remotePath, path.basename(config.warPath));

        regRemote.launch('service.fileman.ship', {
            name: 'Send WAR file',
            config: {
                server: serverMid,
                recursive: "0",
                local_mode: "local_files",
                local_path: config.warPath,
                exist_mode_local: "skip",
                rel_path: "file_only",
                remote_path: remotePath,
                exist_mode: "reship",
                backup_mode: "none",
                rollback_mode: "none",
                track_mode: "none",
                audit_tracked: "none",
                chown: "",
                chmod: "",
                max_transfer_chunk_size: "",
                copy_attrs: "0"
            }
        });

        var BASE_URL = tomcatInstance.url ;

        if ( tomcatInstance.port ) {
            BASE_URL += ':' + tomcatInstance.port;
        }

        var deployUrl = BASE_URL + "/manager/text/deploy?";

        deployUrl += "path=" + config.appPath;
        deployUrl += "&war=" + remoteWarPath;
        deployUrl += "&update=" + update;

        var agent = web.agent({
            auto_parse: 1,
            username: tomcatInstance.userName,
            password: tomcatInstance.password,
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
            log.info('Application deployed in <a target="_blank" href="' + BASE_URL + config.appPath + '">' + BASE_URL + config.appPath + '</a>');
        }

        return message;
    }
});
