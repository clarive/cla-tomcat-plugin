(function(params) {


    var instance = Cla.ui.ciCombo({
        name: 'instance',
        class: 'TomcatInstance',
        fieldLabel: _('Instance'),
        value: params.data.instance || '',
        allowBlank: false,
        with_vars: 1
    });

    var warPath = Cla.ui.textField({
        name: 'warPath',
        fieldLabel: _('WAR file path'),
        value: params.data.warPath || '',
        allowBlank: false
    });

    var appPath = Cla.ui.textField({
        name: 'appPath',
        fieldLabel: _('Application path'),
        value: params.data.appPath || '',
        allowBlank: false
    });

    var update = Cla.ui.checkBox({
        name: 'update',
        fieldLabel: _('Force update?'),
        checked: params.data.update || false,
    });

    return [
        instance,
        warPath,
        appPath,
        update
    ]
})