import { router } from './router.js'

document.addEventListener( "DOMContentLoaded", () =>
{
  if ( !window.location.hash ) window.location.hash = "#/home"
  router()
  updatePageName()

  window.addEventListener( "hashchange", () =>
  {
    router()
    updatePageName()
  } )

} )

const updatePageName = () =>
{
  let currentPage = window.location.hash
  let siteLinks = document.querySelectorAll( ".site-link" )
  let pageName = document.querySelector( ".pageName" )
  siteLinks.forEach( link =>
  {
    if ( link.getAttribute( "href" ) === currentPage && pageName )
    {
      pageName.textContent = link.dataset.link || "Untitled"
    }

  } )
}