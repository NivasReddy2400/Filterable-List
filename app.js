let filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup',filterNames);

function filterNames(){
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    let list = document.getElementById('names');
    let Items = list.querySelectorAll('.collection-item');

    Items.forEach((item) => {
        let values = item.getElementsByTagName('a')[0].innerHTML.toUpperCase();;
        if(values.indexOf(filterValue) > -1 ){
            item.style.display = '';
        }
        else{
            item.style.display = 'none';
        }
    })
}