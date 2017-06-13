(function(params) {

    var server = Cla.ui.ciCombo({
        name: 'server',
        class: 'TomcatInstance',
        fieldLabel: _('Instance'),
        value: params.data.instance || '',
        allowBlank: false,
        with_vars: 1
    });

    var warPath = Cla.ui.textField({
        name: 'warPath',
        fieldLabel: 'WAR file path',
        value: params.data.warPath || '',
        allowBlank: false
    });

    var appPath = Cla.ui.textField({
        name: 'appPath',
        fieldLabel: 'Application path',
        value: params.data.appPath || '',
        allowBlank: false
    });

    var update = Cla.ui.checkBox({
        name: 'update',
        fieldLabel: 'Force update?',
        checked: params.data.update || false,
    });

    return [
        server,
        warPath,
        appPath,
        update
    ]
})