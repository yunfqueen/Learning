let unionType : string | number;
unionType = '小二';
unionType = 16;
unionType = null;
unionType = undefined;

function getString(sth:string|number):string{
  return sth.toString();
}