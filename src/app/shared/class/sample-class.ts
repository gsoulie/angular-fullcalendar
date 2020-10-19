export class Sample {

  // tslint:disable-next-line: variable-name
  private _id: number;
  // tslint:disable-next-line: variable-name
  private _name: string;
  // tslint:disable-next-line: variable-name
  private _comment: string;
  // tslint:disable-next-line: variable-name
  private _active: boolean;


  constructor({ id = -1, name = '', comment = '', active = false}) {
    this.id = id;
    this.name = name;
    this.comment = comment;
    this.active = active;
  }

  /* GETTERS - SETTERS */
  get id(): number {
      return this._id;
  }
  set id(value: number) {
      this._id = value;
  }

  get name(): string {
      return this._name;
  }
  set name(value: string) {
      this._name = value;
  }

  get comment(): string {
      return this._comment;
  }
  set comment(value: string) {
      this._comment = value;
  }

  get active(): boolean {
      return this._active;
  }
  set active(value: boolean) {
      this._active = value;
  }
}
