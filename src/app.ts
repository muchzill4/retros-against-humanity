import { DefaultStateStorage, CardKind } from "./cards";
import Alpine from "alpinejs";

const storage = new DefaultStateStorage();

window.Alpine = Alpine;

document.addEventListener("alpine:init", () => {
  Alpine.data("cards", () => ({
    listGood: () => storage.list(CardKind.Good),
    listBad: () => storage.list(CardKind.Bad),
    listImprovement: () => storage.list(CardKind.Improvement),
  }));
});

Alpine.start();
