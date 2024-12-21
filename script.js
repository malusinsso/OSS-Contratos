const usuarios = [
    // ADM
    {
        nome: "FABIANA PEREIRA DA SILVA OLIVEIRA",
        funcao: "COORDENADOR",
        salario: "R$5.000,00",
        local: "ADMINISTRATIVO",
        estadoCivil: "CASADA",
        cargaHoraria: "40 (quarenta) horas semanais",//40 horas
      
    },
    {
        nome: "ERIKA PRISCILLA FEITOSA",
        funcao: "ANALISTA ADMINISTRATIVO",
        salario: "R$ 3.700,00",
        local: "ADMINISTRATIVO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "40 (quarenta) horas semanais", //40horas
        
    },
    {
        nome: "ANA PAULA DA SILVA",
        funcao: "AUXILIAR ADMINISTRATIVO",
        salario: "R$ 1.800,00",
        local: "ADMINISTRATIVO",
        estadoCivil: "DIVORCIADA",
        cargaHoraria: "40 (quarenta) horas semanais",//40horas
       
    },
    {
        nome: "JULIANA DA SILVA MOURA",
        funcao: "AUXILIAR ADMINISTRATIVO",
        salario: "R$ 2.300,00",
        local: "ADMINISTRATIVO",
        estadoCivil: "DIVORCIADA",
        cargaHoraria: "36 (trinta e seis) horas semanais",//36horas
 
    },
    {
        nome: "SHEILA CRISTINA DE PAULA NASCIMENTO",
        funcao: "AUXILIAR ADMINISTRATIVO",
        salario: "R$ 1.800,00",
        local: "ADMINISTRATIVO",
        estadoCivil: "CASADA",
        cargaHoraria: "36 (trinta e seis) horas semanais"//36horas

    },
    // ENFERMEIRA OBSTETRA
    {
        nome: "VANUZIA SANTOS PEREIRA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 10.600,00",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "DIVORCIADA",
        cargaHoraria: "12 X 36, (das 07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "NATALIA CAITANO DE LIMA COSTA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00 ",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36, (das 07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "BEATRIZ MARQUES CAVALCANTI",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00 ",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36, (das 07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "DAYANE SIMÕES AVILA GONZAGA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00 ",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36, (das 07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ARLETE PEREIRA SILVA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00 ",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36, (das 07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ERIKA CADENGUE DE SOUSA OLIVEIRA SILVA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00 ",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36, (das 07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MARCILENE SILVA DE SOUZA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "IVONE BARBOSA DE OLIVEIRA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "RAQUEL MADALENA DE ASSIS",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "CLAUDIA BATISTA ROCHA PEREIRA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$ 4.500,00",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ELZA MATEUS PORTELA TRINDADE",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$4.500,00",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ANIVALDA CAETANO GAMA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$4.500,00",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "LAUDICEIA MARIA DE OLIVEIRA",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$4.500,00",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "DIVORCIADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "PATRÍCIA APARECIDA FONTES DE ANDRADE",
        funcao: "ENFERMEIRA OBSTETRA",
        salario: "R$4.500,00",
        local: "CENTRO OBSTETRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "CAREM MATOS COSTA",
        funcao: "ENFERMEIRA UTI NEO",
        salario: "R$ 4.200,00",
        local: "UNIDADE DE TERAPIA INTENSIVA - NEONATOLOGIA (UTI NEO)",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ELIANE DAS VIRGENS SPINA",
        funcao: "ENFERMEIRA UTI NEO",
        salario: "R$ 4.200,00",
        local: "UNIDADE DE TERAPIA INTENSIVA - NEONATOLOGIA (UTI NEO)",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MARIA DE FATIMA OLIVEIRA PEREIRA CORREA DA SILVA",
        funcao: "ENFERMEIRA UTI NEO",
        salario: "R$ 4.200,00",
        local: "UNIDADE DE TERAPIA INTENSIVA - NEONATOLOGIA (UTI NEO)",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "FERNANDA CORDEIRO ALBERTO",
        funcao: "ENFERMEIRA UTI NEO",
        salario: "R$ 4.200,00",
        local: "UNIDADE DE TERAPIA INTENSIVA - NEONATOLOGIA (UTI NEO)",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ADRIANA GOMES STRAZZA",
        funcao: "ENFERMEIRA",
        salario: "R$ 5.000,00",
        local: "UNIDADE DE TERAPIA INTENSIVA - NEONATOLOGIA (UTI NEO)",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "JAQUELINE MOREIRA DE MORAIS",
        funcao: "ENFERMEIRA",
        salario: "R$ 5.000,00",
        local: "UNIDADE DE TERAPIA INTENSIVA - NEONATOLOGIA (UTI NEO)",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "GERSON MIGUEL SANTOS CORREIA",
        funcao: "ENFERMEIRO",
        salario: "R$ 5.000,00",
        local: "UNIDADE DE TERAPIA INTENSIVA - NEONATOLOGIA (UTI NEO)",
        estadoCivil: "SOLTEIRO",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MARCIA DE SOUZA OLIVEIRA",
        funcao: "ENFERMEIRA",
        salario: "R$ 5.000,00",
        local: "UNIDADE DE TERAPIA INTENSIVA - NEONATOLOGIA (UTI NEO)",
        estadoCivil: "DIVORCIADA",
        cargaHoraria: "20 horas - de segunda a sexta"
    },
    {
        nome: "MARJORIE FERNANDES BARBOZA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$ 2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "AILTON PIRES DA COSTA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "SOLTEIRO",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "BIANCA MENDES FERREIRA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "CINTIA DE SOUSA COSTA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "CLAUDIA FERREIRA DA SILVA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "DEBORA CIBELE SOARES SILVA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ANA BEATRIZ TEIXEIRA DE SOUZA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "EDINALVA CERQUEIRA MARQUES",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "DIVORCIADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "GABRIELA HERNANDES ESTEVAM",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "UNIÃO ESTÁVEL",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "GISELE RICARDO CAMPOS",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "LUCIENE RODRIGUES DA SILVA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "SAMARA MARTINS DE SOUSA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "UTI NEO",
        estadoCivil: "DIVORCIADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "LIDIANE ALVES DO NASCIMENTO",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "RAFAELA BRUNO DE JESUS",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "SOLTEIRO",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "SIRLEIDE COUTINHO DE SOUZA NUNES",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "CENTRO OBSTÉTRICO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "JOVELINE MATOS VALERIO",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "UTI NEO",
        estadoCivil: "CASADA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "TAMIRA APARECIDA DOS SANTOS MADALENA",
        funcao: "TÉCNICO DE ENFERMAGEM",
        salario: "R$2.720,45",
        local: "UTI NEO",
        estadoCivil: "SOLTEIRA",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MARIA DAS GRAÇAS FERREIRA DOS SANTOS",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "DENISE ANDRADE MIRANDA CASTRO",
        estadoCivil: "CASADA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "VITTORIA DO NASCIMENTO NOVAIS",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "GABRIELLY FERREIRA DOS SANTOS",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "AMANDA DOS SANTOS GAVIOLI",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "CLEICIANE ALVES DE OLIVEIRA REIS",
        estadoCivil: "CASADA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "CYNTHIA MAYUMI ONO OGATA",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "EDICLEIDE DE LIMA SILVA",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ROSANA MÁRCIA PEREIRA SILVA",
        estadoCivil: "CASADA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MICHELLE CRISTINA SADERIO",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "HANNA LUIZA DA SILVA",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "IARA SÁ TELES AMORIM",
        estadoCivil: "CASADA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "INESLENE NEVES FRANÇA",
        estadoCivil: "CASADA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "JULIANA NASCIMENTO DOS SANTOS",
        estadoCivil: "CASADA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "LUCINETE DE OLIVEIRA",
        estadoCivil: "DIVORCIADA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MARIA AUGUSTA JOAQUIM SILVA DE OLIVEIRA",
        estadoCivil: "CASADA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ANA CAROLINE SANTOS RODRIGUES",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "LUCAS DE SOUZA ANDRADE",
        estadoCivil: "SOLTEIRO",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeiro",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MARIANA APARECIDA DA SILVA CLARIMUNDO",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "REBECA BARACHO ATANASIO DUO",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "TANIELLY DOS SANTOS COSTA",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "THAÍS DA SILVA AGUIAR",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "VANUZA GONÇALVES PEREIRA",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MICHELE BERTINO DE OLIVEIRA",
        estadoCivil: "DIVORCIADA",
        salario: "R$ 2.720,45",
        local: "Centro Obstétrico",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "MARIA LUCIA LIMA SAMUEL",
        estadoCivil: "VIÚVA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    {
        nome: "ANTONIA NUBIA LIMA SAMUEL",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 2.720,45",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "Enfermeira",
        cargaHoraria: "12 X 36 (07h00 às 19h00 ou 19h00 às 07h00)"
    },
    // FONO
    {
        nome: "NATHALIA COSTA DE PAULA",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 6.000,00",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "FONOAUDIOLOGIA",
        cargaHoraria: "segunda a sábado (07h00 às 13h00 ou das 13h00 às 19h00)"
    },
    {
        nome: "GABRIELLA DIAS BATISTA",
        estadoCivil: "UNIÃO ESTÁVEL",
        salario: "R$ 6.000,00",
        funcao: "FONOAUDIOLOGIA",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        cargaHoraria: "segunda a sábado (07h00 às 13h00 ou das 13h00 às 19h00)"
    },
   // FISIOTERAPEUTA 
   {
        nome: "ALESSA CASTRO RIBEIRO",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 6.800,00",
        funcao: "FISIOTERAPEUTA",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        cargaHoraria: "30 (trinta) horas semanais",//30horas
    },

    {
        nome: "CINTIA MIKAELA PEREIRA DE LIMA COELHO",
        estadoCivil: "CASADA",
        salario: "R$ 3.800,00",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "FISIOTERAPEUTA",
        cargaHoraria: "qualquer periodo entre as 07h00 às 01h00",// qualquer periodo entre as 07:00 às 01:00 )
    },
    {
        nome: "GABRIELLA SOUZA CARLOS",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 3.800,00",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "FISIOTERAPEUTA",
        cargaHoraria: "qualquer periodo entre as 07h00 às 01h00",// qualquer periodo entre as 07:00 às 01:00 )
    },
    {
        nome: "LUANA RODRIGUES DE SOUZA TINO",
        estadoCivil: "CASADA",
        salario: "R$ 3.800,00",
        funcao: "FISIOTERAPEUTA",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        cargaHoraria: "qualquer periodo entre as 07h00 às 01h00",// qualquer periodo entre as 07:00 às 01:00 )
    },
    {
        nome: "PAMELA FARIAS MORENO",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 3.800,00",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "FISIOTERAPEUTA",
        cargaHoraria: "qualquer periodo entre as 07h00 às 01h00",// qualquer periodo entre as 07:00 às 01:00 )
    },
    {
        nome: "PAULA FERNANDA MORAES DOS ANJOS",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 3.800,00",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "FISIOTERAPEUTA",
        cargaHoraria: "qualquer periodo entre as 07h00 às 01h00", // qualquer periodo entre as 07:00 às 01:00 )
    },
    // SERVIÇO SOCIAL
    {
        nome: "VANESSA CRISTINE DE OLIVEIRA DO PRADO",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 3.800,00",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "SERVIÇO SOCIAL",
        cargaHoraria: "segunda a sexta (07h00 às 13h00 ou das 13h00 às 19h00)"
    },
    // PSICÓLOGA
    {
        nome: "LAIS ROMÃO DE FREITAS",
        estadoCivil: "SOLTEIRA",
        salario: "R$ 4.000,00",
        local: "Unidade de Terapia Intensiva Neonatal (UTI NEO)",
        funcao: "PSICÓLOGA",
        cargaHoraria: "segunda a sexta (07h00 às 13h00 ou das 13h00 às 19h00)"
    }
];

    
document.addEventListener("DOMContentLoaded", () => {
    const nomeSelect = document.getElementById("nome");
    usuarios.forEach(usuario => {
        const option = document.createElement("option");
        option.value = usuario.nome;
        option.textContent = usuario.nome;
        nomeSelect.appendChild(option);
    });

    const form = document.getElementById("formAssinatura");
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let drawing = false;

    // Eventos do Canvas para assinatura
    canvas.addEventListener("mousedown", (e) => {
        drawing = true;
        ctx.moveTo(e.offsetX, e.offsetY);
    });

    canvas.addEventListener("mousemove", (e) => {
        if (drawing) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        }
    });

    canvas.addEventListener("mouseup", () => {
        drawing = false;
        ctx.beginPath();
    });

    document.getElementById("clear").addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    document.getElementById("capture").addEventListener("click", () => {
        const dataURL = canvas.toDataURL();
        const img = new Image();
        img.src = dataURL;

        img.onload = () => {
            window.signatureImage = img; // Armazena a imagem da assinatura
            alert("Assinatura capturada com sucesso!"); // Aviso de sucesso
            console.log("Assinatura capturada e armazenada."); // Log para verificar
        };
    });

    // Ouvindo o evento de submissão do formulário
    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevenir o comportamento padrão do formulário

        const nome = nomeSelect.value;
        const email = document.getElementById("email").value; // Capturando o email do usuário
        const dataAdmissao = document.getElementById("data-admissao").value;
        const endereco = document.getElementById("endereco").value;

        console.log("Tentando gerar contrato para:", nome);

        const usuario = usuarios.find(u => u.nome === nome);
        if (!usuario) {
            return alert("Usuário não encontrado.");
        }

        const salario = usuario.salario;
        const local = usuario.local;
        const funcao = usuario.funcao;
        const estadoCivil = usuario.estadoCivil;
        const cargaHoraria = usuario.cargaHoraria;

        // Adicionar 60 dias úteis
        const dataFinal = calcularDataFinal(dataAdmissao, 60);

        // Verificar se a assinatura foi capturada
        const img = window.signatureImage;
        if (!img) {
            return alert("Por favor, capture sua assinatura.");
        }

        console.log("Gerando PDF com os dados:", { nome, estadoCivil, endereco, funcao, local, salario, cargaHoraria, dataFinal });

        // Gerar PDF
        const arquivoPDF = await generateContratoPDF(nome, estadoCivil, endereco, funcao, local, salario, cargaHoraria, dataFinal, img);

        // Enviar e-mail com o PDF gerado
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                destinatario: email,
                assunto: 'Seu Contrato',
                mensagem: `Olá ${nome}, segue em anexo o seu contrato.`,
                arquivo: arquivoPDF // Nome do arquivo PDF gerado
            }),
        });

        const data = await response.json();
        if (data.success) {
            alert(data.message);
        } else {
            alert(data.message);
        }
    });
});

