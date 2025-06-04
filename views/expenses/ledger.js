import { todayDate } from "../../components/common.js"
const { dateToday } = todayDate()

export const Ledger = () =>
{

  const html = /* html */`
    <section data-name="Ledger"
    class="ledger transition-all ease-in-out duration-500 text-base dark:text-white text-black min-h-screen pb-20 flex flex-col gap-y-5">

    <div class="text-center w-full flex items-center justify-center gap-x-3 relative">
      <div class="currentDate rounded-lg bg-black text-white w-24 inline-block p-3 text-xs"></div>

      <div class="filters ">
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-black transition-all rounded-full ease-in-out duration-300 openFilterDates p-1">
          <path fill-rule="evenodd" d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z" clip-rule="evenodd" />
        </svg>
        
        <!-- Showing Date filter -->
        <div class="dateFilterWrapper absolute -bottom-16 right-1/2 translate-x-1/2 w-1/2 bg-[#111] hidden rounded-lg p-3">
          <input type="date" class="dateInput rounded-lg w-full border-none text-xs text-black p-1" name="dateFilter" />
        </div>
      </div>
      </div>
    
    <div class="ledgerWrapper flex flex-col gap-y-9 text-xs"></div>
  </section>
  `

  const init = () =>
  {
    let currentDate = document.querySelector( ".currentDate" )
    currentDate.textContent = dateToday
    const ledgerWrapper = document.querySelector( ".ledgerWrapper" )

    const openFilterDates = document.querySelector( ".openFilterDates" )
    const dateFilterWrapper = document.querySelector( ".dateFilterWrapper" )
    const dateInput = document.querySelector( ".dateInput" )

    db.collection( "expenseDetails" ).where( "userDate", "==", dateToday ).orderBy( "firebaseTimestamp", "desc" ).onSnapshot( querySnapshot =>
    {
      ledgerWrapper.innerHTML = ""

      querySnapshot.forEach( doc =>
      {
        const entryDetails = document.createElement( "div" )
        entryDetails.classList.add( "entryDetails", "rounded-lg", "p-3", "flex", "items-center", "justify-between", "dark:bg-black/70", "bg-slate-200", "relative" )
        entryDetails.id = doc.id
        let entry = doc.data()

        entryDetails.innerHTML += /* html */`
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 ${ entry.tag !== "Later" ? 'hidden' : '' } ${ entry.clearRecord === "Cleared" ? "text-emerald-600" : "text-rose-600" } absolute left-1/2 -translate-x-1/2 -top-2 updateRecord" data-update="clearLedger">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
            </svg>
  
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 absolute left-1/2 -translate-x-1/2 -bottom-2 text-rose-600 updateRecord" data-update="deleteLedger">
              <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
            </svg>
    
              <div class="left flex flex-col justify-start">
                <span class="uppercase text-sm">${ entry.expDetails }</span>
                <div class="flex items-center gap-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3 text-${ entry.tagColor }">
                    <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-${ entry.tagColor } font-bold text-xs capitalize">${ entry.tag } </span>
                </div>
              </div>
    
              <div class="right flex items-center justify-end text-right gap-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd" />
              </svg>
                <span>
                ${ new Intl.NumberFormat( "en-IN", { currency: "INR", maximumFractionDigits: 2, minimumFractionDigits: 2 } ).format( entry.expAmount ) }
                </span>
              </div>
    
              `

        ledgerWrapper.appendChild( entryDetails )

      } )
    } )


    openFilterDates.addEventListener( "click", () =>
    {
      const isOpen = !dateFilterWrapper.classList.contains( "hidden" )
      if ( isOpen )
      {
        dateFilterWrapper.classList.add( "hidden" )
        openFilterDates.classList.remove( "bg-white" )
      }
      else
      {
        dateFilterWrapper.classList.remove( "hidden" )
        openFilterDates.classList.add( "bg-white" )
        currentDate.textContent = dateToday
        currentDate.classList.remove( "text-yellow-600" )
        dateInput.value = ''
      }
    } )

    dateInput.addEventListener( "change", () =>
    {
      let filterDate = dateInput.value
      fetchLedgerData( filterDate )
      dateFilterWrapper.classList.add( "hidden" )
      openFilterDates.classList.add( "bg-white" )
      dateInput.value = ""
      console.log( dateToday, filterDate, typeof ( filterDate ) )
      currentDate.textContent = filterDate
      currentDate.classList.add( "text-yellow-600" )
    } )

    const fetchLedgerData = ( filterDate ) =>
    {
      let selectedDate = filterDate || dateToday
      db.collection( "expenseDetails" ).where( "expDate", "==", selectedDate )
        .onSnapshot( querySnapshot =>
        {
          console.log( querySnapshot )
          ledgerWrapper.innerHTML = ""
          if ( querySnapshot.size === 0 ) ledgerWrapper.innerHTML = `<h1 class="text-center uppercase">No entry for the day.</h1>`
          querySnapshot.forEach( doc =>
          {

            const entryDetails = document.createElement( "div" )
            let entry = doc.data()
            let tagTextColor = `text-${ entry.tagColor }`
            entryDetails.classList.add( "entryDetails", "rounded-lg", "p-3", "flex", "items-center", "justify-between", "dark:bg-black/70", "bg-slate-200", "relative" )
            entryDetails.id = doc.id

            entryDetails.innerHTML += /* html */`
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 ${ entry.tag !== "Later" ? 'hidden' : '' } ${ entry.clearRecord === "Cleared" ? "text-emerald-600" : "text-rose-600" } absolute left-1/2 -translate-x-1/2 -top-2 updateRecord" data-update="clearLedger">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
            </svg>
  
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 absolute left-1/2 -translate-x-1/2 -bottom-2 text-rose-600 updateRecord" data-update="deleteLedger">
              <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
            </svg>
    
              <div class="left flex flex-col justify-start">
                <span class="uppercase text-sm">${ entry.expDetails }</span>
                <div class="flex items-center gap-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-3 text-white">
                    <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
                  </svg>
                  <span class="${ tagTextColor } font-bold text-xs capitalize">${ entry.tag } </span>
                </div>
              </div>
    
              <div class="right flex items-center justify-end text-right gap-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd" />
              </svg>
                <span>
                ${ new Intl.NumberFormat( "en-IN", { currency: "INR", maximumFractionDigits: 2, minimumFractionDigits: 2 } ).format( entry.expAmount ) }
                </span>
              </div>
    
              `

            ledgerWrapper.appendChild( entryDetails )
          } )
        } )

    }
  }

  return { html, init }
}