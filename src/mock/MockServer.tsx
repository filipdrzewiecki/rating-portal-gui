import AxiosMockAdapter from 'axios-mock-adapter';
import BackendServer from './BackendServer';

function mockData() {
    const mock = new AxiosMockAdapter(BackendServer);
    mock.onGet('/users').reply(200, [
        {"id": 1, "name": "Filip"},
        {"id": 2, "name": "Magda"},
        {"id": 3, "name": "Tadeusz"},
        {"id": 4, "name": "Lukasz"},
        {"id": 5, "name": "Jan"}
    ]);

    mock.onGet('/users/1').reply(200, {
        "name": "Filip",
        "surname": "Drzewiecki"
        });


    return (mock);
}

export default mockData;