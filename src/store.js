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
        },
    ],
    BlogPosts: [
        {
            giorno: "07",
            mese: "MAY",
            anno: "'19",
            img: "img/h-2-blog-img-1.jpg",
            text: "This way, loves: a detailed guide through new design",
            autore: "Emily Fields",
        },
        {
            giorno: "07",
            mese: "MAY",
            anno: "'19",
            img: "img/h-2-blog-img-2.jpg",
            text: "I try to give people a different way of looking art",
            autore: "Emily Fields",
        },
        {
            giorno: "07",
            mese: "MAY",
            anno: "'19",
            img: "img/h-2-blog-img-3.jpg",
            text: "Introduce Richard Laperrière of those amazing features",
            autore: "Emily Fields",
        },
    ]
});