const objectUserInfo = {
    nome: '',
    avatar: '',
    id: 0,
    url: '',
    repositorioUrl: '',
    followers: 0,
    following: ''
}

const addUserInfo = (data) => {
    return {
        nome: data.login,
        avatar: data.avatar_url,
        id: data.id,
        url: data.html_url,
        repositorioUrl: data.repos_url,
        followers: data.followers,
        following: data.following
    }
}

const addRepositorios = (data) => {
   return data.map(resul => (
        {
            nomeRepositorio: resul.name,
            idRepositorios: resul.id,
            url: resul.url,
            criado: resul.created_at
        }
   )
    )
}

const addFollowing = (data) => {
    return data.map(resul => (
        {
            nome: resul.login,
            id: resul.id,
            avatar: resul.avatar_url,
            url: resul.html_url,
        }
    )
    )
}

const addFollowers = (data) => {
    return data.map(resul => (
        {
            nome: resul.login,
            id: resul.id,
            avatar: resul.avatar_url,
            url: resul.html_url,
        }
    )
    )

}

export { objectUserInfo, addUserInfo, addRepositorios, addFollowing, addFollowers }
