// 全局通用方法
function goHome(){
  location.href = 'index.html'
}
function goCart(){
  location.href = 'cart.html'
}
function goService(){
  location.href = 'service.html'
}

// 搜索功能
function initSearch(){
  let input = document.getElementById('searchInput')
  if(input){
    input.addEventListener('input', function(){
      let val = this.value.toLowerCase()
      let items = document.querySelectorAll('.item')
      items.forEach(el=>{
        let name = el.querySelector('.info p').innerText.toLowerCase()
        el.style.display = name.includes(val) ? '' : 'none'
      })
    })
  }
}

// 页面加载后执行
window.onload = function(){
  initSearch()
}