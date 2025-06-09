import { router } from './router.js'
import { floatMainNavbar } from './components/common.js'

document.addEventListener( "DOMContentLoaded", () =>
{
  if ( !window.location.hash ) window.location.hash = "#/home"
  router()
  floater()

  window.addEventListener( "hashchange", () =>
  {
    router()
    floater()
  } )

} )

const floater = () =>
{
  let floatBar = document.querySelector( ".floatBar" )
  let showFloatBar = document.querySelector( ".showFloatBar" )

  if ( showFloatBar )
  {
    showFloatBar.addEventListener( "click", () =>
    {
      floatBar.classList.toggle( "hidden" )
      showFloatBar.classList.toggle( "rotate-180" )
      const { html: floatHtml } = floatMainNavbar()
      floatBar.innerHTML = floatHtml

      let floatLinks = document.querySelectorAll( ".floatLinks" )
      floatLinks.forEach( float =>
      {
        float.addEventListener( "click", () =>
        {
          floatBar.classList.add( "hidden" )
          showFloatBar.classList.remove( "rotate-180" )
        } )
      } )
    } )
  }

}

export const highlightCurrentLink = () =>
{
  let currentPage = window.location.hash
  let siteLinks = document.querySelectorAll( ".site-link" )
  let floatLinks = document.querySelectorAll( ".floatLinks" )
  let pageName = document.querySelector( ".pageName" )

  let allLinks = [ ...siteLinks, ...floatLinks ]

  allLinks.forEach( link =>
  {
    link.classList.remove( "text-white", "border-b-4", "border-double", "border-white" )
  } )

  allLinks.forEach( link =>
  {
    if ( link.getAttribute( "href" ) === currentPage && pageName )
    {
      pageName.textContent = link.dataset.link || "Untitled"
      link.classList.add( "text-white", "border-b-4", "border-double", "border-white" )
    }

  } )
}
