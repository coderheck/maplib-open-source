console.log("WAR")

function WAR () {

    const NavBarItems = document.querySelectorAll("a")
    console.log(document.querySelectorAll("a"))

    for (i = 0; i < 8; i++) {

        if (NavBarItems[i].innerHTML == 'GitHub<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>') {

            console.log("fucking the website WOOOOOOOOO")
            NavBarItems[i].innerHTML = ''
        }
    }
}

setTimeout(WAR, 5000)