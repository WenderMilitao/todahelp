function templateIndex() {
  return `
            <picture>
             <source srcset="./assets/img/logo.webp" type="image/webp">
             <source srcset="./assets/img/logo.png" type="image/png">
             <img id="LogoInicio" src="./assets/img/logo.png" alt="Logo da ONG TodaHelp, nome em preto e logo em verde com desenho de um globo, uma pessoa e um cão">
            </picture>
            <section>
                <h2>Sobre a ONG TodaHelp</h2>
                <p>
                    A TodaHelp ajuda pessoas e animais em situação de vulnerabilidade,
          oferecendo apoio, cuidado e oportunidades para uma vida mais digna.
          Nosso trabalho vai além da assistência imediata: buscamos promover
          inclusão, bem-estar e conscientização, engajando a comunidade em ações
          solidárias. Com a colaboração de voluntários, doadores e parceiros,
          transformamos pequenos gestos em grandes mudanças, garantindo que
          ninguém seja deixado para trás.
                </p>
                <p>
                    Ao clicar em “Projetos”, você poderá conhecer mais sobre as nossas
          ações e sentir de perto o impacto positivo que cada iniciativa gera na
          vida de pessoas e animais. Se desejar, também pode apoiar nossas
          causas com uma doação, pois cada contribuição ajuda a levar esperança,
          cuidado e novas oportunidades para quem mais precisa.
                </p>
                <p>
                    Você também pode fazer parte dessa transformação! Clique em “Cadastro”
          e junte-se a nós nessa corrente do bem. Seja voluntário e ajude a
          construir um mundo mais justo, acolhedor e cheio de esperança.
                </p>
            </section>
  `;
};

function templateHumanos() {
  return `
      <section>
        <h2>Projetos</h2>
        <article>
          <h3><span class="badge">Ação com moradores de rua</span></h3>
          <p>Distribuímos refeições e roupas toda semana.</p>
          <picture>
            <source srcset="./assets/img/adultos.webp" type="image/webp" />
            <source srcset="./assets/img/adultos.jpg" type="image/jpeg" />
            <img
              src="./assets/img/adultos.jpg"
              alt="Voluntários da ONG TodaHelp entregando alimentos e roupas a moradores de rua"
            />
          </picture>
        </article><br>
        <article>
          <h3><span class="badge">Ação na comunidade</span></h3>
          <p>
            Apoiamos crianças da comunidade por meio da doação de roupas,
            alimentos e brinquedos.
          </p>
          <picture>
            <source srcset="./assets/img/criancas.webp" type="image/webp" />
            <source srcset="./assets/img/criancas.jpg" type="image/jpeg" />
            <img
              src="./assets/img/criancas.jpg"
              alt="Voluntários da ONG TodaHelp ajudando crianças da comunidade"
            />
          </picture>
        </article>
      </section>
  `;
};

function templateAnimais() {
  return `
        <section>
        <h2>Projetos</h2>
        <article>
          <h3>
            <span class="badge">Feira de adoção</span>
          </h3>
          <p>Resgatamos animais e promovemos adoções responsáveis.</p>
          <picture>
            <source srcset="./assets/img/animais.webp" type="image/webp" />
            <source srcset="./assets/img/animais.jpg" type="image/jpeg" />
            <img
              src="./assets/img/animais.jpg"
              alt="Voluntários da ONG TodaHelp acariciando cães de rua"
            />
          </picture>
        </article>
      </section>
  `;
};

function templateCadastro() {
  return `
      <div id="alerta-sucesso" class="alerta" role="alert" aria-live="assertive">
          Cadastro realizado com sucesso!
      </div>
      <div id="alerta-erro" class="alerta" role="alert" aria-live="assertive">
          Erro ao enviar cadastro!
      </div>
      <form id="formCadastro">
        <fieldset>
          <legend>Seja um voluntário</legend>
          <br />
          <picture>
            <source srcset="./assets/img/agradece.webp" type="image/webp" />
            <source srcset="./assets/img/agradece.png" type="image/png" />
            <img
              src="./assets/img/agradece.png"
              alt="Logo da ONG TodaHelp, nome da ONG e em baixo escrito agradece em preto e logo em verde com desenho de um globo, uma pessoa e um cão"
            />
          </picture>
          <br />
          <label for="nome">Nome Completo</label>
          <input
            class="input"
            type="text"
            id="nome"
            name="nome"
          />
          <br />
          <label for="email">E-mail</label>
          <input class="input" type="email" id="email" name="email" />
          <br />
          <label for="cpf">CPF</label>
          <input
            class="input"
            type="text"
            id="cpf"
            name="cpf"
            maxlength="14"
            placeholder="000.000.000-00"
            title="Formato: 000.000.000-00"
          />
          <br />
          <label for="telefone">Telefone</label>
          <input
            class="input"
            type="tel"
            id="telefone"
            name="telefone"
            maxlength="15"
            placeholder="(00) 00000-0000"
            title="Formato: (00) 00000-0000"
          />
          <br />
          <label for="nascimento">Data de Nascimento</label>
          <input
            class="input"
            type="date"
            id="nascimento"
            name="nascimento"
          />
          <br />
          <label for="endereco">Endereço</label>
          <input
            class="input"
            type="text"
            id="endereco"
            name="endereco"
          />
          <br />
          <label for="cep">CEP</label>
          <input
            class="input"
            type="text"
            id="cep"
            name="cep"
            maxlength="9"
            placeholder="00000-000"
            title="Formato: 00000-000"
          />
          <br />
          <label for="cidade">Cidade</label>
          <input class="input" type="text" id="cidade" name="cidade" />
          <br />
          <label for="estado">Estado</label>
          <input class="input" type="text" id="estado" name="estado" />
          <br />
          <button class="botao" type="submit">Cadastrar</button>
        </fieldset>
      </form>
  `;
};

