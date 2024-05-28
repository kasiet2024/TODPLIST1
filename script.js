let main = document.createElement('main')
main.className='container'
document.body.prepend(main)


let projectName = document.createElement('h1')
projectName.innerHTML="let's do it"
main.append(projectName)


let listBlock = document.createElement('div')
listBlock.className='mainBlock'
main.append(listBlock)


let fistDiv= document.createElement('div')
listBlock.append(fistDiv)

let textIN = document.createElement('input')
textIN.className='textIN'
textIN.setAttribute('placeholder','Gonna do...')
fistDiv.append(textIN)


let setDate = document.createElement('input')
setDate.setAttribute('type','date')
fistDiv.append(setDate)


let addBtn = document.createElement('button')
addBtn.innerHTML = 'ADD'
addBtn.id ='AddBtn'
fistDiv.append(addBtn)