(function(params) {

    return [
        Cla.ui.ciCombo({
            name: 'server',
            class: 'generic_server',
            fieldLabel: _('Server'),
            value: params.rec.server || '',
            allowBlank: false
        }),
        Cla.ui.textField({
            name: 'url',
            fieldLabel: _('Server URL'),
            allowBlank: false
        }),
        Cla.ui.numberField({
            name: 'port',
            fieldLabel: _('Port'),
            allowBlank: true,
            maxValue: '99999',
            type: 'int',
            vtype:  'port'
        }),
        Cla.ui.textField({
            name: 'userName',
            fieldLabel: _('Username'),
            allowBlank: false
        }),
        Cla.ui.textField({
            name: 'password',
            fieldLabel: _('Password'),
            inputType:'password',
            allowBlank: false
        })
    ]
})