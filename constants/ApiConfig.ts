export default function ApiConfig() {

    if (__DEV__) {
        return {
            clientId: 'mTlLUFvGJUH266FZxICps4usMBujHLpqYqRHBRXB',
            clientSecret: 'uHz9xPSUZkSiUo2gFpd5d3dDDdgZjNxI40QChL0WHlW3088U69zKTYxJ0JSJHfAEWaPza5rn8e8mleUEGYxIgrE6imLO8y9YkSPt4dBoVd7LW9vwYbD5ImfRus1fG7X7',
            apiUrl: 'http://192.168.1.13:8000/api/',
            url: 'http://192.168.1.13:8000/',
        }
    }

    return {
        clientId: 'b4HI1b1p4WZPTQRBqN3ZnOiJgptLFW3dhOg8pcSh',
        clientSecret: 'CsJRz2128h1x4Wb9ngovSc1KgULE1UypYMly62pIrel2pzJBfIG9t94RqGSjBmUwVeW5AwQXzCEXzXYFVKMz7J6GZo8GrAN9vnKPCWtiZ23dl2X4zlSq4hnjJoYqUc3m',
        apiUrl: 'https://api-blog-core.herokuapp.com/api/',
        url: 'https://api-blog-core.herokuapp.com/',
    }
}