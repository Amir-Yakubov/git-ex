"use strict"

$(document).ready(init)

function init() {
    console.log('Started...')
    renderProj()
}

function renderProj() {
    const projs = getProjs()
    var projHtmlStr = ''
    // ${JSON.stringify(proj)}
    projs.forEach(proj => {
        var jsonProj = JSON.stringify(proj)
        projHtmlStr +=
            `<div class="col-md-6 col-sm-6 portfolio-item">
              <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="onClickPortfolio('${proj.name}')">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
           <img class="img-fluid" src="img/portfolio/${proj.name}.jpg" alt="">
          </a>
            <div class="portfolio-caption">
             <h4>${proj.name}</h4>
              <p class="text-muted">${proj.title}</p>
            </div>
         </div>`
    })
    // projHtmlStr = projHtmlStr.join('')
    $('.portfolio').html(projHtmlStr)
}

function renderModal(proj) {
    // the function gets the clicked item and use his proj objct

    var str = `
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.title}</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.name}-full.jpg" alt="">
                <p>${proj.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${proj.publishedAt}</li>
                  <li>Url: ${proj.url}</li>
                  <li>Labels: ${proj.labels}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
    `
    $('.modal-body').html(str)
}

function onClickPortfolio(projName) {
    console.log(projName)
    const proj = getProjByName(projName)
    renderModal(proj)
}