// Função para calcular data somada a dias úteis
function calcularDataFinal(dataInicial, diasUteis) {
    const diasCorridos = Math.ceil(diasUteis * 7 / 5);  // Aproximar a relação de dias corridos
    const data = new Date(dataInicial);
    data.setDate(data.getDate() + diasCorridos);
    return data.toLocaleDateString('pt-BR');
}

// Função para gerar o PDF do contrato
async function generateContratoPDF(nome, estadoCivil, endereco, funcao, local, salario, cargaHoraria, dataFinal, assinaturaImg) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
    });

    const marginLeft = 20;
    const marginRight = 20;
    const marginTop = 30;
    const marginBottom = 30;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const usableWidth = pageWidth - marginLeft - marginRight;
    let currentY = marginTop;

    // Adicionando o logo no canto superior direito
    const logoWidth = 30;
    const logoHeight = 15;
    doc.addImage('selo.png', 'PNG', pageWidth - marginRight - logoWidth, marginTop - logoHeight, logoWidth, logoHeight);

    // Cabeçalho - Associação Beneficente com negrito centralizado
    doc.setFont('Arial', 'bold');
    doc.setFontSize(11);
    doc.text("ASSOCIAÇÃO BENEFICENTE DE PIRANGI", pageWidth / 2, currentY, { align: 'center' });
    currentY += 6;
    doc.setFont('Arial', 'normal');
    doc.text("O.S.S ORGANIZAÇÃO SOCIAL DE SAÚDE PIRANGI", pageWidth / 2, currentY, { align: 'center' });
    currentY += 14;

    // Título "Contrato por Prazo Determinado"
    doc.setFont('Arial', 'bold');
    doc.setFontSize(11);
    doc.text("CONTRATO POR PRAZO DETERMINADO", pageWidth / 2, currentY, { align: 'center' });
    currentY += 10;

    // Corpo do contrato justificado
    doc.setFont('Arial', 'normal');
    doc.setFontSize(11);

    const content = `
    Pelo presente instrumento, de um lado ASSOCIAÇÃO BENEFICENTE DE PIRANGI, estabelecida à Rua Doutor Rodrigues Alves nº 805 – Pirangi com CNPJ Nº51.804.771/0003-34, neste ato representada por JOÃO GONÇALVES DE SARRO, de ora em diante chamado EMPREGADOR, e ${nome}, Brasileiro(a), ${estadoCivil}, portador(a) da Carteira de Trabalho DIGITAL, residente e domiciliado à ${endereco}, de ora em diante chamado simplesmente de EMPREGADO, têm, entre si, como justo e contratado, nos termos do parágrafo único do artigo 443 e do artigo 445 ambos da Consolidação das Leis do Trabalho, e seguintes, um contrato de trabalho por tempo determinado, nas cláusulas e condições abaixo:

    1ª - O EMPREGADO prestará serviços para o EMPREGADOR na função de ${funcao}, nas atividades relacionadas a tal função, bem como outros que venham a ser objeto de cartas, comunicados ou ordens, dentro da sua natureza.

    2ª - O local de trabalho será na(o) – ${local}, podendo, no entanto, ser transferido(a) para qualquer outra atividade vinculada à Saúde, assinado entre o EMPREGADOR e o ESTADO DE SÃO PAULO.

    3ª - O horário de trabalho será de ${cargaHoraria}, sendo que tal horário poderá ser alterado, ante a necessidade do EMPREGADOR em decorrência dos serviços voltados para a Saúde, consoante mencionado na cláusula 2ª, retro.

    4ª - Pela prestação de serviços, o EMPREGADO receberá a remuneração de ${salario}.

    5ª - O EMPREGADO reembolsará a EMPRESA de todos os prejuízos que vier a lhe causar por dolo, imprudência, imperícia ou negligência no desempenho de suas funções, nos termos do artigo 462, da CLT.

    6ª - A vigência deste contrato será pelo prazo de 60 (SESSENTA) dias sendo que o início de sua vigência é a partir da data de assinatura, findando-se em ${dataFinal}, podendo o mesmo ser prorrogado por uma única vez, mediante a respectiva assinatura de Aditamento de Contrato.

    7ª - E por estarem de pleno acordo, as partes contratantes assinam o presente contrato em duas vias de igual teor, ficando a primeira em poder do EMPREGADOR e a segunda com o EMPREGADO, que dela dará o competente recibo.
    `;

     // Função para justificar o texto e adicionar novas páginas se necessário
     currentY = justifyTextWithPageBreak(doc, content, marginLeft, currentY, usableWidth, pageHeight, marginBottom);

     // Verificar se ainda há espaço suficiente para o carimbo e assinatura, senão, adicionar uma nova página
     const espacoRestante = pageHeight - currentY - marginBottom;
     const alturaAssinatura = 20; // Altura estimada da assinatura (ajuste conforme necessário)
 
     
 
     if (espacoRestante < alturaAssinatura) {
         doc.addPage(); // Adiciona uma nova página
         currentY = marginTop; // Reseta a posição Y no topo da nova página
     }
     
     // Assinatura OSS PIRANGI (carimbo) à esquerda
     const ossLogoWidth = 40;
     const ossLogoHeight = 20; // Ajuste conforme necessário
     const xOssSignature = marginLeft;
     const yOssSignature = currentY; // Mesma altura da assinatura
     
     doc.addImage('carimbo.png', 'PNG', xOssSignature, yOssSignature, ossLogoWidth, ossLogoHeight);
     
     // Texto abaixo do carimbo
     const ossTexto = "ASSOCIAÇÃO BENEFICENTE DE PIRANGI"; // Texto que você quer centralizar
     
     // Calcular a largura do texto
     const textoWidth = doc.getTextWidth(ossTexto); // Método para obter a largura do texto
     
     // Calcular a posição X centralizada em relação ao carimbo
     const xTextoCentralizado = xOssSignature + (ossLogoWidth / 2) - (textoWidth / 2);
     
     // Adicionar o texto centralizado abaixo do carimbo
     doc.text(ossTexto, xTextoCentralizado, yOssSignature + ossLogoHeight + 5);
     
 
     // Assinatura da pessoa à direita, na mesma linha horizontal
     const imgWidth = 40;
     const imgHeight = (assinaturaImg.height / assinaturaImg.width) * imgWidth; // Manter a proporção da assinatura
     const xSignature = pageWidth - marginRight - imgWidth;
     const ySignature = currentY; // Mesmo valor de Y que o carimbo (yOssSignature)
 
     doc.addImage(assinaturaImg, 'PNG', xSignature, ySignature, imgWidth, imgHeight);
 
    // Calcular a largura do texto do nome
 const nomeWidth = doc.getTextWidth(nome); // Método para obter a largura do texto
 const xCentralizado = xSignature + (imgWidth / 2) - (nomeWidth / 2); // imgWidth é a largura da imagem da assinatura
 
 // Adicionar o nome centralizado abaixo da assinatura
 doc.text(nome, xCentralizado, ySignature + imgHeight + 15);
 
     // Rodapé - adicionar na última página
     doc.setFontSize(10);
     doc.text("Avenida Interlagos nº 6959 sala 2 – Interlagos", pageWidth / 2, pageHeight - 15, { align: 'center' });
     doc.text("Fone/Fax: (11) 5669 3564 / 93771 5293 – São Paulo – SP", pageWidth / 2, pageHeight - 10, { align: 'center' });

    // Salvar PDF
    const nomeArquivo = `Contrato_${nome.replace(/\s+/g, '_')}.pdf`;
    doc.save(nomeArquivo);
    alert("Contrato gerado com sucesso!");

    console.log("Contrato salvo em:", nomeArquivo);
}

// Função para justificar o texto
function justifyTextWithPageBreak(doc, content, marginLeft, currentY, usableWidth, pageHeight, marginBottom) {
    const lines = doc.splitTextToSize(content, usableWidth);
    for (const line of lines) {
        if (currentY + 10 > pageHeight - marginBottom) {
            doc.addPage();
            currentY = 30; // Reiniciar Y no topo da nova página
        }
        doc.text(line, marginLeft, currentY);
        currentY += 10; // Espaçamento entre as linhas
    }
    return currentY; // Retornar a nova posição Y
}

async function salvarContrato(blob) {
    const formData = new FormData();
    formData.append("contrato", blob, "contrato.pdf");

    // Enviar o Blob para o servidor
    const response = await fetch("/salvar-contrato", {
        method: "POST",
        body: formData,
    });
    if (!response.ok) {
        alert("Erro ao salvar o contrato. Tente novamente.");
    } else {
        alert("Contrato salvo com sucesso na pasta 'contratos'.");
    }
}
