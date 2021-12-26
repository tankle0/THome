interface MetaType{
  title:String,
  icon:String
}

export interface MenuType{
  path:string,
  meta:MetaType,
  children?:Array<MenuType>
}