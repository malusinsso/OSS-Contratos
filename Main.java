document.getElementById('contratoForm').addEventListener('submit', async (e) => {
        e.preventDefault();

    const nome = document.getElementById('nome').value;
    const admissao = document.getElementById('admissao').value;
    const canvas = document.getElementById('signature');
    const assinatura = canvas.toDataURL();

    const response = await fetch('/gerar-contrato', {
    method: 'POST',
            headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
            nome,
            admissao,
            assinatura
    })
});

        if (response.ok) {
alert('Contrato gerado e enviado com sucesso!');
    } else {
alert('Ocorreu um erro ao gerar o contrato.');
    }
            });

// Implementar a lógica para capturar a assinatura no canvas...
