const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
  const colorDiv = document.createElement('div')
  colorDiv.style.heigh = '50px'
  colorDiv.style.width = '100px'
  colorDiv.style.backgroundColor = hairColor
  return colorDiv
}


const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const personName = form.personName.value
  const hairColor = form.hairColor.value
  const age = form.age.value
  const birthplace = form.birthplace.value

  

//   details.innerHTML = `<em>${personName}</em>`

    formHolders = ['Person Name: ','Hair Color: ','Age: ','Birthplace: ']
    formVars = [personName,hairColor,age,birthplace]

    const ul = document.createElement('ul')

    var inputs = document.getElementsByClassName('inputs');
    for(i =0; i < inputs.length; i++) 
    {
     const li = document.createElement('li')
     li.textContent = formHolders[i] + formVars[i]
     details.appendChild(li)
    }
  
/*
   for(var i = 0; i < 4; i++){
     const li = document.createElement('li')
     li.textContent = formHolders[i] + formVars[i]
     details.appendChild(li)
   }
*/


//    const nameHolder = document.createElement('nameHolder')
//    nameHolder.textContent = 'Person Name: ' + personName
//    details.appendChild(nameHolder)

//    const hairHolder = document.createElement('hairHolder')
//    hairHolder.textContent = 'Hair Color: ' + hairColor
//    details.appendChild(hairHolder)

//    const ageHolder = document.createElement('ageHolder')
//    ageHolder.textContent = 'Age: ' + age
//    details.appendChild(ageHolder)

//    const birthplaceHolder = document.createElement('birthplaceHolder')
//    birthplaceHolder.textContent = 'Birthplace: ' + birthplace
//    details.appendChild(birthplaceHolder)

/*
   details.innerHTML=`
   <ul>
    <li>Name: ${personName}</li>
    <li>Hair Color: ${rednerColor(hairColor).outerHTML}</li>
    <li>Age: ${age}</li>
    <li>Birthplace: ${birthplace}</li>
   </ul>
   `
*/
}

personForm.addEventListener('submit', handleSubmit)