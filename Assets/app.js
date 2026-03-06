const renderComingSoon = () => {
  return `
    <section class="flex flex-col items-center justify-center min-h-screen text-center px-6 py-20 bg-gradient-to-br from-deep-900 to-blue-900">
      <h1 class="text-6xl md:text-8xl font-heading font-extrabold text-text-light mb-6 animate-fadeIn">
        Coming Soon!
      </h1>
      <p class="text-xl md:text-2xl text-text-medium max-w-2xl mb-10 animate-fadeIn delay-150">
        We're working hard behind the scenes to bring you an exciting new experience. Stay tuned for updates!
      </p>
      <div class="flex items-center justify-center space-x-4 animate-fadeIn delay-300">
        <a href="https://discord.gg/zWMMUMeNuM" target="_blank" rel="noopener noreferrer" class="text-text-light hover:text-primary transition-colors">
          <i class="fab fa-discord fa-3x"></i>
        </a>
        <a href="https://www.facebook.com/parkourrushentertainment" target="_blank" rel="noopener noreferrer" class="text-text-light hover:text-primary transition-colors">
          <i class="fab fa-facebook fa-3x"></i>
        </a>
      </div>
      <p class="text-sm text-text-medium mt-10 animate-fadeIn delay-450">
        Follow us for sneak peeks and launch announcements!
      </p>
    </section>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  // Completely replace the app content with ONLY the coming soon page
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = renderComingSoon();
    document.title = "Coming Soon! ・ ParkourRush Entertainment"; // Set a specific title
  }
});