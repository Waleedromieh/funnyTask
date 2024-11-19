var noBtn=document.querySelector('#noo')

    noBtn.addEventListener('mouseover',function(e){
        console.log(e);

       var topMove=Math.round(Math.random()*210)
       var leftMove=Math.round(Math.random()*210)

        noBtn.style.top=`${topMove}px`;
        noBtn.style.left=`${leftMove}px`;
    })

  var yesBtn=document.querySelector('#yes')
  yesBtn.addEventListener('click',function(){
    window.alert('I love You Too 😍😍😍❤️💕')
  })
  