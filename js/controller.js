"use strict"

$(document).ready(init)

function init() {
    console.log('Started...')
    renderProj()
    $('.contact-form').on('submit', function (event) {
        onSubmitContactForm(this)
        event.preventDefault()
    })
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
    const year = proj.publishedAt.getFullYear()
    const month = proj.publishedAt.getMonth()
    var str = `
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.title}</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.name}-full.jpg" alt="">
                <p>${proj.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${month}/${year}</li>
                  <li>Url: <a href="${proj.url}">Github Pages</a></li>
                  <li>Labels: ${proj.labels.join(', ')}</li>
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

function onSubmitContactForm(ev) {
    var $elEmail = $('.email').val()
    var $elSubject = $('.subject').val()
    var $elMessage = $('.message').val()
    console.log($elEmail)
    console.log($elSubject)
    console.log($elMessage)

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=yakobub@gmail.com&su=${$elSubject}&body=from:${$elEmail} Msg:${$elMessage}`)
    $('.contact-form').reset()
}

