const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'PROCESSO ADMISSIONAL/contratos/' }); // Defina o diretório para salvar os arquivos

app.post('/salvar-contrato', upload.single('contrato'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Nenhum arquivo foi enviado.');
    }
    res.status(200).send('Arquivo salvo com sucesso!');
});

// Iniciar o servidor
app.listen(5500, () => {
    console.log('Servidor rodando na porta 5500');
});

