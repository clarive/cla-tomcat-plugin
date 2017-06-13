(function(params) {

    return [
        Cla.ui.textField({
            name: 'url',
            fieldLabel: 'Server URL',
            allowBlank: false
        }),
        Cla.ui.numberField({
            name: 'port',
            fieldLabel: 'Port',
            allowBlank: true,
            maxValue: '99999',
            type: 'int',
            vtype:  'port'
        }),
        Cla.ui.textField({
            name: 'userName',
            fieldLabel: 'Username',
            allowBlank: false
        }),
        Cla.ui.textField({
            name: 'password',
            fieldLabel: 'Password',
            inputType:'password',
            allowBlank: false
        })
    ]
})