function templateDoacao() {
  return `
      <div id="alerta-sucesso" class="alerta" role="alert" aria-live="assertive">
        Doacao feita, obrigado!
      </div>
      <div id="alerta-erro" class="alerta" role="alert" aria-live="assertive">
        Erro ao enviar doacao!
      </div>
      <form>
        <fieldset>
          <legend>Doação</legend>
          <br />
          <picture>
            <source srcset="./assets/img/doacao.webp" type="image/webp" />
            <source srcset="./assets/img/doacao.png" type="image/png" />
            <img
              src="./assets/img/doacao.png"
              width="250"
              alt="Logo da ONG TodaHelp, nome da ONG e em baixo escrito obrigado pela doação em preto e logo em verde com desenho de um globo, uma pessoa e um cão"
            />
          </picture>
          <br />
          <label for="doacao">Valor:</label>
          <br />
          <input
            class="inputDoacao"
            type="number"
            id="doacao"
            name="doacao"
            min="1"
            step="0.01"
            placeholder="R$ 10,00"
          />
          <br />
          <button class="botao" type="submit">Doar</button>
        </fieldset>
      </form>
  `;
};

function carregarPagina(pagina){
  const app = document.getElementById("app");

  switch (pagina) {
    case 'humanos':
      app.innerHTML = templateHumanos();
      break;
    case 'animais':
      app.innerHTML = templateAnimais();
      break;
    case 'cadastro':
      app.innerHTML = templateCadastro();
    break;
    case 'doacao':
      app.innerHTML = templateDoacao();
    break;
    default:
      app.innerHTML = templateIndex();
  };

  const form = document.getElementById('formCadastro');
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      validarCadastro(e.target);
    });
  };
};

window.addEventListener('DOMContentLoaded', () => {
  carregarPagina('index');
});

function validarCadastro(form){
  const nome = form.querySelector("#nome").value.trim();
  const email = form.querySelector("#email").value.trim();
  const cpf = form.querySelector("#cpf").value.trim();
  const telefone = form.querySelector("#telefone").value.trim();
  const nascimento = form.querySelector("#nascimento").value.trim();
  const endereco = form.querySelector("#endereco").value.trim();
  const cep = form.querySelector("#cep").value.trim();
  const cidade = form.querySelector("#cidade").value.trim();
  const estado = form.querySelector("#estado").value.trim();

  if (!nome || !email || !cpf || !telefone || !nascimento || !endereco || !cep || !cidade || !estado) {
    mostrarAlerta('erro');
    return;
  };

  if (!email.includes("@")) {
    alert("Digite um e-mail válido!");
    return;
  };

  const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  if (!regexCPF.test(cpf)) {
   alert("Número de CPF inválido!");
  return;
  };
  
  const regexTelefone = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;

  if (!regexTelefone.test(telefone)) {
   alert("Número de telefone inválido!");
  return;
  };

  const regexCEP = /^\d{5}-\d{3}$/;

  if (!regexCEP.test(cep)) {
   alert("Número de CEP inválido!");
  return;
  };

  const rejeitaNumero = /^[A-Za-zÀ-ÿ\s]+$/;

  if (!rejeitaNumero.test(nome) || 
      !rejeitaNumero.test(cidade) || 
      !rejeitaNumero.test(estado)) {
    alert(`Apenas letras são permitidas nos campos:
  Nome
  Cidade
  Estado`);
  return;
  }


  const cadastroValido = true;

  if (cadastroValido) {
    mostrarAlerta('sucesso');
    form.reset();
  } else {
    mostrarAlerta('erro');
  };
};

function mostrarAlerta(tipo) {
  const alertaSucesso = document.querySelector('#alerta-sucesso');
  const alertaErro = document.querySelector('#alerta-erro');

  alertaSucesso.classList.remove('visivel');
  alertaErro.classList.remove('visivel');

  if (tipo === 'sucesso') {
    alertaSucesso.classList.add('visivel');
  } else if (tipo === 'erro') {
    alertaErro.classList.add('visivel');
  };
 
  setTimeout(() => {
    alertaSucesso.classList.remove('visivel');
    alertaErro.classList.remove('visivel');
  }, 8000);
};

