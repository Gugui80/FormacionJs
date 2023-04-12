fetch("txt/troll.txt")
  .then(response => {
    return response.text();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => { 
    console.log(error) 
})