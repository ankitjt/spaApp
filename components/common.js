export const mainNavbar = () => {
  const html = /* html */`
  <div class="flex items-center justify-between uppercase text-slate-600 h-full px-6 siteNavbar">
      <a href="#/home" class="site-link pb-1" data-link="home">Hm</a>
      <span class="rounded-full bg-slate-600 p-[2px]"></span>
      <a href="#/expenses/ledger" class="site-link pb-1" data-link="expenses">Ex</a>
      <span class="rounded-full bg-slate-600 p-[2px]"></span>
      <a href="#/habits" class="site-link pb-1" data-link="habits">Hb</a>
      <span class="rounded-full bg-slate-600 p-[2px]"></span>
      <a href="#/counts" class="site-link pb-1" data-link="counts">Co</a>
  </div>
  `
  return { html }
}

export const floatMainNavbar = () => {
  const html = /* html */`
  <div class="flex flex-col gap-y-3 uppercase h-full p-4">
      <a href="#/home" class="site-link floatLinks pb-1" data-link="home">Home</a>
      <a href="#/expenses/ledger" class="site-link floatLinks pb-1" data-link="expenses" >Expenses</a>
      <a href="#/habits" class="site-link floatLinks pb-1" data-link="habits" >Habits</a>
      <a href="#/counts" class="site-link floatLinks pb-1" data-link="counts" >Counts</a>
  </div>
  `
  return { html }
}

export const expensesNavbar = () => {
  const html = /* html */`

    <div class="flex items-center w-full uppercase text-slate-600 h-full px-6">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 showFloatBar text-white transition-all ease-in-out duration-300">
        <path fill-rule="evenodd" d="M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
        <path fill-rule="evenodd" d="M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
      </svg>

      <div class="flex items-center justify-between w-full uppercase text-slate-600 expenseNavbar">
      <div class="ml-3 grow-1 text-left text-white">Ex</div>
      <div class="flex items-center gap-x-3">
        <a href="#/expenses/newExpense" class="site-link" data-link="new Expense">Nx</a>
        <span class="rounded-full bg-slate-600 p-[2px]"></span>
        <a href="#/expenses/ledger" class="site-link" data-link="ledger">Lr</a>
        <span class="rounded-full bg-slate-600 p-[2px]"></span>
        <a href="#/expenses/stats" class="site-link" data-link="stats">St</a>
        <span class="rounded-full bg-slate-600 p-[2px]"></span>
        <a href="#/expenses/baseAmount" class="site-link" data-link="base Amount">Ba</a>
      </div>
        
        </div>
    </div>
  `

  const init = () => {
    // const showMainNavbar = document.querySelector(".showMainNavbar")
    // const expenseNavbar = document.querySelector(".expenseNavbar")
    // showMainNavbar.addEventListener("click", () => {
    //   console.log('clicked')
    //   expenseNavbar.classList.toggle("hidden")
    // })
  }

  return { html, init }
}

export const countsNavbar = () => {
  const html = /* html */`

    <div class="flex items-center w-full uppercase text-slate-600 h-full px-6">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 showFloatBar text-white transition-all ease-in-out duration-300">
        <path fill-rule="evenodd" d="M11.47 10.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 12.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
        <path fill-rule="evenodd" d="M11.47 4.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z" clip-rule="evenodd" />
      </svg>

      <div class="flex items-center justify-between w-full uppercase text-slate-600 countNavbar">
      <a href="#/counts" class="site-link ml-3 grow-1 text-left" data-link="count">Co</a>
      <div class="flex items-center gap-x-3">
        <a href="#/counts/newCount" class="site-link" data-link="new count">Nw</a>
        <span class="rounded-full bg-slate-600 p-[2px]"></span>
        <a href="#/counts/history" class="site-link" data-link="history">Ht</a>
      </div>
        
        </div>
    </div>
  `

  return { html }
}

export const siteHeader = () => {
  const html = /*html */ `<div class="pageName h-full flex items-center uppercase text-white px-6"></div>`
  return { html }
}