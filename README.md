<!DOCTYPE html>
<html lang="en">



  <div class="d-grid gap-3 ">
    <a href="">
        <button class="btn btn-success  w-100" type="button">en cours de création </button>
    </a>
    <a href="test.html">
        <button class="btn btn-success   w-100" type="button">Les nuages et la pluie </button>
    </a>
    
</div>


<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>La météo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body> 
    <main>
      
      <div class="container">
        <h1>Météo</h1>
        <div class="search">
          <input id="searchInput" type="text" placeholder="Paris, New York, Tokyo...">
          <button id="searchButton">Rechercher</button>
        </div>
  
        <div class="weather-card hidden">
          <h2 id="city"></h2>
          <div class="weather">
            <img id="icon" src="" width="60">
            <span id="temp"></span>
          </div>
        </div>
      </div>
  </main>
  <script src="maitrise.js"></script>
</body>
</html>