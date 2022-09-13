/* BD DESARROLLO
//var ss = SpreadsheetApp.openById("140NMdDlIlxVAwPwOrPOoHAjn4XBhhpZ_f_D6rdTJHcU");
// BD PRODUCCION
var ss = SpreadsheetApp.openById("1BtC-c6LkqELkAhcFTyvCzLlf6MZ5ehk-TQ0fDzdPokc");
var sheetUsuarios = ss.getSheetByName('Usuarios');
var sheetClienteN1 = ss.getSheetByName('clientesNivel1');
var sheetConfiguracion = ss.getSheetByName('configuracion');
var sheetPaises = ss.getSheetByName('paises');
*/

 

function doGet(e){
  var template = HtmlService.createTemplateFromFile('index');
  var html = template.evaluate()
    .setTitle('Transferencias Rojas') // Set Title 
    .setFaviconUrl("https://docs.google.com/uc?id=1DFViidwKD6GJQZERQB7gghyLS9wvtIKa#.ico")
    .setSandboxMode(HtmlService.SandboxMode.IFRAME) //This method now has no effect — previously it set the sandbox mode used for client-side scripts
    .addMetaTag('viewport', 'width=device-width, initial-scale=1') // It is very important tag for Responsive 
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL) // Sets the state of the page's X-Frame-Options header, which controls clickjacking prevention.
  return html;
}


function include ( fileName ){
  return HtmlService.createHtmlOutputFromFile( fileName ).getContent();
}




 
