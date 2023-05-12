const urlJson = 'https://jsonplaceholder.typicode.com/users'

type TDataUser = {
    name: string,
    username: string,
    email: string,
}


function mostrarDados(dataUsers: TDataUser[]){
    const div = document.getElementById('content')

    const userList = dataUsers.map(user => {
        return `<div class="text-white flex flex-col items-center justify-center border-2 border-green-200 font-Montserrat font-normal">
        <p>Nome: ${user.name}</p>
        <p class="p-4">Nome de usuário: ${user.username}</p>
        <p>Email: ${user.email}</p>
    </div>`
      }).join('')
  
      if(div){
        div.innerHTML = userList
      }
}

fetch(url).then(resp => resp.json()).then(data => mostrarDados(data)).catch(err => console.log(err))