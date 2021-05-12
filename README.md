<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Netshow.me News | NextJS & Wordpress</h3>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#getting-started">Começando</a>
      <ul>
        <li><a href="#prerequisites">Pré Requisitos</a></li>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li>
  </ol>
</details>


<!-- GETTING STARTED -->
## Getting Started
Esse projeto foi realizado utilizando: ReactJS, NextJS, Typescript, Yarn, StyledComponents, JSON Server, Date FNS e Axios.

A plataforma realiza a busca de notícias através de fake api utilizando o json server. A api fake tem o mesmo formato da api Rest do wordpress e portanto representa o consumo de um headless pelo NextJS. O carregamento das notícias é feito via GetServerSide e os detalhes de cada notícia são carregados através da GetStaticSide com um intervalo de 24 horas.

O design usado foi projetado no figma: https://www.figma.com/file/2tbVh7xFDRJgPOkob7UqJ9/Netshow.me-News?node-id=0%3A1 

### Prerequisites

Para começar a utilizar é necessário ter o Node instalado. Também é necessário instalar o Yarn: 
* npm
  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone o repositório
   ```sh
   git clone https://github.com/NandaPersa/netnews.git
   ```
2. Instale os pacotes na pasta raiz:
   ```sh
   yarn 
   ```
3. Para que a api seja acessível é necessário executar: (Espera-se que a api esteja rodando em http://localhost:3333 se seu endereço for diferente mude em /services/api.ts )
   ```sh
   yarn server
   ```

4. Com a api em execução utilize o seguinte comando para iniciar o projeto:
   ```sh
   yarn dev
   ```