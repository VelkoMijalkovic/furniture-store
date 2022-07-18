import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpinner, faRefresh, faArrowRight, faPlane, faPaperPlane, faBars, faSearch, faTimes, faShoppingCart, faUser, faAngleRight, faAngleLeft, faEye, faStar, faHeart } from "@fortawesome/free-solid-svg-icons";


library.add(faSpinner, faRefresh, faArrowRight, faPlane, faPaperPlane, faBars, faSearch, faTimes, faShoppingCart, faUser, faAngleRight, faAngleLeft, faEye, faStar, faHeart);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");

