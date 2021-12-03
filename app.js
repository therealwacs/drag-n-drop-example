const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
})

function dragstart(event) {
    event.target.classList.add('hold')
    placeholders.forEach(placeholder => {
        placeholder.classList.add('target')
    })
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide')
    event.target.style.opacity = '1'
    placeholders.forEach(placeholder => {
        placeholder.classList.remove('target')
    })
}


function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.append(item)
    event.target.classList.remove('hovered')
}