const Npages = 7

fetch('./nav.html')
.then(res => res.text())
.then(text => {
    var str = "script#navbar-"
    let oldelem = null
    for (var i=1;i<=Npages;i++){
        temp = str+i;
        if(document.querySelector(temp) != null){
            oldelem = document.querySelector(temp);
            var src = `a class="nav-link " id="p${i}"`;
            var rep = `a class="nav-link active" id="p${i}"`;
            text = text.replace(src,rep);
            break;
        }
    }
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})