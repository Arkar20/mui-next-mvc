import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import reducer from "./modules";

const debug = process.env.NODE_ENV === "development";

const makeStore = () => createStore(reducer);

const wrapper = createWrapper(makeStore, { debug });

const ReduxStore = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(ReduxStore);
