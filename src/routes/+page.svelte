<script>
  import gif from "$lib/images/twerk.gif";
  let butt, image, loca, log, header;
  let tries = 0;
  let pix = 200;
  const moveButton = () => {
    if (tries < 10) {
      pix -= 20;
      tries += 1;
      let changeTop =
        Math.random() * (window.innerHeight - 50 - butt.offsetHeight);
      let changeLeft =
        Math.random() * (window.innerWidth - 50 - butt.offsetWidth);
      butt.style.marginTop = changeTop + "px";
      butt.style.marginLeft = changeLeft + "px";
      butt.style.height = pix + "px";
      butt.style.width = pix + "px";
    } else if (tries == 10) {
      loca.style.display = "block";
      log.style.display = "block";
      image.style.display = "block";
      butt.style.display = "none";
      header.innerText = "Got you :)";
    }
  };
</script>

<h1>HOME</h1>
<h2 bind:this={header}>Click on this button to log in</h2>
<img bind:this={image} src={gif} alt="gif" />

<a bind:this={loca} href="/locations">Locations</a>
<a bind:this={log} href="/login">Login</a>

<div>
  <button bind:this={butt} on:focus={() => {}} on:mouseover={moveButton} />
</div>

<style>
  div {
    text-align: center;
  }
  button {
    height: 200px;
    width: 200px;
  }
  a {
    display: none;
    text-align: center;
  }
  h1,
  h2 {
    text-align: center;
  }
  img {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: none;
    height: auto;
    width: 400px;
  }
</style>
