const { DateTime } = require('luxon');

module.exports = {
    format_datetime: (value) => {
        return DateTime.fromJSDate(value).toFormat("LLL d',' yyyy 'at' hh:mma");
    },
};
