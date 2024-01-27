<img src="https://github.com/Cleber-Sanches/Aikon-box/blob/main/.github/banner.svg"/>

# O que é o Ainko Box?
O **Ainko Box** é uma aplicação desenvolvida com Node.js, projetada para oferecer uma maneira simples e eficaz de integrar ícones personalizados ao seu README do GitHub. Com esta ferramenta, você pode adicionar um toque especial ao seu perfil, destacando suas habilidades de uma forma visualmente atraente.

# Como Usar o Ainko Box?
## Escolhendo os icones
No seu README.md, copie a URL base: 
```plaintext
"https://tense-sweatshirt-duck.cyclic.app/icons"
```

### Ícone Único
Se deseja um único ícone, adicione um dos parâmetros `?i=`, `?icones=` ou `?icon=` seguido do nome do ícone desejado. 

**Exemplo:**
``` plaintext
?i=laravel
```
![](https://tense-sweatshirt-duck.cyclic.app/icons?i=laravel)

### Lista de Ícones
Caso prefira uma variedade de ícones, basta adicionar os nomes dos ícones e separe por vírgulas. 

**Exemplo:**
``` plaintext
?i=javascript,node,discord
```

![](https://tense-sweatshirt-duck.cyclic.app/icons?i=javascript,nodejs,discord)

## Tratamento de Erros: Ícone Não Encontrado

Caso o usuário insira um nome de ícone incorreto, o **Ainko Box** exibirá um ícone de erro padrão. Entretanto, é fácil corrigir isso! Basta seguir estas instruções:

![](https://tense-sweatshirt-duck.cyclic.app/icons?i=e)


-  **Identifique o Erro:** Se um ícone de erro for exibido, verifique a URL gerada e encontre o nome do ícone que está causando o problema.

- **Corrija o Nome do Ícone:** Substitua o nome do ícone incorreto pelo nome correto na URL. 

<br>


**URL Incorreta:** <br>
```html 
https://tense-sweatshirt-duck.cyclic.app/icons?i=javascript,phpp,git
```
![](https://tense-sweatshirt-duck.cyclic.app/icons?i=javascript,phpp,git)

**URL Correta:**  <br>
```html
https://tense-sweatshirt-duck.cyclic.app/icons?i=javascript,php,git
```
![](https://tense-sweatshirt-duck.cyclic.app/icons?i=javascript,php,git)
<br>

 `Atualize a Página:` Após corrigir a URL, atualize a página ou README. O ícone correto será exibido conforme o nome corrigido.

  

### Lista de Ícones Disponíveis
Antes de escolher seus ícones, [confira a lista completa de ícones disponíveis](lik) para encontrar os nomes correspondentes.

## Personalize o Tamanho dos Ícones:

Ajuste o tamanho dos ícones conforme suas preferências utilizando um destes parâmetros, seguido por um número:

`
?t=
?tamanho=
?width=
`

Exemplo: Para ícones maiores, insira números acima de 48. Para ícones menores, experimente valores abaixo de 30. Encontre o tamanho perfeito para personalizar sua experiência visual!

``` plaintext
?i=html,react,notion&t=64
```

![](https://tense-sweatshirt-duck.cyclic.app/icons?i=html,react,notion&t=64)

## Limitando Ícones por Linha:

Controle quantos ícones são exibidos por linha usando o parâmetro `p=,` `porlinha=` ou `iconesporlinha=` seguido de um número. O máximo permitido é 60, enquanto o mínimo é 1.

**Exemplo:**

```plaintext
?i=vue,insonmina,mongodb,npm,nest,typescript&t=64&p=3
```
![](https://tense-sweatshirt-duck.cyclic.app/icons?i=vue,mysql,css,beekeeper,vscode,express.js&t=64&p=3)

## Centralizando Ícones no README:

Centralize os ícones adicionando o bloco de código que os contém dentro da tag HTML `<p align="center">`.

```html

<p align="center">
    <img src="https://tense-sweatshirt-duck.cyclic.app/icons?i=kotlin,postgresql,bootstrap,nodemon,ruby&t=53" />
</p>;
```
<p align="center">
    <img src="https://tense-sweatshirt-duck.cyclic.app/icons?i=kotlin,postgresql,bootstrap,nodemon,ruby&t=53" />
</p>
