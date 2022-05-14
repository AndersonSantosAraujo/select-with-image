import SelectBlock from "./modules/select-block.js";
import Translate from "./modules/translate.js";

// SelectBlock()
const selectBlock = new SelectBlock(
  ".select-box",
  "active",
  ".nav__select__display",
  ".select-box__item",
  true,
);
selectBlock.init();

// Translate()
const translate = new Translate(
  "is-hidden",
  ".nav__select__display",
  ".select-box__item",
  true,
);
translate.init();
