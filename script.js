const tree = document.getElementById('tree');

const btn = document.getElementById('partyBtn');

const audio = document.getElementById('xmasSound');

const btn2 = document.getElementById('snowBtn');

let isParty = false;

btn.addEventListener('click',async()=>{

isParty = !isParty;

if(isParty){
	
	tree.classList.add('party');

    btn.textContent = '🎵演出停止';

    try{
        audio.currentTime = 0;

        await audio.play();
    }catch(e){
        console.warn('Audio play was blocked:',e);
    }

    }else{
        tree.classList.remove('party');

        btn.textContent = '✨クリック演出';

        audio.pause();
        audio.currentTime = 0;
    }
});

let isSnowing = false;

if(btn2){
    snowBtn.addEventListener('click',()=>{
        isSnowing = !isSnowing;

        if(isSnowing){
            document.body.classList.add('snowing');
            btn2.textContent = '❄雪を止める';
        } else{
            document.body.classList.remove('snowing');
            btn2.textContent = '⛄雪を降らす';
        }
    });
}