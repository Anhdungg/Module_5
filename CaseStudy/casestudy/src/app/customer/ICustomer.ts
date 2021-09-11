import {ICustomerType} from "./icustomer-type";

export class ICustomer {
  private _id: string;
  private _name: string;
  private _dateOfBirth: string;
  private _gender: boolean;
  private _idCard: string;
  private _phoneNumber: string;
  private _email: string;
  private _address: string;
  private _customerType: ICustomerType;

  constructor(id: string, name: string, dateOfBirth: string, gender: boolean, idCard: string, phoneNumber: string,
              email: string, address: string, customerType: ICustomerType) {
    this._id = id;
    this._name = name;
    this._dateOfBirth = dateOfBirth;
    this._gender = gender;
    this._idCard = idCard;
    this._phoneNumber = phoneNumber;
    this._email = email;
    this._address = address;
    this._customerType = customerType;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
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

  get gender(): boolean {
    return this._gender;
  }

  set gender(value: boolean) {
    this._gender = value;
  }

  get idCard(): string {
    return this._idCard;
  }

  set idCard(value: string) {
    this._idCard = value;
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

  get customerType(): ICustomerType {
    return this._customerType;
  }

  set customerType(value: ICustomerType) {
    this._customerType = value;
  }
}
