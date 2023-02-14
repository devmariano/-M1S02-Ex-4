const usuario = {userName:'Alexandre',userEmail:'tambor.xamanico@gmail.com',userPerfilImage:'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}

localStorage.setItem('email',usuario.userEmail)
localStorage.setItem('imagemPerfil',usuario.userPerfilImage)
localStorage.setItem('nome',usuario.userName)

nome.innerHTML = "Nome:"+localStorage.getItem('nome')
email.innerHTML = "Email:"+localStorage.getItem('email')
perfil.innerHTML = "Perfil:"+localStorage.getItem('imagemPerfil')
//document.getElementById(img).scr = toString(localStorage.getItem('imagemPerfil'))

altNome.onclick = function(){
var recebe=prompt("Insira um novo nome")
localStorage.setItem('nome',recebe)
nome.innerHTML = "Nome:"+localStorage.getItem('nome')
}
altEmail.onclick = function(){
    var recebe=prompt("Insira um novo email")
    localStorage.setItem('email',recebe)
    email.innerHTML = "Email:"+localStorage.getItem('email')
}
altPerfil.onclick = function(){
    var recebe=prompt("Insira um novo link para imagem do perfil")
    localStorage.setItem('imagemPerfil',recebe)
    perfil.innerHTML = "Perfil:"+localStorage.getItem('imagemPerfil')
    }