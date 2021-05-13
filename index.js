// Add your code here
  function submitData(){
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: "Steve",
        email: "Poodle@whatever.com"
      })
    });
  }