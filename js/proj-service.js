"use strict"

const gProjs = creatProjs()
console.log(gProjs)

function creatProjs() {
    const projNames = ['touch-nums', 'in-picture', 'minesweeper', 'bookshop']

    const labels = [
        [`table`, `timer`, `radio-buttons`],
        [`sound`, `render-img`, `objects`],
        [`localstorage`, `user-conect`, `timer`, `radio-buttons`, `matrix`, `table`],
        [`localstorage`, `img-transform`, `CRUD`, `list`]
    ]

    const urls = [
        `https://amir-yakubov.github.io/touch-nums/`,
        `https://amir-yakubov.github.io/in-picture-game/`,
        `https://amir-yakubov.github.io/Minesweeper/`,
        `https://amir-yakubov.github.io/CRUD-List/`
    ]

    const titles = [
        `Touch-nums is like touching happiness`,
        `You better know code because the prizes are crazy!`,
        `A minefield ahead! Sharpen your senses and stay alive`,
        `I take you to the book shop..`
    ]

    const publishedAts = [`1669048151000`, `1669307351000`, `1669652951000`, `1670171351000`]

    const descs = [
        `Language: JS CSS HTML 
    Among the first projects I combined the languages ​​into a game, 
    as you can see the level of code and design is very basic, 
    but I am very proud of this project and feel that it was significant for me.`,

        `Language: JS CSS HTML
    As part of the Coding Academy bootcamp, we were given a task to make a game "in the picture" 
    and I said let's make it interesting and bring back to life the iconic game "Who Wants to Be a Millionaire" 
    along with another leap forward in JS and CSS such as adding sound, correct rendering and sharpening the design`,

        `Language: JS CSS HTML
    My first official project!
    You can see a significant leap forward in JS such as the division of functions into DOM and SERVICE files, 
    complex functions with different conditions, working with a timer, saving and retrieving from storage, 
    working with a matrix and more. A very significant project for my development`,

        `Language: JS CSS HTML
    My last project, the goal of the project was to realize CRUD capabilities
    create, read, update and delete.
    And in this case I also combined a list
    So this is CRUDL, all the information is handled in front of the storage and allows 
    perfect dynamism on the part of the client and control of the database, 
    for the first time search capabilities, dynamic sorting, a beautiful model that updates on changes, 
    a design that is adapted to mobile, a partial display and division into pages have been combined and more`
    ]

    var projs = []
    var proj = {}
    for (var i = 0; i < 4; i++) {
        proj = {
            id: projNames[i].toLowerCase(),
            name: projNames[i],
            title: titles[i],
            desc: descs[i],
            url: urls[i],
            publishedAt: publishedAts[i],
            labels: labels[i]
        }
        projs.push(proj)
    }
    return projs
}

function getProjs() {
    return gProjs
}

function getProjByName(projName) {
    const resProj = gProjs.find(proj => proj.name === projName)
    return resProj
}