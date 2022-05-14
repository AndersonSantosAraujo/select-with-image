# 'Select' Com Imagem & Script 'Translate'

### 1. Como Usar o 'Select'

#### JS
1.1 Copie a pasta modules
1.2 Import a classe dentro do seu script
1.3 Instancie a classe com os parâmetros:
    SelectBlock(class_da_lista_ul, class_de_ativo, class_do_span_selecionado, class_de_cada_item_da_lista, armazena_no_local_storage?(bool), nome_armazena_no_local_storage(opcional))
1.4 Inicie a classe com selectBlock.init();

#### HTML
1.1 Crie a seguinte estrutura

    <div class="nav__select">
      <span class="nav__select__display" data-select="true" id=""></span>
      <ul class="nav__select__select select-box">
       <li class="select-box__item" id="language-pt-br"><a href="#"><img src="img/flag_pt_br.png" /></a></li>
        <li class="select-box__item" id="language-en"><a href="#"><img src="img/flag_en.png" /></a></li>
        <li class="select-box__item" id="language-es"><a href="#"><img src="img/flag_es.png" /></a></li>
      </ul>
    </div>

--------------------------------------------------------------------------------------------------------------------------------

### 2. Como Usar o 'Translate'

#### JS
2.1 Copie a pasta modules
2.2 Import a classe dentro do seu script
2.3 Instancie a classe com os parâmetros:
    Translate(class_de_cada_item_da_lista_do_select, class_de_ativo, class_do_span_selecionado, armazena_no_local_storage(bool), nome_armazena_no_local_storage(opcional))
2.4 Inicie a classe com selectBlock.init();

#### HTML
2.1 Crie a seguinte estrutura

  <!-- no HTML tem que inserir o [data-translate='language-pt'] nas TAGS onde será traduzida -->
  <h1 data-translate="language-pt-br">Se a educação lhe parece cara, não queira saber o preço da ignorância.</h1>
  <h1 data-translate="language-en">If education seems expensive to you, don't ask the price of ignorance.</h1>
  <h1 data-translate="language-es">Si la educación te parece cara, no preguntes el precio de la ignorancia.</h1>

#### CSS
2.1 Crie a seguinte estrutura

  [data-translate] {
    display: block !important;
  }

  [data-translate].is-hidden {
    display: none !important;
  }


