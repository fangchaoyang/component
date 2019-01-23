(function(){    

    function init() {
      axios.get('./config/index.json')
      .then(function (response) {
  

        //initGroup(response.data.group);
        initTabEvent();
        initComponent(response.data);
        initDoc(response.data);
        initLabelEvent();
        //初始化所有素材组件
        /* for(var i = 0 ;i <  response.data.component.length; i++) {
          var componentPath = response.data.component[i];
          component(componentPath);
        } */
      })
    }

    function initDoc(data) {
        var groupNode = createElementFromHTML(
            `<p id="docLabel" class="menu-label">开发手册</p>
            <ul id="docMenu" class="menu-list"  ></ul>`
        );
          document.getElementById('docMenuContent').appendChild(groupNode);
        for(var i = 0 ;i <  data.docs.length; i++) {
            doc(data.docs[i].tag, data.docs[i].path)
          }
    }

    function initComponent(data) {
        initGroup(data.group);
         //初始化所有素材组件
         for(var i = 0 ;i <  data.component.length; i++) {
            var componentPath = data.component[i];
            component(componentPath);
          }
    }
  
    /** 初始化组 */
    function initGroup(groups) {
      console.log(groups);
      for(var i = 0 ;i <  groups.length; i++) {
        var groupNode = createElementFromHTML(
          `<p class="menu-label">${groups[i]}</p>
          <ul class="menu-list" data-component="${groups[i]}"></ul>
        `);
        document.getElementById('componentMenuContent').appendChild(groupNode);
      }
    }

    function initTabEvent(){
        var tabs = document.getElementById('contentTabs').querySelectorAll('li');
        for(var i = 0 ;i < tabs.length; i++) {
            var tab = tabs[i];
            tab.addEventListener('click', function(e){
                removeAllTabActive();
                hideAllComponentFrame();
                
                e.target.parentNode.classList.add('is-active');
                var targetId = e.target.parentNode.getAttribute('data-target');
                
                document.getElementById(targetId).style.display = 'block';
            });
        }
    }

    /**移除所有tab的激活样式 */
    function removeAllTabActive() {
        var activeItems = document.getElementById('contentTabs').querySelectorAll('.is-active');
        for(var i = 0 ;i <  activeItems.length; i++) {
            activeItems[i].classList.remove('is-active');
        }
    }

    /**隐藏组件的frame */
    function hideAllComponentFrame() {
        var frames = document.querySelectorAll('.component-frame');
        for(var i = 0 ;i <  frames.length; i++) {
            frames[i].style.display = 'none';
        }
    }

    /** 文档类型事件初始化  */
    function initLabelEvent() {
        document.getElementById('componentLabel').addEventListener('click',()=>{
            document.getElementById('componentMenuContent').style.display = "block";
            document.getElementById('docMenuContent').style.display = "none";
        })
        document.getElementById('docLabel').addEventListener('click',()=>{
            document.getElementById('componentMenuContent').style.display = "none";
            document.getElementById('docMenuContent').style.display = "block";
        })
    }

  
  
    function createElementFromHTML(htmlString, id) {
      var div = document.createElement('div');
      div.innerHTML = htmlString.trim();
      if(id) {
          div.id = id;
      }
      // Change this to div.childNodes to support multiple top-level nodes
      return div; 
    }
  
   init();
  })();   