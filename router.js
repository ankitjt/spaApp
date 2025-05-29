// Importing views
import { Home } from './views/home.js'
import { Counts } from './views/counts.js'
import { Habits } from './views/habits.js'

import { Expenses } from './views/expenses.js'
import { NewExpense } from './views/expenses/newExpense.js'
import { Ledger } from './views/expenses/ledger.js'
import { Stats } from './views/expenses/stats.js'
import { BaseAmount } from './views/expenses/baseAmount.js'

// Importing Common Components
import { mainNavbar, expensesNavbar, siteHeader } from './components/common.js'

// Listing the routes
const routes = {
  '/home': Home,
  '/expenses': Expenses,
  '/counts': Counts,
  '/habits': Habits,

  '/expenses/newExpense': NewExpense,
  '/expenses/ledger': Ledger,
  '/expenses/stats': Stats,
  '/expenses/baseAmount': BaseAmount
}

export const router = () =>
{
  const hash = window.location.hash || "#/home"
  const route = hash.replace( "#", "" )
  const view = routes[ route ]

  const navbarContainer = document.querySelector( ".navbarContainer" )
  const contentContainer = document.querySelector( ".contentContainer" )
  const headerContainer = document.querySelector( ".headerContainer" )

  if ( view )
  {
    const { html: viewHtml, init: viewInit } = view()
    contentContainer.innerHTML = viewHtml

    if ( route.startsWith( "/expenses" ) )
    {
      const { html: expHtml, init: expInit } = expensesNavbar()
      navbarContainer.innerHTML = expHtml
      if ( typeof expInit === 'function' ) expInit()
    }
    else
    {
      const { html: navbarHtml, init: navbarInit } = mainNavbar()
      navbarContainer.innerHTML = navbarHtml
      if ( typeof navbarInit === "function" ) navbarInit()
    }

    const { html: headerHtml } = siteHeader()
    headerContainer.innerHTML = headerHtml

    requestAnimationFrame( () =>
    {
      if ( typeof viewInit === 'function' ) viewInit()
    } )
  }
  else
  {
    contentContainer.innerHTML = `<h1 class="text-rose-600"> Path not found. </h1>`
  }

}