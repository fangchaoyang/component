function showProgress(progess) {
    if(progess > 0 ) {
        document.getElementById('progressBar').style.display = 'block';
    }
    document.getElementById('paceProgress').style.transform = `translate3d(${progess}%, 0px, 0px)`;

 
    if(progess === 100 ) {
      
        setTimeout(() => {
            document.getElementById('progressBar').style.display = 'none';
             document.getElementById('paceProgress').style.transform = `translate3d(0%, 0px, 0px)`;
           // hideProgress();          
        }, 1000);
     
    }
}

function hideProgress(){
   showProgress(0);
}