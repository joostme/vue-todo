import Vue from "vue";
import Router from "vue-router";
import TodoList from "@/components/TodoList";
import TodoDetail from "@/components/TodoDetail";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "",
            redirect: "/todos"
        },
        {
            path: "/todos",
            name: "TodoList",
            component: TodoList
        },
        {
            path: "/todos/:id",
            name: "TodoDetail",
            component: TodoDetail
        }
    ]
});