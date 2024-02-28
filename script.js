fetch('data.json')
    .then(response => response.json()) // Converte a resposta em JSON
    .then(data => { // Adicione as chaves aqui
        // Aqui você pode manipular os dados
        const infoDiv = document.getElementById('userInfo');
        infoDiv.innerHTML = `
            <p>Nome: ${data.nome}
            </p>
            <p>Idade: ${data.idade}</p>
            <p>Email: ${data.email}</p>;
        `; // Adicione as aspas finais aqui
    })
    .catch(error => {
        console.error('Falha ao carregar o arquivo JSON:', error);
    });