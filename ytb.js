var suffix=1;
function downloadAll(oFrm){
  var oChk = oFrm.elements["file" + (suffix++)];
  if (oChk){
    if (oChk.checked)
      location.href="https://dosora1.github.io/WebCreate/download" + oChk.value;
      setTimeout(function()){
        downloadAll(oFrm)
      },1000);
  } else{
      downloadAll(oFrm);
  }
  }
}
