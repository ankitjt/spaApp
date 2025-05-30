export const NewCount = () => {
  const section1 = /* html */ `
    <h1>Testing breaking of html component.</h1>
    
  `

  const section2 = /* html */ `
    <h1>Testing breaking of html component.-2</h1>
  `
  const html = `
    <div>
    ${section1}
    </div>
    <div>
    ${section2}
    </div>
  `
  return { html }
}
