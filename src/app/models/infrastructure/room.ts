import {Desk} from "./desk";

export class Room {
  public id: string;
  public name: string;
  public desks: Desk[] = [];
  public filialId: string;
  public filialName: string;
}
