const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');
const defaultselect = document.querySelector('.default-img');


selectImage.addEventListener('click', function () {
	inputFile.click();
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;

		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}
})


function imagedefault(){
document.querySelector('.img-area').style.background="url('https://static.vecteezy.com/system/resources/previews/024/183/502/non_2x/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg') center center / cover";
document.querySelector('.icon').style.display='none';
document.querySelector('.avatar1').style.border= '2px solid #2c303a';

}
function imagedefault1(){
	document.querySelector('.img-area').style.background="url('https://th.bing.com/th/id/R.90226f931edc8e242e8032ec1ea2dbd5?rik=YkubBsyP2gHVfA&riu=http%3a%2f%2frealitiespodcast.com%2fwp-content%2fuploads%2f2015%2f10%2fYourportrait-1009x1024.png&ehk=4oofiT1keU4sV8Q2ajTU7agpfYIJ9RUrWDH7rudJDXk%3d&risl=&pid=ImgRaw&r=0') center center / cover";
	document.querySelector('.icon').style.display='none';
	document.querySelector('.avatar2').style.border= '2px solid #2c303a';
	}
	function imagedefault2(){
		document.querySelector('.img-area').style.background="url('https://th.bing.com/th/id/OIP.1p-0tjjcXoDmqeAuqrAj9wAAAA?rs=1&pid=ImgDetMain') center center / cover";
		document.querySelector('.icon').style.display='none';
		document.querySelector('.avatar3').style.border= '2px solid #2c303a';
		}
		function imagedefault3(){
			document.querySelector('.img-area').style.background="url('https://th.bing.com/th/id/OIP.-pON48X88GYKKXUYFO5tfQHaHa?w=500&h=500&rs=1&pid=ImgDetMain') center center / cover";
			document.querySelector('.icon').style.display='none';
			document.querySelector('.avatar4').style.border= '2px solid #2c303a';
			}
			function imagedefault4(){
				document.querySelector('.img-area').style.background="url('https://www.zillionverse.com/assets/images/team/team_02a.png') center center / cover";
				document.querySelector('.icon').style.display='none';
				document.querySelector('.avatar5').style.border= '2px solid #2c303a';
				}




const submitButton = document.getElementById("submit");
const input = document.getElementById("location");
const para = document.getElementById("para");

input.addEventListener("keyup", (e) => {
    const  value = e.currentTarget.value;
   if(value == ""){
    submitButton.disabled = true;
    para.style.display = "none";

   } else{
    submitButton.disabled = false;
    para.style.display = "block";
   }
 
});


function show(){
	document.querySelector('.img1').style.position = "absolute";
	
	document.querySelector('.h21').style.position = "relative";

	document.querySelector('.boxa1-p').style.display="block";
	document.querySelector('.boxa1-p').style.position="relative";
	document.querySelector('.btn-1').style.position="relative";
	document.querySelector('.box1').style.border="2px solid #FF8096";
	document.querySelector('.btn-1').style.backgroundColor="#FF007F";

}
function show1(){
	document.querySelector('.img2').style.position = "absolute";
	
	document.querySelector('.h22').style.position = "relative";

	document.querySelector('.boxa2-p').style.display="block";
	document.querySelector('.boxa2-p').style.position="relative";
	document.querySelector('.btn-2').style.position="relative";
	document.querySelector('.box2').style.border="2px solid #FF8096";
	document.querySelector('.btn-2').style.backgroundColor="#FF007F";

}
function show2(){
	document.querySelector('.img3').style.position = "absolute";
	
	document.querySelector('.h23').style.position = "relative";

	document.querySelector('.boxa3-p').style.display="block";
	document.querySelector('.boxa3-p').style.position="relative";
	document.querySelector('.btn-3').style.position="relative";
	document.querySelector('.box3').style.border="2px solid #FF8096";
	document.querySelector('.btn-3').style.backgroundColor="#FF007F";

}


function select(){
	document.querySelector('.head-img').style.display="block"; 
}



function validate(){
	var name = document.getElementById("name");
	var username = document.getElementById("username");
	var email = document.getElementById("inputEmail4");
	var password = document.getElementById("inputPassword4");
	var checkbox= document.getElementById("flexCheckDefault");
	if(username.value == "" || name.value == "" || email.value == "" || password.value == ""){
		alert('No blank values allowed');
		return false;
	}
	else{
true;
	}
}


function myfunction(){
	document.getElementById("field1").value=document.getElementById("field2").value;
}
