<script>
  /** @type {import('./$types').ActionData} */

  function handleSubmit() {
    // do something with the email and password
    console.log(username, password);
    throw redirect(307, "/");
    // for example you can use fetch to post the data to a server
    //fetch('https://your-server.com/login', {
  }
  async function getJWT() {
    try {
      const response = await fetch(`http://localhost:3000/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (!response.ok) {
        console.log("yo");
        throw redirect(307, "/");
      } else {
        //let t = await response.json();
        //console.log(t.jwt);
        //return response.json();
      }
    } catch (error) {
      console.error(error);
    }
  }
</script>

<form method="POST">
  <label>
    Username
    <input name="username" type="text" required />
  </label>
  <label>
    Password
    <input name="password" type="password" required />
  </label>
  <button type="submit">Log in</button>
</form>
<a href="/register">register</a>
