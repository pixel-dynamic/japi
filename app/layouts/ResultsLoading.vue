<template>
  <div class="results-loading-layout">
    <div class="content-wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultsLoadingLayout'
}
</script>

<style>
.results-loading-layout {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1f36 0%, #2d3748 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.content-wrapper {
  width: 100%;
  max-width: 600px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  padding: 2rem;
}

/* Estilos para los mensajes */
.message {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.message-text {
  color: #1a1f36;
}

.message-text .highlight {
  color: #4f46e5 !important;
  background: rgba(79, 70, 229, 0.1) !important;
  padding: 0.1rem 0.3rem !important;
  border-radius: 4px !important;
  display: inline-block !important;
}

/* Estilos para las insignias de seguridad */
.security-badge {
  background: rgba(79, 70, 229, 0.1);
  color: #4f46e5;
  border: 1px solid rgba(79, 70, 229, 0.2);
}

/* Estilos para el contenedor Lottie */
.lottie-wrapper {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

/* Animaciones */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(79, 70, 229, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);
  }
}

.message-icon {
  animation: pulse 2s infinite;
}

/* Responsive */
@media (max-width: 768px) {
  .results-loading-layout {
    padding: 1rem;
  }
  
  .content-wrapper {
    padding: 1.5rem;
  }
}
</style> 