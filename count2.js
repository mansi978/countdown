const inputs = document.querySelectorAll("input")
function clt(){
    const a = document.getElementById("dob").value
    const b = document.getElementById("tob").value
    const c = a + " " + b
    console.log(c)
    const end = new Date(c)
    const now = new Date()
    const diff =(now - end)/1000
    inputs[2].value = Math.floor(diff/3600/24/365)
    inputs[3].value = Math.floor(((diff/43800/60)%12))
    inputs[4].value = Math.floor((diff/720)%30)
    inputs[5].value = Math.floor(diff/3600)%24
    inputs[6].value = Math.floor(diff/60)%60
    inputs[7].value = Math.floor((diff)%60)
    setInterval(clt, 1000)
}