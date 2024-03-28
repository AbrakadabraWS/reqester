export const reqestsPOST = (app) => {
    // Обработчик простого POST запроса
    app.post('/post', (req, res) => {
        console.log(req)
        console.log(res)
        res.json({
            message: 'Это ответ на POST запрос.',
            body: req.body,
        })
    });

    // Обработка POST запроса с ID
    app.post('/post/:id', (req, res) => {
        console.log(req)
        console.log(res)
        res.json({
            message: 'Это ответ на POST+ID запрос.',
            id: req.params.id,
            body: req.body,
        })
    });

}
