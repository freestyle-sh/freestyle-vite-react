import { cloudstate, invalidate, useCloud } from "freestyle-sh";

@cloudstate
export class Counter {
  static id = "Counter";
  value = 0;

  increase() {
    this.value++;
    invalidate(useCloud<typeof Counter>("Counter").getValue);
    return { value: this.value };
  }

  decrease() {
    this.value--;
    invalidate(useCloud<typeof Counter>("Counter").getValue);
    return { value: this.value };
  }

  reset() {
    this.value = 0;
    invalidate(useCloud<typeof Counter>("Counter").getValue);
    return { value: this.value };
  }

  getValue() {
    return { value: this.value };
  }
}
