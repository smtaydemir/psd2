var PSD = require('psd');
var colors = require('colors');
var args = process.argv;
args.splice(0,2);

if(args[0]){

  if(!args[1]){
    PSD.open(args[0]).then(function (psd) {
      return psd.image.saveAsPng('psd2.png');
    }).then(function () {
      console.log(colors.green('File was converted!'));
    });
  }else{
    PSD.open(args[0]).then(function (psd) {
      return psd.image.saveAsPng(args[1]);
    }).then(function () {
      console.log(colors.green('It was recorded in a special file name!'));
    });
  }

}else{
  console.error(colors.red('Please specify a file'));
}
