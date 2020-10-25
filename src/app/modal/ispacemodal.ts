export interface ISpaceModal {
  mission_name: string;
  mission_id: Array<string>;
  launch_year: string;
  launch_success: boolean;
  flight_number: number;
  tbd: boolean;
  links: ILink;
}
export interface ILink {
  mission_patch: string;
}
