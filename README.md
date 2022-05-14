# 'Select' Com Imagem & Script 'Translate'

### Como Usar o 'Select'

#### JS
1. Copie a pasta modules
2. Import a classe dentro do seu script
3. Instancie a classe com os parâmetros:
> const selectBlock = new SelectBlock(class_da_lista_ul, class_de_ativo, class_do_span_selecionado, class_de_cada_item_da_lista, armazena_no_local_storage?(bool), nome_armazena_no_local_storage(opcional))
4. Inicie a classe com selectBlock.init();

#### HTML
1. Crie a seguinte estrutura
```
    <div class="nav__select">
      <span class="nav__select__display" data-select="true" id=""></span>
      <ul class="nav__select__select select-box">
       <li class="select-box__item" id="language-pt-br"><a href="#"><img src="img/flag_pt_br.png" /></a></li>
        <li class="select-box__item" id="language-en"><a href="#"><img src="img/flag_en.png" /></a></li>
        <li class="select-box__item" id="language-es"><a href="#"><img src="img/flag_es.png" /></a></li>
      </ul>
    </div>
```
#### CSS
1. Crie a seguinte estrutura
```
    .nav__select {
      display: flex;
    }

    .nav__select__display {
      position: relative;
      width: 60px;
      height: 35px;
      background-color: #fff;
      cursor: pointer;
      background-repeat: no-repeat;
      background-position: 15% center;
      border-radius: 5px;
    }

    .nav__select__display::after {
      content: "";
      position: absolute;
      top: 40%;
      right: 5px;
      padding: 4px;
      box-shadow: 2px -2px 0 1px #000 inset;
      border: solid transparent;
      border-width: 0 0 2px 2px;
      transform: rotate(-45deg);
    }

    .select-box {
      display: none;
      flex-direction: column;
      position: absolute;
      width: 40px;
      top: 70px;
      background-color: #fff;
      border-radius: 5px;
    }

    .select-box.active {
      display: flex;
    }

    .select-box__item {
      width: 100%;
      cursor: pointer;
    }

    .select-box__item:hover {
      background-color: #00000095;
    }

    .select-box__item a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
```

### Como Usar o 'Translate'

#### JS
1. Copie a pasta modules
2. Import a classe dentro do seu script
3. Instancie a classe com os parâmetros:
> const Translate = new Translate(class_de_cada_item_da_lista_do_select, class_de_desativado, class_do_span_selecionado, armazena_no_local_storage(bool), nome_armazena_no_local_storage(opcional))
4. Inicie a classe com Translate.init();

#### HTML
1. Crie a seguinte estrutura
```
  <!-- no HTML tem que inserir o [data-translate='language-pt'] nas TAGS onde será traduzida -->
  <h1 data-translate="language-pt-br">Se a educação lhe parece cara, não queira saber o preço da ignorância.</h1>
  <h1 data-translate="language-en">If education seems expensive to you, don't ask the price of ignorance.</h1>
  <h1 data-translate="language-es">Si la educación te parece cara, no preguntes el precio de la ignorancia.</h1>
```
#### CSS
1. Crie a seguinte estrutura
```
  [data-translate] {
    display: block !important;
  }

  [data-translate].is-hidden {
    display: none !important;
  }
```

