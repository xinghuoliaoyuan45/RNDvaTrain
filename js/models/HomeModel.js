import {
    FETCH_HOME_NAME,
    SET_HOME_NAME,
} from '../constants/ActionTypes';


export default {
    namespace: 'home',
    state: {
        name: '马骁尧', // 名字
    },
    reducers: {
        /**
         * 处理同步的action
         */
        [SET_HOME_NAME](state, { payload: { name } }) {
            return { ...state, name };
        }
    },
    effects: {
        /**
         * 处理异步的action
         * 主要使用redux-saga
         * 语法就是 es6 generator
         */
            * [FETCH_HOME_NAME]({ payload }, { call, put, select }) {
            /**
             * call 调用自己定义的业务方法
             * put 发起action
             * select 选择某个namespace的state
             */
            const name = yield call(fetchHomeName);
            console.log(name);
            yield put({
                type: SET_HOME_NAME,
                payload: { name },
            })
        }
    },
}