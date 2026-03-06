let names = JSON.parse(localStorage.getItem("names")) || []

updateList()

function saveData(){
localStorage.setItem("names", JSON.stringify(names))
}

function addName(){

let name = document.getElementById("nameInput").value

if(name === "") return

names.push(name)

saveData()

updateList()

document.getElementById("nameInput").value=""

}

function addBulk(){

let text = document.getElementById("bulkInput").value

let arr = text.split("\n")

for(let i=0;i<arr.length;i++){

let name = arr[i].trim()

if(name!==""){
names.push(name)
}

}

saveData()

updateList()

document.getElementById("bulkInput").value=""

}

function updateList(){

let list = document.getElementById("list")

list.innerHTML=""

for(let i=0;i<names.length;i++){

list.innerHTML += "<li>"+names[i]+"</li>"

}

}

function clearList(){

names=[]

localStorage.removeItem("names")

updateList()

document.getElementById("result").innerHTML=""

}

function drawOne(){

if(names.length==0){

alert("Chưa có tên!")

return

}

let random = Math.floor(Math.random()*names.length)

document.getElementById("result").innerHTML =
"🎯 Người trúng: <b>"+names[random]+"</b>"

}

function drawMultiple(){

if(names.length<3){

alert("Cần ít nhất 3 người")

return

}

let winners=[]

let temp=[...names]

for(let i=0;i<3;i++){

let r=Math.floor(Math.random()*temp.length)

winners.push(temp[r])

temp.splice(r,1)

}

document.getElementById("result").innerHTML =
"🎉 Người trúng: "+winners.join(", ")

}

function makeTeams(){

if(names.length<2){

alert("Cần ít nhất 2 người")

return

}

let shuffled=[...names]

shuffled.sort(()=>Math.random()-0.5)

let team1=[]
let team2=[]

for(let i=0;i<shuffled.length;i++){

if(i%2==0){
team1.push(shuffled[i])
}else{
team2.push(shuffled[i])
}

}

document.getElementById("result").innerHTML =
"👥 Team A: "+team1.join(", ")+"<br><br>👥 Team B: "+team2.join(", ")

}
