import reportWebVitals from "./reportWebVitals";
import state from "./components/redux/state";
import { renderEntireTree } from "./render";

renderEntireTree(state);

reportWebVitals();
