export const mainNavbar = () =>
{
  const html = `
  <div class="flex items-center justify-between uppercase text-slate-400 h-full px-6">
      <a href="#/home" class="site-link pb-1" data-link="home">Hm</a>
      <span class="rounded-full bg-slate-400 p-[2px]"></span>
      <a href="#/expenses" class="site-link pb-1" data-link="expenses">Ex</a>
      <span class="rounded-full bg-slate-400 p-[2px]"></span>
      <a href="#/habits" class="site-link pb-1" data-link="habits">Hb</a>
      <span class="rounded-full bg-slate-400 p-[2px]"></span>
      <a href="#/counts" class="site-link pb-1" data-link="counts">Co</a>
  </div>
  `

  const init = () =>
  {
    const currentView = window.location.hash
    const siteLinks = document.querySelectorAll( ".site-link" )
    siteLinks.forEach( link =>
    {
      if ( link.getAttribute( "href" ) === currentView ) link.classList.add( "text-white", "border-b-4", "border-double", "border-white" )
    } )
  }

  return { html, init }
}

export const expensesNavbar = () =>
{
  const html = `
  
    <div class="flex items-center w-full uppercase text-slate-400 h-full px-6">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4 showMainNavbar">
        <path fill-rule="evenodd" d="M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z" clip-rule="evenodd" />
        <path fill-rule="evenodd" d="M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z" clip-rule="evenodd" />
      </svg>

      <div class="flex items-center justify-between w-full uppercase text-slate-400">
      <a href="#/expenses" class="site-link ml-3 grow-1 text-left" data-link="expenses">Ex</a>
      <div class="flex items-center gap-x-3">
        <a href="#/expenses/newExpense" class="site-link" data-link="new Expense">Nw</a>
        <span class="rounded-full bg-slate-400 p-[2px]"></span>
        <a href="#/expenses/ledger" class="site-link" data-link="ledger">Hb</a>
        <span class="rounded-full bg-slate-400 p-[2px]"></span>
        <a href="#/expenses/stats" class="site-link" data-link="stats">St</a>
        <span class="rounded-full bg-slate-400 p-[2px]"></span>
        <a href="#/expenses/baseAmount" class="site-link" data-link="base Amount">Ba</a>
      </div>
        
        </div>
    </div>
  `
  return { html }
}

export const siteHeader = () =>
{
  const html = `<div class="pageName h-full flex items-center uppercase px-6"></div>`
  return { html }
}