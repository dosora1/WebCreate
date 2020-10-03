var suffix=1;
function downloadAll(oFrm){
  var oChk = oFrm.elements["file" + (suffix++)];
  if (oChk){
    location.href="file:///C:/Users/Admin/Desktop/programming/WebCreate/download.html"
  }
}
