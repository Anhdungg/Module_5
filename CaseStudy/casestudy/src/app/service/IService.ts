export class IService {
  private _id: string;
  private _name: string;
  private _area: number;
  private _cost: number;
  private _maxPeople: number;
  private _rentType: string;

  constructor(id: string, name: string, area: number, cost: number, maxPeople: number, rentType: string) {
    this._id = id;
    this._name = name;
    this._area = area;
    this._cost = cost;
    this._maxPeople = maxPeople;
    this._rentType = rentType;
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

  get area(): number {
    return this._area;
  }

  set area(value: number) {
    this._area = value;
  }

  get cost(): number {
    return this._cost;
  }

  set cost(value: number) {
    this._cost = value;
  }

  get maxPeople(): number {
    return this._maxPeople;
  }

  set maxPeople(value: number) {
    this._maxPeople = value;
  }

  get rentType(): string {
    return this._rentType;
  }

  set rentType(value: string) {
    this._rentType = value;
  }
}

export class IVilla extends IService{
  private _standard: string;
  private _description: string;
  private _areaPool: number;
  private _numberOfFloor: number;

  constructor(id: string, name: string, area: number, cost: number, maxPeople: number, rentType: string, standard: string,
              description: string, areaPool: number, numberOfFloor: number) {
    super(id, name, area, cost, maxPeople, rentType);
    this._standard = standard;
    this._description = description;
    this._areaPool = areaPool;
    this._numberOfFloor = numberOfFloor;
  }

  get standard(): string {
    return this._standard;
  }

  set standard(value: string) {
    this._standard = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get areaPool(): number {
    return this._areaPool;
  }

  set areaPool(value: number) {
    this._areaPool = value;
  }

  get numberOfFloor(): number {
    return this._numberOfFloor;
  }

  set numberOfFloor(value: number) {
    this._numberOfFloor = value;
  }
}

export class IHouse extends IService{
  private _standard: string;
  private _description: string;
  private _numberOfFloor: number;

  constructor(id: string, name: string, area: number, cost: number, maxPeople: number, rentType: string, standard: string,
              description: string, areaPool: number, numberOfFloor: number) {
    super(id, name, area, cost, maxPeople, rentType);
    this._standard = standard;
    this._description = description;
    this._numberOfFloor = numberOfFloor;
  }

  get standard(): string {
    return this._standard;
  }

  set standard(value: string) {
    this._standard = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get numberOfFloor(): number {
    return this._numberOfFloor;
  }

  set numberOfFloor(value: number) {
    this._numberOfFloor = value;
  }
}

export class IRoom extends IService{
  private _attachService: AttachService;

  constructor(id: string, name: string, area: number, cost: number, maxPeople: number, rentType: string,
              attachService: AttachService) {
    super(id, name, area, cost, maxPeople, rentType);
    this._attachService = attachService;
  }


  get attachService(): AttachService {
    return this._attachService;
  }

  set attachService(value: AttachService) {
    this._attachService = value;
  }
}

class AttachService {
  private _id: number;
  private _name: string;
  private _cost: number;
  private _unit: number;
  private _status: string;

  constructor(id: number, name: string, cost: number, unit: number, status: string) {
    this._id = id;
    this._name = name;
    this._cost = cost;
    this._unit = unit;
    this._status = status;
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

  get cost(): number {
    return this._cost;
  }

  set cost(value: number) {
    this._cost = value;
  }

  get unit(): number {
    return this._unit;
  }

  set unit(value: number) {
    this._unit = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }
}
