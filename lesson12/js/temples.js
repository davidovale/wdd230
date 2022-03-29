
function hide(id){
    document.getElementById("plus"+id).style.display="none";
    document.getElementById("history"+id).style.display="none";
  } 
  
  function btnPlus(id){
    document.getElementById("plus"+id).style.display="";
    document.getElementById("history"+id).style.display="";
  
  }
  
  function btnLess(id){
    document.getElementById("plus"+id).style.display="none";
    document.getElementById("history"+id).style.display="none";
  }
  
  function createLikes(like){
    const auxLike = "like"+like;
    //window.localStorage.setItem(auxLike, "no");
  
  }
  
  function setLike(like){
    const auxLike = "like"+like;
    const getItemValue = getLike(like);
    if (getItemValue == "yes"){
      localStorage.setItem(auxLike, "no");
    }else{
      localStorage.setItem(auxLike, "yes");
    }
    window.location.reload();
  }
  
  function getLike(like){
    const auxLike = "like"+like;
    return window.localStorage.getItem(auxLike);
  }