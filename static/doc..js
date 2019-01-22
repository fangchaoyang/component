/**
 * 素材组件文档类
 * @param {素材组件路径} componentPath 
 */
var doc = function(title,docPath){    

  var docTitle;
  var docPath;
  

  /** 加载组件文档 **/
  function initComponent() {
    //组件名称
   
    axios.get(componentConfigPath)
    .then(function (response) {
      var group = response.data.group;
      var title = response.data.title;

      var liNode = document.createElement('li');
      liNode.innerHTML = `<a>${title}</a>`;
      document.querySelector(`[data-component="${group}"]`).appendChild(liNode);
      bindCompentItemClick(liNode);
    });
  }

  function loadComponentMD() {
    axios.get(compoenntMDPath)
    .then(function (response) {
      console.log(response);
      var md = window.markdownit({
        html: true,
        linkify: true,
        typographer: true,
        highlight: function (str, lang) {
          lang = 'javascript';
          if (lang && hljs.getLanguage(lang)) {
            try {
              return '<pre class="hljs"><code>' +
                     hljs.highlight(lang, str, true).value +
                     '</code></pre>';
            } catch (__) {}
          }
      
          return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        }
      });
     // var md = new MarkdownIt();
      var result = md.render(response.data);
      document.getElementById("componentFrame").contentWindow.document.body.innerHTML = result;
      //document.getElementById('docContent').innerHTML = result;
    });
  }

  /** 绑定菜单的点击事件 */
  function bindCompentItemClick(node) {
    node.addEventListener('click', function(e){
      removeAllActive();
      e.target.classList.add('is-active');
      loadComponentMD();
      //点击组件时在全局变量中放入预览路径
      document.getElementById('componentDemo').src = componentProjectPath;
      //window.componentProjectPath = componentProjectPath;
    });
  }

  /** 移除所有单击事件的active 样式 */
  function removeAllActive() {
    var activeItems = document.getElementById('componentMenuSide').querySelectorAll('.is-active');
    for(var i = 0 ;i <  activeItems.length; i++) {
        activeItems[i].classList.remove('is-active');
    }
  }




  function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    // Change this to div.childNodes to support multiple top-level nodes
    return div; 
  }

 

 function init() {
    docTitle = title;
    docPath  = docPath;
    initComponent();
 }
 init();
};   