export const Home = () =>
{
  const expenseSummary = /* html */
    `
  <div class="expenseSummary">

  <header class="uppercase text-slate-300 font-bold flex items-center justify-between relative ">
    <span>Expense Summary</span>
    <div class="monthFilterWrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 showMonthFilter text-slate-400 transition-all ease-in-out duration-300">
        <path fill-rule="evenodd" d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z" clip-rule="evenodd" />
      </svg>
      <input type="month" name="" id="monthFilter" data-input="expenseSummary" class="monthFilter absolute text-white w-full bg-black opacity-0 rounded-lg border-transparent transition-all ease-in-out duration-300 right-0 -bottom-12 pointer-events-none">
    </div>
  </header>

  <div class="sectionsWrapper mt-5 font-bold grid grid-cols-2 gap-3">
    <div class="totalExpenses bg-rose-300  text-rose-600 rounded-lg p-3 flex flex-col gap-y-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-8 p-1 rounded-full bg-white">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
      </svg>
      <span>Expenses</span>
      <div class="flex items-center gap-x-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z"
            clip-rule="evenodd" />
        </svg>
        <span class="totalExpense numbers">0</span>

      </div>
    </div>

    <div class="totalSavedWrapper bg-emerald-300 text-emerald-600 rounded-lg p-3 flex flex-col gap-y-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        class="size-8 p-1 rounded-full bg-white">
        <path fill-rule="evenodd"
          d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
          clip-rule="evenodd" />
      </svg>

      <span>Saved</span>
      <div class="flex items-center gap-x-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 ">
          <path fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z"
            clip-rule="evenodd" />
        </svg>
        <span class="totalSaved numbers">0</span>

      </div>
    </div>

    <div class="totalLeftWrapper bg-blue-300 text-blue-600 rounded-lg p-3 flex flex-col gap-y-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        class="size-8 p-1 rounded-full bg-white">
        <path
          d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
      </svg>

      <span>Left</span>
      <div class="flex items-center gap-x-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 ">
          <path fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z"
            clip-rule="evenodd" />
        </svg>
        <span class="totalLeft numbers">0</span>

      </div>
    </div>

    <div class="toGive bg-violet-300 text-violet-600 rounded-lg p-3 flex flex-col gap-y-3">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        class="size-8 p-1 rounded-full bg-white">
        <path fill-rule="evenodd"
          d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
          clip-rule="evenodd" />
      </svg>

      <span>xxxx</span>
      <div class="flex items-center gap-x-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 ">
          <path fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z"
            clip-rule="evenodd" />
        </svg>
        <span class="totalLater numbers">0</span>

      </div>
    </div>
  </div>

</div>
  `
  const countdownSummary = /* html */ `
  <section class="countSummarySection mt-10 capitalize">

  <header class="uppercase text-slate-300 font-bold flex items-center justify-between relative ">
    <span>Counts Summary</span>
    <div class="monthFilterWrapper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 showMonthFilter text-slate-400 transition-all ease-in-out duration-300">
        <path fill-rule="evenodd" d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z" clip-rule="evenodd" />
      </svg>
      <input type="month" name="" id="monthFilter" data-input="countSummary" class="monthFilter absolute text-white w-full opacity-0 bg-black rounded-lg border-transparent transition-all ease-in-out duration-300 right-0 -bottom-12 pointer-events-none">
    </div>
  </header>

  <div class="wrap mt-5 flex flex-col gap-y-3 font-bold">

    <div class="count flex items-center justify-between text-center bg-slate-200 rounded-lg p-3 text-slate-800">
      <div class="countTitle w-2/3 text-left">Tariff</div>
      <div class="countDays">
        <div class="daysLeft text-xl">90</div>
        <div class="text-[#aaa] text-sm">days left</div>
      </div>
    </div>

    <div class="count flex items-center justify-between text-center bg-slate-200 rounded-lg p-3 text-slate-800">
      <div class="countTitle w-2/3 text-left">Car insurance</div>
      <div class="countDays">
        <div class="daysLeft text-xl">10</div>
        <div class="text-[#aaa] text-sm">days left</div>
      </div>
    </div>

  </div>

</section>
  `
  const html = /* html */`
    <div class="pb-20">
      ${ expenseSummary }
      ${ countdownSummary }
    </div>
  `
  return { html }
}