import Vue from "vue";
import {
  Button,
  Checkbox,
  Card,
  Slider,
  Select,
  Option,
  Collapse,
  CollapseItem,
  Input,
  Table,
  TableColumn,
  Message
} from "element-ui";
import { setLocale } from "../src/lang/index";
import * as components from "./view/components";
import "./assets/iconfont/iconfont.css";

const install = function (Vue, opts = {}) {
  if (opts.locale) {
    setLocale(opts.locale);
  }
  const theme = opts.theme || "light";

  require(`./style/theme/${theme}.scss`);

  //TIP:引入element组件时，需在style/index.scss中引入组件对应的scsss。确保样式变量对elemenet组件生效
  Vue.use(Button);
  Vue.use(Checkbox);
  Vue.use(Card);
  Vue.use(Slider);
  Vue.use(Select);
  Vue.use(Option);
  Vue.use(Collapse);
  Vue.use(CollapseItem);
  Vue.use(Input)
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.prototype.$message = Message;

  for (let component in components) {
    Vue.component(components[component].name, components[component]);
  }
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  locale: setLocale,
  install
};
