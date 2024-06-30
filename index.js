let convert=document.querySelector("button.convert");
let vid_title=document.querySelector("p.video-title");
let search=document.querySelector("input.search");
let output=document.querySelector("div.output");
let video=document.querySelector("video");
let internetError=document.querySelector("p.internet-error");

// Adding Some GSAP
let t=gsap.timeline();

t.from("div.top-box,div.web",{
    y:-70,
    stagger:0.4,
    opacity:0
})

t.from("div.main-box",{
    opacity:0,
    x:-300
})

t.from("p.insert-url,div.search-part",{
    opacity:0,
    stagger:0.3,
    x:-30
})

t.to("h2.yt-to-mp3",{
    duration:1.5,
    text:"YouTube to MP4 Converter"
})

t.to("p.yt-desc",{
    duration:3,
    text:"Our YouTube to MP4 Converter allows you to convert your favorite YouTube videos to MP4 (video) files and to download them for FREE. YT2Video works on your desktop, tablet and mobile device without the installation of any additional apps. The usage of YT2Video is free, and safe!"
})

convert.onclick=()=>{

    output.style.display="block";
    let data=search.value;

    let searchYT=()=>{

        const url1 = `https://youtube-search-and-download1.p.rapidapi.com/Download?url=${data}`;
        const options1 = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'c0e897e06bmshf1b07b02427bc79p1edb79jsn0132d0db5ef9',
                'x-rapidapi-host': 'youtube-search-and-download1.p.rapidapi.com'
            }
        };

        const url2 = `https://youtube-search-and-download1.p.rapidapi.com/SearchUrl?url=${data}`;
        const options2 = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'c0e897e06bmshf1b07b02427bc79p1edb79jsn0132d0db5ef9',
                'x-rapidapi-host': 'youtube-search-and-download1.p.rapidapi.com'
            }
        };
           
       
    
        async function getvideo(){
    
            try{
                const response2 = await fetch(url2, options2);
                const result2 = await response2.json();
                const response1 = await fetch(url1, options1);
                const result1 = await response1.json();
                vid_title.style.display="block"; 
                vid_title.innerText=result2["title"];
                internetError.style.display="none";
                video.style.display="block";
                video.src=result1["urlMuxed"];
                   
            }
            catch(err){
                internetError.style.display="block";
                internetError.innerText="Please Check Your Internet :(";
                vid_title.style.display="none"; 
                video.style.display="none";
    
            }
               
        }
         getvideo()
        }

    if(data.includes("https://www.youtube.com/") || data.includes("https://youtu.be/")){
        searchYT();
    }
    else{
        alert("Invalid Youtube URL :(")
    }

}