// Importing views
import { Home } from './views/home.js'

import { Habits } from './views/habits.js'
import { NewHabit } from "./views/habits/newHabit.js"
import { HabitHistory } from "./views/habits/history.js"

// Expense Components
import { NewExpense } from './views/expenses/newExpense.js'
import { Ledger } from './views/expenses/ledger.js'
import { Stats } from './views/expenses/stats.js'
import { BaseAmount } from './views/expenses/baseAmount.js'

// Counts Components
import { Counts } from './views/counts.js'
import { NewCount } from './views/counts/newCount.js'
import { History } from './views/counts/history.js'

// Common Components 
import { mainNavbar, expensesNavbar, siteHeader, countsNavbar, habitsNavbar } from './components/common.js'
import { highlightCurrentLink } from './app.js'

// Listing the routes
const routes = {
  '/home': Home,

  '/counts': Counts,
  '/counts/newCount': NewCount,
  '/counts/history': History,

  '/habits': Habits,
  '/habits/newHabit': NewHabit,
  '/habits/history': HabitHistory,

  '/expenses/newExpense': NewExpense,
  '/expenses/ledger': Ledger,
  '/expenses/stats': Stats,
  '/expenses/baseAmount': BaseAmount
}

export const router = () => {
  const hash = window.location.hash || "#/home"
  const route = hash.replace("#", "")
  const view = routes[ route ]

  const navbarContainer = document.querySelector(".navbarContainer")
  const contentContainer = document.querySelector(".contentContainer")
  const headerContainer = document.querySelector(".headerContainer")

  if (view) {
    const { html: viewHtml, init: viewInit } = view()
    contentContainer.innerHTML = viewHtml

    if (route.startsWith("/expenses")) {
      const { html: expHtml, init: expInit } = expensesNavbar()
      navbarContainer.innerHTML = expHtml
      if (typeof expInit === 'function') expInit()
    }

    else if (route.startsWith("/counts")) {
      const { html: countHtml, init: countInit } = countsNavbar()
      navbarContainer.innerHTML = countHtml
      if (typeof countInit === 'function') countInit()
    }

    else if (route.startsWith("/habits")) {
      const { html: habitsHtml, init: habitsInit } = habitsNavbar()
      navbarContainer.innerHTML = habitsHtml
      if (typeof habitsInit === "function") habitsInit()
    }

    else {
      const { html: navbarHtml, init: navbarInit } = mainNavbar()
      navbarContainer.innerHTML = navbarHtml
      if (typeof navbarInit === "function") navbarInit()
    }

    requestAnimationFrame(highlightCurrentLink)

    const { html: headerHtml } = siteHeader()
    headerContainer.innerHTML = headerHtml

    requestAnimationFrame(() => {
      if (typeof viewInit === 'function') viewInit()
    })
  }
  else {
    contentContainer.innerHTML = `<h1 class="text-rose-600"> Path not found. </h1>`
  }

}