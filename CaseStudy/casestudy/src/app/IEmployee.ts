export class IEmployee {
  private _id: number;
  private _name: string;
  private _dateOfBirth: string;
  private _idCard: string;
  private _salary: number;
  private _phoneNumber: string;
  private _email: string;
  private _address: string;
  private _position: string;
  private _educationDegree: string;
  private _division: string;

  constructor(id: number, name: string, dateOfBirth: string, idCard: string, salary: number, phoneNumber: string,
              email: string, address: string, position: string, educationDegree: string, division: string) {
    this._id = id;
    this._name = name;
    this._dateOfBirth = dateOfBirth;
    this._idCard = idCard;
    this._salary = salary;
    this._phoneNumber = phoneNumber;
    this._email = email;
    this._address = address;
    this._position = position;
    this._educationDegree = educationDegree;
    this._division = division;
  }


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

  get dateOfBirth(): string {
    return this._dateOfBirth;
  }

  set dateOfBirth(value: string) {
    this._dateOfBirth = value;
  }

  get idCard(): string {
    return this._idCard;
  }

  set idCard(value: string) {
    this._idCard = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get position(): string {
    return this._position;
  }

  set position(value: string) {
    this._position = value;
  }

  get educationDegree(): string {
    return this._educationDegree;
  }

  set educationDegree(value: string) {
    this._educationDegree = value;
  }

  get division(): string {
    return this._division;
  }

  set division(value: string) {
    this._division = value;
  }
}
