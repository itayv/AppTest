export interface IjokeItem
{
  category:string,
  type:string,
  setup:string,
  delivery:string,
  joke:string,
  id:string
}

export interface IDialogData {
  title: string,
  type: string,
  content:Array<IjokeItem>,
}
