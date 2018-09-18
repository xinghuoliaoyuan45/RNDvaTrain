
export default {
  namespace: '{{=it.namespace}}',
  state: {

  },

  reducers: {
    test(state, { payload }) {
      return { ...state, a: '1' };
    },
  }
}
