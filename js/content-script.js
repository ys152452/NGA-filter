(function () {
  console.log("ngaFilter:加载成功");
  let { search } = location;
  let key = String("tid");
  const today = new Date().getTime();
  if (search.indexOf(key) > -1) {
    let outArr = document.getElementsByClassName("forumbox");
    for (let i = 0; i < outArr.length; i++) {
      let arr = outArr[i].getElementsByClassName("numeric");
      if (arr.length) {
        for (let j = 0; j < arr.length; j++) {
          let name = arr[j].getAttribute("name");
          if (name == "regdate") {
            let curReg = new Date(`20${arr[j].innerHTML}`).getTime();
            if (today - curReg < 7879680000) {
              outArr[i].style.display = "none";
            }
          }
        }
      }
    }
  }
})();
