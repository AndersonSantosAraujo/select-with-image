import SelectBlock from "./modules/select-block.js";
import Translate from "./modules/translate.js";

// SelectBlock(class_da_lista_ul, class_de_ativo, class_do_span_selecionado, class_de_cada_item_da_lista, armazena_no_local_storage(bool), nome_armazena_no_local_storage(opcional))
const selectBlock = new SelectBlock(
  ".select-box",
  "active",
  ".nav__select__display",
  ".select-box__item",
  true,
);
selectBlock.init();

// Translate(class_de_cada_item_da_lista_do_select, class_de_ativo, class_do_span_selecionado, armazena_no_local_storage(bool), nome_armazena_no_local_storage(opcional))
const translate = new Translate(
  "is-hidden",
  ".nav__select__display",
  ".select-box__item",
  true,
);
translate.init();
