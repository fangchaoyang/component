(function(){    

    function init() {
      axios.get('./config/index.json')
      .then(function (response) {
  
        initGroup(response.data.group);
        initTabEvent();
        //初始化所有素材组件
        for(var i = 0 ;i <  response.data.component.length; i++) {
          var componentPath = response.data.component[i];
          component(componentPath);
        }
      })
    }
  
    /** 初始化组 */
    function initGroup(groups) {
      console.log(groups);
      for(var i = 0 ;i <  groups.length; i++) {
        var groupNode = createElementFromHTML(
          `<p class="menu-label">${groups[i]}</p>
          <ul class="menu-list" data-component="${groups[i]}"></ul>
        `);
        document.getElementById('componentMenuSide').appendChild(groupNode);
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



  
  
    function createElementFromHTML(htmlString) {
      var div = document.createElement('div');
      div.innerHTML = htmlString.trim();
      // Change this to div.childNodes to support multiple top-level nodes
      return div; 
    }
  
   init();
  })();   