import retro from "./retro.alpine";
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("retro", retro);

Alpine.start();
