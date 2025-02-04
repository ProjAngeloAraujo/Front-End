let sonhos = [];

        async function salvarSonho() {
            const nome = document.getElementById("nome").value.trim();
            const sonho = document.getElementById("sonho").value.trim();

            if (!nome || !sonho) {
                alert("Por favor, preencha ambos os campos.");
                return;
            }

            const resposta = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome, sonho })
            });

            const dado = await resposta.json();
            dado.nome = nome;
            dado.sonho = sonho;

            sonhos.push(dado);
            alert("Sonho salvo com sucesso!");
        }

        function buscarSonho() {
            const nomeBusca = document.getElementById("pesquisa").value.trim();
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = "";

            if (!nomeBusca) {
                alert("Digite um nome para buscar.");
                return;
            }

            const sonhoEncontrado = sonhos.find(item => item.nome.toLowerCase() === nomeBusca.toLowerCase());

            if (sonhoEncontrado) {
                resultado.innerHTML = `<p><strong>${sonhoEncontrado.nome}:</strong> ${sonhoEncontrado.sonho}</p>`;
            } else {
                resultado.innerHTML = `<p>Sonho não encontrado para "${nomeBusca}".</p>`;
            }
        }