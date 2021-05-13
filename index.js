// Add your code here
  submitData(){
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        userName: "Byron",
        userPassword: "Poodle"
      })
    });
  }