<script>
  let email = '';
  let password = '';

  function handleSubmit() {
    // do something with the email and password
    console.log(email, password);
    // for example you can use fetch to post the data to a server
    //fetch('https://your-server.com/login', {
  
        
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <label>
      Email:
      <input type="email" bind:value={email} required />
    </label>
    <label>
      Password:
      <input type="password" bind:value={password} required />
    </label>
    <button type="submit">Register</button>
  </form>