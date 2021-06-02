function checkAnswer() {
    const name = (document.getElementById("welcome-msg").innerHTML).toLowerCase()
    let userInput = name.split('welcome ')
    if(userInput.length > 0) {
        userInput = userInput[1]
        console.log(userInput)
        if(userInput.includes('http://hacker.local') && userInput.includes('<a href')
            && userInput.includes('</a>')) {
                alert('Congratulations! The answer is ' + decodeBase64("SFRNTF9JTkozQ1RJME4="))
            }
        else {
            console.log("incorrent user input")
            console.log("create a link to: http://hacker.local")
        }
    } 
}

function decodeBase64(s) {
    var e={},i,b=0,c,x,l=0,a,r='',w=String.fromCharCode,L=s.length;
    var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for(i=0;i<64;i++){e[A.charAt(i)]=i;}
    for(x=0;x<L;x++){
        c=e[s.charAt(x)];b=(b<<6)+c;l+=6;
        while(l>=8){((a=(b>>>(l-=8))&0xff)||(x<(L-2)))&&(r+=w(a));}
    }
    return r;
};