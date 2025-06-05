import { monthsName, todayDate, IndianDenom } from "../../components/common.js"

const { year, month } = todayDate()

export const BaseAmount = () => {

  const baseAmountWrapper = /*html*/`

  <!-- baseAmount Details  -->
  <section class="baseAmount flex flex-col gap-y-10" aria-label="Base Amount section">

    <!-- Base Amount Inputs Wrapper  -->
    <div class="inputsWrapper w-full rounded-lg flex flex-col gap-y-6">

      <!-- Base Amount  -->
      <div class="ex-baseAmountWrapper flex flex-col gap-y-1">
        <label for="baseAmount" class="uppercase dark:text-slate-500">Amount</label>
        <input type="number" data-name="Base Amount" id="baseAmount"
          class="baseInputs bg-slate-200 text-[#222] rounded-lg p-3 border-transparent">
      </div>

      <!-- Base Month   -->
      <div class="ex-baseMonthWrapper flex flex-col gap-y-1">
        <label for="baseMonth" class="uppercase dark:text-slate-500">Month</label>
        <input type="month" data-name="Base Month" id="baseMonth"
          class="baseInputs bg-slate-200 text-[#222] rounded-lg p-3 border-transparent">
      </div>

      <!-- Add Base Amount to Database  -->
      <button
        class="addBaseAmount ex-addButtons flex items-center justify-center mx-auto bg-black text-slate-200 rounded-lg px-6 py-3 gap-x-3" aria-label="Add base amount button"
        data-button="addBaseAmount">
        <span class="uppercase">Add</span>
        <i class="fa-solid fa-circle-play fa-1x" aria-hidden="true"></i>
      </button>

    </div>

</section>
  `

  const history =  /* html */ `
    <!-- Showing Base Amount History  -->
    <div class="ex-base-amountHistoryWrapper mt-5 flex flex-col gap-y-3">
      <span class="uppercase dark:text-slate-500">History</span>

      <!-- History   -->
      <div class="baseAmountHistory flex flex-col gap-y-8 pb-24"></div>

    </div>
  `

  const html = /* html */`
    <section data-name="Base Amount"
  class="baseAmount pb-20 flex flex-col gap-y-5 transition-all ease-in-out duration-500 font-bold">
    ${baseAmountWrapper}
    ${history}
  </section>
  `

  const init = () => {
    const baseAmountHistory = document.querySelector(".baseAmountHistory")

    const template = document.createElement("template")
    template.innerHTML = /* html */`
        <div class="left">
          <span class="selectedMonth"></span>,
          <span class="selectedYear"></span>
        </div>
        <div class="right flex items-center gap-x-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                 <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd" />
                 </svg>
        <span class="baseAmount"></span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="deleteEntryIcon size-5 absolute text-rose-600 left-1/2 -translate-x-1/2 -bottom-2">
           <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
         </svg>
    `

    // Show History 
    db.collection("baseAmounts").onSnapshot(querySnapshot => {
      baseAmountHistory.innerHTML = ""
      querySnapshot.forEach(doc => {
        const clone = template.content.cloneNode(true)

        clone.querySelector(".selectedMonth").textContent = monthsName[ Number(doc.data().selectedMonth) - 1 ]
        clone.querySelector(".selectedYear").textContent = doc.data().selectedYear
        clone.querySelector(".baseAmount").textContent = IndianDenom(doc.data().baseAmount)

        let detailsWrapper = document.createElement("div")
        detailsWrapper.classList.add("detailsWrapper", "flex", "items-center", "justify-between", "rounded-lg", "p-5", "bg-black", "text-white", "relative")
        detailsWrapper.id = doc.id

        detailsWrapper.appendChild(clone)
        baseAmountHistory.appendChild(detailsWrapper)

      })
    })

    // Add Base Amount to Db 
    const baseInputs = document.querySelectorAll(".baseInputs")
    const addBaseAmount = document.querySelector(".addBaseAmount")

    addBaseAmount.addEventListener("click", async () => {
      let allFilled = true
      let formData = {}

      baseInputs.forEach(input => {
        if (input.value === "") {
          allFilled = false
          input.classList.add("border-2", "border-rose-600")
        }
        else {
          input.classList.remove("border-2", "border-rose-600")
        }
      })

      if (allFilled) {
        let selectedMonth = 0
        let selectedYear = 0
        baseInputs.forEach(input => {
          if (input.type === "number") formData[ input.getAttribute("id") ] = input.value
          if (input.type === "month") {
            const fieldValue = input.value
            const getValues = fieldValue.split("-")
            selectedMonth = Number(getValues[ 1 ])
            selectedYear = Number(getValues[ 0 ])
          }
        })

        formData[ "selectedMonth" ] = selectedMonth
        formData[ "selectedYear" ] = selectedYear
        formData[ "firebaseTimestamp" ] = firebase.firestore.FieldValue.serverTimestamp()
        formData[ "systemMonth" ] = Number(month)
        formData[ "systemYear" ] = year

        try {
          await db.collection("baseAmounts").add(formData)
          console.log("Data added.")
          baseInputs.forEach(input => input.value = "")
        }
        catch (err) {
          console.log(err)
        }
      }
    })

    // Delete Entry
    baseAmountHistory.addEventListener("click", async e => {
      if (e.target.classList.contains("deleteEntryIcon")) {
        const entryID = e.target.closest(".detailsWrapper").id
        if (confirm("Do you want to delete the record?")) {
          try {
            await db.collection("baseAmounts").doc(entryID).delete()
            console.log("Record Deleted")
          }
          catch (err) { console.log(err) }
        }
      }
    })
  }

  return { html, init }

}