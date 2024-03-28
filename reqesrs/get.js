export const reqestsGET = (app) => {
    //  простой response - request
    app.get('/', (req, res) => {
        res.json({
            message: 'Это ответ на GET запрос.',
        });
    });

    // Приведенный ниже путь маршрута сопоставляет acd и abcd.
    app.get('/ab?cd', function (req, res) {

        res.json({
            message: 'Это ответ на GET запрос. (ab?cd сопоставляется с acd или abcd)',
        });
    });

    // Этот путь маршрута сопоставляет abcd, abbcd, abbbcd и т.д.
    app.get('/ab+cd', function (req, res) {
        res.json({
            message: 'Это ответ на GET запрос. (ab+cd сопоставляется с abcd, abbcd, abbbcd и т.д.)',
        });
    });

    // Этот путь маршрута сопоставляет abcd, abxcd, abRABDOMcd, ab123cd и т.д.
    app.get('/ab*cd', function (req, res) {
        res.json({
            message: 'Это ответ на GET запрос. (ab*cd сопоставляется с abcd, abxcd, abRABDOMcd, ab123cd и т.д.)',
        });
    });

    // Данный путь маршрута сопоставляет /abe и /abcde.
    app.get('/ab(cd)?e', function (req, res) {
        res.json({
            message: 'Это ответ на GET запрос. (ab(cd)?e сопоставляется с /abe или /abcde)',
        });
    });

    // Данный маршрут сопоставляет butterfly и dragonfly, но не butterflyman, dragonfly man и т.д.
    app.get(/.*fly$/, function (req, res) {
        res.json({
            message: 'Это ответ на GET запрос. (/.*fly$/ сопоставляется с butterfly или dragonfly, но не butterflyman, dragonfly man и т.д.)',
        });
        res.send('/.*fly$/');
    });

}
