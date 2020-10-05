import moment from 'moment';

export default {
    install(Vue) {
        Vue.filter('expiration', function (value, defaultVal) {

            var date = moment(value);
            if (!value || !date.isValid()) {
                return defaultVal;
            } else {
                var prefix = date.valueOf() - Date.now() > 0 ? 'Expires ' : 'Expired ';
                return prefix + date.fromNow();
            }
        })
        Vue.filter('distance', function (p1, p2) {

            if (!p1 || !p2 || !angular.isArray(p1)) {
                return '';
            }

            var dist = +(haversine({
                latitude: p1[1],
                longitude: p1[0]
            }, p2, {
                unit: 'mile'
            }));

            if (dist >= 1) {
                return Math.round(dist) + 'mi';
            } else if (dist > 0.5) {
                return '1mi'
            } else if (dist > 0.25) {
                return '1/2mi'
            } else {
                return '< 1/4mi';
            }
        })
        Vue.filter('expiration', function (value, defaultVal) {

            var date = moment(value);
            if (!value || !date.isValid()) {
                return defaultVal;
            } else {
                var prefix = date.valueOf() - Date.now() > 0 ? 'Expires ' : 'Expired ';
                return prefix + date.fromNow();
            }

        })
        Vue.filter('since', function (value, defaultVal, prefix) {

            prefix = prefix || '';
            var date = moment(value);
            if (!value || !date.isValid()) {
                return defaultVal;
            } else {
                return prefix + ' ' + date.fromNow();
            }

        })
        Vue.filter('moment', function (input, format) {

            if (!input) {
                return input;
            }

            format = format || 'M/DD/YYYY @ h:mma';
            return moment(input).format(format);

        })
        Vue.filter('tinyDate', function (input) {

            if (!input) {
                return input;
            }

            var date = new Date(input);
            var now = new Date();
            var diff = Math.floor((now.getTime() - date) / 1000);

            if (diff < 60) {
                return "Just Now";
            }
            if (diff < 3600) {
                return Math.floor(diff / 60) + "m ago";
            }
            if (diff < 86400) {
                return Math.round(diff / 3600) + "h ago";
            }
            if (diff < 86400 * 31) {
                return Math.round(diff / 86400) + 'd ago';
            }
            if (date.getYear() === now.getYear()) {
                return moment(date).format('MMM D');
            }

            return date.getFullYear();

        })

        Vue.filter('tinyNum', function (input) {
            return input||0;
        })
    }


}
