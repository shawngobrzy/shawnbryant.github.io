console.log('javascript is fun')
var number = 5;
var string = 'hello there';
var isRad = true;
var groceries = ['Milk', 'Eggs', 'Cheese'];
function listGroceries()
{
    for(var i = 0; i < groceries.length; i++)
        {
            console.log(groceries[i]);
        }
}

listGroceries();

document.getElementById('box').addEventListener('click', function(){
    alert('I got clicked');
})

if(number == 10)
{
    console.log('Yeah Buddy');
} else {
    console.log('Nope!');
}
document.getElementById('box').innerHTML = number + 5;