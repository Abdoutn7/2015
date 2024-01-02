function alpha(ch){
    ch=ch.toUpperCase()
    test=true;
    i=0;
    while(test==true && i<ch.length){
        if (ch.charAt(i)<"A" || ch.charAt(i)>"Z"){
            test=false;
        }i++;
    };
    return test;

}
function tstmail(email){
     p1 = email.indexOf("@");
     p2 = email.lastIndexOf(".");
     ch1 = email.substring(0, p1);
     ch2 = email.substring(p1 + 1, p2);
     ch3 = email.substring(p2 + 1,);
    tst=true
    if (email != "") {
    if (!(alpha(ch1) || alpha(ch2) || alpha(ch3)) || ch1 == "" || ch2 == "" || ch3 == ""
    || ch3.length != 2 || ch3.length != 3 || p2 < p1){
        tst=false
        }
    }
   return tst
}
function verif1(){
    mat=document.getElementById("mat").value;
    nom=document.getElementById("nom").value;
    prenom=document.getElementById("prenom").value;
    f=document.getElementById("f").checked;
    h=document.getElementById("H").checked;
    email=document.getElementById("email").value;
    if (mat.charAt(0)<"A"||(mat.charAt(0)>"Z")&&(mat.charAt(1)<"A"||(mat.charAt(1)>"Z"))&&(mat.charAt(2)<"0"||(mat.charAt(2)>"9"))||(mat.charAt(3)<"0"||(mat.charAt(3)>"9"))){
        alert("votre matricule est incorrect ")
    };
    if(nom.length==0|| alpha(nom)==false){
        alert("votre nom  est incorrect")
    };
    if(prenom.length==0|| alpha(prenom)==false){
        alert("votre prenom est incorrect")
    };
    if(f==false && h==false){
        alert("saisir votre sexe")
    };
    if(tstmail(email)==false){
        alert("votre email est incorrect")
    }
}
function verif2(){
    pil=document.getElementById("pil").selectedIndex;
    if(pil==0){
        alert("a5tar")
    }
}
