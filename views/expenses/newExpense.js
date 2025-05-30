export const NewExpense = () =>
{

  const newExpenseInputs = /* html */ `
    <div class="expenseInputsWrapper flex flex-col gap-y-5">

      <!-- Expense Amount  -->
      <div class="ex-amountWrapper flex flex-col gap-y-1">
        <div class="uppercase flex items-center justify-between dark:text-slate-500 tracking-wider">
          <span>Amount</span>
        </div>
        <input type="number" name="Expense Amount" id="expAmount"
          class="ex-expenseInputs bg-slate-200 rounded-lg p-3 border-transparent">
      </div>

      <!-- Expense Details  -->
      <div class="ex-detailsWrapper flex flex-col gap-y-1">
        <div class="uppercase flex items-center justify-between dark:text-slate-500 tracking-wider">
          <span>Details</span>
        </div>
        <input type="text" name="Expense Details" id="expDetails"
          class="ex-expenseInputs bg-slate-200 rounded-lg p-3 border-transparent">
      </div>

      <!-- Expense date  -->
      <div class="ex-dateWrapper flex flex-col gap-y-1">
        <div class="uppercase flex items-center justify-between dark:text-slate-500 tracking-wider">
          <span>Date</span>
        </div>
        <input type="date" name="Expense Date" id="expDate"
          class="ex-expenseInputs bg-slate-200 rounded-lg p-3 border-transparent">
      </div>

      <!-- Expense Tag  -->
      <div class="ex-tagsWrapper flex flex-col gap-y-3">
        <div class="uppercase flex items-center justify-between dark:text-slate-500 tracking-wider">
          <span>Tag</span>
        </div>

        <div class="ex-tagList w-full flex items-start text-sm overflow-x-auto hideScroller">

          <div
            class="ex-tag transition-all ease-in-out duration-500 w-24 flex-shrink-0 flex flex-col p-2 rounded-lg text-center gap-y-1 text-orange-500"
            data-tag="Groceries" data-color="orange-500">
            <i class="fa-solid fa-cart-shopping fa-2x"></i>
            <span>Groceries</span>
          </div>

          <div
            class="ex-tag transition-all ease-in-out duration-500 w-24 flex-shrink-0 flex flex-col p-2 items-center rounded-lg justify-center text-center gap-y-1 text-indigo-500"
            data-tag="Food" data-color="indigo-500">
            <i class="fa-solid fa-utensils fa-2x"></i>
            <span>Food</span>
          </div>

          <div
            class="ex-tag transition-all ease-in-out duration-500 w-24 flex-shrink-0 flex flex-col p-2 items-center rounded-lg justify-center text-center gap-y-1 text-rose-300"
            data-tag="Bills" data-color="rose-300">
            <i class="fa-solid fa-file-invoice fa-2x"></i>
            <span>Bills</span>
          </div>

          <div
            class="ex-tag transition-all ease-in-out duration-500 w-24 flex-shrink-0 flex flex-col p-2 items-center rounded-lg justify-center text-center gap-y-1 text-blue-500"
            data-tag="Home" data-color="blue-500">
            <i class="fa-solid fa-house-chimney fa-2x"></i>
            <span>Home</span>
          </div>

          <div
            class="ex-tag transition-all ease-in-out duration-500 w-24 flex-shrink-0 flex flex-col p-2 items-center rounded-lg justify-center text-center gap-y-1 text-amber-500"
            data-tag="Travel" data-color="amber-500">
            <i class="fa-solid fa-car fa-2x"></i>
            <span>Travel</span>
          </div>

          <div
            class="ex-tag transition-all ease-in-out duration-500 w-24 flex-shrink-0 flex flex-col p-2 items-center rounded-lg justify-center text-center gap-y-1 text-emerald-500"
            data-tag="Saved" data-color="emerald-500">
            <i class="fa-solid fa-piggy-bank fa-2x"></i>
            <span>Saved</span>
          </div>

          <div
            class="ex-tag transition-all ease-in-out duration-500 w-24 flex-shrink-0 text-indigo-800 flex flex-col p-2 items-center rounded-lg justify-center text-center gap-y-1"
            data-tag="Ent" data-color="indigo-800">
            <i class="fa-solid fa-video fa-2x"></i>
            <span>Ent</span>
          </div>

          <div
            class="ex-tag transition-all ease-in-out duration-500 w-24 flex-shrink-0 flex flex-col p-2 items-center rounded-lg justify-center text-center gap-y-1 text-violet-500"
            data-tag="Invest" data-color="violet-500">
            <i class="fa-solid fa-hand-holding-dollar fa-2x"></i>
            <span>Invest</span>
          </div>

          <div
            class="ex-tag transition-all ease-in-out duration-500 w-24 flex-shrink-0 flex flex-col p-2 items-center rounded-lg justify-center text-center gap-y-1 text-lime-500"
            data-tag="Markets" data-color="lime-500">
            <i class="fa-solid fa-arrow-trend-up fa-2x"></i>
            <span>Markets</span>
          </div>

          <div
            class="ex-tag transition-all ease-in-out duration-500 w-24 flex-shrink-0 flex flex-col p-2 items-center rounded-lg justify-center text-center gap-y-1 text-slate-500"
            data-tag="-ve" data-color="slate-500">
            <i class="fa-solid fa-heart-circle-exclamation fa-2x"></i>
            <span>-ve</span>
          </div>

          <div
            class="ex-tag transition-all ease-in-out duration-500 w-24 flex-shrink-0 flex flex-col p-2 items-center rounded-lg justify-center text-center gap-y-1 text-rose-500"
            data-tag="Later" data-color="rose-500">
            <i class="fa-solid fa-rotate-left fa-2x"></i>
            <span>Later</span>
          </div>

          <div
            class="ex-tag transition-all ease-in-out duration-500 w-24 flex-shrink-0 flex flex-col p-2 items-center rounded-lg justify-center text-center gap-y-1 text-emerald-500"
            data-tag="Medical" data-color="text-emerald-500">
            <i class="fa-solid fa-hand-holding-medical fa-2x"></i>
            <span>Medical</span>
          </div>

        </div>

      </div>
    </div>
  `

  const newExpenseButton = /* html */`
    <button
      class="addExpenseButton flex items-center justify-center mx-auto bg-black text-slate-200 rounded-lg py-3 px-6 gap-x-3 mt-10"
      data-button="addExpense">
      <span class="uppercase">Add</span>
      <i class="fa-solid fa-circle-play fa-1x"></i>
    </button>

  `

  const html = /* html */ `
  <section data-name="New Expense"
  class="expenseWrapper pb-20 transition-all ease-in-out duration-500 font-semibold text-black ">
  ${ newExpenseInputs }
  ${ newExpenseButton }
  </section>
  `

  const init = () =>
  {
    const addExpenseButton = document.querySelector( ".addExpenseButton" )
    const expenseInputs = document.querySelectorAll( ".ex-expenseInputs" )

    addExpenseButton.addEventListener( "click", () =>
    {

      let allFilled = true
      let formData = {}

      expenseInputs.forEach( input =>
      {
        if ( input.value === "" )
        {
          allFilled = false
          input.classList.add( "border-2", "border-rose-600" )
        }
        else
        {
          input.classList.remove( "border-2", "border-rose-600" )
        }
      } )

      if ( allFilled )
      {
        expenseInputs.forEach( input =>
        {
          formData[ input.getAttribute( "name" ) ] = input.value
        } )
        formData[ "tag" ] = "NA"
        formData[ "tagColor" ] = "NA"
        formData[ "entryFullDate" ] = "NA"
        formData[ "firebaseTimestamp" ] = firebase.firestore.FieldValue.serverTimestamp()
        formData[ "entryYear" ] = "NA"
        formData[ "entryMonth" ] = "NA"
        formData[ "entryDate" ] = "NA"
        formData[ "clearRecord" ] = "NA"

        db.collection( "expenseDetails" ).add( formData )
          .then( () =>
          {
            console.log( "Data added." )
            expenseInputs.forEach( input =>
            {
              input.value = ""
            } )
          } )
          .catch( err => console.log( err ) )
      }

    } )
  }

  return { html, init }
}