export const navlinks = [
    {
        text: "About Dogland",
        href: "/about",
        show: "both"
    },
    {
        text: "Dogs",
        href: "/user/:id/dogs",
        show: "loggedIn"
    },
    {
        text: "Trainers",
        href: "/trainers",
        show: "loggedIn"
    },
    {
        text: "Courses",
        href: "/courses",
        show: "loggedIn"
    },
    {
        text: "Tricks",
        href: "/tricks",
        show: "loggedIn"
    },
    {
        text: "Account",
        href: "/users/:id/profile",
        show: "loggedIn"
    },
    {
        text: "Login/Signup",
        href: "/login",
        show: "loggedOut"
    },
    {
        text: "Logout",
        href: "/logout",
        show: "loggedIn"
    }
]

export const BASE_URL = "http://localhost:3000"