const eleList = document.querySelector('.list');

myArr =[
'zucchero',
'patate',
'caffe',
'acqua',
'yogurt',
'pasta',
'pomodori',
'mele',
]

    let i = 0
while(i < myArr.length){
    console.log(myArr[i]);
    eleList.innerHTML += `<li> ${myArr[i]}</li>`
    i++
}