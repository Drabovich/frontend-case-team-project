const list = document.querySelector('.list'),
      items = document.querySelectorAll('.blocks__item')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target
/*
        if(target.classList.contains('list__item')) {
        listItems.forEach(listItem => listItem.classList.remove('active'))
        target.classList.add('active')    
        }*/



        switch(targetId) {
            case 'all':
                items.forEach(item => {
                    if (item.classList.contains('article'))  {
                        item.style.display = 'block'
                    }
                    else if (item.classList.contains('video'))  {
                        item.style.display = 'block'
                    }
                    else if (item.classList.contains('podcast'))  {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                })
                break
            
                case 'articles':
                    items.forEach(item => {
                        if (item.classList.contains('article')) {
                            item.style.display = 'block'
                        } else {
                            item.style.display = 'none'
                        }
                    })
                break

                case 'videos':
                    items.forEach(item => {
                        if (item.classList.contains('video')) {
                            item.style.display = 'block'
                        } else {
                            item.style.display = 'none'
                        }
                    })
                break

                case 'podcasts':
                    items.forEach(item => {
                        if (item.classList.contains('podcast')) {
                            item.style.display = 'block'
                        } else {
                            item.style.display = 'none'
                        }
                    })
                break
        }
    })
}
filter()

/*
function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}
*/