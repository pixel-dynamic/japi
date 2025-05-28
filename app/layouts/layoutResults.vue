<template>
  <div class="results-bg">
    <div class="results-content">
      <Nuxt />
    </div>
  </div>
</template>

<style>
.results-bg {
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #1a6cf3 0%, #3bb4e5 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', Arial, sans-serif;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.results-content {
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(30, 64, 175, 0.12);
  padding: 2.5rem 2rem;
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
}

</style>
  