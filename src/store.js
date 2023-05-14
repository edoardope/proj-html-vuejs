import { reactive } from 'vue'

export const store = reactive({
    NavOptions: [
        {
            name: "HOME",
            url: "/home"
        },
        {
            name: "PAGES",
            url: "/pages"
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio"
        },
        {
            name: "BLOG",
            url: "/blog"
        },
        {
            name: "SHOP",
            url: "/shop"
        },
        {
            name: "ELEMENTS",
            url: "/elements"
        }
    ]
});