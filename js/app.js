$(function() {
	console.log('DOM Loaded');

	// returns a promise


firstPromise();
listMovies=[];
	function firstPromise() {
		let promise = new Promise((resolve, reject) => {
			resolve($.ajax({
				url:'https://api.themoviedb.org/3/list/1',
				type: 'GET',
				data: {
					api_key:'e9dab7231841520fc95146c588a1d531',
					language: 'en-US', //replace with actual data as requested by the API
				},
			}).then((data) => {	
let movieList=document.getElementById('movieList')
for(var i=0;i<40;i++){
	var movie =document.createElement('li')
	a=data['items'][i]['title'];
	movie.appendChild(document.createTextNode(data['items'][i]['title']));
	var obj={};
	obj.movie=data['items'][i]['title'];
	obj.movieId=data['items'][i]['id'];
	listMovies.push(obj)	
	movie.style.color='blue'
	movie.id=i
	movieList.style.cursor='Pointer'
	movie.addEventListener('click', function(e) {
    e = e || window.event;
secondPromise(e)
});
	movieList.appendChild(movie);
	
			}
let lis= movieList.getElementsByTagName	('li');
lis[0].click()

			}));
		});

		return promise;
	}

	// create another promise returning function here for the other api call

	function secondPromise(e) {
let lis= movieList.getElementsByTagName	('li');
for(var i=0;i<lis.length;i++){
	lis[i].style.color='blue';	
}

base_url="https://api.themoviedb.org/3/movie/"+listMovies[e.target.id].movieId
		let promise=new Promise((resolve,reject)=>{
			resolve($.ajax({
				url: base_url,
				type: 'GET',
				data: {
					api_key:'e9dab7231841520fc95146c588a1d531',
					language: 'en-US', //replace with actual data as requested by the API
				},
			}).then((data)=>{



e.target.style.color="#f4b042"
let movieBody=document.getElementById('movieBody')
let movieTitle=document.getElementById('movieTitle')
let movieOverView=document.getElementById('movieOverview')
let movieRelease=document.getElementById('movieRelease')
let movieGenere=document.getElementById('movieGenre');
let movieGenereBody=document.getElementById('movieGenreBody');

movieTitle.innerHTML=e.target.innerText;
movieOverview.innerHTML="Overview:"
movieBody.innerHTML=data['overview'];
movieRelease.innerHTML="Release Date: "+data['release_date'];
movieGenere.innerHTML="Generes: "
let genreString="";
for(var i=0;i<data['genres'].length;i++){
genreString=genreString+data['genres'][i]['name']+', '
}
movieGenereBody.innerHTML=genreString;



console.log(data)
			}));

		});


	}


	// Chain the promises for first load

	// When the load is complete, fill the data in the DOM
	// READ : Javascript DOM Apis

	// On every click on the movie in the sidebar, load data in the main div (reusing second promise maybe?)
	// READ : Event handling, onclick property of DOM Elements
});