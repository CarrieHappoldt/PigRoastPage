export class Guest {
  public name: string;
  public amount: number;
  public dish: string;

  constructor(name: string, amount: number, dish: string){
    this.name = name;
    this.amount = amount;
    this.dish = dish;
  }
}