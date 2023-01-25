<script>
  import { redirect } from "@sveltejs/kit";
  let username = "";
  let password = "";

  function handleSubmit() {
    // do something with the email and password
    console.log(username, password);
    //throw redirect(307, '/');
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

<form on:submit|preventDefault={getJWT}>
  <label>
    Username:
    <input type="text" bind:value={username} required />
  </label>
  <label>
    Password:
    <input type="password" bind:value={password} required />
  </label>
  <button type="submit">Login</button>
</form>
<a href="/register">register</a>
