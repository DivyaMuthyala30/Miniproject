import {put,takeEvery} from 'redux-saga/effects';
import { LoaderTypes } from '../Actiontypes/Loader_types';
import {Dashboard_types} from '../Actiontypes/Dashboard_types';
import { Auth_types } from '../Actiontypes/Auth_types';
import axios from 'axios';

function* dashboardData() {
    yield put({ type: LoaderTypes.LOADER_START })

    try {
        const url = "https://reqres.in/api/users"
        const res = yield axios.get(url)
        yield put({ type: Dashboard_types.USER_DATA_REQUEST_SUCCESS, data: res.data.data })
        console.log('dash_saga', res.data.data)
    }
    catch (e) {

    }
    yield put({ type: LoaderTypes.LOADER_STOP });
}
function* Post({ data, callback }) {
    yield put({ type: LoaderTypes.LOADER_START });
    try {
        console.log("payload", data);
        const url = "https://reqres.in/api/users";
        // const url = `${process.env.REACT_APP_API_URL}/${URI.LOGIN}`;
        const res = yield axios.post(url, data);
        console.log("response", res.data);
        yield put({ type: Auth_types.POST_SUCCESS, data: res.data });
        callback();
    } catch (e) {
        callback(true);
    }
    yield put({ type: LoaderTypes.LOADER_STOP });
}
export default function* dashboardSaga() {
    yield takeEvery(Dashboard_types.USER_DATA_REQUEST, dashboardData);
    yield takeEvery(Auth_types.POST_REQUEST, Post);
}






