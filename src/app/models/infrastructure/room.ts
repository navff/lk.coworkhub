import {Desk} from "./desk";

export class Room {
  public id: string;
  public name: string;
  public imageUrl: string;

  // Not send from/to backend
  public imageFilePath: string;
  public desks: Desk[] = [];
}
