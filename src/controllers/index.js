

var Controllers = {
    install: require('./install'),
    main: require('./main'),
    tickets: require('./tickets'),
    messages: require('./messages'),
    servers: require('./servers'),
    accounts: require('./accounts'),
    groups: require('./groups'),
    reports: require('./reports'),
    notices: require('./notices'),
    plugins: require('./plugins'),
    settings: require('./settings'),
    api: require('./api'),

    debug: require('./debug')
};

module.exports = Controllers;
