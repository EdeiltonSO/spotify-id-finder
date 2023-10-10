# Spotify ID Finder

## O que é isso?

Por enquanto, é só um algoritmo pra encontrar a combinação certa de maiúsculas e minúsculas em um id de música do Spotify.

## Como funciona?

Todo link de música do Spotify segue o padrão `https://open.spotify.com/track/<id>`, onde o `id` é uma sequência de caracteres alfanuméricos com letras maiúsculas e minúsculas. Se trocarmos uma maiúscula pela sua minúscula correspondente (ou vice-versa), o link deixa de funcionar. 

Então supondo que você tenha um `id` com os caracteres organizados corretamente, exceto pela capitalização das letras, esse algoritmo testa todas as combinações possíveis de maiúsculas e minúsculas fazendo requisições até que a primeira retorne status 200.

## O que há para melhorar?

Nessa versão, o algoritmo ainda tenta alterar o case de caracteres numéricos, o que gera tentativas repetidas. Eliminar isso reduz o número de tentativas. 

Além disso, as tentativas começam com todos os caracteres maiúsculos e vão se tornando minúsculos aos poucos. Isso significa que mesmo que você insira o id correto, haverão diversas tentativas até que se chegue nele. Implementar um método mais eficiente na função `switchCapsLock` pode melhorar esse processo.

## Como executar?

0. Tenha o Node instalado;
1. Faça clone/download do projeto;
2. No terminal, vá para o diretório do arquivo `main.js`;
3. Execute `node main.js`;

Altere a penúltima linha para buscar a combinação para links de outras músicas.

## Como testar um caso de sucesso?

Você pode descomentar a linha `if (match) return match;` e informar no terceiro parâmetro da função `forceMatch` (chamada na linha anterior) quantas tentativas deseja fazer até que o match seja encontrado.
