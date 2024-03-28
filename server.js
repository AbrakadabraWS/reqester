import express from 'express';
import { nextAvailable } from 'node-port-check';
import bodyParser from 'body-parser';
import { PORT, INTERFACE } from './server.config.js';
import { reqestsGET } from './reqesrs/get.js';
import { reqestsPOST } from './reqesrs/post.js';
import MagicNetwork from './MagicNetwork/MagicNetwork.js';

const app = express();
const interfaceInfo = MagicNetwork.getInfoByIntIPv4(INTERFACE);
let IPaddress = '127.0.0.1';
console.log(interfaceInfo)
console.log(MagicNetwork.getAllInfo())
// console.log(interfaceInfo?.address)
if (interfaceInfo.length > 0) {

    if (interfaceInfo > 1) {
        console.log(`Обнаружено несколько IP у интерфейса ${INTERFACE}.`);
        if (!IP_NUMBER) {
            console.log(`Автоматически выбран IP ${interfaceInfo[0].address}`);
            IPaddress = interfaceInfo[0].address;
        }
        else {
            console.log(`IP интерфейса ${INTERFACE}: ${interfaceInfo[IP_NUMBER].address}`);
            IPaddress = interfaceInfo[IP_NUMBER].address;
        }
    }
    else {
        console.log(`IP интерфейса ${INTERFACE}: ${interfaceInfo[0].address}`);
        IPaddress = interfaceInfo[0].address;
    }
    //делаем наш парсинг в формате json
    app.use(bodyParser.json())
    // парсит запросы по типу: application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));

    reqestsGET(app);

    reqestsPOST(app);

    // app.

    // установить порт, и слушать запросы
    console.log('nextAvailable')
    IPaddress = '127.0.0.1'
    nextAvailable(PORT, IPaddress).then(
        (availablePort) => {
            console.log(availablePort)
            if (availablePort !== PORT) {
                console.warn(`Порт ${PORT} занят другим процессом!`);
            }

            app.listen(availablePort, IPaddress, () => {
                console.log(`Сервер запущен на ${availablePort} порту.\n Перейти на страницу можно по ссылке: http://${IPaddress}:${availablePort}/`);
            });
        }
    )

}
else {
    console.error('Сервер не был запущен! Не верно указан интерфейс в конфигурации сервера!');
}
