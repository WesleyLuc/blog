import {  createRouter ,createWebHistory} from "vue-router";
import login from "../components/login.vue"
import post from "../components/post.vue";

const routes = [
        {
        path: "/login",
        name: "login",
        component:login,
        },
        {
        path: "/",
        name: "post",
        component:post,
        }
    ];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;