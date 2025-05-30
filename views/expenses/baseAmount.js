export const BaseAmount = () => {
  const html = /*html*/`
  <section data-name="Base Amount"
  class="ex-baseAmountWrapper ex-sections transition-all ease-in-out duration-500 font-bold">

  <!-- baseAmount Details  -->
  <section class="ex-baseAmount flex flex-col gap-y-10">

    <!-- Base Amount Inputs Wrapper  -->
    <div class="ex-base-inputsWrapper w-full bg-[#222] rounded-lg flex flex-col gap-y-6">

      <!-- Base Amount  -->
      <div class="ex-baseAmountWrapper flex flex-col gap-y-1">
        <span class="uppercase dark:text-slate-500">Amount</span>
        <input type="number" data-name="Base Amount" id="exAmount"
          class="ex-baseInputs bg-slate-200 text-[#222] rounded-lg p-3 border-transparent">
      </div>

      <!-- Base Month   -->
      <div class="ex-baseMonthWrapper flex flex-col gap-y-1">
        <span class="uppercase dark:text-slate-500">Month</span>
        <input type="month" data-name="Base Month" id="exMonth"
          class="ex-baseInputs bg-slate-200 text-[#222] rounded-lg p-3 border-transparent">
      </div>

      <!-- Add Base Amount to Database  -->
      <button
        class="ex-addBaseAmount ex-addButtons flex items-center justify-center mx-auto bg-black text-slate-200 rounded-lg px-6 py-3 gap-x-3"
        data-button="addBaseAmount">
        <span class="uppercase">Add</span>
        <i class="fa-solid fa-circle-play fa-1x"></i>
      </button>

    </div>

    <!-- Showing Base Amount History  -->
    <div class="ex-base-amountHistoryWrapper mt-5 flex flex-col gap-y-3">
      <span class="uppercase dark:text-slate-500">History</span>

      <!-- History   -->
      <div class="baseAmountHistory pb-24"></div>

    </div>

  </section>

</section>
  `
  return { html }
}