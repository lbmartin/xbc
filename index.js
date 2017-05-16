const personForm = document.querySelector('form')

const renderColor = (hairColor) => {
  const colorDiv = document.createElement('div')
  colorDiv.style.heigh = '50px'
  colorDiv.style.width = '100px'
  colorDiv.style.backgroundColor = hairColor
  return colorDiv
}

const renderListItem = (name,value) => {
  const li = document.createElement('li')
  li.textContent = `${name}: ${value}`
  return li
}

const renderList = (person) => {
  const list = document.createElement('ul')
  Object.keys(person).map((fieldName, i, keys) => {
    let li = renderListItem(fieldName, person[fieldName])
    list.appendChild(li)
  })
  return list
}

const handleSubmit = (ev) => {
  ev.preventDefault()
  const form = ev.target
  const details = document.querySelector('.details')

  const person = {
    name: form.personName.value,
    hairColor: form.hairColor.value,
    age: form.age.value,
    birthplace: form.birthplace.value,
  }

  const list = renderList(person)

  

/*   details.innerHTML = `<em>${personName}</em>`

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

*/

    details.appendChild(list)

}

personForm.addEventListener('submit', handleSubmit)
