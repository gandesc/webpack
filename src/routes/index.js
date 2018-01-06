export default [
    {
        path: '/accounts',
        name: 'accounts',
        component: () => import('@/pages/accounts/Accounts'),
        redirect: '/accounts/information',
        children: [
            {
                path: 'information',
                name: 'accounts.information',
                component: () => import('@/pages/accounts/Information')
            },
            {
                path: 'following',
                name: 'accounts.following',
                component: () => import('@/pages/accounts/Following')
            },
            {
                path: 'posts',
                name: 'accounts.posts',
                component: () => import('@/pages/accounts/Posts')
            },
        ]
    },
    {
        path: '/posts',
        name: 'posts.index',
        component: () => import('@/pages/posts/Index')
    },
    {
        path: '/posts/:id',
        name: 'posts.show',
        component: () => import('@/pages/posts/Show'),
        props: true //send parameters as properties
    },
    {
        path: '/todos',
        name: 'todos.index',
        component: () => import('@/pages/todos/Todos')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/Login')
    },
    {
        path:'/home',
        name: 'home',
        component: () => import('@/pages/Home')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/pages/Contact')
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/*',
        redirect: '/home'
    }
];