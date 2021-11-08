function startClassoficator(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/puQLy5Ar1/model.json",modelReadysab);
}

function modelReadysab(){
    classifier.classify(gotResult);
}
function gotResult(error , results) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(results);
        randor = Math.floor(Math.random() * 255) + 1;
        randog = Math.floor(Math.random() * 255) + 1;
        randob = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_labele").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("re_cult_confence").innerHTML = 'Accurecy - '+ (results[0].confidence *100).toFixed(2)+" %";
        
        document.getElementById("result_labele").style.color = "rgb("+randor + "," + randog + "," + randob + ")";
        document.getElementById("re_cult_confence").style.color = "rgb("+randor + "," + randog + "," + randob + ")";

        img00 =  document.getElementById('aliens-01');
        img01 =  document.getElementById('aliens-02');
        img02 =  document.getElementById('aliens-03');
        img03 =  document.getElementById('aliens-04');

        if (results[0].label == "Clap"){
            img00.src = 'aliens-01.gif';
            img01.src = 'aliens-02.png';
            img02.src = 'aliens-03.png';
            img03.src = 'aliens-04.png';
        }
        else if (results[0].label == "bell"){
            img00.src = 'aliens-01.png';
            img01.src = 'aliens-02.gif';
            img02.src = 'aliens-03.png';
            img03.src = 'aliens-04.png';
        }
        else if (results[0].label == "Snap"){
            img00.src = 'aliens-01.png';
            img01.src = 'aliens-02.png';
            img02.src = 'aliens-03.gif';
            img03.src = 'aliens-04.png';
        }
        else if (results[0].label == "Background noise"){
            img00.src = 'aliens-01.png';
            img01.src = 'aliens-02.png';
            img02.src = 'aliens-03.png';
            img03.src = 'aliens-04.gif';
        }
    }

}